// math 모듈

// 1. export
export function add(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}
// export { add, sub};


// 2. default
// math 모듈을 대표하는 기본값
export default function multifly(a, b) {
    return a * b;
}