import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Wrapper from "./components/Wrapper"
import { Start, Pokedex, PokemonData } from "./components/views"

ReactDOM.render(
	<Router>
		<Wrapper>
			<Switch>
				<Route exact path="/">
					<Start />
				</Route>

				<Route path="/pokedex/:id">
					<PokemonData />
				</Route>
				<Route exact path="/pokedex">
					<Pokedex />
				</Route>
			</Switch>
		</Wrapper>
	</Router>,
	document.querySelector("#root")
)
