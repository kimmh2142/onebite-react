function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 3000);
}

// 비동기 작업을 하는 함수의 결과 값(sum)을 
// 함수 외부(비동기함수 :add함수)에서 이용하고 싶다면 ?
// 콜백함수를 사용해서 비동기 함수 안에서 콜백 함수를 호출하도록 설정 

add(1,2, (value) => {
    console.log(value);
});


// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "떡볶이";
        callback(food);
    },3000);
}

function cooldownFood(food, callback){
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    // 비동기 작업의 결과를 또다른 비동기 함수의 인자로 전달
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);

        freezeFood(cooldownedFood, (freezedFood) => {
            console.log(freezedFood);
        })
    });
})