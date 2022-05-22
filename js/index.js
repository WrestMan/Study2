'use strict';

function factorial(n) {
    let result = n;
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }
    if ( n > 1 ){
        result *= factorial(n-1);
    }
    result = result.toFixed(0);
    return result;
}

console.log(factorial(10));