var modalModelosPreCust = document.getElementById('myModalModelosPreCust');
var modalDialogModelosPreCust = document.querySelector('.modal-dialog');
var galleryImgModelosPreCust = document.getElementById('galleryImgModelosPreCust');
var imageContainerModelosPreCust = document.getElementById('imageContainerModelosPreCust');
var imagesModelosPreCust = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexModelosPreCust = 0;

document.getElementById("openModalBtnModelosPreCust").onclick = function () {
  $('#myModalModelosPreCust').modal('show');
}

function adjustModalSizeModelosPreCust() {
  var imgWidth = galleryImgModelosPreCust.naturalWidth;
  var imgHeight = galleryImgModelosPreCust.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerModelosPreCust.style.maxWidth = maxWidth + 'px';
  imageContainerModelosPreCust.style.maxHeight = maxHeight + 'px';
  modalDialogModelosPreCust.style.maxWidth = maxWidth + 'px';
  modalDialogModelosPreCust.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnModelosPreCust").onclick = function () {
  currentIndexModelosPreCust = (currentIndexModelosPreCust > 0) ? currentIndexModelosPreCust - 1 : imagesModelosPreCust.length - 1;
  galleryImgModelosPreCust.src = imagesModelosPreCust[currentIndexModelosPreCust];
  adjustModalSizeModelosPreCust();
}

document.getElementById("nextBtnModelosPreCust").onclick = function () {
  currentIndexModelosPreCust = (currentIndexModelosPreCust < imagesModelosPreCust.length - 1) ? currentIndexModelosPreCust + 1 : 0;
  galleryImgModelosPreCust.src = imagesModelosPreCust[currentIndexModelosPreCust];
  adjustModalSizeModelosPreCust();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalModelosPreCust').on('shown.bs.modal', function () {
  adjustModalSizeModelosPreCust();
});