export const premiumCopy = {
  ru: {
    nav: ['Подход', 'Саша', 'Начать'],
    eyebrow: 'САША. ИИ-НУТРИЦИОЛОГ В TELEGRAM.',
    hero: ['Питание.', 'Становится', 'личным.'],
    heroBody:
      'Записывает еду по сообщению, голосу или фото.\nПомнит тебя. Опирается на науку.',
    start: 'Познакомиться с Сашей',
    scroll: 'Открыть Mealset',
    imageAlt: 'Свежий романеско с зелёными листьями на глубоком зелёном фоне',
    thesisLabel: 'ЛИЧНЫЙ ПОДХОД',
    thesis: ['Всё начинается', 'с внимания.'],
    thesisBody:
      'Что ты любишь и что не ешь. Как готовишь и к чему стремишься. Саша запоминает то, чем ты делишься, и использует это в следующих разговорах и планах.',
    experienceLabel: 'ПОМНИТ КОНТЕКСТ. ПОМОГАЕТ ДЕЙСТВОВАТЬ.',
    experience: ['Вы уже знакомы.', 'И завтра тоже.'],
    experienceBody:
      'Саша помнит твои вкусы, привычки и прошлые разговоры. Не нужно каждый раз знакомиться заново.',
    topics: [
      {
        id: 'taste',
        title: 'Помнит тебя.',
        description: 'Любимое, нелюбимое и то, что уже обсудили.',
        context: [
          'Любит пасту с томатами',
          'Не любит кинзу',
          'Готовит сразу на два дня',
        ],
        message: 'Предложи ужин на завтра.',
        answer:
          'Помню, ты любишь пасту с томатами, а кинзу не любишь. Предлагаю пасту с индейкой и томатным соусом — без кинзы. Рассчитаю на два дня, как мы обсуждали.',
        continuation: 'А можно в этот раз без мяса?',
        reply:
          'Конечно. Заменим индейку на фасоль, томатный соус оставим. Помню, готовить отдельно на каждый день тебе неудобно — рассчитаю две порции.',
      },
      {
        id: 'rhythm',
        title: 'Твой ритм.',
        description: 'Ужин из того, что уже готово.',
        context: ['Готовка до 20 минут', 'В холодильнике — порция со вчера'],
        message:
          'Сегодня снова поздно закончу. Ужин из плана не успею приготовить.',
        answer:
          'Проверила кладовку: в холодильнике осталась порция риса с запечёнными овощами со вчерашней готовки. Яйца тоже есть. Добавим яйцо — и ужин будет готов примерно за 10 минут.',
        continuation: 'Хорошо, а как сделать, чтобы рис не был сухим?',
        reply:
          'Добавь к рису с овощами ложку воды и прогрей под крышкой. Затем вмешай яйцо и доведи до готовности — получится новое блюдо из того, что осталось.',
      },
      {
        id: 'science',
        title: 'Объясняет почему.',
        description: 'Рекомендации с научной основой.',
        context: ['Вопрос о составе рациона', 'Рекомендации ВОЗ'],
        message: 'Почему ты предлагаешь добавлять бобовые и цельнозерновые?',
        answer:
          'Это источники клетчатки, витаминов и минералов. ВОЗ рекомендует включать их в разнообразный рацион вместе с овощами и фруктами. Конкретные блюда подберём с учётом твоих вкусов.',
        continuation: 'Можешь показать, откуда это?',
        reply:
          'Да. Это рекомендации ВОЗ по здоровому питанию, раздел об углеводах и пищевых волокнах. Объясню, какие выводы относятся к твоему рациону и где данных пока недостаточно.',
      },
    ],
    contextLabel: 'Контекст примера',
    role: 'ИИ-нутрициолог',
    example: 'Пример разговора',
    continue: 'Продолжить пример',
    reset: 'К началу разговора',
    demoNote:
      'Иллюстрация подхода Саши. Ответы в твоём чате зависят от контекста.',
    foodLabel: 'УДОВОЛЬСТВИЕ — ЧАСТЬ ПОДХОДА',
    food: ['Хорошо питаться.', 'Хорошо жить.'],
    foodBody:
      'Вкусная еда, понятные продукты и привычки, которым находится место в обычной жизни.',
    foodAlt: 'Лосось, овощи и крупа в мятной керамической миске',
    valuesLabel: 'MEAL + MINDSET',
    values: [
      {
        name: 'Осознанность.',
        body: 'Понимать, что подходит тебе.\nИ почему.',
      },
      {
        name: 'Дисциплина.',
        body: 'Делать посильный шаг.\nИ продолжать.',
      },
      {
        name: 'Забота о себе.',
        body: 'Учитывать реальную жизнь.\nИ быть на своей стороне.',
      },
    ],
    endLabel: 'САША / MEALSET',
    end: ['Твой личный подход.', 'Начинается с разговора.'],
    endBody: 'Расскажи Саше, что для тебя важно.',
    access: 'Доступ платный. Условия — в Telegram до оплаты.',
    boundary:
      'Саша — искусственный интеллект. Помогает с повседневным питанием и не заменяет врача.',
  },
  en: {
    nav: ['The approach', 'Meet Sasha', 'Begin'],
    eyebrow: 'SASHA. YOUR AI NUTRITION COMPANION IN TELEGRAM.',
    hero: ['Nutrition.', 'Made', 'personal.'],
    heroBody:
      'Logs food from a message, voice note or photo.\nRemembers you. Grounded in science.',
    start: 'Meet Sasha',
    scroll: 'Discover Mealset',
    imageAlt:
      'Fresh Romanesco with green outer leaves against a deep pine backdrop',
    thesisLabel: 'A PERSONAL APPROACH',
    thesis: ['It starts', 'with attention.'],
    thesisBody:
      'What you love and what you avoid. How you cook and what you’re working towards. Sasha remembers what you share and uses it in future conversations and plans.',
    experienceLabel: 'REMEMBERS THE CONTEXT. HELPS YOU ACT.',
    experience: ['She knows you.', 'Tomorrow, too.'],
    experienceBody:
      'Sasha remembers your tastes, habits and past conversations. You don’t have to introduce yourself all over again.',
    topics: [
      {
        id: 'taste',
        title: 'Remembers you.',
        description: 'Your likes, dislikes and past conversations.',
        context: [
          'Loves tomato pasta',
          'Dislikes coriander',
          'Cooks for two days at a time',
        ],
        message: 'Suggest dinner for tomorrow.',
        answer:
          'I remember you love tomato pasta and dislike coriander. How about pasta with turkey and tomato sauce, without coriander? I’ll plan enough for two days, as we discussed.',
        continuation: 'Could we make it meat-free this time?',
        reply:
          'Of course. We’ll swap the turkey for beans and keep the tomato sauce. I remember cooking every day doesn’t work for you, so I’ll plan two portions.',
      },
      {
        id: 'rhythm',
        title: 'Your rhythm.',
        description: 'Dinner starts with what’s already cooked.',
        context: ['20 minutes to cook', 'One portion left in the fridge'],
        message:
          'I’m working late again. I won’t have time to cook the dinner we planned.',
        answer:
          'I checked your pantry: there’s a portion of rice and roasted vegetables left in the fridge from yesterday’s cooking. You have eggs too. Add an egg and dinner will be ready in about 10 minutes.',
        continuation: 'Sounds good. How do I keep the rice from drying out?',
        reply:
          'Add a spoonful of water to the rice and vegetables and heat with a lid on. Then stir in an egg and cook it through — a new dish from what’s left.',
      },
      {
        id: 'science',
        title: 'Explains why.',
        description: 'Advice with a scientific foundation.',
        context: ['A question about food choices', 'WHO nutrition guidance'],
        message: 'Why do you suggest adding beans and whole grains?',
        answer:
          'They provide fibre, vitamins and minerals. WHO recommends including them in a varied diet alongside fruit and vegetables. We’ll choose the actual meals around what you enjoy.',
        continuation: 'Can you show me the source?',
        reply:
          'Yes. It’s WHO’s healthy diet guidance, in the section on carbohydrates and dietary fibre. I’ll explain which findings apply to your meals and where the evidence is still limited.',
      },
    ],
    contextLabel: 'Example context',
    role: 'AI nutrition companion',
    example: 'Example conversation',
    continue: 'Continue the example',
    reset: 'Back to the start',
    demoNote:
      'An illustration of Sasha’s approach. Replies in your own chat depend on your context.',
    foodLabel: 'ENJOYMENT IS PART OF THE APPROACH',
    food: ['Eat well.', 'Live well.'],
    foodBody:
      'Food you enjoy. Ingredients you know. Habits that find their place in everyday life.',
    foodAlt: 'Salmon, vegetables and grains in a mint ceramic bowl',
    valuesLabel: 'MEAL + MINDSET',
    values: [
      {
        name: 'Awareness.',
        body: 'Understand what works for you.\nAnd why.',
      },
      {
        name: 'Discipline.',
        body: 'Take a manageable step.\nThen keep going.',
      },
      {
        name: 'Self-care.',
        body: 'Make room for real life.\nBe on your own side.',
      },
    ],
    endLabel: 'SASHA / MEALSET',
    end: ['A personal approach.', 'A conversation away.'],
    endBody: 'Tell Sasha what matters to you.',
    access: 'Paid access. See the terms in Telegram before you pay.',
    boundary:
      'Sasha is artificial intelligence. Everyday nutrition support, not a substitute for medical care.',
  },
};
