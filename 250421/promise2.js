let sec = 0;

function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
        sec = time / 1000;
    });
}


delay(1000)
    .then(() => {
        console.log("A " + sec + "초 뒤 실행!"); // 1초뒤 실행!
        return delay(3000);
    })
    .then(() => {
        console.log("B "+ sec + "초 뒤 실행!"); // 3초뒤 실행
        return delay(5000);
    })
    .then(() => {
        console.log("C " + sec + "초 뒤 실행!") // 5초뒤 실행
    })



function time(time) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(time);
        }, time);
    });
}

time(1000)
    .then((time)=> {
        console.log(`${time/1000} 초 뒤에 실행`);
    })
