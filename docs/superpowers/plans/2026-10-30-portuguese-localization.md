# Португальская версия и выбор языка: план реализации

> **Для исполнителя:** REQUIRED SUB-SKILL: используйте superpowers:subagent-driven-development (рекомендуется) или superpowers:executing-plans, чтобы выполнять план по задачам. Шаги отмечаются чекбоксами (`- [ ]`).

**Цель:** добавить `/pt` (европейский португальский) к основной странице, сделать английский версией по умолчанию на `/`, перенести русский на `/ru` и выбирать язык при первом заходе по сохранённому выбору, затем по языку браузера.

**Архитектура:** три группы маршрутов со своими корневыми макетами (`<html lang>`): `(en)` отдаёт `/`, `(ru)` отдаёт `/ru`, новая `(pt)` отдаёт `/pt`; `/v2`, `/preview`, `/en/v2`, `/en/preview` не меняются. Данные о языках живут в одном реестре `lib/primary-locales.ts`, тексты берутся из словарей, в которые добавляется ключ `pt`. Скрипт выбора языка встроен в HTML английского корня. Старый `/en` — сгенерированная статическая заглушка (Pages) и 301 в Nginx.

**Стек:** React 19, Vinext 1.0.0-beta.5 (статический экспорт), Bun 1.3.11 (`bun test`, API `node:test`), Nginx, GitHub Actions.

**Спека:** `docs/superpowers/specs/2026-10-30-portuguese-localization-design.md`

## Глобальные ограничения (из спеки)

- `/` показывает английский (по умолчанию), `/ru` русский, `/pt` европейский португальский (pt-PT). `<html lang>`: `en`, `ru`, `pt-PT`.
- Порядок выбора языка: сохранённый выбор (переключатель RU / EN / PT) → язык браузера (русский → `/ru`, португальский → `/pt`, остальные → `/`) → английский запасной.
- Любой португальский в браузере (`pt`, `pt-PT`, `pt-BR`) ведёт на `/pt`.
- Без определения языка по IP, без сторонних запросов и сервисов.
- Только статический экспорт. GitHub Pages: префикс `NEXT_PUBLIC_BASE_PATH` и адреса со слешем (`NEXT_PUBLIC_TRAILING_SLASH=true`); Nginx на VPS: без слеша. Обе схемы проходят проверки.
- `/v2`, `/preview` (русские) и `/en/v2`, `/en/preview` (английские) не меняются, португальских вариантов у них нет.
- Старые ссылки работают: `/en` → `/?lang=en`, `/?lang=ru` → `/ru`.
- Перевод ближе к исходнику, без адаптации блюд под португальскую кухню; обращение на «tu»; лексика и орфография европейские.
- Ориентир цены в блоке подписки: примерно €33 (как в EN).
- Не переводятся: «Mealset», «Telegram», «Stars», имя бота `@mealset_bot`.
- Новых продуктовых обещаний в португальском тексте нет.
- Карточка `public/assets/og-mealset-life-pt-v2.png`, 1200×630, собрана из EN-карточки (фон, логотип, круг с миской остаются), текст набран шрифтом Onest, способ записан в `docs/preview-cover-life-provenance.json`.
- Проходят `bun run typecheck`, `bun run lint`, `bun run build`; `verify:http` проходит при обеих схемах хостинга.

## Что проверить отдельно (Review Focus)

1. Браузер блокирует `localStorage` (приватный режим): явный выбор и автоматика не должны падать или зацикливаться → Задача 1, тест 5.
2. Возвращающиеся посетители с сохранённым `ru`, старые ссылки `/?lang=ru&utm_…#якорь` → Задача 1, тесты 2, 4, 6; Задача 7, шаг 2.
3. Pages (префикс + слеш) и Nginx (без слеша) ведут себя одинаково, включая `/en` → Задача 5, шаг 9; Задача 6.
4. В `/pt` не осталось кириллицы, английских фраз и искажённых чисел (ккал, граммы, цена) → Задачи 2 и 3 (тесты), Задача 5 (`verify-export`), Задача 7, шаг 4.
5. Португальский текст длиннее английского и ломает вёрстку на 375 px (шапка, шесть вкладок сценариев, тарифы) → Задача 7, шаг 3.

## Договорённости для всех задач

- Каждая задача завершается зелёными `bun run typecheck`, `bun run lint`, `bun test tests`. Начиная с Задачи 5 ещё и `SITE_URL=https://mealset.example bun run build`.
- Код форматируется по `.oxfmtrc.json` (одинарные кавычки, ширина 80). Коммит содержит только файлы своей задачи. Сообщение коммита заканчивается строкой `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>`.
- Если `bun test` не может импортировать модуль из-за CSS или JSX, переносите данные в чисто-данные модуль, а не добавляйте загрузчики.
- **Глоссарий pt-PT** (для задач 2, 3, 4): «tu» (`Aproveita`, `o teu`); telemóvel, ecrã, pequeno-almoço, almoço, lanche, jantar, utilizador, subscrição, ementa (меню), lista de compras, registo (учёт; не «registro»), hidratos de carbono, proteína, gordura, fibra, calorias/kcal, «nutricionista com IA». Без изменений: Mealset, Sasha, Chef, Telegram, Telegram Stars, ⭐. Числа записываются цифрами, десятичная запятая (`47,3 g`), без разделителя тысяч до 10 000 (`2034 kcal`), евро как `33 €`.
- **Фиксированные тексты** (связывают задачи 2, 4, 5):
  - `primaryCopy.pt.headline` = `['Aproveita a vida.', 'A Sasha trata da comida.']`
  - `previewMetaCopy.pt.title` = `Mealset — Aproveita a vida. A Sasha trata da comida.`
  - `previewMetaCopy.pt.imageAlt` = `Mealset. Aproveita a vida. A Sasha trata da comida. Hábitos alimentares saudáveis. Menos registo manual.`
  - строки карточки: заголовок `Aproveita a vida.` / `A Sasha trata` / `da comida.`; подзаголовок `Hábitos alimentares saudáveis.` / `Menos registo manual.`; подпись `O teu nutricionista com IA no Telegram`
  - `pricingCopy.pt.starsPrice` = `1500 ⭐`; `pricingCopy.pt.estimate` = `≈ 33 € por mês`; `estimateSource` как в EN.

## Файлы

| Файл | Что с ним |
|---|---|
| `lib/primary-locales.ts` | новый: тип `PrimaryLocale`, реестр `localeInfo` |
| `lib/language-bootstrap.ts` | новый: `languageBootstrap(paths)` для трёх языков |
| `lib/language-preference.ts` | остаётся только ключ `languagePreferenceKey`, старая функция удаляется в Задаче 5 |
| `lib/social-metadata.ts`, `lib/preview-metadata.ts` | метаданные и `alternates` для трёх языков; `previewMetaCopy.pt` |
| `app/pricing-copy.ts` | новый: данные `pricingCopy` (чистые данные, без CSS-импорта) |
| `app/primary-copy.ts`, `app/primary-demo-copy.ts`, `app/primary-demo-visuals.ts` | ключ `pt` |
| `app/landing.tsx`, `app/primary-demo.tsx`, `app/primary-language-switch.tsx`, `app/pricing.tsx` | тип `PrimaryLocale`, строки из словарей, три ссылки переключателя |
| `app/(en)/page.tsx`, `app/(ru)/ru/page.tsx`, `app/(pt)/layout.tsx`, `app/(pt)/pt/page.tsx` | маршруты |
| `scripts/legacy-en-stub.mjs` (+ `.d.mts`) | новый: HTML заглушки `/en` |
| `scripts/prepare-export.mjs`, `verify-export.mjs`, `verify-http.mjs`, `deploy/nginx.conf` | новые адреса и `/en` |
| `tests/*.test.ts` | новые тесты, подключены командой `bun run test` |
| `README.md`, `docs/demo-provenance.md`, `docs/preview-cover-life-provenance.json` | документация |

---

### Task 0: Базовая линия (без коммита)

- [ ] **Шаг 1:** `bun install --frozen-lockfile` (нужна сеть, создаёт `node_modules`).
- [ ] **Шаг 2:** `bun run typecheck && bun run lint && bun test tests`. Ожидание: код выхода 0, `5 pass, 0 fail`.
- [ ] **Шаг 3:** `SITE_URL=https://mealset.example bun run build`. Ожидание: код выхода 0, есть `dist/client/index.html` и `dist/client/en.html`. Если что-то падает, остановитесь и сообщите: план рассчитан на зелёную базу.

### Task 1: Реестр языков и скрипт выбора языка

**Файлы:**
- Создать: `lib/primary-locales.ts`, `lib/language-bootstrap.ts`, `tests/language-bootstrap.test.ts`
- Изменить: `package.json` (скрипт `"test": "bun test tests"`), `.github/workflows/check.yml` и `.github/workflows/deploy-pages.yml` (шаг `- run: bun run test` после линта)
- Не трогать: `lib/language-preference.ts` и `tests/language-preference.test.ts` (до Задачи 5 их использует `landing.tsx`)

**Интерфейсы:**
- Производит:
```ts
// lib/primary-locales.ts
export type PrimaryLocale = 'en' | 'ru' | 'pt';
export const localeInfo: Record<PrimaryLocale, {
  htmlLang: string; ogLocale: string; route: string; intl: string;
}> = {
  en: { htmlLang: 'en', ogLocale: 'en_US', route: '/', intl: 'en-GB' },
  ru: { htmlLang: 'ru', ogLocale: 'ru_RU', route: '/ru', intl: 'ru-RU' },
  pt: { htmlLang: 'pt-PT', ogLocale: 'pt_PT', route: '/pt', intl: 'pt-PT' },
};
// lib/language-bootstrap.ts — paths: готовые пути страниц (с префиксом и слешем, как их даёт pagePath)
export function languageBootstrap(paths: Record<PrimaryLocale, string>): string;
```
- Потребляет: `languagePreferenceKey` из `lib/language-preference.ts`.

**Правила скрипта** (возвращаемая строка исполняется в браузере до показа содержимого):
1. Работает только если путь страницы (без хвостовых слешей) равен `paths.en`.
2. Язык берётся так: допустимый `?lang=` (`en`/`ru`/`pt`), он же сохраняется; иначе допустимое сохранённое значение; иначе первый язык из `navigator.languages` (запасной `navigator.language`), чей основной подтег (в нижнем регистре, до `-`) входит в `en`/`ru`/`pt`; иначе `en`. Недопустимые значения игнорируются.
3. Для `ru`/`pt`: `window.location.replace` на `paths[язык]`, сохраняя query (без `lang`) и hash. Для `en`: перехода нет; если был `?lang=`, вызывается `window.history.replaceState(null, '', адрес без lang)`.
4. Любое исключение хранилища проглатывается.

- [ ] **Шаг 1: Написать падающие тесты** `tests/language-bootstrap.test.ts` в стиле `tests/language-preference.test.ts`: хелпер `visit({ url, base, languages, saved, blocked })` исполняет `runInNewContext(languageBootstrap(paths), sandbox)` и возвращает `{ redirect?, saved?, cleaned? }`; в песочнице есть `window.history.replaceState` (записывает `cleaned`). Тесты (`base` = `''` и `/mealset`, `paths = { en: `${base}/`, ru: `${base}/ru`, pt: `${base}/pt` }` если не сказано иное):
  1. `browser languages: first of en/ru/pt wins, regional tags normalised`: `['ru-RU','en']` → `/ru`; `['pt-BR','en']` → `/pt`; `['PT-pt']` → `/pt`; `['de','ru']` → `/ru`; `['en-GB','ru']`, `['de','fr']`, `[]` → без редиректа.
  2. `saved preference wins over the browser; invalid values are ignored`: saved `ru` + `['en']` → `/ru`; saved `pt` + `['en']` → `/pt`; saved `en` + `['ru']` → без редиректа; saved `de` + `['ru']` → `/ru`.
  3. `only the English root redirects`: для `/ru`, `/ru/`, `/pt`, `/v2`, `/en/v2`, `/preview` при saved `pt` и `['ru']` редиректа нет.
  4. `?lang= is explicit, saved and wins`: `/?lang=ru` + `['en']` → saved `ru`, редирект на `/ru` без `lang`; `/?lang=pt` → `/pt`; `/?lang=en` при saved `ru` и `['ru']` → saved `en`, редиректа нет, `cleaned` равен адресу без `lang`; `/?lang=de` игнорируется (решают обычные правила).
  5. `explicit choices work when storage throws`: `blocked: true`: `/?lang=ru` → `/ru`; `/?lang=en` + `['ru']` → без редиректа; `/` + `['ru']` → `/ru`.
  6. `redirect keeps query, hash, base path and trailing slash`: `base: '/mealset'`, `paths = { en: '/mealset/', ru: '/mealset/ru/', pt: '/mealset/pt/' }`, адрес `https://mealset.example/mealset/?utm_source=demo&lang=ru#food-diary` → `https://mealset.example/mealset/ru/?utm_source=demo#food-diary`.
- [ ] **Шаг 2:** `bun test tests/language-bootstrap.test.ts`. Ожидание: FAIL (модули не найдены).
- [ ] **Шаг 3:** Реализовать `lib/primary-locales.ts` и `languageBootstrap` по правилам выше; ключ и общую структуру брать из старой `lib/language-preference.ts`, подставляя JSON конфигурации с экранированием `<` как там.
- [ ] **Шаг 4:** `bun test tests/language-bootstrap.test.ts`. Ожидание: 6 pass.
- [ ] **Шаг 5:** Добавить `"test": "bun test tests"` в `package.json` и шаг `- run: bun run test` после линта в оба workflow. `bun run typecheck && bun run lint && bun run test`: всё зелёное (старые 5 тестов тоже проходят).
- [ ] **Шаг 6: Коммит** `git add lib/primary-locales.ts lib/language-bootstrap.ts tests/language-bootstrap.test.ts package.json .github/workflows` → `feat: add locale registry and three-language bootstrap script`.

### Task 2: Тексты страницы, тарифы и метаданные на pt-PT

**Файлы:**
- Создать: `app/pricing-copy.ts`, `tests/primary-copy.test.ts`
- Изменить: `app/primary-copy.ts`, `app/pricing.tsx` (импорт данных из `pricing-copy.ts`), `lib/preview-metadata.ts` (`previewMetaCopy.pt`), `app/landing.tsx`, `app/primary-demo.tsx`

**Интерфейсы:**
- Потребляет: `PrimaryLocale`, `localeInfo` (Задача 1).
- Производит: `pricingCopy.{ru,en,pt}` в `app/pricing-copy.ts` (перенесён из `pricing.tsx`, тот же объект и значения); `primaryCopy.{ru,en,pt}` с новыми ключами для строк, которые сегодня зашиты в тернарии или берутся из `copy`: `skip`, `home`, `start`, `meet`, `foodAlt`, `sashaAlt`, `boundary`, `eyebrow`, `mainNav`, `languageLabel`, `dayRange`, `sasha`, `aboutExample`, `compactLabels` (массив из 6). Значения RU/EN копируются дословно из мест, где они сегодня стоят: `copy.ts` (`skip`, `home`, `start`, `meet`, `foodAlt`, `sashaAlt`, `boundary`), `landing.tsx:48-50, 69-71`, `primary-demo.tsx:86, 249, 391-393, 437-439`, `primary-language-switch.tsx:19`. `previewMetaCopy.pt = { title, description, imageAlt }`.

- [ ] **Шаг 1: Написать падающий тест** `tests/primary-copy.test.ts`. Хелпер `leaves(obj)` разворачивает вложенные объекты и массивы в `путь → строка`. Тесты:
  1. `pt has exactly the keys of en` для `primaryCopy`, `pricingCopy`, `previewMetaCopy` (одинаковые наборы путей, массивы одной длины).
  2. `pt text has no Cyrillic and no empty strings`: `/[А-Яа-яЁё]/` не находит ничего, пустых строк нет.
  3. `pt strings of 30+ characters differ from en` (ловит непереведённый текст; ссылки `https://…` пропускаются).
  4. `fixed values`: `primaryCopy.pt.headline` равен `['Aproveita a vida.', 'A Sasha trata da comida.']`; `pricingCopy.pt.starsPrice === '1500 ⭐'`; `pricingCopy.pt.estimate === '≈ 33 € por mês'`; `pricingCopy.pt.estimateSource === pricingCopy.en.estimateSource`; `previewMetaCopy.pt.title` и `imageAlt` равны значениям из раздела «Фиксированные тексты».
- [ ] **Шаг 2:** `bun test tests/primary-copy.test.ts`. Ожидание: FAIL.
- [ ] **Шаг 3:** Перенести `pricingCopy` в `app/pricing-copy.ts` (импортируют `pricing.tsx` и `primary-copy.ts`), добавить `pt` во все три словаря; добавить новые ключи во все три языка; заменить тернарии и обращения к `copy` в `landing.tsx` и `primary-demo.tsx` на `primaryCopy[locale]`, формат чисел `toLocaleString(localeInfo[locale].intl)`; `Landing` больше не импортирует `copy`. Ключи `heroQuestion` и `heroAnswer` не использует ни один компонент: проверить `grep` и, если так, удалить из всех языков, а не переводить. Перевод делается по английскому тексту с учётом русского, по глоссарию, без новых обещаний.
- [ ] **Шаг 4:** `bun test tests/primary-copy.test.ts` → pass. `bun run typecheck && bun run lint && bun run test`.
- [ ] **Шаг 5: Коммит** `feat(pt): translate primary copy, pricing and preview metadata`.

### Task 3: Диалоги Саши и подписи к иллюстрациям на pt-PT

**Файлы:**
- Создать: `tests/primary-demo-copy.test.ts`
- Изменить: `app/primary-demo-copy.ts`, `app/primary-demo-visuals.ts`, `app/primary-demo.tsx` (тип `Locale` → `PrimaryLocale` в строке 20 и в сигнатурах на 50, 107, 230, 409, 431), `docs/demo-provenance.md` (строка 3 и абзац: PT-версия переводит английские адаптированные примеры, числа те же)

**Интерфейсы:**
- Производит: `demoContent(locale: PrimaryLocale)`, `demoVisual(index: number, locale: PrimaryLocale)`; хелпер `t(ru: string, en: string, pt: string): string` (103 вызова).

- [ ] **Шаг 1: Написать падающий тест** `tests/primary-demo-copy.test.ts` (хелпер `leaves` как в Задаче 2, вынесите его в `tests/leaves.ts`, если пишете второй раз):
  1. `pt demo content has the same structure as en` (одинаковые наборы путей `demoContent('en')` и `demoContent('pt')`).
  2. `pt demo text has no Cyrillic and no empty strings`.
  3. `pt demo strings of 30+ characters differ from en`.
  4. `numbers survive translation`: для каждого пути мультимножество цифровых серий `\d+` в `en` (после удаления запятых-разделителей тысяч `(\d),(\d{3})\b` → `$1$2`) равно мультимножеству в `pt`.
  5. `demoVisual returns alt and caption for all six scenarios in pt`: тот же `file` что в `en`, обе строки непустые и без кириллицы.
- [ ] **Шаг 2:** `bun test tests/primary-demo-copy.test.ts` → FAIL.
- [ ] **Шаг 3:** Сначала сделать третий параметр `t` обязательным, затем заполнить каждое место, на которое укажет `bun run typecheck`; добавить `pt: [alt, caption]` для шести иллюстраций; числа остаются цифрами. Правила перевода как в Задаче 2.
- [ ] **Шаг 4:** тесты проходят; `bun run typecheck && bun run lint && bun run test`.
- [ ] **Шаг 5: Коммит** `feat(pt): translate Sasha demo conversations and visual captions`.

### Task 4: Карточка для соцсетей

**Файлы:** создать `public/assets/og-mealset-life-pt-v2.png`; изменить `docs/preview-cover-life-provenance.json`.

- [ ] **Шаг 1:** Откройте `public/assets/og-mealset-life-en-v2.png` инструментом Read. Pillow 12.1.1 установлен. Возьмите цвет фона в 6 точках области текста (x 40–700, y 150–590): если разброс больше ±3 на канал, остановитесь и сообщите (фон не плоский, карточку тогда должен сгенерировать владелец).
- [ ] **Шаг 2:** Одноразовым скриптом в каталоге scratchpad (в репозиторий не добавляется): открыть EN-карточку, залить область (x 40–715, y 150–590) цветом фона (логотип сверху и круг справа, x ≥ 735, не затрагиваются), набрать текст из раздела «Фиксированные тексты» шрифтом `public/fonts/onest.ttf` (вариации через `set_variation_by_name`; цвета заголовка, подзаголовка и подписи взять пипеткой из EN-карточки; размеры и левый отступ такие же, как у EN). Если строка шире 700 px, уменьшайте размер шагом 2 px.
- [ ] **Шаг 3:** Проверка: Pillow подтверждает размер `(1200, 630)`; посмотрите результат Read и убедитесь, что `í ã á ú` читаются, текст не заходит на круг и не перекрывает логотип; сравните с EN-карточкой.
- [ ] **Шаг 4:** В `docs/preview-cover-life-provenance.json` добавьте запись для нового файла: `path`, `method` («recomposed from og-mealset-life-en-v2.png: text re-typeset with Onest using Pillow; logo and illustration unchanged»), строки текста.
- [ ] **Шаг 5: Коммит** `feat(pt): add Portuguese social preview card`.

### Task 5: Маршруты, метаданные, переключатель и сборка

**Файлы:**
- Создать: `app/(pt)/layout.tsx`, `app/(pt)/pt/page.tsx`, `scripts/legacy-en-stub.mjs`, `scripts/legacy-en-stub.d.mts`, `tests/social-metadata.test.ts`, `tests/legacy-en-stub.test.ts`
- Переместить (`git mv`): `app/(ru)/page.tsx` → `app/(ru)/ru/page.tsx`; `app/(en)/en/page.tsx` → `app/(en)/page.tsx` (поправить относительные импорты и `locale`)
- Изменить: `app/(ru)/layout.tsx`, `app/(en)/layout.tsx` (убрать `alternates`, остальное оставить), `lib/social-metadata.ts`, `lib/language-preference.ts` (оставить только ключ), `app/landing.tsx`, `app/primary-language-switch.tsx`, `app/pricing.tsx` и `app/primary-demo.tsx` (если ещё нет: проп `PrimaryLocale`), `app/primary-copy.ts` (проверить `languageLabel`), `scripts/prepare-export.mjs`, `scripts/verify-export.mjs`, `README.md`
- Удалить: `tests/language-preference.test.ts`

**Интерфейсы:**
- Производит:
```ts
socialMetadata(locale: PrimaryLocale): Metadata
// добавляет alternates: { canonical: siteUrl(route),
//   languages: { en: siteUrl('/'), ru: siteUrl('/ru'), 'pt-PT': siteUrl('/pt'), 'x-default': siteUrl('/') } }
// openGraph.locale = localeInfo[locale].ogLocale, openGraph.url = siteUrl(route),
// картинка assetUrl(`/assets/og-mealset-life-${locale}-v2.png`)
legacyEnglishStub(args: { target: string; canonical: string }): string
// HTML: <html lang="en">, <meta http-equiv="refresh" content="0; url=TARGET">, <link rel="canonical" href=CANONICAL>,
// <script>location.replace(TARGET)</script>, видимая ссылка <a href=TARGET>; значения экранируются
```
- Потребляет: `localeInfo`, `PrimaryLocale`, `languageBootstrap` (Задача 1), `primaryCopy.pt`, `previewMetaCopy.pt`, карточка из Задачи 4.

- [ ] **Шаг 1: Написать падающие тесты.**
  - `tests/social-metadata.test.ts` (в начале файла `process.env.SITE_URL = 'https://mealset.example'`, затем динамический `import`): `socialMetadata('pt')` даёт `openGraph.locale === 'pt_PT'`, `openGraph.url === 'https://mealset.example/pt'`, `twitter.images[0].url` оканчивается на `/assets/og-mealset-life-pt-v2.png`, `title === previewMetaCopy.pt.title`; для `en` `url` равен `https://mealset.example/`; для всех трёх `alternates.languages` равен `{ en: 'https://mealset.example/', ru: 'https://mealset.example/ru', 'pt-PT': 'https://mealset.example/pt', 'x-default': 'https://mealset.example/' }`, а `canonical` равен собственному адресу.
  - `tests/legacy-en-stub.test.ts`: `legacyEnglishStub({ target: '/mealset-landing/?lang=en', canonical: 'https://d1bevz.github.io/mealset-landing/' })` содержит `http-equiv="refresh" content="0; url=/mealset-landing/?lang=en"`, `rel="canonical" href="https://d1bevz.github.io/mealset-landing/"`, `<a href="/mealset-landing/?lang=en"`; значение с `"` и `<` экранируется.
- [ ] **Шаг 2:** `bun test tests/social-metadata.test.ts tests/legacy-en-stub.test.ts` → FAIL.
- [ ] **Шаг 3:** Реализовать `socialMetadata` и `scripts/legacy-en-stub.mjs` (+ `.d.mts` с типом функции, чтобы `tsc` принимал импорт из теста). Тесты проходят.
- [ ] **Шаг 4: Маршруты.** Переместить и создать страницы: каждая `export const metadata = socialMetadata('<язык>')` и `<Landing locale="<язык>" />`. `(pt)/layout.tsx`: `<html lang="pt-PT">`, `import '../globals.css'`, `icons` и `title`/`description` из `previewMetaCopy.pt`. Из макетов `(ru)` и `(en)` убрать только `alternates` (у `/v2` и `/preview` свои).
- [ ] **Шаг 5: Компоненты.** `Landing({ locale }: { locale: PrimaryLocale })`: скрипт рендерится при `locale === 'en'` с `languageBootstrap({ en: pagePath('/'), ru: pagePath('/ru'), pt: pagePath('/pt') })`; ссылка логотипа `pagePath(localeInfo[locale].route)`. `PrimaryLanguageSwitch`: три ссылки в порядке RU, EN, PT; `href`: `pagePath('/ru')`, `${pagePath('/')}?lang=en`, `pagePath('/pt')`; `hrefLang` и `lang` из `localeInfo[...].htmlLang`; `aria-current` на текущем; `aria-label` из `primaryCopy[locale].languageLabel` (`Язык страницы` / `Page language` / `Idioma da página`); `onClick` сохраняет выбор по `languagePreferenceKey` в `try/catch`. `Pricing` принимает `PrimaryLocale` (preview передаёт подмножество `'ru' | 'en'`, это совместимо).
- [ ] **Шаг 6: Убрать старое.** Удалить `languageBootstrap` из `lib/language-preference.ts` (остаётся `languagePreferenceKey`) и `tests/language-preference.test.ts`.
- [ ] **Шаг 7: Скрипты сборки.** `scripts/prepare-export.mjs`: список копий `route.html` → `route/index.html` в режиме со слешем теперь `['ru', 'pt', 'v2', 'en/v2']`; всегда писать `en.html`, а со слешем и `en/index.html` из `legacyEnglishStub({ target: `${basePath}/?lang=en`, canonical: new URL(`${basePath}/`, SITE_URL).href })`. `scripts/verify-export.mjs`: таблица (маршрут, `lang`, ключ карточки, текст): `['', 'en', 'en', 'Enjoy your life.']`, `['ru', 'ru', 'ru', 'Наслаждайся жизнью.']`, `['pt', 'pt-PT', 'pt', 'Aproveita a vida.']`, строки `v2` и `en/v2` без изменений; проверять `<html … lang="…">` регуляркой (сегодня проверка по подстроке `lang="…"` проходит из-за ссылок переключателя); canonical, `og:url`, `og:image` по ключу карточки; три `hreflang` и `x-default` на каждой основной странице; слово про клетчатку: `Клетчатка` / `Fibre` / `Fibra`; для `pt.html`: нет кириллицы и нет `Enjoy your life`; отдельная проверка `en.html`: содержит `http-equiv="refresh"` и `?lang=en`, а при слеше `en/index.html` совпадает с `en.html`; обновить текст лога про маршруты.
- [ ] **Шаг 8:** `bun run typecheck && bun run lint && bun run test`.
- [ ] **Шаг 9: Сборка при обеих схемах.** `SITE_URL=https://mealset.example bun run build`; затем `SITE_URL=https://d1bevz.github.io NEXT_PUBLIC_BASE_PATH=/mealset-landing NEXT_PUBLIC_TRAILING_SLASH=true bun run build`. Ожидание: обе сборки заканчиваются кодом 0 вместе со встроенным `verify-export`; во второй есть `dist/client/{ru,pt,en}/index.html`. Если Vinext не собирает три корневых макета или `/` из группы `(en)`, остановитесь и сообщите вывод ошибки.
- [ ] **Шаг 10: README.** Таблица адресов: `/` английский (по умолчанию), `/ru`, `/pt`, `/en` → `/?lang=en` (старый адрес), `/v2`, `/en/v2` как есть; новый короткий раздел «Выбор языка» (порядок из спеки); обновить «четырёх HTML-страниц», описание файлов с «RU/EN» и строку про Pages (`en/` → `ru/`, `pt/`).
- [ ] **Шаг 11: Коммит** `feat(pt): serve English at /, Russian at /ru and Portuguese at /pt`.

### Task 6: Nginx и HTTP-проверки

**Файлы:** изменить `deploy/nginx.conf`, `scripts/verify-http.mjs`, `README.md` (раздел про Nginx без Docker, строки про `en.html`).

- [ ] **Шаг 1: Сначала проверка.** В `scripts/verify-http.mjs`: список страниц `['/', '/ru', '/pt', '/v2', '/en/v2', '/preview', '/en/preview']` (проверки 200, `text/html`, ссылка на `https://t.me/mealset_bot`); ресурсы: добавить `og-mealset-life-pt-v2.png`; для Nginx: `fetch(url('/en'), { redirect: 'manual' })` даёт 301 и `location` равный `/?lang=en` (через тот же `mountedUrl`); существующая проверка `/en/` → 301 на `/en` остаётся; для статического хоста (`CHECK_STATIC_HOST`): GET `/en/` отдаёт 200 и тело содержит `http-equiv="refresh"` и `?lang=en` (без требования ссылки на Telegram).
- [ ] **Шаг 2: Статический хост.** Собрать как для Pages (команда из Задачи 5, шаг 9, вторая), затем как в `deploy-pages.yml`: `preview=$(mktemp -d); mkdir -p $preview/mealset-landing; cp -a dist/client/. $preview/mealset-landing/; python3 -m http.server 48189 --bind 127.0.0.1 --directory $preview &`, затем `CHECK_STATIC_HOST=true CHECK_URL=http://127.0.0.1:48189/mealset-landing/ bun run verify:http`. Ожидание: все проверки зелёные; остановить сервер.
- [ ] **Шаг 3:** В `deploy/nginx.conf` перед `location /` добавить `location = /en { return 301 /?lang=en; }` (своих `add_header` в блоке нет, поэтому заголовки сервера наследуются). Если доступен Docker (`docker --version`): `docker build --build-arg SITE_URL=https://mealset.example -t mealset-check .`, запустить на 8080, `CHECK_URL=http://127.0.0.1:8080 bun run verify:http` → зелёное. Если Docker нет, так и сообщите: проверка пройдёт только в CI (`check.yml`).
- [ ] **Шаг 4: README.** Раздел про Nginx без Docker: пути `/ru`, `/pt`, `/v2`, `/en/v2` — это `ru.html`, `pt.html`, `v2.html`, `en/v2.html`; корень `index.html` теперь английский; `/en` отдаётся правилом `return 301 /?lang=en`.
- [ ] **Шаг 5: Коммит** `feat(pt): redirect legacy /en and cover new routes in HTTP checks`.

### Task 7: Итоговая проверка (коммит только если найдены исправления)

- [ ] **Шаг 1: Полный прогон.** `bun run typecheck && bun run lint && bun run test`, обе сборки из Задачи 5 (шаг 9), проверка статического хоста из Задачи 6 (шаг 2). Всё должно быть зелёным.
- [ ] **Шаг 2: Поведение в браузере.** Раздать `dist/client` обычной сборки (без префикса): `python3 -m http.server 48190 --directory dist/client`, открыть встроенный браузер. Проверить: (a) в консоли страницы `localStorage.setItem('mealset.language','pt')`, открыть `/` → адрес становится `/pt`, `document.documentElement.lang === 'pt-PT'`; (b) на `/ru` нажать «EN» → остаётся `/`, `localStorage['mealset.language'] === 'en'`, после перезагрузки английский; (c) `/en.html` (так отдаёт `python3 -m http.server`) приводит на `/` без `?lang=en` в адресе; (d) `/?lang=ru` → `/ru`; (e) с очищенным `localStorage` `/pt` остаётся на `/pt`. Остановить сервер.
- [ ] **Шаг 3: Вёрстка.** Для `/` и `/pt` при 375×812 и 1280×800: `document.documentElement.scrollWidth <= window.innerWidth`; снимки шапки, шести вкладок сценариев, блока тарифов и FAQ; обрезанный или налезающий текст на `/pt` исправить в CSS или сократить перевод (RU и EN не менять).
- [ ] **Шаг 4: Утечки.** `grep -P '[\x{0400}-\x{04FF}]' dist/client/pt.html` не находит ничего; `grep -c 'Enjoy your life' dist/client/pt.html` равно 0; список хостов `grep -oE 'https?://[^"'"'"' )<]+' dist/client/pt.html | sort -u` не содержит хостов, которых нет в `dist/client/en.html`.
- [ ] **Шаг 5: Нетронутое.** `git diff main...HEAD --stat -- 'app/(ru)/v2' 'app/(ru)/preview' 'app/(en)/en/v2' 'app/(en)/en/preview' app/premium app/comparison app/product-copy.ts` не показывает изменений.
- [ ] **Шаг 6: Отчёт владельцу:** что проверено и чем; что не удалось проверить (например, Nginx без Docker); список файлов с португальским текстом для вычитки носителем pt-PT: `app/primary-copy.ts`, `app/pricing-copy.ts`, `app/primary-demo-copy.ts`, `app/primary-demo-visuals.ts`, `lib/preview-metadata.ts`, карточка `public/assets/og-mealset-life-pt-v2.png`.
