let promiseEx1 = new Promise((resolve, reject) =>{
    if(true) {
        resolve("성공했을때 실행!");
    } else {
        reject("실패했을때 실행");
    }
});

console.log(promiseEx1);

promiseEx1
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

console.log(promiseEx1);