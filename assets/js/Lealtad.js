var modalLealtad = document.getElementById('myModalLealtad');
var modalDialogLealtad = document.querySelector('.modal-dialog');
var galleryImgLealtad = document.getElementById('galleryImgLealtad');
var imageContainerLealtad = document.getElementById('imageContainerLealtad');
var imagesLealtad = [
  "/assets/img/slides/modeloLeal1.jpg",
  "/assets/img/slides/modeloLeal2.jpg",
  "/assets/img/slides/modeloLeal3.jpg",
  "/assets/img/slides/modeloLeal4.jpg",
  "/assets/img/slides/modeloLeal5.jpg",
  "/assets/img/slides/modeloLeal6.jpg"
];
var currentIndex = 0;

document.getElementById("openModalBtnLealtad").onclick = function () {
  $('#myModalLealtad').modal('show');
}

function adjustModalSizeLealtad() {
  var imgWidth = galleryImgLealtad.naturalWidth;
  var imgHeight = galleryImgLealtad.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerLealtad.style.maxWidth = maxWidth + 'px';
  imageContainerLealtad.style.maxHeight = maxHeight + 'px';
  modalDialogLealtad.style.maxWidth = maxWidth + 'px';
  modalDialogLealtad.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnLealtad").onclick = function () {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : imagesLealtad.length - 1;
  galleryImgLealtad.src = imagesLealtad[currentIndex];
  adjustModalSizeLealtad();
}

document.getElementById("nextBtnLealtad").onclick = function () {
  currentIndex = (currentIndex < imagesLealtad.length - 1) ? currentIndex + 1 : 0;
  galleryImgLealtad.src = imagesLealtad[currentIndex];
  adjustModalSizeLealtad();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalLealtad').on('shown.bs.modal', function () {
  adjustModalSizeLealtad();
});