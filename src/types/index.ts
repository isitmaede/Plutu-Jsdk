

export type PlutuStatus = 200 | 400 | 401 | 403 | 404 | 422 | 429 | 500;

/**
 * Unified Response format to keep the developer happy.
 * No matter which payment method, the response structure is the same.
 */
export interface PlutuResponse<T> {
  success: boolean; // Computed field for ease of use
  status: PlutuStatus;
  result?: T;
  message?: string;
  error?: {
    code: string;
    message: string;
  };
}

export interface PlutuConfig {
  apiKey: string;
  accessToken: string;
}