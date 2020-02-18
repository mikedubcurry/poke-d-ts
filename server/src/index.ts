import express, { Application, Request, Response } from "express"
import { ApolloServer } from "apollo-server-express"
import cors from "cors"
import compression from "compression"

import schema from "./schema"

const app: Application = express()
const server = new ApolloServer({ schema })

app.get("/", (_req: Request, res: Response) => {
	res.send("hi")
})

app.use("*", cors())
app.use(compression())
server.applyMiddleware({ app, path: "/graphql" })

app.listen(3000, () => {
	console.log("listening on port 3000")
})
