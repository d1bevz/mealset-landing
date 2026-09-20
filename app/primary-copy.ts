import { pricingCopy } from './pricing';

export const primaryCopy = {
  ru: {
    nav: ['Как это работает', 'Подход', 'Стоимость'],
    intro:
      'Саша — твой ИИ-нутрициолог в Telegram. Помогает наладить питание с учётом твоих целей, вкусов и образа жизни. Опирается на науку и предлагает изменения, которые вписываются в твой день.',
    see: 'Посмотреть, как это работает',
    paid: `${pricingCopy.ru.starsPrice} в месяц · ${pricingCopy.ru.estimate}`,
    example: 'Пример диалога',
    role: 'ИИ-нутрициолог',
    heroQuestion: 'Хочу питаться лучше, но отказываться от пасты не готов.',
    heroAnswer:
      'Начнём с того, что тебе нравится. Пасту оставим — подберём, чем её дополнить, с учётом твоей цели.',
    demoTitle: ['Ты живёшь.', 'Саша помогает с питанием.'],
    stories: [
      [
        'Ты ешь и наслаждаешься.',
        'Саша считает калории.',
        'Саша посчитает калории и нутриенты, покажет остаток до цели и подскажет, чем дополнить рацион.',
      ],
      [
        'Ты занят.',
        'Саша помнит детали.',
        'Саша помнит состав привычных блюд. Если сегодня что-то изменилось, достаточно уточнить.',
      ],
      [
        'Ты ставишь цели.',
        'Саша даёт рекомендации.',
        'Учитывает продукты дома и время на готовку. Помогает сделать следующий приём пищи проще.',
      ],
      [
        'Ты живёшь в своём ритме.',
        'Саша планирует меню.',
        'Любимые блюда, твои цели и дни, когда некогда готовить, — в одном плане, который можно менять.',
      ],
      [
        'Ты занимаешься делами.',
        'Саша готовит список покупок.',
        'Список продуктов из плана уже готов. Отмечай купленное прямо в разговоре.',
      ],
      [
        'Ты не думаешь о еде.',
        'Саша сама напишет.',
        'Если обед не записан, сама уточнит, удалось ли поесть, и поможет подобрать перекус.',
      ],
    ],
    demoNote:
      'Иллюстрация работы Саши, не скриншот Telegram. Диалоги адаптированы; расчёты — из отдельных сохранённых примеров. В твоём чате Саша учитывает твои продукты и цели.',
    choose: 'Выбрать пример',
    try: 'Попробуй продолжить разговор',
    reset: 'К исходному примеру',
    open: 'Открыть Сашу в Telegram',
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
    faqTitle: 'Перед первым разговором',
    faq: [
      {
        q: 'Как начать?',
        a: 'Открой @mealset_bot в Telegram, прочитай условия месячной подписки за 1500 Telegram Stars. После оплаты расскажи Саше о своих целях и привычках. Сервис предназначен для пользователей от 18 лет.',
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
        a: 'Да, действуют дневной лимит и отдельные лимиты на диалоги и составление меню Шефом. Срок возобновления доступа при достижении лимита подскажет Саша. При достижении дневного лимита обработка приостанавливается до полуночи в твоём часовом поясе. После этого Саша обрабатывает очередь, пока доступ активен.',
      },
      {
        q: 'Как отменить подписку?',
        a: 'Отправь /cancel в боте или открой управление подписками в Telegram до следующего списания. Доступ останется до конца оплаченного периода. Вопросы по платежам и возвратам — /paysupport.',
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
    paid: `${pricingCopy.en.starsPrice} per month · ${pricingCopy.en.estimate}`,
    example: 'Example conversation',
    role: 'AI nutritionist',
    heroQuestion: 'I want to eat better, but I’m not giving up pasta.',
    heroAnswer:
      'Let’s start with what you enjoy. We’ll keep the pasta and find ways to build a meal around it that works towards your goal.',
    demoTitle: ['Live your life.', 'Let Sasha help with food.'],
    stories: [
      [
        'You enjoy your food.',
        'Sasha counts the calories.',
        'Sasha calculates calories and nutrients, shows what’s left towards your goal and suggests what to add.',
      ],
      [
        'You’re busy.',
        'Sasha remembers the details.',
        'Sasha remembers your familiar meals. If something is different today, just let her know.',
      ],
      [
        'You set your goals.',
        'Sasha helps you get there.',
        'She considers the food you have and the time you can spare. Your next meal gets a little easier.',
      ],
      [
        'You live at your own pace.',
        'Sasha plans your meals.',
        'Favourite dishes, your goals and busy days — in one plan you can adjust as life changes.',
      ],
      [
        'You get on with your day.',
        'Sasha sorts your shopping list.',
        'Your ingredients are gathered into a list. Tick off what you’ve bought right in the conversation.',
      ],
      [
        'Food slips your mind.',
        'Sasha checks in.',
        'If lunch isn’t logged, she asks whether you’ve eaten and helps you find a snack.',
      ],
    ],
    demoNote:
      'An illustration of Sasha at work, not a Telegram screenshot. Dialogues are adapted; calculations come from separate saved examples. In your chat, Sasha uses your foods and goals.',
    choose: 'Choose an example',
    try: 'Try continuing the conversation',
    reset: 'Back to the original example',
    open: 'Open Sasha in Telegram',
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
    faqTitle: 'Before your first conversation',
    faq: [
      {
        q: 'How do I get started?',
        a: 'Open @mealset_bot in Telegram, read the terms for the monthly subscription at 1500 Telegram Stars. After paying, tell Sasha about your goals and habits. The service is for people aged 18 and over.',
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
        a: 'Yes, there is a daily limit, with separate limits for conversations and Chef meal planning. Sasha will tell you when access resumes if you reach a limit. At the daily limit, processing pauses until midnight in your time zone. Sasha then processes queued messages while your access remains active.',
      },
      {
        q: 'How do I cancel my subscription?',
        a: 'Send /cancel in the bot or open Telegram subscription settings before the next charge. Access continues until the paid period ends. For payment and refund questions, use /paysupport.',
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
