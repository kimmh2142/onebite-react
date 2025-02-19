import './TodoItem.css'
import {memo} from "react"

// 1. todos가 변하면 app 컴포넌트는 리랜더링...
// 2. onUpdate, onDelete 같은 함수(객체타입의 값)은 
// 매번 새롭게 전달될 때마다 다른 주소 값을 가진다.
// -> memo는 props 가 바뀌었다고 인식한다.
const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onClickDeleteButton = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input 
                onChange={onChangeCheckbox}
                checked={isDone} 
                type="checkbox" />
            <div className="content">{content}</div>
            <div className="date">
                {new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    );
};

export default memo(TodoItem);

// // 고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps)=>{
//     // 반환값에 따라, Props가 바뀌었는지 판단
//     // T -> Props 바뀌지 않음 -> 리렌더링X
//     // F -> Props 바뀜 -> 리렌더링

//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     return true;
// });