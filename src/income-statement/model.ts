import { Schema, model, Types, Document } from 'mongoose';

export type IncomeStatmentType =
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

export interface IncomeStatmentDocument extends Document {
  type: IncomeStatmentType;
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
      january: { type: Schema.Types.Number, required: true },
      february: { type: Schema.Types.Number, required: true },
      march: { type: Schema.Types.Number, required: true },
      april: { type: Schema.Types.Number, required: true },
      may: { type: Schema.Types.Number, required: true },
      june: { type: Schema.Types.Number, required: true },
      july: { type: Schema.Types.Number, required: true },
      august: { type: Schema.Types.Number, required: true },
      september: { type: Schema.Types.Number, required: true },
      october: { type: Schema.Types.Number, required: true },
      november: { type: Schema.Types.Number, required: true },
      december: { type: Schema.Types.Number, required: true },
    },
  },
  {
    optimisticConcurrency: true,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default model<IncomeStatmentDocument>(
  'incomeStatement',
  incomeStatementSchema
);
