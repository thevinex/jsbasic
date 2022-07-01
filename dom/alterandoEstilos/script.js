// Alterando Estilos
const element = document.querySelector('body')

//element.style.backgroundColor = '#f9f3d2'

// Alterando estilos
// ClassList

element.classList.add('active','green')
console.log(element.classList)
element.classList.remove('active')
//toggle = caso tenha, remove ou caso nao tenha, coloca
element.classList.toggle('active')
