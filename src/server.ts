import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";
import awsLambdaFastify from '@fastify/aws-lambda';

const app = Fastify({ logger: true })

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
})

app.register(cors);
app.register(routes);

let isVercel = false;

if (process.env.VERCEL) {
    isVercel = true;
    module.exports.handler = awsLambdaFastify(app);
} else {
    const start = async () => {
        try {
            await app.listen({ port: 3333 })
        } catch (err) {
            process.exit(1)
        }
    }

    start();
}
