import { Request, Response } from 'express';

// todo ดึงข้อมูลทั้งหมด
export async function GetAllIncomeStatementHandler(
  req: Request,
  res: Response
) {
  return res.send('hi ');
}

// todo ดึงข้อมูลตาม params.id
export async function GetOneIncomeStatementHandler(
  req: Request,
  res: Response
) {}

// todo สร้างข้อมูล
// todo ส่งข้อมูลที่สร้างกลับ
export async function CreateIncomeStatementHandler(
  req: Request,
  res: Response
) {}

// todo แก้ไขข้อมูล
// todo ส่งข้อมูลใหม่กลับ
export async function UpdateIncomeStatementHandler(
  req: Request,
  res: Response
) {}

// todo ลบข้อมูล
export async function DeleteIncomeStatementHandler(
  req: Request,
  res: Response
) {}
