import { makeExecutableSchema } from "graphql-tools"
import { GraphQLSchema } from "graphql"

import resolvers from "./resolvers"
import typeDefs from "./typeDefs/typeDefs"

const schema: GraphQLSchema = makeExecutableSchema({
	typeDefs,
	resolvers
})

export default schema
