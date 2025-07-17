 // https://pokeapi.co/api/v2/pokemon

 fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
 .then(function(res){ return res.json()})
 .then(function(res){
    for (let i= 0; i < res.results.length; i++) {
        const pokemon = res.results[i];
        document.body.innerHTML += '<a href="pokemon-detail.html?name=' + pokemon.name + '" class="pokemon">' +
         pokemon.name + '</a>';
        }
 })