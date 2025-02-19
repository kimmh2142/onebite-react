import './Editor.css'
import {useState, useRef} from "react"

const Editor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    // 엔터키로 Item추가 
    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        // 빈 값이면 return
        if (content === ""){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        // 새로운 Item 추가 후 초기화
        setContent("");
    }

    return (
        <div className="Editor">
            <input 
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..." 
            />
            <button onClick = {onSubmit}>추가</button>
        </div>
    );
}

export default Editor;