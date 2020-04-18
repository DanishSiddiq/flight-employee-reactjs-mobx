import React from 'react';

/**
 * @return {null}
 */
const Thumbnail = ({ country = null }) => {
    if(!country) return (null);

    return (
        <div className='grid-item'>
            <div>
                <img className='img-flag' src={country.flag} alt={country.name} />
            </div>
            <div>
                <label>{country.name}</label>
                <br/>
                <label>Capital: {country.capital}</label>
            </div>
        </div>
    );
};

export default React.memo(Thumbnail);
