import { GetpaymentIntentById } from "@/service/payment-intent/get-payment-intent-by-id-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function GetPaymentIntentById(request:FastifyRequest,reply:FastifyReply){
    const GetPaymentIntentByIdParamsSchema = z.object({
        id: z.string().trim().min(1)
    })
    const {id} = GetPaymentIntentByIdParamsSchema.parse(request.params);

    const PaymentIntent = await GetpaymentIntentById({id});

    return reply.status(200).send(PaymentIntent);
}