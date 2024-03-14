const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			elementos: [],
			persons: [],
			planets: [],
			vehicles:[]
		},
		actions: {
			addFavoritos: (elemento) => {
				const store = getStore();
				if (store.favoritos.includes(elemento)) {
					alert("Ya has agregado este elemento a favoritos");
					return
				}
				const updatedFavoritos = [...store.favoritos, elemento];
				setStore({ favoritos: updatedFavoritos });
			},

			//deleteFavoritos: (elemento) => {
			//	const store = getStore();
			//	const updatedFavoritos = store.favoritos.filter((fav) => fav !== elemento);
			//	setStore({ favoritos: updatedFavoritos });
			

			verificarFavorito: (elemento) => {
				const store = getStore();
				if (store.favoritos.includes(elemento)) {
					return true
				}
				return false
			
			//get_all_persons () {
			//	fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/persons")
			  // .then(response => response.json())
			   //.then(data => setStore({ characters: data.results }))
			   //.catch(error => console.log(error));
		   //	},
			//addPlanets () {
			//	fetch("https://swapi.tech/api/planets")
			  // .then(response => response.json())
			   //.then(data => setStore({ planets: data.results }))
			   //.catch(error => console.log(error));
		   //},
		   //addVehicles () {
			//	fetch("https://swapi.tech/api/vehicles")
			//	.then(response => response.json())
			//	.then(data => setStore({ vehicles: data.results }))
			//	.catch(error => console.log(error));
	   		},
			   login: async (email, password) => {

				try {
					let response = await fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});
			
					if (response.ok) {
						let data = await response.json();
						// Do something with the profile data if needed
						localStorage.setItem("token", data.access_token);
						console.log(data);
						return true;
					} else {
						// Handle non-OK response status
						console.log(`Error: ${response.status}`);
						return false;
					}
			
				} catch (error) {
					console.log(error);
					return false;
				}
			},
				get_profile: async (email, password) => {
					let token = localStorage.getItem("token")
					try {
						let response = await fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/profile", {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization":`Bearer ${token}`,
							}
							
							
						})
				
						let data = await response.json();
						
						
						return true;
				
					} catch (error) {
						
						return false;
					}
				},
				get_all_persons: async () => {
					
					try {
						//console.log("Fetching data from API...");
						let response = await fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/persons", {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
						
							}
							
							
						})
						//console.log("Status de la respuesta:", response.status);
						let data = await response.json();
						//console.log("Datos de la API:", data);
						setStore({ persons: data.persons });
						//console.log("Store actualizado:", getStore().persons);
						return data.persons;
						
						
				
					} catch (error) {
						console.error("Error en la solicitud:" ,error);
						
						return [];
					}
				},
				get_all_planets: async () => {
					
					try {
						//console.log("Fetching data from API...");
						let response = await fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/planets", {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
						
							}
							
							
						})
						//console.log("Status de la respuesta:", response.status);
						let data = await response.json();
						//console.log("Datos de la API:", data);
						setStore({ planets: data.planets });
						//console.log("Store actualizado:", getStore().persons);
						return data.planets;
						
						
				
					} catch (error) {
						console.error("Error en la solicitud:" ,error);
						
						return [];
					}
				},
				get_all_vehicles: async () => {
					
					try {
						//console.log("Fetching data from API...");
						let response = await fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/vehicles", {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
						
							}
							
							
						})
						//console.log("Status de la respuesta:", response.status);
						let data = await response.json();
						//console.log("Datos de la API:", data);
						setStore({ vehicles: data.vehicles });
						//console.log("Store actualizado:", getStore().persons);
						return data.vehicles;
						
						
				
					} catch (error) {
						console.error("Error en la solicitud:" ,error);
						
						return [];
					}
				},
				get_all_favourites: async () => {
					let token = localStorage.getItem("token")
					try {

						//console.log("Fetching data from API...");
						let response = await fetch("https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/user/favorites", {
							method: "GET",
							headers: {
								"Content-Type": "application/json",
								"Authorization":`Bearer ${token}`,
						
							}
							
							
						})
						if (response.ok) {
						let data = await response.json();
						// Do something with the profile data if needed
						setStore({ favoritos: data.favourite });
						console.log(data);
						return true;
					} else {
						// Handle non-OK response status
						console.log(`Error: ${response.status}`);
						return false;
					}
						
						
						
				
					} catch (error) {
						console.error("Error en la solicitud:" ,error);
						
						return [];
					}
				},

		}
	};
};	



export default getState;