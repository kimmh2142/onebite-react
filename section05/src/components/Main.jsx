import "./Main.css";

const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    };

    // 1. 조건문으로 분기
    if (user.isLogin) {
        return <div className="logout">로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }

    // 2. return 문에서 
    // return (
    // <>
    //     {user.isLogin ? 
    //     <div>로그아웃</div> : 
    //     <div>로그인</div>}
    // </>
    // );
};

export default Main;