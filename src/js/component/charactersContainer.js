import React, { useEffect, useContext } from "react";
import Card from "../views/card.js";
import { Context } from "../store/appContext.js";
import "../../styles/cardContainer.css";

const Characters = () => {
    const { store, actions } = useContext(Context);
    

    useEffect(() => {

        //console.log("Efecto de carga de personajes");
            actions.get_all_persons();
            
        
    }, []);
    console.log(store.persons);

    return (
        <div className="contenedor-cards">
            {store.persons && store.persons.length > 0 ? (
                store.persons.map((value, index) => (
                    <Card
                        nombre={value.name}
                        key={index}
                        id={value.id}
                        type={"characters"}
                        addFavoritos={() => actions.addFavoritos(value)}
                        isFavorito={actions.verificarFavorito(value)}
                    />
                ))
            ) : (
                <p>Cargando personajes...</p>
            )}
        </div>
    );
};

export default Characters;