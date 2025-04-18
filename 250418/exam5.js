/*
익명함수 사용하기

function test() {
    console.log("test");

}
let i = 0;
setInterval(function(){
    console.log(i++);
}, 1000);

화살표 함수 사용하기

setTimeout(()=>{
    console.log("test");
}, 2000);

4개 다 같은 거
*/

let func = x => x;
let func2 = (x) => {
    return x;
}
let func3 = function(x) {
    return x;
}
function func4(x) {
    return x;
}

console.log(func("hello"));