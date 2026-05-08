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

const choices = [
  { text: "Strongly Side A", value: -3 },
  { text: "Somewhat Side A", value: -2 },
  { text: "Slightly Side A", value: -1 },
  { text: "Neutral", value: 0 },
  { text: "Slightly Side B", value: 1 },
  { text: "Somewhat Side B", value: 2 },
  { text: "Strongly Side B", value: 3 }
];

function loadQuestion() {
  const q = questions[current];

  document.getElementById("question").innerText =
    `Who do you support in the ${q.war}? (${q.year})`;

  const container = document.getElementById("answers");
  container.innerHTML = "";

  choices.forEach(c => {
    const btn = document.createElement("button");

    let label = c.text
      .replace("Side A", q.sideA)
      .replace("Side B", q.sideB);

    btn.innerText = label;

    btn.onclick = () => {
      current++;

      if (current < questions.length) {
        loadQuestion();
      } else {
        document.body.innerHTML = "<h1>Done</h1>";
      }
    };

    container.appendChild(btn);
  });
}

window.onload = loadQuestion;
