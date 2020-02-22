import { IResolvers } from "graphql-tools"
import fetch, { Response } from "node-fetch"
import redis, { ClientOpts } from "redis"
import { promisify } from "util"

const cache = redis.createClient(process.env.REDIS_URL as ClientOpts)
const checkAll = promisify(cache.smembers).bind(cache)
const getPokemon = promisify(cache.hgetall).bind(cache)
const checkBy = promisify(cache.exists).bind(cache)

interface PokeShort {
	name: string
	url: string
}

const resolvers: IResolvers = {
	Query: {
		pokemon: async (parent, args, context, info) => {
			try {
				const { id } = args
				let isCached = await checkBy(id)
				if (isCached) {
					let pokemon = await getPokemon(id)
					return {
						id: parseInt(id),
						...pokemon
					}
				} else {
					let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
					let pokemon = await response.json()
					return {
						name: pokemon.name,
						url: pokemon.species.url,
						id: pokemon.id,
						sprite: pokemon.sprites.front_default
					}
				}
			} catch (e) {
				console.log(e)
			}
		},
		pokemonsAll: async () => {
			try {
				let cachedPokemons: Array<string> = await checkAll("pokemons")
				if (cachedPokemons.length) {
					return cachedPokemons.map(async name => {
						let poke = await getPokemon(name)
						return {
							...poke,
							id: parseInt(poke.id),
							name: name
						}
					})
				} else {
					let response = await fetch(
						"https://pokeapi.co/api/v2/pokemon/?limit=151"
					)
					let { results } = await response.json()
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
						cache.hmset(
							id,
							"name",
							name,
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
		},
		hello: () => "Hello GraphQL"
	}
}

export default resolvers
