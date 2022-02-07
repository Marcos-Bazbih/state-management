const MassageReducer = (state = "massage", action) => {
    switch (action.type) {
        case "success":
            return "success";
        case "fail":
            return "fail";
        case "pending":
            return "pending";

        default:
            return state;
    };
};

export default MassageReducer;