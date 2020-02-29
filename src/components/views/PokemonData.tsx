import React, { FC, useState, useEffect } from "react"
import { gql } from "apollo-boost"
import { useParams, useHistory } from "react-router-dom"

import { client } from "../../apollo"

const PokemonData: FC = () => {
	const [pokemon, setPokemon] = useState(null)
	const { id } = useParams()
	let history = useHistory()

	useEffect(() => {
		const res = client
			.query({
				query: gql`
			{
				pokemon(id: ${id}) {
					name
					id
					url
					sprite
				}
			}
		`
			})
			.then(result => {
				const { data } = result
				setPokemon(data.pokemon)
			})
	}, [id])
	return (
		<>
			<div onClick={() => history.push(`/pokedex/${pokemon?.id - 1}`)}>
				&larr;
			</div>
			<div onClick={() => history.push(`/pokedex/${(pokemon?.id + 1) % 151}`)}>
				&rarr;
			</div>
			<h1>{pokemon?.name}</h1>
			<img src={pokemon?.sprite} alt={pokemon?.name} />
		</>
	)
}

export default PokemonData
