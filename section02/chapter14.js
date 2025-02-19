// 1. async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

// return된 객체를 결과 값으로 갖는, 새로운 프라미스를 반환하는 함수로 변환
async function getData () {
    return {
        name: "이정환",
        id: "winterlood",
    };
}

// 애초에 promise를 반환하는 함수라면 async는 별다른 기능X
async function getData () {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve({
                name: "이정환",
                id: "winterlood",
            });
        },1500);
    })
}

console.log(getData()); 


// 2. await
// "async" 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

function printData() {
    getData().then((result) => {
        console.log(result);
    });
}

async function printData(){
    const data = await getData();
    console.log(data);
}

printData();