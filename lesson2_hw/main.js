// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr=[10, true, 'string', false, 0, 'hello', 3.14, 8, 'dog', 'cat',];
console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
    title: 'Букварик',
    pageCount: 30,
    genre: 'Хоррор'
}
let book2={
    title: 'JS для новачків за тиждень',
    pageCount: 100,
    genre: 'Комедія'
}
let book3={
    title: 'Як приручити кота',
    pageCount: 30,
    genre: 'Драма'
}
console.log(book1);
console.log(book2);
console.log(book3);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4={
    title: 'Букварик',
    pageCount: 30,
    genre: 'Хоррор',
    authors: [
        {name: 'Іван Федоров1', age:35},
        {name: 'Іван Федоров2', age:36}
    ]
}
let book5={
    title: 'JS для новачків за тиждень',
    pageCount: 100,
    genre: 'Комедія',
    authors: [
        {name: 'Петро Петрович', age:59},
        {name: 'Ігор Ігорович', age:72}
    ]
}
let book6={
    title: 'Як приручити кота',
    pageCount: 30,
    genre: 'Драма',
    authors: [
        {name: 'Олег Собакович', age:18},
        {name: 'Петро Котякович', age:10}
    ]
}
console.log(book4);
console.log(book5);
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {name: 'John', username: 'Jo58', password: 'asqw'},
    {name: 'Ann', username: 'An98', password: 'qw45'},
    {name: 'Oleg', username: 'jooqqw87', password: 'awd84'},
    {name: 'Linda', username: 'Dalin', password: 'asd84rfg'},
    {name: 'Dima', username: 'pwer', password: 'sdfgaf85'},
    {name: 'Oxana', username: 'oxa', password: 'awfkj'},
    {name: 'Marta', username: 'mara', password: 'aeffftgy5'},
    {name: 'Emma', username: 'mam', password: 'asgresghs'},
    {name: 'Den', username: 'llor', password: 'asfsegt4'},
    {name: 'Nick', username: 'kin', password: 'srgttdxb5'}
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=+prompt('1)введіть число');
if (x === 0) {
    console.log('Невірно')
} else {
        console.log('Вірно')
    }
// let a = [1, 0, -3];
// if (a[0]===){
//     console.log()
// }
// if (a[1]===){
//     console.log()
// }
// if (a[2]===){
//     console.log()
// }


// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time=+prompt('2)введіть число від 0 до 59');
if (time>=0 && time<=15){
    console.log('число належить до першої четверті години')
} else if (time>=16 && time<=30){
    console.log('число належить до другої четверті години');
}else if (time>=31 && time<=45) {
    console.log('число належить до третьої четверті години');
}else if (time>=46&& time<=59){
        console.log('число належить до четвертої четверті години');
}else{
    console.log('помилка, введіть число від 0 до 59');
}



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day=+prompt('3)введіть число від 1 до 31');
if (day>=1 && day<=10){
    console.log('це число попадає у першу декаду місяця');
}else if (day>=11 && day<=20){
    console.log('це число попадає у другу декаду місяця');
}else if (day>=11 && day<=20){
    console.log('це число попадає у третю декаду місяця');
}else {
    console.log('помилка, введіть число від 1 до 31');
}
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let dayOfWeek=+prompt('4) ВВедіть порядковий номер дня тижня');
switch (dayOfWeek){
    case 1 :
        console.log('Monday');
        break;
    case 2 :
        console.log('Tuesday');
        break;
    case 3 :
        console.log('Wednesday');
        break;
    case 4 :
        console.log('Thursday');
        break;
    case 5 :
        console.log('Friday');
        break;
    case 6 :
        console.log('Saturday ');
        break;
    case 7 :
        console.log('Sunday');
        break;
    default:
        console.log('ВВедіть число від 1 до 7');
}

// - Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.
let num1=+prompt('введіть перше число');
let num2=+prompt('введіть друге число');
if (num1>num2){
    console.log('перше число більше')
} else if(num1<num2) {
    console.log('друге число більше')
}else {
    console.log('числа рівні')
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//    (хибноподібні, тобто приводиться до false)
let x1=prompt('5) Ведіть значення змінної');
if (x1 === null || x1 === undefined || x1 === false || x1 === 0 && x1 === "" )
    x1= 'default';
console.log(x1);



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>=5){
    console.log(coursesAndDurationArray[0].title,'Супер');
}
if(coursesAndDurationArray[1].monthDuration>=5){
    console.log(coursesAndDurationArray[1].title,'Супер');
}
if(coursesAndDurationArray[2].monthDuration>=5){
    console.log(coursesAndDurationArray[2].title,'Супер');
}
if(coursesAndDurationArray[3].monthDuration>=5){
    console.log(coursesAndDurationArray[3].title,'Супер');
}
if(coursesAndDurationArray[4].monthDuration>=5){
    console.log(coursesAndDurationArray[4].title,'Супер')
}
if(coursesAndDurationArray[5].monthDuration>=5){
    console.log(coursesAndDurationArray[5].title,'Супер')
}



