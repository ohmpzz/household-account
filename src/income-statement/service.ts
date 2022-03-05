import model, { IncomeStatementDocument } from './model';
import { FilterQuery, QueryOptions, UpdateQuery } from 'mongoose';
import { CreateIncomeStatementBody } from './schema';

export function findIncomeStatement(
  query: FilterQuery<IncomeStatementDocument>,
  options: QueryOptions = { lean: true }
) {
  return model.find(query, [], options);
}

export function findOneIncomeStatement(
  query: FilterQuery<IncomeStatementDocument>,
  options: QueryOptions = { lean: true }
) {
  return model.findOne(query, {}, options);
}

export function createIncomeStatement(payload: CreateIncomeStatementBody) {
  return model.create(payload);
}

export function updateIncomeStatement(
  query: FilterQuery<IncomeStatementDocument>,
  update: UpdateQuery<
    Omit<IncomeStatementDocument, 'created_at' | 'updated_at'>
  >,
  options: QueryOptions = { lean: true, new: true }
) {
  return model.findOneAndUpdate(query, update, options);
}

export function deleteIncomeStatement(
  query: FilterQuery<IncomeStatementDocument>
) {
  return model.deleteOne(query);
}
