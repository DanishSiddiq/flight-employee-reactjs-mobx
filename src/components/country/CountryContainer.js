import React, { useEffect, useState, useContext } from "react";

// mbox
import { useObserver } from 'mobx-react';

// custom components
import Search from './Search';
import CountriesList from './CountriesList';

// context
import { CountryContext } from '../../providers/Context';

// style
import '../../style/custom.css';

const CountryContainer = () => {

    const CountryStore = useContext(CountryContext);

    const [inputs, setInputs]           = useState({ txtSearch: '' });
    const [inprogress, setInprogress]   = useState(true);

    /**
     * fetching all countries from service
     */
    const fetchCountries = async () => {
        await CountryStore.fetch();
        setInprogress(false);
    };

    /**
     * handling search button event
     * @param {*} event 
     */
    const handleSearchCountries = (event) => {
        const name = inputs.txtSearch.trim().toLowerCase();
        if (name !== '') {
            CountryStore.filterOptions.name = name;
        }
    }

    /**
     * handling reset search
     * @param {*} event 
     */
    const handleResetCountries = (event) => {
        setInputs({ txtSearch: '' });
        CountryStore.filterOptions.name = '';
    }

    /**
     * all input texts dynamic binding
     * @param {*} event 
     */
    const handleOnChange = (event) => {
        const newValue = event.target.value;
        const inputName = event.target.name;

        setInputs((prevState) => {
            return (
                {
                    ...prevState,
                    [inputName]: newValue
                }
            );
        });
    };

    // use effects
    useEffect(() => { fetchCountries(); }, []);

    return useObserver(() => (

        inprogress
            ? <div>Fetching countries from server</div>
            : <div>
                <Search txtSearch={inputs.txtSearch}
                    handleOnChange={handleOnChange}
                    handleSearchCountries={handleSearchCountries}
                    handleResetCountries={handleResetCountries} />
                <CountriesList
                    countries={CountryStore.filter} />
            </div>
    ));
};

export default React.memo(CountryContainer);
