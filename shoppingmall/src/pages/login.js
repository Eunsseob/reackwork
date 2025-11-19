import axios from 'axios';
import { useState } from 'react';
import {Col, Form, Row } from 'react-bootstrap';

const Login = () => {
    const [form, setForm] = useState({
        email : '',
        password : ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/react/login', form)
             .then((result) => {
                if(result.data) {
                    alert('로그인 성공');
                    const userInfo = {
                        name : result.data.name,
                        email : result.data.email
                    }
                    sessionStorage.setItem('loginUser', JSON.stringify(userInfo));
                    window.location.href = '/';
                } else {
                    alert('로그인 실패');
                }
          })
            .catch(() => {
                alert('로그인 중 오류 발생');
            });
    }

    return (
        <div>
            <h2>로그인 페이지</h2>
            <Form style={style.form} onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">EMAIL</Form.Label>
                    <Col sm="10">
                    <Form.Control type="email" name="email" onChange={handleChange}/>
                    </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="2">PASSWORD</Form.Label>
                    <Col sm="10">
                    <Form.Control type="password" name="password" onChange={handleChange}/>
                    </Col>
            </Form.Group>
            <button type="submit">로그인</button>
            </Form>
        </div>
    )
}

const style = {
    container : {
        textAlign : 'center',
        marginTop : '40px',
    },
    title : {
        textAlign: 'center',
        marginBottom : '20px'
    },
    form : {
        margin: '0 auto',
        width : '80%'
    }
}

export default Login;