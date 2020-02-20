import { IResolvers } from "graphql-tools"
import fetch, { Response } from "node-fetch"
import redis, { ClientOpts } from "redis"
import { promisify } from "util"

const cache = redis.createClient(process.env.REDIS_URL as ClientOpts)
const checkCache = promisify(cache.smembers).bind(cache)
const getCache = promisify(cache.hgetall).bind(cache)

interface PokeShort {
	name: string
	url: string
}

const resolvers: IResolvers = {
	Query: {
		pokemonsAll: async (parent, args, context, info) => {
			try {
				let cachedPokemons = await checkCache("pokemons")
				if (cachedPokemons.length) {
					return cachedPokemons.map(async name => {
						let poke = await getCache(name)
						// console.log(poke)
						return {
							...poke,
							id: parseInt(poke.id),
							name: name
						}
					})
				} else {
					console.log("hitting API")
					let pokemons = await fetch(
						"https://pokeapi.co/api/v2/pokemon/?limit=151"
					)
					let { results } = await pokemons.json()
					// cache.set("pokemons", results)
					results.forEach((poke: PokeShort) => {
						cache.sadd("pokemons", poke.name)
					})
					return results.map(async (res: Response) => {
						let pokeman = await fetch(res.url)
						let { name, id, species, sprites } = await pokeman.json()
						cache.hmset(
							name,
							"id",
							id,
							"url",
							species.url,
							"sprite",
							sprites.front_default
						)
						return {
							name: name,
							id: id,
							url: species.url,
							sprite: sprites.front_default
						}
					})
				}
			} catch (e) {
				console.log(e)
			}
			// return  cache.smembers("pokemons", async (err, res) => {
			// 	 console.log(res)
			// 	let cachedPokemons = res
			// 	if (cachedPokemons.length) {
			// 		console.log("cache served")
			// 		return cachedPokemons.map(poke => {
			// 			return cache.hgetall(poke, (e, { name, id, url, sprite }) => {
			// 				return {
			// 					name: name,
			// 					url: url,
			// 					sprite: sprite,
			// 					id: parseInt(id)
			// 				}
			// 			})
			// 		})
			// 	}

			// 	console.log("hitting API")
			// 	let pokemons = await fetch(
			// 		"https://pokeapi.co/api/v2/pokemon/?limit=151"
			// 	)
			// 	let { results } = await pokemons.json()
			// 	// cache.set("pokemons", results)
			// 	results.forEach((poke: PokeShort) => {
			// 		cache.sadd("pokemons", poke.name)
			// 	})
			// 	return results.map(async (res: Response) => {
			// 		let pokeman = await fetch(res.url)
			// 		let { name, id, species, sprites } = await pokeman.json()
			// 		cache.hmset(
			// 			name,
			// 			"id",
			// 			id,
			// 			"url",
			// 			species.url,
			// 			"sprite",
			// 			sprites.front_default
			// 		)
			// 		return {
			// 			name: name,
			// 			id: id,
			// 			url: species.url,
			// 			sprite: sprites.front_default
			// 		}
			// 	})
			// })
		},
		hello: () => "Hello GraphQL"
	}
}

export default resolvers
