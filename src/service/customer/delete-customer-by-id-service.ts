import { stripe } from "@/lib/stripe";

interface DeleteCustomerByIdServiceRequest {
    id: string;
}

export async function DeleteCustomerByIdService({id}:DeleteCustomerByIdServiceRequest) {
    const customerDeleted = await stripe.customers.del(id);

    return customerDeleted;
}