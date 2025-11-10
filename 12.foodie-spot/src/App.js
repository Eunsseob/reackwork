import {useState} from 'react';
import './App.css';

function App() {
  const [like, setLike] = useState(0);
  const [like1, setLike1] = useState(0);
  const [like2, setLike2] = useState(0);

  const [subscribe, setSubscribe] = useState(false);
  const [subscribe1, setSubscribe1] = useState(false);
  const [subscribe2, setSubscribe2] = useState(false);

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
    </div>
  );
}

export default App;
