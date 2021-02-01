import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../../components/useContext/AppRouter';
import { UserContext } from '../../../components/useContext/UserContext';

describe( 'Pruebas en <AppRouter />', function() {

    const user = {
        id: 1,
        name: 'Max'
    };

    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test( 'debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

} );