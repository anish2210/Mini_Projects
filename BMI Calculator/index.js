const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const underWeight = document.querySelector(".uWeight");
  const normalWeight = document.querySelector(".nWeight");
  const overWeight = document.querySelector(".oWeight");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `${height} is not valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `${weight} is not valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>Your BMI is ${bmi}.</span>`;
    console.log(bmi);

    underWeight.style.color = "";
    normalWeight.style.color = "";
    overWeight.style.color = "";

    if (bmi < 18.6) {
      underWeight.style.color = "#0000FF";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      normalWeight.style.color = "#00FF00";
    } else {
      overWeight.style.color = "#FF0000";
    }
  }
});
