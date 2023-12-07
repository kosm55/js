// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


// let arrNum=[1,2,3,4,5]
// let arrStr=['ww','ee','rr','tt','ff']
// let arrMix=[1,'ee','rr',true, false]
// console.log(arrNum, arrStr, arrMix)



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль

// let arrAdd=[];
//     arrAdd[0]=1;
//     arrAdd[1]= 'true';
//     arrAdd[2]='rrrr'
// console.log(arrAdd)

// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while

// let arr1=[2,17,13,6,22,31,45,66,100,-18]
// let i1=0;
// while (i1<arr1.length){
//     console.log(arr1[i1])
//     i1++;
// }

//     2. перебрати його циклом for

// let arr1=[2,17,13,6,22,31,45,66,100,-18]
// for (i=0; i<arr1.length; i++){
//     console.log(arr1[i])
// }


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let arr1=[2,17,13,6,22,31,45,66,100,-18]
// let i=1;
//     while (i<arr1.length){
//         console.log(arr1[i]);
//         i+=2;
//     }



// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let arr1=[2,3,13,6,22,31,45,66,100,-18]
// for (i=1; i<arr1.length; i+=2){
//     console.log(arr1[i])
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let arr1=[2,3,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arr1.length){
//     if (arr1[i]%2===0){
//     console.log(arr1[i])
//     }
//     i++;
// }


// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let arr1=[2,3,13,6,22,31,45,66,100,-18];
// for (i=0; i<arr1.length; i++) {
//     if (arr1[i]%2===0){
//         console.log(arr1[i])
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"

// let arr1=[2,3,13,6,22,31,45,66,100,-18];
// for (i=0; i<arr1.length; i++){
// if (arr1[i]%3===0){
//             arr1[i]="okten";
//      }
// }
// console.log(arr1)

// 8. вивести масив в зворотньому порядку.

// let arr1=[2,3,13,6,22,31,45,66,100,-18];
// for (i=arr1.length; i>0; i--){
//     arr1[i]=arr1[arr1.length];
// }
// console.log(arr1)

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr2=[2,3,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < arr2.length; i++) {
//     const arr2Element = arr2[i];
//     console.log(arr2Element)
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr=['one', 'two', 'three', 'four', 'fife']
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr=[true, 'two', 155, 'four', 'fife',-600]
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
//     console.log(arrElement)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
// let arr=[true, 'two', 155, 'four', 'fife',-600, false]
// for (let i = 0; i < arr.length; i++)
//         if (typeof arr[i] === "boolean" ) {
//             console.log(arr[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки числові елементи
// let arr=[true, 'two', 155, 'four', 'fife',-600, false]
// for (let i = 0; i < arr.length; i++)
//     if (typeof arr[i]=== "number"){
//         console.log(arr[i])
//     }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки рядкові елементи
// let arr=[true, 'two', 155, 'four', 'fife',-600, false]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]==="string") {
//         console.log(arr[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
// let arr=[];
//
// arr[0]=1;
// arr[1]=true;
// arr[2]='qwersd'
// arr[3]=899
//
// for (let i=0; i<arr.length; i++){
//
// }
// console.log(arr)


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`${'step'} ${i+1}`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`${'step'} ${i+1}`)
//     }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`${'step'} ${i}`)
//     }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i < 100; i+=2) {
//     console.log(`${'step'} ${i+1}`)
//     }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(`${'step'} ${i+1}`)
// }
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books=[
//     { title: 'tit1', page: 200, author: ['jason'], genre: ['science']},
//     {title: 'tit2222', page: 500, author: ['moreti'], genre: ['poem', 'drama']},
//     {title: 'tit33', page: 25, author: ['gote','devon'], genre: ['comedy']},
//     {title: 'tit444444', page: 851, author: ['robert', 'erih'], genre: ['drama']}
// ]
// // -знайти наібльшу книжку.
// let bigestPage=books[0].page;
// for (let i = 0; i < books.length; i++) {
//         if (books[i].page>bigestPage){
//         bigestPage=books[i].page
//     }
// }
// console.log(bigestPage)
//
// // - знайти книжку/ки з найбільшою кількістю жанрів
// let bigestGanre =books[0].genre.length
// for (let i=0; i<books.length; i++){
//     if (books[i].genre.length>bigestGanre){
//         bigestGanre=books[i].genre
//     }
// }
// console.log(bigestGanre)
//
// // - знайти книжку/ки з найдовшою назвою
// let bigestTitle=books[0].title;
// for (let book of books) {
//     if (book.title.length>bigestTitle.length){
//         bigestTitle=book.title
//     }
// }
// console.log(bigestTitle)
// // - знайти книжку/ки які писали 2 автори
//
// let moreBooksAuthors=[];
// for (const book of books) {
//     if (book.author.length === 2){
//         moreBooksAuthors[moreBooksAuthors.length]=book
//     }
// }
// console.log(moreBooksAuthors)
//
// // - знайти книжку/ки які писав 1 автор
// let moreBooksOneAuthor=[];
// for (const book of books) {
//     if (book.author.length === 1){
//         moreBooksOneAuthor[moreBooksOneAuthor.length]=book
//     }
// }
// console.log(moreBooksOneAuthor)
