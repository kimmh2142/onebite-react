// 1. 콜백함수
// 다른 함수의 인수로 전달해서 나중에 호출시키도록 하는 함수(Ex.sub())
function main (value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub () {
    console.log("i am sub");
}

main(sub);


// 단축해보기
// 1) 선언문을 괄호안에 넣기
main(function sub () {
    console.log("i am sub");
});

// 2) 익명함수로 쓰기
main(function () {
    console.log("i am sub");
});

// 3)화살표함수
// 화살표함수가 main함수의 콜백함수로서 인수로 전달됨.
main(() => {
    console.log("i am sub");
});


// 2. 콜백함수의 활용
function repeat (count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble (count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx*2);
    }
}

//repeat(5);
//repeatDouble(5);

// repeatTriple이 나오면 새로운 함수를 또 선언해야함...!

function repeat (count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat (5, function (idx) {
    console.log(idx);
});

repeatDouble (5, function (idx) {
    console.log(idx*2);
})