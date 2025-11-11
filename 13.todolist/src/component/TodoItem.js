import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const TodoItem = ({id, isDone, content, date}) => {
    return (
        <>
        <br></br>
        <Table striped bordered hover style={{ width: '900px' }}>
            <thead>
                <tr>
                    <th><input type="checkbox" />&emsp;&emsp;</th>
                    <th><div>Todo...&emsp;&emsp;</div></th>
                    <th><div>Date&emsp;&emsp;</div></th>
                    <th><Button variant="danger">삭제</Button>&emsp;</th>
                </tr>
                <tr>
                    <th>{id}</th>
                    <th>{isDone}</th>
                    <th>{content}</th>
                    <th>{date}</th>
                </tr>
                
            </thead>
        </Table>
        </>
    )
}

export default TodoItem;