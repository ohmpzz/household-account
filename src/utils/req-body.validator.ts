import { Request, Response } from 'express';
import * as yup from 'yup';
import { ValidationError } from 'yup';

export function ReqBodyValidator(schema: yup.AnyObjectSchema) {
  return async (req: Request, res: Response, next: Function) => {
    try {
      const data = await schema.validate(req.body);
      req.body = data;
      return next();
    } catch (e) {
      console.log((e as ValidationError).message);

      return res
        .status(400)
        .json({ code: 400, message: (e as ValidationError).message });
    }
  };
}

export default ReqBodyValidator;
