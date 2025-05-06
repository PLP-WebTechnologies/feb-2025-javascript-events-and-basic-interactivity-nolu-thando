// 🎈 Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });

  document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });


  // 🎮 Interactive Elements
  let changeBtn = document.getElementById("changeTextBtn");
  changeBtn.addEventListener("click", () => {
    changeBtn.textContent = "Clicked!";
    changeBtn.style.backgroundColor = "#28a745";
  });

  // Image slideshow
  const images = [
    "https://picsum.photos/id/1011/200/150",
    "https://picsum.photos/id/1015/200/150",
    "https://picsum.photos/id/1016/200/150"
  ];
  let imgIndex = 0;
  setInterval(() => {
    imgIndex = (imgIndex + 1) % images.length;
    document.getElementById("galleryImg").src = images[imgIndex];
  }, 3000);

  // Accordion
  const header = document.querySelector(".accordion-header");
  const content = document.querySelector(".accordion-content");
  header.addEventListener("click", () => {
    content.style.display = content.style.display === "block" ? "none" : "block";
  });

  // 📋✅ Form Validation
  const form = document.getElementById("signupForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  emailInput.addEventListener("input", () => {
    if (!emailPattern.test(emailInput.value)) {
      emailFeedback.textContent = "Invalid email format";
    } else {
      emailFeedback.textContent = "✅ Valid email";
      emailFeedback.classList.remove("error");
      emailFeedback.classList.add("valid");
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters";
    } else {
      passwordFeedback.textContent = "✅ Strong password";
      passwordFeedback.classList.remove("error");
      passwordFeedback.classList.add("valid");
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alert("Please fill in required fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });