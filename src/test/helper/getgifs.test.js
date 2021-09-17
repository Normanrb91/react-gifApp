import { getGifs } from "../../helper/getgifs"

describe('Pruebas con GetGif Fecht', () => {

    test('debe de traer 10 elementos ', async() => {

        const gifs =  await getGifs('fekir')
        expect(gifs.length).toBe(10);
    });

    test('Cuando no se manda la categoria ', async() => {

        const gifs =  await getGifs('')
        expect(gifs.length).toBe(0);
    });
    
    
})
