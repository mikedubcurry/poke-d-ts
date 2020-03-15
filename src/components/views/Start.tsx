import React, { FC } from "react"
import styled from "styled-components"

const Pokeball = styled.section`
	border-radius: 15rem;
	width: 25vw;
	height: 25vw;
	border: 1px black solid;

	.top {
		width: calc(25vw - 2px);
		height: 12.5vw;
		position: relative;
		top: 0;
		background: red;
		border-radius: 20rem 20rem 0 0;
	}

	.center {
		position: relative;
		border: 2px black solid;
		width: 8vw;
		height: 8vw;
		border-radius: 15rem;
		top: -4vw;
		left: calc(50% - 4vw);
		background: white;

		.poke-btn {
			position: relative;
			width: 4vw;
			height: 4vw;
			border-radius: 10rem;
			border: 1px black solid;
			left: calc(50% - 2vw);
			top: calc(50% - 2vw);
			background: #ddd;
		}
	}
`

const Start: FC = () => {
	return (
		<>
			<Pokeball>
				<div className="top"></div>
				<div className="center">
					<div className="poke-btn"></div>
				</div>
			</Pokeball>
		</>
	)
}

export default Start
