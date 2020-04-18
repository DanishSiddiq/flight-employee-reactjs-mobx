// mbox
import { decorate, observable, computed, action } from 'mobx';

// services
import { fetchAllCountries } from '../services/country/CountryService';

class CountryStore {

    filterOptions = { name: '' };

    countries = [];

    // fetch countries from API
    fetch = async () => {

        const data = await fetchAllCountries();

        if (data) {
            this.countries.push(...data);
        }
    };


    // TODO: later add multiple filter possibility    
    get filter() {
        if (this.filterOptions.name !== '') {
            return this
                .countries
                .filter(country =>
                    country
                        .name
                        .toLowerCase()
                        .indexOf(this.filterOptions.name.toLowerCase()) !== -1);
        } else {
            return this.countries;
        }
    }

};

decorate(CountryStore, {
    filterOptions: observable,
    countries: observable,
    fetch: action,
    filter: computed
});

export default CountryStore;