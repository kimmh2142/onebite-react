import './App.css'
import {useState, useRef, useReducer} from "react"
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

// 다시 생성하지 않도록 컴포넌트 외부에 선언.
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "react공부",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래연습",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch(action.type){
    case "CREATE": 
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item)=>
        item.id === action.targetId
          ? {...item, isDone: !item.isDone} 
          : item
      );
    case "DELETE":
      return state.filter((item)=>
        item.id !== action.targetId
      );
    default:
      return state;
  }
}

function App() {

  const [todos, dispatch] = useReducer(reducer,mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current ++,
        isDone: false,
        content: content,
        date: new Date().getTime()
      },
    });
  };


  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  };

  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
}

export default App
 