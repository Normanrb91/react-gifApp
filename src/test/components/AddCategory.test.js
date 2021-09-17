import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas del <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });


    test('Debe mostrar el componente correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });


    test('Debe de cambiar el input ', () => {

        const value = 'fekir';
        const input = wrapper.find('input');

        input.simulate('change', {target: {value}});
        
    });


    test('No se debe mandar la info con el submit ', () => {

        const form = wrapper.find('form');

        form.simulate('submit', {preventDefault(){}});
      
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('debe de llamar el setCategories y debe de limpiar el input ', () => {

        const value = 'fekir'
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();

        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
    
})
