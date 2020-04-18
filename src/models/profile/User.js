export default class User {

    constructor () {
        this.defaultValue();
    }

    // access this method like an attribute
    defaultValue () {
        this.firstName = '';
        this.lastName = '';
        this.registrationNumber = '';
        this.email = '';
        this.createdAt = null;
        this.updatedAt = null;
    }
};
