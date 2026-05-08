const questions = [
  {
    war: "Second Boer War",
    year: 1900,
    sideA: "Britain",
    sideB: "Boers"
  },
  {
    war: "Boxer Rebellion",
    year: 1900,
    sideA: "Eight-Nation Alliance",
    sideB: "Qing China"
  },
  {
    war: "Anglo-Aro War",
    year: 1901,
    sideA: "Britain",
    sideB: "Aro Confederacy"
  }
];

let current = 0;

// 🧠 MULTI-AXIS SCORE SYSTEM
let scores = {
  imperialism: 0,
  interventionism: 0,
  revolution: 0,
  statePower: 0
};

const choices = [
  { text: "Strongly Side A", value: 3 },
  { text: "Somewhat Side A", value: 2 },
  { text: "Slightly Side A", value: 1 },
  { text: "Neutral", value: 0 },
  { text: "Slightly Side B", value: 1 },
  { text: "Somewhat Side B", value: 2 },
  { text: "Strongly Side B", value: 3 }
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText =
    `Who do you support in the ${q.war}? (${q.year})`;

  document.getElementById("progress").innerText =
    `Question ${current + 1} of ${questions.length}`;

  const container = document.getElementById("answers");
  container.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.text;

    btn.onclick = () => {
      applyScore(q, choice);
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

function applyScore(q, choice) {
  // 🧠 CORE LOGIC (THIS is where expansion happens later)

  // Side A = generally state/establishment side in your dataset
  // Side B = generally resistance/rebel/anti-imperial side

  if (choice.text.includes("Side A")) {
    scores.imperialism += 1;
    scores.interventionism += 1;
    scores.statePower += 1;
  }

  if (choice.text.includes("Side B")) {
    scores.imperialism -= 1;
    scores.interventionism -= 1;
    scores.statePower -= 1;
    scores.revolution += 1;
  }

  if (choice.text === "Neutral") return;
}

function showResults() {
  const leftRight =
    (scores.revolution * 2)
    - (scores.imperialism)
    - (scores.interventionism);

  document.getElementById("question").innerText = "Results";

  document.getElementById("answers").innerHTML = `
    <p><b>Imperialism:</b> ${scores.imperialism}</p>
    <p><b>Interventionism:</b> ${scores.interventionism}</p>
    <p><b>Revolution:</b> ${scores.revolution}</p>
    <p><b>State Power:</b> ${scores.statePower}</p>
    <hr>
    <p><b>Left ↔ Right Score:</b> ${leftRight}</p>
  `;

  document.getElementById("progress").innerText = "Finished";
}

window.onload = loadQuestion;
