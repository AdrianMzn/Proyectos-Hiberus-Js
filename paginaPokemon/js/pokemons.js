let pokemons = new Array();

let getPokemonInfo = async(url) => {
    try{
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        pokemons.push(datos);
    } catch{
        console.log(error);
    }
}

let url = "https://pokeapi.co/api/v2/pokemon";
let getPokemons = async(url) => {
    try{
        pokemons = [];
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        let lista = datos.results;

        for (let pokemon of lista) {
            await getPokemonInfo(pokemon.url)
        }
        
    } catch{
        console.log(error);
    }
}

let selectPokemons = async() => {
    await getPokemons(url)

    var tipoBuscado = document.getElementById("pokemonTipo").value;
    document.querySelector('#pokemon').innerHTML = '<option value="default">Selecciona un Pokemon</option>';
    var nombreBuscado = document.getElementById("pokemon").value;
    pokemons.forEach((poke) => {
        if (tipoBuscado == "default" || ( poke.types.length == 2 && ( poke.types[0].type.name == tipoBuscado || poke.types[1].type.name == tipoBuscado) 
        || poke.types.length == 1 && poke.types[0].type.name == tipoBuscado )) {
            if (nombreBuscado == poke.name) {
                document.querySelector('#pokemon').innerHTML += `<option selected value=${poke.name}>${poke.name}</option>`; 
            }else{
                document.querySelector('#pokemon').innerHTML += `<option value=${poke.name}>${poke.name}</option>`; 
            }
            
        }
        
    })
}




let pintarPokemons = async() =>{

    var nombreBuscado = document.getElementById("pokemon").value;
    var tipoBuscado = document.getElementById("pokemonTipo").value;
    pokemons = [];
    await getPokemons(url)
    await selectPokemons()
    
    let nuevoVector = pokemons.filter(item => item.name.includes(nombreBuscado) || nombreBuscado == "default");

    console.log(nuevoVector)

    nuevoVector = nuevoVector.filter( item => tipoBuscado == "default" ||
        ( item.types.length == 2 && ( item.types[0].type.name == tipoBuscado || item.types[1].type.name == tipoBuscado) 
        || item.types.length == 1 && item.types[0].type.name == tipoBuscado ));
    console.log(nuevoVector)
    document.querySelector('#formularioTarjeta').innerHTML = '';
        
    nuevoVector.forEach((poke) => {
        document.querySelector('#formularioTarjeta').innerHTML += `<div id="tarjetas"><p>${poke.name}</p><img src="${poke.sprites.front_shiny}" alt=""></div>`
    })
}



document.querySelector('#pokemonTipo').onchange = pintarPokemons;
document.querySelector('#pokemon').onchange = pintarPokemons;
