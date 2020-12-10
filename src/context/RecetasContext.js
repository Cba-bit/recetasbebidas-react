import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = props => {
    const [recetas, setRecetas] = useState([]);
    const [busquedaReceta, setBusquedaReceta] = useState({
        nombre: '',
        categoria: '',
    });
    const [consultar, setConsultar] = useState(false);

    const { nombre, categoria } = busquedaReceta;

    useEffect(() => {
        if (consultar) {
            const obtenerRecetas = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;

                const resultado = await axios.get(url);
                // console.log(resultado.data.drinks);

                setRecetas(resultado.data.drinks);
            };
            obtenerRecetas();
        }
    }, [busquedaReceta]);

    return (
        <RecetasContext.Provider value={{ setBusquedaReceta, setConsultar }}>
            {props.children}
        </RecetasContext.Provider>
    );
};

export default RecetasProvider;
