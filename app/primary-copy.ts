// Public plan terms verified against mealset/src/billing/plan-pricing.ts and
// checkout-copy.ts on 2026-09-13. Keep in sync when billing terms change.
export const pricing = { week: 500, month: 2000, weekDays: 7, monthDays: 30 };
// Buyer-price reference from Mealset, not a guaranteed Stars purchase rate.
// USD/RUB: CBR 84.2569, effective 2026-09-12, rounded to 85 for display.
// Source: https://www.cbr.ru/currency_base/daily/
// Refresh this editorial estimate when pricing is reviewed; no live FX request.
const moneyReference = { usdPerStar: 0.02, rubPerUsd: 85 };
export function formatApproximatePrice(stars: number, locale: 'ru' | 'en') {
  const usd = stars * moneyReference.usdPerStar;
  const amount =
    locale === 'ru'
      ? Math.round((usd * moneyReference.rubPerUsd) / 10) * 10
      : usd;
  return `≈ ${new Intl.NumberFormat(locale === 'ru' ? 'ru-RU' : 'en-US', {
    style: 'currency',
    currency: locale === 'ru' ? 'RUB' : 'USD',
    maximumFractionDigits: 0,
  }).format(amount)}`;
}
export const primaryCopy = {
  ru: {
    nav: ['Как это работает', 'Подход', 'Стоимость'],
    intro:
      'Саша — твой ИИ-нутрициолог в Telegram. Помогает наладить питание с учётом твоих целей, вкусов и образа жизни. Опирается на науку и предлагает изменения, которые вписываются в твой день.',
    see: 'Посмотреть, как это работает',
    paid: `${formatApproximatePrice(pricing.week, 'ru')} за 7 дней · Без бесплатного периода`,
    example: 'Пример диалога',
    role: 'ИИ-нутрициолог',
    heroQuestion: 'Хочу питаться лучше, но отказываться от пасты не готов.',
    heroAnswer:
      'Начнём с того, что тебе нравится. Пасту оставим — подберём, чем её дополнить, с учётом твоей цели.',
    demoLabel: 'ПОДДЕРЖКА В ОБЫЧНОМ ДНЕ',
    demoTitle: ['Ты ешь.', 'Саша помогает разобраться.'],
    demoIntro:
      'Фото, голосовое или пара слов о еде — Саша считает калории, помнит твои привычки и помогает с питанием, планом и покупками.',
    demoNote:
      'Иллюстрация работы Саши, не скриншот Telegram. Диалоги адаптированы; расчёты — из отдельных сохранённых примеров. В твоём чате Саша учитывает твои продукты и цели.',
    choose: 'Выбрать пример',
    try: 'Попробуй продолжить разговор',
    reset: 'К исходному примеру',
    open: 'Открыть Сашу в Telegram',
    memoryLabel: 'ОТ ПЕРВОЙ ЗАПИСИ К ПРИВЫЧКЕ',
    memoryTitle: ['Ты живёшь свою жизнь.', 'Саша помогает с питанием.'],
    memoryIntro:
      'Сначала — понятные цифры за день. Затем — меньше повторных объяснений, готовки и решений о еде.',
    progress: [
      {
        time: 'Записать еду',
        title: 'Считает за тебя.',
        body: 'Описываешь завтрак — Саша считает калории, БЖУ и клетчатку. Показывает, сколько осталось до твоей цели.',
      },
      {
        time: 'Использовать прошлый опыт',
        title: 'Помнит детали.',
        body: 'Не нужно каждый раз рассказывать о себе заново. Саша учитывает твои вкусы, привычки и прошлые разговоры — и подбирает помощь под тебя.',
      },
      {
        time: 'Облегчить обычный день',
        title: 'Помогает вовремя.',
        body: 'Объединяет готовку на два дня и собирает покупки. Если обед не записан — сама уточняет, удалось ли поесть, и помогает с перекусом.',
      },
    ],
    approachLabel: 'ПОДХОД САШИ',
    approachTitle: ['На твоей стороне.', 'С опорой на науку.'],
    approachBody:
      'Объясняет рекомендации, оставляет место любимой еде и учитывает реальную жизнь. Если данных недостаточно — говорит об этом.',
    principles: [
      {
        title: 'Понимать, почему.',
        body: 'Можно спросить об источнике и логике совета. Саша опирается на исследования и руководства по питанию.',
      },
      {
        title: 'Менять посильно.',
        body: 'Помогает адаптировать питание к твоим вкусам, целям и времени. Без требования делать всё идеально.',
      },
      {
        title: 'Знать границы.',
        body: 'Отмечает приблизительные оценки. Помогает с повседневным рационом и не заменяет врача.',
      },
    ],
    sources: 'Научные ориентиры',
    who: 'ВОЗ · здоровое питание',
    efsa: 'EFSA · нормы нутриентов',
    priceLabel: 'РАБОТА С САШЕЙ',
    priceTitle: 'Выбери свой темп.',
    priceIntro:
      'В обоих вариантах — поддержка по питанию, дневник текстом, голосом и по фото, помощь с выбором еды с учётом твоего контекста.',
    week: 'Познакомиться с Сашей',
    month: 'Узнать себя лучше',
    weekDescription:
      'Неделя, чтобы попробовать поддержку Саши и понять, как она помогает тебе в обычной жизни.',
    monthDescription:
      '30 дней, чтобы вместе с Сашей разобраться в своём питании и сделать первые шаги к новым привычкам.',
    weekPeriod: 'за 7 дней',
    monthPeriod: 'каждые 30 дней',
    weekTerms: 'Один платёж. Без автопродления.',
    monthTerms: 'Подписка с автоматическим продлением до отмены.',
    weekCta: 'Попробовать неделю',
    monthCta: 'Начать изменения',
    priceNote:
      'Цены в рублях — примерный эквивалент. Оплата в Telegram: 500 Stars за 7 дней или 2000 Stars каждые 30 дней. Стоимость покупки Stars зависит от региона и способа оплаты. Бесплатного пробного периода нет; действует дневной лимит. Условия — в боте до оплаты.',
    cancelNote:
      'Отменить продление можно через /cancel в боте или настройки подписок Telegram. Доступ сохранится до конца оплаченного периода.',
    faqTitle: 'Перед первым разговором',
    faq: [
      {
        q: 'Как начать?',
        a: 'Открой @mealset_bot в Telegram, прочитай условия и выбери доступ на 7 или 30 дней. После оплаты расскажи Саше о своих целях и привычках. Сервис предназначен для пользователей от 18 лет.',
      },
      {
        q: 'Насколько точны расчёты по фото?',
        a: 'Это приблизительные оценки: по фото не всегда видны вес порции, масло или состав соуса. Уточни детали сообщением — Саша скорректирует запись. В демонстрации на сайте используются условные расчёты.',
      },
      {
        q: 'Откуда Саша знает, какие продукты у меня дома?',
        a: 'Саша учитывает прошлые записи, что вы готовили и какие продукты остались. На этой основе подбирает следующие блюда — не нужно каждый раз составлять список заново. Если что-то изменилось вне ваших разговоров, достаточно короткого уточнения.',
      },
      {
        q: 'Есть ли лимиты использования?',
        a: 'Да, действует дневной лимит. При его достижении обработка приостанавливается до полуночи в твоём часовом поясе. После этого Саша обрабатывает очередь, пока доступ активен.',
      },
      {
        q: 'Как отменить подписку?',
        a: 'Отправь /cancel в боте или открой управление подписками в Telegram до следующего списания. Доступ останется до конца оплаченного периода. У недельного доступа автопродления нет. Вопросы по платежам и возвратам — /paysupport.',
      },
      {
        q: 'Где прочитать об условиях и моих данных?',
        a: 'В боте доступны команды /terms — условия использования и /privacy — информация о конфиденциальности. Ознакомься с ними перед оплатой и передачей личной информации.',
      },
      {
        q: 'Саша заменяет врача?',
        a: 'Нет. Саша — искусственный интеллект для поддержки в повседневном питании. Она не ставит диагнозы и не назначает лечение. Медицинские вопросы нужно обсуждать с врачом.',
      },
    ],
    closing: 'Начнём с того, что тебе нравится есть.',
    closingBody:
      'Расскажи Саше о себе. Найдите подход к питанию, которому есть место в твоей жизни.',
    footer: 'Осознанность. Дисциплина. Забота о себе.',
  },
  en: {
    nav: ['How it works', 'Our approach', 'Pricing'],
    intro:
      'Sasha is your AI nutritionist in Telegram. She helps you build better eating habits around your goals, tastes and lifestyle. Her guidance draws on science, with changes that fit your day.',
    see: 'See how it works',
    paid: `${formatApproximatePrice(pricing.week, 'en')} for 7 days · No free trial`,
    example: 'Example conversation',
    role: 'AI nutritionist',
    heroQuestion: 'I want to eat better, but I’m not giving up pasta.',
    heroAnswer:
      'Let’s start with what you enjoy. We’ll keep the pasta and find ways to build a meal around it that works towards your goal.',
    demoLabel: 'SUPPORT FOR EVERYDAY LIFE',
    demoTitle: ['You eat.', 'Sasha helps you understand.'],
    demoIntro:
      'A photo, a voice note or a few words about your food — Sasha counts calories, remembers your habits and helps with nutrition, meal planning and groceries.',
    demoNote:
      'An illustration of Sasha at work, not a Telegram screenshot. Dialogues are adapted; calculations come from separate saved examples. In your chat, Sasha uses your foods and goals.',
    choose: 'Choose an example',
    try: 'Try continuing the conversation',
    reset: 'Back to the original example',
    open: 'Open Sasha in Telegram',
    memoryLabel: 'FROM YOUR FIRST ENTRY TO A HABIT',
    memoryTitle: ['You live your life.', 'Sasha helps with food.'],
    memoryIntro:
      'First, a clear picture of your day’s nutrition. Then, less explaining yourself, less cooking and fewer food decisions.',
    progress: [
      {
        time: 'Log a meal',
        title: 'Does the counting.',
        body: 'Describe breakfast and Sasha calculates calories, macros and fibre. She shows how much is left towards your daily target.',
      },
      {
        time: 'Build on past conversations',
        title: 'Remembers the details.',
        body: 'No need to explain yourself every time. Sasha builds on your tastes, habits and past conversations to make her support more personal.',
      },
      {
        time: 'Make everyday life easier',
        title: 'Helps at the right moment.',
        body: 'Combines cooking for two days and builds your shopping list. If lunch isn’t logged, she checks whether you’ve eaten and helps you find a snack.',
      },
    ],
    approachLabel: 'SASHA’S APPROACH',
    approachTitle: ['On your side.', 'Grounded in science.'],
    approachBody:
      'She explains her guidance, makes room for the food you love and considers real life. If there isn’t enough evidence, she says so.',
    principles: [
      {
        title: 'Understand the why.',
        body: 'Ask about the source and reasoning behind a suggestion. Sasha draws on nutrition research and guidelines.',
      },
      {
        title: 'Make it manageable.',
        body: 'She helps you adapt your diet to your tastes, goals and schedule. There’s no expectation of perfection.',
      },
      {
        title: 'Know the boundaries.',
        body: 'She labels estimates as approximate. She supports everyday nutrition and doesn’t replace a doctor.',
      },
    ],
    sources: 'Scientific references',
    who: 'WHO · healthy diet',
    efsa: 'EFSA · nutrient reference values',
    priceLabel: 'WORKING WITH SASHA',
    priceTitle: 'Choose your pace.',
    priceIntro:
      'Both options include nutrition support, food logging by text, voice and photo, and help with food choices based on your context.',
    week: 'Get to know Sasha',
    month: 'Get to know yourself',
    weekDescription:
      'A week to try Sasha’s support and see how she helps with everyday food decisions.',
    monthDescription:
      '30 days to understand your eating patterns with Sasha and take your first steps towards new habits.',
    weekPeriod: 'for 7 days',
    monthPeriod: 'every 30 days',
    weekTerms: 'One payment. No automatic renewal.',
    monthTerms: 'Renews automatically every 30 days until cancelled.',
    weekCta: 'Try a week',
    monthCta: 'Start making changes',
    priceNote:
      'USD prices are approximate equivalents. Pay in Telegram: 500 Stars for 7 days or 2,000 Stars every 30 days. The cost of buying Stars varies by region and payment method. No free trial; a daily usage limit applies. Read the terms in the bot before paying.',
    cancelNote:
      'Cancel renewal with /cancel in the bot or in Telegram subscription settings. Access continues until the end of the paid period.',
    faqTitle: 'Before your first conversation',
    faq: [
      {
        q: 'How do I get started?',
        a: 'Open @mealset_bot in Telegram, read the terms and choose 7 or 30 days of access. After paying, tell Sasha about your goals and habits. The service is for people aged 18 and over.',
      },
      {
        q: 'How accurate are photo estimates?',
        a: 'They are approximate: a photo may not show the portion weight, cooking oil or sauce ingredients. Send a clarification and Sasha can update the entry. The website demo uses illustrative figures.',
      },
      {
        q: 'How does Sasha know what food I have at home?',
        a: 'Sasha keeps track of past entries, what you’ve cooked together and which ingredients are left. She uses that to suggest your next meals, so you don’t have to make a fresh list every time. If something changes outside your conversations, a quick update is enough.',
      },
      {
        q: 'Are there usage limits?',
        a: 'Yes, a daily limit applies. At the limit, processing pauses until midnight in your time zone. Sasha then processes queued messages while your access remains active.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'Send /cancel in the bot or open Telegram subscription settings before the next charge. Access continues until the paid period ends. The one-week pass does not renew automatically. For payment and refund questions, use /paysupport.',
      },
      {
        q: 'Where can I read about the terms and my data?',
        a: 'Use /terms in the bot for the terms of use and /privacy for privacy information. Read them before paying and sharing personal information.',
      },
      {
        q: 'Does Sasha replace a doctor?',
        a: 'No. Sasha is an AI for everyday nutrition support. She does not diagnose conditions or prescribe treatment. Discuss medical questions with a doctor.',
      },
    ],
    closing: 'Let’s start with what you enjoy eating.',
    closingBody:
      'Tell Sasha about yourself. Find an approach to food that fits your life.',
    footer: 'Awareness. Discipline. Self-care.',
  },
};
