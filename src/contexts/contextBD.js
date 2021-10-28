import React, { createContext, useState } from 'react';

// Creación del contexto 
const ContextoBD = createContext();

// Componente Proveedor de contexto
const ProovedorBD = (props) => {
    
    const [ resp, setResp ] = useState({});
    const [ code, setCode ] = useState("");
    const [ url, setUrl ] = useState("");

    return ( 
        <ContextoBD.Provider 
            value={
                { 
                    resp, setResp,
                    code, setCode,
                    url, setUrl 
                }
            }
        >
            {props.children}
        </ContextoBD.Provider>
    );
}
 
export { ProovedorBD, ContextoBD };