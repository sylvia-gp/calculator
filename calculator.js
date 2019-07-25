equation = [];
temp = [];
finalNum = '';
answer = ''


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

function equalsVal(){
    finalNum = temp.join('')
    equation.push(finalNum)
    temp = []
}

function clearVal(){
    screenText('')
    temp = []
    equation = []
}

function totalVal(){
    firstNum = Number(equation[0])
    for (i=1;i<equation.length;i++){
        secondVal = Number(equation[i+1])
        if (equation[i] === '+'){
           var total = (firstNum += secondVal)
        } else if (equation[i] === '-'){
            total = (firstNum += secondVal)
        } else if (equation[i] === '/'){
            total = (firstNum /= secondVal)
        } else if (equation[i] === '*'){
            total = (firstNum *= secondVal)
        }
    } screenText(total)
}

function buttonEval(num){
    var screen = document.getElementById('display')
    if (typeof num === 'number' || num === '.'){
        numberVal(num)
    } else if (num === '-' || num === '+' || num === '/' || num === '*'){
        operatorVal(num)
    } else if (num === '=') {
        equalsVal(num)
        totalVal()
    } else if (num === 'clear'){
        clearVal()
    }
}