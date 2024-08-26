import Stripe from "stripe";
import { env } from "@/env";
export const stripe = new Stripe(env.SECRET_KEY_STRIPE)


// stripe.prices.create({
//     currency: 'brl',
//     unit_amount:1000,
//     recurring:{
//         interval: 'month',
//     },
//     product_data: {
//         name: 'Gold Pass',
//     },
//     active:true
// })