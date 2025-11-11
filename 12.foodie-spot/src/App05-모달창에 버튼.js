import {useState} from 'react';
import './App.css';
/*
  input에 글자를 받아서 title에 추가하기
*/
function App() {
  // const [like, setLike] = userState(0);
  const [like, setLike] = useState([0, 0, 0]);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);
  let [modalIndex, setModalIndex] = useState(0);
  // input에 들어온 값 저장할 state
  let [inputValue, setInputValue] = useState('');
  
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      { 
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
              {/* 2. index번호 수정 */}
              <h4 onClick={() => {
                setModal(true);
                setModalIndex(i);
              }}>{v}</h4>
              <p>11월 10일 &emsp;<span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy)
              }}>냐미</span>{like[i]}
              </p>
            </div>
          )
        }) 
      }
     <input onChange={(e)=>{setInputValue(e.target.value); console.log(inputValue)}}></input>
      <button onClick={() => {
        let c = [...title];
        c.unshift(inputValue);
        setTitle(c);
      }}>글추가</button>
      { modal ? <Modal title={title} modalIndex={modalIndex} setTitle={setTitle} /> : null } 
    </div>
  );
}


{/* 3. index넘겨주기 */}

export default App;