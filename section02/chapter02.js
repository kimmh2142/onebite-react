function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue());
//False 함수, false
//returnTrue()를 호출하지 않았다 : 단락평가 O

console.log(returnTrue() && returnFalse());
//True 함수, False 함수, false
//단락평가 x

console.log("============================");

//Truthy 와 Falsy한 값에도 적용된다. 
function returnFalse1() {
    console.log("False 함수");
    return undefined;
}

function returnTrue1() {
    console.log("True 함수");
    return 10;
}
console.log(returnTrue1() || returnFalse1());
//True 함수, 10
//연산의 결과가 truthy 하거나 falsy한 값 그 자체

console.log("============================");

// 단락 평가 활용 사례

function printName(person) {

    if(!person){
        console.log("person에 값이 없음");
        return;
    }
    console.log(person,name);
}

// step1.
function printName(person) {

    console.log(person && person,name);
}

// step2.
function printName(person) {
    const name = person && person.name;
    console.log(name || "person에 값이 없음");
}

printName();
printName({name : "이정환"});

//둘다 truthy한 값
console.log("앞" || "뒤");     //앞 
console.log("앞앞" && "뒤뒤"); //뒤뒤