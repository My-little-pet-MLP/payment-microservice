import { DeleteCustomerByIdService } from "@/service/customer/delete-customer-by-id-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function DeleteCustomerByIdController(request:FastifyRequest,reply:FastifyReply){
    const DeleteCustomerByIdControllerParamsSchema = z.object({
        id:z.string().min(1).trim()
    })
    const {id} = DeleteCustomerByIdControllerParamsSchema.parse(request.body)
    try{
        const deleteCustomerResponse = await DeleteCustomerByIdService({id});

        return reply.status(204).send({})
    }catch(err){
        if(err instanceof Error){
            return reply.status(404).send({message:err.message})
        }
        return reply.status(500).send({message:"Internal Server Error!"})
    }
}