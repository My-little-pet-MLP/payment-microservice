import { ConfirmPaymentIntent } from "@/service/payment-intent/confirm-payment-intent-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function ConfirmPaymentIntentController(request:FastifyRequest,reply:FastifyReply){
    const ConfirmPaymentIntentControllerBodySchema = z.object({
        paymentIntentId:z.string().trim().min(1),
        paymentMethodId:z.string().trim().min(1),
        use_stripe_sdk:z.boolean(),
        receipt_email: z.string().email(),
    })

    const {paymentIntentId,paymentMethodId,receipt_email,use_stripe_sdk} = ConfirmPaymentIntentControllerBodySchema.parse(request.body)

    try{
    const ConfirmedPaymentIntent = await ConfirmPaymentIntent({paymentIntentId,paymentMethodId,receipt_email,use_stripe_sdk})

    return reply.status(200).send({ConfirmedPaymentIntent});
    }
    catch(err){
        return reply.status(500).send({message:"internal server error"})
    }
}