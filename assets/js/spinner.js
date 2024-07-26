$(document).ready(function () {
  // Mostrar el spinner durante 2 segundos
  setTimeout(function () {
    // Ocultar el spinner
    $("#spinner").hide();
    // Mostrar el modal
    $("#exampleModal").modal('show');
  }, 2000);
});