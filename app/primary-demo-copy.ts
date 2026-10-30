import type { PrimaryLocale } from '@/lib/primary-locales';

// Sanitized, historical receipt values; see docs/demo-provenance.md.
// Each scenario is independent. Editorial dialogue is not a live bot response.
export function demoContent(locale: PrimaryLocale) {
  const t = (ru: string, en: string, pt: string) =>
    locale === 'ru' ? ru : locale === 'pt' ? pt : en;
  return {
    tabs: [
      t('Считает калории', 'Counts calories', 'Conta as calorias'),
      t('Помнит тебя', 'Remembers you', 'Lembra-se de ti'),
      t('Даёт рекомендации', 'Gives advice', 'Dá conselhos'),
      t('Собирает план', 'Builds a meal plan', 'Monta um plano de refeições'),
      t('Помогает с покупками', 'Helps with groceries', 'Ajuda nas compras'),
      t('Проявляет инициативу', 'Checks in first', 'Toma a iniciativa'),
    ],
    pains: [
      t(
        'Записать завтрак без поиска каждого продукта.',
        'Log breakfast without looking up every ingredient.',
        'Registar o pequeno-almoço sem procurar cada ingrediente.',
      ),
      t(
        'Знакомый завтрак — без повторения всего рецепта.',
        'A familiar breakfast, without repeating the recipe.',
        'Um pequeno-almoço habitual, sem repetir a receita.',
      ),
      t(
        'Предусмотреть ужин, когда сил на готовку нет.',
        'Have dinner ready when there’s no energy to cook.',
        'Ter o jantar pronto quando não há energia para cozinhar.',
      ),
      t(
        'Решить, что есть и когда готовить, сразу на два дня.',
        'Know what to eat and when to cook for the next two days.',
        'Saber o que comer e quando cozinhar nos próximos dois dias.',
      ),
      t(
        'Купить нужное, не сверяя каждый рецепт с холодильником.',
        'Buy what’s missing without checking every recipe against the fridge.',
        'Comprar o que falta sem comparar cada receita com o frigorífico.',
      ),
      t(
        'Не остаться без еды в череде рабочих созвонов.',
        'Find time to eat between back-to-back calls.',
        'Arranjar tempo para comer entre chamadas seguidas.',
      ),
    ],
    inputs: [
      t(
        'На завтрак 200 г картошки, 30 г лука, четыре яйца и полпачки куриной нарезки. Масло — несколько пшиков.',
        'For breakfast: 200 g of potatoes, 30 g of onion, four eggs and half a pack of chicken slices. A few sprays of olive oil.',
        'Ao pequeno-almoço: 200 g de batata, 30 g de cebola, quatro ovos e meio pacote de fatias de frango. Uns borrifos de azeite.',
      ),
      t(
        'На завтрак мой обычный смузи.',
        'My usual smoothie for breakfast.',
        'O meu batido do costume ao pequeno-almoço.',
      ),
      t(
        'Опять заказал бургер. Вечером не было сил готовить.',
        'Ordered a burger again. I had no energy to cook tonight.',
        'Pedi outra vez um hambúrguer. Hoje não tinha energia para cozinhar.',
      ),
      t(
        'Хочу пасту сегодня, а завтра некогда готовить. Собери план на два дня, только не одно и то же.',
        'I want pasta tonight, and I won’t have time to cook tomorrow. Plan two days of meals, but I don’t want to eat the same thing twice.',
        'Hoje apetece-me massa e amanhã não vou ter tempo para cozinhar. Planeia as refeições de dois dias, mas não quero comer o mesmo duas vezes.',
      ),
      t(
        'Собери покупки по моему плану на неделю. Учти, что уже есть дома.',
        'Make a shopping list for my weekly plan. Take into account what I have at home.',
        'Faz uma lista de compras para o meu plano semanal. Tem em conta o que tenho em casa.',
      ),
    ],
    mealTitle: t(
      'Завтрак записала ✅',
      'Breakfast logged ✅',
      'Pequeno-almoço registado ✅',
    ),
    proactiveContext: t(
      'Середина рабочего дня. В дневнике пока только завтрак.',
      'Mid-afternoon on a workday. Only breakfast has been logged.',
      'Meio da tarde de um dia de trabalho. Só o pequeno-almoço está registado.',
    ),
    proactiveLabel: t(
      'Саша пишет первой',
      'Sasha checks in first',
      'A Sasha toma a iniciativa',
    ),
    proactiveMessage: t(
      'Как ты? Обеда в дневнике пока нет — не успел поесть или просто не записал? Если обед выпал, давай найдём что-нибудь перекусить.',
      'How’s your day going? There’s no lunch in your diary yet — did you miss it, or just not log it? If you haven’t eaten, let’s find you a quick snack.',
      'Como está a correr o teu dia? Ainda não há almoço no teu diário — esqueceste-te ou só não o registaste? Se ainda não comeste, vamos encontrar-te um lanche rápido.',
    ),
    proactiveActions: [
      t(
        'Не успел. Через десять минут опять созвон.',
        'I missed it. Another call starts in ten minutes.',
        'Passou-me. Daqui a dez minutos começa outra chamada.',
      ),
      t(
        'В офисном холодильнике есть скир, с собой банан.',
        'There’s skyr in the office fridge, and I brought a banana.',
        'Há skyr no frigorífico do escritório e eu trouxe uma banana.',
      ),
    ],
    proactiveReplies: [
      t(
        'Тогда подберём что-то без готовки, чтобы успеть до звонка. Йогурт или скир с бананом подойдут. Что есть под рукой — с собой или в офисном холодильнике?',
        'Let’s find something you can eat before the call, with no cooking. Yoghurt or skyr with a banana would work. What do you have with you or in the office fridge?',
        'Vamos encontrar algo que possas comer antes da chamada, sem cozinhar. Iogurte ou skyr com banana serviria. O que tens contigo ou no frigorífico do escritório?',
      ),
      t(
        'Отлично, бери скир и банан — ничего готовить не нужно. Скир даст белок, банан — углеводы и немного клетчатки. Сейчас можно перекусить, а после созвона найти время на обед. Когда поешь, напиши — запишу.',
        'Great, have the skyr and banana — no prep needed. Skyr provides protein, and the banana adds carbs and some fibre. Have those now, then make time for lunch after your call. Let me know once you’ve eaten and I’ll log it.',
        'Ótimo, come o skyr e a banana — não é preciso preparar nada. O skyr dá proteína e a banana acrescenta hidratos de carbono e alguma fibra. Come isso agora e depois arranja tempo para almoçar a seguir à chamada. Diz-me quando tiveres comido e eu registo.',
      ),
    ],
    breakfastIngredients: [
      t('🥔 Картошка — 200 г', '🥔 Potatoes — 200 g', '🥔 Batatas — 200 g'),
      t('🧅 Лук — 30 г', '🧅 Onion — 30 g', '🧅 Cebola — 30 g'),
      t('🥚 Яйца — 4 шт.', '🥚 Eggs — 4', '🥚 Ovos — 4'),
      t(
        '🍗 Куриная нарезка Auchan — 75 г',
        '🍗 Auchan chicken slices — 75 g',
        '🍗 Fatias de frango Auchan — 75 g',
      ),
      t(
        '🫒 Оливковое масло — около 4 г',
        '🫒 Olive oil — about 4 g',
        '🫒 Azeite — cerca de 4 g',
      ),
    ],
    labelMemory: t(
      'Куриную нарезку Auchan помню: упаковка 150 г, ты присылал этикетку. Полпачки — 75 г.',
      'I remember the Auchan chicken slices: a 150 g pack, and you sent me the label. Half a pack is 75 g.',
      'Lembro-me das fatias de frango Auchan: um pacote de 150 g, e enviaste-me o rótulo. Meio pacote são 75 g.',
    ),
    breakfastAdvice: t(
      'Яйца и курица дают белковую основу завтрака. В следующий раз можно взять 2 яйца и 150 г жидкого яичного белка вместо 4 яиц — жира будет меньше, а белка больше. Белок продаётся отдельно в упаковке: поищи рядом с яйцами. Клетчатка помогает кишечнику работать регулярно — её можно понемногу добавлять в привычные блюда. У тебя в холодильнике есть шпинат: в следующий раз вмешай его в яйца в конце готовки.',
      'The eggs and chicken give this breakfast a protein base. Next time, try 2 eggs plus 150 g of liquid egg whites instead of 4 eggs — less fat and more protein. Look for cartons of egg whites near the eggs. Fibre helps keep bowel movements regular, and familiar meals are an easy place to add a little more. You have spinach in the fridge — next time, stir some into the eggs at the end of cooking.',
      'Os ovos e o frango dão a este pequeno-almoço uma base proteica. Da próxima vez, experimenta 2 ovos com 150 g de claras líquidas em vez de 4 ovos — menos gordura e mais proteína. Procura pacotes de claras junto aos ovos. A fibra ajuda a regular o trânsito intestinal, e as refeições habituais são um sítio fácil para acrescentar um pouco mais. Tens espinafres no frigorífico — da próxima vez, mistura alguns nos ovos no fim da cozedura.',
    ),
    confirm: t(
      'Твой с манго, авокадо, протеином, чиа и шпинатом на соевом молоке? Количества привычные, выпил весь?',
      'Your mango, avocado, protein, chia and spinach smoothie with soy milk? The usual amounts, and you drank it all?',
      'O teu batido de manga, abacate, proteína, chia e espinafres com bebida de soja? As quantidades do costume, e bebeste tudo?',
    ),
    confirmAction: t(
      'Да, всё как обычно. Выпил весь.',
      'Yes, the usual amounts. Drank it all.',
      'Sim, as quantidades do costume. Bebi tudo.',
    ),
    smoothieIngredients: [
      t(
        '🥭 Манго — 1 шт. (около 200 г)',
        '🥭 Mango — 1 (about 200 g)',
        '🥭 Manga — 1 (cerca de 200 g)',
      ),
      t(
        '🥑 Авокадо — 1 шт. (около 150 г)',
        '🥑 Avocado — 1 (about 150 g)',
        '🥑 Abacate — 1 (cerca de 150 g)',
      ),
      t(
        '🥄 Чиа — около 2 ст. л.',
        '🥄 Chia — about 2 tbsp',
        '🥄 Chia — cerca de 2 colheres de sopa',
      ),
      t(
        '🥛 Ванильный протеин — 1 мерная ложка',
        '🥛 Vanilla protein powder — 1 scoop',
        '🥛 Proteína em pó de baunilha — 1 medida',
      ),
      t(
        '🥬 Шпинат — 2 горсти',
        '🥬 Spinach — 2 handfuls',
        '🥬 Espinafres — 2 punhados',
      ),
      t(
        '🥛 Соевое молоко — 370 г',
        '🥛 Soy milk — 370 g',
        '🥛 Bebida de soja — 370 g',
      ),
    ],
    smoothieAdvice: t(
      'Хороший выбор на завтрак! Протеин и соевое молоко дают белок, чиа и авокадо — клетчатку, а манго и шпинат добавляют витамины. Манго и авокадо пока оценены по размеру — если в следующий раз взвесишь их, уточню расчёт.',
      'A great breakfast choice! Protein powder and soy milk provide protein, chia and avocado add fibre, and mango and spinach bring vitamins. Mango and avocado are still estimated by size. Weigh them next time and I can refine the calculation.',
      'Ótima escolha para o pequeno-almoço! A proteína em pó e a bebida de soja dão proteína, a chia e o abacate acrescentam fibra, e a manga e os espinafres trazem vitaminas. A manga e o abacate continuam a ser estimados pelo tamanho. Pesa-os da próxima vez e eu posso afinar o cálculo.',
    ),
    kcal: t('ккал', 'kcal', 'kcal'),
    protein: t('Белки', 'Protein', 'Proteína'),
    fat: t('Жиры', 'Fat', 'Gordura'),
    carbs: t('Углеводы', 'Carbs', 'Hidratos'),
    fibre: t('Клетчатка', 'Fibre', 'Fibra'),
    grams: t('г', 'g', 'g'),
    day: t('Итого за день', 'Day so far', 'Dia até agora'),
    remaining: t(
      'До цели осталось',
      'Remaining to target',
      'Em falta para o objetivo',
    ),
    dayDetails: t(
      'БЖУ за день и остаток до цели',
      'Daily macros and remaining amounts',
      'Macros diários e quantidades em falta',
    ),
    nutrition: [
      {
        kcal: 611,
        error: 153,
        protein: 47.3,
        fat: 28,
        carbs: 41.2,
        fibre: 4.7,
        day: 611,
        target: 2034,
        macroTargets: [178, 62.4, 190.1],
        pct: 30,
        range: '458–764',
        remaining: '1270–1576',
        dayMacros: [47.3, 28, 41.2],
        macroRemaining: [130.7, 34.4, 148.9],
      },
      {
        kcal: 762,
        error: 193,
        protein: 43.6,
        fat: 37,
        carbs: 74.9,
        fibre: 23.8,
        day: 762,
        target: 2034,
        macroTargets: [178, 62.4, 190.1],
        pct: 37,
        range: '569–955',
        remaining: '1079–1465',
        dayMacros: [43.6, 37, 74.9],
        macroRemaining: [134.4, 25.4, 115.2],
      },
    ],
    historyNote: t(
      'Самостоятельный пример дня. Расчёт еды — из сохранённой записи; цели относятся к этому примеру, а не к тебе.',
      'A separate example day. Meal estimates come from a saved entry; the targets belong to this example and are not personal recommendations for you.',
      'Um dia de exemplo à parte. As estimativas das refeições vêm de um registo guardado; os objetivos pertencem a este exemplo e não são recomendações pessoais para ti.',
    ),
    planChangeTitle: t(
      'Как меняется план',
      'How the plan changes',
      'Como o plano muda',
    ),
    planChangeNote: t(
      'Иллюстрация перестановки двух завтраков, а не изменение твоего плана.',
      'An illustration of swapping two breakfasts, not a change to your plan.',
      'Uma ilustração da troca de dois pequenos-almoços, não uma alteração ao teu plano.',
    ),
    planChanges: [
      t(
        'Сегодня: смузи → картошка с яйцами и куриной нарезкой, уже съедено.',
        'Today: smoothie → potatoes, eggs and chicken slices, already eaten.',
        'Hoje: batido → batatas, ovos e fatias de frango, já comido.',
      ),
      t(
        'Завтра: сэндвич с нарезкой → сегодняшний запланированный смузи.',
        'Tomorrow: chicken sandwich → the smoothie originally planned for today.',
        'Amanhã: sandes de frango → o batido planeado originalmente para hoje.',
      ),
    ],
    planChangeEnd: t(
      'Нарезку не закладываю повторно в сэндвич. Оставшуюся половину упаковки учитываю отдельно в запасах.',
      'The chicken slices are no longer allocated to the sandwich. The remaining half-pack stays in the pantry record.',
      'As fatias de frango deixam de estar atribuídas à sandes. O meio pacote restante fica no registo da despensa.',
    ),
    adviceStart: t(
      'У тебя это повторяется, когда дома нет готового ужина. Давай предусмотрим такие вечера. Есть контейнеры, чтобы сразу отложить отдельные порции?',
      'This keeps happening when there’s no dinner ready at home. Let’s plan for those evenings. Do you have containers to set aside individual portions?',
      'Isto continua a acontecer quando não há jantar pronto em casa. Vamos planear essas noites. Tens recipientes para guardar porções individuais?',
    ),
    adviceActions: [
      t(
        'Два есть, но в морозилке почти нет места.',
        'Two, but there’s hardly any freezer space.',
        'Dois, mas quase não há espaço no congelador.',
      ),
      t(
        'Во второй день приду поздно.',
        'I’ll be home late on the second day.',
        'Vou chegar tarde a casa no segundo dia.',
      ),
    ],
    adviceReplies: [
      t(
        'Тогда большую заготовку не закладываем. Приготовим две порции на ближайшие дни, вторую сразу уберём в контейнер. В какой из дней ты придёшь поздно?',
        'Then let’s skip a big batch. We’ll make two portions for the next couple of days and set one aside straight away. Which day will you get home late?',
        'Então vamos evitar um lote grande. Fazemos duas porções para os próximos dias e guardamos uma logo. Em que dia vais chegar tarde?',
      ),
      t(
        'Тогда лосось с рисом — сразу на два обеда. На второй ужин оставим готовую основу из первого дня: останется сварить гарнир и разогреть. Большой запас в морозилке не понадобится.',
        'Then salmon and rice for two lunches. For the second dinner, we’ll keep the cooked base from day one: just cook a side and reheat. No need for a freezer full of meals.',
        'Então salmão e arroz para dois almoços. No segundo jantar, aproveitamos a base cozinhada do primeiro dia: basta cozinhar um acompanhamento e aquecer. Não é preciso um congelador cheio de refeições.',
      ),
    ],
    planIntro: t(
      'Собрала. Завтраки оставила привычные, а на ужины подобрала два рецепта: сегодня — запеканка из пасты, завтра — индейка с бататом. Готовку объединила в один вечер.',
      'Done. I’ve kept your usual breakfasts and picked two dinner recipes: a pasta bake tonight and turkey with sweet potato tomorrow. The cooking fits into one evening.',
      'Feito. Mantive os teus pequenos-almoços habituais e escolhi duas receitas de jantar: um gratinado de massa hoje e peru com batata-doce amanhã. A cozinha cabe numa única noite.',
    ),
    planTarget: t(
      'Ориентир на день: 2 034 ккал · 178 г белка.',
      'Daily target: 2,034 kcal · 178 g protein.',
      'Objetivo diário: 2034 kcal · 178 g de proteína.',
    ),
    planSummary: [
      {
        title: t('Сегодня', 'Today', 'Hoje'),
        body: t(
          'Запеканка из пасты с говяжьим фаршем, шампиньонами и сыром. Пока она в духовке, на плите тушим индейку в томатном соусе с грибами и отвариваем батат для завтрашнего ужина.',
          'A pasta bake with beef mince, mushrooms and cheese. While it’s in the oven, simmer turkey with mushrooms in tomato sauce on the hob and boil sweet potato for tomorrow’s dinner.',
          'Um gratinado de massa com carne de vaca picada, cogumelos e queijo. Enquanto está no forno, deixa o peru com cogumelos a apurar em molho de tomate no fogão e coze a batata-doce para o jantar de amanhã.',
        ),
      },
      {
        title: t('Завтра', 'Tomorrow', 'Amanhã'),
        body: t(
          'Индейка в томатном соусе с грибами и бататом — уже приготовлена накануне. Останется разогреть и добавить петрушку. После работы — другой ужин, без новой готовки.',
          'Turkey with mushrooms in tomato sauce and sweet potato, cooked the evening before. Just reheat and finish with parsley. A different dinner after work, without another cooking session.',
          'Peru com cogumelos em molho de tomate e batata-doce, cozinhados na véspera. Basta aquecer e finalizar com salsa. Um jantar diferente depois do trabalho, sem outra sessão de cozinha.',
        ),
      },
    ],
    planEnd: t(
      'Шампиньоны нужны для обоих рецептов — объединила их в одну строку в списке покупок. Шаги готовки расположила по порядку, чтобы не переключаться между двумя рецептами.',
      'Both recipes use mushrooms, so I combined them into one shopping-list entry. I also put the cooking steps in order so you don’t have to jump between two recipes.',
      'Ambas as receitas usam cogumelos, por isso juntei-os numa única entrada da lista de compras. Também ordenei os passos de cozinha para não teres de saltar entre duas receitas.',
    ),
    planCta: t(
      'Собрать свой план в Telegram',
      'Build your own plan in Telegram',
      'Cria o teu plano no Telegram',
    ),
    shoppingIntro: t(
      'Список на неделю собрала. Соевый соус отметила «дома?» — проверь перед покупкой.',
      'Your weekly list is ready. Soy sauce is marked “at home?” — check before buying.',
      'A tua lista semanal está pronta. O molho de soja está marcado como “em casa?” — verifica antes de comprar.',
    ),
    shoppingTitle: t('Список покупок', 'Shopping list', 'Lista de compras'),
    bought: t('Куплено', 'Purchased', 'Comprado'),
    of: t('из', 'of', 'de'),
    done: t('Готово ✅', 'Done ✅', 'Feito ✅'),
    order: t('🛒 Закажи за меня', '🛒 Order for me', '🛒 Encomendar por mim'),
    text: t('📋 Текстом', '📋 As text', '📋 Como texto'),
    more: t('Остальные продукты', 'Remaining items', 'Itens em falta'),
    reset: t('К исходному примеру', 'Reset example', 'Repor exemplo'),
    completed: t(
      'Покупки отмечены. Список закрыт.',
      'Purchases marked. The list is now closed.',
      'Compras assinaladas. A lista está agora fechada.',
    ),
    shopping: [
      t(
        '🍗 Куриное филе — 1,3 кг',
        '🍗 Chicken breast — 1.3 kg',
        '🍗 Peito de frango — 1,3 kg',
      ),
      t(
        '🥩 Фарш говяжий или индейка — 800 г',
        '🥩 Ground beef or turkey — 800 g',
        '🥩 Carne picada de vaca ou peru — 800 g',
      ),
      t(
        '🐟 Лосось — 1 филе, около 200 г',
        '🐟 Salmon — 1 fillet, about 200 g',
        '🐟 Salmão — 1 filete, cerca de 200 g',
      ),
      t('🥚 Яйца — 24 шт.', '🥚 Eggs — 24', '🥚 Ovos — 24'),
      t(
        '🥛 Греческий йогурт 0% — 2,3 кг',
        '🥛 Greek yoghurt 0% — 2.3 kg',
        '🥛 Iogurte grego 0% — 2,3 kg',
      ),
      t('🍚 Рис — 600 г', '🍚 Rice — 600 g', '🍚 Arroz — 600 g'),
      t('🥔 Картофель — 1,5 кг', '🥔 Potatoes — 1.5 kg', '🥔 Batatas — 1,5 kg'),
      t(
        '🥦 Овощная смесь, замороженная — 800 г',
        '🥦 Frozen mixed vegetables — 800 g',
        '🥦 Legumes variados congelados — 800 g',
      ),
      t(
        '🦐 Морской коктейль — 500 г',
        '🦐 Mixed seafood — 500 g',
        '🦐 Mistura de mariscos — 500 g',
      ),
      t(
        '🐟 Сардины — 3 банки',
        '🐟 Sardines — 3 tins',
        '🐟 Sardinhas — 3 latas',
      ),
      t(
        '🫘 Нут — 2 банки',
        '🫘 Chickpeas — 2 tins',
        '🫘 Grão-de-bico — 2 latas',
      ),
      t('🍝 Макароны — 200 г', '🍝 Pasta — 200 g', '🍝 Massa — 200 g'),
      t('🥣 Гранола — 400 г', '🥣 Granola — 400 g', '🥣 Granola — 400 g'),
      t(
        '🍞 Цельнозерновой хлеб — 1 буханка',
        '🍞 Wholegrain bread — 1 loaf',
        '🍞 Pão integral — 1 pão',
      ),
      t(
        '🧀 Сыр для пасты — 1 упаковка',
        '🧀 Cheese for pasta — 1 pack',
        '🧀 Queijo para a massa — 1 pacote',
      ),
      t('🍌 Бананы — 4 шт.', '🍌 Bananas — 4', '🍌 Bananas — 4'),
      t(
        '🥬 Овощи для салата — 1,2 кг',
        '🥬 Salad vegetables — 1.2 kg',
        '🥬 Legumes para salada — 1,2 kg',
      ),
      t(
        '🥛 Растительное молоко — 2,2 л',
        '🥛 Plant milk — 2.2 l',
        '🥛 Bebida vegetal — 2,2 l',
      ),
      t(
        '🧂 Соевый соус — 1 бутылка · дома?',
        '🧂 Soy sauce — 1 bottle · at home?',
        '🧂 Molho de soja — 1 garrafa · em casa?',
      ),
    ],
    sources: [
      t(
        'Сохранённый расчёт завтрака: этикетка куриной нарезки, веса продуктов и оценка масла. В этом примере завтрак — единственная запись за день; итог и остатки пересчитаны под актуальные цели профиля. Диалог сокращён и адаптирован.',
        'Saved breakfast calculation: the chicken label, ingredient weights and estimated oil. In this example, breakfast is the only entry so far today; totals and remaining amounts use the profile’s current targets. Dialogue is shortened and adapted.',
        'Cálculo do pequeno-almoço guardado: o rótulo do frango, os pesos dos ingredientes e o azeite estimado. Neste exemplo, o pequeno-almoço é a única entrada de hoje até agora; os totais e as quantidades em falta usam os objetivos atuais do perfil. O diálogo está resumido e adaptado.',
      ),
      t(
        'Сохранённый рецепт и расчёт смузи. Размеры фруктов, чиа и шпината оценены. В этом примере это первая запись дня; итог и остатки пересчитаны под актуальные цели профиля. Подтверждение знакомого рецепта — иллюстрация сценария.',
        'Saved smoothie recipe and calculation. Fruit, chia and spinach portions are estimated. This is the first entry of the example day; totals and remaining amounts use the profile’s current targets. Confirmation of the familiar recipe is illustrative.',
        'Receita e cálculo do batido guardados. As porções de fruta, chia e espinafres são estimadas. Esta é a primeira entrada do dia de exemplo; os totais e as quantidades em falta usam os objetivos atuais do perfil. A confirmação da receita habitual é ilustrativa.',
      ),
      t(
        'Сценарий по привычке готовить на несколько приёмов. Реплики про контейнеры и расписание — иллюстрация, а не цитата переписки.',
        'A scenario based on cooking several portions at once. The container and schedule dialogue is illustrative, not a transcript.',
        'Um cenário baseado em cozinhar várias porções de uma só vez. O diálogo sobre recipientes e horários é ilustrativo, não uma transcrição.',
      ),
      t(
        'Краткая иллюстрация планирования. Цели 2 034 ккал и 178 г белка сверены с актуальным профилем; это пример, не рекомендация для посетителя. Здесь показана организация готовки, а не рассчитанное меню с порциями.',
        'A brief planning illustration. The 2,034 kcal and 178 g protein targets were checked against the current profile; these are example values, not visitor recommendations. This shows cooking arrangements, not a calculated menu with portions.',
        'Uma breve ilustração de planeamento. Os objetivos de 2034 kcal e 178 g de proteína foram verificados com o perfil atual; são valores de exemplo, não recomendações para quem visita. Mostra a organização da cozinha, não uma ementa calculada com porções.',
      ),
      t(
        'Позиции и количества из отдельного сохранённого недельного списка. Формат кнопок и счётчика повторяет список бота. Отметки работают только в этой демонстрации.',
        'Items and quantities from a separate saved weekly list. Buttons and counter follow the bot’s list format. Selections only affect this demo.',
        'Itens e quantidades de uma lista semanal guardada à parte. Os botões e o contador seguem o formato de lista do bot. As seleções só afetam esta demonstração.',
      ),
      t(
        'Иллюстрация инициативного сообщения: Саша замечает отсутствие записи об обеде, уточняет ситуацию и предлагает доступный перекус. Отсутствие записи не означает пропуск еды. Диалог вымышленный; реальные уведомления не отправляются, еда не записывается.',
        'An illustrative check-in: Sasha notices no lunch entry, asks what happened and suggests an available snack. A missing entry does not mean a missed meal. The conversation is fictional; no notifications are sent and no food is logged.',
        'Uma ilustração de acompanhamento: a Sasha repara que não há registo de almoço, pergunta o que aconteceu e sugere um lanche disponível. A falta de um registo não significa uma refeição falhada. A conversa é fictícia; não são enviadas notificações nem registados alimentos.',
      ),
    ],
  };
}
