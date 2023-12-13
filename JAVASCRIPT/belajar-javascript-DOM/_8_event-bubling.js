// //DOM Traversal
// const close = document.querySelectorAll('.close');
// close.forEach(el => {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault()
//         e.stopPropagation()
//     })
// });

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function(e) {
//         alert(`card ok`)
//     })
// })



const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none'
        e.preventDefault()
    }
})