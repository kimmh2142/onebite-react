import './List.css'
import TodoItem from './TodoItem';
import {useState} from 'react'

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

    return (
        <div className="List">
            <h4>Todo List ☘</h4>
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