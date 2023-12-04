// Mendefinisikan URL endpoint API
// const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=2076f2dc';

// // Menggunakan fetch untuk mengambil data dari API
// fetch(apiUrl)
//   .then(response => {
//     // Mengonversi respons ke format JSON
//     return response.json()
//   })
//   .then(data => {
//     // Melakukan sesuatu dengan data yang diterima
//     console.log(data);
//     document.getElementById('title').textContent = data.Title;
//     document.getElementById('actors').textContent = data.Actors;
//   })
//   .catch(error => {
//     // Menangani kesalahan jika terjadi
//     console.error('Error:', error);
//   });


  const namasurah = document.getElementById('namasurah');

  fetch('https://booking.kai.id/api/stations2')
  .then( ( respon ) => respon.json() )
  .then( ( data ) => {
    let cards = '';
    data.forEach(s => {
      cards += showCards(s);
      const movieContainer = document.querySelector('.movie-container');
      movieContainer.innerHTML = cards;
    });
    })
  .catch( ( error ) => console.error( error ) )

  function showCards(s) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">🚈 ${s.name}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">📍 ${s.cityname}</h6>
                    </div>
                </div>
            </div>`
    }