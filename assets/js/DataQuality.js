var modalDataQuality = document.getElementById('myModalDataQuality');
var videoDataQuality = document.getElementById('videoDataQuality');

document.getElementById("openModalBtnDataQuality").onclick = function () {
  $('#myModalDataQuality').modal('show');
  videoDataQuality.play(); // Iniciar la reproducción del video al abrir el modal
}

$('#myModalDataQuality').on('hidden.bs.modal', function () {
  videoDataQuality.pause();
  videoDataQuality.currentTime = 0;
});