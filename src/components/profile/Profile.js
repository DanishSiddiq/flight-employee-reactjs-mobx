import React from 'react';

const Profile = ({ user }) => {
    return (
        <div>

            First Name:
            <label> {user && user.firstName}</label> <br />

            Last Name:
            <label> {user && user.lastName}</label> <br />

            Email:
            <label> {user && user.email}</label> <br />

            Registration Number:
            <label> {user && user.registrationNumber}</label> <br />

        </div>
    );
}

export default React.memo(Profile);