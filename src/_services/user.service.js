const userService = {
    login,
    register

}



function register(user) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:8080/v1/auth/register`, requestOptions).then(handleResponse);

}


function login(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:8080/v1/auth/login`, requestOptions).then(handleResponse);

}


function handleResponse(response) {
    console.log("i ma handle response", response)
    return response.text().then(text => {
        console.log("i ma handle response text", text)
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                console.log("error in handle respone")
                return Promise.reject(error);
                // auto logout if 401 response returned from api
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log("<<<<<<<<<<<in serverrespomse>>>>>>>>", data)
        return data;
    });
}

module.exports = userService;