import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Wrapper from "./components/Wrapper"
import CoverView from "./components/views/CoverView"

ReactDOM.render(
	<Router>
		<Wrapper>
			<Route path="/">
				<CoverView />
			</Route>
		</Wrapper>
	</Router>,
	document.querySelector("#root")
)
