console.log(1);

// setTimeout(콜백함수, ms);
// 원하는 코드를 특정 시간이 지난 이후에 비동기적으로 실행시켜주는 기능
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);