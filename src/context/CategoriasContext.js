import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Crear el Context
export const CategoriasContext = createContext();

// El provider es donde se encuentran las funcioens y state

const CategoriasProvider = props => {
    // Crear el state de context
    const [categorias, setCategorias] = useState([]);

    // ejecutar el llamado a la api
    useEffect(() => {
        const obtenerCategorias = async () => {
            const url =
                'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

            const categorias = await axios.get(url);
            setCategorias(categorias.data.drinks);
        };
        obtenerCategorias();
    }, []);

    return (
        <CategoriasContext.Provider value={{ categorias }}>
            {props.children}
        </CategoriasContext.Provider>
    );
};

export default CategoriasProvider;
