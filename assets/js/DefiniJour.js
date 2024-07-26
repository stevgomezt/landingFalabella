var modalDefiniJour = document.getElementById('myModalDefiniJour');
var modalDialogDefiniJour = document.querySelector('.modal-dialog');
var galleryImgDefiniJour = document.getElementById('galleryImgDefiniJour');
var imageContainerDefiniJour = document.getElementById('imageContainerDefiniJour');
var imagesDefiniJour = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexDefiniJour = 0;

document.getElementById("openModalBtnDefiniJour").onclick = function () {
  $('#myModalDefiniJour').modal('show');
}

function adjustModalSizeDefiniJour() {
  var imgWidth = galleryImgDefiniJour.naturalWidth;
  var imgHeight = galleryImgDefiniJour.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerDefiniJour.style.maxWidth = maxWidth + 'px';
  imageContainerDefiniJour.style.maxHeight = maxHeight + 'px';
  modalDialogDefiniJour.style.maxWidth = maxWidth + 'px';
  modalDialogDefiniJour.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnDefiniJour").onclick = function () {
  currentIndexDefiniJour = (currentIndexDefiniJour > 0) ? currentIndexDefiniJour - 1 : imagesDefiniJour.length - 1;
  galleryImgDefiniJour.src = imagesDefiniJour[currentIndexDefiniJour];
  adjustModalSizeDefiniJour();
}

document.getElementById("nextBtnDefiniJour").onclick = function () {
  currentIndexDefiniJour = (currentIndexDefiniJour < imagesDefiniJour.length - 1) ? currentIndexDefiniJour + 1 : 0;
  galleryImgDefiniJour.src = imagesDefiniJour[currentIndexDefiniJour];
  adjustModalSizeDefiniJour();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalDefiniJour').on('shown.bs.modal', function () {
  adjustModalSizeDefiniJour();
});