import React from 'react';
import PropTypes from 'prop-types';


export const GifGridItem = ({title, url}) => {
    return (
        <div className="card text-center">
            <div class="card-body ">
                <img src={url} alt={title} />
                <p className="mt-3">{title}</p>
            </div>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
