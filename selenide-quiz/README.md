# Selenide Quiz — локальний запуск

## Варіант 1 — Python (є на більшості Mac/Linux/Win)
```bash
cd selenide-quiz
python3 -m http.server 8080
```
Відкрий: http://localhost:8080

---

## Варіант 2 — Node.js (npx)
```bash
cd selenide-quiz
npx serve .
```
Відкрий: http://localhost:3000

---

## Варіант 3 — VS Code Live Server
Встанови розширення Live Server (ritwickdey.LiveServer),
відкрий папку у VS Code, клікни "Go Live" у статус-барі.

---

## Структура
```
selenide-quiz/
├── index.html     # розмітка
├── style.css      # стилі (dark theme, JetBrains Mono)
├── questions.js   # 100 запитань
├── app.js         # логіка квізу
└── README.md
```

## Функціональність
- 100 запитань по Selenide API
- Щоразу питання та варіанти відповідей перемішуються (Fisher-Yates)
- Кнопка "Фініш" — зупинись будь-коли
- Результат рахується відносно пройдених питань
- Прогрес-кільце + лічильники правильних/неправильних
