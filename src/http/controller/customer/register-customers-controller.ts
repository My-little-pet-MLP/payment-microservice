import { RegisterCustomerService } from "@/service/customer/register-customers-service";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function RegisterCustomerController(request: FastifyRequest, reply: FastifyReply) {

    const registerCustomerControllerBodySchema = z.object({
        name: z.string().trim().min(1),
        email: z.string().trim().min(1).email(),
        address: z.object({
            country: z.string().trim().min(1),
            state: z.string().trim().min(1),
            city: z.string().trim().min(1),
            line: z.string().trim().min(1),
            postal_code: z.string().trim().min(1)
        })
    })
    try {
        const { name,email,address} = registerCustomerControllerBodySchema.parse(request.body)

        const registerCustomerServiceResponse = await RegisterCustomerService({ name, email, address })
        return reply.status(200).send(registerCustomerServiceResponse)

    } catch (err) {
        if (err instanceof Error) {
            return reply.status(400).send({ message: err.message })
        }
        return reply.status(500).send({ message: "Internal Server Error" + err })
    }

}