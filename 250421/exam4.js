console.log("111");

setTimeout(function() {
    console.log("222");

}, 2000);
console.log("333");

setTimeout(()=> {
    console.log("A");

    setTimeout(()=> {
        console.log("B");

        setTimeout(()=> {
            console.log("C");

            setTimeout(()=> {
                console.log("D");

            }, 3000);

        }, 1000);

    }, 1000);

}, 1000);


