export interface CardConfirmRequest {
  /** Amount in LYD (Local) or USD (MPGS) */
  amount: number;
  /** Unique invoice number */
  invoice_no: string;
  /** URL to redirect the customer after payment */
  return_url: string;
  /** [Optional] Customer IP */
  customer_ip?: string;
  /** [Optional] Language: 'ar' or 'en' (default: 'ar') */
  lang?: 'ar' | 'en';
}

export interface CardConfirmResult {
  /** The URL where you should redirect your customer to complete payment */
  payment_url: string;
  /** Plutu transaction ID */
  transaction_id: string;
}


export interface PlutuCallbackData {
  gateway: string;
  approved: string;
  amount: string;
  invoice_no: string;
  transaction_id: string;
  hashed: string;
  [key: string]: any; 
}