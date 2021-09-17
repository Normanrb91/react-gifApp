import {useFetchGifs} from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('pruebas con el custom hook useFetchGifs', () => {

    test('debe retornar el estado inicial ', async () => {

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('fekir'));

        const {data, loading} = result.current;

        await waitForNextUpdate();


        expect(data.length).toBe(0);
        expect(loading).toBe(true)

        
    });

    test('debe de retornar un arreglo de gif y loading en false ', async () => {

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('fekir'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false)
        
    });
    
    
    
})
