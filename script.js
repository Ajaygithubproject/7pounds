document.getElementById("payBtn").onclick = function () {

    var options = {
        key: "rzp_test_ShLOrOp60VBJdH",
        amount: 50000,
        currency: "INR",
        name: "The Seven Pounds",
        description: "Consultation Fee",

        handler: function (response) {
            alert("Payment Successful ✅\nID: " + response.razorpay_payment_id);
            localStorage.setItem("payment_id", response.razorpay_payment_id);
        },

        prefill: {
            name: "Ajay Kumar",
            email: "ajaymanohar1872@gmail.com",
            contact: "9626877940"
        },

        theme: {
            color: "#3399cc"
        }
    };

    var rzp = new Razorpay(options);

    // 🔴 ADD THIS (Important for debugging)
    rzp.on('payment.failed', function (response){
        console.log(response.error);
        alert("Payment Failed ❌\nReason: " + response.error.description);
    });

    rzp.open();
};
