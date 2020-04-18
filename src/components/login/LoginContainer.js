import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

// mbox
import { useObserver } from 'mobx-react';

// custom components
import Login from './Login';
import Error from '../common/Error';

// context
import { ProfileContext } from '../../providers/Context';


const LoginContainer = () => {

    const ProfileStore = useContext(ProfileContext);

    const [isInProgress, setIsInProgress]   = useState(true);
    const [errorMsg, setErrorMsg]           = useState([]);

    // get user to check token validity on hard refresh of the page
    const getUser = async () => {
        await ProfileStore.getUser();
        setIsInProgress(false);
    };

    // request store
    const login =  async () => {
        const result = await ProfileStore.loginUser({ email: email.value, password: password.value });
        if (!result.isSuccess) {
            setErrorMsg([result.msg]);
        }
    }

    // login click
    const onClickLogin = (e) => {

        e.preventDefault();

        // reset fields before sending request to server
        setErrorMsg([]);

        // get data from store
        login();
    };

    // container related attributes
    const useFormInput = initialValue => {
        const [value, setValue] = useState(initialValue);

        const handleChange = e => {
            setValue(e.target.value);
        }

        return {
            value,
            onChange: handleChange
        }
    };
    const email = useFormInput('');
    const password = useFormInput('');


    // use effects
    useEffect(() => { getUser(); }, []);

    // rendering logic
    return useObserver(() => (
        isInProgress ?
            <div>Checking Authentication</div>
            : ProfileStore.isTokenValid
                ? <Redirect to="/profile" />
                : <div>
                    <Error errors={errorMsg} />
                    <Login email={email} password={password} onClickLogin={onClickLogin} />
                </div>
    ));
}

export default React.memo(LoginContainer);