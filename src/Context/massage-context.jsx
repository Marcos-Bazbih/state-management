import { createContext, useReducer } from "react";
import MassageReducer from "../Reducers/massage-reducer";

export const MassageContext = createContext();

const MassageContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MassageReducer, { isOpen: false });

    return (
        <MassageContext.Provider value={{ state, dispatch }}>
            {children}
        </MassageContext.Provider>
    )
}

export default MassageContextProvider;