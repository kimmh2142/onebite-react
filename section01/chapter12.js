// 1. 함수 표현식

// 1-1.함수를 변수에 담기
// 호이스팅 대상
let varA = funcA;
varA(); //funcA

function funcA() {
    console.log("funcA");
}


// 1-2.익명함수
// 호이스팅 대상X 
let varB = function () { 
    console.log("funcB");
}
varB();



// 2. 화살표 함수
let varC = () => {
    return 1;
}

// 값을 반환하기만 한다면 아래와 같이 생략 가능.
let varCC = (value) => value + 1;
console.log(varCC(10)); // 11


// 화살표 함수에 변수넣기
let varCCC = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varCCC(100)); // 100 101