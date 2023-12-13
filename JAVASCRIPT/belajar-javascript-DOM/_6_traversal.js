//Event Handling (ini masih materi dom selection dan manipulation)
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// })


//DOM Traversal
const close = document.querySelectorAll('.close');

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
//         // close[i].parentElement.style.display = 'none'
//         e.target.parentElement.style.display = 'none'
//     })
// }

close.forEach(el => {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});


// metode lainya : 
// 1. parentNode
// 2. parentElement
// 3. nextSibling
// 4. nextElementSibling
// 5. previousSibling
// 6. previousElementSibling