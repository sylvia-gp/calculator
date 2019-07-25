equation = [];
temp = [];
finalNum = '';


function screenText(text) {
    var screen = document.getElementById('display')
    screen.innerHTML = text
}

function numberVal(num){
    temp.push(num);
    screenText(temp.join(''));
}

function operatorVal(num){
    equation.push(temp.join(''))
    equation.push(num)
    temp = []
}

function equalsVal(num){
    finalNum = temp.join('')
    equation.push(finalNum)
    temp = []
}

function buttonEval(num){
    var screen = document.getElementById('display')
    if (typeof num === 'number' || num === '.'){
        numberVal(num)
    } else if (num === '-' || num === '+' || num === '/' || num === '*'){
        operatorVal(num)
    } else if (num === '=') {
        equalsVal(num)
        firstNum = Number(equation[0])
        for(var i=1;i<equation.length;i++){
            var operator = equation[i]
            var secondVal = Number(equation[i+1]);
            if (operator === '+'){
                firstNum += secondVal
                console.log(firstNum)
            } else if (operator === '-'){
                firstNum -= secondVal
            } else if (operator === '*'){
                firstNum *= secondVal
            } else if (operator === '/'){
                firstNum /= secondVal
            } else {
                screen.innerHTML = firstNum;
            }
        }
    } else if (num === 'clear'){
        screen.innerHTML = '';
        temp = [];
        equation = [];
    }
}