import { useState, useRef } from 'react';
import './App.css';
import Editor from './component/Editor.js';
import Header from './component/Header.js';
import List from './component/List.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component/house.css'
import Jjanggu from './짱구1.jpg';

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

  // id를 기존 데이터 id번호 다음 번호로 세팅하기
  /*
    useRef() : React Hook 중 하나
               컴포넌트가 리렌더링되더라도 값이 유지되는 컨테이너 역할을 함
  */
  const idRef = useRef(3); // id가 0~2번까지 있어서 3번부터 시작하시오.
  const onCreate = (content) => {
    const newItem = {
      id : idRef.current++,
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
      <tr>
      <td><svg width="200" height="200" viewBox="-100 -200 200 400">
        <polygon points="0,0 80,120 -80,120" fill="#234236" />
        <polygon points="0,-40 60,60 -60,60" fill="#0C5C4C" />
        <polygon points="0,-80 40,0 -40,0" fill="#38755B" />
        <rect x="-20" y="120" width="40" height="30" fill="brown" />
      </svg>
      </td>
      <td>
        <svg class="house" width="200" height="200" viewBox="-100 -100 200 200">
        <polygon class="wall" points="-65,80 -65,-10 0,-70 65,-10 65,80" />
        <polyline class="roof" points="-75,-8 0,-78 75,-8" />

        <rect class="door" x="-45" y="10" width="30" height="60" rx="2" />
        <circle class="door-knob" cx="-35" cy="40" r="2" />
        <rect class="stair" x="-47" y="70" width="34" height="5" />
        <rect class="stair" x="-49" y="75" width="38" height="5" />

        <rect class="window" x="5" y="15" width="40" height="35" rx="5" />
        <line x1="5" y1="32.5" x2="45" y2="32.5" />
        <line x1="25" y1="15" x2="25" y2="50" />
        <rect class="window-sill" x="2" y="48" width="46" height="5" rx="5" />

        <circle class="window" cx="0" cy="-25" r="15" />
        <line x1="-15" y1="-25" x2="15" y2="-25" />
        <line x1="0" y1="-40" x2="0" y2="-10" />
      </svg>
      </td>
      <td>
        &emsp;<img src={Jjanggu} height="200"/>
      </td>
      </tr>
      <Editor onCreate={onCreate}/>
      <List todos={todos}/>
    </div>
  );
}

export default App;