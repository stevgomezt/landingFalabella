var modalValorAgre = document.getElementById('myModalValorAgre');
var modalDialogValorAgre = document.querySelector('.modal-dialog');
var galleryImgValorAgre = document.getElementById('galleryImgValorAgre');
var imageContainerValorAgre = document.getElementById('imageContainerValorAgre');
var imagesValorAgre = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexValorAgre = 0;

document.getElementById("openModalBtnValorAgre").onclick = function () {
  $('#myModalValorAgre').modal('show');
}

function adjustModalSizeValorAgre() {
  var imgWidth = galleryImgValorAgre.naturalWidth;
  var imgHeight = galleryImgValorAgre.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerValorAgre.style.maxWidth = maxWidth + 'px';
  imageContainerValorAgre.style.maxHeight = maxHeight + 'px';
  modalDialogValorAgre.style.maxWidth = maxWidth + 'px';
  modalDialogValorAgre.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnValorAgre").onclick = function () {
  currentIndexValorAgre = (currentIndexValorAgre > 0) ? currentIndexValorAgre - 1 : imagesValorAgre.length - 1;
  galleryImgValorAgre.src = imagesValorAgre[currentIndexValorAgre];
  adjustModalSizeValorAgre();
}

document.getElementById("nextBtnValorAgre").onclick = function () {
  currentIndexValorAgre = (currentIndexValorAgre < imagesValorAgre.length - 1) ? currentIndexValorAgre + 1 : 0;
  galleryImgValorAgre.src = imagesValorAgre[currentIndexValorAgre];
  adjustModalSizeValorAgre();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalValorAgre').on('shown.bs.modal', function () {
  adjustModalSizeValorAgre();
});