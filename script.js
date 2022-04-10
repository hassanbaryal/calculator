


const topScreen = document.querySelector('.top-screen')
const bottomScreen = document.querySelector('.bottom-screen')

function add(x, y) {
    return x + y
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
    return
}


function updateScreen (e) {
    bottomScreen.textContent += e.target.textContent
}

const equalBtn = document.querySelector('.equal')

// equalBtn.addEventListener('click')


const buttons = document.querySelectorAll('.character')
const buttonsArray = Array.from(buttons)

buttonsArray.forEach((button) => {
    button.addEventListener('click', function (e) {
        updateScreen(e)
    } )
})