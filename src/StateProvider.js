import React, {createContext, useContext, useReducer} from 'react';

// This prepares the DataLayer
export const StateContext = createContext();

// This will wrap our app and provide the Data Layer

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Pull information from the data layer

export const useStateValue = () => useContext(StateContext);

// Wraping around the App component so every component can get the 
// access to the data layer