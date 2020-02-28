import React, { FC } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Header } from "./elements"

const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	ul,
	ol {
		padding: 0;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul,
	ol,
	li {
		margin: 0;
	}

	body {
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}

	ul,
	ol {
		list-style: none;
	}

	a:not([class]) {
		text-decoration-skip-ink: auto;
	}

	img {
		max-width: 100%;
		display: block;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			animation-play-state: paused !important;
			transition: none !important;
			scroll-behavior: auto !important;
		}
	}
`

const NavWrapper = styled.main`
	display: flex;
	flex-direction: column;
justify-content: space-around;
align-items: center;
height: 100vh;
`

const Wrapper: FC = ({ children }) => {
	return (
		<NavWrapper>
			<GlobalStyles />
			<Header />
			{children}
		</NavWrapper>
	)
}

export default Wrapper
