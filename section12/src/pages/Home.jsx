import { useSearchParams } from "react-router-dom"

const Home = () => {

    // QueryString 방식
    const [params,setParams] = useSearchParams();
    // params : QueryString으로 전달한 변수와 값 
    // setParams : 특정 QueryString의 값을 변경 할 수 있는 함수 
    

    return <div>Home</div>
}

export default Home