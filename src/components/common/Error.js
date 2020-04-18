import React from 'react';

const Error = ({ errors }) => {

    if(!errors || errors.length === 0) {
        return (
            <div></div>
        );
    }

    return (
        <div>
            <ul id='lstErrMsg'>
                { errors.map((e, index) => {
                    return (<li key={`errMsg_${index}`}>{e}</li>)
                    })
                }
            </ul>
        </div>
    );
};

export default React.memo(Error);