let btn = document.querySelector(".calculate");
btn.addEventListener("click", function () {
  // Function to calculate bill
  const minConsume = 10;
  const minAmountRes = 210;
  const res_11to20 = 24.5;
  const res_21to30 = 28.2;
  const res_31to40 = 32.4;
  const over40 = 37.2;
  let amount = 0;

  function calculateBill(classification, consumption) {
    if (classification === "residential" || classification === "government") {
      if (consumption <= 10) {
        amount = minAmountRes;
      } else if (consumption > 10 && consumption <= 20) {
        amount = minAmountRes + (consumption - minConsume) * 24.5;
      } else if (consumption > 20 && consumption <= 30) {
        amount = minAmountRes + 10 * res_11to20 + (consumption - 20) * 28.2;
      } else if (consumption > 30 && consumption <= 40) {
        amount =
          minAmountRes +
          10 * res_11to20 +
          10 * res_21to30 +
          (consumption - 30) * 32.4;
      } else if (consumption > 40) {
        amount =
          minAmountRes +
          10 * res_11to20 +
          10 * res_21to30 +
          10 * res_31to40 +
          (consumption - 40) * 37.2;
      }
      return amount;
    }
  }
  let inputVal = Number(document.querySelector("input").value);
  let radioVal = document.querySelector(
    'input[name="classification"]:checked'
  ).value;

  let total = calculateBill(radioVal, inputVal);

  let existingH2 = document.querySelector("h2");
  if (existingH2) {
    existingH2.remove();
  }

  let h2 = document.createElement("h2");

  let output = document.createTextNode(`Total Amount: ${total}`);

  h2.appendChild(output);
  h2.style.marginBottom = "1.4rem";
  h2.style.color = "blue";

  let h1 = document.querySelector("h1");
  h1.insertAdjacentElement("afterend", h2);
});
