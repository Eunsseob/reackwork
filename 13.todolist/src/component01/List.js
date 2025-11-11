import TodoItem from "./TodoItem";

const List = () => {
    return (
        <>
            <br></br>
            <h4>Todo List ✍</h4>
            <br></br>
            <input placeholder="검색어를 넣어주세요" />
            <br></br>
            <div>
                <TodoItem />
            </div>
            <br></br>
        </>
    )
}

export default List;