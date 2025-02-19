import './List.css'
import TodoItem from './TodoItem';
import {useState, useMemo} from 'react'

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과 값들을 모아서 새로운 배열로 반환
// 콜백함수 안에서 반환값을 설정할 수 있음 ***** (forEach와 차이점)

// JSX에서 사용할 때 콜백함수가 HTML요소 반환하도록 설정 가능.
// 물론 리액트 컴포넌트도 렌더링할 수 있다!

const List = ({todos, onUpdate, onDelete}) => {

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo) => 
            todo.content
            .toLowerCase()
            .includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    // cf. useEffect(()=>{},[]) deps값 바뀌면 콜백함수 다시실행 훅
    // 콜백함수를 deps를 기준으로 memoization
    // 즉, 아무것도 deps로 전달하지 않으면 최초 렌더링시에만 실행.
    const {totalCount, doneCount, notDoneCount} = 
        useMemo(()=>{
            console.log("getAnalyzedData 호출")
            const totalCount = todos.length;
            const doneCount = todos.filter((todo)=>todo.isDone).length;
            const notDoneCount = totalCount - doneCount;

            return {
                totalCount,
                doneCount,
                notDoneCount
            };
        },[todos])
    // 의존성배열 : deps
    

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="List">
            <h4>Todo List ☘</h4>
            <div>
                <div>totalCount: {totalCount}</div>
                <div>doneCount: {doneCount}</div>
                <div>notDoneCount: {notDoneCount}</div>
            </div>
            <input 
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요."/>
            <div className="todos_wrapper">
            {filteredTodos.map((todo)=>{
                return <TodoItem key={todo.id} 
                                {...todo} 
                                onUpdate={onUpdate}
                                onDelete={onDelete}/>
            })}
            </div>
        </div>
    );
}

export default List;