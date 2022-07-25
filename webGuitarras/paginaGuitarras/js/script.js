

/*
CAMPOS:
        Nombre
        Nº Modelo
        Precio estimado
        Color
        Caracteristicas
        Imagen

*/
window.MY = {};
MY.matrizGuitarras = new Array(6); 
var vectorGuitarras = [0,1,2,3,4,5];


MY.matrizGuitarras[0] = new Array(6);
MY.matrizGuitarras[1] = new Array(6);
MY.matrizGuitarras[2] = new Array(6);
MY.matrizGuitarras[3] = new Array(6);
MY.matrizGuitarras[4] = new Array(6);
MY.matrizGuitarras[5] = new Array(6); // crear un matriz de 3 filas X 2 columnas


//Matriz de guitarras, cada fila un guitarra y las columnas:
    // Columna 0: Nombre
    // Columna 1: Nº Modelo
    // Columna 2: Precio estimado
    // Columna 3: Color
    // Columna 4: Caracteristicas
    // Columna 5: Imagen

//Guitarra 0
MY.matrizGuitarras[0][0] = "American Performer Precision Bass";
MY.matrizGuitarras[0][1] = "0198600300";
MY.matrizGuitarras[0][2] = "1399.00";
MY.matrizGuitarras[0][3] = "Naranja";
MY.matrizGuitarras[0][4] = "Cuerpo de aliso. Pastillas split-coil Yosemite P Bass en el centro. Yosemite single-coil Jazz Bass en puente. Sistema de tono Greasebucket. Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”. 20 trastes médium jumbo. Clavijero de eje cónico. Logo de los 70 plateado.";
MY.matrizGuitarras[0][5] = "img/american_performer_precision_bass.jpg";

//Guitarra 1
MY.matrizGuitarras[1][0] = "American Performer Jazz Bass";
MY.matrizGuitarras[1][1] = "0198612357";
MY.matrizGuitarras[1][2] = "1399.00";
MY.matrizGuitarras[1][3] = "Verde";
MY.matrizGuitarras[1][4] = "Cuerpo de aliso. Dos pastillas Yosemite single-coil Jazz Bass; Sistema de tono Greasebucket. Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”; 20 trastes médium jumbo.";
MY.matrizGuitarras[1][5] = "img/american_performer_jazz_bass.jpg";

//Guitarra 2
MY.matrizGuitarras[2][0] = "American Performer Mustang Bass";
MY.matrizGuitarras[2][1] = "0198620345";
MY.matrizGuitarras[2][2] = "1349.00";
MY.matrizGuitarras[2][3] = "Granate";
MY.matrizGuitarras[2][4] = "Cuerpo de aliso. Una pastilla Yosemite single-coil Mustang Bass en el centro. Una pastilla Yosemite single-coil Jazz Bass en el puente. Sistema de tono Greasebucket. Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”. 20 trastes médium jumbo.";
MY.matrizGuitarras[2][5] = "img/american_performer_mustang_bass.jpg";

//Guitarra 3
MY.matrizGuitarras[3][0] = "American Professional II Jazz Bass Fretless";
MY.matrizGuitarras[3][1] = "0194000761";
MY.matrizGuitarras[3][2] = "2059.00";
MY.matrizGuitarras[3][3] = "Negro";
MY.matrizGuitarras[3][4] = "Pastilla Precision Bass de bobina dividida V-Mod II single coil. Perfil de mástil de bajo del 63. Cejilla de hueso; 20 trastes estrechos y altos para una sensación familiar al tocar. Puente HiMass ™ Vintage para mayor sustain. Clavijero de eje acanalado; Varillas de grafito Posiflex para refuerzo del mástil. Incluye estuche rígido Elite Molded. ";
MY.matrizGuitarras[3][5] = "img/american_prof_jazz_bass_fretless.jpg";

//Guitarra 4
MY.matrizGuitarras[4][0] = "American Professional II Precision Bass";
MY.matrizGuitarras[4][1] = "0193930755";
MY.matrizGuitarras[4][2] = "1999.00";
MY.matrizGuitarras[4][3] = "Plateado";
MY.matrizGuitarras[4][4] = "Pastilla Precision Bass de bobina dividida V-Mod II single coil. Perfil de mástil de bajo del 63. Cejilla de hueso; 20 trastes estrechos y altos para una sensación familiar al tocar. Puente HiMass ™ Vintage para mayor sustain. Clavijero de eje acanalado; Varillas de grafito Posiflex para refuerzo del mástil. Incluye estuche rígido Elite Molded";
MY.matrizGuitarras[4][5] = "img/american_prof_precision_bass.jpg";

//Guitarra 5
MY.matrizGuitarras[5][0] = "American Professional II Precision Bass";
MY.matrizGuitarras[5][1] = "0193930755";
MY.matrizGuitarras[5][2] = "1999.00";
MY.matrizGuitarras[5][3] = "Negro";
MY.matrizGuitarras[5][4] = "Pastilla Precision Bass de bobina dividida V-Mod II single coil. Perfil de mástil de bajo del 63. Cejilla de hueso; 20 trastes estrechos y altos para una sensación familiar al tocar. Puente HiMass ™ Vintage para mayor sustain. Clavijero de eje acanalado; Varillas de grafito Posiflex para refuerzo del mástil. Incluye estuche rígido Elite Molded";
MY.matrizGuitarras[5][5] = "img/american_prof_precision_bass_V.jpg";


function enviarDatos(event){
    event.preventDefault();
    buscarGuitarra();
    listarGuitarrasCoincidentes();
}


function anyadirGuitarra(nombre, numeroSerie, precio, color, propiedades, imagen){

    var nuevaGuitarra = new Array(6);
    nuevaGuitarra[0] = nombre;
    nuevaGuitarra[1] = numeroSerie;
    nuevaGuitarra[2] = precio;
    nuevaGuitarra[3] = color;
    nuevaGuitarra[4] = propiedades;
    nuevaGuitarra[5] = imagen;

    MY.matrizGuitarras.push(nuevaGuitarra);
}

function buscarGuitarra(){

    var nombreGuitarra = document.getElementById("nombreTxt").value;
    var numModeloMinGuitarra = document.getElementById("numModeloMinTxt").value;
    var numModeloMaxGuitarra = document.getElementById("numModeloMaxTxt").value;
    var precioMinGuitarra = document.getElementById("precioMinTxt").value;
    var precioMaxGuitarra = document.getElementById("precioMaxTxt").value;
    var colorGuitarra = document.getElementById("colorTxt").value;
    
    
    vectorGuitarras = new Array(MY.matrizGuitarras.length);
    for (let index = 0; index < MY.matrizGuitarras.length; index++) {
        vectorGuitarras[index]=index;
    }


    if( nombreGuitarra != ""){
        for ( let palabra of nombreGuitarra.split(" ") ){
            vectorGuitarras = vectorGuitarras.filter(
                item => MY.matrizGuitarras[item][0].includes(palabra) );
        }
        
    }

    if( numModeloMinGuitarra != ""){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( MY.matrizGuitarras[item][1] ) >= parseFloat(numModeloMinGuitarra)  );
    }

    if( numModeloMaxGuitarra != ""){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( MY.matrizGuitarras[item][1] ) <= parseFloat(numModeloMaxGuitarra)  );
    }

    if( precioMinGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( MY.matrizGuitarras[item][2] ) >= parseFloat(precioMinGuitarra)  );
    }

    if( precioMaxGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( MY.matrizGuitarras[item][2] ) <= parseFloat(precioMaxGuitarra)  );
    }

    if( colorGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item =>  MY.matrizGuitarras[item][3] == colorGuitarra  );
    }
}


    /*
    <div class="tarjeta">
        <div class="titulo">
            <h3>Una tarjeta básica</h3>
        </div>
        <div class="cuerpo">
            <div class="imagen">
                <img src="./img/bajos/american_performer_jazz_bass.jpg" alt="muestra">
            </div>
            <div class="caracteristicas">
                <h3>Características</h3>
                <div class="modelo">
                    <h4>Nº de modelo: </h4>
                    <p> 0198600300</p> 
                </div>

                <div class="precio">
                    <h4>Precio: </h4>
                    <p> 1000€</p> 
                </div>

                <div class="color">
                    <h4>Color: </h4>
                    <p> Marrón</p> 
                </div>

                <div class="descripcion">
                    <h4>Descripción: </h4>
                    <p>lorem10*5Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates aut, vel velit quaerat accusamus vero tempore, incidunt, placeat optio repellendus exercitationem. Laudantium corporis id et? Aliquam ipsam nostrum dolor eum.</p>
                </div>
            </div>
        </div>
        <div class="pie">
            <a href="#">Más información</a>
        </div>
    </div>
            */


function listarGuitarrasCoincidentes(){

    var divListaGuitarras = document.getElementById("listaEncontradas");
    divListaGuitarras.innerHTML = "";

    for (var i of vectorGuitarras) {
        var infoGuitarra = MY.matrizGuitarras[i];

        var divTargeta = document.createElement("div");
        divTargeta.setAttribute('class','tarjeta');
        divListaGuitarras.appendChild(divTargeta);

        var divTitulo = document.createElement("div");
        divTitulo.setAttribute('class','titulo');
        divTitulo.innerHTML = "<h3>" + infoGuitarra[0] + "</h3>";
        divTargeta.appendChild(divTitulo);

        var divCuerpo = document.createElement("div");
        divCuerpo.setAttribute('class','cuerpo');
        divTargeta.appendChild(divCuerpo);

        var divImagen = document.createElement("div");
        divImagen.setAttribute('class','imagen'); 
        divImagen.innerHTML = "<img src='" + infoGuitarra[5] + "' alt='muestra'></img>";
        divCuerpo.appendChild(divImagen);

        var divCaracteristicas = document.createElement("div");
        divCaracteristicas.setAttribute('class','caracteristicas'); 
        divCaracteristicas.innerHTML = "<h3>Características</h3>";
        divCuerpo.appendChild(divCaracteristicas);

        var divModelo = document.createElement("div");
        divModelo.setAttribute('class','modelo');
        divModelo.innerHTML = "<h4 class='estiloModeloPrecioColor'>Nº de modelo: </h4>";
        divModelo.innerHTML += "<p class='estiloModeloPrecioColor'> " + infoGuitarra[1] + "</p> ";
        divCaracteristicas.appendChild(divModelo);

        var divPrecio = document.createElement("div");
        divPrecio.setAttribute('class','precio'); 
        divPrecio.innerHTML = "<h4 class='estiloModeloPrecioColor'>Precio: </h4>";
        divPrecio.innerHTML += "<p class='estiloModeloPrecioColor'> " + infoGuitarra[2] + "</p> ";
        divCaracteristicas.appendChild(divPrecio);

        var divColor = document.createElement("div");
        divColor.setAttribute('class','color'); 
        divColor.innerHTML = "<h4 class='estiloModeloPrecioColor'>Color: </h4>";
        divColor.innerHTML += "<p class='estiloModeloPrecioColor'> " + infoGuitarra[3] + "</p> ";
        divCaracteristicas.appendChild(divColor);

        var divDescripcion = document.createElement("div");
        divDescripcion.setAttribute('class','descripcion'); 
        divDescripcion.innerHTML = "<h4 class='estiloModeloPrecioColor'>Descripción: </h4>";
        divDescripcion.innerHTML += "<p class='estiloModeloPrecioColor'> " + infoGuitarra[4] + "</p> ";
        divCaracteristicas.appendChild(divDescripcion);
        
        var divPie = document.createElement("div");
        divPie.setAttribute('class','pie'); 
        divPie.innerHTML = "<a href='#'>Más información</a>";
        divTargeta.appendChild(divPie);
        // console.log(MY.matrizGuitarras[i]) 
    }

}
