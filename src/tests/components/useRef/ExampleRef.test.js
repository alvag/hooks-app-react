import React from 'react';
import { shallow } from 'enzyme';
import { ExampleRef } from '../../../components/useRef/ExampleRef';

describe( 'Pruebas en <ExampleRef />', function() {

    const wrapper = shallow( <ExampleRef/> );

    test( 'debe mostrarse correctamente', () => {
        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBe( false );
    } );

    test( 'debe mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find( 'button' ).simulate( 'click' );
        expect( wrapper.find( 'MultipleCustomHooks' ).exists() ).toBe( true );
    } );

} );