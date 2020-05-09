const initialState = {
    isLogged: false,
};

function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogged: true,
            };
            case 'LOGOUT_SUCCESS':
                return {
                    ...state,
                    isLogged: false,
                };
                default: return state;
    }
}

export default AppReducer;