import React, { FC, useState, useEffect } from "react"
import { gql } from "apollo-boost"
import styled from "styled-components"
// import {} from 'react-router-dom'

import { PokeCard } from "../elements"
import {PokemonData} from '../views'
import { Pokemon } from "../../types"
import { client } from "../../apollo"
import { Route, Switch } from "react-router-dom"

const GridView = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
`

const Pokedex: FC = () => {
	const [pokemon, setPokemon] = useState([])

	useEffect(() => {
		let res = client
			.query({
				query: gql`
					{
						pokemonsAll {
							name
							id
							url
							sprite
						}
					}
				`
			})
			.then(result => {
				let { data } = result
				setPokemon(
					data.pokemonsAll.sort((a: Pokemon, b: Pokemon) => a.id - b.id)
				)
			})
	}, [])
	return (
				<GridView>
					{pokemon.map((mon, i) => (
						<PokeCard pokemon={mon} key={i} />
					))}
				</GridView>


	)
}

export default Pokedex
