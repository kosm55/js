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


setTimeout(function () {
    console.log('hi 1');
    setTimeout(function () {
        console.log('hi 2');
        setTimeout(function () {
            console.log('hi 6');
        }, 2000);
        setTimeout(function () {
            console.log('hi 3');
            setTimeout(function () {
                console.log('hi 4');
            }, 1000);
        }, 500);
    }, 1500);
}, 2000);