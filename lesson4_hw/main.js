// + створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let a=10;
let b=20
function rectangleSquare (widht, lenght){
    let res= widht * lenght;
    return res
}
let sRectangle =rectangleSquare(a,b)
console.log(sRectangle)

// + створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare (radius){
    let res= 2 * radius * radius * Math.PI;
    return res
}
let sCircle=circleSquare(1);
console.log(sCircle)

// + створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function  cylinderSquare (height,radius){
    let res = 2 * radius * height * Math.PI;
    return res
}
let sCylinder = cylinderSquare(2,3)
console.log(sCylinder)


// + створити функцію яка приймає масив та виводить кожен його елемент

function createArr(array){
    for (const item of array) {
        // console.log(item)
        document.write(item)
    }
}
createArr([1,'text', 2 , true, 10, 0])

// + створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createText(text){
        document.write(`<p>${text}</p>`)
}
createText('some text')

// + створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUlWithLi3(text){
    document.write(`<ul>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`)
}

createUlWithLi3('some description_1')

// + створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlLi(text1, numb){
    document.write(`<ul>`)
    for (let i = 0; i < numb; i++) {
        document.write(`<li>${text1}</li>`)
    }
    document.write(`</ul>`)
}
createUlLi('some description_2', 5)

// + створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createArr1(array){
    document.write(`<ul>`)
    for (const item of array) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

createArr1([1,'text',true,10 ,12])


// + створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let users=[
    {id:1, name:'petro', age:30},
    {id:2, name:'nina', age:32},
    {id:3, name:'igor', age:28},
]
function infoUsers(arrUser){
    for (const item of arrUser) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)

    }
}
infoUsers(users)

// + створити функцію яка повертає найменьше число з масиву

function smallNumber(array){
    let resMin=array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]<resMin){
            resMin=array[i]
        }
    }
    return resMin
}

let minNumb= smallNumber([1,0,5,99,-100])
console.log(minNumb)

// + створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr){
    let res =0
    for (let i = 0; i < arr.length; i++) {
        res=res+ arr[i]
    }
    return res
}
let resultSum= sum([1,2,10]);
console.log(resultSum)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44].


function swap(arr,index1,index2){
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}
let resSwap= swap([11,22,33,44],0,3)
console.log(resSwap)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH,currencyValues,exchangeCurrency){

    let currency;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency ) {
            currency= currencyValues[i].value

        }
    }
    let resEx = sumUAH / currency;

    return resEx
}
let sumExchange= exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD');
console.log(sumExchange)