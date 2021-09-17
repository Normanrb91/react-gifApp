import React from 'react';
import {shallow} from 'enzyme';
import {GifGrid} from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el componente <GridGif />', () => {
    
    const category = 'titulo';

    test('Debe mostrar el componente correctamente ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar cuando se cargan las imagens useFetchGifs ', () => {

        const gifs = [{
            id: 'abc123',
            title: 'Norman prueba cosas',
            url: 'https://pruebas.com'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
    

})
