import { Request, Response } from 'express';
import { IncomeStatementDocumentLean } from './model';
import * as Service from './service';
import { makeIncomeStatement } from './make-income-statement.utils';
import { IncomeStatement } from './types';
import { ResBody } from 'types';
import * as Schema from './schema';
import isEmpty from 'lodash.isempty';

export async function GetAllIncomeStatementHandler(
  req: Request,
  res: Response<ResBody<IncomeStatement>>
) {
  try {
    const docs = await Service.findIncomeStatement({}).select('-__v');
    const incomeStatement = makeIncomeStatement(docs);
    return res.json({
      code: 'income-statement/succeeded',
      data: incomeStatement,
    });
  } catch {
    return res
      .status(500)
      .json({ code: 'income-statement/something-went-wrong' });
  }
}

export async function GetOneIncomeStatementHandler(
  req: Request<Schema.GetOneParam>,
  res: Response<ResBody<IncomeStatementDocumentLean>>
) {
  try {
    const doc = (await Service.findOneIncomeStatement({
      _id: req.params?.id,
    }).select('-__v')) as IncomeStatementDocumentLean;

    if (isEmpty(doc)) {
      return res.sendStatus(404);
    }

    return res.json({ code: 'income-statement/succeeded', data: doc });
  } catch {
    return res
      .status(500)
      .json({ code: 'income-statement/something-went-wrong' });
  }
}

export async function CreateIncomeStatementHandler(
  req: Request<{}, {}, Schema.CreateIncomeStatementBody>,
  res: Response<ResBody<IncomeStatementDocumentLean>>
) {
  try {
    const created = (await Service.createIncomeStatement(
      req.body
    )) as IncomeStatementDocumentLean;

    return res
      .status(201)
      .json({ code: 'income-statement/created', data: created });
  } catch {
    return res
      .status(500)
      .json({ code: 'income-statement/something-went-wrong' });
  }
}

export async function UpdateIncomeStatementHandler(
  req: Request<Schema.UpdateParam, {}, Schema.UpdateIncomeStatementBody>,
  res: Response<ResBody<IncomeStatementDocumentLean>>
) {
  try {
    const updated = (await Service.updateIncomeStatement(
      { _id: req.params?.id },
      req.body
    ).select('-__v')) as IncomeStatementDocumentLean;

    if (isEmpty(updated)) {
      return res.sendStatus(404);
    }

    return res.json({ code: 'income-statement/updated', data: updated });
  } catch {
    return res
      .status(500)
      .json({ code: 'income-statement/something-went-wrong' });
  }
}

export async function DeleteIncomeStatementHandler(
  req: Request<Schema.DeleteParam>,
  res: Response<ResBody>
) {
  try {
    const found = await Service.findOneIncomeStatement({ _id: req.params?.id });

    if (isEmpty(found)) {
      return res.sendStatus(404);
    }

    await Service.deleteIncomeStatement({
      _id: req.params?.id,
    });

    return res.json({ code: 'income-statement/deleted' });
  } catch {
    return res
      .status(500)
      .json({ code: 'income-statement/something-went-wrong' });
  }
}
