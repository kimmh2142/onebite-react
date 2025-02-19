// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, (콜백함수로)각 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// arr1 * 2 를 출력
arr1.forEach(function (item, idx, arr) {
    // console.log(idx, item * 2); // 0 2, 1 4, 2 6
});


let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
})

// console.log(doubledArr); // [2, 4, 6]


// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);
// console.log(isInclude); // true


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index); // 1 : 요소 2의 위치는 1
// 중복된 값: 맨 먼저 나오는 요소 위치
// 존재X 값: -1


// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 그런
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item)=>{
    if (item % 2 !== 0) return true;
});
// console.log(findedIndex); // 0 

// 더 간결하게 => 조건식을 리턴하도록 만들면 됌
// const findedIndex = arr4.findIndex((item)=> item % 2 !== 0);
// console.log(findedIndex); // 0 
// 존재X 값: -1


// cf. indexOf와 findIndex 비교
let objectArr = [
    {name : "이정환"},
    {name : "홍길동"},
];

console.log(
    objectArr.indexOf({name:"이정환"})
); // -1 : 객체는 찾을 수 없다.

console.log(
    objectArr.findIndex(
    (item) => item.name === "이정환"
    )
); // 0


// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [
    {name : "이정환"},
    {name : "홍길동"},
];

const finded = arr5.find(
    (item) => item.name === "이정환"
);
console.log(finded); // {name: '이정환'}