let area1 = getArea(10, 20); //10, 20 : 인수
console.log(area1); // 200

let area2 = getArea(30, 20);
console.log(area2); // 600

// 함수선언 -> 호출보다 밑에 선언되어도 실행됨.
// 호이스팅 -> 끌어올리다 라는 뜻 

function getArea(width, height) { //width, height : 매개변수
    function another () {  // 중첩함수
        console.log("another");
    }

    another();
    let area = width * height;

    return area; //함수의 반환값
}