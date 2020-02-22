import { ApolloServer } from "apollo-server-express"
import { createTestClient } from "apollo-server-testing"

import schema from "../../../schema"

// const server = new ApolloServer({ schema })

// const { query, mutate } = createTestClient(server)
const HELLO_QUERY = `
  query {
    hello
  }
`

const MAGIKARP_QUERY = `
  query {
    pokemon(id: 129) {
      name
    }
  }
`

describe("GraphQL queries", () => {
	it('should return "Hello GraphQL"', async () => {
		const server = new ApolloServer({ schema })

		const { query } = createTestClient(server)

		const res = await query({ query: HELLO_QUERY })
		expect(res.data).toHaveProperty('hello', 'Hello GraphQL')
	})

	it("should return Magikarp", async () => {
		const server = new ApolloServer({ schema })

		const { query } = createTestClient(server)

		const res = await query({ query: MAGIKARP_QUERY })
	})
})
