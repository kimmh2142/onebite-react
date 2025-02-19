// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {};           // 객체 리터럴(대부분)


// 2. 객체 프로퍼티 (객체 속성)
// key : value
// key값은 문자, 숫자, 띄어쓰기 있는경우 ""사용
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스",
    extra : {},
    10 : 20,
    "like cat" : true,
};


// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; 
console.log(name);
// 존재하지 않은 값에 접근하려고 하면 undefined 출력

let age = person["age"];
console.log(age);
// 문자의 경우 "key"를 써야함

// **동적으로 프로퍼티를 꺼내올 때 변수에 담아서 하면 편하다.
let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 법
person.job = "FE Developer";
person["favoriteFood"] = "떡볶이";
console.log(person);

// 3-3. 프로퍼티 수정하는 법
person.job = "educator";
person["favoriteFood"] = "초콜릿";
console.log(person);

// 3-4. 프로퍼티 삭제하는 법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티 존재 유무 확인하는 법 (in연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1); //true
console.log(result2); //false