var modalHistoCont = document.getElementById('myModalHistoCont');
var modalDialogHistoCont = document.querySelector('.modal-dialog');
var galleryImgHistoCont = document.getElementById('galleryImgHistoCont');
var imageContainerHistoCont = document.getElementById('imageContainerHistoCont');
var imagesHistoCont = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexHistoCont = 0;

document.getElementById("openModalBtnHistoCont").onclick = function () {
  $('#myModalHistoCont').modal('show');
}

function adjustModalSizeHistoCont() {
  var imgWidth = galleryImgHistoCont.naturalWidth;
  var imgHeight = galleryImgHistoCont.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerHistoCont.style.maxWidth = maxWidth + 'px';
  imageContainerHistoCont.style.maxHeight = maxHeight + 'px';
  modalDialogHistoCont.style.maxWidth = maxWidth + 'px';
  modalDialogHistoCont.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnHistoCont").onclick = function () {
  currentIndexHistoCont = (currentIndexHistoCont > 0) ? currentIndexHistoCont - 1 : imagesHistoCont.length - 1;
  galleryImgHistoCont.src = imagesHistoCont[currentIndexHistoCont];
  adjustModalSizeHistoCont();
}

document.getElementById("nextBtnHistoCont").onclick = function () {
  currentIndexHistoCont = (currentIndexHistoCont < imagesHistoCont.length - 1) ? currentIndexHistoCont + 1 : 0;
  galleryImgHistoCont.src = imagesHistoCont[currentIndexHistoCont];
  adjustModalSizeHistoCont();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalHistoCont').on('shown.bs.modal', function () {
  adjustModalSizeHistoCont();
});