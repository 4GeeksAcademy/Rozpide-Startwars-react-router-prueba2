import React, { useContext } from 'react';
import { Context } from "../store/appContext";

const Favorites = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container mt-5">
            <h1>Favorites</h1>
            <div className="row">
                {store.favorites.map((item, index) => (
                    <div className="col-4 mb-4" key={index}>
                        <div className="card">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <button className="btn btn-outline-danger" onClick={() => actions.removeFavorite(item)}>- Remove from Favorites</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export  {Favorites};
