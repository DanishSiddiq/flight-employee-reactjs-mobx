import CountryInfo from '../../models/country/CountryInfo';

/**
 *
 * @returns {Promise<Array>}
 */
export const fetchAllCountries = async () => {
    const arrCountries = [];
    try {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        if (response.ok) {
            // transform into model
            const result = await response.json();
            result.forEach(res => {
                const countryInfo   = new CountryInfo();                
                countryInfo.name    = res.name;
                countryInfo.capital = res.capital;
                countryInfo.flag    = res.flag;
                
                arrCountries.push(countryInfo);
            });

            return [...new Set(arrCountries)];
        }

        // custom error handling here
        console.log('Countries cannot be fetched');
    } catch (err) {
        //Throw the return payload
        console.log(err);
    }

    return arrCountries;
};
