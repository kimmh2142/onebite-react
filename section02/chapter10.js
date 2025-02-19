
// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자 : new로 새로운 객체를 생성하는 내장함수
// console.log(date1);

let date2 = new Date("1997 01 07/10:10:10"); // -외에 . / ' '(띄어쓰기) 가능
// let date2 = new Date(1997, 1, 7, 23, 59, 59); // 숫자 + , 도 가능
// console.log(date2);


// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
// 협정 세계 시간(UTC)
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1);
// console.log(date1, date4);


// 3. 시간 요소 추출 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; // 1월이 0으로 나옴
let date = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    year,
    month,
    date,
    hour,
    minute,
    seconds,
); // 2025 1 29 21 45 42


// 4. 시간 수정하기 (get -> set)
date1.setFullYear(2023);
date1.setMonth(2); //실제로는 3월
date1.setDate(30);


// 5. 시간을 여러 포맷으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleString());