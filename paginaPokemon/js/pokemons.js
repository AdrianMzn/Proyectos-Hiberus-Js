
var pokemons;

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
var url = "https://pokeapi.co/api/v2/pokemon";
var getPokemons = async(url) => {
    try{
        var respuesta = await fetch(url);
        var datos = await respuesta.json();

        pokemons = datos;
        
    } catch{
        console.log(error);
    }
}

function filtarPokemon(){
    var nombreBuscado = document.getElementById("nombrePokemon");

    var tipoBuscado = document.getElementById("tipoPokemon");


}