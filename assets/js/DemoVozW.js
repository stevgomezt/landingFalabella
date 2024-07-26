var modalDemoVozW = document.getElementById('myModalDemoVozW');
var modalDialogDemoVozW = document.querySelector('.modal-dialog');
var galleryImgDemoVozW = document.getElementById('galleryImgDemoVozW');
var imageContainerDemoVozW = document.getElementById('imageContainerDemoVozW');
var imagesDemoVozW = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexDemoVozW = 0;

document.getElementById("openModalBtnDemoVozW").onclick = function () {
  $('#myModalDemoVozW').modal('show');
}

function adjustModalSizeDemoVozW() {
  var imgWidth = galleryImgDemoVozW.naturalWidth;
  var imgHeight = galleryImgDemoVozW.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerDemoVozW.style.maxWidth = maxWidth + 'px';
  imageContainerDemoVozW.style.maxHeight = maxHeight + 'px';
  modalDialogDemoVozW.style.maxWidth = maxWidth + 'px';
  modalDialogDemoVozW.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnDemoVozW").onclick = function () {
  currentIndexDemoVozW = (currentIndexDemoVozW > 0) ? currentIndexDemoVozW - 1 : imagesDemoVozW.length - 1;
  galleryImgDemoVozW.src = imagesDemoVozW[currentIndexDemoVozW];
  adjustModalSizeDemoVozW();
}

document.getElementById("nextBtnDemoVozW").onclick = function () {
  currentIndexDemoVozW = (currentIndexDemoVozW < imagesDemoVozW.length - 1) ? currentIndexDemoVozW + 1 : 0;
  galleryImgDemoVozW.src = imagesDemoVozW[currentIndexDemoVozW];
  adjustModalSizeDemoVozW();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalDemoVozW').on('shown.bs.modal', function () {
  adjustModalSizeDemoVozW();
});