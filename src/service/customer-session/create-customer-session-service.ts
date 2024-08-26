import { stripe } from "@/lib/stripe";

interface CreateCustomerSessionServiceRequest {
    customerid:string;
   pricing_table_enabled:boolean;
   buy_button_enabled: boolean;
   payment_element_enabled: boolean;
           
}

export async function CreateCustomerSessionService({customerid,pricing_table_enabled,buy_button_enabled,payment_element_enabled}:CreateCustomerSessionServiceRequest){
    const customerSession = await stripe.customerSessions.create({
        customer: customerid,
        components: {
          pricing_table: {
            enabled: pricing_table_enabled,
          },
          buy_button: {
            enabled:buy_button_enabled, 
          },
          payment_element:{
            enabled:payment_element_enabled,
          },
        }
        });
        return customerSession;
}