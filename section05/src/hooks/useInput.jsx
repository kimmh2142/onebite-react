import { useState } from "react";

// Custom Hook
function useInput(){
    const [input, setInput] = useState("");

    const onChange = (e) => {
        console.log(e);
        setInput(e.target.value);
    };

    return [input, onChange];
}

export default useInput;