// + Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let a ='hello world'
let b='lorem ipsum';
let c= 'javascript is cool'
console.log(a.length, b.length, c.length)


// let str = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i].length); вивидить просто числа , зробити пустий масив куди буде записувати довжину і вивсети цей масив з довжинами, або щось з інедксами зробить щоб виводило "стрінг + його дожину"
// }

// + Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let a1 ='hello world'
let b1='lorem ipsum';
let c1= 'javascript is cool'
console.log(a.toUpperCase(),b.toUpperCase(),c.toUpperCase())


// + Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let a2 ='HELLO WORLD'
let b2='LOREM IPSUM';
let c2= 'JAVASCRIPT IS COOL'
console.log(a.toLowerCase(),b.toLowerCase(),c.toLowerCase())


// + Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   '
console.log(str.trim())

// let str = ' dirty string   '
// console.log(str.replaceAll(' ',''))

// + Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str1 = 'Ревуть воли як ясла повні';
let stringToarray = str1.split(' ')
console.log(stringToarray)

// + є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrNums=[10,8,-7,55,987,-1011,0,1050,0]
   let newArrNums = arrNums.map((value)=>{
        return (value +'')
})
console.log(newArrNums)

// + створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function sortNums(nums,direction){
    return nums.sort((num1, num2)=>{
        if (  direction === 'ascending') {
            return num1-num2
        }else if
        (  direction === 'descending'){
        return num2-num1
    }
    })
}
console.log(sortNums(nums, 'descending'))

// ==========================
// + є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// + відсортувати його за спаданням за monthDuration

let sortCoursesAndDurationArray=coursesAndDurationArray.sort((cours1, cours2)=>{
    return cours1.monthDuration- cours2.monthDuration
})
console.log(sortCoursesAndDurationArray)

// + відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    let filterCoursesAndDurationArray = coursesAndDurationArray.filter((item) => item.monthDuration>5)
        // return true
// })
console.log(filterCoursesAndDurationArray)

// + за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapCoursesAndDurationArray= coursesAndDurationArray.map((value, index) => {
    let newCours= {
        title: value.title,
        monthDuration: value.monthDuration,
        id: index + 1
    }
    //    let newCours={...value, id:index+1}
    return newCours
})
console.log(mapCoursesAndDurationArray)
// =========================
//   +  описати колоду карт (від 6 до туза без джокерів)
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
//
let values=['6','7','8','9','10','jack','queen','king','ace']
let cardSuits =['spade', 'diamond','heart', 'clubs']

let cards=[];

for (const value of values) {
    for (const cardSuit of cardSuits) {
        let color;
        if (cardSuit==='spade' || cardSuit==='clubs'){
            color ='black'
        }else{
            color ='red'
        }
        let card={cardSuit:cardSuit, value:value, color:color}
        cards.push(card)
    }
}
console.log(cards)

//----------------------
// + знайти піковий туз

let findAceSpade=cards.filter(item=>{
    return (item.value==='ace' && item.cardSuit=== 'spade')
})
console.log(findAceSpade)
//----------------------------
// + всі шістки

let findSix=cards.filter(item=>{
    return item.value==='6'
})
console.log(findSix)

//---------------------------
// + всі червоні карти

let redCards= cards.filter(item=>{
    return item.color==='red'
})
console.log(redCards)
//---------------------------
// + всі буби
let findDiamond= cards.filter(item=>{
    return item.cardSuit ==='diamond'
})
console.log(findDiamond)


// + всі трефи від 9 та більше

let findClubsAfterNine = cards.filter(item=>{
    return  ((item.cardSuit==='clubs') && (item.value!=='6' && item.value!=='7' && item.value!=='8'))
})
console.log(findClubsAfterNine)
// =========================
//
//   + Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// 'spade', 'diamond','heart', 'clubs'
let reduceCards = cards.reduce((acumulator, card)=>{
    if (card.cardSuit==='spade'){
        acumulator.spades.push(card)
    }else if (card.cardSuit==='diamond'){
        acumulator.diamonds.push(card)
    }else if (card.cardSuit==='heart'){
        acumulator.hearts.push(card)
    }else {
        acumulator.clubs.push(card)
    }
    return acumulator
    },{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(reduceCards)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css','js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// + написати пошук всіх об'єктів, в який в modules є sass
//виводить об'єкт
for (let coursesArrayElement of coursesArray) {
let filterModulesOfCoursesArray=coursesArrayElement.modules.filter((item)=>{
    for (let item of coursesArrayElement.modules) {
        if (item==='sass'){
            return true
        }
    }
})
    if (filterModulesOfCoursesArray.length>0){
    console.log(coursesArrayElement)
    }
}

//виводить масив об'єктів
// let filterModulesOfCoursesArray=coursesArray.filter((item)=>item.modules.includes('sass'))
//     console.log(filterModulesOfCoursesArray)



//перебір циклом
// for (const coursesArrayElement of coursesArray) {
//     let resCours= coursesArrayElement.modules
//     for (let item of resCours) {
//         if (item==='sass'){
//         console.log(coursesArrayElement)
//         }
//     }
// }


// --написати пошук всіх об'єктів, в який в modules є docker

let filtrDocer= coursesArray.filter(modul=>modul.modules.includes('docker'))
console.log(filtrDocer)
