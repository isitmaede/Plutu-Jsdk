import { BaseClient } from '../base'; 
import { TLyncConfirmRequest, TLyncConfirmResult } from '../types/tlync';
import { PlutuResponse } from '../types';

export class TLync extends BaseClient {

  
  constructor(config: any) {
    super(config);
  }

  /**
   * Pay using T-Lync Service
   */
  public async confirm(data: TLyncConfirmRequest): Promise<PlutuResponse<TLyncConfirmResult>> {
    return this.request<TLyncConfirmResult>('POST', '/transaction/tlync/confirm', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }
}