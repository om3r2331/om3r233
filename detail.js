const name = (new URLSearchParams(location.search)).get('name');
console.log(name)

fetch('https://pokeapi.co/api/v2/pokemon/' + name)
 .then(function(res){ return res.json()})
 .then(function(res){
  console.log(res)
  document.querySelector('.image1').src = res.sprites.front_default;
  document.querySelector('h1').innerText = res.name;
  document.querySelector('.image2').src = res.sprites.back_default;
  document.querySelector('.image3').src = res.sprites.front_shiny;
  document.querySelector('.image4').src = res.sprites.back_shiny;
  document.querySelector('.types').innerText = res.types.map(type => type.type.name).join(' , ')
 })