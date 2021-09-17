import React from 'react';

import { shallow } from 'enzyme';
import {GifExpertApp} from '../GifExpertApp'




describe('pruebas con <GifExpertApp />', () => {

    test('debe mostrar el componente correctamente ', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
        
    })
    
    
})
