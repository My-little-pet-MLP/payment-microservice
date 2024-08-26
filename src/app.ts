import fastify from 'fastify';
import cors from '@fastify/cors';
import { PaymentIntentRouter } from './http/controller/payment-intent/payment-intent-router';
import { CustomerRouter } from './http/controller/customer/customer-router';

export const app = fastify();

// Registre o plugin CORS
app.register(cors, {
  origin: '*', // Permite todas as origens. Ajuste conforme necessário para segurança.
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Métodos permitidos
});

app.register(PaymentIntentRouter, { prefix: '/payment-intent' });
app.register(CustomerRouter, { prefix: '/customer' });

