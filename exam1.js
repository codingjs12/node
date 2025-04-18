// callback 함수

function hello(name) {
    console.log(name + "님 안녕하세요.");
}

function imgLoad() {
    setTimeout(()=>{
        console.log("setTimeout 끝");
    }, 10000 )
    console.log("imgLoad 끝");
}

imgLoad();
hello("홍길동");