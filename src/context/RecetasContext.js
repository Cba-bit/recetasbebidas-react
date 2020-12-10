import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = props => {
    const [recetas, setRecetas] = useState([]);
    const [busquedaReceta, setBusquedaReceta] = useState({
        nombre: '',
        categoria: '',
    });

    return (
        <RecetasContext.Provider value={{ setBusquedaReceta }}>
            {props.children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;
