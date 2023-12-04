// cara mendengarkan event :
// [1] Event Handler
// - inline HTML Attribute ->  on<event>
// - Element Method
// [2] addEventListener()


// [1] Event Handler
// onclick=""
const p3 = document.querySelector('.p3');
function ubahWarnaP3() {
    p3.style.backgroundColor ='lightBlue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;
function ubahWarnaP2() {
    p2.style.backgroundColor ='lightBlue';
}



// [2] addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul  = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('list Baru!!!');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});

const p1 = document.querySelector('.p1');
p1.addEventListener('mouseenter', function() {
    p1.style.backgroundColor = 'black';
    p1.style.color = 'lightgreen';
})
p1.addEventListener('mouseleave', function() {
    setTimeout(() => {
        p1.style.backgroundColor = 'inherit';
        p1.style.color = 'inherit';
    }, 500);
})