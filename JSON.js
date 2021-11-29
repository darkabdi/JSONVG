let input = document.getElementById("input")
let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum"
let searchBtn = document.getElementById("search",(e)=>{
e.preventDefault()
fetchErryting()
})




async function fetchErryting(e){
    e.preventDefault()
    let response = await fetch(url+input.value)
    let data = response.json()

    console.log(data)
}