import React from 'react';

// context
import { CountryContext } from './Context';

import CountryStore from '../stores/CountryStore';

const CountryProvider = props => {

    const countryStore = new CountryStore();

    return (
        <CountryContext.Provider value={countryStore}>
            {props.children}
        </CountryContext.Provider>
    );

};

export default CountryProvider;
