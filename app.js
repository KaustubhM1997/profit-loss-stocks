var stockPrice = document.querySelector("#purchase-price");
var quantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var calculateBtn = document.querySelector("#calculate");
var showMessage = document.querySelector("#msg");




function clickHandler(event) {

    event.preventDefault();

    if (stockPrice.value <= 0 || quantity.value <= 0 || currentPrice.value <= 0) {
        showMessage.innerHTML = "Please enter values greater than zero.";
       
      }

      else {
        const profitLoss = (currentPrice.value - stockPrice.value) * quantity.value; //profit or loss amount 
        // it will be either profit amount or loss amount, as negetives also exists
        const profitLossPercentage = (
          (profitLoss / (stockPrice.value * quantity.value)) *
          100
        ).toFixed(2); //profit or loss percentage
    
        //loss
        if (profitLoss <= 0) {
          msg.innerHTML =
            "There's a " +
            `${profitLossPercentage}` +
            "% loss. You lost ₹ " +
            `${profitLoss}`;
        } else {
          msg.innerHTML =
            "There's a " +
            `${profitLossPercentage}` +
            "% profit. You gained ₹ " +
            `${profitLoss}`;
        }
      
      }
}


calculateBtn.addEventListener("click", clickHandler)