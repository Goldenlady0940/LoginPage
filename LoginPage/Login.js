document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  const errorMessages = document.getElementById('errorMessages');
  const btnSignUp = document.querySelector('.btnSignUp'); // Declare btnSignUp

  document.getElementById('showLogin').addEventListener('click', function () {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      errorMessages.textContent = '';
  });

  document.getElementById('showSignup').addEventListener('click', function () {
      signupForm.style.display = 'block';
      loginForm.style.display = 'none';
      errorMessages.textContent = '';
  });

  login.addEventListener('submit', function (e) {
      e.preventDefault();
      // Implement login functionality and validation here
      errorMessages.textContent = ''; // Clear previous error messages
  });

  signup.addEventListener('submit', function (e) {
      e.preventDefault();
      // Implement signup functionality and validation here
      errorMessages.textContent = ''; // Clear previous error messages
  });

  btnSignUp.addEventListener('click', function () {
      // Redirect to the signup page
      window.location.href = 'SignUp.html'; 
    });
});
