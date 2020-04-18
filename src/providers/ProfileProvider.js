import React from 'react';

// context
import { ProfileContext } from './Context';

// stores
import ProfileStore from '../stores/ProfileStore';


const ProfileProvider = props => {

    const profileStore = new ProfileStore();

    return (
        <ProfileContext.Provider value={profileStore}>
            {props.children}
        </ProfileContext.Provider>
    );
}

export default ProfileProvider;