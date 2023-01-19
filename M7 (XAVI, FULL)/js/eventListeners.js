document.getElementById("usernameInput").addEventListener("focusout", function(){ validateUsername(); });
document.getElementById("emailInput").addEventListener("focusout", function(){ validateEmail(); });
document.getElementById("passwordInput").addEventListener("input", function(){ validatePassword(); });
document.getElementById("confirmPasswordInput").addEventListener("input", function(){ validateConfirmedPassword(); });