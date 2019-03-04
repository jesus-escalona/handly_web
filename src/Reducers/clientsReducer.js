import MoveType from "../components/MoveType";

const initialState = {
    user: {},
    movings: [],
    movers: [],
    messages: [],
    origin: {},
    destination: {},
    selectedMoving: {},
    moveType: '',
    moveTypes: []
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
            const { administrative, latlng, name, value } = action.payload;
            return { ...state, [action.location_type]: {administrative, latlng, name, value} };
        case "SET_MOVE_TYPE_DATA":
            return { ...state, moveType: action.payload};
        case "SET_ESTIMATE_DATA":
            return { ...state, selectedMoving: action.payload };
        case "SET_MOVE_TYPES":
            const moveTypes = action.payload.map(moveType => moveType.attributes);
            return { ...state, moveTypes  };
        default:
            return {...state}
    }
};