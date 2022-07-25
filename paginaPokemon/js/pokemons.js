let pokemons = new Array();
//Traemos la primera generacion (151 pokemons)
let url = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

let getPokemonInfo = async(url) => {
    try{
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        pokemons.push(datos);
    } catch{
        console.log(error);
    }
}

let getPokemons = async(url) => {
    try{
        pokemons = [];
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        let lista = datos.results;

        console.log(datos);
        for (let pokemon of lista) {
            await getPokemonInfo(pokemon.url)
        }
        
    } catch{
        console.log(error);
    }
}

let selectPokemons = async() => {
    await getPokemons(url)
    
    
    document.querySelector('#formularioTarjeta').innerHTML += `<img id="opacity" src="../img/pokemons.jpg" alt="pokemon">`
    

    let tipoBuscado = document.getElementById("pokemonTipo").value;
    let nombreBuscado = document.getElementById("pokemon").value;

    document.querySelector('#pokemon').innerHTML = '<option value="default">Selecciona un Pokemon</option>';
    
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

    let nombreBuscado = document.getElementById("pokemon").value;
    let tipoBuscado = document.getElementById("pokemonTipo").value;
    await getPokemons(url);
    await selectPokemons();
    
    let vectorFilterTipo = pokemons.filter( item => tipoBuscado == "default" ||
        ( item.types.length == 2 && ( item.types[0].type.name == tipoBuscado || item.types[1].type.name == tipoBuscado) 
        || item.types.length == 1 && item.types[0].type.name == tipoBuscado ));

    console.log(vectorFilterTipo)
    
    let vectorFilter = vectorFilterTipo.filter(item => item.name.includes(nombreBuscado) || nombreBuscado == "default");

    // Si el vector de pokemons despues de filtrar por nombre es vacio pero tenemos seleccionado un tipo entonces devolvemos los pokemons de ese tipo
    if(  vectorFilter.length == 0 && tipoBuscado != "default"){
        vectorFilter = vectorFilterTipo;
    }

    console.log(vectorFilter)
    document.querySelector('#formularioTarjeta').innerHTML = '';
    vectorFilter.forEach((poke) => {
        document.querySelector('#formularioTarjeta').innerHTML += `<div id="tarjetas"><p>${poke.name}</p><img src="${poke.sprites.front_shiny}" alt=""></div>`
    })
}

document.querySelector('#pokemonTipo').onchange = pintarPokemons;
document.querySelector('#pokemon').onchange = pintarPokemons;
