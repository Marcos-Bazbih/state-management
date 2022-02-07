import { SUCCESS, PRIMARY, SECONDARY, ERROR, INFO, WARNING } from "../Actions/massage-types";

const MassageReducer = (state = "massage", action) => {
    switch (action.type) {
        case SUCCESS:
            return 'success';
        case PRIMARY:
            return 'primary';
        case SECONDARY:
            return 'secondary';
        case ERROR:
            return 'error';
        case INFO:
            return 'info';
        case WARNING:
            return 'warning';

        default:
            return state;
    };
};

export default MassageReducer;