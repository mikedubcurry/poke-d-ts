export type Pokemon = {
	name: string
	id: number
	sprite: string
	url: string
}

export type PokemonLong = {
	name: string
	id: number
	sprite: string
	url: string
	types: [string]
}

export type CardProps = {
	pokemon: Pokemon
}

export type PageProps = {
	pokemon: PokemonLong
}
