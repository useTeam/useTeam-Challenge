import { axiosService } from '../configs/axios';
import type { IHTTPRequestService } from '../interfaces/IHTTPRequestService';
import type { AxiosRequestConfig } from 'axios';
import type { IApiService } from '../interfaces/services/IApiService';


class ApiService<C = unknown> implements IApiService<C> {
	httpService: IHTTPRequestService<C>;
	constructor(httpService: IHTTPRequestService<C>) {
		this.httpService = httpService;
	}
	get<T>(url: string, config?: C): Promise<T> {
		return this.httpService.get<T>(url, config);
	}
	post<T = unknown, K = unknown>(url: string, body: K, config?: C): Promise<T> {
		return this.httpService.post<T>(url, body, config);
	}
}

export type ApiRequestConfig = AxiosRequestConfig;
export const apiService = new ApiService<ApiRequestConfig>(axiosService);
