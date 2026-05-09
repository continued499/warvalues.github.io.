const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    sides: {
      A: {
        name: "Britain",
        scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 }
      },
      B: {
        name: "Boers",
        scores: { leftRight: 1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 }
      }
    }
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    sides: {
      A: {
        name: "Eight-Nation Alliance",
        scores: { leftRight: 1, imperialism: 2, revolutionary: -2, nationalist: 0, interventionist: 2 }
      },
      B: {
        name: "Qing China & Boxers",
        scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 }
      }
    }
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    sides: {
      A: {
        name: "Britain",
        scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 }
      },
      B: {
        name: "Aro Confederacy",
        scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 }
      }
    }
  }
];

let current = 0;

let scores = {
  leftRight: 0,
  imperialism: 0,
  revolutionary: 0,
  nationalist: 0,
  interventionist: 0
};

const colors = [
  "#1b5e20",
  "#2e7d32",
  "#66bb6a",
  "#9e9e9e",
  "#ef9a9a",
  "#e53935",
  "#b71c1c"
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText =
    `Who do you support in the ${q.war}? (${q.year})`;

  document.getElementById("progress").innerText =
    `Question ${current + 1} of ${questions.length}`;

  const container = document.getElementById("answers");
  container.innerHTML = "";

  const labels = [
    `Strongly support ${q.sides.A.name}`,
    `Somewhat support ${q.sides.A.name}`,
    `Slightly support ${q.sides.A.name}`,
    "Neutral",
    `Slightly support ${q.sides.B.name}`,
    `Somewhat support ${q.sides.B.name}`,
    `Strongly support ${q.sides.B.name}`
  ];

  labels.forEach((text, index) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.style.background = colors[index];

    btn.onclick = () => {
      applyScore(q, index);
      current++;

      if (current < questions.length) {
        loadQuestion();
      } else {
        showResults();
      }
    };

    container.appendChild(btn);
  });
}

function applyScore(q, index) {
  if (index === 3) return;

  const side = index < 3 ? "A" : "B";
  const data = q.sides[side].scores;

  for (let key in data) {
    scores[key] += data[key];
  }
}

function toPercent(value, max) {
  let percent = ((value + max) / (2 * max)) * 100;
  return Math.max(0, Math.min(100, percent));
}

function showResults() {
  const max = questions.length * 2;

  const leftRightPct = toPercent(scores.leftRight, max);
  const imperialismPct = toPercent(scores.imperialism, max);
  const revolutionaryPct = toPercent(scores.revolutionary, max);
  const nationalistPct = toPercent(scores.nationalist, max);
  const interventionistPct = toPercent(scores.interventionist, max);

  function axisLabel(pct, leftLabel, rightLabel) {
    if (pct > 60) return leftLabel;
    if (pct < 40) return rightLabel;
    return "Balanced";
  }

  function makeBar(pct, leftColor, rightColor, leftLabel, rightLabel) {
    const right = (100 - pct).toFixed(1);
    const left = pct.toFixed(1);
    return `
      <div class="wv-axis-title">
        ${leftLabel} Axis: <span>${axisLabel(pct, leftLabel, rightLabel)}</span>
      </div>
      <div class="wv-bar-row">
        <div class="wv-label-left">${leftLabel}</div>
        <div class="wv-bar-wrap">
          <div class="wv-bar-a" style="width:${left}%; background:${leftColor};">${left}%</div>
          <div class="wv-bar-b" style="width:${right}%; background:${rightColor};">${right}%</div>
        </div>
        <div class="wv-label-right">${rightLabel}</div>
      </div>
    `;
  }

  document.getElementById("question").innerText = "Results";
  document.getElementById("progress").innerText = "Finished";

  document.getElementById("answers").innerHTML = `
    <div class="wv-results">
      <div class="wv-axis">${makeBar(leftRightPct, "#c0392b", "#3498db", "Right", "Left")}</div>
      <div class="wv-axis">${makeBar(imperialismPct, "#8e44ad", "#27ae60", "Imperialism", "Anti-Imperialism")}</div>
      <div class="wv-axis">${makeBar(revolutionaryPct, "#e74c3c", "#2c3e50", "Revolutionary", "Counterrevolutionary")}</div>
      <div class="wv-axis">${makeBar(nationalistPct, "#e67e22", "#16a085", "Nationalist", "Internationalist")}</div>
      <div class="wv-axis">${makeBar(interventionistPct, "#c0392b", "#7f8c8d", "Interventionist", "Isolationist")}</div>
    </div>
  `;
}

window.onload = loadQuestion;
