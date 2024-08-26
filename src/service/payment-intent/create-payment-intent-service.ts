import { stripe } from "@/lib/stripe";
import { GetCustomerByIdService } from "../customer/get-customer-by-id-service";

interface CreateCustomerSessionServiceRequest{
    amount:number;
    custumerId:string;
}

export async function CreatePaymentIntentService ({amount,custumerId}:CreateCustomerSessionServiceRequest){

    const custumerExists =  await GetCustomerByIdService({id:custumerId});
    if(custumerExists.deleted){
        throw new Error("Custumer is deleted!");
    }
    
    if(custumerExists.email != null){
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'brl',
            customer:custumerId,
            receipt_email:custumerExists.email
          });
          return paymentIntent;
        }
    const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'brl',
        customer:custumerId
      });
      return paymentIntent;
}