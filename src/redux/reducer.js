const initialState = {
    isLogged: false,
    products:[{
        name:"Mangoes",
        qty: 3,
        price: 200
    }]
};

function AppReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogged: true,
                // action.user
            };
            case 'LOGOUT_SUCCESS':
                return {
                    ...state,
                    isLogged: false,
                };
            case 'ADD_PRODUCT':
                console.log(productinfo);
                
                debugger
                return {
                    ...state,
                    products: Array.push(products),
                };
                default: return state;
    }
}

export default AppReducer;