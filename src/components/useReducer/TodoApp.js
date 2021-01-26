import React, { useEffect, useReducer } from 'react';
import './styles.css';
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

const TodoApp = () => {

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
    };

    const [todos, dispatch] = useReducer( todoReducer, [], init );

    useEffect( () => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [todos] );

    const handleAddTodo = ( todo ) => {
        dispatch( {
            type: 'add',
            payload: todo
        } );
    };

    const deleteTodo = ( todoId ) => {
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch( action );
    };

    const toggleTodo = ( todoId ) => {
        dispatch( {
            type: 'toggle',
            payload: todoId
        } );
    };

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                </div>

                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;