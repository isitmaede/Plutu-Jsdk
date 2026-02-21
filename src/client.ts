import { BaseClient } from './base';
import { PlutuConfig } from './types';
import { Sadad } from './services/sadad';
import { Adfali } from './services/adfali';
import { Cards } from './services/cards';
import { TLync } from './services/tlync';
import { verifyPlutuSignature } from './utils/crypto';

export class Plutu extends BaseClient {
  public readonly sadad: Sadad;
  public readonly adfali: Adfali;
  public readonly cards: Cards;
  public readonly tlync: TLync;

  constructor(config: PlutuConfig) {
    super(config);
    this.sadad = new Sadad(config);
    this.adfali = new Adfali(config);
    this.cards = new Cards(config);
    this.tlync = new TLync(config);
  }

  public verifySignature(data: any, secretKey: string): boolean {
    return verifyPlutuSignature(data, secretKey);
  }
}