import { IResolvers } from "graphql-tools"
import fetch, { Response } from "node-fetch"

const resolvers: IResolvers = {
	Query: {
		pokemonsAll: async (parent, args, context, info) => {
			let pokemons = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
			let { results } = await pokemons.json()
			return results.map(async (res: Response) => {
				let pokeman = await fetch(res.url)
				let pokemanJson = await pokeman.json()
				return {
					name: pokemanJson.name,
					id: pokemanJson.id,
					url: pokemanJson.url,
					sprite: pokemanJson.sprites.front_default
				}
			})
		},
		hello: () => "Hello GraphQL"
	}
}

export default resolvers
