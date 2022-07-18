//prueba

function handleImageUpload() 
{

    var image = document.getElementById("imagenGuitarraUpload").files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById("imagenGuitarra").src = e.target.result;
    }
    reader.readAsDataURL(image);

} 

function addTarjeta(event){
    event.preventDefault();


    var infoGuitarra = new Array(6);
    infoGuitarra[0] = document.getElementById("nameGuitarra").value;
    infoGuitarra[1] = document.getElementById("numeroModelo").value;
    infoGuitarra[2] = document.getElementById("precioGuitarra").value;
    infoGuitarra[3] = document.getElementById("colorGuitarra").value;
    infoGuitarra[4] = document.getElementById("carateristicas").value;
    infoGuitarra[5] = "imagen";

    var divListaGuitarras = document.getElementById("listaEncontradas");
    divListaGuitarras.innerHTML = "";

    var divTarjeta = document.createElement("div");
    divTarjeta.setAttribute('class','tarjeta');
    divListaGuitarras.appendChild(divTarjeta);

    var divTitulo = document.createElement("div");
    divTitulo.setAttribute('class','tituloTarjeta');
    divTitulo.innerHTML = "<h3>" + infoGuitarra[0] + "</h3>";
    divTarjeta.appendChild(divTitulo);

    var divCuerpo = document.createElement("div");
    divCuerpo.setAttribute('class','cuerpo');
    divTarjeta.appendChild(divCuerpo);

    var divImagen = document.createElement("div");
    divImagen.setAttribute('class','imagen'); 
    divImagen.innerHTML = "<img id='imagenGuitarra' src='' />";
    divCuerpo.appendChild(divImagen);
    handleImageUpload();
    

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
    divTarjeta.appendChild(divPie);

    var br = document.createElement("br");
    divListaGuitarras.appendChild(br);


    var divBotones = document.getElementById("divBotones");
    divBotones.innerHTML = "";

    var confirmButton = document.createElement("button");
    confirmButton.setAttribute('class','botonConfirmar');
    confirmButton.setAttribute('onClick','window.location.reload();');
    confirmButton.innerHTML = "Confirmar";
    confirmButton.type = "submit";
    confirmButton.name = "formBtn";
    divBotones.appendChild(confirmButton);


    var deleteButton = document.createElement("button");
    deleteButton.setAttribute('class','botonEliminar');
    deleteButton.setAttribute('onClick','window.location.reload();');
    deleteButton.innerHTML = "Eliminar";
    deleteButton.type = "reset";
    deleteButton.name = "formBtn";
    divBotones.appendChild(deleteButton);
}