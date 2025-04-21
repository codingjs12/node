function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time)
    });
}

async function run() {
    await delay(1000);
    console.log("A");
    
    await delay(1000);
    console.log("B");
    
    await delay(1000);
    console.log("C");
    
    await delay(1000);
    console.log("D");

}

run();
