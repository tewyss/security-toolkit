Toolkit.init({
  "nav.tools": "Všechny nástroje",
  "ph.title": "Analyzátor phishingových e-mailů",
  "ph.lead": "Vložte zdrojový kód podezřelého e-mailu a zjistěte, odkud doopravdy přišel, jestli prošel kontrolami SPF, DKIM a DMARC a jaké má varovné signály.",
  "ph.privacy": "Nic se nenahrává — analýza běží ve vašem prohlížeči",
  "ph.label": "Zdrojový kód e-mailu (hlavičky + obsah)",
  "mode.full": "Celý e-mail",
  "mode.fullHint": "Gmail, Outlook, Thunderbird, Apple Mail",
  "mode.split": "Hlavičky + text",
  "mode.splitHint": "Seznam, nebo když je máte zvlášť",
  "split.headers": "Hlavičky",
  "split.body": "Text e-mailu",
  "split.optional": "nepovinné — potřeba pro kontrolu odkazů",
  "split.bodyPlaceholder": "Vážený zákazníku, …",
  "ph.analyze": "Analyzovat e-mail",
  "ph.exPhish": "Ukázka phishingu",
  "ph.exLegit": "Bezpečná ukázka",
  "ph.clear": "Vymazat",
  "help.title": "Kde najdu zdrojový kód e-mailu?",
  "help.list":
    "<li><strong>Gmail:</strong> otevřete e-mail → <em>⋮ Více</em> → <em>Zobrazit originál</em> → <em>Kopírovat do schránky</em></li>" +
    "<li><strong>Outlook (web):</strong> otevřete e-mail → <em>⋯</em> → <em>Zobrazit</em> → <em>Zobrazit zdroj zprávy</em></li>" +
    "<li><strong>Seznam Email:</strong> otevřete e-mail → <em>⋯</em> → <em>Zobrazit zdroj</em>. Seznam ukáže jen hlavičky — použijte záložku <em>Hlavičky + text</em> a text e-mailu vložte do druhého pole.</li>" +
    "<li><strong>Thunderbird:</strong> otevřete e-mail → <em>Ctrl + U</em></li>" +
    "<li><strong>Apple Mail:</strong> <em>Zobrazení</em> → <em>Zpráva</em> → <em>Nezpracovaný zdroj</em></li>",
  "ov.title": "Přehled",
  "auth.title": "Ověření odesílatele",
  "flags.title": "Zjištění",
  "path.title": "Cesta doručení",
  "path.lead": "Každý poštovní server přidá řádek <code>Received</code>. Čtěte od odesílatele (nahoře) po vaši schránku (dole).",
  "links.title": "Odkazy v e-mailu",
  "footer.built": "Vytvořil",
});

const BRANDS = [
  { name: "PayPal", aliases: ["paypal"], domains: ["paypal.com", "paypal.me"], keys: ["paypal"] },
  { name: "Microsoft", aliases: ["microsoft", "outlook", "office 365", "office365", "onedrive", "teams"], domains: ["microsoft.com", "outlook.com", "office.com", "live.com", "microsoftonline.com", "hotmail.com"], keys: ["microsoft", "office365", "onedrive"] },
  { name: "Apple", aliases: ["apple", "icloud", "itunes", "app store"], domains: ["apple.com", "icloud.com", "me.com"], keys: ["apple", "icloud"] },
  { name: "Amazon", aliases: ["amazon", "prime video"], domains: ["amazon.com", "amazon.de", "amazon.co.uk", "amazonses.com", "amazonaws.com"], keys: ["amazon"] },
  { name: "Google", aliases: ["google", "gmail", "youtube"], domains: ["google.com", "gmail.com", "youtube.com", "googlemail.com", "accounts.google.com"], keys: ["google"] },
  { name: "Netflix", aliases: ["netflix"], domains: ["netflix.com"], keys: ["netflix"] },
  { name: "Facebook", aliases: ["facebook", "meta"], domains: ["facebook.com", "facebookmail.com", "meta.com"], keys: ["facebook"] },
  { name: "Instagram", aliases: ["instagram"], domains: ["instagram.com", "mail.instagram.com"], keys: ["instagram"] },
  { name: "LinkedIn", aliases: ["linkedin"], domains: ["linkedin.com"], keys: ["linkedin"] },
  { name: "GitHub", aliases: ["github"], domains: ["github.com", "githubusercontent.com"], keys: ["github"] },
  { name: "Steam", aliases: ["steam"], domains: ["steampowered.com", "steamcommunity.com"], keys: ["steampowered", "steamcommunity"] },
  { name: "Revolut", aliases: ["revolut"], domains: ["revolut.com"], keys: ["revolut"] },
  { name: "DHL", aliases: ["dhl"], domains: ["dhl.com", "dhl.de", "dhl.cz"], keys: [] },
  { name: "Česká pošta", aliases: ["ceska posta", "posta online"], domains: ["cpost.cz", "postaonline.cz"], keys: ["ceskaposta", "postaonline"] },
  { name: "Zásilkovna", aliases: ["zasilkovna", "packeta"], domains: ["zasilkovna.cz", "packeta.com"], keys: ["zasilkovna", "packeta"] },
  { name: "Seznam.cz", aliases: ["seznam"], domains: ["seznam.cz", "email.cz", "szn.cz"], keys: ["seznam"] },
  { name: "ČSOB", aliases: ["csob"], domains: ["csob.cz"], keys: ["csob"] },
  { name: "Česká spořitelna", aliases: ["ceska sporitelna", "george"], domains: ["csas.cz", "servis24.cz"], keys: ["sporitelna", "servis24"] },
  { name: "Komerční banka", aliases: ["komercni banka"], domains: ["kb.cz"], keys: ["komercnibanka"] },
  { name: "Fio banka", aliases: ["fio banka"], domains: ["fio.cz"], keys: [] },
  { name: "Air Bank", aliases: ["air bank", "airbank"], domains: ["airbank.cz"], keys: ["airbank"] },
  { name: "MONETA", aliases: ["moneta"], domains: ["moneta.cz"], keys: ["moneta"] },
  { name: "Raiffeisenbank", aliases: ["raiffeisen"], domains: ["rb.cz"], keys: ["raiffeisen"] },
];

const FREE_PROVIDERS = [
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com", "yahoo.com", "icloud.com", "me.com",
  "aol.com", "gmx.com", "gmx.net", "proton.me", "protonmail.com", "mail.ru", "yandex.ru",
  "seznam.cz", "email.cz", "post.cz", "centrum.cz", "atlas.cz", "volny.cz", "tiscali.cz",
];

const SHORTENERS = [
  "bit.ly", "tinyurl.com", "t.co", "goo.gl", "is.gd", "cutt.ly", "rebrand.ly", "ow.ly", "shorturl.at",
  "buff.ly", "tiny.cc", "rb.gy", "s.id", "t.ly", "lnkd.in",
];

const RISKY_EXTENSIONS = [
  "exe", "scr", "com", "pif", "bat", "cmd", "ps1", "vbs", "vbe", "js", "jse", "wsf", "hta", "jar", "msi",
  "lnk", "iso", "img", "vhd", "html", "htm", "svg", "zip", "rar", "7z", "docm", "xlsm", "pptm", "one",
];

const PRESSURE_WORDS = [
  "urgent", "immediately", "verify", "verification", "suspended", "suspend", "locked", "unusual", "confirm your",
  "password", "invoice", "payment", "refund", "winner", "prize", "gift card", "overdue", "action required", "final notice",
  "urgentni", "ihned", "okamzite", "overte", "overeni", "pozastaven", "zablokovan", "heslo", "faktura", "platba",
  "vraceni", "vyhra", "doplatek", "nedorucen", "posledni upozorneni",
];

const SEVERITY_WEIGHT = { high: 25, medium: 10, low: 5, info: 0, good: 0 };
const SEVERITY_ORDER = ["high", "medium", "low", "info", "good"];

const TXT = {
  en: {
    verdict: {
      high: ["High risk — very likely phishing", "Don't click any links, don't open attachments and don't reply. Report the email and delete it."],
      medium: ["Suspicious — be careful", "Some warning signs were found. Before you act on it, verify with the sender through another channel (their official website or phone)."],
      low: ["No major warning signs", "The technical checks look fine. Still stay careful — an email from a hacked real account can pass every check."],
      lowUnverified: ["No major warning signs — but the sender isn't verified", "Nothing suspicious was found, but SPF, DKIM and DMARC results are missing, so the sender's identity couldn't be confirmed. If it asks for money, passwords or personal data, check it another way."],
    },
    counts: (c) => `${c.high} high · ${c.medium} medium · ${c.low} low · ${c.good} passed`,
    riskScore: "risk score",
    sev: { high: "high", medium: "medium", low: "low", info: "info", good: "ok" },
    ov: {
      from: "From", replyTo: "Reply-To", returnPath: "Return-Path", to: "To", subject: "Subject",
      date: "Date", messageId: "Message-ID", origin: "Origin IP", none: "—",
    },
    auth: {
      spf: "Is the sending server allowed to send email for this domain?",
      dkim: "Is the email digitally signed, and unchanged since it was sent?",
      dmarc: "Does the visible From address match a verified domain?",
      missing: "not in headers",
      present: "signed",
    },
    noHops: "No Received headers found.",
    noLinks: "No links found in the pasted text.",
    linkTags: {
      mismatch: "text ≠ destination", ip: "IP address", short: "shortener", lookalike: "look-alike",
      http: "no HTTPS", userinfo: "@ trick", punycode: "punycode",
    },
    linkText: "Link text",
    f: {
      spfPass: (d) => ["SPF passed", `The sending server is allowed to send email for <code>${d}</code>.`],
      spfFail: (d) => ["SPF failed", `The server that sent this email is <strong>not</strong> allowed to send email for <code>${d}</code> — a classic sign of spoofing.`],
      spfSoft: (d) => ["SPF soft-fail", `<code>${d}</code> does not fully authorise the server that sent this email.`],
      spfNone: () => ["No SPF result", "The sender's domain has no SPF record, or it wasn't checked."],
      dkimPass: (d) => ["DKIM signature valid", `Signed by <code>${d}</code> — the message wasn't changed on the way.`],
      dkimFail: () => ["DKIM signature invalid", "The digital signature doesn't match — the email may have been altered or forged."],
      dkimNone: () => ["Email is not signed (no DKIM)", "Almost all legitimate companies sign their emails. This one isn't signed."],
      dkimUnaligned: (d, from) => ["Signed by a different domain", `DKIM signature belongs to <code>${d}</code>, but the sender is <code>${from}</code>. Common for newsletters sent through a mailing service.`],
      dmarcPass: (d) => ["DMARC passed", `The From domain <code>${d}</code> is confirmed by SPF or DKIM.`],
      dmarcFail: (d) => ["DMARC failed", `The From address <code>${d}</code> could not be verified — the sender is very likely faked.`],
      dmarcNone: () => ["No DMARC result", "The sender's domain has no DMARC policy, so receivers can't confirm the From address."],
      noAuth: () => ["No authentication results", "The pasted text has no <code>Authentication-Results</code> header, so SPF, DKIM and DMARC can't be shown. Some providers (for example Seznam) remove it from the source they show you — Gmail and Outlook include it."],
      dkimPresent: (d) => ["Signed, but not verified here", `The email carries a DKIM signature from <code>${d}</code>. Whether it's valid can only be seen in the provider's <code>Authentication-Results</code>, which is missing.`],
      noReceived: () => ["Only part of the email?", "No <code>Received</code> headers were found. Paste the full original source, not just the visible text."],
      lookalike: (d, brand, legit, where) => ["Look-alike domain", `<code>${d}</code> (${where}) imitates <strong>${brand}</strong> — the real domain is <code>${legit}</code>.`],
      punycode: (d, where) => ["Punycode domain", `<code>${d}</code> (${where}) uses special characters that can look identical to normal letters.`],
      brand: (name, d, brand) => ["Brand impersonation", `The sender name says “${name}”, but the email comes from <code>${d}</code>, which doesn't belong to <strong>${brand}</strong>.`],
      nameEmail: (shown, real) => ["Fake address in the sender name", `The name shows <code>${shown}</code>, but the real sender is <code>${real}</code>.`],
      replyTo: (reply, from) => ["Replies go somewhere else", `Your reply would go to <code>${reply}</code> instead of <code>${from}</code>.`],
      replyFree: (reply) => ["Replies go to a free mailbox", `Replies are redirected to <code>${reply}</code> — a free email account. Real companies don't do this.`],
      returnPath: (rp, from) => ["Return-Path differs from sender", `Bounces go to <code>${rp}</code>, not <code>${from}</code>. Normal for mailing services, suspicious otherwise.`],
      msgId: (mid, from) => ["Message-ID from another domain", `The Message-ID was created by <code>${mid}</code>, not <code>${from}</code>.`],
      pressure: (words) => ["Pressure words in the subject", `Contains: ${words}. Phishing tries to make you act fast, before you think.`],
      linkMismatch: (text, host) => ["Link text doesn't match its destination", `Shows <code>${text}</code> but actually leads to <code>${host}</code>.`],
      linkIP: (host) => ["Link to a raw IP address", `<code>${host}</code> — legitimate companies link to their domain names.`],
      linkShort: (host) => ["Shortened link", `<code>${host}</code> hides where the link really goes.`],
      linkHttp: (host) => ["Unencrypted link", `<code>${host}</code> doesn't use HTTPS.`],
      linkUserinfo: (host) => ["Deceptive link with @", `Everything before “@” in a link is ignored — it really goes to <code>${host}</code>.`],
      attachment: (name) => ["Dangerous attachment", `<code>${name}</code> — this file type can run code or hide malware.`],
      doubleExt: (name) => ["Double file extension", `<code>${name}</code> pretends to be a different type of file than it is.`],
      where: { from: "sender", replyTo: "Reply-To", returnPath: "Return-Path", link: "link" },
    },
  },
  cs: {
    verdict: {
      high: ["Vysoké riziko — velmi pravděpodobně phishing", "Neklikejte na odkazy, neotvírejte přílohy a neodpovídejte. E-mail nahlaste a smažte."],
      medium: ["Podezřelé — buďte opatrní", "Našly se některé varovné signály. Než cokoli uděláte, ověřte si to u odesílatele jinou cestou (oficiální web nebo telefon)."],
      low: ["Žádné vážné varovné signály", "Technické kontroly vypadají v pořádku. Přesto buďte opatrní — e-mail z napadeného skutečného účtu projde všemi kontrolami."],
      lowUnverified: ["Žádné vážné varovné signály — ale odesílatel není ověřen", "Nic podezřelého se nenašlo, ale chybí výsledky SPF, DKIM a DMARC, takže totožnost odesílatele nešlo potvrdit. Pokud chce peníze, hesla nebo osobní údaje, ověřte si ho jinou cestou."],
    },
    counts: (c) => `${c.high} vysoké · ${c.medium} střední · ${c.low} nízké · ${c.good} v pořádku`,
    riskScore: "skóre rizika",
    sev: { high: "vysoké", medium: "střední", low: "nízké", info: "info", good: "ok" },
    ov: {
      from: "Od", replyTo: "Odpověď na", returnPath: "Return-Path", to: "Komu", subject: "Předmět",
      date: "Datum", messageId: "Message-ID", origin: "Zdrojová IP", none: "—",
    },
    auth: {
      spf: "Smí odesílající server posílat e-maily za tuto doménu?",
      dkim: "Je e-mail digitálně podepsaný a od odeslání nezměněný?",
      dmarc: "Odpovídá viditelná adresa odesílatele ověřené doméně?",
      missing: "v hlavičkách chybí",
      present: "podepsáno",
    },
    noHops: "Nebyly nalezeny žádné hlavičky Received.",
    noLinks: "Ve vloženém textu nejsou žádné odkazy.",
    linkTags: {
      mismatch: "text ≠ cíl", ip: "IP adresa", short: "zkracovač", lookalike: "napodobenina",
      http: "bez HTTPS", userinfo: "trik se @", punycode: "punycode",
    },
    linkText: "Text odkazu",
    f: {
      spfPass: (d) => ["SPF v pořádku", `Odesílající server smí posílat e-maily za <code>${d}</code>.`],
      spfFail: (d) => ["SPF selhalo", `Server, který e-mail odeslal, <strong>nesmí</strong> posílat e-maily za <code>${d}</code> — typický znak podvržení.`],
      spfSoft: (d) => ["SPF soft-fail", `<code>${d}</code> plně neautorizuje server, který e-mail odeslal.`],
      spfNone: () => ["Chybí výsledek SPF", "Doména odesílatele nemá SPF záznam, nebo nebyl zkontrolován."],
      dkimPass: (d) => ["DKIM podpis platný", `Podepsáno doménou <code>${d}</code> — zpráva se cestou nezměnila.`],
      dkimFail: () => ["DKIM podpis neplatný", "Digitální podpis nesedí — e-mail mohl být upraven nebo podvržen."],
      dkimNone: () => ["E-mail není podepsaný (chybí DKIM)", "Téměř všechny legitimní firmy své e-maily podepisují. Tento podepsaný není."],
      dkimUnaligned: (d, from) => ["Podepsáno jinou doménou", `DKIM podpis patří <code>${d}</code>, ale odesílatel je <code>${from}</code>. Běžné u newsletterů posílaných přes rozesílací službu.`],
      dmarcPass: (d) => ["DMARC v pořádku", `Doména odesílatele <code>${d}</code> je potvrzená přes SPF nebo DKIM.`],
      dmarcFail: (d) => ["DMARC selhalo", `Adresu odesílatele <code>${d}</code> nešlo ověřit — odesílatel je velmi pravděpodobně podvržený.`],
      dmarcNone: () => ["Chybí výsledek DMARC", "Doména odesílatele nemá DMARC politiku, takže příjemce nemůže adresu odesílatele potvrdit."],
      noAuth: () => ["Chybí výsledky ověření", "Vložený text neobsahuje hlavičku <code>Authentication-Results</code>, takže SPF, DKIM a DMARC nelze zobrazit. Někteří poskytovatelé (například Seznam) ji ze zobrazeného zdroje odstraňují — Gmail a Outlook ji obsahují."],
      dkimPresent: (d) => ["Podepsáno, ale zde neověřeno", `E-mail nese DKIM podpis domény <code>${d}</code>. Jestli je platný, ukazuje až hlavička <code>Authentication-Results</code> od poskytovatele, která chybí.`],
      noReceived: () => ["Jen část e-mailu?", "Nenašly se žádné hlavičky <code>Received</code>. Vložte celý zdrojový kód, ne jen viditelný text."],
      lookalike: (d, brand, legit, where) => ["Napodobenina domény", `<code>${d}</code> (${where}) napodobuje <strong>${brand}</strong> — skutečná doména je <code>${legit}</code>.`],
      punycode: (d, where) => ["Doména v punycode", `<code>${d}</code> (${where}) používá speciální znaky, které mohou vypadat stejně jako běžná písmena.`],
      brand: (name, d, brand) => ["Vydávání se za značku", `Jméno odesílatele je „${name}“, ale e-mail přišel z <code>${d}</code>, která <strong>${brand}</strong> nepatří.`],
      nameEmail: (shown, real) => ["Falešná adresa ve jménu odesílatele", `Jméno ukazuje <code>${shown}</code>, ale skutečný odesílatel je <code>${real}</code>.`],
      replyTo: (reply, from) => ["Odpověď půjde jinam", `Vaše odpověď by šla na <code>${reply}</code> místo <code>${from}</code>.`],
      replyFree: (reply) => ["Odpovědi jdou na bezplatnou schránku", `Odpovědi jsou přesměrované na <code>${reply}</code> — bezplatný e-mailový účet. Skutečné firmy tohle nedělají.`],
      returnPath: (rp, from) => ["Return-Path se liší od odesílatele", `Nedoručitelné zprávy jdou na <code>${rp}</code>, ne na <code>${from}</code>. U rozesílacích služeb běžné, jinak podezřelé.`],
      msgId: (mid, from) => ["Message-ID z jiné domény", `Message-ID vytvořila doména <code>${mid}</code>, ne <code>${from}</code>.`],
      pressure: (words) => ["Nátlakové výrazy v předmětu", `Obsahuje: ${words}. Phishing se snaží, abyste jednali rychle a nepřemýšleli.`],
      linkMismatch: (text, host) => ["Text odkazu neodpovídá cíli", `Ukazuje <code>${text}</code>, ale ve skutečnosti vede na <code>${host}</code>.`],
      linkIP: (host) => ["Odkaz na holou IP adresu", `<code>${host}</code> — legitimní firmy odkazují na své domény.`],
      linkShort: (host) => ["Zkrácený odkaz", `<code>${host}</code> skrývá, kam odkaz doopravdy vede.`],
      linkHttp: (host) => ["Nešifrovaný odkaz", `<code>${host}</code> nepoužívá HTTPS.`],
      linkUserinfo: (host) => ["Klamavý odkaz se @", `Vše před „@“ se v odkazu ignoruje — ve skutečnosti vede na <code>${host}</code>.`],
      attachment: (name) => ["Nebezpečná příloha", `<code>${name}</code> — tento typ souboru může spustit kód nebo skrývat malware.`],
      doubleExt: (name) => ["Dvojitá přípona souboru", `<code>${name}</code> se tváří jako jiný typ souboru, než ve skutečnosti je.`],
      where: { from: "odesílatel", replyTo: "Odpověď na", returnPath: "Return-Path", link: "odkaz" },
    },
  },
};
const t = () => Toolkit.pick(TXT);

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const stripDiacritics = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const MULTI_PART_SUFFIXES = ["co.uk", "org.uk", "ac.uk", "com.au", "co.jp", "co.nz", "com.br", "co.in", "com.pl"];

const orgDomain = (domain) => {
  const parts = (domain || "").toLowerCase().replace(/\.$/, "").split(".");
  if (parts.length <= 2) return parts.join(".");
  const lastTwo = parts.slice(-2).join(".");
  return MULTI_PART_SUFFIXES.includes(lastTwo) ? parts.slice(-3).join(".") : lastTwo;
};

const isSubdomainOf = (domain, parent) => domain === parent || domain.endsWith("." + parent);

const levenshtein = (a, b) => {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
  }
  return dp[a.length][b.length];
};

const unTrick = (s) =>
  s.toLowerCase().replace(/rn/g, "m").replace(/vv/g, "w").replace(/0/g, "o").replace(/1/g, "l")
    .replace(/3/g, "e").replace(/5/g, "s").replace(/4/g, "a").replace(/[-_.]/g, "");

const findLookalike = (domain) => {
  if (!domain) return null;
  domain = domain.toLowerCase();
  if (BRANDS.some((b) => b.domains.some((d) => isSubdomainOf(domain, d)))) return null;

  const org = orgDomain(domain);
  const label = org.split(".")[0];
  const whole = domain.replace(/\./g, "");

  for (const brand of BRANDS) {
    for (const key of brand.keys) {
      const tolerance = key.length >= 7 ? 2 : key.length >= 5 ? 1 : 0;
      if (
        label.includes(key) ||
        unTrick(label).includes(key) ||
        unTrick(whole).includes(key) ||
        (tolerance && levenshtein(label, key) <= tolerance)
      ) {
        return { brand: brand.name, legit: brand.domains[0] };
      }
    }
  }
  return null;
};

const brandInName = (name) => {
  const n = stripDiacritics(name);
  return BRANDS.find((b) =>
    b.aliases.some((a) => new RegExp(`(^|[^a-z])${a.replace(/ /g, "\\s*")}([^a-z]|$)`).test(n))
  );
};

const decodeMimeWords = (value) => {
  if (!value || !value.includes("=?")) return value;
  const joined = value.replace(/\?=\s+=\?/g, "?==?");
  return joined.replace(/=\?([^?]+)\?([BbQq])\?([^?]*)\?=/g, (m, charset, enc, text) => {
    try {
      let bytes;
      if (enc.toUpperCase() === "B") {
        bytes = Uint8Array.from(atob(text), (c) => c.charCodeAt(0));
      } else {
        const raw = text.replace(/_/g, " ").replace(/=([0-9A-Fa-f]{2})/g, (x, h) => String.fromCharCode(parseInt(h, 16)));
        bytes = Uint8Array.from(raw, (c) => c.charCodeAt(0));
      }
      return new TextDecoder(charset.toLowerCase()).decode(bytes);
    } catch {
      return m;
    }
  });
};

const decodeQuotedPrintable = (s) =>
  s.replace(/=\r?\n/g, "").replace(/=([0-9A-Fa-f]{2})/g, (m, h) => String.fromCharCode(parseInt(h, 16)));

const parseEmail = (raw) => {
  const text = raw.replace(/\r\n/g, "\n").replace(/^\s+/, "");
  const split = text.search(/\n\s*\n/);
  const headerPart = split === -1 ? text : text.slice(0, split);
  const body = split === -1 ? "" : text.slice(split);

  const unfolded = headerPart.replace(/\n[ \t]+/g, " ");
  const headers = [];
  for (const line of unfolded.split("\n")) {
    const m = line.match(/^([!-9;-~]+):\s*(.*)$/);
    if (m) headers.push({ name: m[1].toLowerCase(), value: m[2].trim() });
  }

  const get = (name) => headers.find((h) => h.name === name)?.value ?? "";
  const getAll = (name) => headers.filter((h) => h.name === name).map((h) => h.value);

  return { headers, get, getAll, body, raw: text };
};

const parseAddress = (value) => {
  if (!value) return null;
  const decoded = decodeMimeWords(value);
  const angle = decoded.match(/<([^>]+)>/);
  const bare = decoded.match(/[\w.+'-]+@[\w-]+(\.[\w-]+)+/);
  const address = (angle ? angle[1] : bare ? bare[0] : "").trim();
  if (!address.includes("@")) return null;
  const name = angle ? decoded.slice(0, decoded.indexOf("<")).trim().replace(/^"|"$/g, "").trim() : "";
  return { name, address, domain: address.split("@").pop().toLowerCase() };
};

const parseAuth = (email) => {
  const result = { spf: null, dkim: null, dmarc: null, present: false };
  const ar = email.get("authentication-results") || email.get("arc-authentication-results");

  if (ar) {
    result.present = true;
    for (const method of ["spf", "dkim", "dmarc"]) {
      const m = ar.match(new RegExp(`\\b${method}=(\\w+)([^;]*)`, "i"));
      if (!m) continue;
      const rest = m[2];
      const prop = (p) => rest.match(new RegExp(`${p}=@?([^\\s;)]+)`, "i"))?.[1] ?? "";
      let domain = "";
      if (method === "spf") domain = prop("smtp\\.mailfrom").split("@").pop();
      if (method === "dkim") domain = prop("header\\.d") || prop("header\\.i").split("@").pop();
      if (method === "dmarc") domain = prop("header\\.from");
      result[method] = { result: m[1].toLowerCase(), domain: domain.toLowerCase() };
    }
  }

  if (!result.spf) {
    const rs = email.get("received-spf");
    if (rs) {
      result.present = true;
      result.spf = { result: rs.split(/\s/)[0].toLowerCase(), domain: "" };
    }
  }
  if (!result.dkim && email.get("dkim-signature")) {
    const d = email.get("dkim-signature").match(/\bd=([^;\s]+)/)?.[1] ?? "";
    result.dkim = { result: "present", domain: d.toLowerCase() };
  }
  return result;
};

const IPV4 = /\b(\d{1,3}(?:\.\d{1,3}){3})\b/;
const isPrivateIp = (ip) =>
  /^(10\.|127\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|169\.254\.)/.test(ip) || ip === "::1";

const parseHops = (email) => {
  const hops = email.getAll("received").map((value) => {
    const from = value.match(/\bfrom\s+([^\s;()]+)/i)?.[1] ?? "";
    const by = value.match(/\bby\s+([^\s;()]+)/i)?.[1] ?? "";
    const bracket = value.match(/\[([0-9a-fA-F:.]+)\]/)?.[1];
    const ip = bracket || value.match(IPV4)?.[1] || "";
    const dateStr = value.includes(";") ? value.slice(value.lastIndexOf(";") + 1).trim() : "";
    const time = Date.parse(dateStr.replace(/\s*\([^)]*\)\s*$/, ""));
    return { from, by, ip, time: Number.isNaN(time) ? null : time, raw: value };
  });
  return hops.reverse();
};

const extractLinks = (body) => {
  let text = body;
  if (/=3D|=\r?\n/i.test(text)) text = decodeQuotedPrintable(text);

  const links = [];
  const seen = new Set();
  const add = (href, label) => {
    href = href.trim().replace(/[.,;:!?)\]'"]+$/, "");
    if (!/^https?:\/\//i.test(href) || seen.has(href)) return;
    seen.add(href);
    links.push({ href, text: label });
  };

  const anchor = /<a\b[^>]*?href\s*=\s*["']?([^"'\s>]+)["']?[^>]*>([\s\S]*?)<\/a>/gi;
  let m;
  while ((m = anchor.exec(text))) {
    add(m[1], m[2].replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim());
  }
  const withoutAnchors = text.replace(/<a\b[\s\S]*?<\/a>/gi, " ");
  const bare = /https?:\/\/[^\s"'<>]+/gi;
  while ((m = bare.exec(withoutAnchors))) add(m[0], "");

  return links.slice(0, 50);
};

const extractAttachments = (raw) => {
  const names = new Set();
  const re = /\b(?:file)?name\*?=\s*"?([^";\n]+)"?/gi;
  let m;
  while ((m = re.exec(raw))) names.add(decodeMimeWords(m[1].trim()));
  return [...names];
};

const analyze = (raw) => {
  const email = parseEmail(raw);
  const findings = [];
  const add = (severity, key, ...params) => findings.push({ severity, key, params });

  const from = parseAddress(email.get("from"));
  const replyTo = parseAddress(email.get("reply-to"));
  const returnPath = parseAddress(email.get("return-path"));
  const to = email.get("to");
  const subject = decodeMimeWords(email.get("subject"));
  const date = email.get("date");
  const messageId = email.get("message-id");
  const midDomain = messageId.match(/@([^>\s]+)/)?.[1]?.toLowerCase() ?? "";
  const fromOrg = from ? orgDomain(from.domain) : "";

  const auth = parseAuth(email);
  if (!auth.present) {
    add("info", "noAuth");
    if (auth.dkim?.result === "present") add("info", "dkimPresent", auth.dkim.domain || "?");
  }

  const spf = auth.spf;
  if (spf) {
    const d = spf.domain || returnPath?.domain || from?.domain || "?";
    if (spf.result === "pass") add("good", "spfPass", d);
    else if (["fail", "permerror"].includes(spf.result)) add("high", "spfFail", d);
    else if (["softfail", "neutral", "temperror"].includes(spf.result)) add("medium", "spfSoft", d);
    else add("medium", "spfNone");
  } else if (auth.present) add("medium", "spfNone");

  const dkim = auth.dkim;
  if (dkim && dkim.result === "pass") {
    add("good", "dkimPass", dkim.domain || "?");
    if (dkim.domain && from && orgDomain(dkim.domain) !== fromOrg) add("low", "dkimUnaligned", dkim.domain, from.domain);
  } else if (dkim && ["fail", "permerror", "neutral"].includes(dkim.result)) add("high", "dkimFail");
  else if (auth.present && (!dkim || dkim.result === "none")) add("medium", "dkimNone");

  const dmarc = auth.dmarc;
  if (dmarc) {
    const d = dmarc.domain || from?.domain || "?";
    if (dmarc.result === "pass") add("good", "dmarcPass", d);
    else if (["fail", "quarantine", "reject"].includes(dmarc.result)) add("high", "dmarcFail", d);
    else add("low", "dmarcNone");
  } else if (auth.present) add("low", "dmarcNone");

  const checkDomain = (domain, whereKey) => {
    if (!domain) return;
    if (domain.includes("xn--")) add("high", "punycode", domain, whereKey);
    const look = findLookalike(domain);
    if (look) add("high", "lookalike", domain, look.brand, look.legit, whereKey);
  };

  if (from) {
    checkDomain(from.domain, "from");

    const brand = from.name && brandInName(from.name);
    if (brand && !brand.domains.some((d) => isSubdomainOf(from.domain, d))) {
      add("high", "brand", from.name, from.domain, brand.name);
    }

    const shown = from.name.match(/[\w.+'-]+@[\w-]+(\.[\w-]+)+/)?.[0];
    if (shown && orgDomain(shown.split("@").pop()) !== fromOrg) add("high", "nameEmail", shown, from.address);
  }

  if (replyTo && from && orgDomain(replyTo.domain) !== fromOrg) {
    if (FREE_PROVIDERS.includes(replyTo.domain) && !FREE_PROVIDERS.includes(from.domain)) add("high", "replyFree", replyTo.address);
    else add("medium", "replyTo", replyTo.address, from.address);
    checkDomain(replyTo.domain, "replyTo");
  }

  if (returnPath && from && orgDomain(returnPath.domain) !== fromOrg) {
    add("low", "returnPath", returnPath.address, from.address);
    checkDomain(returnPath.domain, "returnPath");
  }

  if (midDomain && from && orgDomain(midDomain) !== fromOrg) add("low", "msgId", midDomain, from.domain);

  const subj = stripDiacritics(subject);
  const pressure = PRESSURE_WORDS.filter((w) => subj.includes(w))
    .filter((w, _, all) => !all.some((o) => o !== w && o.includes(w))); // "suspended" already covers "suspend"
  if (pressure.length) add("low", "pressure", pressure.map((w) => `“${w}”`).join(", "));

  const hops = parseHops(email);
  if (!hops.length) add("info", "noReceived");
  const originIp = hops.map((h) => h.ip).find((ip) => ip && !isPrivateIp(ip)) ?? "";

  const links = extractLinks(email.body).map((link) => {
    const tags = [];
    let url;
    try {
      url = new URL(link.href);
    } catch {
      return null;
    }
    const host = url.hostname.toLowerCase();

    if (url.username || link.href.replace(/^https?:\/\//i, "").split("/")[0].includes("@")) {
      tags.push(["bad", "userinfo"]);
      add("high", "linkUserinfo", host);
    }
    if (IPV4.test(host) && /^[\d.]+$/.test(host)) {
      tags.push(["bad", "ip"]);
      add("high", "linkIP", host);
    }
    if (SHORTENERS.includes(host.replace(/^www\./, ""))) {
      tags.push(["warn", "short"]);
      add("medium", "linkShort", host);
    }
    if (host.includes("xn--")) {
      tags.push(["bad", "punycode"]);
      add("high", "punycode", host, "link");
    }
    const look = findLookalike(host);
    if (look) {
      tags.push(["bad", "lookalike"]);
      add("high", "lookalike", host, look.brand, look.legit, "link");
    }
    if (url.protocol === "http:") {
      tags.push(["warn", "http"]);
      add("low", "linkHttp", host);
    }
    const shownDomain = link.text.match(/(?:https?:\/\/)?((?:[a-z0-9-]+\.)+[a-z]{2,})(?=[\/\s:]|$)/i)?.[1]?.toLowerCase();
    if (shownDomain && orgDomain(shownDomain) !== orgDomain(host)) {
      tags.push(["bad", "mismatch"]);
      add("high", "linkMismatch", link.text, host);
    }
    return { ...link, host, tags };
  }).filter(Boolean);

  for (const name of extractAttachments(email.raw)) {
    const parts = name.toLowerCase().split(".");
    const ext = parts.pop();
    if (parts.length >= 2 && /^(pdf|docx?|xlsx?|jpe?g|png|txt)$/.test(parts[parts.length - 1]) && ext !== parts[parts.length - 1]) {
      add("high", "doubleExt", name);
    } else if (RISKY_EXTENSIONS.includes(ext)) {
      add("high", "attachment", name);
    }
  }

  const unique = [];
  const keys = new Set();
  for (const f of findings) {
    const k = f.key + JSON.stringify(f.params);
    if (!keys.has(k)) {
      keys.add(k);
      unique.push(f);
    }
  }
  unique.sort((a, b) => SEVERITY_ORDER.indexOf(a.severity) - SEVERITY_ORDER.indexOf(b.severity));

  const score = Math.min(100, unique.reduce((sum, f) => sum + SEVERITY_WEIGHT[f.severity], 0));
  const level = score >= 40 ? "high" : score >= 15 ? "medium" : "low";

  return {
    level, score, findings: unique, auth, hops, links, originIp,
    overview: { from, replyTo, returnPath, to, subject, date, messageId },
  };
};

const $ = (id) => document.getElementById(id);
let lastReport = null;

const renderFinding = (f) => {
  const tx = t();
  const params = f.params.map((p, i) =>
    (f.key === "lookalike" && i === 3) || (f.key === "punycode" && i === 1) ? tx.f.where[p] : esc(p)
  );
  const [title, text] = tx.f[f.key](...params);
  const icons = {
    high: "fa-circle-exclamation", medium: "fa-triangle-exclamation", low: "fa-circle-info",
    info: "fa-circle-question", good: "fa-circle-check",
  };
  return `<li class="finding ${f.severity}"><i class="fa-solid ${icons[f.severity]}"></i><div>` +
    `<strong>${title}<span class="sev">${tx.sev[f.severity]}</span></strong><p>${text}</p></div></li>`;
};

const authPill = (entry) => {
  if (!entry) return `<span class="pill none">${esc(t().auth.missing)}</span>`;
  const r = entry.result;
  const cls = r === "pass" ? "ok" : ["fail", "permerror"].includes(r) ? "bad" : r === "present" ? "none" : "warn";
  const domain = entry.domain ? `<span class="auth-domain">${esc(entry.domain)}</span>` : "";
  const label = r === "present" ? t().auth.present : r;
  return `<span class="pill ${cls}">${esc(label)}</span>${domain}`;
};

const formatAddress = (a) =>
  a ? `${a.name ? esc(a.name) + "<small>" + esc(a.address) + "</small>" : esc(a.address)}` : t().ov.none;

const render = () => {
  const r = lastReport;
  if (!r) return;
  const tx = t();

  const counts = { high: 0, medium: 0, low: 0, good: 0 };
  r.findings.forEach((f) => f.severity in counts && counts[f.severity]++);
  const unverified = r.level === "low" && !r.auth.present;
  const [vTitle, vText] = tx.verdict[unverified ? "lowUnverified" : r.level];
  const vIcon = { high: "fa-skull-crossbones", medium: "fa-triangle-exclamation", low: "fa-shield-halved" }[r.level];
  $("verdict").className = `card verdict ${r.level}`;
  $("verdict").innerHTML =
    `<div class="verdict-icon"><i class="fa-solid ${vIcon}"></i></div>` +
    `<div class="verdict-body"><h2>${vTitle}</h2><p>${vText}</p>` +
    `<div class="risk-bar"><span style="width:${Math.max(r.score, 4)}%"></span></div>` +
    `<div class="counts">${tx.riskScore}: ${r.score}/100 · ${tx.counts(counts)}</div></div>`;

  const o = r.overview;
  const row = (label, value) => `<dt>${label}</dt><dd>${value || tx.ov.none}</dd>`;
  $("overview").innerHTML =
    row(tx.ov.from, formatAddress(o.from)) +
    row(tx.ov.replyTo, o.replyTo ? formatAddress(o.replyTo) : "") +
    row(tx.ov.returnPath, o.returnPath ? esc(o.returnPath.address) : "") +
    row(tx.ov.to, esc(o.to)) +
    row(tx.ov.subject, esc(o.subject)) +
    row(tx.ov.date, esc(o.date)) +
    row(tx.ov.origin, r.originIp ? `<code>${esc(r.originIp)}</code>` : "") +
    row(tx.ov.messageId, o.messageId ? `<code>${esc(o.messageId)}</code>` : "");

  $("auth").innerHTML = ["spf", "dkim", "dmarc"]
    .map((m) => `<div class="auth-row"><strong>${m.toUpperCase()}</strong><div>${authPill(r.auth[m])}<p>${tx.auth[m]}</p></div></div>`)
    .join("");

  $("findings").innerHTML = r.findings.map(renderFinding).join("");

  $("hops").innerHTML = r.hops.length
    ? r.hops.map((h, i) => {
        const prev = r.hops[i - 1];
        const delay = prev && h.time && prev.time ? Math.round((h.time - prev.time) / 1000) : null;
        const time = h.time ? new Date(h.time).toLocaleString(Toolkit.lang === "cs" ? "cs-CZ" : "en-GB") : "";
        return `<li class="hop"><div class="hop-top"><strong>${esc(h.from || "?")}</strong>` +
          `<span class="hop-time">${esc(time)}${delay !== null ? `<span class="delay">+${delay}s</span>` : ""}</span></div>` +
          `<p>${h.ip ? `<span class="ip">[${esc(h.ip)}]</span> ` : ""}→ ${esc(h.by || "?")}</p></li>`;
      }).join("")
    : `<li class="empty">${tx.noHops}</li>`;

  $("links").innerHTML = r.links.length
    ? r.links.map((l) => {
        const worst = l.tags.some(([c]) => c === "bad") ? "bad" : l.tags.length ? "warn" : "";
        const tags = l.tags.map(([c, k]) => `<span class="pill ${c === "bad" ? "bad" : "warn"}">${tx.linkTags[k]}</span>`).join("");
        return `<div class="link-row ${worst}"><div class="link-host">${esc(l.host)}</div>` +
          `<div class="link-url">${esc(l.href)}</div>` +
          (l.text ? `<div class="link-text">${tx.linkText}: “${esc(l.text)}”</div>` : "") +
          (tags ? `<div class="link-tags">${tags}</div>` : "") + `</div>`;
      }).join("")
    : `<p class="empty">${tx.noLinks}</p>`;
};

const source = $("source");
const srcHeaders = $("src-headers");
const srcBody = $("src-body");
let mode = "full";

const setMode = (next) => {
  mode = next;
  document.querySelectorAll(".mode-tab").forEach((tab) => {
    const active = tab.dataset.mode === next;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".mode-panel").forEach((panel) => (panel.hidden = panel.dataset.panel !== next));
};
document.querySelectorAll(".mode-tab").forEach((tab) => tab.addEventListener("click", () => setMode(tab.dataset.mode)));

const getSource = () =>
  mode === "full" ? source.value : `${srcHeaders.value.trim()}\n\n${srcBody.value.trim()}`;

const run = () => {
  const raw = getSource();
  if (!raw.trim()) return;
  lastReport = analyze(raw);
  $("results").hidden = false;
  render();
  $("verdict").scrollIntoView({ behavior: "smooth", block: "start" });
};

const loadExample = (text) => {
  setMode("full");
  source.value = text;
  run();
};

$("analyze").addEventListener("click", run);
$("ex-phish").addEventListener("click", () => loadExample(EXAMPLES.phishing));
$("ex-legit").addEventListener("click", () => loadExample(EXAMPLES.legit));
$("clear").addEventListener("click", () => {
  source.value = srcHeaders.value = srcBody.value = "";
  lastReport = null;
  $("results").hidden = true;
  (mode === "full" ? source : srcHeaders).focus();
});

[source, srcHeaders, srcBody].forEach((box) =>
  box.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) run();
  })
);

Toolkit.onLanguageChange(render);
