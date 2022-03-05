import { makeIncomeStatement } from '../make-income-statement.utils';
import { IncomeStatementDocumentLean } from '../model';
import { IncomeStatement } from '../types';

const incomeStatements: IncomeStatementDocumentLean[] = [
  {
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
  },
];

const savingStatements: IncomeStatementDocumentLean[] = [
  {
    title: 'กองทุน กบข.',
    type: 'saving & investment',
    income_statement_monthly: {
      january: 900,
      february: 900,
      march: 900,
      april: 900,
      may: 900,
      june: 900,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  },
  {
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
  },
];

const fixedStatements: IncomeStatementDocumentLean[] = [
  {
    title: 'ภาษี',
    type: 'fixed expenses',
    income_statement_monthly: {
      january: 500,
      february: 500,
      march: 500,
      april: 500,
      may: 500,
      june: 500,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  },
  {
    title: 'ค่าเช่าบ้าน',
    type: 'fixed expenses',
    income_statement_monthly: {
      january: 3500,
      february: 3500,
      march: 3500,
      april: 3500,
      may: 3500,
      june: 3500,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  },
  {
    title: 'ค่าสาธารณูปโภค',
    type: 'fixed expenses',
    income_statement_monthly: {
      january: 1500,
      february: 1500,
      march: 1500,
      april: 1500,
      may: 1500,
      june: 1500,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  },
  {
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
  },
  {
    title: 'ประกันชีวิต',
    type: 'fixed expenses',
    income_statement_monthly: {
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 15000,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  },
];

const variableStatements: IncomeStatementDocumentLean[] = [
  {
    title: 'ค่าเดินทาง',
    type: 'variable expenses',
    income_statement_monthly: {
      january: 4000,
      february: 4000,
      march: 4000,
      april: 4000,
      may: 4000,
      june: 4000,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
  },
  {
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
  },
  {
    title: 'ค่าใช้จ่ายทั่วไป',
    type: 'variable expenses',
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
  },
];

const incomeStatementDocuments: IncomeStatementDocumentLean[] = [
  ...incomeStatements,
  ...savingStatements,
  ...fixedStatements,
  ...variableStatements,
];

const incomeStatement: IncomeStatement = {
  income: incomeStatements,
  fixed_expenses: fixedStatements,
  variable_expenses: variableStatements,
  saving: savingStatements,
  balance: [
    {
      title: 'เงินคงเหลือ',
      income_statement_monthly: {
        january: 5800,
        february: 5800,
        march: 5800,
        april: 5800,
        may: 5800,
        june: -9200,
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

describe('make income statment', () => {
  it('should return the correct pattern ', () => {
    const data = makeIncomeStatement(incomeStatementDocuments);
    expect(data).toEqual(incomeStatement);
  });
});
