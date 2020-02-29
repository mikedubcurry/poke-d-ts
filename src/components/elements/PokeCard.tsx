import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import { Pokemon, CardProps } from "../../types"

const CardStyle = styled(Link)`
	width: 30vw;
	height: 30vw;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	align-items: center;
	background: #ccc;

	div {
		text-align: center;
	}
`

const PokeCard = (props: CardProps) => {
	const pokemon: Pokemon = props.pokemon
	return (
		<CardStyle to={`/pokedex/${pokemon.id}`}>
			<img src={pokemon.sprite} alt={pokemon.name} />
			<div>
				<p>{pokemon.name}</p>
			</div>
		</CardStyle>
	)
}

export default PokeCard
