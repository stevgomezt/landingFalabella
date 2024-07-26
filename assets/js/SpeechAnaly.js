var modalSpeechAnaly = document.getElementById('myModalSpeechAnaly');
var modalDialogSpeechAnaly = document.querySelector('.modal-dialog');
var galleryImgSpeechAnaly = document.getElementById('galleryImgSpeechAnaly');
var imageContainerSpeechAnaly = document.getElementById('imageContainerSpeechAnaly');
var imagesSpeechAnaly = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexSpeechAnaly = 0;

document.getElementById("openModalBtnSpeechAnaly").onclick = function () {
  $('#myModalSpeechAnaly').modal('show');
}

function adjustModalSizeSpeechAnaly() {
  var imgWidth = galleryImgSpeechAnaly.naturalWidth;
  var imgHeight = galleryImgSpeechAnaly.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerSpeechAnaly.style.maxWidth = maxWidth + 'px';
  imageContainerSpeechAnaly.style.maxHeight = maxHeight + 'px';
  modalDialogSpeechAnaly.style.maxWidth = maxWidth + 'px';
  modalDialogSpeechAnaly.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnSpeechAnaly").onclick = function () {
  currentIndexSpeechAnaly = (currentIndexSpeechAnaly > 0) ? currentIndexSpeechAnaly - 1 : imagesSpeechAnaly.length - 1;
  galleryImgSpeechAnaly.src = imagesSpeechAnaly[currentIndexSpeechAnaly];
  adjustModalSizeSpeechAnaly();
}

document.getElementById("nextBtnSpeechAnaly").onclick = function () {
  currentIndexSpeechAnaly = (currentIndexSpeechAnaly < imagesSpeechAnaly.length - 1) ? currentIndexSpeechAnaly + 1 : 0;
  galleryImgSpeechAnaly.src = imagesSpeechAnaly[currentIndexSpeechAnaly];
  adjustModalSizeSpeechAnaly();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalSpeechAnaly').on('shown.bs.modal', function () {
  adjustModalSizeSpeechAnaly();
});