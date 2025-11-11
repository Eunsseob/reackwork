import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';


const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    return (
        <div className="editor">
            <tr>
                <th><input onChange={(e) => setContent(e.target.value)}placeholder="새로운 Todo를 추가하실껍니까???" style={{ width: '500px' }}/>&emsp;&emsp;&emsp;</th>
                <th><Button variant="success" onClick={() => {onCreate(content)}}>추가</Button></th>
            </tr>
        </div>
    )
}

export default Editor;