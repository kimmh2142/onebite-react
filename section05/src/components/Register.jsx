import { useState, useRef } from "react";

const Register = () => {

    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    const onChange = (e) => {
        // Ref 객체 활용 1 : 값 변경시마다 count값 증가
        countRef.current++;
        console.log(countRef.current);

        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            // Ref 객체 활용 2 : 이름을 입력하는 DOM 요소 포커스
            console.log(inputRef.current);
            // <input name="name" placeholder="이름" value>

            inputRef.current.focus();
        }
    };


    return (
        <div>
            <div>            
                <input 
                ref = {inputRef}
                name="name"
                value={input.name}
                onChange={onChange} 
                placeholder="이름" 
                />
                {input.name}
            </div>

            <div>
                <input 
                name="birth"
                value={input.birth}
                onChange={onChange}
                type="date" />
                {input.birth}
            </div>

            <div>
                <select
                name="country"
                value = {input.country}
                onChange={onChange}>
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea 
                name="bio"
                value = {input.bio}
                onChange={onChange}/>
                {input.bio}
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    );
}

export default Register;