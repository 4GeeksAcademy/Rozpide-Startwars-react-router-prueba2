import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from "../store/appContext";

const Details = () => {
    const { store } = useContext(Context);
    const { id } = useParams();
    const item = store.people.find(p => p.url.endsWith(id)) || store.vehicles.find(v => v.url.endsWith(id)) || store.planets.find(pl => pl.url.endsWith(id));

    return (
        <div className="container mt-5">
            <h1>{item.name}</h1>
            {/* Agregar más detalles según si es persona, vehículo o planeta */}
        </div>
    );
};

export  {Details};
