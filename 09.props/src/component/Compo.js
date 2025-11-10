import Button from './Button.js'

// string
// const Compo = props => {
//     return (
//         <>
//             <h3>본문입니다.</h3>
//             <p>{props.user}님은 {props.addr}에서 수업을 받습니다</p>
//         </>
//     )
// }

// // 객체로 전달
// const Compo = props => {
//     return (
//         <>
//             <h3>본문입니다.</h3>
//             <p>{props.useri.name}님은 {props.useri.addr}에서 살고 있습니다</p>
//             <p>{props.useri.name}님이 좋아하는 것은 {props.useri.likeList}의 {props.useri.likeList.length}개를 좋아합니다.</p>
//             <p>특히 {props.useri.likeList[1]}을 좋아합니다.</p>
//         </>
//     )
// }


// 객체로 전달
// const Compo = props => {
//     return (
//         <>
//             <h3>본문입니다.</h3>
//             <p>{props.name}님은 {props.addr}에서 살고 있습니다</p>
//             <p>{props.name}님이 좋아하는 것은 {props.likeList}의 {props.likeList.length}개를 좋아합니다.</p>
//             <p>특히 {props.likeList[1]}을 좋아합니다.</p>
//             <p>그 중에서도 특히 {props.likeList[2]}을 좋아합니다.</p>
//         </>
//     )
// }

const Compo = () => {
    const btnProps = {
        text : "내가만든버튼",
        color : ["hotpink","yellow","green","yellowgreen"],
        a : 1,
        b : 2,
        c : 3
    }
    function btnClick(e){
        alert("버튼 눌렀어?");
        console.log(e);
        console.log(e.target.name);
    }
    return (
        <>
            <h3>본문입니다</h3>
            <button name="A버튼" onClick={btnClick}>A버튼 이벤트</button><br></br>
            <button name="B버튼" onClick={btnClick}>B버튼 이벤트</button><br></br>
            <Button {...btnProps}></Button>
        </>
    )
}

export default Compo;