import { useParams } from "react-router-dom"

const Diary = () => {
    // url parameter 방식
    const params = useParams();
    console.log(params);

    return <div>{params.id}번 일기</div>
}

export default Diary