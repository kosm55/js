// let firstName= 'oleg';
// function sayHello(){
//     console.log(firstName)
// }
// firstName= 'dima'
// sayHello();

//функція повертає кількість повторюваності числа в масиві,
// якщо нема такого , вивести інфо що нема
// function check (arr, number){
//     let rez=0 ;
//     for (const item of arr){
//         if (item===number){
//         rez=rez+1; //rez++;
//         }
//     }
//     return rez >0 ? rez: 'not this number';
// }
// console.log(check ([1,1,2,1,2,33], 2))


// setTimeout(function () {
//     console.log('hi 1');
//     setTimeout(function () {
//         console.log('hi 2');
//         setTimeout(function () {
//             console.log('hi 6');
//         }, 2000);
//         setTimeout(function () {
//             console.log('hi 3');
//             setTimeout(function () {
//                 console.log('hi 4');
//             }, 1000);
//         }, 500);
//     }, 1500);
// }, 2000);

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

// -----------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(posts => {
//
//         let ul= document.querySelector('.posts-list')
//         for (const post of posts) {
//
//         let li=document.createElement('li')
//         li.classList.add('posts-list-item');
//         ul.appendChild(li)
//
//         let span=document.createElement('span')
//         span.classList.add('post-index')
//             span.innerText=`${post.id}`
//         let h4=document.createElement('h4');
//         h4.classList.add('post-title');
//         h4.innerText=`${post.title}`
//         let p=document.createElement('p');
//         p.classList.add('post-text');
//         p.innerText=`${post.body}`
//         let a=document.createElement('a');
//         a.classList.add('post-link')
//             a.innerText='read more'
//             a.href='#'
//         li.append(span, h4, p, a)
//     }
// })

// -----------------------------------------
// let x = 3;
// function fn() {
//     x = 10;
//     return;
//     function x() {}
// }
//
// fn();
// console.log(x);
// // rez 3
// // рандомні імена з масиву
// let name=['alex', 'dima', 'olya', 'ira']
// console.log(name[Math.floor(Math.random()*3)]); // де Math.floor(Math.random()*3)- це індекс масиву рандомний, 3 це останній індекс масиву
// //доступ до 123
// let rurur={
//     name: 'dfhi',
//     info: [9,8, {purp: 'sdhudh', aim: 123}]
// }
// console.log(rurur.info[2].aim)



// рандомні слова зі стрічки довжиною по 6 симовлів
// let alfab='sdfghjklqwertyuiopzxcvbnm';
// let newSrt='';
// while (newSrt.length<6) {
//     ind=alfab[Math.floor(Math.random()*alfab.length)]
//     newSrt+=ind
// }
// console.log(newSrt)

//виведе 10 раз по 10 , бо сет очікує свої 0с, за цей час цикл уже виконався
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 0);
// }

//----
// function wewe(site){
//     sliceSite=site.split('.');
//     return sliceSite[sliceSite.length-1]
// }
//
// console.log(wewe('wwwfi.com'))
//
//
// var a = 90100;
// function someFunc(){
//     if(false){
//         var a = 1;
//     } else {
//         var b = 2;
//     }
//     console.log(b);
//     console.log(a); //(1)
// }
// someFunc();
//
// let filledArray = new Array(5).fill(5);
// console.log(filledArray)

//-------------------
// function getPostById(id){
//     const result ={
//         id,
//         name:'',
//         posts: []
//     }
//     return new Promise((resolve,reject)=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(data=>data.json())
//             .then(users=>{
//                 const foundUser =users.find(user =>user.id===id)
//                 result.name=foundUser.name;
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                     .then(data=>data.json())
//                     .then(posts=>{
//                         result.posts=posts.filter(post=>post.userId===id)
//                         resolve(result)
//                     })
//             })
//     })
//
// }
//
// getPostById(2).then((data=>console.log(data)))


//_______--------------------
//
// class Chart {
//     constructor(height,width, background, hasBorder) {
//         this.height=height;
//         this.width=width;
//         this.background=background;
//         this.hasBorder=hasBorder
//     }
// }
// const chartContent1=new Chart('300px', '50px','red', true)
// const chartContent2=new Chart('200px', '50px','blue', false)
// const chartContent3=new Chart('100px', '50px','green', true)
// const chartContent4=new Chart('250px', '50px','yellow', true)
//
//
// function renderChart(data){
//     const chartsDiv=document.querySelector('.chartsDiv')
//     const chart=document.createElement('div')
//
//     chartsDiv.appendChild(chart)
//     chart.classList.add('chart')
//     chart.style.height=data.height
//     chart.style.width=data.width
//     chart.style.background=data.background
//     if (data.hasBorder){
//         chart.style.border='2px solid black'
//     }
// }
// renderChart(chartContent1)
// renderChart(chartContent2)
// renderChart(chartContent3)
// renderChart(chartContent4)
//---------------------------

//
// class Chart {
//     constructor(height,width, background, hasBorder) {
//         this.height=height;
//         this.width=width;
//         this.background=background;
//         this.hasBorder=hasBorder
//     }
// }
// class ChartClickable extends Chart{
//     isClickable=true;
//     handleClick(){
//         alert('you made click')
//     }
// }
// // const chartContent1=new Chart('300px', '50px','red', false)
// // const chartContent2=new Chart('200px', '50px','blue', false)
// // const chartContent3=new Chart('100px', '50px','green', false)
// // const chartClick=new ChartClickable('250px', '50px','yellow', true)
//
//
// function renderChart(data){
//     const chartsDiv=document.querySelector('.chartsDiv')
//     const chart=document.createElement('div')
//
//     chartsDiv.appendChild(chart)
//     chart.classList.add('chart')
//     chart.style.height=data.height
//     chart.style.width=data.width
//     chart.style.background=data.background
//     if (data.hasBorder){
//         chart.style.border='2px solid black'
//     }
//     if (data.isClickable){
//         chart.addEventListener('click', data.handleClick)
//     }
// }
// // renderChart(chartContent1)
// // renderChart(chartContent2)
// // renderChart(chartContent3)
// // renderChart(chartClick)
//
// renderChart(new Chart('300px', '50px','red', false))
// renderChart(new Chart('200px', '50px','blue', false))
// renderChart(new Chart('100px', '50px','green', false))
// renderChart(new ChartClickable('250px', '50px','yellow', true))
//
// let rickAndMorty=[
//     {
//         "id": 1,
//         "name": "Rick Sanchez",
//         "status": "Alive",
//         "species": "Human",
//         "type": "",
//         "gender": "Male",
//         "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//     },
//     {
//         "id": 2,
//         "name": "Rick Sanchez",
//         "status": "Alive",
//         "species": "Human",
//         "type": "",
//         "gender": "Male",
//         "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
//     }
// ]
//
// const rickAndMortyWithoutQuotes = rickAndMorty.map(character => {
//     const updatedCharacter = {};
//     for (const key in character) {
//         if (typeof character[key] === 'string') {
//             updatedCharacter[key] = character[key].replace(/"/g, ''); // Видаляємо подвійні лапки
//         } else {
//             updatedCharacter[key] = character[key]; // Залишаємо значення як є, якщо воно не є рядком
//         }
//     }
//     return updatedCharacter;
// });
//
// console.log(rickAndMortyWithoutQuotes);

//-------------
// Обертання Строки:
//
//     Створіть функцію, яка приймає строку і повертає обернену версію цієї строки. Наприклад, для вхідної строки "Hello", функція повинна повернути "olleH".
//     Підрахунок Символів:
//
//     Створіть функцію, яка приймає строку і повертає об'єкт, де ключі - це унікальні символи у строкі, а значення - кількість їх зустрічей. Наприклад, для вхідної строки "programming", вихід повинен бути { p: 1, r: 2, o: 1, g: 2, a: 1, m: 1, i: 1, n: 1 }.
// Пошук Найменшого Числа:
//
//     Створіть функцію, яка приймає масив чисел і повертає найменше число у цьому масиві.
//     Паліндром:
//
// Створіть функцію, яка перевіряє, чи є задана строка паліндромом (читається однаково назад і вперед). Наприклад, "level", "radar", "civic" - паліндроми.
//     Генерація Випадкового Пароля:
//
//     Створіть функцію для генерації випадкового пароля. Пароль повинен містити букви верхнього та нижнього регістрів, цифри та спеціальні символи. Довжина пароля - 8-12 символів.
//     FizzBuzz:
//
// Створіть функцію, яка приймає число і виводить "Fizz", якщо число кратне 3, "Buzz", якщо воно кратне 5, і "FizzBuzz", якщо кратне і 3, і 5. В інших випадках виводьте саме число.
//