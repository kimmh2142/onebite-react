// for (초기식; 조건식; 증감식)
// 초기식 : 반복문 내에서만 쓸 수 있는 변수(=Count 변수)
// 조건식 : 조건이 참일 때만 동작 (언제까지 반복할 건지)
// 증감식 : 매 반복마다 Count 변수 증감 용도

for (let idx=1; idx <= 10; idx++) {
    console.log(idx);

    // 반복문 안에서 강제 종료 해야할 경우 
    // 1 2 3 4 5
    if (idx >= 5) {
        break;
    }
}

for (let idx=1; idx <= 10; idx++) {
    // 반복문 속 다른 코드 실행X 다음회차로 넘어감.
    // 1 3 5 7 9 
    if (idx % 2 === 0) {
        continue;
    }

    console.log(idx);

}
