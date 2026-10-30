import { pricingCopy } from './pricing-copy';

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
    skip: 'К содержимому',
    home: 'Mealset — на главную',
    start: 'Начать с Сашей',
    meet: 'Познакомиться с Сашей',
    foodAlt: 'Лосось, крупа и свежие овощи в мятной керамической миске',
    sashaAlt: 'Саша — дружелюбная мятная миска со свежими продуктами',
    boundary: [
      'Саша — искусственный интеллект.',
      'Помогает с повседневным питанием и не заменяет врача.',
    ],
    eyebrow: 'ТВОЙ ИИ-НУТРИЦИОЛОГ В TELEGRAM',
    mainNav: 'Основная навигация',
    languageLabel: 'Язык страницы',
    dayRange: 'Диапазон итога дня',
    sasha: 'Саша',
    aboutExample: 'О примере и расчётах',
    compactLabels: ['Калории', 'Память', 'Советы', 'Меню', 'Покупки', 'Забота'],
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
    skip: 'Skip to content',
    home: 'Mealset home',
    start: 'Start with Sasha',
    meet: 'Meet Sasha',
    foodAlt: 'Salmon, grains and fresh vegetables in a mint ceramic bowl',
    sashaAlt: 'Sasha, a friendly mint bowl filled with fresh food',
    boundary: [
      'Sasha is artificial intelligence.',
      'Everyday nutrition support, not a substitute for medical care.',
    ],
    eyebrow: 'YOUR AI NUTRITIONIST IN TELEGRAM',
    mainNav: 'Main navigation',
    languageLabel: 'Page language',
    dayRange: 'Day total range',
    sasha: 'Sasha',
    aboutExample: 'About this example and its calculations',
    compactLabels: [
      'Calories',
      'Memory',
      'Advice',
      'Meals',
      'Shopping',
      'Check-ins',
    ],
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
  pt: {
    nav: ['Como funciona', 'Abordagem', 'Preço'],
    headline: ['Aproveita a vida.', 'A Sasha trata da comida.'],
    research: {
      source: 'Revisão de 28 publicações · JMIR, 2021',
      title: 'Demasiado complicado. Demasiado demorado.',
      body: 'A complexidade e o tempo exigido estão entre os motivos pelos quais as pessoas evitam ou deixam de usar aplicações de nutrição.',
      steps: [
        'Encontrar o alimento',
        'Indicar a porção',
        'Repetir todos os dias',
      ],
      solution: 'Com a Sasha, basta uma foto ou uma mensagem.',
      detail: 'Ela trata da pesquisa de alimentos, do registo e dos cálculos.',
    },
    intro:
      'Queres perder peso ou ganhar massa muscular, mas tens dificuldade em manter a consistência e registar cada refeição é uma maçada? A Sasha trata do registo, ajuda-te a perceber os teus hábitos alimentares e apoia mudanças graduais que são fáceis de manter.',
    see: 'Ver como funciona',
    paid: `${pricingCopy.pt.starsPrice} por mês · ${pricingCopy.pt.estimate}`,
    example: 'Exemplo de conversa',
    role: 'Nutricionista com IA',
    skip: 'Saltar para o conteúdo',
    home: 'Mealset — página inicial',
    start: 'Falar com a Sasha',
    meet: 'Conhecer a Sasha',
    foodAlt:
      'Salmão, cereais e legumes frescos numa taça de cerâmica cor de menta',
    sashaAlt:
      'A Sasha, uma taça simpática cor de menta cheia de alimentos frescos',
    boundary: [
      'A Sasha é inteligência artificial.',
      'Apoio à alimentação do dia a dia, não substitui os cuidados médicos.',
    ],
    eyebrow: 'O TEU NUTRICIONISTA COM IA NO TELEGRAM',
    mainNav: 'Navegação principal',
    languageLabel: 'Idioma da página',
    dayRange: 'Intervalo do total do dia',
    sasha: 'Sasha',
    aboutExample: 'Sobre este exemplo e os cálculos',
    compactLabels: [
      'Calorias',
      'Memória',
      'Conselhos',
      'Ementa',
      'Compras',
      'Apoio',
    ],
    demoTitle: ['Vive a tua vida.', 'Deixa a Sasha ajudar com a comida.'],
    stories: [
      {
        situation: 'Aproveitas a tua comida.',
        action: 'A Sasha conta as calorias.',
        headline: 'Mais de 8000 alimentos.',
        promise: 'Dos números à ação.',
        intro:
          'Envia uma foto, uma nota de voz ou algumas palavras. Recebe uma análise nutricional e passos práticos para melhorar a tua alimentação.',
        points: [
          {
            title: 'USDA + EFSA.',
            body: 'Mais de 8000 alimentos no catálogo baseado na USDA. O catálogo continua a crescer e está prevista a Base de Dados Europeia de Composição de Alimentos da EFSA (EU FCDB) como fonte adicional.',
          },
          {
            title: 'Não está no catálogo? A Sasha pesquisa.',
            body: 'Para alimentos fora do catálogo, a Sasha procura ingredientes e dados nutricionais para os incluir no teu dia.',
          },
          {
            title: 'Passos práticos rumo ao teu objetivo.',
            body: 'A Sasha mostra o total do teu dia e sugere o que acrescentar, trocar ou ajustar na próxima refeição.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Tens a agenda cheia.',
        action: 'A Sasha lembra-se dos detalhes.',
        headline: 'Lembra-se de ti.',
        promise: 'Planeia a pensar em ti.',
        intro:
          'O nosso sistema de memória próprio permite-te retomar de onde ficaste.',
        points: [
          {
            title: 'Os teus gostos e hábitos.',
            body: 'Os conselhos partem do que já partilhaste.',
          },
          {
            title: 'A tua despensa e os prazos de validade.',
            body: 'A Sasha regista o que sobra e os respetivos prazos de validade, e planeia as refeições em função das tuas provisões e do que convém usar primeiro.',
          },
          {
            title: 'Planos para todos lá em casa.',
            body: 'Lembra-se de quantas pessoas há na tua família e de quem partilha as refeições contigo. Usa isto para planear as porções, a cozinha e as quantidades da lista de compras.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Defines os teus objetivos.',
        action: 'A Sasha ajuda-te a lá chegar.',
        headline: 'Quanto comer.',
        promise: 'O que mudar.',
        intro:
          'A Sasha percebe como se relacionam a alimentação, o peso, o exercício e os hábitos alimentares, e explica o que isso significa para ti.',
        points: [
          {
            title: 'Perder, ganhar ou manter peso.',
            body: 'Ajuda-te a perceber as tuas necessidades energéticas e a ajustar a alimentação quando o progresso estagna.',
          },
          {
            title: 'Equilibrar o que já comes.',
            body: 'Aprende a obter proteína, fibra, vitaminas e minerais a partir de alimentos do dia a dia.',
          },
          {
            title: 'Comer em função dos treinos.',
            body: 'Recebe sugestões de refeições antes e depois do exercício, para a recuperação e a hidratação.',
          },
          {
            title: 'Perceber a fome e o excesso de comida.',
            body: 'Explora como o stress e os hábitos influenciam o que comes e encontra mudanças possíveis, sem regras alimentares rígidas.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Vives ao teu ritmo.',
        action: 'A Sasha planeia as tuas refeições.',
        headline: 'Mais de 500 receitas.',
        promise: 'Um plano só teu.',
        intro:
          'Mais de 500 receitas para uma ementa à medida dos teus objetivos e gostos. A coleção continua a crescer.',
        points: [
          {
            title: 'Cozinha que se ajusta ao teu horário.',
            body: 'A Sasha escolhe pratos do catálogo de acordo com o tempo que queres dedicar a cozinhar.',
          },
          {
            title: 'Assente na ciência da nutrição.',
            body: 'O nosso método de planeamento baseia-se nas recomendações atuais de nutrição.',
          },
          {
            title: 'Feito à medida da tua vida.',
            body: 'Os teus objetivos, gostos, ingredientes e tempo moldam a ementa.',
          },
        ],
        soon: '',
      },
      {
        situation: 'Segues com o teu dia.',
        action: 'A Sasha trata da lista de compras.',
        headline: 'Refeições planeadas.',
        promise: 'Compras bem pensadas.',
        intro: 'Abre a lista. O que falta ao teu plano já lá está.',
        points: [
          {
            title: 'Verifica o que tens.',
            body: 'A Sasha compara a tua ementa com a comida que tens em casa.',
          },
          {
            title: 'Lista o que precisas.',
            body: 'Uma única lista de compras para as refeições escolhidas.',
          },
          {
            title: 'Prática na loja.',
            body: 'Assinala o que compraste diretamente na conversa.',
          },
        ],
        soon: 'Em breve: a Sasha poderá montar um cesto em qualquer loja online de supermercado — escolhe a tua preferida.',
      },
      {
        situation: 'Esqueces-te da comida.',
        action: 'A Sasha vem ter contigo.',
        headline: 'No momento certo.',
        promise: 'O apoio de que precisas.',
        intro: 'Atenção pessoal que se adapta ao teu ritmo.',
        points: [
          {
            title: 'Ajusta-se ao teu dia.',
            body: 'O teu horário e as horas das refeições orientam quando e porquê a Sasha te contacta.',
          },
          {
            title: 'Aprende com as tuas respostas.',
            body: 'A IA adapta a abordagem à forma como reages.',
          },
          {
            title: 'Podes ajustá-lo.',
            body: 'Escolhe a frequência e o tipo de apoio que mais te convêm.',
          },
        ],
        soon: '',
      },
    ],
    demoNote:
      'Uma ilustração da Sasha em ação, não uma captura de ecrã do Telegram. Os diálogos são adaptados; os cálculos vêm de exemplos guardados à parte. No teu chat, a Sasha usa os teus alimentos e objetivos.',
    choose: 'Escolher um exemplo',
    try: 'Experimenta continuar a conversa',
    reset: 'Voltar ao exemplo original',
    open: 'Abrir a Sasha no Telegram',
    approachLabel: 'ABORDAGEM DA SASHA',
    approachTitle: ['Do teu lado.', 'Com base na ciência.'],
    approachBody:
      'Ela explica as suas recomendações, deixa espaço para a comida de que gostas e tem em conta a vida real. Se não houver evidência suficiente, diz isso mesmo.',
    principles: [
      {
        title: 'Perceber o porquê.',
        body: 'Pergunta pela fonte e pelo raciocínio por trás de uma sugestão. A Sasha baseia-se em investigação e diretrizes de nutrição.',
      },
      {
        title: 'Tornar tudo possível.',
        body: 'Ajuda-te a adaptar a alimentação aos teus gostos, objetivos e horários. Não se espera perfeição.',
      },
      {
        title: 'Conhecer os limites.',
        body: 'Indica quando as estimativas são aproximadas. Apoia a alimentação do dia a dia e não substitui um médico.',
      },
    ],
    sources: 'Referências científicas',
    who: 'OMS · alimentação saudável',
    efsa: 'EFSA · valores nutricionais de referência',
    faqTitle: 'Antes da tua primeira conversa',
    faq: [
      {
        q: 'Como começo?',
        a: 'Abre o @mealset_bot no Telegram e lê as condições da subscrição mensal de 1500 Telegram Stars. Depois de pagares, conta à Sasha os teus objetivos e hábitos. O serviço destina-se a pessoas com 18 anos ou mais.',
      },
      {
        q: 'Quão exatas são as estimativas por foto?',
        a: 'São aproximadas: numa foto pode não ser visível o peso da porção, o óleo de cozinha ou os ingredientes do molho. Envia um esclarecimento e a Sasha atualiza o registo. A demonstração do site usa valores ilustrativos.',
      },
      {
        q: 'Como sabe a Sasha que alimentos tenho em casa?',
        a: 'A Sasha guarda os registos anteriores, o que já cozinharam juntos e os ingredientes que sobram. Usa isso para sugerir as próximas refeições, por isso não precisas de fazer uma lista nova de cada vez. Se algo mudar fora das vossas conversas, basta uma breve atualização.',
      },
      {
        q: 'Existem limites de utilização?',
        a: 'Sim, há um limite diário, com limites separados para conversas e para o planeamento de ementas pelo Chef. Se atingires um limite, a Sasha diz-te quando o acesso é retomado. No limite diário, o processamento fica em pausa até à meia-noite no teu fuso horário. Depois, a Sasha processa as mensagens em fila enquanto o teu acesso estiver ativo.',
      },
      {
        q: 'Como cancelo a subscrição?',
        a: 'Envia /cancel no bot ou abre as definições de subscrições do Telegram antes da próxima cobrança. O acesso continua até ao fim do período pago. Para questões de pagamento e reembolso, usa /paysupport.',
      },
      {
        q: 'Onde posso ler as condições e o tratamento dos meus dados?',
        a: 'Usa /terms no bot para os termos de utilização e /privacy para a informação de privacidade. Lê-os antes de pagares e de partilhares informação pessoal.',
      },
      {
        q: 'A Sasha substitui um médico?',
        a: 'Não. A Sasha é uma IA de apoio à alimentação do dia a dia. Não diagnostica doenças nem prescreve tratamentos. Fala dos assuntos médicos com um médico.',
      },
    ],
    closing: 'Vamos começar pelo que gostas de comer.',
    closingBody:
      'Fala de ti à Sasha. Encontra uma abordagem à comida que caiba na tua vida.',
    footer: 'Consciência. Disciplina. Autocuidado.',
  },
};
