var modalMacc = document.getElementById('myModalMacc');
var modalDialogMacc = document.querySelector('.modal-dialog');
var galleryImgMacc = document.getElementById('galleryImgMacc');
var imageContainerMacc = document.getElementById('imageContainerMacc');
var imagesMacc = [
  "/assets/img/slides/analiticaDesc1.jpg",
  "/assets/img/slides/analiticaDesc2.jpg",
  "/assets/img/slides/analiticaDesc3.jpg"
];
var currentIndexMacc = 0;

document.getElementById("openModalBtnMacc").onclick = function () {
  $('#myModalMacc').modal('show');
}

function adjustModalSizeMacc() {
  var imgWidth = galleryImgMacc.naturalWidth;
  var imgHeight = galleryImgMacc.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerMacc.style.maxWidth = maxWidth + 'px';
  imageContainerMacc.style.maxHeight = maxHeight + 'px';
  modalDialogMacc.style.maxWidth = maxWidth + 'px';
  modalDialogMacc.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnMacc").onclick = function () {
  currentIndexMacc = (currentIndexMacc > 0) ? currentIndexMacc - 1 : imagesMacc.length - 1;
  galleryImgMacc.src = imagesMacc[currentIndexMacc];
  adjustModalSizeMacc();
}

document.getElementById("nextBtnMacc").onclick = function () {
  currentIndexMacc = (currentIndexMacc < imagesMacc.length - 1) ? currentIndexMacc + 1 : 0;
  galleryImgMacc.src = imagesMacc[currentIndexMacc];
  adjustModalSizeMacc();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalMacc').on('shown.bs.modal', function () {
  adjustModalSizeMacc();
});