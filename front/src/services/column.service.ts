import type { IColumn, ICreateColumnDto } from "../interfaces/entities/column";
import type { IColumnService } from "../interfaces/IColumnService";
import type { IApiService } from "../interfaces/services/IApiService";
import { apiService, ApiRequestConfig } from "./api.service";

class ColumnService implements IColumnService {
 api: IApiService<ApiRequestConfig>;

 constructor(api: IApiService<ApiRequestConfig>) {
  this.api = api;
 }
 
 getAll(config?: ApiRequestConfig): Promise<IColumn[]> {
  return this.api.get("/column", config);
 }

 create(createColumnDto: ICreateColumnDto, config?: ApiRequestConfig): Promise<IColumn>{
  return  this.api.post("/column", createColumnDto, config);

 }
}

export const columnService = new ColumnService(apiService);