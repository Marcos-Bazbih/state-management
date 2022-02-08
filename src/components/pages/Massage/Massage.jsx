import "./Massage.css";
import { useContext } from "react";
// import { SuccessAction } from "../../../Actions/massage-actions";
import { MassageContext } from "../../../Context/massage-context";


const Massage = () => {
    const { state } = useContext(MassageContext);

    // const SendDispatch = (e) => {
    //     dispatch(SuccessAction(e.target.name));
    // };

    return (
        <div className="massage">
            <h1>Massage</h1>
            <div className="btn-container">
                {/* <button name="success" className="dispatchBtn" onClick={SendDispatch}>SUCCESS</button>
                <button name="primary" className="dispatchBtn" onClick={SendDispatch}>PRIMARY</button>
                <button name="secondary" className="dispatchBtn" onClick={SendDispatch}>SECONDARY</button>
                <button name="error" className="dispatchBtn" onClick={SendDispatch}>ERROR</button>
                <button name="info" className="dispatchBtn" onClick={SendDispatch}>INFO</button>
                <button name="warning" className="dispatchBtn" onClick={SendDispatch}>WARNING</button> */}
            </div>

            {<h1>{state.msgText}</h1> || <div></div>}

        </div>
    );
};

export default Massage;