

/*
CAMPOS:
        Nombre
        Nº Modelo
        Precio estimado
        Color
        Caracteristicas
        Imagen

*/

var matrizGuitarras = new Array(6); 



matrizGuitarras[0] = new Array(6);
matrizGuitarras[1] = new Array(6);
matrizGuitarras[2] = new Array(6);
matrizGuitarras[3] = new Array(6);
matrizGuitarras[4] = new Array(6);
matrizGuitarras[5] = new Array(6); // crear un matriz de 3 filas X 2 columnas


//Matriz de guitarras, cada fila un guitarra y las columnas:
    // Columna 0: Nombre
    // Columna 1: Nº Modelo
    // Columna 2: Precio estimado
    // Columna 3: Color
    // Columna 4: Caracteristicas
    // Columna 5: Imagen

//Guitarra 0
matrizGuitarras[0][0] = "American Performer Precision Bass";
matrizGuitarras[0][1] = "0198600300";
matrizGuitarras[0][2] = "1399.00";
matrizGuitarras[0][3] = "Naranja";
matrizGuitarras[0][4] = "Cuerpo de aliso. Pastillas split-coil Yosemite P Bass en el centro; Yosemite single-coil Jazz Bass en puente; Sistema de tono Greasebucket. Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”; 20 trastes médium jumbo. Clavijero de eje cónico; logo de los 70 plateado.";
matrizGuitarras[0][5] = "img/american_performer_precision_bass.jpg";

//Guitarra 1
matrizGuitarras[1][0] = "American Performer Jazz Bass";
matrizGuitarras[1][1] = "0198612357";
matrizGuitarras[1][2] = "1,399.00";
matrizGuitarras[1][3] = "Satin Surf Green";
matrizGuitarras[1][4] = "Cuerpo de aliso. Dos pastillas Yosemite single-coil Jazz Bass; Sistema de tono Greasebucket. Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”; 20 trastes médium jumbo.";
matrizGuitarras[1][5] = "img/american_performer_jazz_bass.jpg";

//Guitarra 2
matrizGuitarras[2][0] = "American Performer Mustang Bass";
matrizGuitarras[2][1] = "0198620345";
matrizGuitarras[2][2] = "1,349.00";
matrizGuitarras[2][3] = "Aubergine";
matrizGuitarras[2][4] = "Cuerpo de aliso. Una pastilla Yosemite single-coil Mustang Bass en el centro; Una pastilla Yosemite single-coil Jazz Bass en el puente; Sistema de tono Greasebucket. Mástil en forma de “C moderna” con diapasón de radio de 9.5 ”; 20 trastes médium jumbo.";
matrizGuitarras[2][5] = "img/american_performer_mustang_bass";

//Guitarra 3
matrizGuitarras[3][0] = "American Professional II Jazz Bass Fretless";
matrizGuitarras[3][1] = "0194000761";
matrizGuitarras[3][2] = "2,059.00";
matrizGuitarras[3][3] = "Dark Night";
matrizGuitarras[3][4] = "Two V-Mod II single-coil Jazz Bass pickups. Slim “C”-shaped neck profile with rolled fingerboard edges. ";
matrizGuitarras[3][5] = "img/american_prof_jazz_bass_fretless";

//Guitarra 4
matrizGuitarras[4][0] = "American Professional II Precision Bass";
matrizGuitarras[4][1] = "0193930755";
matrizGuitarras[4][2] = "1,999.00";
matrizGuitarras[4][3] = "Mercury";
matrizGuitarras[4][4] = "Pastilla Precision Bass de bobina dividida V-Mod II single coil. Perfil de mástil de bajo del 63. Cejilla de hueso; 20 trastes estrechos y altos para una sensación familiar al tocar. Puente HiMass ™ Vintage para mayor sustain. Clavijero de eje acanalado; Varillas de grafito Posiflex para refuerzo del mástil. Incluye estuche rígido Elite Molded";
matrizGuitarras[4][5] = "img/american_prof_precision_bass";

//Guitarra 5
matrizGuitarras[5][0] = "American Professional II Precision Bass";
matrizGuitarras[5][1] = "0193930755";
matrizGuitarras[5][2] = "1,999.00";
matrizGuitarras[5][3] = "Mercury";
matrizGuitarras[5][4] = "Pastilla Precision Bass de bobina dividida V-Mod II single coil. Perfil de mástil de bajo del 63. Cejilla de hueso; 20 trastes estrechos y altos para una sensación familiar al tocar. Puente HiMass ™ Vintage para mayor sustain. Clavijero de eje acanalado; Varillas de grafito Posiflex para refuerzo del mástil. Incluye estuche rígido Elite Molded";
matrizGuitarras[5][5] = "img/american_prof_precision_bass_V";





function buscarGuitarra(){
    

    var nombreGuitarra = document.getElementById("nombreTxt").value;
    var numModeloMinGuitarra = document.getElementById("numModeloMinTxt").value;
    var numModeloMaxGuitarra = document.getElementById("numModeloMaxTxt").value;
    var precioMinGuitarra = document.getElementById("precioMinTxt").value;
    var precioMaxGuitarra = document.getElementById("precioMaxTxt").value;
    var colorGuitarra = document.getElementById("color").value;

    var vectorGuitarras = [0,1,2,3,4,5];

    alert("Buscamos guitarra: ");

    /*
    if( nombreGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => matrizGuitarras[item][0].includes(nombreGuitarra) );
    }

    console.log("Vector: " + vectorGuitarras);

    if( numModeloMinGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( matrizGuitarras[item][1] ) >= parseFloat(numModeloMinGuitarra)  );
    }

    if( numModeloMaxGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( matrizGuitarras[item][1] ) <= parseFloat(numModeloMaxGuitarra)  );
    }

    if( precioMinGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( matrizGuitarras[item][2] ) >= parseFloat(precioMinGuitarra)  );
    }

    if( precioMaxGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( matrizGuitarras[item][2] ) <= parseFloat(precioMaxGuitarra)  );
    }

    if( colorGuitarra != "default"){
        vectorGuitarras = vectorGuitarras.filter(
            item => parseFloat( matrizGuitarras[item][3] ) == colorGuitarra  );
    }*/
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

var divListaGuitarras = document.getElementById("listaEncontradas");

for (let i = 0; i < matrizGuitarras.length; i++) {
    infoGuitarra = matrizGuitarras[i];
    for (let j = 0; j < infoGuitarra.length; j++) {
        console.log(infoGuitarra[j])
    }

    var divTargeta = document.createElement("div");
    divTargeta.setAttribute('class','tarjeta');
    divListaGuitarras.appendChild(divTargeta);

    var divTitulo = document.createElement("div");
    divTitulo.setAttribute('class','titulo');
    divTitulo.innerHTML = "<h3>Una tarjeta básica</h3>";
    divTargeta.appendChild(divTitulo);

    
    // console.log(matrizGuitarras[i]) 
}






