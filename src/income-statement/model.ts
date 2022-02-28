import { Schema, model, Types, Document } from 'mongoose';

export type IncomeStatementType =
  | 'income'
  | 'fixed expenses'
  | 'variable expenses'
  | 'saving & investment';

export type IncomeStatementMonthly = {
  january: number;
  february: number;
  march: number;
  april: number;
  may: number;
  june: number;
  july: number;
  august: number;
  september: number;
  october: number;
  november: number;
  december: number;
};

export interface IncomeStatementDocument extends Document {
  type: IncomeStatementType;
  title: string;
  income_statement_monthly: IncomeStatementMonthly;
}

const incomeStatementSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
    type: {
      type: Schema.Types.String,
      enum: [
        'income',
        'fixed expenses',
        'variable expenses',
        'saving & investment',
      ],
      required: true,
    },
    title: { type: Schema.Types.String, required: true, maxlength: 100 },
    income_statement_monthly: {
      january: { type: Schema.Types.Number, default: 0 },
      february: { type: Schema.Types.Number, default: 0 },
      march: { type: Schema.Types.Number, default: 0 },
      april: { type: Schema.Types.Number, default: 0 },
      may: { type: Schema.Types.Number, default: 0 },
      june: { type: Schema.Types.Number, default: 0 },
      july: { type: Schema.Types.Number, default: 0 },
      august: { type: Schema.Types.Number, default: 0 },
      september: { type: Schema.Types.Number, default: 0 },
      october: { type: Schema.Types.Number, default: 0 },
      november: { type: Schema.Types.Number, default: 0 },
      december: { type: Schema.Types.Number, default: 0 },
    },
  },
  {
    optimisticConcurrency: true,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default model<IncomeStatementDocument>(
  'incomeStatement',
  incomeStatementSchema
);
