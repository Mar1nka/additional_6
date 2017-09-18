function zeros(expression) {
    var zeros = 0;
    var counterTwo = 0;
    var counterFive = 0;
    var factorArray = [];

    factorArray = expression.split('*');
    
    for(var i = 0; i < factorArray.length; i++) {
        var number = getNumber(factorArray[i]);
        var counterFactorial = getCounterFactorial(factorArray[i]);
        var isParity = getParity(Number(number));

        var numberInfactorial = [];

        numberInFactorial = getNumberInFactorial(number, isParity, counterFactorial);

        var counterZeros = [];

        var counterZeros = getZeros(numberInFactorial);
        counterTwo += counterZeros[0];
        counterFive += counterZeros[1];
    }

    if(counterFive <= counterTwo) {
        zeros = counterFive;
    } else {
        zeros = counterTwo;
    }

    return zeros;
}

function getNumber(factor) {
    var number = [];

    for (var i = 0; i < factor.length; i++) {
        
        if (factor[i] === '!') {
            break;
        } else {
            number.push(factor[i]);
        }
    }
    return number.join('');
}

function getCounterFactorial(factor) {
    var counter = 0;
    
    for(var i = 0; i < factor.length; i++) {
        if (factor[i] === '!') {
            counter++;
        }
    }

    return counter;
}

function getParity(number) {
    var isParity;

    if((number % 2) === 0) {
       isParity = true;
    } else {
        isParity = false;
    }

    return isParity;
}

function getNumberInFactorial(number, isParity, counterFactorial){
    var step = 1;
    var startNumber = 1;

    var numberInFactorial = [];

    if(isParity === true) {
        startNumber = 2;
    }

    if(counterFactorial === 2) {
        step = 2;
    }

    for(var i = startNumber; i <= number; ) {
        numberInFactorial.push(i);
        i += step;
    }

    return numberInFactorial;
}

function getZeros(numberInFactorial) {
    var counterZeros = [];
    var counterTwo = 0;
    var counterFive = 0;

    for(var i = 0; i < numberInFactorial.length; i++) {
        var number = numberInFactorial[i];

        while(true) {
            if((number % 2) === 0) {
                counterTwo++;
                number  /= 2;
            } else {
                break;
            }
        }

        number = numberInFactorial[i];

        while(true) {
            if((number % 5) === 0) {
                counterFive++;
                number  /= 5;
            } else {
                break;
            }
        }
    }

    counterZeros.push(counterTwo);
    counterZeros.push(counterFive);

    return counterZeros;
}
module.exports = zeros;
