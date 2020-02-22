import { gql } from "apollo-server-express"
const typeDefs = gql`
	type Pokemon {
		name: String!
		id: Int!
		url: String!
		sprite: String!
	}
	type Query {
		hello: String!
		pokemonsAll: [Pokemon]!
		pokemon(id: Int): Pokemon
	}
`
export default typeDefs