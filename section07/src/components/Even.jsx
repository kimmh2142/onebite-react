import { useEffect } from "react";

const Even = () => {

    // useEffect에서 
    // deps가 [] 라면 mount 될때 실행
    // 정리함수는 unmount될때 실행

    useEffect(() => {
        //클린업, 정리함수
        return () => {
            console.log("unmount");
        };
    },[]);

    return <div>짝수입니다</div>
};

export default Even;