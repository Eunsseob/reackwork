import { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';


const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    const contentRef = useRef();
    return (
        <div className="editor">
            <tr>
                <th><input value={content} ref={contentRef} onChange={(e) => setContent(e.target.value)}placeholder="새로운 Todo를 추가하실껍니까???" style={{ width: '500px' }}/>&emsp;&emsp;&emsp;</th>
                <th><Button variant="success" onClick={() => {
                    if(content === ""){
                        contentRef.current.focus();
                        return;
                    }
                    onCreate(content);
                    setContent("");
                    }}>
                        추가</Button></th>
            </tr>
        </div>
    )
}

export default Editor;