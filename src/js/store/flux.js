
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
                // Puedes definir esta función para cargar algunos datos iniciales si se necesitas
            }
        }
    };
};

export default getState;

