import React, { FC } from "react"
import { createGlobalStyle } from "styled-components"
import { Header } from "./elements"

const App = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	ul[class],
	ol[class] {
		padding: 0;
	}

	body,
	h1,
	h2,
	h3,
	h4,
	p,
	ul[class],
	ol[class],
	li {
		margin: 0;
	}

	body {
		min-height: 100vh;
		scroll-behavior: smooth;
		text-rendering: optimizeSpeed;
		line-height: 1.5;
	}

	ul[class],
	ol[class] {
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

const Wrapper: FC = ({ children }) => {
	return (
		<>
			<App />
			<Header />
			{children}
		</>
	)
}

export default Wrapper
