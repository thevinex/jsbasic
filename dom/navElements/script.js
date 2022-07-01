// Navegando pelos elementos
// parentNode parentElement

// const element = document.querySelector('body')
// const element2 = document.querySelector('h1')
// console.log(element.parentElement)
// console.log(element2.parentElement)


// NchildNodes children
// const el = document.querySelector('body')
// console.log(el.childNodes)
// //não leva em conta espeços vazios
// console.log(el.children)
// // leva em consideração espaço vazio
// console.log(el.firstChild)
// // nao leva em consideração espaço vazio
// console.log(el.firstElementChild)

// console.log(el.lastChild)
// console.log(el.lastElementChild)


//nextSibling nextElementSibling
const el = document.querySelector('header')
console.log(el.nextSibling)
console.log(el.nextElementSibling)

console.log(el.previousSibling)
console.log(el.previousElementSibling)