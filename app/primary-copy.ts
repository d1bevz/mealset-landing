import { pricingCopy } from './pricing';

export const primaryCopy = {
  ru: {
    nav: ['Как это работает', 'Подход', 'Стоимость'],
    headline: ['Наслаждайся жизнью.', 'Саша разберётся с едой.'],
    research: {
      source: 'Обзор 28 публикаций · JMIR, 2021',
      title: 'Слишком сложно. Слишком долго.',
      body: 'Сложность и затраты времени — среди причин, по которым люди не начинают или перестают пользоваться приложениями для питания.',
      steps: ['Найти продукт', 'Ввести порцию', 'Повторять каждый день'],
      solution: 'С Сашей — фото или сообщение.',
      detail: 'Поиск продуктов, дневник и расчёты она берёт на себя.',
    },
    intro:
      'Хочешь похудеть или набрать мышцы, но сложно сохранять постоянство, а записывать каждый приём пищи вручную утомляет? Саша возьмёт учёт на себя, поможет лучше понять свои пищевые привычки и постепенно изменить их — так, чтобы тебе было легко продолжать.',
    see: 'Посмотреть, как это работает',
    paid: `${pricingCopy.ru.starsPrice} в месяц · ${pricingCopy.ru.estimate}`,
    example: 'Пример диалога',
    role: 'ИИ-нутрициолог',
    heroQuestion: 'Запиши этот обед. Масла — чайная ложка.',
    heroAnswer:
      'Лосось, крупу и овощи записала, масло учла. Калории и нутриенты добавила в итог дня. Порции оценила по фото — можешь поправить.',
    demoTitle: ['Ты живёшь.', 'Саша помогает с питанием.'],
    stories: [
      {
        situation: 'Ты ешь и наслаждаешься.',
        action: 'Саша считает калории.',
        headline: 'Более 8 000 продуктов.',
        promise: 'От подсчётов — к действиям.',
        intro:
          'Пришли фото, голосовое или пару слов. Получи расчёт и конкретные шаги по улучшению питания.',
        points: [
          {
            title: 'USDA + EFSA.',
            body: 'Более 8 000 продуктов в базовом каталоге USDA. Каталог постоянно растёт; планируем дополнить его европейской базой состава продуктов EU FCDB от EFSA.',
          },
          {
            title: 'Нет в базе? Саша найдёт данные.',
            body: 'Для продукта вне каталога Саша ищет данные о составе и пищевой ценности, чтобы учесть его в твоём дне.',
          },
          {
            title: 'Конкретные шаги к твоей цели.',
            body: 'Саша покажет итог дня и подскажет, что добавить, заменить или скорректировать в следующем приёме пищи.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Ты занят.',
        action: 'Саша помнит детали.',
        headline: 'Помнит о тебе.',
        promise: 'Планирует с учётом этого.',
        intro:
          'Собственная система памяти — чтобы не рассказывать о себе заново.',
        points: [
          {
            title: 'Твои вкусы и привычки.',
            body: 'Советы опираются на то, что ты уже рассказал.',
          },
          {
            title: 'Остатки и сроки годности.',
            body: 'Саша ведёт учёт продуктов дома и сроков годности. Планирует блюда с учётом запасов и того, что стоит использовать первым.',
          },
          {
            title: 'Учитывает всю семью.',
            body: 'Помнит, сколько человек в семье и кто ест вместе с тобой. Учитывает это в порциях, плане готовки и количестве продуктов для покупок.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Ты ставишь цели.',
        action: 'Саша даёт рекомендации.',
        headline: 'Сколько есть.',
        promise: 'Что изменить в рационе.',
        intro:
          'Саша знает, как связаны питание, вес, тренировки и пищевые привычки, и объясняет, что это значит для тебя.',
        points: [
          {
            title: 'Снизить, набрать или удержать вес.',
            body: 'Поможет определить потребность в энергии и скорректировать питание, если вес перестал меняться.',
          },
          {
            title: 'Сбалансировать то, что ты ешь.',
            body: 'Объяснит, как добрать белок, клетчатку, витамины и минералы обычными продуктами.',
          },
          {
            title: 'Питаться с учётом тренировок.',
            body: 'Подскажет, что есть до и после нагрузки, как поддержать восстановление и восполнить жидкость.',
          },
          {
            title: 'Разобраться с голодом и перееданием.',
            body: 'Поможет заметить связь еды со стрессом и привычками и выбрать посильные изменения без жёстких запретов.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Ты живёшь в своём ритме.',
        action: 'Саша планирует меню.',
        headline: 'Более 500 рецептов.',
        promise: 'Только твой план.',
        intro:
          'Более 500 рецептов для меню под твои цели и вкусы. Коллекция постоянно пополняется.',
        points: [
          {
            title: 'Готовка под твой график.',
            body: 'Саша подбирает блюда из каталога с учётом времени, которое ты готов потратить.',
          },
          {
            title: 'С опорой на науку.',
            body: 'Наша методология учитывает современные рекомендации по питанию.',
          },
          {
            title: 'Под твою жизнь.',
            body: 'Твои цели, вкусы, продукты и время определяют меню.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Ты занимаешься делами.',
        action: 'Саша готовит список покупок.',
        headline: 'Меню готово.',
        promise: 'Покупки тоже продуманы.',
        intro:
          'Открой список — в нём уже то, чего не хватает для твоего плана.',
        points: [
          {
            title: 'Сначала проверит запасы.',
            body: 'Саша сопоставит меню с тем, что есть дома.',
          },
          {
            title: 'Соберёт недостающее.',
            body: 'Один список продуктов для выбранных блюд.',
          },
          {
            title: 'Удобно в магазине.',
            body: 'Отмечай купленное прямо в разговоре.',
          },
        ],
        soon: 'Скоро: Саша сможет собрать корзину в любом онлайн-магазине доставки продуктов — выбирай тот, который любишь.',
      },
      {
        situation: 'Ты не думаешь о еде.',
        action: 'Саша сама напишет.',
        headline: 'В нужный момент.',
        promise: 'С вниманием к тебе.',
        intro: 'Персональная поддержка, которая подстраивается под твой ритм.',
        points: [
          {
            title: 'Учитывает твой день.',
            body: 'График жизни и приёмов пищи помогают выбрать момент и повод написать.',
          },
          {
            title: 'Учится на твоих реакциях.',
            body: 'ИИ адаптирует инициативу по тому, как ты отвечаешь.',
          },
          {
            title: 'Настраивается под тебя.',
            body: 'Можно менять частоту и характер поддержки.',
          },
        ],
        soon: '',
      },
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
    headline: ['Enjoy your life.', 'Sasha handles the food.'],
    research: {
      source: 'Review of 28 publications · JMIR, 2021',
      title: 'Too complicated. Too time-consuming.',
      body: 'Complexity and time demands are among the reasons people avoid or stop using nutrition apps.',
      steps: ['Find the food', 'Enter the portion', 'Repeat every day'],
      solution: 'With Sasha, send a photo or a message.',
      detail: 'She takes care of food lookup, logging and calculations.',
    },
    intro:
      'Want to lose weight or build muscle, but struggle to stay consistent and find logging every meal a chore? Sasha takes care of tracking, helps you understand your eating habits and supports gradual changes that feel easy to stick with.',
    see: 'See how it works',
    paid: `${pricingCopy.en.starsPrice} per month · ${pricingCopy.en.estimate}`,
    example: 'Example conversation',
    role: 'AI nutritionist',
    heroQuestion: 'Log this lunch. I used a teaspoon of oil.',
    heroAnswer:
      'Salmon, grains and vegetables logged, including the oil. Calories and nutrients added to your daily totals. I estimated portions from the photo — you can adjust them.',
    demoTitle: ['Live your life.', 'Let Sasha help with food.'],
    stories: [
      {
        situation: 'You enjoy your food.',
        action: 'Sasha counts the calories.',
        headline: 'Over 8,000 foods.',
        promise: 'From numbers to action.',
        intro:
          'Send a photo, a voice note or a few words. Get a nutrition breakdown and practical steps to improve your diet.',
        points: [
          {
            title: 'USDA + EFSA.',
            body: 'Over 8,000 foods in the USDA-based catalogue. It keeps growing, with EFSA’s European Food Composition Database (EU FCDB) planned as an additional source.',
          },
          {
            title: 'Not in the catalogue? Sasha looks it up.',
            body: 'For foods outside the catalogue, Sasha searches for ingredients and nutrition data to include them in your day.',
          },
          {
            title: 'Practical steps towards your goal.',
            body: 'Sasha shows your daily totals and suggests what to add, swap or adjust in your next meal.',
          },
        ],
        soon: '',
      },
      {
        situation: 'You’re busy.',
        action: 'Sasha remembers the details.',
        headline: 'Remembers you.',
        promise: 'Plans around you.',
        intro:
          'Our own memory system means you can pick up where you left off.',
        points: [
          {
            title: 'Your tastes and habits.',
            body: 'Advice builds on what you’ve already shared.',
          },
          {
            title: 'Your pantry and expiry dates.',
            body: 'Sasha tracks what’s left and its expiry dates, then plans meals around your supplies and what needs using first.',
          },
          {
            title: 'Plans for everyone at home.',
            body: 'Remembers how many people are in your family and who shares your meals. Uses this to plan portions, cooking and the quantities on your shopping list.',
          },
        ],
        soon: '',
      },
      {
        situation: 'You set your goals.',
        action: 'Sasha helps you get there.',
        headline: 'How much to eat.',
        promise: 'What to change.',
        intro:
          'Sasha understands how food, weight, exercise and eating habits connect — and explains what that means for you.',
        points: [
          {
            title: 'Lose, gain or maintain weight.',
            body: 'Get help understanding your energy needs and adjusting your food intake when progress stalls.',
          },
          {
            title: 'Balance the food you already eat.',
            body: 'Learn how to get protein, fibre, vitamins and minerals from everyday foods.',
          },
          {
            title: 'Eat around your training.',
            body: 'Get suggestions for meals before and after exercise, recovery and hydration.',
          },
          {
            title: 'Understand hunger and overeating.',
            body: 'Explore how stress and habits affect your eating, and find manageable changes without rigid food rules.',
          },
        ],
        soon: '',
      },
      {
        situation: 'You live at your own pace.',
        action: 'Sasha plans your meals.',
        headline: 'Over 500 recipes.',
        promise: 'A plan that’s only yours.',
        intro:
          'Over 500 recipes for a menu shaped around your goals and tastes. The collection keeps growing.',
        points: [
          {
            title: 'Cooking that fits your schedule.',
            body: 'Sasha selects dishes from the catalogue to fit the time you want to spend cooking.',
          },
          {
            title: 'Grounded in nutrition science.',
            body: 'Our planning method draws on current nutrition recommendations.',
          },
          {
            title: 'Built around your life.',
            body: 'Your goals, tastes, ingredients and time shape the menu.',
          },
        ],
        soon: '',
      },
      {
        situation: 'You get on with your day.',
        action: 'Sasha sorts your shopping list.',
        headline: 'Meals planned.',
        promise: 'Shopping thought through.',
        intro:
          'Open your list. What’s missing from your plan is already there.',
        points: [
          {
            title: 'Checks what you have.',
            body: 'Sasha compares your menu with the food at home.',
          },
          {
            title: 'Lists what you need.',
            body: 'One shopping list for your chosen meals.',
          },
          {
            title: 'Easy to use in store.',
            body: 'Tick off purchases right in the conversation.',
          },
        ],
        soon: 'Coming soon: Sasha will be able to build a basket at any online grocery store — choose your favourite.',
      },
      {
        situation: 'Food slips your mind.',
        action: 'Sasha checks in.',
        headline: 'The right moment.',
        promise: 'The support you need.',
        intro: 'Personal attention that adapts to your rhythm.',
        points: [
          {
            title: 'Fits your day.',
            body: 'Your schedule and meal times guide when and why Sasha checks in.',
          },
          {
            title: 'Learns from your responses.',
            body: 'AI adapts its approach to how you react.',
          },
          {
            title: 'You can adjust it.',
            body: 'Choose the frequency and kind of support that suits you.',
          },
        ],
        soon: '',
      },
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
