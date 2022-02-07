import "./Massage.css";
import { useReducer } from "react";
import MassageReducer from "../../../Reducers/massage-reducer";
import { SuccessAction, FailAction, PendingAction } from "../../../Actions/massage-actions";


const Massage = () => {
    const [state, dispatch] = useReducer(MassageReducer, "massage");

    const SuccessDispatch = () => {
        dispatch(SuccessAction());
    };
    // const FailDispatch = () => {
    //     dispatch(FailAction());
    // };
    // const PendingDispatch = () => {
    //     dispatch(PendingAction());
    // };

    return (
        <div className="main">
            <h1>Massage Component</h1>
            <button className="dispatchBtn" onClick={SuccessDispatch}>Success</button>
            {/* <button className="dispatchBtn" onClick={FailDispatch}>Fail</button> */}
            {/* <button className="dispatchBtn" onClick={PendingDispatch}>Pending</button> */}
            <h1 className="state">{state}</h1>
        </div>
    );
};

export default Massage;