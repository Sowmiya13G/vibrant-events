const scriptURL = "https://script.google.com/macros/s/AKfycbwBOLCqXYNOMMHEzV8_42sdp1xeMxqj4vpSkeb735-ddRb-tF0jLJovKR8UfIPvb2Zc/exec"; // replace with your Apps Script URL
const form = document.getElementById("registerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    designation: document.getElementById("designation").value,
    companyName: document.getElementById("companyName").value,
    mobileNumber: document.getElementById("mobileNumber").value,
    email: document.getElementById("email").value,
    cabReq: document.getElementById("cabReq").value,
    address: document.getElementById("address").value,
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.result === "success") {
        alert("Registration submitted successfully!");
        form.reset();
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      alert("There was an error submitting the form.");
    });
});
