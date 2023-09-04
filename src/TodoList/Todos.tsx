import styles from '../styles/TodosList.module.css'

type todoProps = {
    todo : any,
    DeleteTodo : any , 
    CompleteTodo : any ,
}

const Todos = ({ todo, DeleteTodo, CompleteTodo } : todoProps) => {
    
    return (
        <li>
            <input type="checkbox" checked={todo.complete}/>
            <i></i>
            <span>{todo.myTodo}</span>
            <div className={styles.BTN} style={{display: "flex", marginLeft : "10px", columnGap: "8px"}}>
                <button 
                    className={styles.DEL}
                    style={{padding : " 5px", borderRadius : "3px"}}
                    onClick={() => DeleteTodo(todo.id)}
                    >Delete</button>
                <button 
                    className={styles.COM}
                    onClick={() => CompleteTodo(todo.id)}
                >Complete</button>
            </div>
        </li>
    )
}

export default Todos
