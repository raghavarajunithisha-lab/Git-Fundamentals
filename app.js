// ===== STATE =====
let currentModule = null;
let currentChapter = null;
let completedChapters = JSON.parse(localStorage.getItem('gitmastery_completed') || '[]');
let isDark = localStorage.getItem('gitmastery_theme') !== 'light';

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  buildSidebar();
  openChapter('1.0');
  updateProgress();
});

// ===== THEME =====
function applyTheme() {
  document.body.classList.toggle('light', !isDark);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.textContent = isDark ? '🌙' : '☀️';
}
function toggleTheme() {
  isDark = !isDark;
  localStorage.setItem('gitmastery_theme', isDark ? 'dark' : 'light');
  applyTheme();
}

// ===== LANDING =====
function startLearning() {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
}
function showLanding() {
  openChapter(currentChapter ? currentChapter.id : '1.0');
}

// ===== SIDEBAR =====
function buildSidebar() {
  const container = document.getElementById('sidebarContent');
  container.innerHTML = '';
  const mod = MODULES[0];
  if (!mod) return;
  const div = document.createElement('div');
  div.className = 'sidebar-chapters open';
  div.id = `sidebarChapters${mod.id}`;
  div.innerHTML = mod.chapters.map(ch => `
    <button class="sidebar-chapter-btn ${completedChapters.includes(ch.id)?'completed':''}" data-ch="${ch.id}" onclick="openChapter('${ch.id}')">
      <span class="ch-check">${completedChapters.includes(ch.id)?'✅':'☐'}</span>
      <span>${ch.title}</span>
    </button>
  `).join('');
  container.appendChild(div);
}

function toggleModuleInSidebar(modId) {
  const chapters = document.getElementById('sidebarChapters' + modId);
  if (chapters) {
    chapters.classList.add('open');
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

// ===== DASHBOARD =====
function renderDashboard() {
  const grid = document.getElementById('modulesGrid');
  const colors = ['#6366f1','#f59e0b','#22c55e','#a855f7','#06b6d4'];
  grid.innerHTML = MODULES.map((mod, i) => {
    const total = mod.chapters.length;
    const done = mod.chapters.filter(ch => completedChapters.includes(ch.id)).length;
    const pct = total ? Math.round(done / total * 100) : 0;
    return `
    <div class="module-card" style="--card-accent:${colors[i]}" onclick="openModule(${mod.id})">
      <span class="card-icon">${mod.icon}</span>
      <h3>${mod.title}</h3>
      <p>${mod.desc}</p>
      <div class="card-meta">
        <span>📖 ${total} chapters</span>
        <span>✅ ${done}/${total} done</span>
      </div>
      <div class="card-progress"><div class="card-progress-bar" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

function showDashboard() {
  openChapter(currentChapter ? currentChapter.id : '1.0');
}

// ===== MODULE OVERVIEW =====
function openModule(modId) {
  const mod = MODULES.find(m => m.id === modId);
  if (!mod) return;
  currentModule = mod;
  currentChapter = null;

  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('chapterContent').classList.add('hidden');
  const overview = document.getElementById('moduleOverview');
  overview.classList.remove('hidden');

  overview.innerHTML = `
    <div class="module-hero">
      <span class="hero-icon">${mod.icon}</span>
      <h1>Module ${mod.id}: ${mod.title}</h1>
      <p>${mod.desc}</p>
    </div>
    <div class="chapter-list">
      ${mod.chapters.map((ch, i) => `
        <div class="chapter-card ${completedChapters.includes(ch.id)?'completed':''}" onclick="openChapter('${ch.id}')">
          <div class="ch-num">${completedChapters.includes(ch.id)?'✓':(i+1)}</div>
          <div class="ch-info">
            <div class="ch-title">${ch.title}</div>
            <div class="ch-desc">${ch.desc}</div>
          </div>
        </div>
      `).join('')}
    </div>`;

  // Expand sidebar module
  toggleModuleInSidebar(modId);
  window.scrollTo(0, 0);
}

// ===== CHAPTER CONTENT =====
function openChapter(chId) {
  const modId = parseInt(chId.split('.')[0]);
  const mod = MODULES.find(m => m.id === modId);
  const ch = mod?.chapters.find(c => c.id === chId);
  if (!mod || !ch) return;

  currentModule = mod;
  currentChapter = ch;

  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('moduleOverview').classList.add('hidden');
  const content = document.getElementById('chapterContent');
  content.classList.remove('hidden');

  const chIdx = mod.chapters.indexOf(ch);
  const prevCh = chIdx > 0 ? mod.chapters[chIdx - 1] : null;
  const nextCh = chIdx < mod.chapters.length - 1 ? mod.chapters[chIdx + 1] : null;
  const isCompleted = completedChapters.includes(chId);
  const chapterHTML = CHAPTER_CONTENT[chId] || `<div class="content-block"><p>Content for this chapter is coming soon! Check back later.</p></div>`;

  content.innerHTML = `
    <div class="chapter-title-section">
      <h1>Chapter ${chId}: ${ch.title}</h1>
      <p class="chapter-subtitle">${ch.desc}</p>
    </div>
    ${chapterHTML}
    <div class="chapter-nav">
      <button class="chapter-nav-btn" ${prevCh?`onclick="openChapter('${prevCh.id}')"`:'disabled'}>
        ← ${prevCh ? prevCh.title : 'Start'}
      </button>
      <button class="mark-complete-btn ${isCompleted?'completed':''}" onclick="toggleComplete('${chId}')">
        ${isCompleted ? '✅ Completed' : '☐ Mark Complete'}
      </button>
      <button class="chapter-nav-btn" ${nextCh?`onclick="openChapter('${nextCh.id}')"`:'disabled'}>
        ${nextCh ? nextCh.title : 'End'} →
      </button>
    </div>`;

  // Update sidebar active state
  document.querySelectorAll('.sidebar-chapter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ch === chId);
  });
  toggleModuleInSidebar(modId);
  window.scrollTo(0, 0);
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
}

// ===== PROGRESS =====
function toggleComplete(chId) {
  const idx = completedChapters.indexOf(chId);
  if (idx >= 0) {
    completedChapters.splice(idx, 1);
  } else {
    completedChapters.push(chId);
    showToast('Chapter completed! 🎉', 'success');
  }
  localStorage.setItem('gitmastery_completed', JSON.stringify(completedChapters));
  updateProgress();
  buildSidebar();
  if (currentChapter) openChapter(currentChapter.id);
}

function updateProgress() {
  const total = MODULES.reduce((sum, m) => sum + m.chapters.length, 0);
  const done = completedChapters.length;
  const pct = total ? Math.round(done / total * 100) : 0;
  const bar = document.getElementById('globalProgress');
  const text = document.getElementById('progressText');
  if (bar) bar.style.width = pct + '%';
  if (text) text.textContent = pct + '% Complete (' + done + '/' + total + ')';
}

function resetProgress() {
  if (confirm('Reset all progress? This cannot be undone.')) {
    completedChapters = [];
    localStorage.removeItem('gitmastery_completed');
    updateProgress();
    buildSidebar();
    renderDashboard();
    showToast('Progress reset', 'info');
  }
}

// ===== TERMINAL =====
let terminalStepIndex = 0;
let terminalSteps = [];

function openTerminal(chId) {
  const exercise = TERMINAL_EXERCISES[chId];
  if (!exercise) { showToast('No terminal exercise for this chapter yet', 'warning'); return; }
  terminalSteps = exercise.steps;
  terminalStepIndex = 0;
  document.getElementById('terminalTitle').textContent = exercise.title;
  document.getElementById('terminalOutput').innerHTML =
    `<span class="t-info">${exercise.instructions}</span>\n<span class="t-info">Type the commands below. Hints are shown at the bottom.</span>\n\n`;
  document.getElementById('terminalHint').textContent = '💡 Hint: ' + terminalSteps[0].hint;
  document.getElementById('terminalInput').value = '';
  document.getElementById('terminalOverlay').classList.remove('hidden');
  setTimeout(() => document.getElementById('terminalInput').focus(), 100);
}

function closeTerminal() {
  document.getElementById('terminalOverlay').classList.add('hidden');
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('terminalOverlay') &&
      !document.getElementById('terminalOverlay').classList.contains('hidden')) {
    const input = document.getElementById('terminalInput');
    const val = input.value.trim();
    if (!val) return;
    const output = document.getElementById('terminalOutput');
    const step = terminalSteps[terminalStepIndex];
    output.innerHTML += `<span class="t-success">$ ${val}</span>\n`;

    if (val === step.cmd || val.replace(/\s+/g,' ') === step.cmd.replace(/\s+/g,' ')) {
      if (step.output) output.innerHTML += step.output + '\n';
      output.innerHTML += `<span class="t-info">✓ Correct!</span>\n\n`;
      terminalStepIndex++;
      if (terminalStepIndex < terminalSteps.length) {
        document.getElementById('terminalHint').textContent = '💡 Hint: ' + terminalSteps[terminalStepIndex].hint;
      } else {
        output.innerHTML += `<span class="t-success">🎉 Exercise complete! You nailed it!</span>\n`;
        document.getElementById('terminalHint').textContent = '✅ All steps completed! Close this terminal to continue.';
        showToast('Terminal exercise completed! 💻', 'success');
      }
    } else {
      output.innerHTML += `<span class="t-error">�- Not quite. Expected: ${step.cmd}</span>\n`;
      output.innerHTML += `<span class="t-warn">💡 ${step.hint}</span>\n\n`;
    }
    input.value = '';
    const body = document.getElementById('terminalBody');
    body.scrollTop = body.scrollHeight;
  }
  if (e.key === 'Escape') {
    closeTerminal();
    closeQuiz();
  }
});

// ===== QUIZ =====
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function startQuiz(chId) {
  quizQuestions = QUIZZES[chId];
  if (!quizQuestions || quizQuestions.length === 0) { showToast('No quiz for this chapter yet', 'warning'); return; }
  quizIndex = 0;
  quizScore = 0;
  document.getElementById('quizTitle').textContent = 'Knowledge Check';
  renderQuizQuestion();
  document.getElementById('quizOverlay').classList.remove('hidden');
}

function renderQuizQuestion() {
  const q = quizQuestions[quizIndex];
  quizAnswered = false;
  document.getElementById('quizBody').innerHTML = `
    <div class="quiz-question">${quizIndex + 1}/${quizQuestions.length}: ${q.q}</div>
    ${q.opts.map((opt, i) => `
      <button class="quiz-option" data-idx="${i}" onclick="answerQuiz(${i})">${opt}</button>
    `).join('')}
    <div class="quiz-explanation" id="quizExp">${q.exp}</div>
    <button class="quiz-next" id="quizNext" onclick="nextQuizQuestion()">
      ${quizIndex < quizQuestions.length - 1 ? 'Next Question →' : 'See Results'}
    </button>`;
}

function answerQuiz(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = quizQuestions[quizIndex];
  const options = document.querySelectorAll('.quiz-option');
  options.forEach((opt, i) => {
    if (i === q.ans) opt.classList.add('correct');
    if (i === idx && i !== q.ans) opt.classList.add('wrong');
    opt.style.pointerEvents = 'none';
  });
  if (idx === q.ans) quizScore++;
  document.getElementById('quizExp').classList.add('show');
  document.getElementById('quizNext').classList.add('show');
}

function nextQuizQuestion() {
  quizIndex++;
  if (quizIndex < quizQuestions.length) {
    renderQuizQuestion();
  } else {
    const pct = Math.round(quizScore / quizQuestions.length * 100);
    const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
    document.getElementById('quizBody').innerHTML = `
      <div class="quiz-score">
        <div class="score-num">${emoji} ${quizScore}/${quizQuestions.length}</div>
        <p>${pct}% correct${pct >= 80 ? ' - Excellent! You really understand this!' : pct >= 60 ? ' - Good job! Review the ones you missed.' : ' - Keep studying! Re-read the chapter and try again.'}</p>
        <button class="exercise-btn" onclick="closeQuiz()" style="margin-top:1rem">Close</button>
      </div>`;
    if (pct >= 80) showToast('Quiz aced! 🏆', 'success');
  }
}

function closeQuiz() {
  document.getElementById('quizOverlay').classList.add('hidden');
}

// ===== TOAST =====
function showToast(msg, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast ' + type;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

