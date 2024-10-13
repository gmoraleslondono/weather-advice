const chancesOfRain = Math.random(1, 10) * 10;

// fetch random advice from API
function fetchAdviceById() {
  return new Promise((resolve, reject) => {
    fetch(`https://api.adviceslip.com/advice/${chancesOfRain}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .then((data) => {
        resolve(data.slip.advice);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

function customPromise() {
  return new Promise((resolve, reject) => {
    let isTheWeatherGood;

    if (chancesOfRain > 3) {
      isTheWeatherGood = false;
    } else {
      isTheWeatherGood = true;
    }

    if (isTheWeatherGood) {
      resolve("It is sunny today, go out and enjoy life!");
    } else if (!isTheWeatherGood) {
      resolve("It is gray outside, I would suggest staying cosy at home.");
    } else {
      reject("Custom Promise Failed: critical fail!");
    }
  });
}

// Event listener for fetching random advice
document.getElementById("triggerPromise").addEventListener("click", () => {
  fetchAdviceById()
    .then((advice) => {
      document.getElementById("adviceDisplay").innerText = `Advice: ${advice}`;
    })
    .catch((error) => {
      document.getElementById("adviceDisplay").innerText = `Error: ${error}`;
    });
});

// Event listener for triggering the custom promise
document.getElementById("triggerPromise").addEventListener("click", () => {
  customPromise()
    .then((result) => {
      document.getElementById("promiseResult").innerText = `${result}`;
    })
    .catch((error) => {
      document.getElementById("promiseResult").innerText = `Error: ${error}`;
    });
});
