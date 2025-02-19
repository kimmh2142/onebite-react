// 5가지 배열 변형 메서드

// 1. filter *****
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "이정환", hobby : "테니스"},
    {name: "김효빈", hobby : "테니스"},
    {name: "홍길동", hobby : "독서"},
];

const temmisPeople = arr1.filter((item) => {
    if (item.hobby === "테니스") return true;
});

// console.log(temmisPeople);
// 간결하게 만들기
// const temmisPeople = arr1.filter((item) => item.hobby === "테니스");


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과 값들을 모아서 새로운 배열로 반환
// 콜백함수 안에서 반환값을 설정할 수 있음 ***** (forEach와 차이점)
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    // console.log(idx, item); // 0 1, 1 2, 2 3
    return item * 2;
});
// console.log(mapResult1); //  [2, 4, 6]

// 2-1. map 활용 
let names = arr1.map((item) => item.name);
// console.log(names); // ['이정환', '김효빈', '홍길동']


// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
// console.log(arr3); // ['a', 'b', 'c']

// 3-1. 숫자비교
let arr3_1 = [10,3,5];
arr3_1.sort((a,b) => {
    if(a > b){
        // b가 a 앞에 와라 : return 양수
        return 1; // -> b, a 배치 
    } else if (a < b) {
        // a가 b 앞에 와라
        return -1; // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // -> a, b 자리 그대로
    }
});
// console.log(arr3_1); // [3, 5, 10]


// 4. toSorted (가장 최근에 추가된 최신 함수)
// 원본 배열은 냅두고 새로운 정렬된 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);  //['c', 'a', 'b']
console.log(sorted);//['a', 'b', 'c']


// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");
console.log(joined); // hi-im-winterlood