//
const sentence = 'javascript - это просто!'
const trimmed = sentence.trim() //-air
const capitalized = trimmed.charAt(0).toUpperCase() + trimmed.slice(1)
console.log('Fix: ', capitalized)
//
const lastName = 'Иванов'
const firstName = 'Иван' 
const group = 'ИСР-21'
const averageScore = 4.75
console.log(`Студент: ${lastName} ${firstName}, группа: ${group}, средний балл: ${averageScore}`)
//
const dateStr = '2025 - 03 - 15'
const dateParts = dateStr.split('-')
const formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`
console.log('Дата: ', formattedDate)
//
const jobStr = 'Node.js разработчик'
console.log('Начинается с Node?', jobStr.startsWith('Node'))
console.log('Заканчивается на разработчик?', jobStr.endsWith('разработчик'))
// 
const accountNumber = 67
const formattedAccount = String(accountNumber).padStart(8, '0')
console.log('Номер счёта:', formattedAccount)
