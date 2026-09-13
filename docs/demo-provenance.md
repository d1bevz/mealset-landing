# Primary landing: nutritionist demo provenance

Reviewed 2026-09-13. Only `/` and `/en` use these fixtures. The owner authorized
using their food scenarios. No account IDs, raw conversation dumps, secrets,
identity details or body measurements are included here or in the fixtures.

These are **adapted illustrative conversations**, not newly generated production
bot replies or screenshots. UI interactions never write to a real diary, plan or
shopping list. Telegram links open the bot; they do not submit a message/order.
Each tab is an independent adapted example. Its targets are example values,
not advice to a website visitor. No live production mutations were performed.

## Nutrition receipts

Breakfast: successful saved food receipt, potato 200 g, onion 30 g, eggs 4,
estimated olive oil 4 g, chicken slices 75 g from a 150 g labelled pack.
Receipt kcal 611.31, protein 47.324 g, fat 28.009 g, carbohydrate 41.235 g,
fibre 4.71 g, kcal error 152.8275. Display 611 ±153 kcal; macros/fibre rounded
for readability to at most one decimal. At the owner's request, this example now
uses breakfast as the only entry so far today and current profile targets,
rechecked read-only: 2034 kcal, protein 178 g, fat 62.4 g, carbs 190.1 g.
Day total 611 /2034 kcal, 30%; range 458–764, remaining 1270–1576 kcal.
Daily macros equal the meal: 47.3, 28, 41.2 g; remaining 130.7, 34.4, 148.9 g.
These are editorial recalculations from displayed rounded receipt values, not a
new production receipt. The earlier snack is excluded only from this demo.

Smoothie: successful saved receipt, mango1 (~200 g), avocado1 (~150 g), chia
~2 tbsp, vanilla whey1 scoop, spinach2 handfuls, soy milk370 g. Receipt
761.74 kcal, protein43.6456, fat37.0006, carbs74.9258, fibre23.773,
kcal error192.72022. Display762±193; macros/fibre one decimal. At the owner’s request, the same current targets as breakfast are used:
Day762/2034, 37%, range569–955, remaining1079–1465.
Daily macros43.6/178,37/62.4,74.9/190.1; remaining134.4,25.4,115.2.
These totals are editorial recalculations from displayed rounded receipt values. This is first entry of its example day.
The confirmation exchange is editorial; no removal of protein is invented.

No daily fibre target/total is invented: the source day summary lacks that field.
Nutritionist feedback is adapted to known ingredients/pantry context, not quoted.

## Plans

The plan tab now shows a short cooking outline, not a detailed calculated menu.
Current profile targets were rechecked read-only: 2034 kcal and 178 g protein.
The previous 3178/2542/208 budget, historical per-meal estimates, daily sums and
weight-loss pace have been removed from this tab. Both nutrition examples use these current targets.
The two-day cooking outline is editorial: it illustrates cooking ahead, without
claiming a new plan was calculated or saved in production. No portions or meal
nutrients are invented. The source disclosure states this distinction. The CTA
opens Telegram to build the visitor’s own plan, not a fabricated PDF.

Breakfast plan swapping and container/schedule conversation are illustrative
new story elements, not confirmed events from the historical diary. Plan swap
is explicitly marked illustrative in its expanded block. The real breakfast
receipt did not link to a plan item. Do not describe it as an actual plan mutation.

## Shopping

19 non-suppressed entries copied from a separate saved weekly shopping list,
not calculated from the two-day plan in another tab. One suppressed lentil entry
is excluded; its suppression reason is not asserted. Original approximate pack
sizes preserved. Soy sauce retains the check-at-home qualification.
Interactive styling follows bot shopping keyboard semantics, including checked
state, count, Done, Order and Text. UI progressive disclosure is a landing-page
adaptation, not a literal Telegram screenshot. No claim that checking Done
updates the real user's pantry. State resets when switching examples.

## Format references

Mealset `docs/skills/ru/meal-logging/references/read-back-format.md`:
meal type, ingredient lines, meal kcal/macros/fibre, day target comparison,
returned uncertainty range, nutritionist feedback, no invented action results.
`docs/skills/ru/meal-planning/SKILL.md`: budget before days, portions, kcal/protein,
prep and subsequent day, saved-plan distinction.
`src/telegram/shopping-checklist.ts` and `src/i18n/shopping-copy.ts`: brief Sasha
intro followed by separate list message with item buttons and progress.

## Proactive example

Illustrative missed-lunch check-in during a busy workday. Sasha observes a missing
lunch entry and asks whether the person ate; she does not infer a skipped meal
from absent logging. After the person confirms and names skyr and a banana,
she suggests that snack before a call and lunch afterwards. No meal is logged
before consumption, no nutrition receipt is invented, and no notification is sent.
The two replies and reset are local demo state, not a production conversation.

## Planning recipe sources

The planning example uses two existing records from Mealset’s
`src/recipes/data/low-calorie-recipes.json`:

- `hot:r023`, «Запеканка из пасты и фарша с томатной пастой»: beef mince,
  onion and mushrooms in tomato-wine sauce, layered with pasta and baked with cheese.
- `hot:r028`, «Индейка в томатном соусе с грибами»: turkey and mushrooms
  in tomato sauce, served with boiled sweet potato, garlic and herbs.

The short landing descriptions omit full ingredient lists and instructions;
no recipe nutrition is asserted. Combining cooking into one evening and merging
mushrooms in the shopping list are editorial illustrations of planning, not
production plan or shopping-list writes. The earlier invented pasta/wrap pairing
has been replaced by these catalog recipes.
