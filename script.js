const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Boers", scores: { leftRight: 1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    sides: {
      A: { name: "Eight-Nation Alliance", scores: { leftRight: 1, imperialism: 2, revolutionary: -2, nationalist: 0, interventionist: 2 } },
      B: { name: "Qing China & Boxers", scores: { leftRight: 0, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Aro Confederacy", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "British Expedition to Tibet",
    year: 1903,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Tibet", scores: { leftRight: -1, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Russo-Japanese War",
    year: 1904,
    sides: {
      A: { name: "Tsarist Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } },
      B: { name: "Japan", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Madagascar War",
    year: 1904,
    sides: {
      A: { name: "France", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: -1, interventionist: 2 } },
      B: { name: "Madagascar", scores: { leftRight: -1, imperialism: -2, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Italo-Turkish War",
    year: 1911,
    sides: {
      A: { name: "Italy", scores: { leftRight: 1, imperialism: 2, revolutionary: 0, nationalist: 1, interventionist: 2 } },
      B: { name: "Ottomans", scores: { leftRight: 0, imperialism: -1, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "First Balkan War",
    year: 1912,
    sides: {
      A: { name: "Balkan League", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: 1 } },
      B: { name: "Ottomans", scores: { leftRight: 1, imperialism: 0, revolutionary: -1, nationalist: 0, interventionist: -1 } }
    }
  },
  {
    war: "Second Balkan War",
    year: 1913,
    sides: {
      A: { name: "Bulgaria", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } },
      B: { name: "Serbia/Greece/Romania", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Serbian Campaign",
    year: 1914,
    sides: {
      A: { name: "Austria-Hungary", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Serbia", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Invasion of Belgium",
    year: 1914,
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "Belgium", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Western Front",
    year: 1914,
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "France", scores: { leftRight: 0, imperialism: 0, revolutionary: 0, nationalist: 1, interventionist: -1 } }
    }
  },
  {
    war: "Caucasus Campaign",
    year: 1914,
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Russia", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Mesopotamia Campaign",
    year: 1914,
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 1 } },
      B: { name: "Britain", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 0, interventionist: 1 } }
    }
  },
  {
    war: "Mexican Revolution",
    year: 1914,
    sides: {
      A: { name: "United States", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: 0, interventionist: 2 } },
      B: { name: "Mexico", scores: { leftRight: -1, imperialism: -1, revolutionary: 2, nationalist: 1, interventionist: -2 } }
    }
  },
  {
    war: "Siege of Tsingtao",
    year: 1914,
    sides: {
      A: { name: "Germany", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: 1, interventionist: 2 } },
      B: { name: "Japan", scores: { leftRight: 0, imperialism: 1, revolutionary: 0, nationalist: 1, interventionist: 1 } }
    }
  },
  {
    war: "Arab Revolt",
    year: 1916,
    sides: {
      A: { name: "Ottomans", scores: { leftRight: 1, imperialism: 1, revolutionary: -1, nationalist: -1, interventionist: -1 } },
      B: { name: "Arabs", scores: { leftRight: 0, imperialism: -1, revolutionary: 1, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Senussi Campaign",
    year: 1916,
    sides: {
      A: { name: "Britain", scores: { leftRight: 1, imperialism: 2, revolutionary: -1, nationalist: -1, interventionist: 2 } },
      B: { name: "Senussi", scores: { leftRight: 0, imperialism: -2, revolutionary: 0, nationalist: 2, interventionist: -2 } }
    }
  },
  {
    war: "Russian Revolution",
    year: 1917,
    sides: {
      A: { name: "White Russia", scores: { leftRight: 2, imperialism: 0, revolutionary: -2, nationalist: 1, interventionist: -1 } },
      B: { name: "Soviets", scores: { leftRight: -2, imperialism: 0, revolutionary: 2, nationalist: -1, interventionist: 1 } }
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

  const multipliers = [1, 0.67, 0.33, 0, 0.33, 0.67, 1];
  const multiplier = multipliers[index];

  for (let key in data) {
    scores[key] += data[key] * multiplier;
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

  const ideologies = [
    { name: "Bolshevism",               scores: { leftRight: -2, imperialism: -1, revolutionary: 2,  nationalist: -1, interventionist: 1  }},
    { name: "Trotskyism",               scores: { leftRight: -2, imperialism: -2, revolutionary: 2,  nationalist: -2, interventionist: 2  }},
    { name: "Maoism",                   scores: { leftRight: -2, imperialism: -2, revolutionary: 2,  nationalist: 1,  interventionist: -1 }},
    { name: "Marxism",                  scores: { leftRight: -2, imperialism: -2, revolutionary: 2,  nationalist: -1, interventionist: 0  }},
    { name: "Strasserism",              scores: { leftRight: 0,  imperialism: -1, revolutionary: 2,  nationalist: 2,  interventionist: 1  }},
    { name: "National Bolshevism",      scores: { leftRight: 0,  imperialism: 0,  revolutionary: 1,  nationalist: 2,  interventionist: 1  }},
    { name: "Classical Fascism",        scores: { leftRight: 1,  imperialism: 2,  revolutionary: 2,  nationalist: 2,  interventionist: 2  }},
    { name: "National Socialism",       scores: { leftRight: 1,  imperialism: 1,  revolutionary: 2,  nationalist: 2,  interventionist: 2  }},
    { name: "Falangism",                scores: { leftRight: 1,  imperialism: 0,  revolutionary: -1, nationalist: 2,  interventionist: 1  }},
    { name: "Clerical Fascism",         scores: { leftRight: 1,  imperialism: 0,  revolutionary: -2, nationalist: 2,  interventionist: 0  }},
    { name: "Social Democracy",         scores: { leftRight: -1, imperialism: -1, revolutionary: 0,  nationalist: 0,  interventionist: 0  }},
    { name: "Liberal Internationalism", scores: { leftRight: 0,  imperialism: 0,  revolutionary: 0,  nationalist: -1, interventionist: 2  }},
    { name: "Centrism",                 scores: { leftRight: 0,  imperialism: 0,  revolutionary: 0,  nationalist: 0,  interventionist: 0  }},
    { name: "Liberal Conservatism",     scores: { leftRight: 1,  imperialism: 1,  revolutionary: -1, nationalist: 0,  interventionist: 1  }},
    { name: "Christian Democracy",      scores: { leftRight: 1,  imperialism: -1, revolutionary: -1, nationalist: 1,  interventionist: 0  }},
    { name: "Classical Conservatism",   scores: { leftRight: 1,  imperialism: 0,  revolutionary: -2, nationalist: 1,  interventionist: -1 }},
    { name: "Reactionary",              scores: { leftRight: 2,  imperialism: 0,  revolutionary: -2, nationalist: 1,  interventionist: -1 }},
    { name: "Paleoconservatism",        scores: { leftRight: 1,  imperialism: -2, revolutionary: -1, nationalist: 2,  interventionist: -2 }},
    { name: "Libertarianism",           scores: { leftRight: 1,  imperialism: -2, revolutionary: 0,  nationalist: 0,  interventionist: -2 }},
    { name: "Neoconservatism",          scores: { leftRight: 1,  imperialism: 2,  revolutionary: 0,  nationalist: 0,  interventionist: 2  }},
    { name: "Neoliberalism",            scores: { leftRight: 1,  imperialism: 1,  revolutionary: 0,  nationalist: -1, interventionist: 1  }},
  ];

  const axisKeys = ["leftRight", "imperialism", "revolutionary", "nationalist", "interventionist"];

  const userScoresNorm = {
    leftRight:       (leftRightPct / 50) - 1,
    imperialism:     (imperialismPct / 50) - 1,
    revolutionary:   (revolutionaryPct / 50) - 1,
    nationalist:     (nationalistPct / 50) - 1,
    interventionist: (interventionistPct / 50) - 1
  };

  const ranked = ideologies.map(ideology => {
    const distance = axisKeys.reduce((sum, key) => {
      const ideologyNorm = ideology.scores[key] / 2;
      const diff = userScoresNorm[key] - ideologyNorm;
      return sum + diff * diff;
    }, 0);
    return { name: ideology.name, distance };
  }).sort((a, b) => a.distance - b.distance);

  const top3 = ranked.slice(0, 3);

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
      <div style="margin-top:1.5rem; padding:1rem; border:0.5px solid #ccc; border-radius:8px; background:#f9f9f9;">
        <div style="font-size:13px; color:#666; margin-bottom:8px;">Closest Ideological Matches</div>
        <div style="font-size:20px; font-weight:700; color:#111;">🥇 ${top3[0].name}</div>
        <div style="font-size:16px; color:#333; margin-top:6px;">🥈 ${top3[1].name}</div>
        <div style="font-size:14px; color:#555; margin-top:6px;">🥉 ${top3[2].name}</div>
      </div>
    </div>
  `;
}

window.onload = loadQuestion;
