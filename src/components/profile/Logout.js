import React from 'react';

const Logout = ({ onClickLogout }) => {

    return (
        <div>
            <input id='btnLogout'
                type='button'
                value='Logout'
                onClick={() => onClickLogout()} />
        </div>
    )
}

export default React.memo(Logout);