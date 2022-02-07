import { useReducer } from "react";
import MassageReducer from "../../Reducers/massage-reducer";
import { SuccessAction, FailAction, PendingAction } from "../../Actions/massage-actions";


const Massage = () => {
    const [state, dispatch] = useReducer(MassageReducer, "massage");

    const SuccessDispatch = () => {
        dispatch(SuccessAction);
    };
    const FailDispatch = () => {
        dispatch(FailAction);
    };
    const PendingDispatch = () => {
        dispatch(PendingAction);
    };

    return (
        <div>
            <h1>Massage Component</h1>
            <button onClick={SuccessDispatch}>Success</button>
            <button onClick={FailDispatch}>Fail</button>
            <button onClick={PendingDispatch}>Pending</button>
            <h1>{state}</h1>
        </div>
    );
};

export default Massage;