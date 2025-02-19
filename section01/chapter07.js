console.log("chapter07");

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자(산술 + 대입연산자)
let num7 = 10;

num7 += 20;
//num7 = num7 + 20;
num7 -= 20;
//num7 = num7 - 20;


// 4. 증감 연산자
let num8 = 10;

// 전위 연산
console.log(++num8); // 이 라인에서 즉시 연산 //11
// 후위 연산
console.log(num8++); // 다음 라인에서 연산    //11
console.log(num8);   //12


// 5. 논리 연산자
let or = true || false; //true

let and = true && false; //false

let not = !true; //false


// 6. 비교 연산자
let comp1 = 1 ===2 ; //false
let comp2 = 1 !== 2; //true

// ===(동등비교연산자) 의 경우 자료형도 비교해줌 
// 1 === '1' false
// 1 == '1' true

let comp3 = 2 > 1;
let comp4 = 2>= 2;
