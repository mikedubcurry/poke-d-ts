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

	img {
		width: 70%;
	}
	div {
		text-align: center;
	}

	@media (min-width: 450px) and (max-width: 600px) {
		width: 20vw;
		height: 20vw;
	}

	@media (min-width: 600px) {
		width: 10vw;
		height: 10vw;
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
