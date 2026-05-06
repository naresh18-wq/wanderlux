function calculateCost() {
  let travellers = Number(document.getElementById("travellers").value);
  let days = Number(document.getElementById("days").value);
  let style = Number(document.getElementById("style").value);

  let dailyRate = 150;
  let totalCost = travellers * days * dailyRate * style;

  document.getElementById("result").innerText =
    "Estimated trip cost: $" + totalCost;
}
``
