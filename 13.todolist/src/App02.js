import { useState } from 'react';
import './App.css';
import Editor from './component/Editor01.js';
import Header from './component/Header.js';
import List from './component/List.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const tmpData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  }, 
  {
    id : 1,
    isDone : false,
    content : "나우유씨미 3 영화 보기",
    date : new Date().getTime(),
  }, 
  {
    id : 2,
    isDone : false,
    content : "방어 먹기",
    date : new Date().getTime(),
  }
]
function App() {
  const [todos, setTodos] = useState(tmpData);

  const onCreate = (content) => {
    const newItem = {
      id : 0,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }
    // let copy = [...todos];
    // copy.unshift(newItem);
    // setTodos(copy);
    setTodos([newItem, ...todos]);
    console.log(todos);
  }
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate}/>
      <List />
    </div>
  );
}

export default App;