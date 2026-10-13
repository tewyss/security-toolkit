# Security Toolkit

Small, privacy-first security tools that run entirely in the browser — no accounts, no tracking, no data stored anywhere.
Built with plain HTML, CSS and JavaScript. Available in English and Czech, with dark and light mode.

## Tools

### 🔑 Password Checker — `password/`
- **Strength rating** with [zxcvbn](https://github.com/dropbox/zxcvbn), which recognises dictionary words, names, dates, keyboard patterns and common substitutions.
- **Crack-time estimates** for four realistic attack scenarios, from a rate-limited login page to a GPU rig attacking a stolen MD5/SHA-1 database.
- **Data breach check** against [Have I Been Pwned](https://haveibeenpwned.com/Passwords) using **k-anonymity**:
  1. The browser hashes the password with SHA-1 (Web Crypto API).
  2. Only the first 5 hex characters of the hash are sent to the API.
  3. The API returns every leaked hash suffix with that prefix, plus random padding (`Add-Padding: true`) so even the response size reveals nothing.
  4. The browser searches for the rest of the hash locally.

  The password — and even its full hash — never leaves the device.
- **Checklist and tips** that explain *why* a password is weak.
- **Password generator** using `crypto.getRandomValues` with rejection sampling (no modulo bias) and no look-alike characters.

### ✉️ Phishing Email Analyzer — `phishing/`
Paste the original source of an email (Gmail: *Show original*) and get:
- **Verdict and risk score** built from weighted findings.
- **Sender authentication**: SPF, DKIM and DMARC results parsed from `Authentication-Results`.
- **Delivery path** reconstructed from the `Received` headers, with the originating IP and delays between hops.
- **Red flags**: look-alike domains (`paypa1-support.com`, punycode, character tricks like `rn` → `m`),
  brand impersonation in the sender name, Reply-To redirected to a free mailbox, fake addresses in display names,
  mismatched Return-Path / Message-ID, pressure words in the subject.
- **Link analysis**: link text that doesn't match the destination, raw IP links, URL shorteners, `user@host` tricks, plain HTTP.
- **Attachment check**: dangerous file types and double extensions (`invoice.pdf.zip`).
- Handles folded headers, RFC 2047 encoded subjects and quoted-printable bodies.
- Everything taken from the email is HTML-escaped before display — a pasted email can never run code on the page.

Two built-in examples (a phishing email and a legitimate GitHub notification) let anyone try it without their own email.

### 🕵️ What Your Browser Reveals — `reveal/`
Shows everything a website can read without asking, and how identifying it is:
- **Fingerprint ID** built from ~30 signals, plus a uniqueness estimate (bits of identifying information, corrected for correlation).
- **Device & system**: OS (incl. Windows 10 vs 11 via User-Agent Client Hints), browser, CPU threads, RAM, GPU (WebGL), touch, battery, network.
- **Screen, time zone, languages and privacy settings** (DNT, Global Privacy Control, storage quota…).
- **Canvas and audio fingerprinting** — renders an image and a sound offline, hashes the result, and detects when the browser adds anti-fingerprinting noise.
- **Font detection** by text measurement, flagging fonts that reveal installed software (Microsoft Office, Adobe, developer tools).
- **Protection tips** — and a "try it in a private window" demo showing that fingerprints survive cookie deletion.

## Run locally
Open the folder in VS Code and start **Live Server** (or any static server).
The breach check needs a secure context (`https://` or `localhost`) because the Web Crypto API is not available on insecure pages.

## Project structure
```
index.html              toolkit home page
assets/css/toolkit.css  shared styles (same design as my portfolio)
assets/js/common.js     theme + EN/CZ language switch
password/               Password Checker
phishing/               Phishing Email Analyzer
reveal/                 What Your Browser Reveals
```

---
Built by [Rostislav Nevoral](https://github.com/tewyss).
