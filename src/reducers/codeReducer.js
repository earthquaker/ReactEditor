export default function reducer(state={}, action) {
    switch(action.type) {
        case "GET_CODE": {
            state = action.payload;
            return state;
        }
        default:
            return state;
    }
};