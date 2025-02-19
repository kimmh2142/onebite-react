// 1. if 문
let num = 9;

if(num >= 10) {
    console.log("num은 10 이상");
} else if (num >= 5){
    console.log("num은 5 이상");
} else {
    console.log("조건 거짓");
}


// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 떄 if보다 직관적

let animal = "owl";

switch (animal) {
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("강아지");
        break;
    }
    case "bear": {
        console.log("곰");
        break;
    }
    case"snake": {
        console.log("뱀");
        break;
    }
    default: {
        console.log("그런 동물 없습니다.");

    }
}