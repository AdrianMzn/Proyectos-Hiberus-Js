
var pokemons = new Array();

/*
//Traer imagen de pokemon
var getPokemonImage = async(url) => {
    try{
        var respuesta = await fetch(url);
        var datos = await respuesta.json();
        
        var img = document.createElement('img');
        img.src = datos.sprites.front_shiny;
        img.setAttribute("style", "imagePokemon");
        document.body.appendChild(img);
        
    } catch{
        console.log(error);
    }
}


//Traer la lista de los pokemon y mostrar sus nombres
var url = "https://pokeapi.co/api/v2/pokemon";
var getPokemons = async(url) => {
    try{
        var respuesta = await fetch(url);
        var datos = await respuesta.json();
        var lista = datos.results;

        console.log(datos);
        
        for (var pokemon of lista) {
            var frase = document.createElement('p');
            frase.innerText = pokemon.name;
            document.body.appendChild(frase);

            await getPokemonImage(pokemon.url)
        }
    } catch{
        console.log(error);
    }
}
*/

var getPokemonInfo = async(url) => {
    try{
        var respuesta = await fetch(url);
        var datos = await respuesta.json();
        
        pokemons.push(datos);
        console.log(datos.types)
        
    } catch{
        console.log(error);
    }
}


var url = "https://pokeapi.co/api/v2/pokemon";
var getPokemons = async(url) => {
    try{
        var respuesta = await fetch(url);
        var datos = await respuesta.json();
        var lista = datos.results;
        console.log(lista);

        for (var pokemon of lista) {
            getPokemonInfo(pokemon.url)
        }

        console.log(pokemons)
        
        
    } catch{
        console.log(error);
    }
}

function filtarPokemon(){
    var nombreBuscado = document.getElementById("nombrePokemon").value;
    var tipoBuscado = document.getElementById("tipoPokemon").value;

    
    var divPokemons = document.getElementById("formularioTarjeta");

    var nuevoVector = pokemons.filter( item => item.name.includes(nombreBuscado)  );

    nuevoVector = nuevoVector.filter( item => 
        ( item.types.length == 2 && ( item.types[0].type.name == tipoBuscado || item.types[1].type.name == tipoBuscado) 
        || item.types.length == 1 && item.types[0].type.name == tipoBuscado ));

    
    for (var pokemon of nuevoVector) {
        var sectionPokemon = document.createElement("section");

        sectionPokemon.setAttribute("class","tarjeta");
        tarjetaPokemon.innerHTML = "<div id='title'>Datos pokemon</div>";
        tarjetaPokemon.innerHTML += "<div id='nombre'>" + pokemon.name + "</div>";
        tarjetaPokemon.innerHTML += "<div id='imagen'><img src='" + pokemon.sprites.front_shiny + "' alt='" + pokemon.name + "'></img></div>";

        divPokemons.appendChild(tarjetaPokemon);
    }
    
        
    
}