export interface ICard  {
  id: string
  title: string;
  description: string;
  columnId: string;
};

export interface ICreateCardDto {
  title: string;
  description?: string;
  columnId: string;
};