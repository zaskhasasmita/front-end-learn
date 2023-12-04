// GPT PROMPT : "apa itu promise dalam javascript?"

// promise itu buat nunjukin hasil sukses atau gagal dalam operasi asinkron.
// promise dipake buat ngatasin masalah callback hell agar kode lebih mudah dibaca dan dikelola

//// status promise ////
// 1. Pending   : status awal waktu promise lagi nunggu hasil
// 2. Fulfilled : status ketika operasi asinkron selesai sukses
// 3. rejected  : status ketika operasi asinkron error gagal

//// Cara bikin promise ////
// caranya yaitu pake constructor `Promise`.
let myPromise = new Promise();

// cunstructor ini punya argumen yang didalamnya ada fungsi anonim
let myPromise2 = new Promise(function(){});

// fungsi nya ini punya 2 parameter, resolve dan reject
let myPromise3 = new Promise(function(resolve, reject){});

// contoh :

let promiseKu = new Promise(function(resolve, reject){
    //suatu operasi asinkron
    let success = true;
    if(success) {
        resolve('sukses!');
    } else {
        reject('gagal!');
    }
});

// setelah promise kita selesai, kita bisa pake metode .then() buat nanganin hasil sukses
// kalo menangani hasil gagal, pake .catch()
// contoh penggunaannya
promiseKuContoh.then().catch();

promiseKu
.then(function(result){ console.log(result) })
.catch(function(error){ console.log(error) });

//chaining Promise
// bisa di chain buat ngelakuin tugas tugas berurutan satu sama lain 
function fetchData() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            console.log('data fetched');
            resolve('data selesai di ambil');
        }, 2000);
    });
}

fetchData
.then(function (result) {
    console.log(result);
    return 'proses selanjutnya';
})
.then(function(result){
    console.log(result);
})
.catch(function(error) {
    console.error(error);
}); 


// promise all
// Promise.all()
// promise.all ini bisa menangani sejumlah promise secara bersamaan.
// ketika semuanya selesai, promise hasil nya akan dijalankan 
// contoh :

let promise1 = Promise.resolve('Promise 1 Selesai');
let promise2 = Promise(function(resolve) {
    setTimeout(() => {
        resolve('promise 2 selesai');
    }, 2000);
});

Promise.all([promise1, promise2])
.then(function (results) {
    console.log(results);  // ["Promise 1 selesai", "Promise 2 selesai"]
})
.catch(function(error) {
    console.error(error);
})