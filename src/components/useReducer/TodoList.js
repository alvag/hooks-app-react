import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ( { todos, deleteTodo, toggleTodo } ) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( ( todo, index ) => (
                    <TodoListItem key={todo.id}
                                  todo={todo}
                                  deleteTodo={deleteTodo}
                                  toggleTodo={toggleTodo}
                                  index={index + 1}/>
                ) )
            }
        </ul>
    );
};

export default TodoList;