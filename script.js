let btn = document.querySelector(".calculate");
btn.addEventListener("click", function () {
  // Function to calculate bill

  const waterRates = [
    {
      resGovtminAmount: 210,
      resGovt11to20: 24.5,
      resGovt21to30: 28.2,
      resGovt31to40: 32.4,
      resGovtover40: 37.2,
    },
    {
      commlIndminAmount: 420,
      commlInd11to20: 49.0,
      commlInd21to30: 56.4,
      commlInd31to40: 64.8,
      commlIndover40: 74.4,
    },
  ];

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
        amount = waterRates[0].resGovtminAmount;
      } else if (consumption > 10 && consumption <= 20) {
        amount =
          waterRates[0].resGovtminAmount + (consumption - minConsume) * 24.5;
      } else if (consumption > 20 && consumption <= 30) {
        amount =
          waterRates[0].resGovtminAmount +
          10 * waterRates[0].resGovt11to20 +
          (consumption - 20) * 28.2;
      } else if (consumption > 30 && consumption <= 40) {
        amount =
          waterRates[0].resGovtminAmount +
          10 * waterRates[0].resGovt11to20 +
          10 * waterRates[0].resGovt21to30 +
          (consumption - 30) * 32.4;
      } else if (consumption > 40) {
        amount =
          waterRates[0].resGovtminAmount +
          10 * waterRates[0].resGovt11to20 +
          10 * waterRates[0].resGovt21to30 +
          10 * waterRates[0].resGovt31to40 +
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

  let h2 = document.querySelector(".amount");

  let totalAmount = total.toLocaleString("en-US", {
    style: "currency",
    currency: "PHP",
  });

  let existingSpan = document.querySelector("span");
  if (existingSpan) {
    existingSpan.remove();
  }

  let span = document.createElement("span");
  span.innerHTML = `Total Amount: ${totalAmount}`;

  h2.appendChild(span);

  h2.style.marginBottom = "1.4rem";
  h2.style.color = "blue";
});
