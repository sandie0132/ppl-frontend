import { userConstants } from '../constants/user.constants'




// const registerReducer = (state = initState, action) => {

const registerReducer = (state = {}, action) => {

    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return { message: "registering" };
        case userConstants.REGISTER_SUCCESS:
            return { message: "email registered" };
        case userConstants.REGISTER_FAILURE:
            return { message: "registration failed" };
        default:
            return state
    }
}

export default registerReducer;
