import redis, { ClientOpts } from "redis"
import { promisify } from "util"

const cache = redis.createClient(process.env.REDIS_URL as ClientOpts)
const checkAll = promisify(cache.smembers).bind(cache)
const getPokemon = promisify(cache.hgetall).bind(cache)
const checkBy = promisify(cache.exists).bind(cache)

export default cache
export { checkAll, getPokemon, checkBy }

// export default (cache) => {
// 	return cache.createClient(process.env.REDIS_URL as ClientOpts)
// }
