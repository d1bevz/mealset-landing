export const premiumCopy = {
  ru: {
    nav: ['Подход', 'Саша', 'Начать'],
    eyebrow: 'САША. ИИ-НУТРИЦИОЛОГ В TELEGRAM.',
    hero: ['Питание.', 'Становится', 'личным.'],
    heroBody:
      'Твои вкусы. Твой ритм. Твоя цель.\nВнимание к питанию, которое начинается с тебя.',
    start: 'Познакомиться с Сашей',
    scroll: 'Открыть Mealset',
    imageAlt: 'Свежий романеско с зелёными листьями на глубоком зелёном фоне',
    thesisLabel: 'ЛИЧНЫЙ ПОДХОД',
    thesis: ['Всё начинается', 'с внимания.'],
    thesisBody:
      'Что ты любишь. Как проходит твой день. К чему хочешь прийти. Саша учитывает детали, из которых складывается твоя жизнь.',
    experienceLabel: 'ПОМНИТ КОНТЕКСТ. ПОМОГАЕТ ДЕЙСТВОВАТЬ.',
    experience: ['Разговор,', 'который меняет подход.'],
    experienceBody:
      'План питания становится полезным, когда в нём есть место тебе.',
    topics: [
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
        id: 'taste',
        title: 'Твои вкусы.',
        description: 'Любимая еда остаётся в жизни.',
        context: ['Любит пасту', 'Предпочитает овощи'],
        message: 'Хочу оставить пасту в плане. Это моё любимое блюдо.',
        answer:
          'Оставим. Помню, ты любишь пасту с томатами. Учтём её вместе с остальными блюдами недели.',
        continuation: 'И не хочется готовить отдельно от семьи.',
        reply:
          'Тогда возьмём общие блюда за основу. Сколько человек обычно ужинает вместе?',
      },
      {
        id: 'goal',
        title: 'Твоя цель.',
        description: 'Понятный следующий шаг.',
        context: ['Наладить режим питания', 'Обеды часто пропускаются'],
        message: 'Снова пропустила обед, а к вечеру очень захотелось есть.',
        answer:
          'Вижу, с обедом пока сложно. Давай найдём вариант, который будет под рукой даже в загруженный день.',
        continuation: 'Хорошо бы что-то брать с собой.',
        reply:
          'Подберём обед, который можно собрать с вечера. На работе есть холодильник?',
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
      { name: 'Дисциплина.', body: 'Делать посильный шаг.\nИ продолжать.' },
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
      'Your tastes. Your rhythm. Your goals.\nNutrition support that starts with you.',
    start: 'Meet Sasha',
    scroll: 'Discover Mealset',
    imageAlt:
      'Fresh Romanesco with green outer leaves against a deep pine backdrop',
    thesisLabel: 'A PERSONAL APPROACH',
    thesis: ['It starts', 'with attention.'],
    thesisBody:
      'What you enjoy. How your day unfolds. Where you want to go. Sasha considers the details that make your life yours.',
    experienceLabel: 'REMEMBERS THE CONTEXT. HELPS YOU ACT.',
    experience: ['A conversation.', 'A different approach.'],
    experienceBody: 'A meal plan becomes useful when it makes room for you.',
    topics: [
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
        id: 'taste',
        title: 'Your tastes.',
        description: 'Room for the food you love.',
        context: ['Loves pasta', 'Enjoys vegetables'],
        message: 'I want to keep pasta in the plan. It’s my favourite.',
        answer:
          'We will. I remember you like it with tomatoes. We’ll include it alongside your other meals this week.',
        continuation: 'And I don’t want to cook separately from my family.',
        reply:
          'Then let’s build around the meals you share. How many people usually have dinner together?',
      },
      {
        id: 'goal',
        title: 'Your goals.',
        description: 'A clear next step.',
        context: ['Build a regular eating routine', 'Often skips lunch'],
        message: 'I skipped lunch again and felt really hungry by the evening.',
        answer:
          'Lunch is still proving tricky. Let’s find something you can have ready, even on a busy day.',
        continuation: 'Something I can bring with me would help.',
        reply:
          'Let’s choose a lunch you can put together the night before. Is there a fridge at work?',
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
      { name: 'Awareness.', body: 'Understand what works for you.\nAnd why.' },
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
