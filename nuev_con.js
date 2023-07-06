document.getElementById('password-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var newPassword = document.getElementById('new-password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  if (newPassword === confirmPassword) {
    localStorage.setItem('contrasena', newPassword);
    alert('¡Contraseña actualizada con éxito!');
  } else {
    alert('Las contraseñas no coinciden. Por favor, inténtalo nuevamente.');
  }
});
