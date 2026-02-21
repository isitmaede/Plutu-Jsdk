# Plutu JSDK 🇱🇾🚀

The most simplified, developer-friendly TypeScript/JavaScript SDK for **Plutu.ly** payment gateway.

## Why Plutu JSDK?
- **Zero-Config Logic**: Automatically handles Headers, BaseURLs, and Form-Data.
- **Auto-Formatting**: Send amounts as `numbers`, we handle the `string` formatting for you.
- **Built-in Security**: Verify Plutu signatures (HMAC SHA-256) with one line of code.
- **Full TypeScript Support**: Get autocomplete for all payment methods (Sadad, Adfali, Cards, T-Lync).

## Installation
```bash
npm install plutu-jsdk



Quick Start


import { Plutu } from 'plutu-jsdk';

const plutu = new Plutu({
  apiKey: 'your_api_key',
  accessToken: 'your_access_token'
});

// Example: Sadad Payment
const response = await plutu.sadad.verify({
  mobile_number: '0910000000',
  birth_year: '1990',
  amount: 50.5 // Automatically formatted to "50.50"
});

if (response.success) {
  console.log('Process ID:', response.result.process_id);
} else {
  console.error('Error:', response.error.message);
}

Security (Verify Callback)
Don't worry about complex HMAC calculations. We got you covered:

const isSafe = plutu.verifySignature(req.query, 'YOUR_SECRET_KEY');
if (isSafe) {
  // Process your order
}

Supported Services
[x] Sadad (Verify/Confirm)

[x] Adfali (Verify/Confirm)

[x] Local Bank Cards (Redirect/Verify)

[x] MPGS Mastercard (International/USD)

[x] T-Lync (Multi-Gateway)