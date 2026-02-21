# Plutu JSDK 🇱🇾🚀

> A minimal, developer-first TypeScript/JavaScript SDK for **Plutu.ly** Payment Gateway.

Designed for speed, clarity, and zero friction. No boilerplate. No headaches.

---

## ✨ Features

- **Zero-Config Core**
  - Handles BaseURL, Headers, and FormData automatically.
- **Smart Amount Formatting**
  - Send `number` → SDK converts to valid `"string"` format (`50.5 → "50.50"`).
- **Secure by Default**
  - Built-in HMAC SHA-256 signature verification.
- **Full TypeScript Support**
  - Autocomplete + type safety for all gateways.
- **Unified API**
  - Same DX across Sadad, Adfali, Cards, MPGS, and T-Lync.

---

## 📦 Installation

```bash
npm install plutu-jsdk
⚡ Quick Start
import { Plutu } from "plutu-jsdk";

const plutu = new Plutu({
  apiKey: "YOUR_API_KEY",
  accessToken: "YOUR_ACCESS_TOKEN",
});

// Example: Sadad Verify
const response = await plutu.sadad.verify({
  mobile_number: "0910000000",
  birth_year: "1990",
  amount: 50.5, // Auto formatted → "50.50"
});

if (response.success) {
  console.log("Process ID:", response.result.process_id);
} else {
  console.error("Error:", response.error.message);
}
🔐 Security — Verify Callback Signature

No manual crypto work required.

const isValid = plutu.verifySignature(req.query, "YOUR_SECRET_KEY");

if (isValid) {
  // Safe: process order / confirm payment
} else {
  // Reject request
}
🧩 Supported Services
Service	Status
Sadad (Verify/Confirm)	✅
Adfali (Verify/Confirm)	✅
Local Bank Cards (Redirect/Verify)	✅
MPGS Mastercard (International / USD)	✅
T-Lync Multi-Gateway	✅
🛠 Example — Confirm Sadad Payment
const confirm = await plutu.sadad.confirm({
  process_id: "PROCESS_ID_FROM_VERIFY",
  otp: "12345",
});

if (confirm.success) {
  console.log("Payment Completed");
}
❗ Error Handling

All responses follow a consistent structure:

{
  success: boolean;
  result?: any;
  error?: {
    code: string;
    message: string;
  };
}

Recommended pattern:

if (!response.success) {
  throw new Error(response.error.message);
}
🌍 Environment Variables (Recommended)
PLUTU_API_KEY=your_api_key
PLUTU_ACCESS_TOKEN=your_access_token
PLUTU_SECRET_KEY=your_signature_secret
🧠 Design Philosophy

Minimal surface area

Predictable behavior

Strong typing

No hidden magic

Production reliability

📚 TypeScript Support

Full typings included out-of-the-box.

import type { SadadVerifyRequest } from "plutu-jsdk";
🤝 Contributing

PRs are welcome. For major changes, open an issue first to discuss the proposal.

📄 License

MIT License © Plutu.ly

🔗 Links

Official Website: https://plutu.ly

API Docs: https://api.plutu.ly

NPM Package: https://www.npmjs.com/package/plutu-jsdk
