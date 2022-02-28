import { IncomeStatementDocumentLean, Month } from './model';
import { IncomeStatement, Statement } from './types';

const initIncomeStatement: IncomeStatement = {
  income: [],
  fixed_expenses: [],
  variable_expenses: [],
  saving: [],
  balance: [
    {
      title: 'เงินคงเหลือ',
      income_statement_monthly: {
        january: 0,
        february: 0,
        march: 0,
        april: 0,
        may: 0,
        june: 0,
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

export function makeIncomeStatement(
  docs: IncomeStatementDocumentLean[]
): IncomeStatement {
  const month = Object.keys(
    initIncomeStatement.balance[0].income_statement_monthly
  ) as Month[];

  const data = docs.reduce(
    (prev: IncomeStatement, current: IncomeStatementDocumentLean) => {
      const clonePrev = { ...prev };
      const cloneBalance = { ...clonePrev.balance };

      if (current.type === 'fixed expenses') {
        const newStatement: Statement = current;
        clonePrev.fixed_expenses.push(newStatement);
        month.forEach((month) => {
          cloneBalance[0].income_statement_monthly[month] -=
            newStatement.income_statement_monthly[month];
        });
      }

      if (current.type === 'income') {
        const newStatement: Statement = current;
        clonePrev.income.push(newStatement);

        month.forEach((month) => {
          cloneBalance[0].income_statement_monthly[month] +=
            newStatement.income_statement_monthly[month];
        });
      }

      if (current.type === 'saving & investment') {
        const newStatement: Statement = current;
        clonePrev.saving.push(newStatement);
        month.forEach((month) => {
          cloneBalance[0].income_statement_monthly[month] -=
            newStatement.income_statement_monthly[month];
        });
      }

      if (current.type === 'variable expenses') {
        const newStatement: Statement = current;
        clonePrev.variable_expenses.push(newStatement);
        month.forEach((month) => {
          cloneBalance[0].income_statement_monthly[month] -=
            newStatement.income_statement_monthly[month];
        });
      }

      return clonePrev;
    },
    initIncomeStatement
  );
  return data;
}

export default makeIncomeStatement;
