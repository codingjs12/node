function test(x) {
    console.log(x);
}

test("안녕");
test(1);
test((1,2,3,4));
test(function(){});

let func2 = test;
console.log(func2);