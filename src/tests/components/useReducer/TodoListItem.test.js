import React from 'react';
import { shallow } from 'enzyme';
import TodoListItem from '../../../components/useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe( 'Pruebas en <TodoListItem />', function() {

    const deleteTodo = jest.fn();
    const toggleTodo = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo={demoTodos[ 0 ]}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            index={1}
        />
    );

    test( 'debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'debe de llamar la función deleteTodo', () => {
        wrapper.find( 'button' ).simulate( 'click' );
        expect( deleteTodo ).toHaveBeenCalledWith( demoTodos[ 0 ].id );
    } );

    test( 'debe de llamar la función toggleTodo', () => {
        wrapper.find( 'p' ).simulate( 'click' );
        expect( toggleTodo ).toHaveBeenCalledWith( demoTodos[ 0 ].id );
    } );

    test( 'debe de mostrar el texto correctamente', () => {
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( `1. ${demoTodos[ 0 ].description}` );
    } );

    test( 'debe de tener la clase complete si el TODO.done = true', () => {
        const todo = demoTodos[ 0 ];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem todo={todo}/>
        );

        expect( wrapper.find( 'p' ).hasClass( 'completed' ) ).toBe( true );
    } );


} );