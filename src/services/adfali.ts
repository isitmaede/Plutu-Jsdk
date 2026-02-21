import { BaseClient } from '../base';
import { AdfaliVerifyRequest, AdfaliConfirmRequest, AdfaliConfirmResult } from '../types/adfali';
import { PlutuResponse } from '../types';

export class Adfali extends BaseClient {
  /**
   * Step 1: Send OTP to customer
   */
  public async verify(data: AdfaliVerifyRequest): Promise<PlutuResponse<{ process_id: string }>> {
    return this.request<{ process_id: string }>('POST', '/transaction/edfali/verify', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }

  /**
   * Step 2: Confirm payment
   */
  public async confirm(data: AdfaliConfirmRequest): Promise<PlutuResponse<AdfaliConfirmResult>> {
    return this.request<AdfaliConfirmResult>('POST', '/transaction/edfali/confirm', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }
}