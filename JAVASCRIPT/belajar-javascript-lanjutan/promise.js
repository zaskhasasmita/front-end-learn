// $.ajax({
//     url: 'http://www.omdbapi.com/?=tt3896198&apikey=2076f2dc&s=avengers',
//     success : movies => console.log(movies)
// });

// fetch('http://www.omdbapi.com/?=tt3896198&apikey=2076f2dc&s=avengers')
// .then(response =>  response.json())
// .then(response => console.log(response));

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('janji ditepati!');
//     } else {
//         reject('janji diingkari');
//     }
// });

// janji1
//     .then(hasil => console.log('OK ' + hasil))
//     .catch(error => console.error('NOT OK! ' + error));

//contoh 2
let sukses = true;
const janji2 = new Promise((resolve, reject) => {
    if(sukses) {
        setTimeout(() => {
            resolve('ditepatiiiii');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('tak ditepatiiiiii')
        }, 2000);
    }
});

console.log('mulai');
// janji2.then(()=> console.log(janji2)).catch(()=> console.error(janji2));

janji2
  .finally(()=> console.log('selesai menunggu'))
  .then(response => console.log('OK ' + response))
  .catch(error => console.error('OK ' + error));
console.log('selesai');

// Promise All
let success = true;
const film = new Promise((resolve, reject) => {
  if(success) {
    setTimeout(() => {
      resolve([{
        judul : 'Almuna',
        sutradara : 'zaskha',
        pemeran : 'asep, dadang'
      }])
    }, 1000);
  } else {
    setTimeout(() => {
      reject('Data Film Tidak Ada')
    }, 1000);
  }
});

const cuaca = new Promise((resolve, reject) => {
  if(success) {
    setTimeout(() => {
      resolve([{
        kota : 'Bandung',
        temp : 26,
        konisi : 'cerah berawan'
      }])
    }, 500);
  } else {
    setTimeout(() => {
      reject('Data cuaca tidak ada')
    }, 500);
  }
});

Promise.all([film, cuaca])
  .then(responnya => {
    const [film, cuaca] = responnya;
    console.log(film);
    console.log(cuaca);
  })
