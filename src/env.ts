import 'dotenv/config'
import {z} from 'zod'

const envSchema = z.object({
    NODE_ENV: z.enum(['dev','test','production']),
    PORT: z.coerce.number(),
    SECRET_KEY_STRIPE: z.string(),

})

const _env = envSchema.safeParse(process.env)


if(_env.success === false){
    console.error('Variaveis de ambiente invalidas', _env.error.format())
    throw new Error('variaveis de ambiente invalidas.')
}

export const env = _env.data