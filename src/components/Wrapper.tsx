import React, { FC } from "react"
import styled from "styled-components"

const App = styled.main`
	width: 100vw;
	height: 100vh;
`

const Wrapper: FC = ({ children }) => {
	return <App>{children}</App>
}

export default Wrapper