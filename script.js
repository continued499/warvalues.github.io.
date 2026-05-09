const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    sides: {
      A: {
        name: "Britain",
        scores: {
          imperialism: 2,
          interventionism: 2,
          statePower: 1,
          revolution: 0
        }
      },
      B: {
        name: "Boers",
        scores: {
          imperialism: -2,
          interventionism: -1,
          statePower: 1,
          revolution: 1
        }
      }
    }
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    sides: {
      A: {
        name: "Eight-Nation Alliance",
        scores: {
          imperialism: 2,
          interventionism: 2,
          statePower: 1,
          revolution: 0
        }
      },
      B: {
        name: "Qing China",
        scores: {
          imperialism: -2,
          interventionism: -1,
          statePower: 1,
          revolution: 1
        }
      }
    }
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    sides: {
      A: {
        name: "Britain",
        scores: {
          imperialism: 2,
          interventionism: 2,
          statePower: 1,
          revolution: 0
        }
      },
      B: {
        name: "Aro Confederacy",
        scores: {
          imperialism: -2,
          interventionism: -1,
          statePower: 1,
          revolution: 1
        }
      }
    }
  }
];

let current = 0;

let scores = {
  imperialism: 0,
  interventionism: 0,
  revolution: 0,
  statePower: 0
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
  const max = questions.length * 3;

  const imperialismPct = toPercent(scores.imperialism, max);
  const interventionPct = toPercent(scores.interventionism, max);
  const revolutionPct = toPercent(scores.revolution, max);
  const statePct = toPercent(scores.statePower, max);

  document.getElementById("question").innerText = "Results";

  document.getElementById("answers").innerHTML = `
    <h3>Imperialism ↔ Anti-Imperialism</h3>
    <div class="bar-container">
      <div class="bar-fill" style="width:${imperialismPct}%; background:#4caf50;"></div>
    </div>
    <p>${imperialismPct.toFixed(1)}%</p>

    <h3>Interventionism ↔ Isolationism</h3>
    <div class="bar-container">
      <div class="bar-fill" style="width:${interventionPct}%; background:#2196f3;"></div>
    </div>
    <p>${interventionPct.toFixed(1)}%</p>

    <h3>Revolution ↔ Stability</h3>
    <div class="bar-container">
      <div class="bar-fill" style="width:${revolutionPct}%; background:#f44336;"></div>
    </div>
    <p>${revolutionPct.toFixed(1)}%</p>

    <h3>State Power</h3>
    <div class="bar-container">
      <div class="bar-fill" style="width:${statePct}%; background:#9c27b0;"></div>
    </div>
    <p>${statePct.toFixed(1)}%</p>
  `;

  document.getElementById("progress").innerText = "Finished";
}

window.onload = loadQuestion;
