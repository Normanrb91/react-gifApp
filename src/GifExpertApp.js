import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState('');

        return (

            <>
            {
            categories ? (
                <div className="container ">
                    <h2 className="mt-5 mb-3">Gif App</h2>
                    <AddCategory setCategories={setCategories} />
                    <hr />
                    {
                    <GifGrid key={categories} category={categories} />
                    }
                </div>
            ) :
                <div className="container">
                    <h2 className="mt-5 mb-3">Gif App</h2>
                    <AddCategory setCategories={setCategories} />
                    <hr />
                </div>
            }

            </>
        );

}
