// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("qrModal").style.display = "none";

//   document
//     .getElementById("reservationForm")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();

//       const fullName = document.getElementById("fullName").value.trim();
//       const email = document.getElementById("email").value.trim();
//       const phone = document.getElementById("phone").value.trim();
//       const eventDate = document.getElementById("eventDate").value;
//       const eventTime = document.getElementById("eventTime").value;
//       const termsAccepted = document.getElementById("terms").checked;
//       const companyName = document.getElementById("companyName").value.trim();

//       // Validation
//       if (!fullName || !email || !phone || !companyName || !termsAccepted) {
//         alert("Please fill in all required fields and accept the terms.");
//         return;
//       }

//       // Generate QR Code
//       setTimeout(() => {
//         const qrData = `Party Entry Ticket
//                 Name: ${fullName}
//                 Email: ${email}
//                 Phone: ${phone}
//                 Company Name: ${companyName}
//                 Date: ${eventDate}
//                 Time: ${eventTime}`;

//         const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
//           qrData
//         )}`;
//         document.getElementById("qrCode").src = qrCodeUrl;

//         document.getElementById("qrModal").style.display = "flex";
//       }, 500);

//       // Send data to admin
//       setTimeout(() => {
//         const adminPhoneNumber = "9879879877";
//         const whatsappMessage = `New Registration:\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCompany Name: ${companyName}\nDate: ${eventDate}\nTime: ${eventTime}`;
//         const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodeURIComponent(
//           whatsappMessage
//         )}`;

//         window.open(whatsappUrl, "_blank");
//       }, 1800);
//     });

//   document.querySelector(".close").addEventListener("click", function () {
//     document.getElementById("qrModal").style.display = "none";
//   });

//   window.addEventListener("click", function (event) {
//     if (event.target === document.getElementById("qrModal")) {
//       document.getElementById("qrModal").style.display = "none";
//     }
//   });
// });

document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  let formData = {
      name: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value
  };

  fetch("https://script.google.com/macros/s/AKfycbxVbJiPYNcNHDAtO3snPz2_bahE6SxT2QE_i8pcwja1r3ds_NVcsDctb-lnBrsp9Rk17A/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
  })
  .then(response => response.text())
  .then(data => {
      alert("Data submitted successfully!");
      document.getElementById("reservationForm").reset();
  })
  .catch(error => console.error("Error:", error));
});