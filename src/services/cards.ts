import { BaseClient } from '../base'; 
import { CardConfirmRequest, CardConfirmResult } from '../types/cards';
import { PlutuResponse } from '../types';

export class Cards extends BaseClient {
  constructor(config: any) {
    super(config);
  }

  public async confirmLocal(data: CardConfirmRequest): Promise<PlutuResponse<CardConfirmResult>> {
    return this.request<CardConfirmResult>('POST', '/transaction/local_bank_cards/confirm', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }

  public async confirmMPGS(data: CardConfirmRequest): Promise<PlutuResponse<CardConfirmResult>> {
    return this.request<CardConfirmResult>('POST', '/transaction/mpgs/confirm', {
      ...data,
      amount: data.amount.toFixed(2),
    });
  }
}