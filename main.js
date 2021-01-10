


const btn = document.querySelector("button").addEventListener("click", getJoke);

function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers:{
      'Accept' : 'application/json'
    }
  }).then(data => data.json())
  .then(obj => {
 const quote = document.querySelector("p");
 quote.innerHTML = obj.joke;
 
let rdm = Math.floor(Math.random() * 3) + 1;
   
   let img = document.querySelector("img");
   
   img.src = `img${rdm}.png`
  })
}