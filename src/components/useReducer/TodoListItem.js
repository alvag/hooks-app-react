import React from 'react';

const TodoListItem = ( { todo, toggleTodo, deleteTodo, index } ) => {
    return (
        <li className="list-group-item">
            <p className={`${todo.done && 'completed'}`} onClick={() => toggleTodo( todo.id )}>
                {index}. {todo.description}
            </p>

            <button className="btn btn-danger" onClick={() => deleteTodo( todo.id )}>Borrar</button>
        </li>
    );
};

export default TodoListItem;