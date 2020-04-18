import React from 'react';
import AppInfo from './Home';

const HomeContainer = () => {
    return (
        <div>
            <AppInfo />
        </div>
    );
}

export default React.memo(HomeContainer);