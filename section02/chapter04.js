// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 
// -> 객체나 배열에 저장된 여러 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);
// 4 1 2 3 5 6


let obj1 = {
    a:1,
    b:2,
};

let obj2 = {
    ...obj1,
    c: 3,
    d: 4,
};
console.log(obj2);


function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
    // 1 2 3 
}

funcA(...arr1);


// 2. Rest 매개변수 
// -> Rest는 나머지, 나머지 매개변수
// Rest 매개변수는 마지막에 선언하기 ***
// ...뒤에 다른이름으로 와도 됌 ***

function funcB(one,...rest) {
    console.log(one, rest);
    // 1 {2,3}
}
funcB(...arr1)