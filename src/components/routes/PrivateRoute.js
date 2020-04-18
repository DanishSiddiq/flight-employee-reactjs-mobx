import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import CONSTANTS from '../../utils/constants';
import helper from '../../utils/common';

const PrivateRoute = ({ component: Component , ...rest }) => {

    const token = helper.getData(true, CONSTANTS.PROFILE.ACCESS_TOKEN);

    return (
        <Route
            {...rest}
            render={(props) => token ? <Component {...props} />
                                     : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
     );
};

export default PrivateRoute;