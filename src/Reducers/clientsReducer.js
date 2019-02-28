const initialState = {
    user: {},
    movings: [],
    movers: [],
    messages: [],
    origin: {},
    destination: {},
    selectedMoving: {}
};

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return { ...state, user: action.payload };
        case "SET_COMPANIES_DATA":
            return { ...state, movers: action.payload };
        case "SET_MESSAGES":
            return { ...state, messages: action.payload };
        case "SET_LOCATION_DATA":
            const { administrative, latlng, name } = action.payload;
            return { ...state, [action.location_type]: {administrative, latlng, name} };
        case "SET_ESTIMATE_DATA":
            return { ...state, selectedMoving: action.payload };
        default:
            return {...state}
    }
};