import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Wrapper from "./components/Wrapper"
import { Start, Pokedex } from "./components/views"


ReactDOM.render(
	<Router>
		<Wrapper>
			<Route path="/">
				<Start />
			</Route>
			<Route path='/pokedex'>
				<Pokedex/>
			</Route>
		</Wrapper>
	</Router>,
	document.querySelector("#root")
)
