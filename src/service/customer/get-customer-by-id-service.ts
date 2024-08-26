import { stripe } from "@/lib/stripe";

interface GetCustomerByIdServiceRequest {
    id: string;
}
export async function GetCustomerByIdService({id}:GetCustomerByIdServiceRequest){
    const customer = await stripe.customers.retrieve(id);
    return customer;
}