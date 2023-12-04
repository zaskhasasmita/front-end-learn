let skorPlayer = 0
let skorComp = 0

function getPilihanComputer () {
    var comp = Math.round(Math.random() * 10)
    if (comp > 0 && comp <= 3) return 'gunting'
    if (comp > 3 && comp <= 6) return 'kertas'
    return 'batu'
}

function getHasil(comp, player) {
    if(player == comp) return 'KAMU<br>SERI'
    if(player == 'gunting') return (comp == 'kertas') ? 'KAMU\nMENANG' : 'KAMU\nKALAH'
    if(player == 'kertas') return (comp == 'batu') ? 'KAMU\nMENANG' : 'KAMU\nKALAH'
    if(player == 'batu') return (comp == 'gunting') ? 'KAMU\nMENANG' : 'KAMU\nKALAH'
}

function putar() {
    const imgComputer = document.querySelector('.img-computer')
    const gambar = ['gunting', 'kertas', 'batu']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(() => {
        if(new Date().getTime() - waktuMulai > 500) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', `img/${gambar[i++]}.png`)
        if (i == gambar.length) i = 0
    }, 50);
}

const tPlayer = document.querySelectorAll('li img')
tPlayer.forEach((pil) => {
    pil.addEventListener('click', function() {
        const pilihanComputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanComputer, pilihanPlayer)
        putar();
        // console.log(`comp : ${pilihanComputer}\nP : ${pilihanPlayer}\nHasil : ${hasil}`);
        
        setTimeout(() => {
            const imgComp = document.querySelector('.tComp img')
            imgComp.setAttribute('src', `img/${pilihanComputer}.png`)
            let setScorePlayer = document.querySelector('.scorePlayer h2');
            let setScoreComp = document.querySelector('.scoreComp h2');

            const info = document.querySelector('.info')

            if(hasil.includes('MENANG')) {
                info.innerHTML = hasil
                skorPlayer++
                setScorePlayer.innerHTML = skorPlayer
            } else if(hasil.includes('KALAH')) {
                info.innerHTML = hasil
                skorComp++
                setScoreComp.innerHTML = skorComp
            } else {
                info.innerHTML = hasil
            }

            const status = document.querySelector('.status')
            if(skorPlayer == skorComp){
                status.style.color = 'black'
                status.innerHTML = 'SCORE SAMA'
            } else if(skorPlayer > skorComp){
                status.style.color = 'green'
                status.innerHTML = 'KAMU UNGGUL'
            } else {
                status.style.color = 'red'
                status.innerHTML = 'COMPUTER UNGGUL'
            } 
        }, 500);
    })
    
    
    
})

const resetButton = document.querySelector('.resetScore img');
resetButton.addEventListener('click', function () {
    skorPlayer = 0;
    skorComp = 0;
    const scoreP = document.querySelector('.scorePlayer h2');
    const scoreC = document.querySelector('.scoreComp h2');
    const status = document.querySelector('.status')
    scoreP.innerHTML = `${skorPlayer}`;
    scoreC.innerHTML = `${skorComp}`;
    status.innerHTML = `SCORE SAMA`;
    status.style.color = 'black';

})


