// todo add test case

import { Request, Response, NextFunction } from 'express';
import * as yup from 'yup';
import { ValidationError } from 'yup';
import isEmpty from 'lodash.isempty';

export interface ValidateResourceSchema {
  body?: yup.AnyObjectSchema;
  query?: yup.AnyObjectSchema;
  params?: yup.AnyObjectSchema;
}

export function ValidateResource(schema: ValidateResourceSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!!schema?.body) {
        const parsedBody = await schema.body.validate(req.body);
        if (isEmpty(parsedBody)) {
          throw 'empty body';
        }

        req.body = parsedBody;
      }

      if (!!schema?.params) {
        const parsedParams = await schema.params
          .validate(req.params)
          .catch(() => null);
        if (isEmpty(parsedParams)) {
          return res.sendStatus(404);
        }

        req.params = parsedParams;
      }

      if (!!schema?.query) {
        const parsedQuery = await schema.query.validate(req.query);
        if (isEmpty(parsedQuery)) {
          throw 'empty query';
        }

        req.query = parsedQuery;
      }

      return next();
    } catch (e) {
      return res
        .status(400)
        .json({ code: 'bad-request', message: (e as ValidationError).message });
    }
  };
}

export default ValidateResource;
