// Simple button click animation

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

 document.getElementById("payBtn").addEventListener("click", function () {

    const upiID = "ajayromeyo1202@oksbi";
    const name = "Ajay Kumar";
    const amount = "7";
    const note = "Consultation Fee";

    const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    window.location.href = upiURL;

  });


// document.getElementById("payBtn").onclick = function(e){
//     e.preventDefault();

//     var options = {
//         "key": "YOUR_RAZORPAY_KEY", // 🔴 Replace with your key
//         "amount": 130800, // 1308 Rs (in paise)
//         "currency": "INR",
//         "name": "Seven Pounds",
//         "description": "Consultation Fee",
//         "image": "",

//         "handler": function (response){
//             alert("Payment Successful!");
//             window.location.href = "https://wa.me/918925856553";
//         },

//         "prefill": {
//             "name": "",
//             "email": "",
//             "contact": ""
//         },

//         "theme": {
//             "color": "#c40000"
//         }
//     };

//     var rzp = new Razorpay(options);
//     rzp.open();
// };
