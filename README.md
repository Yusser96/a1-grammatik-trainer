# A1 Grammatik Trainer

A static web app to practise German A1 grammar for the telc Deutsch A1 exam: 20 grammar
topics with intuitions, rules and examples, 480 exercises in five formats (multiple choice,
fill the blank, word order, wrong word, extra word), three difficulty levels, progress
tracking and a telc-style mock exam.

Live: https://yusser96.github.io/a1-grammatik-trainer/

Sister apps: [A1](https://yusser96.github.io/a1-grammatik-trainer/) ·
[A2](https://yusser96.github.io/a2-grammatik-trainer/) ·
[B1](https://yusser96.github.io/b1-grammatik-trainer/)

No build step, no server, no accounts. Progress lives in the browser's local storage and can be
exported/imported as a JSON file from the Profile tab.

## Run it locally

Double-click `index.html`, or serve the folder:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html          page shell and navigation
css/style.css       design tokens, light/dark themes, layout
js/store.js         progress in localStorage (mastery, streaks, mock history, settings)
js/engine.js        renders and checks the five exercise types
js/exam.js          telc-style mock exam: build, run, score, review
js/app.js           router and the five views (Home, Learn, Practise, Exam, Profile)
data/config.js      level name, storage key, exam notes, links to the other levels
data/topics.js      grammar reference for the 20 topics
data/items*.js      exercise bank (480 items, tagged by topic, level and type)
data/exam.js        mock-exam texts (3 for Teil 1, 3 for Teil 2)
docs/topic-plan.md  the topic list with the scope of each topic
docs/content-guide.md  how to write exercises, grammar pages and exam texts
tests/validate.js   data checks: node tests/validate.js
tests/smoke.html    browser smoke test (open it; results appear at the bottom)
```

The app code is shared with the A1, A2 and B1 trainers; only `data/` differs.

## Adding exercises

Append to a `data/items-*.js` file (or add a new one; ids continue per topic):

```js
T("05");                       // topic id
mc(1, "Ich habe ___ Bruder.", ["einen", "ein", "eine"], 0, "haben + Akkusativ, masculine → einen.");
fill(2, "Ich suche ___ Schlüssel. (der)", "den", "Direct object, masculine → den.");
order(3, "Heute kaufe ich einen neuen Tisch.", "explanation", ["alternative order"]);
wrong(3, "Ich habe ein Hund.", "ein", "einen", "haben + Akkusativ.");
extra(3, "Ich möchte einen Tee zu trinken.", "zu", "No zu after möchte.");
```

Then run `node tests/validate.js`. See `docs/content-guide.md` for the full rules.

## Sources

- telc Deutsch A1 (Start Deutsch 1) test description: https://goethe.de/pro/relaunch/prf/et/Pruefungsziele_Testbeschreibung_A1_SD1.pdf
- The real A1 exam has no separate grammar part; the mock here borrows the telc Sprachbausteine format so grammar can be drilled under exam conditions.
