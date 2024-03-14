import React, { useEffect, useState } from "react";
import Card from './card';
import { useParams } from "react-router";
import "../../styles/description.css";

const CharacterDescription = () => {

    const [propiedades, setPropiedades] = useState({});
    const [descripcion, setDescripcion] = useState("");

    const { id } = useParams();

    async function solicitarData() {
        try {
            console.log("Fetching data from API...");
            let response = await fetch(`https://didactic-space-halibut-qjgvwjj44rh99g7-3000.app.github.dev/persons/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
        
            }
            
            
        })
            
            console.log("Status de la respuesta:", response.status);
            const data = await response.json();

            
            const result = data.person; 
            const result2 = data.description;

            setPropiedades(result);
            setDescripcion(result2);
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    }
    useEffect(() => {
        solicitarData();
    }, [id])

    return (
        <div className="contenedor-principal-characters">
            <div className="d-flex flex-column align-items-center container contenedor-descripcion">
                <img src="https://www.servithermic.cl/images/400X200.gif" className="card-img-top" alt="..."/>
                <div className="text-center">
                    <h2 className="text-warning">{propiedades.name}</h2>
                    <p>{descripcion}</p>
                </div>
            </div>
            <div className="container contenedor-propiedades text-center">
                <div className="row">
                 
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">
                            <div className="text">
                            <p>Name</p>
                            <p>{propiedades.name}</p>
                            </div>
                    </div> 
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">       
                        <div className="text">
                            <p>Height</p>
                            <p>{propiedades.height}</p>
                        </div>
                    </div>  
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">  
                        <div className="text">
                            <p>Eye Color</p>
                            <p>{propiedades.eye_color}</p>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-2 ps-4 pt-4">    
                        <div className="text">
                            <p>Hair Color</p>
                            <p>{propiedades.hair_color}</p>
                        </div>
                    </div> 
                    
                    
                </div>    
            </div>
        </div>
        
        
    )
}

export default CharacterDescription;