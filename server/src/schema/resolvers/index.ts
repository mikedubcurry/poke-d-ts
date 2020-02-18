import { IResolvers } from "graphql-tools"
import fetch from "node-fetch"

const resolvers: IResolvers = {
	Query: {
		pokemonsAll: (parent, args, context, info) => {
			return fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
				.then(res => {
					// console.log(res.json())
					return res.json()
				})
				.then(({ results }) => {
					console.log(results)
					return results
				})
		},
		hello: () => "Hello GraphQL"
	}
}

export default resolvers
