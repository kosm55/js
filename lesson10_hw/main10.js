//+ Стоврити форму з трьома полями для name,sruname,age та кнопкою.
//+ При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
//+ Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form= document.createElement('form')
let inputName=document.createElement('input')
inputName.type='text';
inputName.name='user_name';
inputName.placeholder='user name';
let inputSurname= document.createElement('input')
inputSurname.type='text';
inputSurname.name='user_surname'
inputSurname.placeholder='user surname'
let button=document.createElement('input')
button.type='submit';
button.value='add user';
let createUser=document.createElement('div')
form.addEventListener('click', function (ev){
    ev.preventDefault();
    createUser.innerText=`${inputName.value} ${inputSurname.value}`;
})
document.body.appendChild(createUser)
form.append(inputName, inputSurname, button)
document.body.appendChild(form)



// ==========================
// +є сторінка, на якій є блок, я кому знаходиьтся цифра.
//+ написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let block=document.createElement('div')
block.style.width='200px';
block.style.height='200px';
block.style.background='red';
block.style.textAlign='center';

window.onload=function (){
    block.innerText=localStorage.getItem('number') || 0;
    newNumber= parseInt(block.innerText) + 1
    block.innerText=newNumber
    localStorage.setItem('number', newNumber)
}
document.body.appendChild(block)



// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let arr=[{}, 1,2,3,4,5,6,7,8,10]
// let but1=document.createElement('input')
// but1.type='submit'
// but1.value='previous';
// let but2=document.createElement('input')
// but2.type='submit'
// but2.value='next';
// window.addEventListener('load',function (ev){
//     ev.preventDefault()
//     // let div= document.createElement('div')
//     for (let i = 0; i < 5 && i<arr.length; i++) {
//       // div.innerText=arr[i]
//         document.write(arr[i])
//     }
// })
// but1.addEventListener('click', function (ev){
//     ev.preventDefault()
//     document.write(arr[i-1], )
// })
// but2.addEventListener('click', function (ev){
//     ev.preventDefault();
//     document.write(arr[i+1])
// })
// document.body.append(but1, but2)

//===========================
// + Створити довільний елемент з id = text та створити кнопку.
// + Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let div= document.createElement('div')
div.setAttribute('id', 'text')
div.style.width='50px'
div.style.height='50px'
div.style.background='blue'
let but= document.createElement('button')
but.innerText='delete div'

but.onclick=function (){
    let del=document.getElementById('text');
    del.remove()
}

document.body.append(div,but)



//  +   - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//  +   При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//  +  та повідомити про це користувача

let inputAge=document.createElement('input')
inputAge.type='text';
inputAge.name='age'
let button=document.createElement('input')
button.type='submit';
button.value='check age';
 button.addEventListener('click', function (ev){
    ev.preventDefault();
    if ( `${inputAge.value}` < 18) {
        document.write('your age: less than 18')
    }else {
        document.write('your age : more than 18')
    }
 })

document.body.append(inputAge, button);




// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається