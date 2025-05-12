import type { ICard } from "./card";

export interface IColumn {
 id: string,
 title: string,
 cards: ICard[],
}

export interface ICreateColumnDto {
 name: string,
}