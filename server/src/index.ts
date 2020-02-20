import express, { Application, Request, Response } from "express"
import { ApolloServer } from "apollo-server-express"
import cors from "cors"
import compression from "compression"
import { config } from "dotenv"

import schema from "./schema"

// load .env variables
config()


const app: Application = express()
const server = new ApolloServer({ schema })

app.use("*", cors())
app.use(compression())
server.applyMiddleware({ app, path: "/graphql" })

app.listen(3000, () => {
	console.log("listening on http://localhost:3000/graphql")
})
