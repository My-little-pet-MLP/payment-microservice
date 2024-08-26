import { FastifyInstance } from "fastify";
import { DeleteCustomerByIdController } from "./delete-customer-by-id-controller";
import { GetCustomerByIdController } from "./get-customer-by-id-controller";
import { RegisterCustomerController } from "./register-customers-controller";

export async function CustomerRouter(app:FastifyInstance){
    app.delete("/:id",DeleteCustomerByIdController)
    app.get("/:id",GetCustomerByIdController)
    app.post("/",RegisterCustomerController)
}