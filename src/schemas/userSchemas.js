import Joi from "joi";

export const schemaUser = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required().min(3)
})