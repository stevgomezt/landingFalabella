// InvestigacionMer Modal
var modalInvestigacionMer = document.getElementById('myModalInvestigacionMer');
var modalDialogInvestigacionMer = modalInvestigacionMer.querySelector('.modal-dialog');
var galleryImgInvestigacionMer = document.getElementById('galleryImgInvestigacionMer');
var imageContainerInvestigacionMer = document.getElementById('imageContainerInvestigacionMer');
var imagesInvestigacionMer = [
  "/assets/img/slides/invesMer1.jpg",
  "/assets/img/slides/invesMer2.jpg"
];
var currentIndexInvestigacionMer = 0;

document.getElementById("openModalBtnInvestigacionMer").onclick = function () {
  $('#myModalInvestigacionMer').modal('show');
}

function adjustModalSizeInvestigacionMer() {
  var imgWidth = galleryImgInvestigacionMer.naturalWidth;
  var imgHeight = galleryImgInvestigacionMer.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerInvestigacionMer.style.maxWidth = maxWidth + 'px';
  imageContainerInvestigacionMer.style.maxHeight = maxHeight + 'px';
  modalDialogInvestigacionMer.style.maxWidth = maxWidth + 'px';
  modalDialogInvestigacionMer.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnInvestigacionMer").onclick = function () {
  currentIndexInvestigacionMer = (currentIndexInvestigacionMer > 0) ? currentIndexInvestigacionMer - 1 : imagesInvestigacionMer.length - 1;
  galleryImgInvestigacionMer.src = imagesInvestigacionMer[currentIndexInvestigacionMer];
  adjustModalSizeInvestigacionMer();
}

document.getElementById("nextBtnInvestigacionMer").onclick = function () {
  currentIndexInvestigacionMer = (currentIndexInvestigacionMer < imagesInvestigacionMer.length - 1) ? currentIndexInvestigacionMer + 1 : 0;
  galleryImgInvestigacionMer.src = imagesInvestigacionMer[currentIndexInvestigacionMer];
  adjustModalSizeInvestigacionMer();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalInvestigacionMer').on('shown.bs.modal', function () {
  adjustModalSizeInvestigacionMer();
});
