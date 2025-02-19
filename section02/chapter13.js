function add10 (num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
    
        setTimeout(() => {
    
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아님")
            }
        }, 2000);
    });

    return promise;
}


add10(0)
    .then((result) => {
        console.log(result);
        // 새로운 Promise 객체를 반환
        return add10(result);
    })
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

