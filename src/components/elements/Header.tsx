import React, { FC } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavBar = styled.header`
	ul {
		list-style: none;
	}
`

const Header: FC = () => {
	return (
		<NavBar>
			<div>Poke.d.ts</div>
			<ul>
				<li>
					<Link to="/pokedex">Pokedex</Link>
				</li>
				<li>
					<Link to="/party">My Party</Link>
				</li>
			</ul>
		</NavBar>
	)
}

export default Header
