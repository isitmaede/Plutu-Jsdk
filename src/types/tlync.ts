export interface TLyncConfirmRequest {
  /** Transaction amount in LYD */
  amount: number;
  /** Unique invoice number */
  invoice_no: string;
  /** Valid mobile number (e.g. 091XXXXXXX) */
  mobile_number: string;
  /** Redirect URL after payment */
  return_url: string;
  /** Instant Update Server URL (Must be public) */
  callback_url: string;
  /** [Optional] Customer email */
  email?: string;
  /** [Optional] Customer IP */
  customer_ip?: string;
  /** [Optional] Language (ar/en) */
  lang?: 'ar' | 'en';
}

export interface TLyncConfirmResult {
  /** Redirect the customer here */
  payment_url: string;
  transaction_id: string;
}