import { todoReducer } from '../../../components/useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe( 'Pruebas en todoReducer', () => {

    test( 'debe de retornar el estado por defecto', () => {
        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );
    } );

    test( 'debe de agregar un TODO', () => {
        const todo = {
            id: 3,
            description: 'Aprender CSS',
            done: false
        };
        const action = {
            type: 'add',
            payload: todo
        };
        const state = todoReducer( demoTodos, action );

        expect( state ).toEqual( [...demoTodos, todo] );
        expect( state.length ).toBe( 3 );
    } );

    test( 'debe borrar un TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        };
        const state = todoReducer( demoTodos, action );

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [demoTodos[ 1 ]] );
    } );

    test( 'debe hacer el TOGGLE del TODO', () => {
        const action = {
            type: 'toggle',
            payload: 1
        };
        const state = todoReducer( demoTodos, action );

        expect( state[ 0 ].done ).toBe( true );
    } );

} );