import React from "react";
import Thumbnail from './Thumbnail';

/**
 *
 * @param countries
 * @returns {null|*[]}
 * @constructor
 */
const CountriesList = ({ countries = [] }) => {
    if (countries.length === 0) return (null);

    return (
        <div className='grid-container'>
            { countries.map((country, i) => <Thumbnail key={i} country={country} />) }
        </div>
    );
};

export default React.memo(CountriesList);
