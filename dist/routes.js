"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const CreateCustomerController_1 = require("./controllers/CreateCustomerController");
const ListCustomerController_1 = require("./controllers/ListCustomerController");
const DeleteCustomerSController_1 = require("./controllers/DeleteCustomerSController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/", (requeest, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.post("/customer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateCustomerController_1.CreateCustomerController().handle(request, reply);
        }));
        fastify.get("/customers", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCustomerController_1.ListCustomerController().handle(request, reply);
        }));
        fastify.delete("/customer", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new DeleteCustomerSController_1.DeleteCustomerController().handle(request, reply);
        }));
    });
}
//# sourceMappingURL=routes.js.map