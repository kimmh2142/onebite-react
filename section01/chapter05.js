console.log("chapter05");

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// + , - , * , / , % 연산 가능
console.log(num1 % num2);// 0

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;

console.log(1 * "hello");
//NaN : 연산이 실패했을 경우 값. 프로그램이 완전히 종료되지 않음. 


// 2. String Type 
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;//이정환목동

//backtick을 활용한 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; 
console.log(introduceText);


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다)
// null은 직접 명시적으로 변수에 할당 해줘야 하는 값.
 let empty = null;

 
// 5. Undefined Type : 변수를 선언만 했을 때 자동 할당 되는 값.
let none;
console.log(none); //Undefined


 
