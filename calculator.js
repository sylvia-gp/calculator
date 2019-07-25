equation = [];
total = 0;
temp = [];

function screenText(text) {
    var screen = document.getElementById('display')
    screen.innerHTML = text
}

function buttonEval(num){
    var screen = document.getElementById('display')
    if (typeof num === 'number' || num === '.'){
        temp.push(num)
        screen.innerHTML = temp.join('');
    } else if (num === 'clear'){
        screen.innerHTML = '';
        temp = [];
        equation = [];
    } else if (num === '=') {
        final = temp.join('')
        equation.push(final);
        temp = [];
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
    } else {
        equation.push(temp.join(''));
        equation.push(num);
        temp = [];
    }
}