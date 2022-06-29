let family={
    incomes: [2500, 3200, 350.50, 820.30],
    expenses: [320.10, 330.50, 210.15, 150.90]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk >= 0){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()