const burgerIcon = document.querySelector('.burger-icon');
const burgerIconBar = document.querySelectorAll('.burger-icon-bar');
const main = document.querySelector('main');
const menu = document.querySelector('.menu');
const iconOptions = document.querySelectorAll('.icon-options');
const bgImg = document.querySelector('.background-custom')
const zaskha = document.querySelector('main.about .zaskha-sasmita img')

burgerIcon.addEventListener('click', function() {
    // menambahkan class close-element pada burger icon
    setTimeout(() => {
        burgerIcon.classList.toggle('close-element');
    }, 400);

    // merubah background menjadi blur 
    setTimeout(() => {
        bgImg.classList.toggle('filter-blur')
    }, 100);
   

    perubahanIconHamburger();

    // membuat variable yang nilainya akan ditukar
    let satu = 'fade';
    let dua = 'display-none';
    let tiga = 'adios';
    let empat = 'display-none';
    if (burgerIcon.classList.contains('close-element')) {
        [satu, dua] = [dua, satu];
        [tiga, empat] = [empat, tiga];
    }

    // mengurutkan fade dan display-none pada main content dan menu
    if(main) {
        main.classList.toggle(satu);
        setTimeout(() => {
            main.classList.toggle(dua);
        }, 200);
    }

    menu.classList.toggle(dua);
    setTimeout(() => {
        menu.classList.toggle(satu);
    }, 100);
    
    // menghilangkan icon lang dan mode secara berurutan
    for (let i = 0; i < iconOptions.length - 1; i++) {
        iconOptions[i].classList.toggle(tiga);
        setTimeout(() => {
            iconOptions[i].classList.toggle(empat);
        }, 400);
    }



});



function perubahanIconHamburger() {
        // menambahkan efek putar pada burger icon
        burgerIcon.classList.toggle('putar');

        // mengganti burger icon menjadi close icon
        burgerIconBar.forEach(bar => {
            bar.classList.toggle('close-bar');
        });
}

// ABOUT
// pindah halaman About
const pindahHalamanAbout = document.getElementById('pindahHalamanAbout')
const pindahHalamanProjects = document.getElementById('pindahHalamanProjects')
if(pindahHalamanAbout) {
    pindahHalamanAbout.addEventListener('click', function() {
        main.classList.toggle('fade');
        setTimeout(() => {
            window.location.href = 'about/about.html'
        }, 300);
    })
}
if(pindahHalamanProjects) {
    pindahHalamanProjects.addEventListener('click', function() {
        main.classList.toggle('fade');
        setTimeout(() => {
            window.location.href = 'projects/projects.html'
        }, 300);
    })
}

// PROJECT
// // mendapatkan semua element item dengan class "project-item"
let projectItems = document.querySelectorAll('.list-project .project-item')

// // mendapatkan element gambar
let image = document.querySelectorAll('.image-item')

if (projectItems.length === image.length) {
    for (let i = 0; i < projectItems.length; i++) {
        projectItems[i].addEventListener('mouseenter', function() {
            image[i].style.opacity = '1'; 
            image[i].style.transition = '.3s'
        })
        projectItems[i].addEventListener('mouseleave', function() {
            image[i].style.opacity = '0'; 
            image[i].style.transition = '.6s'
        })
    }
} 
// mengubah total project sesuai jumlah project
let totalProject = document.querySelector('.container-projects .count h1');

if (totalProject) {
    totalProject.textContent = `${projectItems.length}`
}

