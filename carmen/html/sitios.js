let Sitios=[
    {
        "titulo":"Paseo del Ángel",
        "descripcion":"El Paseo del Ángel es un lugar mágico del Carmen de Viboral! en el que encontrarás todo lo que necesitas. Queremos que vivas una experiencia única donde el comercio se une con el arte, el diseño, la gastronomía, la fotografía, las artesanías, el color y la magia de su gente.",
        "tipo":"Monumentos y lugares de interés",
        "calificacion":5,
        "lugar":"Cra. 31 #28-36, El Carmen de Viboral, Antioquia",
        "planes":[
            "Un rincón magico en el Carmen de Viboral.",
            "Un lugar lleno de color, diseño, arte, comercio, gastrobar.",
            "ideal para una buena fotografía que recuerde la visita."
        ],
        "imagenes":[
            "img/pdaT.jpg",
            "img/pdac1.jpeg",
            "img/pdac2.jpg"
        ]
    },
    {
        "titulo":"Calle de La Cerámica",
        "descripcion":"La Calle de la Cerámica de El Carmen de Viboral, el principal corredor urbano del municipio no solo por su estética sino también porque es también la calle donde se ubica una parte representativa del comercio local.",
        "tipo":"Monumentos y lugares de interés",
        "calificacion":5,
        "lugar":"Carrera 31 # 36, Carmen de Viboral ",
        "planes":[
            "Mosaicos hechos con material cerámico.",
            "Piezas de loza dispuestas en las fachadas de las edificaciones a lado y lado, llenan de adorno y singular atractivo.",
            "Flores, maíz, hojas, tazas, platos y poemas de José Manuel Arango, están cuidadosamente plasmadas en las paredes."
        ],
        "imagenes":[
            "img/cdlcT.webp",
            "img/cdlcc1.jpg",
            "img/cdlcc2.webp"
        ]
    },
    {
        "titulo":"Valle De Las Cascadas",
        "descripcion":"Muy cerca a Medellín se encuentra el cañón del río Santo Domingo, el cual forma paisajes alucinantes gracias a sus escarpadas montañas cubierta por el bosque tropical y adornadas con altas cascadas que se precipitan al río.",
        "tipo":"Tours naturaleza",
        "calificacion":5,
        "lugar":"Carrera 31 # 36, Carmen de Viboral ",
        "planes":[
            "Este privilegiado lugar es el hogar de uno de los últimos ríos libres de Antioquia",
            "Disfrutarás de sus aguas cristalinas y unos de los ecosistemas más biodiversos del planeta.",
            "Deleita a sus visitantes con cientos de aves, coloridas mariposas e innumerable variedad de plantas.",
            "Caminaremos en gran parte por antiguos senderos en medio del bosque que van a lo largo del rio."
        ],
        "imagenes":[
            "img/vdlcT.jpg",
            "img/vdlcc1.jpg",
            "img/vdlcc2.jpg"
        ]
    },
    {
        "titulo":"Museo vivo de la cerámica El Dorado",
        "descripcion":"Recorrido turístico dedicado a mostrarle al mundo el hermoso proceso artesanal de fabricación de Cerámicas El Dorado. A partir de ahora podrás visitarnos en el Carmen de Viboral, Antioquia.",
        "tipo":"Tours fabricas",
        "calificacion":5,
        "lugar":"Carrera 31 # 36, Carmen de Viboral ",
        "planes":[
            "conocer nuestra fábrica.",
            "vivir la experiencia de ver cómo nuestros artesanos fabrican y decoran con cada trazo, amor y dedicación cada pieza.",
            "Excelente plan para conocer la historia de la cerámica, recorridos guiados por personas idóneas,interesante actividad para realizar en cualquier ocasión."
        ],
        "imagenes":[
            "img/mvdlcT.jfif",
            "img/mvdlcc1.jpg",
            "img/mvdlcc2.jpg"
        ]
    },
    {
        "titulo":"La Casa de la Cultura Sixto Arango",
        "descripcion":"es un espacio para el encuentro, la creación, la gestión artística y cultural, para la realización de talleres de formación y hasta para plenarias del Concejo. Esta casa es símbolo de arte, cultura y democracia dentro de la tradición carmelita.",
        "tipo":"Monumentos y lugares de interés",
        "calificacion":5,
        "lugar":"Cra. 34a #33-80 El Carmen de Viboral, Antioquia",
        "planes":[
            "recorrer sus salas de exposiciones arqueológicas.",
            "salas temporales impregnadas en arte.",
            "iglesia central Nuestra Señora del Carmen, no sólo para entregar una devota oración, también para admirar la arquitectura y los colores de los vitrales de este templo religioso."
        ],
        "imagenes":[
            "img/cdlcT.jpeg",
            "img/cdlcuc1.jpg",
            "img/cdlcuc2.jpg"
        ]
    },
    {
        "titulo":"La Locería Júpiter",
        "descripcion":"Hacer un recorrido por los hornos y las chimeneas que están aún en pie, como si estuvieran resistiéndose a desaparecer, te permite conectarte con la historia de la tradición cerámica y entender por qué ha sido el eje del desarrollo de este municipio.",
        "tipo":"Monumentos y lugares de interés",
        "calificacion":5,
        "lugar":"Cra. 30 #27-66, El Carmen de Viboral, Antioquia",
        "planes":[
            "Hacer un recorrido por los hornos y las chimeneas que están aún en pie, como si estuvieran resistiéndose a desaparecer.",
            "Visitar esta fábrica también hace que generes un vínculo especial con las formas más autóctonas de transformar la cerámica.",
            "ste lugar cargado de historia es realmente mágico."
        ],
        "imagenes":[
            "img/ljt.jpeg",
            "img/ljc1.jfif",
            "img/ljc2.jpg"
        ]
    },
    {
        "titulo":"El cerro Bonifacio",
        "descripcion":"Es una gran idea si te gusta el senderismo y las actividades de alto impacto. Se sitúa entre las veredas El Cerro, Camargo y Campo Alegre.",
        "tipo":"Tours naturaleza",
        "calificacion":5,
        "lugar":"3M23+6Q, El Carmen de Viboral, Antioquia",
        "planes":[
            "Según cuentan los habitantes del pueblo, es una tradición subir a aquel morro -como le dicen- el día Martes Santo.",
            "Los fieles que celebran la Semana Santa consideran esta actividad como un acto de penitencia, debido a la inclinación y nivel de dificultad de subida al Cerro."
        ],
        "imagenes":[
            "img/ecbt.jpeg",
            "img/ecbc1.jpeg",
            "img/ecbc2.jpg"
        ]
    }

];

// Suponiendo que tienes el array Sitios definido anteriormente

// Obtén el contenedor donde deseas agregar la información
const contenedor = document.querySelector('.container');

// Recorre el array Sitios
Sitios.forEach((sitio, indice) => {
    // Crea los elementos HTML dinámicamente
    const divRow = document.createElement('div');
    divRow.classList.add('row', 'fila');

    const divCol1 = document.createElement('div');
    divCol1.classList.add('col-lg-3');
    divCol1.innerHTML = `<p class=""><img src="${sitio.imagenes[0]}" alt="Imagen del item" style="max-width: 300px;"></p>`;

    const divCol2 = document.createElement('div');
    divCol2.classList.add('col-lg-6');
    divCol2.innerHTML = `<h3 class="libre-baskerville-bold">${sitio.titulo}</h3><p class="libre-baskerville-regular">${sitio.descripcion}</p>`;

    const divCol3 = document.createElement('div');
    divCol3.classList.add('col-lg-3');
    const ptipo = document.createElement('p');
    ptipo.classList.add('libre-baskerville-regular');
    ptipo.innerHTML = sitio.tipo;
    const divwraper = document.createElement('div');
    divwraper.classList.add('wrapper');
    const enlaceConoceMas = document.createElement('a');
    enlaceConoceMas.href = '';
    enlaceConoceMas.dataset.bsToggle = 'modal';
    enlaceConoceMas.dataset.bsTarget = '#modalInfo';
    enlaceConoceMas.innerHTML = `<span>Conoce más</span>`;
    enlaceConoceMas.addEventListener('click', (event) => {
        cargarInformacionModal(Sitios[indice]);
    });
    
    divwraper.appendChild(enlaceConoceMas);
    divCol3.appendChild(ptipo);
    divCol3.appendChild(divwraper);
    

    // Agrega las columnas al divRow
    divRow.appendChild(divCol1);
    divRow.appendChild(divCol2);
    divRow.appendChild(divCol3);

    // Agrega el divRow al contenedor principal
    contenedor.appendChild(divRow);
    // Suponiendo que tienes un botón o evento que abre el modal, puedes agregar un evento de clic a esos elementos

});


const modalContenedor = document.getElementById('modalInfo');
const modalTitulo = document.getElementById('exampleModalLabel');
const modalDescripcion = document.getElementById("descripcion").querySelector('p');
const modalTipo = document.getElementById('Tipo').querySelector('p');
const modalCalificacion = document.getElementById('Calificacion');
const modalLugar = document.getElementById('Lugar').querySelector('p');
const modalPlanes = document.getElementById('Planes');
const card1 = document.getElementById('face');
const card2 = document.getElementById('back');



// Función para cargar la información del sitio en el modal
function cargarInformacionModal(sitio) {
  modalTitulo.textContent = sitio.titulo;
  modalDescripcion.textContent = sitio.descripcion;
  modalTipo.textContent = sitio.tipo;
  modalLugar.textContent = sitio.lugar;

  const imgcard1 = document.createElement('img');
  const imgcard2 = document.createElement('img');
  imgcard1.src = sitio.imagenes[1];
  imgcard2.src = sitio.imagenes[2];
  card1.appendChild(imgcard1);
  card2.appendChild(imgcard2);
  // Limpiar contenido anterior de calificación
  modalCalificacion.innerHTML = '';
  
  // Agregar estrellas de calificación al modal
  for (let i = 0; i < sitio.calificacion; i++) {
    const starSpan = document.createElement('span');
    starSpan.classList.add('star');
    starSpan.textContent = '★';
    modalCalificacion.appendChild(starSpan);
  }

  // Limpiar contenido anterior de planes
  modalPlanes.innerHTML = '';
  
  // Agregar planes al modal
  sitio.planes.forEach(plan => {
    const listItem = document.createElement('li');
    listItem.textContent = plan;
    modalPlanes.appendChild(listItem);
  });

  // Mostrar el modal
  const myModal = new bootstrap.Modal(modalContenedor);
  myModal.fade();
}