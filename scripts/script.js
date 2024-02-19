//Disabled Buttons------------------------------------------
document.getElementById("apply-coupon-btn").setAttribute("disabled", true);
document.getElementById("next-btn").setAttribute("disabled", true);

// Buy Ticket Operation---------------------------------------

document.getElementById("btn-buy-tickets")
    .addEventListener("click", function () {
    document.querySelector("header").classList.add("hidden");
    document.querySelector("footer").classList.add("hidden");
    document.getElementById("coupon").classList.add("hidden");
  });
