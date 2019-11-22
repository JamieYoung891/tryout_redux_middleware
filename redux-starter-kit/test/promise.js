// Asynchronous Programming Conventions for RESTful API
// 
// for to regrasp the concept for further study



// ////////// basic function:
// // 
// // to mimic the concept of HTTP request/response

// const prtLtr = nr => setTimeout(
//   () => console.log(nr),
//   500
// );
// prtLtr(1000);



// ////////// callback convention:
// // 
// // a.k.a. callback hell
// // before ES6
// // 
// // using nesting of functions,
// // which complicates code,
// // makes it unreadable

// const prtLtr_Async = (nr, cb) => setTimeout(
//   () => {
//     console.log(nr)
//     cb()
//   },
//   500
// );

// prtLtr_Async(
//   0, () => prtLtr_Async(
//     1, () => prtLtr_Async(
//       2, () => prtLtr_Async(
//         3, () => prtLtr_Async(
//           4, () => { }
//         )
//       )
//     )
//   )
// )



// ////////// promise convention:
// // 
// // ES6 solution of asynchronous programming
// // 
// // better looking than the "callback hell" convention,
// // resulting in much readable code.
// // 
// // ".then" could be used for callback,
// // on ES7, "async" and "await".

// const prtLtr_Prms = nr => {
//   return new Promise(
//     resolve => {
//       setTimeout(() => {
//         console.log(nr);
//         resolve();
//       }, 1000);
//     }
//   )
// }

// // prtLtr_Prms(1)
// // .then(()=>prtLtr_Prms(2))
// // .then(()=>prtLtr_Prms(3))
// // .then(()=>prtLtr_Prms(4))
// // .then(()=>prtLtr_Prms(5))

// async function async_await(){
//   await prtLtr_Prms(1)
//   await prtLtr_Prms(2)
//   await prtLtr_Prms(3)
//   await prtLtr_Prms(4)
//   await prtLtr_Prms(5)
// }

// async_await();