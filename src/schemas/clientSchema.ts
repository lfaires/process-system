import Joi from 'joi';

const clientSchema = Joi.object({
  name: Joi.string().min(3).required(),
  cnpj: Joi.string().length(14).required(),
  stateId: Joi.number().greater(0).less(28).required(),
});

export { clientSchema };
