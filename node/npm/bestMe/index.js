const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido?',
    'O que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?',
]

const ask = (index = 0) =>{
    process.stdout.write('\n\n' + questions[index] + " > ")
}

ask()
const answers = []

//on fica ouvindo, roda a função enquanto dados são inseridos
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana Vinícius!

    O que voce aprendeu hoje foi:
    ${answers[0]}

    O que te aborrece e voce poderia melhorar foi:
    ${answers[1]}

    O que te deixou feliz hoje:
    ${answers[2]}

    Voce ajudou ${answers[3]} pessoas hoje!!

    Volte amanha para mais reflexoes
    `)
})