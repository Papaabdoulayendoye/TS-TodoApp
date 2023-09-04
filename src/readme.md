import Counter from './components/Counter';
import Heading from './components/Heading';
import Section from './components/Section';
import List from './components/List';
import { useState, useEffect, useCallback, useReducer, ChangeEvent } from "react";


interface User {
    id : number;
    username : string ;
}

const InitialState = { count : 0,  text : "" }

const enum REDUCER_ACTION_TYPE  {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}

type ReducerAction = {
    type : REDUCER_ACTION_TYPE,
    payload ?: string,
}

const CounterReducer = (state : typeof InitialState, action : ReducerAction) : typeof InitialState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state, count : state.count + 1, text : action.payload ?? '' }
        
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state, count : state.count - 1, text : action.payload ?? '' }
        
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state, text : action.payload  ?? '' }
        
        default:
            throw new Error();
        
    }
}

function App() {
    
    const [state, dispatch] = useReducer(CounterReducer, InitialState)
    
    const increment = () => dispatch({type : REDUCER_ACTION_TYPE.INCREMENT, payload : 'Increment' })
    const decrement = () => dispatch({type : REDUCER_ACTION_TYPE.DECREMENT, payload : "Decrerment"})
    
    const handleTextInput = (e : ChangeEvent<HTMLInputElement>) =>{
            dispatch(
                {
                    type : REDUCER_ACTION_TYPE.NEW_INPUT,
                    payload : e.target.value
                }
            )
    }
    
    return (
        <div>
            {/* <Heading title={"Heading "}/> */}
            {/* <Section author={"Laye"} /> */}
            {/* <Counter /> */}
            {/* <Counter setCount={setCount}>Counter is : {count} </Counter> */}
            {/* <List items={["☕ coffe", "🍫 chocolate", "🥞 pancake"]} render={(item : string) => <span>{item}</span>}/> */}
            
            <h1>Counter App with : (useReducer)</h1>
            <p>Count {state.count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <input type="text" onChange={handleTextInput} />
            <p>New input : {state.text}</p>
        </div>
    );
}

export default App;
