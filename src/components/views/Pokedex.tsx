import React, { FC, useState, useEffect } from "react"
import {gql} from 'apollo-boost'

import {client} from '../../apollo'

const Pokedex: FC = () => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		let res = client.query({
			query: gql`
				{pokemonsAll {
					name
					id
					url
					sprite
				}}
			`
		}).then(result => {
			let { data } = result
			setPokemon(data.pokemonsAll.sort((a,b) => a.id - b.id))
		})
	}, [])
	return <div>		
	{pokemon.map((mon, i) => (
		<div key={i}>
			# {mon.id} {mon.name}
		</div>
	))}</div>
}

export default Pokedex
