import User from '../../models/profile/User';

/**
 * 
 * @param {*} param0 
 */
export const login = async ({ email, password }) => {
    
    let responseCode;
    let isSuccess = false;

    try {
        const response = await fetch('http://localhost:3133/api/v1/employee/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json', 'Accept':'*/*'},
            body: JSON.stringify({ email, password })
          });

        responseCode = response.status;
        const result = await response.json();

        if (response.ok) {
            isSuccess     = true;
        }

        return { isSuccess, responseCode, ...result };

    } catch (err) {
        //Throw the return payload
        console.log(err);
    }

    return { isSuccess, responseCode };;
};


/**
 * 
 * @param {*} param0 
 */
export const get = async ({ token }) => {
    const user = new User();
    let responseCode;
    let isSuccess = false;
    
    try {
        const response = await fetch('http://localhost:3133/api/v1/employee', {
            method: 'GET',
            headers: {'Content-Type':'application/json', 'Authorization':`bearer ${token}`}
          });
        
        responseCode = response.status;
        const result = await response.json();

        if (response.ok) {
            
            isSuccess    = true;
            // transform into model
            user.firstName          = result.firstName;
            user.lastName           = result.lastName;
            user.email              = result.email;
            user.registrationNumber = result.registrationNumber;
            user.createdAt          = result.createdAt;
            user.updatedAt          = result.updatedAt;
        }

        return { isSuccess, responseCode, user };

    } catch (err) {
        //Throw the return payload
        console.log(err);
    }

    return { isSuccess, responseCode };
};
