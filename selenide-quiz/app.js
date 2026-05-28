const CIRCUMFERENCE = 2 * Math.PI * 34; // r=34
const LETTERS = ['A', 'B', 'C', 'D'];

let questions = [];
let current = 0;
let correctCount = 0;
let wrongCount = 0;
let answered = false;

// DOM refs
const startScreen   = document.getElementById('startScreen');
const quizScreen    = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startBtn      = document.getElementById('startBtn');
const finishBtn     = document.getElementById('finishBtn');
const nextBtn       = document.getElementById('nextBtn');
const restartBtn    = document.getElementById('restartBtn');

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initQuiz() {
  questions = shuffle(BANK);
  current = 0;
  correctCount = 0;
  wrongCount = 0;
  answered = false;
}

function show(screen) {
  [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

function updateRing(pct) {
  const offset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;
  document.getElementById('ringFill').style.strokeDashoffset = offset;
  document.getElementById('ringLabel').textContent = pct + '%';
}

function renderQuestion() {
  answered = false;
  const q = questions[current];
  const total = questions.length;

  // Header meta
  document.getElementById('headerMeta').textContent =
    `Q${current + 1}/${total}  ·  ✓${correctCount}  ✗${wrongCount}`;

  // Progress bar
  document.getElementById('progressFill').style.width = ((current / total) * 100) + '%';

  // Sidebar
  document.getElementById('qCounter').innerHTML = `${current + 1} <span>/ ${total}</span>`;
  document.getElementById('sCorrect').textContent = correctCount;
  document.getElementById('sWrong').textContent = wrongCount;

  const answered_pct = current > 0
    ? Math.round(correctCount / current * 100)
    : 0;
  updateRing(answered_pct);

  // Question
  document.getElementById('qNumber').textContent = `Q${current + 1}`;
  document.getElementById('qText').textContent = q.q;

  // Options — shuffle order
  const feedback = document.getElementById('feedbackBox');
  feedback.className = 'feedback hidden';
  feedback.textContent = '';

  nextBtn.classList.add('hidden');

  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';

  const order = shuffle([0, 1, 2, 3]);
  order.forEach((origIdx, pos) => {
    const btn = document.createElement('button');
    btn.className = 'option';
    btn.dataset.isCorrect = origIdx === q.c ? '1' : '0';
    btn.innerHTML = `<span class="opt-letter">${LETTERS[pos]}</span><span>${q.o[origIdx]}</span>`;
    btn.addEventListener('click', () => selectAnswer(btn, q));
    container.appendChild(btn);
  });
}

function selectAnswer(clickedBtn, q) {
  if (answered) return;
  answered = true;

  const allBtns = document.querySelectorAll('.option');
  allBtns.forEach(b => { b.disabled = true; });

  const fb = document.getElementById('feedbackBox');

  if (clickedBtn.dataset.isCorrect === '1') {
    correctCount++;
    clickedBtn.classList.add('correct');
    fb.className = 'feedback correct';
    fb.textContent = '✓ Правильно! ' + q.e;
  } else {
    wrongCount++;
    clickedBtn.classList.add('wrong');
    allBtns.forEach(b => { if (b.dataset.isCorrect === '1') b.classList.add('reveal'); });
    fb.className = 'feedback wrong';
    fb.textContent = '✗ Неправильно. ' + q.e;
  }

  // Update scores
  document.getElementById('sCorrect').textContent = correctCount;
  document.getElementById('sWrong').textContent = wrongCount;
  document.getElementById('headerMeta').textContent =
    `Q${current + 1}/${questions.length}  ·  ✓${correctCount}  ✗${wrongCount}`;

  const done = current + 1;
  const pct = Math.round(correctCount / done * 100);
  updateRing(pct);

  nextBtn.classList.remove('hidden');
  nextBtn.textContent = current < questions.length - 1 ? 'Наступне →' : 'Переглянути результат →';
}

function showResults(finishedEarly) {
  const done = finishedEarly ? current : current + 1;
  const pct = done > 0 ? Math.round(correctCount / done * 100) : 0;

  document.getElementById('resultPercent').textContent = pct + '%';
  document.getElementById('rcCorrect').textContent = correctCount;
  document.getElementById('rcWrong').textContent = wrongCount;
  document.getElementById('rcTotal').textContent = done;
  document.getElementById('rcLeft').textContent = questions.length - done;

  const msgs = [
    [100, 'Ідеальний результат — Selenide від зубів відлітає!'],
    [80,  'Відмінно, тема добре засвоєна.'],
    [60,  'Непогано, але є що повторити.'],
    [40,  'Варто переглянути документацію Selenide.'],
    [0,   'Рекомендуємо детально вивчити Selenide API.'],
  ];
  document.getElementById('resultMsg').textContent =
    msgs.find(([threshold]) => pct >= threshold)[1];

  document.getElementById('headerMeta').textContent =
    `Результат: ${pct}%  ·  ✓${correctCount}  ✗${wrongCount}`;

  show(resultsScreen);
}

// Events
startBtn.addEventListener('click', () => {
  initQuiz();
  show(quizScreen);
  renderQuestion();
});

nextBtn.addEventListener('click', () => {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  } else {
    showResults(false);
  }
});

finishBtn.addEventListener('click', () => {
  showResults(!answered);
});

restartBtn.addEventListener('click', () => {
  initQuiz();
  show(quizScreen);
  renderQuestion();
});
