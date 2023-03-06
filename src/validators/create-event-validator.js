import Joi from "joi";

const createEventSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Event Name is required"
  }),
  latitude: Joi.string().required().messages({
    "string.empty": "Latitude is required"
  }),
  longitude: Joi.string().required().messages({
    "string.empty": "Longitude is required"
  }),
  location: Joi.string().required().messages({
    "string.empty": "Location is required"
  }),
  date: Joi.string().required().messages({
    "string.empty": "Date is required"
  }),
  time: Joi.string().required().messages({
    "string.empty": "Time is required"
  }),
  paticipant: Joi.number().required().messages({
    "number.base": "Participant limit is required and must be number"
  }),
  age: Joi.number().required().messages({
    "number.base": "Age is required and must be number"
  }),
  category: Joi.string().required().messages({
    "string.empty": "Category is required"
  }),
  detail: Joi.string().required().messages({
    "string.empty": "If without any detail, please - in the blank space"
  })
});

const validateCreateEvent = (input) => {
  const { error } = createEventSchema.validate(input, { abortEarly: false });
  console.log({ error });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
    return result;
  }
};

export default validateCreateEvent;
