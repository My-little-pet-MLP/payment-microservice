import { CreatePaymentIntentService } from "@/service/payment-intent/create-payment-intent-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function  CreatePaymentIntentController(request:FastifyRequest,reply:FastifyReply) {
    const CreatePaymentIntentControllerBodySchema = z.object({
        amount: z.number().int(),
        custumerId: z.string().trim().min(1)
    })
    const {amount,custumerId}= CreatePaymentIntentControllerBodySchema.parse(request.body)
    try{
        const paymentCreated = await CreatePaymentIntentService({amount,custumerId});
        const secretpayment = paymentCreated.client_secret;
        return reply.status(201).send(secretpayment)
    }
    catch(err){
        if(err instanceof Error){
            return reply.status(401).send({message: err.message})
        }
    }
}