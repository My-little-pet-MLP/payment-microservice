import { FastifyInstance } from "fastify";
import { CreatePaymentIntentController } from "./create-payment-intent-controller";
import { GetPaymentIntentById } from "./get-payment-intent-by-id-controller";
import { ConfirmPaymentIntentController } from "./confirm-payment-intent-controller";

export async function PaymentIntentRouter(app:FastifyInstance){
    app.post("/",CreatePaymentIntentController)
    app.get("/:id",GetPaymentIntentById)
    app.post("/confirm",ConfirmPaymentIntentController)
}