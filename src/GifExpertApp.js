import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState('');

        return (

            <>
            {
            categories  ? (
                <div>
                    <h2>GifExpertApp</h2>
                    <AddCategory setCategories={setCategories} />
                    <hr />
                    {
                    <GifGrid key={categories} category={categories} />
                    }
                </div>
            ) :
                <div>
                    <h2>GifExpertApp</h2>
                    <AddCategory setCategories={setCategories} />
                    <hr />

                </div>
            }

            </>
        );

}
