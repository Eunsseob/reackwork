import './App.css';
import Compo from './component/Compo.js'
/*
  props
  부모가 자식 컴포넌트에게 전달하는 데이터
  자식컴포넌트는 값 변경 불가
  자식이 부모에게 값 넘겨주는 것 : 불가
*/

// String 값 전달
// function App() {
//   const address = "서울 강남구 빌딩";
//   return (
//     <div className="App">
//       <Compo user={"홍길동"} addr={address}/> 
//     </div>
//   );
// }

// 2. 객체 형태 넘겨주기
function App(){
  const userInfo = {
    name : '손은섭',
    addr : '서울 영등포구',
    likeList : ['소주', '양주', '맥주']
  }
  return (
    <div className = "App">
      <Compo {...userInfo}/>
      <Compo name={userInfo.name} addr={userInfo.addr} likeList={userInfo.likeList}/>
    </div>
  );
}
export default App;