import {useState} from 'react';
import './App.css';
/*
  * 동적 모달창 만들기
    1. UI 디자인 하기
    2. UI의 현재 상태를 state 저장해 놓기
    3. state에 따라 UI를 어떻게 보일지 조건문 등으로 작성
*/
function App() {
  // const [like, setLike] = userState(0);
  const [like, setLike] = useState(0);
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);

  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  const [subscribe, setSubscribe] = useState(false);
  const [subscribe1, setSubscribe1] = useState(false);
  const [subscribe2, setSubscribe2] = useState(false);
  let[modal, setModal] = useState();

  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      <div className="list">
        <h4>얌샘김밥</h4>
        <p>10월 12일<span onClick={()=>{setLike(like+1)}}>❤</span>{like}&emsp;
          <button
            onClick={() => {
              setSubscribe(!subscribe);
              console.log(subscribe ? "구독취소" : "구독중");
            }}
          >
            {subscribe ? "구독취소" : "구독하기"}
          </button>

          
        </p>
      </div>
      <div className="list1">
        <h4>김밥천국</h4>
        <p>2월 96일<span onClick={()=>{setLike1(like1+1)}}>😎</span>{like1}
        <button
            onClick={() => {
              setSubscribe2(!subscribe2);
              console.log(subscribe2 ? "구독취소" : "구독중");
            }}
          >
            {subscribe2 ? "구독취소" : "구독하기"}
          </button>
          </p>
      </div>
      <div className="list2">
        <h4>간장공장</h4>
        <p>1월 3일<span onClick={()=>{setLike2(like2+1)}}>🤩</span>{like2}
        <button
            onClick={() => {
              setSubscribe1(!subscribe1);
              console.log(subscribe1 ? "구독취소" : "구독중");
            }}
          >
            {subscribe1 ? "구독취소" : "구독하기"}
          </button>
          </p>
      </div>

      <h4 onClick={()=>{setModal(!modal)}}>{title[1]}</h4>
      
      { modal ? <Modal/> : null }
    </div>
  );
}

function Modal() {
  return(
    <div className="modal">
      <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}
export default App;
