import { IColumn } from "../interfaces/entities/column";

export const updateCardColumn = (prevColumns: IColumn[], cardId: string, fromColumnId: string, toColumnId: string) => {
 const fromColumn = prevColumns.find((col) => col.id === fromColumnId);
 const cardToMove = fromColumn?.cards.find((card) => card.id === cardId);
 if (!cardToMove) return prevColumns;

 return prevColumns.map((column) => {
   if (column.id === fromColumnId) {
     return { ...column, cards: column.cards.filter((card) => card.id !== cardId) };
   }
   if (column.id === toColumnId) {
     return { ...column, cards: [...column.cards, { ...cardToMove, columnId: column.id }] };
   }
   return column;
 });

}