# Mealset — лендинг Саши

Лендинг ИИ-нутрициолога Саши в Telegram. Основной вариант сохранён с исправленной
адаптивной вёрсткой, актуальным диалогом «Поменять планы» и отдельным фото пасты
болоньезе в секции «Вкусно. Разнообразно. По-твоему.».

| Адрес    | Страница                     |
| -------- | ---------------------------- |
| `/`      | Основной вариант, русский    |
| `/en`    | Основной вариант, английский |
| `/v2`    | Второй вариант, русский      |
| `/en/v2` | Второй вариант, английский   |

Кнопки ведут в [@mealset_bot](https://t.me/mealset_bot). Серверная часть бота,
его база и секреты в этот репозиторий не входят.

## GitHub Pages — для тестирования

Сайт: **https://d1bevz.github.io/mealset-landing/**.
Русская и английская версии доступны в корне сайта и по `en/`;
второй вариант — по `v2/` и `en/v2/`.

После каждого изменения в `main` workflow **Publish GitHub Pages** собирает
лендинг, проверяет страницы и ресурсы, затем публикует его. Результат виден
во вкладке **Actions**. Workflow также можно запустить вручную через
**Run workflow** на ветке `main`. Pull request проходит проверку сборки
без публикации.

В **Settings → Pages → Build and deployment → Source** должно быть
выбрано **GitHub Actions**. Свой домен и VPS для этого режима не нужны.

Адрес и префикс проекта берутся из настроек Pages при сборке.
Для воспроизведения такой сборки локально:

```bash
SITE_URL=https://d1bevz.github.io \
NEXT_PUBLIC_BASE_PATH=/mealset-landing \
NEXT_PUBLIC_TRAILING_SLASH=true \
bun run build
```

Готовые файлы находятся в `dist/client`. Этот каталог размещается
под префиксом `/mealset-landing/`; префикс уже учтён в ссылках,
картинках, шрифте и метаданных.

## Запуск на VPS

Нужны Git, Docker Engine и Docker Compose v2. Для Ubuntu:
[официальная установка Docker](https://docs.docker.com/engine/install/ubuntu/).
Команды ниже выполняются пользователем с доступом к Docker.

```bash
git clone https://github.com/d1bevz/mealset-landing.git
cd mealset-landing
cp .env.example .env
nano .env
```

В `.env` замените `https://mealset.example` на реальный адрес сайта.

```dotenv
SITE_URL=https://ВАШ-ДОМЕН
LANDING_BIND_IP=127.0.0.1
LANDING_PORT=8080
LANDING_IMAGE_TAG=local
```

`SITE_URL` — полный origin без пути. Он попадает в canonical, Open Graph и
ссылки языковых версий **при сборке**; после смены домена пересоберите образ.
`LANDING_PORT` можно изменить, если 8080 уже занят другим приложением.

```bash
docker compose up -d --build --wait
docker compose ps
curl -I http://127.0.0.1:8080/
```

Контейнер слушает только localhost VPS. Для доступа по домену подключите его
к существующему reverse proxy. В
[`deploy/reverse-proxy.conf.example`](deploy/reverse-proxy.conf.example)
есть пример для Nginx: замените домен и, при необходимости, порт.
Добавьте конфигурацию как отдельный virtual host, проверьте `sudo nginx -t`
и перезагрузите Nginx командой `sudo systemctl reload nginx`.

Направьте A-запись домена на IP VPS; AAAA добавляйте только при настроенном
IPv6. После этого выпустите TLS-сертификат для домена существующим на сервере
способом. Для нового Certbot используйте
[официальную инструкцию под вашу ОС](https://certbot.eff.org/instructions).
Внешнему трафику нужны порты 80/443 reverse proxy; порт контейнера открывать
наружу не требуется.

Если на VPS уже работает Caddy или Traefik, используйте его и направьте домен
на `http://127.0.0.1:8080`. Для proxy в другом контейнере потребуется общая
Docker-сеть и upstream `landing:8080`: localhost внутри другого контейнера
не указывает на VPS.

## Что работает на сервере

React 19 + Vinext/Vite собирают HTML, CSS и клиентский JavaScript.
В финальный Docker-образ попадает только `dist/client` и Nginx.
Интерактивные диалоги работают в браузере.
Сборка не зависит от Sites, Cloudflare Workers или аккаунта ChatGPT.

Compose задаёт контейнеру лимиты **128 МБ RAM и 0.5 CPU**, один worker Nginx,
healthcheck, автоперезапуск и ротацию логов. Это лимиты конфигурации, а не
результат нагрузочного теста. **Они не ограничивают сборку образа**:
компиляция требует больше памяти и CPU. При нехватке ресурсов собирайте
образ на отдельной машине той же архитектуры.

Файловая система контейнера доступна только для чтения; временные файлы Nginx
хранятся в tmpfs. Постоянного тома, Postgres, Redis, Node-процесса и GPU для
этого лендинга не нужно. HTML перепроверяется браузером при загрузке,
статические ресурсы кешируются на один час.

## Обновление и откат

Перед обновлением запишите текущий коммит: `git rev-parse HEAD`.

```bash
git switch main
git pull --ff-only
docker compose up -d --build --wait
docker compose logs --tail=50 landing
```

Для отката переключитесь на записанный коммит и пересоберите контейнер:

```bash
git switch --detach COMMIT_SHA
docker compose up -d --build --wait
```

Файл `.env` не отслеживается Git и сохраняется. После отката
`git switch main` возвращает checkout на основную ветку.

## Разработка и проверки

Нужны Node.js >= 22.13 и Bun 1.3.11. Локальный запуск:

```bash
bun install --frozen-lockfile
bun run dev
```

Перед публикацией:

```bash
bun run typecheck
bun run lint
SITE_URL=https://mealset.example bun run build
```

`bun run build` автоматически проверяет наличие всех четырёх HTML-страниц,
локализации, метаданных домена, ссылок на Telegram и актуальных изображений.
Проверка запущенного контейнера:

```bash
CHECK_URL=http://127.0.0.1:8080 bun run verify:http
```

Workflow **Check landing** проверяет типы, линт, Docker-сборку, страницы,
ресурсы, редиректы и ответы 404. Он не подключается к VPS: выкладка на VPS
выполняется командами выше. Публикацией на GitHub Pages занимается отдельный
workflow **Publish GitHub Pages**.

## Файлы

- `app/copy.ts`, `app/premium/copy.ts` — тексты RU/EN.
- `app/landing.tsx`, `app/globals.css` — основной дизайн.
- `app/premium/` — второй дизайн.
- `public/assets/`, `public/fonts/` — изображения и локальный шрифт Onest.
- `Dockerfile`, `compose.yaml`, `deploy/` — развёртывание на VPS.
- `lib/site-url.ts` — проверка адреса сайта для SEO.

Статическая сборка также подходит для существующего Nginx без Docker:
разместите содержимое `dist/client` в document root и перенесите правила
из `deploy/nginx.conf`. Пути `/en`, `/v2`, `/en/v2` соответствуют файлам
`en.html`, `v2.html`, `en/v2.html`; нужен `try_files $uri.html $uri =404`.
Корень отдельно отдаёт `index.html`. В текущей версии Vinext экспорт со
`trailingSlash: true` пропускает страницы из-за редиректов, поэтому используется
`false`, а Nginx приводит адреса с завершающим слешем к адресам без него.

Основа сборки:
[Vinext static export](https://github.com/cloudflare/vinext/tree/main/examples/static-export).
Шрифт распространяется с лицензией [OFL](public/fonts/OFL.txt).
