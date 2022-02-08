import { SUCCESS, PRIMARY, SECONDARY, ERROR, INFO, WARNING, SHOW } from "../Actions/massage-types";

const MassageReducer = (state = "massage", action) => {
    switch (action.type) {
        case SUCCESS:
            return action.payload;
        case PRIMARY:
            return action.payload;
        case SECONDARY:
            return action.payload;
        case ERROR:
            return action.payload;
        case INFO:
            return action.payload;
        case WARNING:
            return action.payload;
        case SHOW:
            return { ...action.payload, isOpen: true };
        default:
            return state;
    };
};

export default MassageReducer;