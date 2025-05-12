import type { AxiosInstance, AxiosRequestConfig } from "axios";
import type { IHTTPRequestService } from "../interfaces/IHTTPRequestService";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
});

function createAxiosService(
  instance: AxiosInstance
): IHTTPRequestService<AxiosRequestConfig> {
  return {
    get: async <T,>(url: string, config?: AxiosRequestConfig): Promise<T> => {
      const response = await instance.get<T>(url, config);
      return response.data;
    },
    post: async <T, K = unknown>(
      url: string,
      body: K,
      config?: AxiosRequestConfig
    ): Promise<T> => {
      const response = await instance.post<T>(url, body, config);
      return response.data;
    },
  };
}

export const axiosService = createAxiosService(axiosInstance);
