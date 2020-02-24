import { ApolloServer } from "apollo-server-express"
import { createTestClient } from "apollo-server-testing"

import cache, { checkAll, checkBy, getPokemon } from "../../cache"
import schema from "../../schema"

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


describe("Redis cache", () => {

	it("should populate redis if no entries found for pokemon", async () => {
		const server = new ApolloServer({ schema })
		const { query } = createTestClient(server)

    const res = await query({ query: MAGIKARP_QUERY })
    
    const isInCache = await getPokemon('129')
    expect(isInCache).toBeTruthy()
  })
})
