var modalMacc = document.getElementById('myModalMacc');
var videoMacc = document.getElementById('videoMacc');

document.getElementById("openModalBtnMacc").onclick = function () {
  $('#myModalMacc').modal('show');
  videoMacc.play(); // Iniciar la reproducción del video al abrir el modal
}

$('#myModalMacc').on('hidden.bs.modal', function () {
  videoMacc.pause();
  videoMacc.currentTime = 0;
});