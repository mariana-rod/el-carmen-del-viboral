let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

// Mostrar la primera imagen al cargar la página
showSlide(slideIndex);

  
  
  
  function reservarRestaurante(nombreRestaurante) {
    alert("¡Reserva exitosa para el restaurante " + nombreRestaurante + "!");
  }

 
  document.getElementById("reservar1").addEventListener("click", function() {
    reservarRestaurante(1);
  });

  document.getElementById("reservar2").addEventListener("click", function() {
    reservarRestaurante(2);
  });
  document.getElementById("reservar3").addEventListener("click", function() {
    reservarRestaurante(3);
  });
  document.getElementById("reservar4").addEventListener("click", function() {
    reservarRestaurante(4);
  });
  document.getElementById("reservar5").addEventListener("click", function() {
    reservarRestaurante(5);
  });
  document.getElementById("reservar6").addEventListener("click", function() {
    reservarRestaurante(6);
  });



 

