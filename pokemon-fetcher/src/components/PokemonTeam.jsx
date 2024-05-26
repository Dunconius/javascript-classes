

import React from "react";
import PokemonCard from "./PokemonCard";

export default class PokemonTeam extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pokemonTeam: []
        }
    }
    
    // Make requests to PokeAPI
    // on component load
    async componentDidMount() {
        
        // Get random Pokemon number
        function getRandomPokemonID(){
            return Math.floor(Math.random() * 1025) + 1;
        }

        for (let index = 0; index < 6; index++){
            let randomNumber = getRandomPokemonID();

            let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber).catch(error => error);
            let data = await response.json();

            this.setState({pokemonTeam: [...this.state.pokemonTeam, data]});

        }
    }

    componentDidUpdate(){
        console.log("This component has updated and re-rendered!");
    }

    // Store data from each request

    // Pass each data to PokemonCard comonents

    // Render HTML in class componenet
    render(){
        return(
            <div>
                <h1>Pokemon data here</h1>

                {this.state.pokemonTeam && this.state.pokemonTeam.map((pokemon, index) => {
                    // return <h1 key={crypto.randomUUID()}>{pokemon.name}</h1>
                    return <PokemonCard key={crypto.randomUUID()} name={pokemon.name} sprite={pokemon.sprites.front_default}/>
                })}
            </div>
        )
    }

}