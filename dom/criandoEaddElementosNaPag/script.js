// Eventos
// function print(){
//     console.log('print')
// }

// const input = document.querySelector('input')

// input.onkeydown = function(){
//     console.log('rodei')
// }

// input.onkeyup = function(){
//     console.log('rodei')
// }


// Eventos via JS
const h1 = document.querySelector('h1')
//primeiro argumento, tipo do evento
//segundo argumento, atalho para chamar
//h1.addEventListener('click',print)

h1.onClick = print
function print(){
    console.log('print')
}

h1.onclick = function(){
    console.log('outro momento')
}