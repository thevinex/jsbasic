// Criando e adicionando elementos
// createElement
// const div = document.createElement('div')
// div.innerText = 'Ola, devs'

// // append prepend
// const body = document.querySelector('body')
// //adiciona antes
// body.prepend(div)
// //adiciona depois
// body.append(div)



const div = document.createElement('div')
div.innerText = 'Olá, devs'
// insertBefore
const body = document.querySelector('body')
const script = body.querySelector('script')
//body é a div pai, div é a nova, antes do script
body.insertBefore(div,script)
// Para after, utilizar .nextSibling