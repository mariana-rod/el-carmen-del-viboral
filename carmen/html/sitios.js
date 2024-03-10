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
            "/carmen/images/pdaT.jpg",
            "/carmen/images/pdac1.jpeg",
            "/carmen/images/pdac2.jpg"
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
            "/carmen/images/cdlcT.webp",
            "/carmen/images/cdlcc1.jpg",
            "/carmen/images/cdlcc2.webp"
        ]
    }
];

// Suponiendo que tienes el array Sitios definido anteriormente

// Obtén el contenedor donde deseas agregar la información
const contenedor = document.querySelector('.container');

// Recorre el array Sitios
Sitios.forEach(sitio => {
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
    divCol3.innerHTML = `<p class="libre-baskerville-regular">${sitio.tipo}</p><div class="wrapper"><a href="" data-bs-toggle="modal" data-bs-target="#modalInfo"><span>Conoce más</span></a></div>`;

    // Agrega las columnas al divRow
    divRow.appendChild(divCol1);
    divRow.appendChild(divCol2);
    divRow.appendChild(divCol3);

    // Agrega el divRow al contenedor principal
    contenedor.appendChild(divRow);
});