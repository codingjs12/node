function test() {
    console.log("테스트 함수");

    return function() {
        console.log("테스트 함수 222");
    };
}

function test2() {
    console.log("테스트 함수 222");
}


setTimeout(test(), 1000);

function calculator(kind) {

    return function(x, y) {
        if(kind === "add") {
            return x + y;
        } else if(kind === "sub") {
            return x - y;
        }
    }

}

let addFunc = calculator("add");
let subFunc = calculator("sub");

console.log(addFunc(1, 2));
console.log(subFunc(1, 2));

function fnCalc(kind) {
    calc = {
        "add" : (x, y) => x + y,
        "sub" : (x, y) => x - y,
        "div" : (x, y) => x / y,
        "mul" : (x, y) => x * y,
        "mod" : (x, y) => x % y
    }

    return calc[kind];
}

let fnAdd = fnCalc("add");
let fnSub = fnCalc("sub");
let fnDiv = fnCalc("div");
let fnMul = fnCalc("mul");
let fnMod = fnCalc("mod");

console.log(fnAdd(1,2));
console.log(fnSub(1,2));
console.log(fnDiv(1,2));
console.log(fnMul(1,2));
console.log(fnMod(1,1));
