const handleFormSubmission = (event) => {
  event.preventDefault();
  let isValid = true;
  // Collect form data here
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const emailValidity = document.getElementById("email").validity;
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;

  // Clear all error messages
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.style.display = "none"));

  // First Name validation
  if (!firstName || !firstName.trim()) {
    document.getElementById("firstNameError").style.display = "block";
    isValid = false;
  }

  // Last Name validation
  if (!lastName || !lastName.trim()) {
    document.getElementById("lastNameError").style.display = "block";
    isValid = false;
  }

  // Email validation
  if (!email || !isValidEmail(email)) {
    document.getElementById("emailError").style.display = "block";
    isValid = false;
  }

  // Phone validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").style.display = "block";
    isValid = false;
  }

  // Password validation
  if (!password || password.length < 8) {
    document.getElementById("passwordError").style.display = "block";
    isValid = false;
  }

  // Submit form if valid
  if (isValid) {
    alert("Form submitted successfully!");
    console.log(
      "{\n",
      "firstName:",
      firstName,
      "\nlastName:",
      lastName,
      "\nemail:",
      email,
      "\nphone:",
      phone,
      "\npassword:",
      password,
      "\n}"
    );

    // reset from
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";

    return false; //prevent from submission
  }
};

document.getElementById("hamburger").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("active");
  console.log("menu click");
});

// email  validity
function isValidEmail(email) {
  // Regular expression for validating an email address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
