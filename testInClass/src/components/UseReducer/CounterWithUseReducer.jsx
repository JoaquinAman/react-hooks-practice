import React, { useReducer, useState } from 'react'

function CounterWithUseReducer() {

    const types = {
        add:"add",
        delete:"delete",
        reset:"reset"
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case types.add:
                return [...state, action.payload]

            case types.delete:
                return state.filter(todo => todo.id !== action.payload)
            
            case types.update:
                return state.map(todo => {
                    
                    return todo.id === action.payload.id ?
                         
                          action.payload

                    : todo
                })
        
            default:
                state;
        }
    }

    const initialState = [
    
        {
            id:1,
            msg:"first task"
        },
        {
            id:2,
            msg:"second task"
        },
        {
            id:3,
            msg:"third task"
        },
    ]

    const [inputState, setInputState] = useState('')
    const [todos, dispatch] = useReducer(reducer, initialState)

    const uniqueId = () => {
        return Math.floor( Date.now());
    } 


    const handleSubmit = (e) => {

        e.preventDefault() 

        const newTodo = {
            id: uniqueId(),
            msg: inputState
        }
        console.log(newTodo.id);
        dispatch(
            {
                type:types.add,
                payload: newTodo
            })
        
    }
    const handleDelete = (id) => {

        dispatch(
            {
                type:types.delete,
                payload: id
            })
        
    }
    const handleUpdate = (newTodo) => {
    
        console.log(newTodo)
        dispatch(
            {
                type:types.update,
                payload:newTodo
            })
    }

    console.log(inputState)
  return (
    <>

        <h2>Todos with Reducer</h2>
        <ul>
            {todos ? todos.map(e => {
                return <li key={e.id}>
                        {e.msg}
                        <button onClick={()=>handleUpdate({...e, msg:inputState})}>update</button>
                        <button onClick={()=>handleDelete(e.id)}>delete</button>
                    </li>
            })
            : <h1>Empty Todos</h1>
            }
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add Todo' value={inputState} onChange={(e) => setInputState(e.target.value)}/>
        </form>
    </>
  )
}

export default CounterWithUseReducer