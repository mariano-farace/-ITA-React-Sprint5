let reportAudits = [];
let currentJoke = "";

async function fetchJokeJSON() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const body = await response.json();
  currentJoke = body;
  var jokeTextParagraph = document.getElementById("joke-text");
  jokeTextParagraph.innerHTML = `“ ${body.joke} “`;
}

function createAudit(score) {
  const audit = {
    joke: currentJoke,
    resultado: score,
    date: new Date().toISOString(),
  };

  reportAudits.push(audit);
  console.log(reportAudits);
}

function getWeather() {
  console.log("weather");
}

window.onload = function () {
  getWeather();
};
