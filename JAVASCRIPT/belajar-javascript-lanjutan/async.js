function cobaPromise() {
    return new Promise((resolve, reject) => {
        const waktu = 2000;
        if(waktu < 5000) {
            setTimeout(() => {
                resolve('lancar')
            }, waktu);
        } else {
            reject('kelamaan!');
        }
    })
}
// const coba = cobaPromise();
// coba
//     .then(()=> console.log(coba))
//     .catch(err => console.error(err))

async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.error(err);
    }
}

cobaAsync();
