import { stripe } from "@/lib/stripe";

interface ConfirmPaymentIntentRequest {
    paymentIntentId:string;
    paymentMethodId:string;
    use_stripe_sdk:boolean;
    receipt_email:string;
}
export async function ConfirmPaymentIntent({paymentMethodId,paymentIntentId,use_stripe_sdk,receipt_email}:ConfirmPaymentIntentRequest){
    const paymentIntentconfirm = await stripe.paymentIntents.confirm(
        paymentIntentId,
        {
            payment_method:paymentMethodId,
            use_stripe_sdk,
            receipt_email,
        }
      );
      return paymentIntentconfirm;
}