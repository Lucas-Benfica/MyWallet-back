import Joi from "joi";

export const schemaTransaction = Joi.object({
    value: Joi.number().required().precision(2).positive().allow(0),
    description: Joi.string().required()
})