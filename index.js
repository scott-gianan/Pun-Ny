'use strict';
let punchline = '';
const api = 'https://official-joke-api.appspot.com/jokes/random';

async function fetchJoke() {
    let joke = await fetch(api);
    let responseJoke = await joke.json();
    return responseJoke;
}


fetchJoke()
    .then(data => {
        document.querySelector('#joke-setup').textContent = data.setup;
        punchline = data.punchline;
    });

function revealPunchline(){
    document.querySelector('#joke-punchline').textContent = punchline;
}

function getAnotherJoke(){
    window.location.reload();
}