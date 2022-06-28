//Type conversion coersion
// console.log('9' + 5)
// console.log(Number('9') + 5)

//strings em numeros
// let string = '123'
// console.log(Number(string))
// let number = 321
// console.log(String(number))

//Contando caracteres e numeros
// let word = 'Paralelepipedo'
// console.log(word.length)
// let number = 1234
// console.log(String(number).length)

//Casas decimais
// let number = 43.3213321
// console.log(number.toFixed(2).replace(".",","))

//Maiusculas e minusculas
// let word = "Programar é bacana"
// console.log(word.toUpperCase())

// let phrase = "Eu quero viver o Amor"
// console.log(phrase.includes("Amor"))

//Separando string
// let phrase = "Eu quero viver o Amor!"
// let myArray = phrase.split(" ")//separa por espaço
// console.log(myArray)
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore)

//Criando array com construtor
// let myArray = new Array('a','b','c')
// console.log(myArray)

//Elementos no Array
// console.log(['a','b','c','d'].length)

//Strings para arrays
// let word = 'manipulacao'
// console.log(Array.from(word))

//Manipulando Arrays
let techs = ['html', 'css', 'js']
techs.push('nodejs') //Acrescenta no final
techs.unshift('sql') //Acrescenta no começo
techs.pop() //remove do final
techs.shift() //remove do começo
console.log(techs.slice(1,3))
techs.splice(1,1)