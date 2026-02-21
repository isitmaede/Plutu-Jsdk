import { createHmac } from 'crypto';

export const verifyPlutuSignature = (data: any, secretKey: string): boolean => {
  const { hashed, ...params } = data;
  if (!hashed) return false;

  
  const queryString = Object.keys(params)
    .sort()
    .map(key => `${key}=${params[key]}`)
    .join('&');

 
  const expectedHash = createHmac('sha256', secretKey)
    .update(queryString)
    .digest('hex')
    .toUpperCase();

  return expectedHash === hashed.toUpperCase();
};