


const topScreen = document.querySelector('.top-screen')
const bottomScreen = document.querySelector('.bottom-screen')
let number1 = '';
let number2 = '';
let answer;
let operator = [];
let nextOperator
let firstOperatorClicked = false

function add(x, y) {
    return parseFloat(x) + parseFloat(y)
}

function subctract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}


function operate (operator, x, y) {
    if (operator == '+') {
        return add(x, y)
    } else if (operator == '-') {
        return subctract(x, y)
    } else if (operator == '×') {
        return multiply(x, y)
    } else {
        return divide(x, y)
    }
}


function beginCalculations (operator, x, y) {
    let userInput = bottomScreen.textContent
    console.log(userInput)
}

function updateDisplay (answer = undefined) {
    if (number2 == '') {
        topScreen.textContent = `${number1+operator}`
        bottomScreen.textContent = ''
        console.log('apple')
    } else {
        answer = operate(operator[0], number1, number2)
        operator.splice(0,1)
        number1 = answer
        topScreen.textContent = number1+operator[0]
        bottomScreen.textContent = ''
        number2 = ''
    }


}

const equalBtn = document.querySelector('.equal')

equalBtn.addEventListener('click', beginCalculations)


const digitBtns = document.querySelectorAll('.digit')
const digitBtnsArray = Array.from(digitBtns)

digitBtnsArray.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        // if (firstOperatorClicked) {
        //     number2 += e.target.textContent
        // } else number1 += e.target.textContent

        bottomScreen.textContent += e.target.textContent
    } )
})


const operatorBtns = document.querySelectorAll('.operator')
const operatorBtnsArray = Array.from(operatorBtns)

operatorBtnsArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        operator.push(e.target.textContent)

        if (!firstOperatorClicked) {
            number1 = bottomScreen.textContent
            if(number1 == '') number1 = 0
        } else {
            number2 = bottomScreen.textContent
            if (number2 == '') number2 = 0
        }

        console.log(number1 + '|' + number2 + '|' + operator[0])
        updateDisplay()

        firstOperatorClicked = true

        // if (number1 == '') { number1 = 0 }
        // else if (number2 == '') { number2 = 0}

        
        // if (number1 == undefined) {
        //     if (bottomScreen.textContent == '') {
        //         number1 = 0
        //     } else number1 = bottomScreen.textContent
        // } else {
        //     if (bottomScreen.textContent == '') {
        //         number2 = 0
        //     } else number2 = bottomScreen.textContent

        //     beginCalculations(operator, number1, number2)
        // }

        
        
    })
})