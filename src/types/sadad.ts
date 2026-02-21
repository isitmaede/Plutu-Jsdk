export interface SadadVerifyRequest {
  /** Customer mobile number starting with 091 or 093 */
  mobile_number: string;
  /** Customer birth year (4 digits, e.g., 1990) */
  birth_year: string;
  /** Amount in LYD (e.g., 50.5) */
  amount: number;
}

export interface SadadConfirmRequest {
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

// الردود المتوقعة من سداد
export interface SadadVerifyResult {
  process_id: number;
}

export interface SadadConfirmResult {
  // سداد غالباً لا ترجع بيانات إضافية في الـ result عند النجاح، فقط حالة 200
}