/*const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
*/
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: [],
            vehicles: [],
            planets: [],
            favorites: []
        },
        actions: {
            // Función para cargar datos desde la API
            fetchPeople: async () => {
                const response = await fetch("https://swapi.dev/api/people/");
                const data = await response.json();
                setStore({ people: data.results });
            },
            fetchVehicles: async () => {
                const response = await fetch("https://swapi.dev/api/vehicles/");
                const data = await response.json();
                setStore({ vehicles: data.results });
            },
            fetchPlanets: async () => {
                const response = await fetch("https://swapi.dev/api/planets/");
                const data = await response.json();
                setStore({ planets: data.results });
            },
            addFavorite: item => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] });
            },
            removeFavorite: item => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(fav => fav !== item) });
            },
            loadSomeData: () => {
                // Puedes definir esta función para cargar algunos datos iniciales si lo necesitas
            }
        }
    };
};

export default getState;

