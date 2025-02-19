// const Button = ({text, color, children}) => {
//     return (
//         <button 
//             onClick={()=>{
//                 console.log(text);
//             }}
//             style = {{color:color}}>
//             {text} - {color}
//             {children}
//         </button>
//     );
// };

// 함수가 너무 길다면 상수로 빼는것 도 가능
const Button = ({text, color, children}) => {

    // 합성 이벤트 객체(SyntheticBaseEvent)
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    }

    return (
        <button 
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style = {{color:color}}
        >
            {text} - {color}
            {children}
        </button>
    );
};

// Props 의 default값 설정방법
Button.defaultProps = {
    color: "balck",
}

export default Button;