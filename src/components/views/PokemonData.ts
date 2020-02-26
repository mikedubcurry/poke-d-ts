import React, { FC } from "react"
import { useParams } from "react-router-dom"

const PokemonData = pokemon => {
	const { pokeID } = useParams()

	return "pokemon data page"
}

export default PokemonData
