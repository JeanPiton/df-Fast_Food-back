import Joi from "joi";

export const IdSchema = Joi.object({
    id: Joi.number().integer().required()
});

export const OrdersSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    order: Joi.any().required()
})