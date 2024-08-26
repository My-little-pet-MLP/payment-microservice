import { stripe } from "@/lib/stripe";

interface CustomerCreateDTO {
    name:string;
    email:string;
    address: {
        country:string;
        state:string;
        city:string;
        line:string;
        postal_code:string;
    }
}
export async function RegisterCustomerService({name,email,address}:CustomerCreateDTO) {
    
const customer = await stripe.customers.create({
    name,
    email,
    address:{
        country: address.country,
        state: address.state,
        city: address.city,
        line1: address.line,
        postal_code :address.postal_code,
    },
   
})
  return customer;
}