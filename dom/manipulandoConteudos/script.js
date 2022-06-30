//manipulando conteudo
// textcontent
const element = document.querySelector('input')

// element.textContent += ' Ola, devs!'
// element.innerText = 'Ola, devs!'
// element.innerHTML = 'Ola, devs! <small>!!!</small>'
// element.value = "outro valor"

const header = document.querySelector('header')
header.setAttribute('id','header')
const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))