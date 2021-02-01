import React from 'react';
import { shallow, mount } from 'enzyme';
import HomeScreen from '../../../components/useContext/HomeScreen';
import { UserContext } from '../../../components/useContext/UserContext';

describe( 'Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Max',
        email: 'max@gmail.com'
    };

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test( 'debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    } );


} );