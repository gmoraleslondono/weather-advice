// fetch data from API
const fetchAdviceById = (id) => {
  fetch(`https://api.adviceslip.com/advice/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      const advice = data.slip.advice;
      console.log("Take this advice:", advice);
    })
    .catch((error) => {
      console.log("Error fetching advice:", error);
    });
};

const amIGoingOut = new Promise((resolve, reject) => {
  let isTheWeatherGood;

  const chancesOfRain = Math.random(1, 10) * 10;

  if (chancesOfRain > 3) {
    isTheWeatherGood = false;
  } else {
    isTheWeatherGood = true;
  }

  if (isTheWeatherGood) {
    // resolve("I am going out today.");
    console.log("Today, I am going out.");
  } else {
    // reject("I will stay cosy at home.");
    console.log("Today, I will stay cosy at home.");
    fetchAdviceById(chancesOfRain * 10);
  }
});
