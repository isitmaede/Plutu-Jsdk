export interface AdfaliVerifyRequest {
  /** Customer mobile number (09XXXXXXXX) */
  mobile_number: string;
  /** Amount in LYD (e.g., 25.0) */
  amount: number;
}

export interface AdfaliConfirmRequest {
  /** The process_id received from the verify step */
  process_id: string;
  /** The OTP code sent to the customer's phone */
  code: string;
  /** The same amount used in the verify step */
  amount: number;
  /** Unique invoice number for your system */
  invoice_no: string;
  /** [Optional] Customer IP address */
  customer_ip?: string;
}

export interface AdfaliConfirmResult {
  transaction_id: number;
  amount: number;
}