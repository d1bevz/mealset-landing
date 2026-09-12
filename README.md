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

## Продакшен — https://mealset.tech (GitHub Pages)

Сайт живёт на GitHub Pages с собственным доменом **mealset.tech**; VPS для
него не нужен. После каждого изменения в `main` workflow **Publish GitHub
Pages** собирает лендинг, проверяет страницы и ресурсы, затем публикует его.
Результат виден во вкладке **Actions**. Workflow также можно запустить вручную
через **Run workflow** на ветке `main`. Pull request проходит проверку сборки
без публикации.

В **Settings → Pages** должно быть: **Source — GitHub Actions**, **Custom
domain — mealset.tech**, **Enforce HTTPS — включено**. Адрес сайта и префикс
пути берутся из этих настроек при сборке: `SITE_URL=https://mealset.tech`,
префикс пустой. Для воспроизведения такой сборки локально:

```bash
SITE_URL=https://mealset.tech \
NEXT_PUBLIC_TRAILING_SLASH=true \
bun run build
```

Готовые файлы находятся в `dist/client`; `www.mealset.tech` и `http://`
GitHub сам перенаправляет на `https://mealset.tech`.

### DNS (Hostinger hPanel)

| Тип   | Имя   | Значение          |
| ----- | ----- | ----------------- |
| A     | `@`   | `185.199.108.153` |
| A     | `@`   | `185.199.109.153` |
| A     | `@`   | `185.199.110.153` |
| A     | `@`   | `185.199.111.153` |
| CNAME | `www` | `d1bevz.github.io` |

Нужны все четыре A-записи. CNAME `www` должен указывать на `d1bevz.github.io`,
а не на `mealset.tech`: иначе GitHub не считает `www` пригодным для HTTPS.

### Две ловушки при подключении домена

1. Если custom domain задан раньше, чем DNS стал верным, GitHub может так и не
   начать выпуск сертификата: `gh api repos/d1bevz/mealset-landing/pages`
   часами показывает `"https_certificate": null` при зелёном
   `.../pages/health`. Лечение — снять и заново задать домен:
   `gh api -X PUT repos/d1bevz/mealset-landing/pages --input - <<< '{"cname":null}'`,
   затем `gh api -X PUT repos/d1bevz/mealset-landing/pages -f cname=mealset.tech`.
   Сертификат появляется в течение минуты; GitHub продлевает его сам.
2. Сборка, запущенная до выпуска сертификата, получает от `configure-pages`
   origin `http://mealset.tech`, и canonical/hreflang/Open Graph уходят с
   `http://`. После включения **Enforce HTTPS** перезапустите workflow.

Для проверки: `curl -sI https://mealset.tech/ | head -1`, затем
`curl -s https://mealset.tech/ | grep -o 'rel="canonical" href="[^"]*"'`.

## Запасной вариант: запуск на VPS

Этот путь не используется, пока сайт живёт на GitHub Pages. Он остаётся на
случай, если понадобится серверная часть на том же домене.

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
локализации, метаданных домена, Open Graph-карточек, ссылок на Telegram и
актуальных изображений.
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
- `lib/site-url.ts` — проверка адреса сайта для SEO; `lib/social-metadata.ts` —
  Open Graph и Twitter-карточки (картинки `public/assets/og-default.jpg` и
  `public/assets/premium/og-premium.jpg`, 1200 × 630, кропы hero-фото).

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
