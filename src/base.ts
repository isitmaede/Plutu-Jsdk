import axios, { AxiosInstance, AxiosError } from 'axios';
import { PlutuConfig, PlutuResponse } from './types';

export class BaseClient {
  protected api: AxiosInstance;

  constructor(config: PlutuConfig) {
    this.api = axios.create({
      baseURL: 'https://api.plutus.ly/api/v1',
      headers: {
        'Authorization': `Bearer ${config.accessToken}`,
        'X-API-KEY': config.apiKey,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    interface SuccessResponse<T = any> {
      success: true;
      status: number;
      [key: string]: any;
    }

    interface ErrorResponse {
      success: false;
      status: number;
      error: {
      code: string;
      message: string;
      };
    }

    this.api.interceptors.response.use(
      (response) => {
      response.data = {
        success: true,
        status: response.status,
        ...response.data,
      };
      return response;
      },
      (error: AxiosError): Promise<ErrorResponse> => {
      const errorData: any = error.response?.data;
      return Promise.reject({
        success: false,
        status: error.response?.status || 500,
        error: {
        code: errorData?.error?.code || 'UNKNOWN_ERROR',
        message: errorData?.error?.message || error.message,
        },
      });
      }
    );
  }

  protected async request<T>(method: 'POST' | 'GET', url: string, data?: any): Promise<PlutuResponse<T>> {
    const params = new URLSearchParams();
    
   
    if (data && method === 'POST') {
      Object.keys(data).forEach((key) => params.append(key, String(data[key])));
    }

    try {
      const response = await this.api.request({
        method,
        url,
        data: method === 'POST' ? params : undefined,
        params: method === 'GET' ? data : undefined,
      });
      return response.data as PlutuResponse<T>;
    } catch (error: any) {
      return error as PlutuResponse<T>;
    }
  }
}