import { GetCustomerByIdService } from "@/service/customer/get-customer-by-id-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function GetCustomerByIdController(request:FastifyRequest,reply:FastifyReply){
    const GetCustomerByIdControllerParamsSchema = z.object({
        id:z.string().trim().min(1),
    })
    try{
    const {id} = GetCustomerByIdControllerParamsSchema.parse(request.body)

    const customer = await GetCustomerByIdService({id});
    
    return reply.status(200).send(customer)
    }
    catch(err){
        if(err instanceof Error){
            return reply.status(400).send({message:err.message})
        }
        return reply.status(500).send({message:"Internal Server Error"+ err})
    }
}