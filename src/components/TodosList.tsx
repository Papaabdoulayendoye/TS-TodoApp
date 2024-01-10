import { useState} from "react";
import styles from "../styles/TodosList.module.css";
import { v4 } from "uuid";
import Todos  from './Todos';
import { toast } from "react-toastify";

interface TODOS {
    id: string;
    myTodo: string;
    complete: boolean;
}

function TodosList() {
    // const [Todos, setTodos] = useState<TODOS[] | null  >(null) // HERE...
    const [todos, setTodos] = useState<TODOS[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");
    
    
    const createNewTodo = () => {
    if (newTodo !== '') {
        
        setTodos((prev) => {
            return [...prev, { id: v4(), myTodo: newTodo, complete: false }];
            // return [...prev ? [...prev, {id :v4(), myTodo : newTodo, complete : false } ] : [] ] // HERE...
        });
        setNewTodo('')
        toast.success("A new Todo to complete has been added  👍!", {
            position : toast.POSITION.TOP_RIGHT
        })
    }else{
        toast.warn("Input required. 👎📛", {
            position : toast.POSITION.TOP_RIGHT
        })
    }
    };
    
    
    const DeleteTodo = (id : string)  => {
        todos.forEach(todo => {
            if (todo.id == id) {
                if (todo.complete) {
                    setTodos
                    (currentTodos => currentTodos.filter
                        (todo => {
                            if (todo.id !== id) {
                                return {...todo}
                            }}
                        )
                    )
                    toast.success
                    ("✅Your Todo has been removed succefully!",
                        {
                            position : toast.POSITION.TOP_RIGHT
                        }
                    )
                }else {
                    toast.error("❌You must Complete a Todo before you can delete it!", {
                        position : toast.POSITION.TOP_RIGHT
                    })
                }
            }
        })
    }
    
    
    const CompleteTodo = (id : string)  => {
        setTodos(currentTodos => currentTodos.map(todo => {
            if (todo.id == id) {
                return {...todo, complete : true }
            }else {
                return {...todo}
            }
        } 
        ))
        toast.success("Good job, you have completed a Todo ✅!", {
        position : toast.POSITION.TOP_RIGHT
        })
    }
    
    
    return (
    <div className={styles.Container}>
        <div className={styles.Header}>
        <h1>Todo App</h1>
        </div>
        <div className={styles.Body}>
        <div className={styles.newTodo}>
            <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <input type="submit" value="New Todo" onClick={createNewTodo} />
        </div>
        <div className={styles.Todos}>
            <ul>
            {todos.length > 0
                ? todos?.map((todo) => {
                    return <Todos 
                        key={todo.id} 
                        todo={todo} 
                        DeleteTodo={DeleteTodo} 
                        CompleteTodo={CompleteTodo}/>
                })
                : ""}
            </ul>
        </div>
        </div>
    </div>
    );
}

export default TodosList;
