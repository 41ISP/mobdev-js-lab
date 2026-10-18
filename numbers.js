//
const temperature = 36.6789
console.log("Температура: ", temperature.toFixed(1))
//
const a = 17
const b = 5
console.log("Целочисленное деление: ", Math.floor(a/b))
console.log("Остаток от деления: ", a%b)
//
const randomInt = Math.floor(Math.random() * 10) + 1
console.log("Результат: ", randomInt)
// 
console.log('является ли результатом числом: "100"/5?', isNaN('100'/5))
console.log('является ли результатом числом: "сто"/5?', isNaN('сто'/5))
//
const maxNumber = Math.max(14, -3, 77, 0, -100, 42)
const minNumber = Math.min(14, -3, 77, 0, -100, 42)
console.log('Макс: ', maxNumber)
console.log('Мин: ', minNumber)