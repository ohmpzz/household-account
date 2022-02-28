import { IncomeStatementMonthly, IncomeStatementType } from './model';

export interface Statement {
  title: string;
  income_statement_monthly: IncomeStatementMonthly;
  type?: IncomeStatementType;
}

export interface IncomeStatement {
  income: Statement[];
  fixed_expenses: Statement[];
  variable_expenses: Statement[];
  saving: Statement[];
  balance: Statement[];
}
