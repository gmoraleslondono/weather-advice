const chancesOfRain = Math.random(1, 10) * 10;

// fetch random advice from API
const fetchAdviceById = async () => {
  try {
    const response = await fetch(
      `https://api.adviceslip.com/advice/${chancesOfRain}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    const advice = data.slip.advice;
    if (!advice || advice === undefined) {
      throw new Error("Advice not found.");
    }
    return advice;
  } catch (error) {
    console.error(error);
  }
};

// custom promise
const customPromise = () => {
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
      reject("Something went wrong.");
    }
  });
};

const customPromiseResult = async () => {
  try {
    const result = await customPromise();
    return result;
  } catch (error) {
    console.error(error);
  }
};

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
  customPromiseResult()
    .then((result) => {
      document.getElementById("promiseResult").innerText = `${result}`;
    })
    .catch((error) => {
      document.getElementById("promiseResult").innerText = `Error: ${error}`;
    });
});
