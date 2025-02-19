// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능(블록 내 선언)

let a = 1; // 전역 스코프

function funcA () {
    let b = 2; // 지역 스코프
    console.log(a);

    function funcB() {console.log("함수 안");} //함수 안: 지역스코프o
}

funcA();

if (true) {
    let c = 1;
    function funcB() {console.log("if 안");} // if 안: 지역스코프X
}

for (let i = 0; i < 10; i++) { 
    let d = 1;
    function funcB() {console.log("for 안");} // for 안: 지역스코프X
}

console.log(i); // i 도 지역 스코프 
