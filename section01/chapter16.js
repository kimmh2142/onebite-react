// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
}

animal.age = 2; // 추가
animal.name = "까망"; //수정
delete animal.color; //삭제

console.log(animal);

//저장되어있는 객체값의 프로퍼티를 수정하는 건 가능하다.


// 2. 메서드
// -> 값이 함수인 프로퍼티
// -> 객체의 동작을 정의

const person = {
    name : "이정환",
    //메서드 : 익명함수
    // sayHi : function () {
    //     console.log("안녕!");
    // },
    //메서드 : 화살표함수
    // sayHi :  () => {
    //     console.log("안녕!");
    // },

    //메서드 선언
    sayHi () {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();