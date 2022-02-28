import * as yup from 'yup';
import { IncomeStatementType } from './model';

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
    income_statement_monthly: yup
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
      .noUnknown(),
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
    income_statement_monthly: yup
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
      .noUnknown(),
  })
  .noUnknown()
  .required();

export type CreateIncomeStatementBody = yup.InferType<typeof createSchema>;
export type UpdateIncomeStatementBody = yup.InferType<typeof updateSchema>;
