import React from 'react';
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category);

    return(
        <>
        <h2 c>{category}</h2>

            {loading && 

                <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Espere...</span>
                </div>
            }

            <div className="card-grid mb-2">
            {
                images.map(img =>(
                    <GifGridItem 
                         key={img.id}
                         {... img}
                    />
                ))
            }

        </div>
        </>
    )
}


GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
