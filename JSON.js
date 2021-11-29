let input = document.getElementById("input")
let optionName = document.getElementById("color-name")
let card = document.getElementById("card")
let cardContainer = document.getElementById("card-container")
let url = "https://pokeapi.co/api/v2/pokemon/"
let searchBtn = document.getElementById("search").addEventListener("click",(e)=>{
    e.preventDefault()
   if (optionName.value == "name"){
       fetchName()
   }
   else fetchColour()
})





async function fetchName(){

   try {
    let response =  await fetch(url+input.value)
    let data =      await response.json()
    console.log(data)
    card.innerHTML = `<h2>${data.name}</h2>
    <img src=\"${data.sprites.front_default}" alt=""\>`
    cardContainer = card
   } catch (error) {
       console.log("error!")
       card.innerHTML += `<p>this pokemon doesn't exist bruhh</p>`

   }
}

async function fetchColour(){
    try {
        let response =  await fetch(`https://pokeapi.co/api/v2/pokemon-color/${input.value}/`)
        let data =      await response.json()
        console.log(data.pokemon_species)
        cardHTml=""
        for (let poke of data.pokemon_species ){
            cardHTml = `<li>${poke.name}</li>`
            cardContainer.innerHTML +=cardHTml
        }
       console.log(poke.name)
        
       } catch (error) {
           console.log("error!")
        }
}