
let isPasswordVisible = true;

function togglePasswordVisibility(inputId) {
  const passwordInput = document.getElementById(inputId);
  const icon = passwordInput.nextElementSibling.querySelector(".password-toggle-icon i");

  isPasswordVisible = !isPasswordVisible;
  passwordInput.type = isPasswordVisible ? "text" : "password";
  icon.classList.toggle("fa-eye-slash", !isPasswordVisible);
  icon.classList.toggle("fa-eye", isPasswordVisible);
}

let isLoginFormVisible = true;

function showRegisterForm() {
  if (isLoginFormVisible) {

    $(".register-link").hide();

    animateFormTitle("Register");

    $("#login-form").slideUp(500, function() {

      togglePasswordVisibility('register-password');
      togglePasswordVisibility('confirm-password');
      
      $(".login-link").show();
      
      $("#register-form").slideDown(500);
    });
    isLoginFormVisible = false;
  }
}

function showLoginForm() {
  if (!isLoginFormVisible) {

    animateFormTitle("Login");

    $(".register-link").show();

    $(".login-link").hide();
    
    $("#register-form").slideUp(500, function() {
      $("#login-form").slideDown(500);
    });

    isLoginFormVisible = true;
  }
}

function animateFormTitle(toTitle) {
  const formTitleElement = document.getElementById("form-title");
  formTitleElement.innerText = toTitle;

  anime({
    targets: formTitleElement,
    translateY: [-10, 0],
    opacity: [0, 1],
    duration: 500,
    easing: "easeInOutQuad"
  });
}

$("#register-form").hide();

togglePasswordVisibility('password');
togglePasswordVisibility('confirm-password');
togglePasswordVisibility('register-password');
