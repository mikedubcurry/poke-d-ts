import React, { FC } from "react"
import { Link } from "react-router-dom"

const Header: FC = () => {
	return (
		<header>
			<div>Poke.d.ts</div>
			<ul>
				<li>
					<Link to="/pokedex">Pokedex</Link>
				</li>
			</ul>
		</header>
	)
}

export default Header
