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

let pintarPokemons = async() => {
    await getPokemons(url)
    pokemons.forEach((poke) => {
        console.log(poke);
        document.querySelector('#formularioTarjeta').innerHTML += `<div id="tarjetas"><p>${poke.name}</p><img src="${poke.sprites.front_shiny}" alt=""></div>`
    })
    
}