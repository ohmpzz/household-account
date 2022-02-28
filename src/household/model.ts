import { Schema, model, Types, Document } from 'mongoose';

export type HouseholdType = 'income' | 'expense';

export interface HouseholdDocument extends Document {
  type: HouseholdType;
  title: string;
  amount: number;
}

const householdSchema = new Schema(
  {
    _id: { type: Schema.Types.ObjectId, default: Types.ObjectId },
    type: {
      type: Schema.Types.String,
      enum: ['income', 'expense'],
      required: true,
    },
    amount: { type: Schema.Types.Number, required: true },
    title: { type: Schema.Types.String, required: true, maxlength: 100 },
  },
  {
    optimisticConcurrency: true,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

export default model<HouseholdDocument>('household', householdSchema);
