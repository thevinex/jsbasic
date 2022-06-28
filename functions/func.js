// //declaração da funcao
// function createPhrases(){
//     console.log('Funcao')
// }

// //execute, run, call, invoke
// createPhrases()




//function expression -- function anonymous
// const sum = function(number1, number2){
//     console.log(number1 + number2)
// }
// sum(2,3)
// sum(5,5)
// sum(10,3.14)
// let number11 = 34
// let number22 = 25
// sum(number11,number22)

// const sum = function(number1, number2){
//     total = number1 + number2
//     return total
// }

// let number1 = 34
// let number2 = 25

// console.log(`soma é ${sum(number1,number2)}`)
// console.log(total)

//function scope
// let subject = 'create video'

// function createThink(subject){
//     subject = 'study'
//     return subject
// }
// console.log(createThink(subject))
// console.log(subject)


//function hosisting
// sayMyName()

// function sayMyName(){
//     console.log('Vinicius')
// }
    
//Arrow function
// const sayMyName = (name) => {
//     console.log(name)
// }
// sayMyName('Vinicius')

//Callback function
// function sayMyName(name){
//     console.log('antes de executar a funcao callback')
//     name()
//     console.log('depois de executar callback')
// }

// sayMyName(() => {
//         console.log('estou em callback')
// })

//Funções Construtoras
function Person(name) {
    this.name = name
    this.walk = function (){
        return "andando"
    }
}

const vinicius = new Person("vinicius")
const joao = new Person("joao")
console.log(vinicius)
console.log(vinicius.walk())
console.log(joao)
console.log(joao.walk())