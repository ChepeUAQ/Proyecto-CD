document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault(); 
  var currentPassword = document.getElementById('current-password').value;

  // Obtiene la contraseña almacenada en el localStorage
  var storedPassword = localStorage.getItem('contrasena');

  // Compara las contraseñas
  if (currentPassword === storedPassword) {
    window.location.href = 'nuev_con.html';
  } else {
    alert('Contraseña incorrecta');
  }
});
