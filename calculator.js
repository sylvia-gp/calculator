equation = [];
total = 0;

temp = '';

function buttonEval(num){
    if (typeof num === 'number' || num === '.'){
        //add number to screen and equation
        console.log(num)
    } else if (num === 'clear'){
        //reset calculator
        console.log('clear')
    } else if (num === '=') {
        //return value of stored equation and current equation
    } else {
        //add num value to equation (not screen)
    }
}