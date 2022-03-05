import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';
import { isValidObjectId } from 'mongoose';
import { IncomeStatementType } from './model';

const IncomeStatementMonthlySchema = yup
  .object({
    january: yup.number(),
    february: yup.number(),
    march: yup.number(),
    april: yup.number(),
    may: yup.number(),
    june: yup.number(),
    july: yup.number(),
    august: yup.number(),
    september: yup.number(),
    october: yup.number(),
    november: yup.number(),
    december: yup.number(),
  })
  .noUnknown()
  .default(undefined);

export const createSchema = yup
  .object({
    type: yup
      .mixed<IncomeStatementType>()
      .oneOf([
        'fixed expenses',
        'income',
        'saving & investment',
        'variable expenses',
      ])
      .required(),
    title: yup.string().max(100).required(),
    income_statement_monthly: IncomeStatementMonthlySchema,
  })
  .noUnknown()
  .required();

export const updateSchema = yup
  .object({
    type: yup
      .mixed<IncomeStatementType>()
      .oneOf([
        'fixed expenses',
        'income',
        'saving & investment',
        'variable expenses',
      ]),
    title: yup.string().max(100),
    income_statement_monthly: IncomeStatementMonthlySchema.notRequired(),
  })
  .noUnknown()
  .required();

type IncomeStatementMonthly = Partial<
  yup.InferType<typeof IncomeStatementMonthlySchema>
>;
export interface CreateIncomeStatementBody
  extends Omit<yup.InferType<typeof createSchema>, 'income_statement_monthly'> {
  income_statement_monthly?: IncomeStatementMonthly;
}

export interface UpdateIncomeStatementBody
  extends Omit<yup.InferType<typeof updateSchema>, 'income_statement_monthly'> {
  income_statement_monthly?: yup.InferType<typeof IncomeStatementMonthlySchema>;
}

yup.addMethod(
  yup.string,
  'objectId',
  function (message: string = '${path} must be a valid bson object id') {
    return this.test('objectId', message, (value) => {
      return isValidObjectId(value);
    });
  }
);

//@ts-ignore

declare module 'yup' {
  interface StringSchema<
    TType extends Maybe<string> = string | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType
  > extends yup.BaseSchema<TType, TContext, TOut> {
    objectId(message?: string): StringSchema<TType, TContext>;
  }
}

export const getOneParamSchema = yup.object({
  id: yup.string().objectId().required(),
});

export const updateParamSchema = yup.object({
  id: yup.string().objectId().required(),
});

export const deleteParamSchema = yup.object({
  id: yup.string().objectId().required(),
});

export type GetOneParam = yup.InferType<typeof getOneParamSchema>;
export type UpdateParam = yup.InferType<typeof updateParamSchema>;
export type DeleteParam = yup.InferType<typeof deleteParamSchema>;
