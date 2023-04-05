
document.getElementById("payBtn").onclick = function (e) {
  let grandTotal=JSON.parse(localStorage.getItem("grandTotal"));
  let totalAmount=grandTotal.totalAmount;
  console.log(totalAmount);
  var options = {
    key: "rzp_test_OWcFWQRKUKL9mY", 
    amount: totalAmount*100, 
    currency: "INR",
    name: "MyShop Checkout",
    description: "This is your order", 
    theme: {
      color: "#000",
    },
    image:
      "https://t3.ftcdn.net/jpg/02/40/32/70/360_F_240327047_Tqd03M1Qf9zdWT9kxjJDPerhfDRpVvCp.jpg",
      handler: function () {
          window.location.href = ".\shop\index.html";
        },
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  e.preventDefault();
};
