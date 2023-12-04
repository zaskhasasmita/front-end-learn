//// https://chat.openai.com/share/eca2ad1d-71c0-448e-b3ba-e75ceeed68f1


// GPT PROMPT : "apakah ada contoh untuk latihan saya supaya saya bisa benar benar memahami lagi?"

////// Promise Dasar
// Buatlah fungsi yang mengembalikan Promise sederhana 
// yang menunggu selama beberapa detik sebelum memenuhi atau menolak. 
// Gunakan setTimeout untuk meniru operasi asinkron.

// function simplePromise(success) {
//     let promise = new Promise(function(resolve, reject) {
//        if(success) {
//         resolve('suksesss');
//        } else {
//         reject('gagalll');
//        }
//     });
//     return promise;
// }


// console.log('mulai');
// simplePromise(true)
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.error(error);
// });
// console.log('sekesa');


// //// Chaining Promise
// // buat dua atau lebih fungsi yang ngembaliin nilai promise 
// // dan gabungkan dengan chainning
// function stepOne() {
//     return new Promise( function(resolve) {
//         resolve('step 1 berhasil');
//     });
// }
// function stepTwo() {
//     return new Promise(function(resolve) {
//         resolve('step 2 berhasil');
//     }); 
// }
// //chaining
// stepOne()
// .then(function(result) {
//     console.log(result);
//     return stepTwo();
// })
// .then(function(result) {
//     console.log(result);
// })
// .catch(function(error) {
//     console.error(error);
// })

// //// Promise all

// let prom1 =  Promise.resolve('prom ke 1 selesai');
// let prom2 = new Promise(function(resolve) {
//     resolve('prom ke 2 selesai');
// });

// Promise.all([prom1, prom2])
// .then(function(results) {
//     console.log(results);
// })
// .catch(function(error) {
//     console.error(error);
// })


    function promise1() {
        return new Promise(function (resolve) {
            setTimeout(function () {
            resolve("Promise 1 selesai");
            }, 1000);
        });
    }
    function promise2() {
        return new Promise(function (resolve) {
            setTimeout(function () {
            resolve("Promise 2 selesai");
            }, 2000);
        });
    } 
  
  Promise.all([promise1(), promise2()])
    .then(function (results) {
      console.log(results);
    })
    .catch(function (error) {
      console.error(error);
    });