function transformDegree(degree){
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celciusExists && !fahrenheitExists){
        throw new Error('Grau inexistente')
    }

    let updatedDegree = Number(degree.toUpperCase().replace('F',''))
    let form = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celciusExists){
        updatedDegree = Number(degree.toUpperCase().replace('C',''))
        form = celcius => celcius * 9/5 + 32
        degreeSign = 'F'
    }

    return form(updatedDegree) + degreeSign
}

try{
    console.log(transformDegree('10C'))
} catch (error){
    console.log(error.message)
}