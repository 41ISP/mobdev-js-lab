const grades = [4,5,3,5,2,4,5,3]
const sumGrades = grades.reduce((acc, grade) => acc+grade, 0)
const averageGrade = sumGrades / grades.length;
console.log('Средний балл: ', averageGrade.toFixed(2))
//
const goodGrades = grades
.filter(grade => grade > 3)
.map(grade => `Оценка: ${grade}`)
console.log('Оценки выше 3: ', goodGrades)
//
const fruits = ['Банан', 'Яблоко', 'Вишня', 'Абрикос', 'груша']
const sortedFruits = fruits.sort((x,y) => x.localeCompare(y))
console.log('Фрукты по алфавиту: ', sortedFruits.join(', '))
//
const products = [
  { name: "Ноутбук", price: 75000 },
  { name: "Мышь", price: 1500 },
  { name: "Монитор", price: 32000 },
  { name: "Клавиатура", price: 3500 },
  { name: "Наушники", price: 8000 }
]
const cheapProducts = products.filter(p => p.price < 10000)
console.log('Дешевле 10К: ', cheapProducts)
const productNames  = products.map(p => p.name)
console.log('Только названия: ', productNames)
const totalCost = products.reduce((acc, p) => acc + p.price,0)
console.log('Суммарная стоимость: ', totalCost)
//
const numbers = [12, 45, 7, 33 ,18]
const hasMoreThan40 = numbers.some(n => n > 40)
const allMoreThan5 = numbers.every(n => n > 5)
console.log('Есть ли число, которое больше 40?', hasMoreThan40)
console.log('Все ли числа, больше 5?', allMoreThan5)