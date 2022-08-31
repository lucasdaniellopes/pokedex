import { Requests } from "./requests.js";

class Render{
    static renderPokemonCard(pokemon){
        const li = document.createElement("li")
        const divImg = document.createElement("div")
        const pokemonImg = document.createElement("img")
        const pokemonName = document.createElement("p")
        const pokemonType = document.createElement("span")

        pokemonImg.src = pokemon.sprites.other.official-artwork.front_default

        pokemonType.innerText = this.pokemonTypes(pokemon)

        li.classList.add("pokedex__card")

        divImg.appendChild(pokemonImg)

        li.append(divImg, pokemonName, pokemonType)

        return li
    }

    static pokemonTypes(pokemon){
        let types = pokemon
    }
}