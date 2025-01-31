
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPeople();
    actions.fetchVehicles();
    actions.fetchPlanets();
  }, []);

  return (
    <div className="container mt-5">
      <h1>Star Wars Database</h1>
      <div className="d-flex justify-content-between mb-3">
        <h2>People</h2>
        <Link to="/favorites" className="btn btn-primary">
          Favorites
        </Link>
      </div>
      <div className="row">
        {store.people.map((person, index) => (
          <div className="col-4 mb-4" key={index}>
            <div className="card">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  index + 1
                }.jpg`}
                className="card-img-top"
                alt={person.name}
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => actions.addFavorite(person)}
                >
                  + Add to Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Repetir secciones similares para vehicles y planets */}
    </div>
  );
};

export { Home };
