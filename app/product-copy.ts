import type { Locale } from './copy';
export type LoggingMethod = {
  id: 'text' | 'voice' | 'photo' | 'delivery';
  label: string;
  title: string;
  body: string;
  message: string;
  answer: string;
  feedback?: {
    title: string;
    strength: string;
    suggestion: string;
  };
  items: string[];
  lookup: string[];
  diaryTitle: string;
  extras: string[];
  nutrition: [number, number, number, number];
};
export type LoggingDemoCopy = {
  instruction: string;
  send: string;
  replay: string;
  half: string;
  whole: string;
  saved: string;
  corrected: string;
  correction: string;
  stepLabels: string[];
  working: string;
  lookup: string;
  showResult: string;
  resultLabel: string;
  calories: string;
  macroLabels: string[];
  grams: string;
  receiptLabel: string;
  voiceLabel: string;
  transcript: string;
  photoAlt: string;
  originalPortion: string;
  halfPortion: string;
  more: string;
  telegram: string;
};
type FeatureCopy = {
  eyebrow: string;
  title: string[];
  intro: string;
  choose: string;
  database: string;
  sasha: string;
  chatLabel: string;
  methods: LoggingMethod[];
  demo: LoggingDemoCopy;
  note: string;
  nutrientsLabel: string;
  nutrientsTitle: string;
  nutrientsBody: string;
  nutrients: string[];
  science: {
    eyebrow: string;
    title: string[];
    body: string;
    principles: { title: string; body: string }[];
    sourcesLabel: string;
    who: string;
    efsa: string;
  };
};
export const featureCopy: Record<Locale, FeatureCopy> = {
  ru: {
    eyebrow: 'ДНЕВНИК ПИТАНИЯ. ПРЯМО В TELEGRAM.',
    title: ['Ты ешь.', 'Саша записывает.'],
    intro:
      'Напиши, что съел, запиши голосовое, отправь фото или скриншот заказа из Uber Eats. Подбор продуктов и расчёт Саша берёт на себя.',
    choose: 'Как записать еду',
    database:
      'продуктов в базе. Саша сама найдёт нужные, вспомнит твои этикетки и поищет недостающее в интернете.',
    sasha: 'Саша',
    chatLabel: 'Пример записи еды',
    methods: [
      {
        id: 'text',
        label: 'Текстом',
        title: 'Просто скажи, что съел.',
        body: 'Две картошки, немного лука, четыре яйца. Саша понимает обычные порции, сама находит продукты и считает. Если чего-то не хватает — уточнит.',
        message:
          'На завтрак 2 картошки, немного лука, ветчина из индейки и 4 яйца.',
        answer:
          'Завтрак записала. Ветчину помню — взяла данные с твоей этикетки. Картошку и остальные порции оценила. Если жарил на масле — скажи, добавлю.',
        feedback: {
          title: 'Саша о твоём завтраке',
          strength:
            'По белку — хорошая основа: яйца и индейка. Картошка даёт углеводы для энергии.',
          suggestion:
            'Я бы добавила помидор или сладкий перец — будет больше клетчатки и витаминов.',
        },
        items: ['2 картошки', 'Немного лука', 'Ветчина из индейки', '4 яйца'],
        lookup: [
          'Картошка, лук и яйца — база продуктов',
          'Ветчина — твоя сохранённая этикетка',
        ],
        diaryTitle: 'Завтрак',
        extras: ['Клетчатка', 'Калий', 'Витамин B12'],
        nutrition: [580, 40, 22, 55],
      },
      {
        id: 'voice',
        label: 'Голосом',
        title: 'Расскажи по дороге.',
        body: 'Запиши обычное голосовое, пока идёшь по делам. Саша разберёт речь и соберёт приём пищи из того, что ты рассказал.',
        message:
          'Сделал смузи: манго, половина авокадо, две горсти шпината и стакан соевого молока.',
        answer:
          'Смузи записала: манго, авокадо, шпинат и соевое молоко. Фрукты и стакан молока взяла как обычные порции.',
        items: [
          'Манго',
          '½ авокадо',
          '2 горсти шпината',
          'Стакан соевого молока',
        ],
        lookup: ['Речь — распознана', 'Ингредиенты — база продуктов'],
        diaryTitle: 'Смузи на завтрак',
        extras: ['Клетчатка', 'Фолат', 'Витамин C'],
        nutrition: [430, 12, 22, 45],
      },
      {
        id: 'photo',
        label: 'По фото',
        title: 'Сфотографируй свой ужин.',
        body: 'Саша узнает блюдо, подберёт ингредиенты и оценит порцию. А если пришлёшь читаемую этикетку — возьмёт данные конкретного продукта.',
        message: 'Вот мой ужин. Съел всю порцию.',
        answer:
          'Записала пасту болоньезе. Порцию, мясной соус и сыр оценила по фото — расчёт приблизительный.',
        items: ['Паста', 'Мясной соус', 'Томаты', 'Тёртый сыр'],
        lookup: [
          'Блюдо и порция — по фото',
          'Состав ингредиентов — база продуктов',
        ],
        diaryTitle: 'Паста болоньезе',
        extras: ['Клетчатка', 'Железо', 'Кальций'],
        nutrition: [650, 33, 26, 70],
      },
      {
        id: 'delivery',
        label: 'Скриншотом',
        title: 'Даже заказ из Uber Eats.',
        body: 'Скриншот уже содержит название блюда и ресторан. Саша сама поищет состав и пищевую ценность. Тебе остаётся сказать, что съел.',
        message: 'Поужинал вот этим.',
        answer:
          'Бургер и Cola Zero записала. Состав Bullguer Duplo нашла в интернете. Официальных КБЖУ нет — оценила по ингредиентам.',
        items: ['Bullguer Duplo', 'Coca-Cola Zero · 330 мл'],
        lookup: [
          'Блюдо и ресторан — со скриншота',
          'Состав — поиск в интернете',
          'Расчёт — по ингредиентам из базы',
        ],
        diaryTitle: 'Ужин из Bullguer',
        extras: ['Насыщенные жиры', 'Натрий', 'Железо'],
        nutrition: [1000, 70, 60, 45],
      },
    ],
    note: 'Интерактивный пример с условными расчётами. В Telegram Саша использует твои продукты и порции, а оценки отмечает как приблизительные.',
    nutrientsLabel: 'БОЛЬШЕ, ЧЕМ КБЖУ',
    nutrientsTitle: 'За калориями — целый рацион.',
    nutrientsBody:
      'Белки, жиры и углеводы — только начало. В базе есть ещё десятки показателей: клетчатка, сахара, витамины и минералы. Саша использует доступные данные о составе продуктов; полнота зависит от продукта и источника.',
    nutrients: [
      'Клетчатка',
      'Сахара',
      'Насыщенные жиры',
      'Кальций',
      'Железо',
      'Магний',
      'Калий',
      'Натрий',
      'Цинк',
      'Витамин A',
      'Витамин C',
      'Витамин D',
      'Витамин B12',
      'Фолат',
    ],
    science: {
      eyebrow: 'НАУЧНЫЙ ПОДХОД',
      title: ['Личное внимание.', 'Научная основа.'],
      body: 'Рекомендации Саши опираются на научные исследования и руководства по питанию. Она объясняет, почему совет подходит тебе, и учитывает, насколько надёжны данные.',
      principles: [
        {
          title: 'Опирается на доказательства.',
          body: 'Использует базу знаний с исследованиями, систематическими обзорами и рекомендациями профессиональных организаций.',
        },
        {
          title: 'Объясняет, откуда вывод.',
          body: 'Можно спросить «почему?». Саша объяснит логику, приведёт источник и скажет, если данных недостаточно или они противоречивы.',
        },
        {
          title: 'Знает границы.',
          body: 'Отделяет оценку от точных данных. Помогает с повседневным рационом, а вопросы диагностики и лечения направляет к врачу.',
        },
      ],
      sourcesLabel: 'Примеры научных ориентиров',
      who: 'ВОЗ · здоровое питание',
      efsa: 'EFSA · нормы потребления нутриентов',
    },
    demo: {
      instruction: 'Выбери способ и отправь пример Саше.',
      send: 'Отправить пример',
      replay: 'Ещё раз',
      half: 'Я съел только половину',
      whole: 'Всё-таки всю порцию',
      saved: 'Записала в дневник',
      corrected: 'Исправила эту запись',
      correction: 'Учла половину порции. Обновила расчёт в дневнике.',
      stepLabels: ['Ты отправляешь', 'Саша разбирается', 'Готовая запись'],
      working: 'Саша разбирается…',
      lookup: 'Откуда данные',
      showResult: 'Показать запись',
      resultLabel: 'Пример расчёта · порция оценена',
      calories: 'ккал',
      macroLabels: ['Белки', 'Жиры', 'Углеводы'],
      grams: 'г',
      receiptLabel: 'Пример скриншота заказа',
      voiceLabel: 'Пример голосового',
      transcript: 'Текст голосового',
      photoAlt: 'Пример фото ужина: паста болоньезе на мятной тарелке',
      originalPortion: 'Вся порция',
      halfPortion: 'Половина порции',
      more: 'Ещё в составе',
      telegram: 'Записать свою еду в Telegram',
    },
  },
  en: {
    eyebrow: 'YOUR FOOD DIARY. RIGHT IN TELEGRAM.',
    title: ['You eat.', 'Sasha logs it.'],
    intro:
      'Type what you ate, send a voice note, take a photo or share an Uber Eats screenshot. Sasha finds the foods and takes care of the calculation.',
    choose: 'Ways to log your food',
    database:
      'foods in the database. Sasha finds the right ones, remembers your labels and searches the web for missing information.',
    sasha: 'Sasha',
    chatLabel: 'Food logging example',
    methods: [
      {
        id: 'text',
        label: 'Text',
        title: 'Just say what you ate.',
        body: 'Two potatoes, a little onion, four eggs. Sasha understands everyday portions, finds the foods and does the calculation. She’ll ask if she needs a detail.',
        message:
          'Breakfast: 2 potatoes, a little onion, turkey ham and 4 eggs.',
        answer:
          'Breakfast logged. I remember your turkey ham, so I used the label you shared. I estimated the potatoes and other portions. If you used cooking oil, tell me and I’ll add it.',
        feedback: {
          title: 'Sasha on your breakfast',
          strength:
            'The eggs and turkey give this breakfast a good protein base. The potatoes provide carbohydrates for energy.',
          suggestion:
            'I’d add a tomato or a bell pepper for more fibre and vitamins.',
        },
        items: ['2 potatoes', 'A little onion', 'Turkey ham', '4 eggs'],
        lookup: [
          'Potatoes, onion and eggs — food database',
          'Turkey ham — your saved label',
        ],
        diaryTitle: 'Breakfast',
        extras: ['Fibre', 'Potassium', 'Vitamin B12'],
        nutrition: [580, 40, 22, 55],
      },
      {
        id: 'voice',
        label: 'Voice',
        title: 'Tell her on your way.',
        body: 'Record a voice note while you get on with your day. Sasha transcribes it and puts together the meal from what you said.',
        message:
          'I made a smoothie: a mango, half an avocado, two handfuls of spinach and a glass of soy milk.',
        answer:
          'Smoothie logged: mango, avocado, spinach and soy milk. I used typical portions for the fruit and glass of milk.',
        items: [
          'A mango',
          '½ avocado',
          '2 handfuls of spinach',
          'A glass of soy milk',
        ],
        lookup: ['Speech — transcribed', 'Ingredients — food database'],
        diaryTitle: 'Breakfast smoothie',
        extras: ['Fibre', 'Folate', 'Vitamin C'],
        nutrition: [430, 12, 22, 45],
      },
      {
        id: 'photo',
        label: 'Photo',
        title: 'Take a photo of dinner.',
        body: 'Sasha recognises the dish, finds the ingredients and estimates the portion. Send a legible label and she’ll use the figures for that exact product.',
        message: 'Here’s my dinner. I ate the whole portion.',
        answer:
          'Pasta bolognese logged. I estimated the portion, meat sauce and cheese from the photo, so the calculation is approximate.',
        items: ['Pasta', 'Meat sauce', 'Tomatoes', 'Grated cheese'],
        lookup: [
          'Dish and portion — from the photo',
          'Ingredient composition — food database',
        ],
        diaryTitle: 'Pasta bolognese',
        extras: ['Fibre', 'Iron', 'Calcium'],
        nutrition: [650, 33, 26, 70],
      },
      {
        id: 'delivery',
        label: 'Screenshot',
        title: 'Even your Uber Eats order.',
        body: 'The screenshot already has the dish and restaurant. Sasha looks up the ingredients and nutrition herself. Just tell her what you ate.',
        message: 'This was my dinner.',
        answer:
          'Burger and Cola Zero logged. I found the Bullguer Duplo ingredients online. There’s no official nutrition information, so I estimated it from the ingredients.',
        items: ['Bullguer Duplo', 'Coca-Cola Zero · 330 ml'],
        lookup: [
          'Dish and restaurant — from the screenshot',
          'Ingredients — web search',
          'Calculation — food database',
        ],
        diaryTitle: 'Dinner from Bullguer',
        extras: ['Saturated fat', 'Sodium', 'Iron'],
        nutrition: [1000, 70, 60, 45],
      },
    ],
    note: 'Interactive demo with illustrative calculations. In Telegram, Sasha uses your foods and portions and clearly marks estimates.',
    nutrientsLabel: 'BEYOND CALORIES AND MACROS',
    nutrientsTitle: 'There’s more to your food.',
    nutrientsBody:
      'Protein, fat and carbohydrates are just the start. The database holds dozens more measures, including fibre, sugars, vitamins and minerals. Sasha uses the available food composition data; coverage varies by food and source.',
    nutrients: [
      'Fibre',
      'Sugars',
      'Saturated fat',
      'Calcium',
      'Iron',
      'Magnesium',
      'Potassium',
      'Sodium',
      'Zinc',
      'Vitamin A',
      'Vitamin C',
      'Vitamin D',
      'Vitamin B12',
      'Folate',
    ],
    science: {
      eyebrow: 'GROUNDED IN SCIENCE',
      title: ['Personal attention.', 'Scientific foundations.'],
      body: 'Sasha’s recommendations draw on nutrition research and guidelines. She explains why a suggestion fits your situation and takes the strength of the evidence into account.',
      principles: [
        {
          title: 'Starts with evidence.',
          body: 'Uses a knowledge base of studies, systematic reviews and guidelines from professional organisations.',
        },
        {
          title: 'Explains the reasoning.',
          body: 'You can always ask why. Sasha explains the logic, gives a source and says when the evidence is limited or conflicting.',
        },
        {
          title: 'Knows her limits.',
          body: 'Distinguishes estimates from exact figures. Helps with everyday nutrition and refers questions about diagnosis and treatment to a doctor.',
        },
      ],
      sourcesLabel: 'Examples of scientific references',
      who: 'WHO · healthy diet',
      efsa: 'EFSA · dietary reference values',
    },
    demo: {
      instruction: 'Choose a format and send Sasha an example.',
      send: 'Send example',
      replay: 'Try again',
      half: 'I only ate half',
      whole: 'Actually, the whole portion',
      saved: 'Added to your food diary',
      corrected: 'Updated this entry',
      correction:
        'Half a portion noted. I’ve updated the calculation in your diary.',
      stepLabels: ['You send it', 'Sasha works it out', 'Your diary entry'],
      working: 'Sasha is working it out…',
      lookup: 'Where the data comes from',
      showResult: 'Show the entry',
      resultLabel: 'Example calculation · estimated portion',
      calories: 'kcal',
      macroLabels: ['Protein', 'Fat', 'Carbs'],
      grams: 'g',
      receiptLabel: 'Example order screenshot',
      voiceLabel: 'Example voice note',
      transcript: 'Voice note transcript',
      photoAlt: 'Example dinner photo: pasta bolognese on a mint plate',
      originalPortion: 'Whole portion',
      halfPortion: 'Half a portion',
      more: 'Also in these foods',
      telegram: 'Log your own food in Telegram',
    },
  },
};
