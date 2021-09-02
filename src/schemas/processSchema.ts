import Joi from 'joi';

const processSchema = Joi.object({
  clientId: Joi.number().greater(0).required(),
  stateId: Joi.number().greater(0).less(28).required(),
  initialId: Joi.number().greater(0).required(),
  value: Joi.number().greater(0).required(),
  date: Joi.string().required(),
});

export { processSchema };
