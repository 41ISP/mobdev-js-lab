const book = 
{
    title: 'Мастер и Маргарита',
    author: 'Булгаков М.А.',
    year: 1967,
    pages: 480,
    available: true,
    info() {
        return `«${this.title}», ${this.author}, ${this.year} г., ${this.pages} стр.`;
    }
};
console.log(book.info());
//
const { title, author, rating = 0 } = book;
console.log('Название: ', title);
console.log('Автор: ', author);
console.log('Рейтинг: ', rating);
//
const students = 
[
    { 
        name: "Анна", grade: 4.8, passed: true 
    },
    { 
        name: "Борис", grade: 2.9, passed: false 
    },
    { 
        name: "Вера", grade: 3.5, passed: true 
    },
    { 
        name: "Григорий", grade: 4.1, passed: true 
    },
    { 
        name: "Дарья", grade: 2.5, passed: false 
    },
]

const passedStudents = students
    .filter(s => s.passed)
    .map(s => s.name);
console.log('Сдавшие студенты:', passedStudents);

const bestStudent = students.find(s => s.grade > 4.5);
console.log('Студент с оценкой > 4.5 :', bestStudent.name);

const avgGroupGrade = students.reduce((acc, s) => acc + s.grade, 0) / students.length;
console.log('Средний балл группы: ', avgGroupGrade.toFixed(2));
//
function mergeUsers(user1, user2) 
{
    return { ...user1, ...user2 };
}

const u1 = 
{ 
    name: 'Иван', age: 20, city: 'Казань' 
}
const u2 = 
{ 
    name: 'Иван Петров', email: 'ivan@mail.ru', city: 'Москва' 
}
const merged = mergeUsers(u1, u2);
console.log('Объединённый пользователь: ', merged);
//
function countByField(arr, field) 
{
    return arr.reduce((acc, obj) => 
        {
            const value = obj[field]; 
            if (acc[value]) 
            {
                acc[value] += 1; 
            } else 
            {
                acc[value] = 1;  
            }
        return acc;
        }, {}); 
}

const passedStats = countByField(students, 'passed');
console.log('Статистика по сдаче: ', passedStats); 