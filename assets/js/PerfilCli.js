var modalPerfilCli = document.getElementById('myModalPerfilCli');
var modalDialogPerfilCli = document.querySelector('.modal-dialog');
var galleryImgPerfilCli = document.getElementById('galleryImgPerfilCli');
var imageContainerPerfilCli = document.getElementById('imageContainerPerfilCli');
var imagesPerfilCli = [
  "/assets/img/slides/perfilCli1.jpg",
  "/assets/img/slides/perfilCli2.jpg"
];
var currentIndexPerfilCli = 0;

document.getElementById("openModalBtnPerfilCli").onclick = function () {
  $('#myModalPerfilCli').modal('show');
}

function adjustModalSizePerfilCli() {
  var imgWidth = galleryImgPerfilCli.naturalWidth;
  var imgHeight = galleryImgPerfilCli.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerPerfilCli.style.maxWidth = maxWidth + 'px';
  imageContainerPerfilCli.style.maxHeight = maxHeight + 'px';
  modalDialogPerfilCli.style.maxWidth = maxWidth + 'px';
  modalDialogPerfilCli.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnPerfilCli").onclick = function () {
  currentIndexPerfilCli = (currentIndexPerfilCli > 0) ? currentIndexPerfilCli - 1 : imagesPerfilCli.length - 1;
  galleryImgPerfilCli.src = imagesPerfilCli[currentIndexPerfilCli];
  adjustModalSizePerfilCli();
}

document.getElementById("nextBtnPerfilCli").onclick = function () {
  currentIndexPerfilCli = (currentIndexPerfilCli < imagesPerfilCli.length - 1) ? currentIndexPerfilCli + 1 : 0;
  galleryImgPerfilCli.src = imagesPerfilCli[currentIndexPerfilCli];
  adjustModalSizePerfilCli();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalPerfilCli').on('shown.bs.modal', function () {
  adjustModalSizePerfilCli();
});