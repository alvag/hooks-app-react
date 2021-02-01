import React from 'react';
import { mount } from 'enzyme';
import LoginScreen from '../../../components/useContext/LoginScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe( 'Pruebas en <LoginScreen />', function() {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    );

    test( 'debe mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );

    test( 'debe ejecutar el setUser con el argumento esperado', () => {
        wrapper.find( 'button' ).prop( 'onClick' )();
        expect( setUser ).toHaveBeenCalledWith( {
            id: 1,
            name: 'Max Alva'
        } );
    } );

} );