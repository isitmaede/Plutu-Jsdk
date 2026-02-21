import { BaseClient } from '../base'; 
import { SadadVerifyRequest, SadadConfirmRequest, SadadVerifyResult, SadadConfirmResult } from '../types/sadad';
import { PlutuResponse } from '../types';

export class Sadad extends BaseClient {
  
 
  constructor(config: any) {
    super(config);
  }

  public async verify(data: SadadVerifyRequest): Promise<PlutuResponse<SadadVerifyResult>> {
    return this.request<SadadVerifyResult>('POST', '/transaction/sadadapi/verify', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }

  public async confirm(data: SadadConfirmRequest): Promise<PlutuResponse<SadadConfirmResult>> {
    return this.request<SadadConfirmResult>('POST', '/transaction/sadadapi/confirm', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }
}