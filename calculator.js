equation = []; //running array of entries
totallArr = [];
total = 0; //where my equation will go

temp = []; //number currently on screen
final = ''


window.onload = function () {
    var e = document.getElementById('display');
    e.innerHTML='Your equation goes here!';
}


function buttonEval(num){
    var screen = document.getElementById('display')
    if (typeof num === 'number' || num === '.'){
        temp.push(num)
        screen.innerHTML = temp.join('');
        //add number to screen and equation
        console.log(num)
    } else if (num === 'clear'){
        screen.innerHTML = '';
        temp = [];
        equation = [];
        //reset calculator
        console.log('clear')
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
        console.log(equation)
        //return value of stored equation and current equation
    } else {
        equation.push(temp.join(''));
        equation.push(num);
        temp = [];
        console.log(num)
        console.log(equation)
        //add num value to equation (not screen)
    }
}