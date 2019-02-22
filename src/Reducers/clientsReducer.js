export const clientReducer = (state = [], action) => {
    switch (action.type) {
        case "GET":
            return [...state];
        default:
            return [...state]
    }
};