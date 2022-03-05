import { IncomeStatement, Statement } from '../types';
import mongoose from 'mongoose';

export const initIncomeStatement = [
  {
    _id: new mongoose.Types.ObjectId().toString(),
    title: 'เงินเดือน',
    type: 'income',
    income_statement_monthly: {
      january: 30000,
      february: 30000,
      march: 30000,
      april: 30000,
      may: 30000,
      june: 30000,
    },
  },
  {
    _id: new mongoose.Types.ObjectId().toString(),
    title: 'ค่าอาหาร',
    type: 'variable expenses',
    income_statement_monthly: {
      january: 6000,
      february: 6000,
      march: 6000,
      april: 6000,
      may: 6000,
      june: 6000,
    },
  },
  {
    _id: new mongoose.Types.ObjectId().toString(),
    title: 'ผ่อนชำระสินเชื่อส่วนบุคคล',
    type: 'fixed expenses',
    income_statement_monthly: {
      january: 1800,
      february: 1800,
      march: 1800,
      april: 1800,
      may: 1800,
      june: 1800,
    },
  },
  {
    _id: new mongoose.Types.ObjectId().toString(),
    title: 'เงินออมรายเดือน',
    type: 'saving & investment',
    income_statement_monthly: {
      january: 3000,
      february: 3000,
      march: 3000,
      april: 3000,
      may: 3000,
      june: 3000,
    },
  },
];

export const incomeStatement_income: Statement = {
  _id: expect.any(String),
  created_at: expect.any(String),
  updated_at: expect.any(String),
  title: 'เงินเดือน',
  type: 'income',
  income_statement_monthly: {
    january: 30000,
    february: 30000,
    march: 30000,
    april: 30000,
    may: 30000,
    june: 30000,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  },
};

export const incomeStatement_variable_expenses: Statement = {
  _id: expect.any(String),
  created_at: expect.any(String),
  updated_at: expect.any(String),
  title: 'ค่าอาหาร',
  type: 'variable expenses',
  income_statement_monthly: {
    january: 6000,
    february: 6000,
    march: 6000,
    april: 6000,
    may: 6000,
    june: 6000,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  },
};

export const incomeStatement_fixed_expenses: Statement = {
  _id: expect.any(String),
  created_at: expect.any(String),
  updated_at: expect.any(String),
  title: 'ผ่อนชำระสินเชื่อส่วนบุคคล',
  type: 'fixed expenses',
  income_statement_monthly: {
    january: 1800,
    february: 1800,
    march: 1800,
    april: 1800,
    may: 1800,
    june: 1800,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  },
};

export const incomeStatement_saving: Statement = {
  _id: expect.any(String),
  created_at: expect.any(String),
  updated_at: expect.any(String),
  title: 'เงินออมรายเดือน',
  type: 'saving & investment',
  income_statement_monthly: {
    january: 3000,
    february: 3000,
    march: 3000,
    april: 3000,
    may: 3000,
    june: 3000,
    july: 0,
    august: 0,
    september: 0,
    october: 0,
    november: 0,
    december: 0,
  },
};

export const incomeStatement: IncomeStatement = {
  income: [incomeStatement_income],
  fixed_expenses: [incomeStatement_fixed_expenses],
  variable_expenses: [incomeStatement_variable_expenses],
  saving: [incomeStatement_saving],
  balance: [
    {
      title: 'เงินคงเหลือ',
      income_statement_monthly: {
        january: 19200,
        february: 19200,
        march: 19200,
        april: 19200,
        may: 19200,
        june: 19200,
        july: 0,
        august: 0,
        september: 0,
        october: 0,
        november: 0,
        december: 0,
      },
    },
  ],
};
