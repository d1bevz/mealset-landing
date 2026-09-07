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
      'Записывай еду текстом, голосом или фото.',
      'Саша помнит тебя и опирается на науку.',
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
    howEyebrow: 'ПОМНИТ ТЕБЯ И ВАШИ РАЗГОВОРЫ',
    howTitle: ['Вы уже знакомы.', 'И завтра тоже.'],
    howBody:
      'Любимая паста. Нелюбимая кинза. Привычка готовить на два дня. Саша запоминает то, чем ты делишься, и учитывает это в следующих разговорах, блюдах и планах.',
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
      'Я — ИИ-нутрициолог Mealset. Помню, что ты любишь, что не любишь и о чём мы говорили. Помогу разобраться с рационом, а свои рекомендации объясню с опорой на научные данные. Если чего-то не знаю — так и скажу.',
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
        id: 'taste',
        label: 'Твои вкусы',
        question: 'Предложи ужин на завтра.',
        answer:
          'Помню, ты любишь пасту с томатами, а кинзу не любишь. Предлагаю пасту с индейкой и томатным соусом — без кинзы. Рассчитаю на два дня, как мы обсуждали.',
        followup: 'А можно в этот раз без мяса?',
        response:
          'Конечно. Заменим индейку на фасоль, томатный соус оставим. Помню, готовить отдельно на каждый день тебе неудобно — рассчитаю две порции.',
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
        id: 'science',
        label: 'Научный подход',
        question: 'Почему ты предлагаешь добавлять бобовые и цельнозерновые?',
        answer:
          'Это источники клетчатки, витаминов и минералов. ВОЗ рекомендует включать их в разнообразный рацион вместе с овощами и фруктами. Конкретные блюда подберём с учётом твоих вкусов.',
        followup: 'Можешь показать, откуда это?',
        response:
          'Да. Это рекомендации ВОЗ по здоровому питанию, раздел об углеводах и пищевых волокнах. Объясню, какие выводы относятся к твоему рациону и где данных пока недостаточно.',
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
      'Log food by text, voice note or photo.',
      'Sasha remembers you and draws on science.',
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
    howEyebrow: 'REMEMBERS YOU AND YOUR CONVERSATIONS',
    howTitle: ['She knows you.', 'Tomorrow, too.'],
    howBody:
      'Favourite pasta. A dislike of coriander. Cooking for two days at once. Sasha remembers what you share and uses it in future conversations, meals and plans.',
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
      'I’m Mealset’s AI nutrition companion. I remember your likes, dislikes and what we’ve discussed. I help you understand your food and explain my recommendations using scientific evidence. If I don’t know something, I’ll say so.',
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
        id: 'taste',
        label: 'Your tastes',
        question: 'Suggest dinner for tomorrow.',
        answer:
          'I remember you love tomato pasta and dislike coriander. How about pasta with turkey and tomato sauce, without coriander? I’ll plan enough for two days, as we discussed.',
        followup: 'Could we make it meat-free this time?',
        response:
          'Of course. We’ll swap the turkey for beans and keep the tomato sauce. I remember cooking every day doesn’t work for you, so I’ll plan two portions.',
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
        id: 'science',
        label: 'The science',
        question: 'Why do you suggest adding beans and whole grains?',
        answer:
          'They provide fibre, vitamins and minerals. WHO recommends including them in a varied diet alongside fruit and vegetables. We’ll choose the actual meals around what you enjoy.',
        followup: 'Can you show me the source?',
        response:
          'Yes. It’s WHO’s healthy diet guidance, in the section on carbohydrates and dietary fibre. I’ll explain which findings apply to your meals and where the evidence is still limited.',
      },
    ],
  },
};
