import React from 'react';

const Login = ({ email, password, onClickLogin }) => {
    return (
        <div>
            <form onSubmit={onClickLogin} >
                <div>
                    <input id='txtLogin'
                        type='text'
                        placeholder='example@email.com'
                        autoComplete='on'
                        {...email} />
                </div>
                <div>
                    <input id='txtPassword'
                        type='password'
                        autoComplete='on'
                        {...password} />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

export default React.memo(Login);