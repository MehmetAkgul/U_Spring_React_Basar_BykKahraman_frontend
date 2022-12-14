import * as ACTIONS from "./Constant";

const defaultState = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined,
};


const authReducer = (state = {...defaultState}, action) => {

    switch (action.type) {
        case ACTIONS.LOGOUT_SUCCESS: {
            return defaultState;
        }
        case  ACTIONS.LOGIN_SUCCESS: {

            return {
                ...action.payload,
                isLoggedIn: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;