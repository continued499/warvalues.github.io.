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
  const max = questions.length * 2;

  const imperialismPct = toPercent(scores.imperialism, max);
  const interventionPct = toPercent(scores.interventionism, max);
  const revolutionPct = toPercent(scores.revolution, max);
  const statePct = toPercent(scores.statePower, max);

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
      <div class="wv-axis">${makeBar(imperialismPct, "#c0392b", "#27ae60", "Imperialism", "Anti-Imperialism")}</div>
      <div class="wv-axis">${makeBar(interventionPct, "#e67e22", "#2980b9", "Interventionism", "Isolationism")}</div>
      <div class="wv-axis">${makeBar(revolutionPct, "#e74c3c", "#8e44ad", "Revolution", "Stability")}</div>
      <div class="wv-axis">${makeBar(statePct, "#16a085", "#7f8c8d", "State Power", "Decentralism")}</div>
    </div>
  `;
}

window.onload = loadQuestion;
