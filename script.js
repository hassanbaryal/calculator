


const topScreen = document.querySelector('.top-screen')
const bottomScreen = document.querySelector('.bottom-screen')
let number1 = '';
let number2 = '';
let answer;
let equalsClicked = false;
let operator = [];
let operatorClicked = false
let decimalClicked = false

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

function updateDisplay () {
    decimalBtn.disabled = false
    // if number 2 has not been input yet
    if (!operatorClicked) {
        topScreen.textContent = `${number1+operator}`
        bottomScreen.textContent = ''
    } else if (equalsClicked) {
        answer = operate(operator[0], number1, number2)
        topScreen.textContent = number1+operator[0]+number2+'='
        bottomScreen.textContent = answer
        number1 = answer
        number2 = ''
        operator.pop()
        operatorClicked = false
    } else {
        answer = operate(operator[0], number1, number2)
        //splice the previous operator
        operator.splice(0,1)
        number1 = answer
        topScreen.textContent = number1+operator[0]
        bottomScreen.textContent = ''
        number2 = ''
    }


}




const digitBtns = document.querySelectorAll('.digit')
const digitBtnsArray = Array.from(digitBtns)

digitBtnsArray.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        bottomScreen.textContent += e.target.textContent
    } )
})


const operatorBtns = document.querySelectorAll('.operator')
const operatorBtnsArray = Array.from(operatorBtns)

operatorBtnsArray.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        //if the display area contains nothing, does not execute
        if (!bottomScreen.textContent == '') {

            operator.push(e.target.textContent)
            // grab users input and stores it
            // if operator is clicked for the first time, input is stored in number1
            if (!operatorClicked) {
                number1 = bottomScreen.textContent
            } else {
                number2 = bottomScreen.textContent
            }
            updateDisplay()

            operatorClicked = true
        }
        
        
    })
})


const equalBtn = document.querySelector('.equal')

equalBtn.addEventListener('click', () => {
    if (operatorClicked && !bottomScreen.textContent == '') {
        equalsClicked = true
        number2 = bottomScreen.textContent
        updateDisplay()
        equalsClicked = false
    }
})

const decimalBtn = document.querySelector('.decimal')

decimalBtn.addEventListener('click', (e) => {
    if (!e.target.disabled)
    e.target.disabled = true
    if (bottomScreen.textContent == '') {
        bottomScreen.textContent += '0.'
    } else bottomScreen.textContent += '.'
})