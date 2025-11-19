import {Table, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { countIncrease } from '../store/store';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
// import user from './login';

function Cart() {
    // const [list, setList] = useState([]);
    // const user = JSON.parse(sessionStorage.getItem('loginUser'));

    // useEffect(() => {
    //     axios.get('http://localhost:8080/react/getCart', {params: {memId: user.email}})
    //     .then((result) => {
    //         console.log(user.email);
    //         setList(result.data);
    //     })
    //     .catch(() => {
    //         console.log('실패');
    //     });
    // }, [])
    
    const [list, setList] = useState([]);

    useEffect(() => {
        const user = JSON.parse(sessionStorage.getItem('loginUser'));

        if(!user) {
            console.log('로그인 후 사용');
            return;
        }

        axios.get('http://localhost:8080/react/getCart', {params:{memId: user.email}})
             .then(result => {
                console.log(user.email);
                setList(result.data);
             })
             .catch(() => {
                console.log("실패");
             })
    }, []);

    return (
        <div className='cart'>
            <br/>
            <h2>CART LIST</h2>
            <br/>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map(c =>
                            <tr>
                                <td>{c.id}</td>
                                <td>{c.title}</td>
                                <td>{c.count}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;