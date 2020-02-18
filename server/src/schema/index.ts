import "graphql-import-node"
import { makeExecutableSchema } from "graphql-tools"
import { GraphQLSchema } from "graphql"

import resolvers from "./resolvers"
import * as typeDefs from "./typeDefs/typeDefs.graphql"

const schema: GraphQLSchema = makeExecutableSchema({
	typeDefs,
	resolvers
})

export default schema
