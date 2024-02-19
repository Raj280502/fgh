document.getElementById('switchToSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signUpForm').classList.remove('hidden');
    
document.getElementById("user-info").focus();
  });
  
  document.getElementById('switchToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signUpForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById("user-info").focus();
  });