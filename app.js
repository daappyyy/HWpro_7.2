// Створити функцію для розрахунку добутку двох чисел, що викликається так: 
// name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function multiplication(firstNum){
    return function(secondNum){
        return firstNum * secondNum;
    }
}

const result = multiplication(5)(2);
console.log(`Result: ${result}`);