import type { ApiRequestConfig } from "../services/api.service";
import type { IColumn, ICreateColumnDto } from "./entities/column";

export interface IColumnService {
 getAll(config?: ApiRequestConfig): Promise<IColumn[]>;
 create(createColumnDto: ICreateColumnDto): Promise<IColumn>;
}