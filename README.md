<div align="center">
  <img src="https://my.plutus.ly/img/logo-white.svg" alt="Plutu Logo" width="200"/>
  <h1>Plutu JSDK</h1>
  <p><b>The Ultimate Node.js SDK for Plutu.ly Payment Gateway in Libya</b></p>
  
  <p>
    <img src="https://img.shields.io/npm/v/plutu-jsdk?style=flat-square&color=blue" alt="npm version">
    <img src="https://img.shields.io/npm/l/plutu-jsdk?style=flat-square&color=green" alt="license">
    <a href="https://www.npmjs.com/package/plutu-jsdk" target="_blank">
  <img src="https://img.shields.io/npm/dt/plutu-jsdk?style=for-the-badge&color=blue" alt="Total Downloads">
</a>
  </p>
</div>

---

## 📖 Overview
**Plutu JSDK** is a lightweight, type-safe, and developer-friendly library designed to integrate **Plutu.ly** payment services into your Node.js, JavaScript, or TypeScript applications seamlessly.

## ✨ Features
- 🚀 **Multi-Service Support**: Sadad, Adfali, Local Bank Cards, MPGS (Mastercard), and T-Lync.
- 🛡️ **Type Safety**: Full TypeScript support with detailed interfaces for requests and responses.
- 🔢 **Auto-Formatting**: Handles decimal currency formatting (e.g., `5` becomes `5.00`) automatically.
- 🔐 **Signature Verification**: Built-in utility to verify Plutu's digital signatures.
- 📦 **Zero Hassle**: Built on top of Axios for reliable HTTP requests.

---

## ⚙️ Installation

```bash
npm install plutu-jsdk
```

🚀 Quick Start
1. Initialize the Client
```js
import { Plutu } from 'plutu-jsdk';

const plutu = new Plutu({
  apiKey: 'YOUR_API_KEY',
  accessToken: 'YOUR_ACCESS_TOKEN'
});
```

2. Sadad Payment Example
```js
// Step 1: Request OTP (Verify)
const response = await plutu.sadad.verify({
  mobile_number: '091XXXXXXX',
  birth_year: '1990',
  amount: 50.0
});

if (response.success) {
  console.log('Transaction ID:', response.result.process_id);
} else {
  console.error('Error:', response.error.message);
}
```

3. Verify Signature (Webhooks)
Secure your backend by verifying that incoming data is genuinely from Plutu.
```js
const isValid = plutu.verifySignature(receivedData, 'YOUR_SECRET_KEY');
```

Service	Access Method	Key Functionality
- 📱 Sadad	`plutu.sadad`	OTP-based transactions via Al-Madar (Sadad).
- 💳 Adfali	`plutu.adfali`	Seamless integration with Adfali (BCD) service.
- 🌍 Cards	`plutu.cards`	Handles Local (LYD) & International (USD/MPGS) bank cards.
- 🔗 T-Lync	`plutu.tlync`	Direct payment processing through the T-Lync network.

Built with ❤️ for the Libyan Developer Community.