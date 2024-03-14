import React, { useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext.js";

const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();  // Agrega esta línea para obtener la función navigate
  
	
		const handleLogout = () => {
			// Limpia la información de autenticación (por ejemplo, tokens)
			localStorage.removeItem("token");
		
			// Redirige al usuario a la página de inicio de sesión
			navigate("/");
		  };
	  
		  function eliminarFavoritos(nombre) {
			actions.deleteFavoritos(nombre);
		  }


	  useEffect(() => {
        // Llama a la acción fetchCharacters solo si no hay personajes cargados
        
            actions.get_all_favourites();
        
    }, []);



	return (
		<nav>
			<header className="container">
				<Link to="/"><img className="imagen-logo" src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png" /></Link>
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"data-bs-auto-close="outside" aria-expanded="false">
						<span>Favorites</span>
						<span className="favoritos-counter">{store.favoritos.length}</span>
					</button>
					<button type="button" className="btn btn-danger" onClick={handleLogout}>
            			Cerrar Sesión
          			</button>
					<ul className="dropdown-menu">
							 {store.favoritos.length === 0 ? "(empty)" : store.favoritos.map((value, index) => (
						<li className="dropdown-item" key={index}>
								<span className="favoritos-name">{value.info.name}</span>
								
								<i className="fa fa-trash m-2" onClick={()=>eliminarFavoritos(value.info.name)}></i>
							</li>
						))} 
					</ul>
				</div>
			</header>
		</nav>
	);
};	
							 

export default Navbar;