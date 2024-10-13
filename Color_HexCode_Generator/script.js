const colorPicker = document.getElementById("colorPicker");
const hexCodeDisplay = document.getElementById("hexCode");

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  hexCodeDisplay.textContent = selectedColor;
  document.querySelector(".colorDisplay").style.backgroundColor = selectedColor;
});
