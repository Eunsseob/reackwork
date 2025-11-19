import { useState, useEffect } from 'react';
import './App.css';
import {Container, Nav, Navbar, Row, Col, Button} from 'react-bootstrap';
import pList from './data/ProductList';
import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';
import Cart from './pages/Cart';
import Signup from './pages/Signup';
import Login from './pages/login';

function App() {
  // localStorage : 웹페이지에 있는 저장공간. 청소만 하지않으면 반영구적임
  localStorage.setItem('addr', '한국빌딩');

  // 배열이나 객체 사용 불가
  // 대신 json의 형태로 넣을 수 있음
  // let obj = {tel : '02-1111-2222'}  // 그냥 [Object, Object] 들어감
  let obj = {tel : '02-1111-2222'}
  let tel = JSON.stringify(obj)
  localStorage.setItem('data', tel);

  let user = {
    name : 'kim',
    age : 25,
    hobbies : ['gaming', 'reading']
  }
  localStorage.setItem('user', JSON.stringify(user));

  // 가져오기
  let getUser = localStorage.getItem('user');
  console.log(getUser)  //getUser.name 사용 불가

  // 가져오면 json의 형태를 object의 형태로 바꿔줌
  let o = JSON.parse(getUser)
  console.log(o.name);

  const [clothes, setClothes] = useState(pList);
  const [clickCount, setClickCount] = useState(2);
  const [loginUser, setLoginUser] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('recentProduct')){
      localStorage.setItem('recentProduct', JSON.stringify([]))
    }
  })

  useEffect(() => {
    const user = sessionStorage.getItem('loginUser');
    if(user){
      setLoginUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">✍ 손은섭의 쇼핑몰 ✍</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/signup')}}>회원가입</Nav.Link>
            <Nav.Link onClick={()=> {
              if(loginUser){
              sessionStorage.removeItem('loginUser');
              setLoginUser(null);
              navigate('/')
              } else {
              navigate('/login')}
              }}>{loginUser ? '로그아웃' : '로그인하기'}</Nav.Link>
          </Nav>
          <Nav>
            {loginUser &&  (<Navbar.Text style={{color:'white'}}>
              환영합니다, {loginUser.name}님!
            </Navbar.Text>)}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' />
            <Container>
              <Row>
                {
                  clothes.map((item, i) => {
                    return(
                      <PListCol clothes={item} key={i}/>
                    )
                  })
                }
              </Row>
            </Container>
            <Button variant="success" onClick={() => {
              axios.get(`https://raw.githubusercontent.com/bliss42/myHome/refs/heads/main/react/data/data${clickCount}.json`)
                   .then(result => {
                      let copy = [...clothes, ...result.data]
                      setClothes(copy)
                      setClickCount(clickCount+1);
                    })
                    .catch(() => {
                      alert('더이상 상품이 없습니다');
                    });
            }}>서버에서 데이터 가져오기</Button>
          </>
        } />
        <Route path="/detail/:pid" element={<Detail clothes={clothes}/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
        
        <Route path="*" element={<div>없는 페이지 입니다</div>} />
      </Routes>
    </div>
  );
}

function PListCol(props) {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${props.clothes.id}`);
  };
  return (
    <>
      <Col md={4} onClick={goDetail} style={{cursor:'pointer'}}>
        <img src={`${process.env.PUBLIC_URL}/img/clothes${props.clothes.id}.png`} width="80%"/>
        <h4>{props.clothes.title}</h4>
        <p>{props.clothes.price}</p>
      </Col>
    </>
  )
}
export default App;