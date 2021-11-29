let input = document.getElementById("input")
let card = document.getElementById("card")
let cardContainer = document.getElementById("card-container")
let url = "https://pokeapi.co/api/v2/pokemon/"
let searchBtn = document.getElementById("search").addEventListener("click",(e)=>{
    e.preventDefault()
    fetchErryting()
})




async function fetchErryting(){
   try {
    let response =  await fetch(url+input.value)
    let data =      await response.json()
    console.log(data)
    
    card.innerHTML += `<h2>${data.name}</h2>
    <img src=\"${data.sprites.front_default}" alt=""\>
    <p id="abilities" >abilities</p>
    `
    let abilities=document.getElementById("abilities").addEventListener("click",()=>{
       card.innerHTML += `<li>${data.abilities[0]}</li>`
    })
    cardContainer +=`<li>${card}</lil>`
   } catch (error) {
       console.log("error!")
       card.innerHTML += `<p>this pokemon doesn't exist bruhh</p>`

   }
}