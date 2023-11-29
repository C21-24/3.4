// Функція "modify Array"
function modifyArray(array) {
    array.unshift("start");
    array.pop();
    array[1] = "modified";
    return array;
}

// Функція arrayOperations
function arrayOperations(array) {
    array.push("end");
    array.shift();
    array.splice(2, 0, "middle");
    return array;
}

// Функція cheekInteger
function checkInteger(number) {
    if (Number.isInteger(number)) {
        return "Число ціле";
    } else {
        return "Число не ціле";
    }
}

// Тестування
let testArray = [0, 1, 2];
console.log(modifyArray(testArray));
console.log(arrayOperations(testArray));
console.log(checkInteger(3.5));
console.log(checkInteger(4));