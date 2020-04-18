import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

// mbox
import { useObserver } from 'mobx-react';

// custom components
import Profile from './Profile';
import Logout from './Logout';

// context
import { ProfileContext } from '../../providers/Context';

const ProfileContainer = (props) => {

    const ProfileStore = useContext(ProfileContext);

    const [isInProgress, setIsInProgress] = useState(true);

    // get user on landing on this page to check that either previous token was valid or not
    const getUser = async () => {
        await ProfileStore.getUser();
        setIsInProgress(false);
    };

    // use effect
    useEffect(() => {
        getUser();
    }, []);

    // custom methods
    const onClickLogout = async () => {
        await ProfileStore.logout();
    };

    // rendering conditions
    return useObserver(() => (

        isInProgress 
            ? <div>Checking user session validtity.</div>
            : !ProfileStore.isTokenValid
                ? <Redirect to="/login" />
                : <div>
                    <div>
                        <Profile user={ProfileStore.user} />
                    </div>
                    <div>
                        <Logout onClickLogout={onClickLogout} />
                    </div>
                </div>

    ));
}

export default React.memo(ProfileContainer);