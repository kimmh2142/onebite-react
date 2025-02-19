// 1. 배열의 구조 분해 할당
// -> 배열에 있는 원소들을 변수들의 순서대로 하나씩 분해해서 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;
console.log(one,two,three, four);
// 1 2 3 4 


// 2. 객체의 구조 분해 할당
let person = {
    name : "이정환",
    age : 27,
    hobby : "테니스"
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let {name, age, hobby, extra = "hello"} = person;
console.log(name, age, hobby, extra);

// :을 통해 변수명을 변경해서 프로퍼티 값을 담을 수 있다.
// let {name : aaa, age, hobby, extra = "hello"} = person;
// console.log(aaa, age, hobby, extra);


// 3. 객체 구조 분해 할당 활용 (함수 매개변수 받기)
// 3-1. 기본
const func0 = (person) => {
    person.name;
    person.age; 
}

// 3-2.활용
const func = ({name,age,hobby,extra}) => {
    console.log(name,age,hobby,extra);
    // 이정환 27 테니스 undefined
}

func(person);