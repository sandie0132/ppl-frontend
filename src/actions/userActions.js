
import userService from '../_services/user.service';
import { alertActions } from '../actions/alert.actions'
import { history } from '../_helpers/history';
import { userConstants } from '../constants/user.constants';



export const userActions = {
    register,
    login
}



export function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}



export function login(user) {
    console.log("i am in action")
    return dispatch => {
        dispatch(request(user));

        userService.login(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/timeline');
                    dispatch(alertActions.success('LogIn successful'));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}


