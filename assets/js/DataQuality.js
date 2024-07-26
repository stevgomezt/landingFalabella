var modal = document.getElementById('myModalDataQuality');
var modalDialogDataQuality = document.querySelector('.modal-dialog');
var galleryImgDataQuality = document.getElementById('galleryImgDataQuality');
var imageContainerDataQuality = document.getElementById('imageContainerDataQuality');
var imagesDataQuality = [
  "/assets/img/slides/modelosAten.jpg"
];
var currentIndex = 0;

document.getElementById("openModalBtnDataQuality").onclick = function () {
  $('#myModalDataQuality').modal('show');
}

function adjustModalSize() {
  var imgWidth = galleryImgDataQuality.naturalWidth;
  var imgHeight = galleryImgDataQuality.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerDataQuality.style.maxWidth = maxWidth + 'px';
  imageContainerDataQuality.style.maxHeight = maxHeight + 'px';
  modalDialogDataQuality.style.maxWidth = maxWidth + 'px';
  modalDialogDataQuality.style.maxHeight = maxHeight + 'px';
}

// document.getElementById("prevBtnDataQuality").onclick = function () {
//   currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesDataQuality.length - 1;
//   galleryImgDataQuality.src = imagesDataQuality[currentIndex];
//   adjustModalSize();
// }

// document.getElementById("nextBtnDataQuality").onclick = function () {
//   currentIndex = (currentIndex < imagesDataQuality.length - 1) ? currentIndex + 1 : 0;
//   galleryImgDataQuality.src = imagesDataQuality[currentIndex];
//   adjustModalSize();
// }

// Ajustar el tamaño del modal cuando se muestra
$('#myModalDataQuality').on('shown.bs.modal', function () {
  adjustModalSize();
});