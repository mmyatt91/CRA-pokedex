import React from 'react'
import './Pokecard.css'

let pokemonApi = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard (props) {
    const img = `${pokemonApi}${props.id}.png`;
    
    return (
        <div className="Pokecard">
            <h3 className="Pokecard-title">Name: {props.name}</h3>
            <img className="Pokecard-image" src={img} />
            <p className="Pokecard-data">Type: {props.type}</p>
            <p className="Pokecard-data">Experience: {props.exp}</p>
        </div>
    );
}

export default Pokecard;