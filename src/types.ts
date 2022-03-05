export type Dimension = 'income-statement' | 'household';
export type Action =
  | 'created'
  | 'succeeded'
  | 'updated'
  | 'deleted'
  | 'something-went-wrong';

// info: Template Literal Types
type Code = `${Dimension}/${Action}`;

// D = Dimension
export interface ResBody<T = any> {
  code: Code;
  data?: T;
  messsage?: string;
}
