
import React, { useState, useEffect } from "react";
import getState from "./flux";

// No cambies esto, aquí es donde inicializamos nuestro contexto, por defecto solo será null.
export const Context = React.createContext(null);

// Esta función inyecta el store global a cualquier vista/componente donde quieras usarlo, inyectaremos el contexto en layout.js.
const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        // esto será pasado como el valor del contexto
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: updatedStore =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        );

        useEffect(() => {
            // Puedes realizar peticiones de datos aquí usando actions
            state.actions.loadSomeData();
        }, []);

        // El valor inicial del contexto ya no es null, sino el estado actual de este componente.
        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };
    return StoreWrapper;
};

export default injectContext;
