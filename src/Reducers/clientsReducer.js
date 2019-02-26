const initialState = {
    user: {},
    movings: [],
    movers: [],
    messages: []
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return { ...state, user: action.payload };
        case "SET_COMPANIES_DATA":
            return { ...state, movers: action.payload };
        case "SET_MESSAGES":
            return { ...state, messages: action.payload };
        default:
            return {...state}
    }
};