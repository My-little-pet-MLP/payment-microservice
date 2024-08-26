import { stripe } from "@/lib/stripe";


interface GetCustomerByIdServiceRequest {
    id:string;
}
export async function GetpaymentIntentById({id}:GetCustomerByIdServiceRequest){
    const paymentIntent = await stripe.paymentIntents.retrieve(id);
    return paymentIntent;
}