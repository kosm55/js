// setTimeout(()=>{
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//         setTimeout(()=>{
//             console.log(3)
//         },2000)
//     }, 1000);
// }, 1000);

// let promise1= new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log(1111);
//         resolve();
//     },1000)
// });
// let promise2= promise1
//     .then(()=>{
//         new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log(22222);
//                 resolve();
//             },3000);
//         })
//     }
// );
// let promise3= promise2
//     .then((resolve)=> {
//         new Promise(() => {
//             setTimeout(() => {
//                 console.log(555);
//                 resolve();
//             }, 2000)
//         })
//     });

// let x=0;
// setTimeout(()=>{
//     x=5;
// },0);
// console.log(x);


// let counter=-2;
//  new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if (counter<-1){
//             reject('our counter contain minus')
//         }
//         console.log(counter);
//         counter++;
//         resolve(counter);
//
//     },1000)
// })
//     .then((counter2)=>{
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 console.log(counter2);
//                 counter2++;
//                 resolve(counter2);
//             },3000);
//         })
//     })
//     .then((counter3)=> {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter3);
//                 counter3++;
//                 resolve(counter3);
//             }, 2000)
//         })
//     })
//     .catch(reason => {
//      console.log(reason)
//  })


  // fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response=> response.json())
  //   .then(todos=> {
  //       for (const item of todos){
  //           let div=document.createElement('div');
  //           div.innerText= item.id+ ' ' + item.title;
  //           if (item.completed){
  //               div.classList.add('complete');
  //           }
  //           document.body.appendChild(div)
  //       }
  //       return fetch('https://jsonplaceholder.typicode.com/posts')
  //   })
  //   .then(value=>value.json())
  //   .then(value=> console.log(value))

// let resultAll=Promise
//     .all(
//  [
//             fetch('https://jsonplaceholder.typicode.com/todos').then(value=>value.json()),
//             fetch('https://jsonplaceholder.typicode.com/posts').then(value=>value.json())
//         ]
//     );
// // console.log(resultAll)
// resultAll.then(result=>console.log(result))

// async function foobar(){
//     let users= await fetch('https://jsonplaceholder.typicode.com/users')
//         .then(value=>value.json())
//         // .then(value => {
//         //     console.log(value)
//         // })
//     let todos= await fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(value=>value.json())
//         // .then(value => {
//         //     console.log(value)
//         // })
//     console.log(users);
//     console.log(todos);
// }
//
// foobar();



