import React from 'react';
import {shallow} from 'enzyme';
import {GifGridItem} from '../../components/GifGridItem';

describe('Pruebas en el componente <GridGifItem />', () => {

    test('Debe mostrar el componente correctamente ', () => {

        const title = 'titulo';
        const url = 'http://localhost/image.jpg'

        const wrapper = shallow(<GifGridItem title={title} url={url}/>)
        expect(wrapper).toMatchSnapshot();
        
    });

})
