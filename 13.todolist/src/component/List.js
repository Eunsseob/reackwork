import TodoItem from "./TodoItem";

const List = ({todos}) => {
    return (
        <>
        <div className="list">
            <br></br>
            <h4>Todo List ✍</h4>
            <br></br>
            <input placeholder="검색어를 넣어주세요" />
            <br></br>
            <div className="todos_wrap">
                {
                    todos.map((todo) => <TodoItem {...todo}/>)
                }
            </div>
        </div>
        </>
    )
}

export default List;