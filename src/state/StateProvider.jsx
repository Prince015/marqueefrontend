import { useContext } from "react";
import { createContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data layer
export const StateProvider = (props) => {
    const { reducer, initialState, children } = props;
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

// Pull information from the data layer
export const useStateValue = () => {
    return useContext(StateContext);
};