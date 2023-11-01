const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "="];

let result = "";

// express function to calculate based on button clicked
const calculate = (btnValue) => {
  if (btnValue === "=" && result !== "") {
    // Handle "x" and "*" as multiplication
    result = result.replace("x", "*");
    // If the result has a '%', replace it with '/100' before evaluating
    if (result.includes("%")) {
      result = result.replace("%", "/100");
    }
    try {
      result = eval(result);
      if (isNaN(result) || !isFinite(result)) {
        result = "Error";
      }
    } catch (error) {
      result = "Error";
    }
  } else if (btnValue === "CE") {
    result = "";
  } else if (btnValue === "C") {
    result = result.slice(0, -1);
  } else {
    // If the result is empty and the button is a special character, return
    if (result === "" && specialChars.includes(btnValue)) return;
    result += btnValue;
  }

  input.value = result;
};

// Event listener for buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});




