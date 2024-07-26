var modalInteliArtifi = document.getElementById('myModalInteliArtifi');
var modalDialogInteliArtifi = document.querySelector('.modal-dialog');
var galleryImgInteliArtifi = document.getElementById('galleryImgInteliArtifi');
var imageContainerInteliArtifi = document.getElementById('imageContainerInteliArtifi');
var imagesInteliArtifi = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexInteliArtifi = 0;

document.getElementById("openModalBtnInteliArtifi").onclick = function () {
  $('#myModalInteliArtifi').modal('show');
}

function adjustModalSizeInteliArtifi() {
  var imgWidth = galleryImgInteliArtifi.naturalWidth;
  var imgHeight = galleryImgInteliArtifi.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerInteliArtifi.style.maxWidth = maxWidth + 'px';
  imageContainerInteliArtifi.style.maxHeight = maxHeight + 'px';
  modalDialogInteliArtifi.style.maxWidth = maxWidth + 'px';
  modalDialogInteliArtifi.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnInteliArtifi").onclick = function () {
  currentIndexInteliArtifi = (currentIndexInteliArtifi > 0) ? currentIndexInteliArtifi - 1 : imagesInteliArtifi.length - 1;
  galleryImgInteliArtifi.src = imagesInteliArtifi[currentIndexInteliArtifi];
  adjustModalSizeInteliArtifi();
}

document.getElementById("nextBtnInteliArtifi").onclick = function () {
  currentIndexInteliArtifi = (currentIndexInteliArtifi < imagesInteliArtifi.length - 1) ? currentIndexInteliArtifi + 1 : 0;
  galleryImgInteliArtifi.src = imagesInteliArtifi[currentIndexInteliArtifi];
  adjustModalSizeInteliArtifi();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalInteliArtifi').on('shown.bs.modal', function () {
  adjustModalSizeInteliArtifi();
});