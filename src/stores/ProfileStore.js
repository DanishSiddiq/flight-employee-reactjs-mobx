// mbox
import { decorate, observable, action } from 'mobx';

// services
import { get, login } from '../services/profile/ProfileService';

// helpers
import CONSTANTS from '../utils/constants';
import cmn from '../utils/common';

// models
import User from '../models/profile/User';

class ProfileStore {

    // token is valid or not
    isTokenValid = false;

    // user data
    user = new User();

    /**
     * 
     */
    getUser = async () => {
        const token = cmn.getData(true, CONSTANTS.PROFILE.ACCESS_TOKEN);
        if (token) {

            const result = await get({ token });
            if (result.isSuccess) {
                this.isTokenValid = true;
                this.user = result.user; // memory leak, write transformer 
            } // check here response code for multiple cases like network failure or in valid token
            else {
                // currently by default considering that token is invalid
                this.isTokenValid = false;
                cmn.removeData(true, CONSTANTS.PROFILE.ACCESS_TOKEN);
            }
        }
        else {
            this.isTokenValid = false;
            cmn.removeData(true, CONSTANTS.PROFILE.ACCESS_TOKEN);
        }
    }

    /**
     * 
     */
    loginUser = async ({ email, password }) => {

        let isSuccess = false;
        let msg = '';

        // check credentiala from server
        const result = await login({ email, password });
        if (result.isSuccess) {
            isSuccess = cmn.setData(true, CONSTANTS.PROFILE.ACCESS_TOKEN, result.token);
            if (isSuccess) {
                // update token validity
                this.isTokenValid = true;
                return { isSuccess, msg };
            } else {
                msg = `Kindly update browser to support login feature`;
            }
        } else {
            if (result.message) {
                msg = result.message;
            } else {
                msg = `Internal server errer. Kindly contact admin`
            }
        }

        return { isSuccess, msg };
    }

    // action method add observer
    logout = async () => {
        this.isTokenValid = false;
        this.user.defaultValue();
        cmn.removeData(true, CONSTANTS.PROFILE.ACCESS_TOKEN);
    }
};

decorate(ProfileStore, {
    isTokenValid: observable,
    user: observable,
    getUser: action,
    login: action,
    logout: action
})

export default ProfileStore;