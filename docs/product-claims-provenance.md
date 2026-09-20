# Numerical product claims

Checked 2026-09-20 against the local Mealset repository at commit `979b60fb`.
These are counts of the bundled base datasets, not a live production database census.

| Landing claim | Source in Mealset | Verification |
| --- | --- | --- |
| 8,070 base foods | `data/final/mealset_food.csv` | CSV records and unique `fdc_id`: 8,070; 7,701 SR Legacy and 369 Foundation records. |
| 427 recipes | `src/recipes/data/low-calorie-recipes.json` | 427 records and unique `uid`; 136 `hot`, 44 `soups`, 247 `salads`. |
| Runtime recipe catalogue | `src/recipes/catalog.ts`, `src/recipes/tools.ts` | Default catalogue loader reads that JSON; search tool describes the same counts. |
| 7 knowledge areas (not used in current copy) | `docs/skills/ru/nutritionist-reference/SKILL.md` | Seven reference domains: energy balance, adaptive tracking, macros/counting, meal planning, sports nutrition, psychology, clinical nutrition. |

## Founder update, 2026-09-20

The user supplied newer product information after the dataset review:

- Public copy uses “over 8,000 foods” and says the catalogue keeps growing.
- Public copy uses “over 500 recipes” and ongoing additions. This is founder-supplied information; the inspected bundled JSON still contains 427. Do not describe the 500+ figure as independently counted from that file.
- Sasha can research food data outside the catalogue.
- A further food database is planned. The user ruled out Open Food Facts and specified a European regulator. Copy names EFSA’s European Food Composition Database (EU FCDB), described at https://www.efsa.europa.eu/en/data-report/food-composition . The main point retains the planned integration status; there is no separate “Coming soon” note. The precise database name was identified from the regulator description, not from an existing implementation.
- The earlier exact recipe-category breakdown was removed because it describes only the inspected 427-record snapshot.

## Boundaries

- Do not describe the 427 recipes as original Mealset-authored recipes: the loader identifies three source cookbooks.
- The recipe schema has no structured preparation-time field. No universal cooking-time promise is substantiated.
- `data/final/nutrient.csv` contains 477 reference rows. The runtime research filter in `src/food/nutrient-catalog.ts` retains 472. The bundled food-nutrient measurements cover 246 distinct IDs, including energy measures. None of those counts means every dish has that many measured nutrients. Public copy therefore says “all available nutrients”, without a misleading fixed count.
- Memory and proactive support retain concrete functional descriptions; repository/configuration counts are not user-benefit metrics.

Recount these sources before updating the numerical claims. Food and recipe counts were computed by parsing CSV/JSON records and checking distinct IDs, not by counting file lines.

The knowledge scenario now describes concrete applications of the reference domains: energy needs and weight plateaus, nutrient balance, exercise/recovery/hydration, and eating behaviour. The seven-domain count was removed from public copy at the user’s request.

## Hero positioning

The hero now emphasizes reducing manual food-logging work. Research basis: “Barriers to and Facilitators for Using Nutrition Apps: Systematic Review and Conceptual Framework” (2021), 28 publications, https://pmc.ncbi.nlm.nih.gov/articles/PMC8409150/ . It identifies usability and effort barriers; it does not establish that all users reject nutrition apps or measure Mealset's speed. The hero panel links to this review and illustrates manual lookup, portion entry and repeated logging. No measured performance claim is made.
