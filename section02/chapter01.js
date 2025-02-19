// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) {
    console.log("Falsy");
}


// 2. Truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t5) {
    console.log("Truthy");
}


// 3. 활용 사례
// 3-1. 
function printName (person) {
    console.log(person.name);
}

let person = {name: "이정환"};
printName(person);

// 3-2. 선언하지 않았을 때 undefined 
function printName1 (person1) {
    
    if (person1 === undefined) {
        console.log("person1값이 없음");
        return;
    }
    console.log(person1.name1);
}

let person1;
printName1(person1);

// 3-3. null 일때 
function printName2 (person2) {
    
    if (person2 === null) {
        console.log("person2값이 없음");
        return;
    }
    console.log(person2.name2);
}

let person2 = null;
printName2(person2);


// 3-4. Falsy한 값 활용 *****
function printName3 (person3) {
    
    if (!perosn3) {
        console.log("person3값이 없음");
        return;
    }
    console.log(person3.name3);
}

let person3 = null;
printName3(person3);