import React, { createContext, useState } from 'react';

// Creación del contexto 
const ContextoBD = createContext();

// Componente Proveedor de contexto
const ProovedorBD = (props) => {
    
    const [ bias, setBias ] = useState([]);
    const [ code, setCode ] = useState("");
    const [ url, setUrl ] = useState("");

    return ( 
        <ContextoBD.Provider 
            value={
                { 
                    bias, setBias,
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