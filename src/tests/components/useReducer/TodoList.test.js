import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../components/useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe( 'Pruebas en <TodoList />', function() {

    const deleteTodo = jest.fn();
    const toggleTodo = jest.fn();

    const wrapper = shallow( <
            TodoList
            todos={demoTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
        />
    );

    test( 'debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'debe tener dos <TodoListItem />', () => {
        expect( wrapper.find( 'TodoListItem' ).length ).toBe( demoTodos.length );

        expect( wrapper.find( 'TodoListItem' ).at( 0 ).prop( 'deleteTodo' ) ).toEqual( expect.any( Function ) );
    } );

} );