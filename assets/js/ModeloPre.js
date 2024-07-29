// ModeloPre Modal
var modalModeloPre = document.getElementById('myModalModeloPre');
var modalDialogModeloPre = modalModeloPre.querySelector('.modal-dialog');
var galleryImgModeloPre = document.getElementById('galleryImgModeloPre');
var imageContainerModeloPre = document.getElementById('imageContainerModeloPre');
var imagesModeloPre = [
  "/assets/img/slides/modelosPre1.jpg",
  "/assets/img/slides/modelosPre2.jpg",
  "/assets/img/slides/modelosPre3.jpg",
  "/assets/img/slides/modelosPre4.jpg",
  "/assets/img/slides/modelosPre5.jpg",
  "/assets/img/slides/modelosPre6.jpg"
];
var currentIndexModeloPre = 0;

document.getElementById("openModalBtnModeloPre").onclick = function () {
  $('#myModalModeloPre').modal('show');
}

function adjustModalSizeModeloPre() {
  var imgWidth = galleryImgModeloPre.naturalWidth;
  var imgHeight = galleryImgModeloPre.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerModeloPre.style.maxWidth = maxWidth + 'px';
  imageContainerModeloPre.style.maxHeight = maxHeight + 'px';
  modalDialogModeloPre.style.maxWidth = maxWidth + 'px';
  modalDialogModeloPre.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnModeloPre").onclick = function () {
  currentIndexModeloPre = (currentIndexModeloPre > 0) ? currentIndexModeloPre - 1 : imagesModeloPre.length - 1;
  galleryImgModeloPre.src = imagesModeloPre[currentIndexModeloPre];
  adjustModalSizeModeloPre();
}

document.getElementById("nextBtnModeloPre").onclick = function () {
  currentIndexModeloPre = (currentIndexModeloPre < imagesModeloPre.length - 1) ? currentIndexModeloPre + 1 : 0;
  galleryImgModeloPre.src = imagesModeloPre[currentIndexModeloPre];
  adjustModalSizeModeloPre();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalModeloPre').on('shown.bs.modal', function () {
  adjustModalSizeModeloPre();
});
