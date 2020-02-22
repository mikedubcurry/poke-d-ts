import { ApolloServer } from "apollo-server-express"
import { createTestClient } from "apollo-server-testing"

import schema from "../../../schema"

const HELLO_QUERY = `
  query {
    hello
  }
`

const MAGIKARP_QUERY = `
  query {
    pokemon(id: 129) {
      name
      id
      url
      sprite
    }
  }
`

describe("GraphQL queries", () => {
	it('should return "Hello GraphQL"', async () => {
		const server = new ApolloServer({ schema })

		const { query } = createTestClient(server)

		const res = await query({ query: HELLO_QUERY })
		expect(res.data).toHaveProperty("hello", "Hello GraphQL")
	})

	it("should return the expected Pokemon object shape", async () => {
		const server = new ApolloServer({ schema })
		const { query } = createTestClient(server)

		const res = await query({ query: MAGIKARP_QUERY })

		expect(res.data).toHaveProperty("pokemon")
		expect(res.data?.pokemon).toMatchObject(
			expect.objectContaining({
				name: expect.any(String),
				id: expect.any(Number),
				url: expect.any(String),
				sprite: expect.any(String)
			})
		)
	})
})
