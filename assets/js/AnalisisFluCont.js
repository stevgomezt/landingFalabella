var modalAnalisisFluCont = document.getElementById('myModalAnalisisFluCont');
var modalDialogAnalisisFluCont = document.querySelector('.modal-dialog');
var galleryImgAnalisisFluCont = document.getElementById('galleryImgAnalisisFluCont');
var imageContainerAnalisisFluCont = document.getElementById('imageContainerAnalisisFluCont');
var imagesAnalisisFluCont = [
  "/assets/img/slides/test.jpg",
  "/assets/img/slides/test2.jpg"
];
var currentIndexAnalisisFluCont = 0;

document.getElementById("openModalBtnAnalisisFluCont").onclick = function () {
  $('#myModalAnalisisFluCont').modal('show');
}

function adjustModalSizeAnalisisFluCont() {
  var imgWidth = galleryImgAnalisisFluCont.naturalWidth;
  var imgHeight = galleryImgAnalisisFluCont.naturalHeight;
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  // Ajustar el tamaño máximo basado en la ventana y las dimensiones de la imagen
  var maxWidth = Math.min(imgWidth, windowWidth * 0.9); // máximo 90% del ancho de la ventana
  var maxHeight = Math.min(imgHeight, windowHeight * 0.9); // máximo 90% de la altura de la ventana

  // Aplicar el tamaño al contenedor de la imagen y al modal
  imageContainerAnalisisFluCont.style.maxWidth = maxWidth + 'px';
  imageContainerAnalisisFluCont.style.maxHeight = maxHeight + 'px';
  modalDialogAnalisisFluCont.style.maxWidth = maxWidth + 'px';
  modalDialogAnalisisFluCont.style.maxHeight = maxHeight + 'px';
}

document.getElementById("prevBtnAnalisisFluCont").onclick = function () {
  currentIndexAnalisisFluCont = (currentIndexAnalisisFluCont > 0) ? currentIndexAnalisisFluCont - 1 : imagesAnalisisFluCont.length - 1;
  galleryImgAnalisisFluCont.src = imagesAnalisisFluCont[currentIndexAnalisisFluCont];
  adjustModalSizeAnalisisFluCont();
}

document.getElementById("nextBtnAnalisisFluCont").onclick = function () {
  currentIndexAnalisisFluCont = (currentIndexAnalisisFluCont < imagesAnalisisFluCont.length - 1) ? currentIndexAnalisisFluCont + 1 : 0;
  galleryImgAnalisisFluCont.src = imagesAnalisisFluCont[currentIndexAnalisisFluCont];
  adjustModalSizeAnalisisFluCont();
}

// Ajustar el tamaño del modal cuando se muestra
$('#myModalAnalisisFluCont').on('shown.bs.modal', function () {
  adjustModalSizeAnalisisFluCont();
});