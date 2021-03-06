import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Crear el context

export const ModalContext = createContext();

const ModalProvider = props => {
    // State del provider
    const [idReceta, setIdReceta] = useState(null);
    const [infoReceta, setReceta] = useState({});

    // Una vez que tenemos receta, llamar API

    useEffect(() => {
        const obtenerReceta = async () => {
            if (!idReceta) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;

            const resultado = await axios.get(url);
            setReceta(resultado.data.drinks[0]);
        };
        obtenerReceta();
        return () => {
            setReceta({});
        };
    }, [idReceta]);

    return (
        <ModalContext.Provider value={{ infoReceta, setIdReceta, setReceta }}>
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
