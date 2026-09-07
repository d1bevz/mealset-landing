export type Locale = 'ru' | 'en';
export const copy = {
  ru: {
    skip: 'К содержимому',
    home: 'Mealset — на главную',
    nav: ['Подход', 'Как это работает', 'Саша'],
    start: 'Начать с Сашей',
    meet: 'Познакомиться с Сашей',
    eyebrow: 'ТВОЙ ИИ-НУТРИЦИОЛОГ В TELEGRAM',
    headline: ['Хорошее питание.', 'Привычное дело.'],
    intro: [
      'Понять свой рацион. Найти свой ритм.',
      'Саша поможет превратить заботу о себе в привычку.',
    ],
    foodAlt: 'Лосось, крупа и свежие овощи в мятной керамической миске',
    note: ['Место для еды.', 'И для жизни.'],
    mindsetEyebrow: 'БОЛЬШЕ, ЧЕМ ПЛАН ПИТАНИЯ',
    mindsetTitle: ['Всё начинается', 'с отношения к себе.'],
    mindsetBody:
      'Mealset — это meal + mindset. То, что ты ешь, и то, как выбираешь заботиться о себе каждый день.',
    values: [
      {
        title: 'Понимать.',
        body: 'Знать, что подходит тебе и почему. Саша объяснит логику рекомендаций простыми словами.',
        label: 'Осознанность',
      },
      {
        title: 'Держать курс.',
        body: 'Собирать небольшие действия в устойчивый ритм. С планом, который учитывает твой день.',
        label: 'Дисциплина',
      },
      {
        title: 'Быть на своей стороне.',
        body: 'Оставлять место любимой еде, усталости и переменам. И подстраивать план под реальность.',
        label: 'Забота о себе',
      },
    ],
    howEyebrow: 'ОДИН РАЗГОВОР. МНОГО МАЛЕНЬКИХ ПЕРЕМЕН.',
    howTitle: ['Твой день меняется.', 'Саша в курсе.'],
    howBody:
      'Расскажи о цели, вкусах и привычном дне. Саша поможет составить план, вести дневник питания и найти замену, если всё пошло иначе.',
    howNote: 'Всё в Telegram — там, где ты уже общаешься.',
    foodEyebrow: 'ЕДА ОСТАЁТСЯ ЕДОЙ',
    foodTitle: ['Вкусно.', 'Разнообразно.', 'По-твоему.'],
    foodDetailAlt:
      'Паста болоньезе с мясным соусом и базиликом на мятной тарелке',
    foodCaption: [
      'Любимые продукты. Понятные блюда.',
      'План с учётом вкусов, времени и бюджета.',
    ],
    sashaAlt: 'Саша — дружелюбная мятная миска со свежими продуктами',
    sashaName: 'Саша',
    sashaEyebrow: 'ЗНАКОМЬСЯ, САША',
    sashaTitle: ['На твоей стороне.', 'Со своим мнением.'],
    sashaBody:
      'Я — ИИ-нутрициолог Mealset. Помогу разобраться с питанием и двигаться к твоей цели. Если план слишком сложный — скажу. И предложу тот, с которым можно жить.',
    quote: ['«Давай начнём с того,', 'что тебе нравится есть.»'],
    talk: 'Начать разговор',
    access: [
      'Доступ к работе с Сашей платный.',
      'Условия — в Telegram до оплаты.',
    ],
    closing: ['Хорошие привычки.', 'Твоя обычная жизнь.'],
    promise: 'Обещание Mealset',
    footerValues: 'Осознанность. Дисциплина. Забота о себе.',
    boundary: [
      'Саша — искусственный интеллект.',
      'Помогает с повседневным питанием и не заменяет врача.',
    ],
    demoAria: 'Примеры разговора с Сашей',
    demoRole: 'ИИ-нутрициолог · Mealset',
    demoLabel: 'Пример диалога',
    demoNext: 'Посмотреть продолжение',
    demoBack: 'Вернуться к началу примера',
    demoCaption:
      'Сценарии показывают подход Саши. Ответы в твоём чате будут зависеть от контекста.',
    examples: [
      {
        id: 'plan',
        label: 'Составить план',
        question:
          'Хочу наладить питание. Но каждый день готовить не получится.',
        answer:
          'Учтём это в плане. Можно готовить основу на два дня и менять гарнир. Какие блюда тебе нравятся?',
        followup: 'Люблю рыбу, овощи и пасту.',
        response:
          'От них и оттолкнёмся. Сколько времени обычно есть на готовку?',
      },
      {
        id: 'change',
        label: 'Поменять планы',
        question:
          'Сегодня снова поздно закончу. Ужин из плана не успею приготовить.',
        answer:
          'Проверила кладовку: в холодильнике осталась порция риса с запечёнными овощами со вчерашней готовки. Яйца тоже есть. Добавим яйцо — и ужин будет готов примерно за 10 минут.',
        followup: 'Хорошо, а как сделать, чтобы рис не был сухим?',
        response:
          'Добавь к рису с овощами ложку воды и прогрей под крышкой. Затем вмешай яйцо и доведи до готовности — получится новое блюдо из того, что осталось.',
      },
      {
        id: 'understand',
        label: 'Разобраться',
        question: 'Нужно совсем отказываться от любимой пасты?',
        answer:
          'Давай посмотрим, как вписать её в твой рацион. Какую пасту обычно готовишь?',
        followup: 'С томатами и сыром.',
        response:
          'Учтём её в плане вместе с остальными блюдами. Начнём с привычной порции и твоей цели.',
      },
    ],
  },
  en: {
    skip: 'Skip to content',
    home: 'Mealset home',
    nav: ['Our approach', 'How it works', 'Meet Sasha'],
    start: 'Start with Sasha',
    meet: 'Meet Sasha',
    eyebrow: 'YOUR AI NUTRITION COMPANION IN TELEGRAM',
    headline: ['Good food.', 'Second nature.'],
    intro: [
      'Understand your food. Find your rhythm.',
      'Sasha helps make taking care of yourself an everyday habit.',
    ],
    foodAlt: 'Salmon, grains and fresh vegetables in a mint ceramic bowl',
    note: ['Room for food.', 'And for life.'],
    mindsetEyebrow: 'MORE THAN A MEAL PLAN',
    mindsetTitle: ['It starts with how', 'you care for yourself.'],
    mindsetBody:
      'Mealset brings together meal and mindset. What you eat, and how you choose to take care of yourself, every day.',
    values: [
      {
        title: 'Understand.',
        body: 'Learn what works for you and why. Sasha explains the thinking behind each suggestion in plain language.',
        label: 'Awareness',
      },
      {
        title: 'Stay the course.',
        body: 'Build a steady rhythm from small actions, with a plan that fits the day you actually have.',
        label: 'Discipline',
      },
      {
        title: 'Be on your own side.',
        body: 'Leave room for favourite foods, tired evenings and changing plans. Adjust as life happens.',
        label: 'Self-care',
      },
    ],
    howEyebrow: 'ONE CONVERSATION. SMALL, EVERYDAY CHANGES.',
    howTitle: ['Your day changes.', 'Sasha keeps up.'],
    howBody:
      'Share your goals, tastes and everyday routine. Sasha helps you make a meal plan, keep a food diary and find alternatives when the day takes a turn.',
    howNote: 'All in Telegram, right where you already chat.',
    foodEyebrow: 'LET FOOD BE FOOD',
    foodTitle: ['Enjoyable.', 'Varied.', 'Yours.'],
    foodDetailAlt:
      'Pasta bolognese with a rich meat sauce and basil on a mint ceramic plate',
    foodCaption: [
      'Favourite ingredients. Familiar meals.',
      'A plan that fits your tastes, time and budget.',
    ],
    sashaAlt: 'Sasha, a friendly mint bowl filled with fresh food',
    sashaName: 'Sasha',
    sashaEyebrow: 'MEET SASHA',
    sashaTitle: ['On your side.', 'With a point of view.'],
    sashaBody:
      'I’m Mealset’s AI nutrition companion. I help you make sense of your food and work towards your goals. If a plan asks too much of you, I’ll say so. Then we’ll find one you can live with.',
    quote: ['“Let’s start with', 'what you enjoy eating.”'],
    talk: 'Start a conversation',
    access: [
      'Working with Sasha requires paid access.',
      'See the terms in Telegram before you pay.',
    ],
    closing: ['Good habits.', 'Your everyday life.'],
    promise: 'The Mealset promise',
    footerValues: 'Awareness. Discipline. Self-care.',
    boundary: [
      'Sasha is artificial intelligence.',
      'Everyday nutrition support, not a substitute for medical care.',
    ],
    demoAria: 'Example conversations with Sasha',
    demoRole: 'AI nutrition companion · Mealset',
    demoLabel: 'Example conversation',
    demoNext: 'See how it continues',
    demoBack: 'Back to the start',
    demoCaption:
      'These examples illustrate Sasha’s approach. Replies in your own chat depend on your context.',
    examples: [
      {
        id: 'plan',
        label: 'Make a plan',
        question: 'I want to eat better, but I can’t cook every day.',
        answer:
          'We can work with that. You could cook a base for two days and change the sides. What meals do you enjoy?',
        followup: 'I like fish, vegetables and pasta.',
        response:
          'Let’s build around those. How much time do you usually have to cook?',
      },
      {
        id: 'change',
        label: 'Change plans',
        question:
          'I’m working late again. I won’t have time to cook the dinner we planned.',
        answer:
          'I checked your pantry: there’s a portion of rice and roasted vegetables left in the fridge from yesterday’s cooking. You have eggs too. Add an egg and dinner will be ready in about 10 minutes.',
        followup: 'Sounds good. How do I keep the rice from drying out?',
        response:
          'Add a spoonful of water to the rice and vegetables and heat with a lid on. Then stir in an egg and cook it through — a new dish from what’s left.',
      },
      {
        id: 'understand',
        label: 'Understand',
        question: 'Do I have to give up my favourite pasta?',
        answer:
          'Let’s see how it can fit into your meals. How do you usually make it?',
        followup: 'With tomatoes and cheese.',
        response:
          'We’ll make room for it alongside your other meals. Let’s start with your usual portion and your goal.',
      },
    ],
  },
};
