Toolkit.init({
  "nav.tools": "Všechny nástroje",
  "pw.title": "Kontrola hesla",
  "pw.lead": "Zjistěte, jak silné heslo doopravdy je, jak dlouho by trvalo ho prolomit a jestli už neuniklo při nějakém úniku dat.",
  "pw.privacy": "Vaše heslo nikdy neopustí toto zařízení",
  "pw.label": "Heslo k otestování",
  "pw.placeholder": "Napište heslo…",
  "pw.generate": "Vygenerovat silné heslo",
  "pw.tip": "Tip: svá skutečná hesla nikdy nezadávejte na weby, kterým nevěříte — otestujte raději podobná.",
  "breach.title": "Kontrola úniků dat",
  "breach.source": 'Porovnáno s databází <a href="https://haveibeenpwned.com/Passwords" target="_blank" rel="noopener">Have I Been Pwned</a> — hesly, která unikla při skutečných únicích dat.',
  "check.title": "Kontrolní seznam",
  "check.length": "Alespoň 12 znaků",
  "check.lower": "Malá písmena",
  "check.upper": "Velká písmena",
  "check.digit": "Číslice",
  "check.symbol": "Symboly nebo mezery",
  "check.repeat": "Žádné opakující se znaky (aaa)",
  "check.sequence": "Žádné řady (abc, 123, qwerty)",
  "check.common": "Není to běžné slovo ani heslo",
  "crack.title": "Jak dlouho by trvalo heslo prolomit?",
  "crack.lead": 'Záleží na tom, jak se k němu útočník dostane. Odhady vychází z počtu pokusů, které by chytrý útočník potřeboval (spočítáno pomocí <a href="https://github.com/dropbox/zxcvbn" target="_blank" rel="noopener">zxcvbn</a>).',
  "how.title": "Jak kontrola úniků chrání vaše heslo",
  "how.s1": "Prohlížeč heslo zahashuje algoritmem SHA-1",
  "how.s2": "Na server se pošle jen prvních 5 znaků hashe",
  "how.s3": "Server vrátí všechny uniklé hashe, které těmito znaky začínají — plus náhodnou výplň",
  "how.s4": "Prohlížeč hledá zbytek hashe v tomto seznamu — lokálně",
  "how.note": "Této technice se říká <strong>k-anonymita</strong>: server se nikdy nedozví vaše heslo — ani jeho celý hash — protože stejných prvních 5 znaků sdílí stovky různých hesel.",
  "footer.built": "Vytvořil",
});

const TXT = {
  en: {
    strength: ["Very weak", "Weak", "Fair", "Strong", "Very strong"],
    leaked: "Leaked — don't use it",
    leakedNote: "This password is in breach lists. Real attackers try those first, so it would fall within seconds — whatever the estimates below say.",
    meta: (len, bits) => `${len} characters · ~${bits} bits of entropy`,
    empty: "—",
    instantly: "instantly",
    centuries: "centuries",
    units: {
      second: ["second", "seconds"],
      minute: ["minute", "minutes"],
      hour: ["hour", "hours"],
      day: ["day", "days"],
      month: ["month", "months"],
      year: ["year", "years"],
    },
    scenarios: [
      ["Online attack, rate-limited", "Guessing on a login page that slows attempts down — 100 guesses per hour"],
      ["Online attack, no limits", "A login page with no protection — 10 guesses per second"],
      ["Offline, slow hash (bcrypt)", "Stolen database with properly hashed passwords — 10,000 guesses per second"],
      ["Offline, fast hash (MD5 / SHA-1)", "Stolen database with weak hashing, cracked on GPUs — 10 billion guesses per second"],
    ],
    breach: {
      idle: ["Start typing to check", "The check runs automatically a moment after you stop typing."],
      checking: ["Checking…", "Looking up the hash prefix in the breach database."],
      safe: ["Not found in any known data breach", "Good news — attackers don't have this exact password in their leak lists. That alone doesn't make it strong, so check the rest below."],
      pwned: (n) => [`Found in data breaches ${n}×`, "Never use this password. Leaked passwords are the first thing attackers try — in every account, on every website."],
      error: ["Couldn't reach the breach database", "Check your internet connection and try again."],
      insecure: ["Breach check unavailable here", "Your browser only allows hashing on secure pages (https:// or localhost). Open the page through Live Server or over https."],
    },
    steps: {
      received: (real, pad) => `${real} leaked hashes received (+ ${pad} padding entries)`,
      match: (n) => `✓ match found → leaked ${n}×`,
      noMatch: "✗ no match → not in the breach list",
      sent: "→ sent to api.pwnedpasswords.com",
    },
    tips: {
      pwned: "This exact password has leaked before. Attackers try leaked passwords first — pick a completely new one.",
      length: "Make it longer — length beats complexity. Aim for 12+ characters, or use a passphrase of 4–5 random words.",
      variety: "Mix in other character types — uppercase letters, numbers or symbols.",
      repeat: "Avoid repeating the same character several times in a row.",
      sequence: "Avoid predictable sequences like abc, 123 or qwerty.",
      common: "It contains a common word or password. Attackers try dictionary words and their variations first.",
      great: "Looks great. Use it for one account only and keep it in a password manager.",
    },
    copied: "Copied!",
  },
  cs: {
    strength: ["Velmi slabé", "Slabé", "Průměrné", "Silné", "Velmi silné"],
    leaked: "Uniklé — nepoužívejte",
    leakedNote: "Toto heslo je v seznamech úniků. Útočníci je zkouší jako první, takže by padlo během pár sekund — bez ohledu na odhady níže.",
    meta: (len, bits) => `${len} znaků · ~${bits} bitů entropie`,
    empty: "—",
    instantly: "okamžitě",
    centuries: "staletí",
    units: {
      second: ["sekunda", "sekundy", "sekund"],
      minute: ["minuta", "minuty", "minut"],
      hour: ["hodina", "hodiny", "hodin"],
      day: ["den", "dny", "dní"],
      month: ["měsíc", "měsíce", "měsíců"],
      year: ["rok", "roky", "let"],
    },
    scenarios: [
      ["Online útok s omezením", "Hádání na přihlašovací stránce, která pokusy brzdí — 100 pokusů za hodinu"],
      ["Online útok bez omezení", "Přihlašovací stránka bez ochrany — 10 pokusů za sekundu"],
      ["Offline, pomalý hash (bcrypt)", "Ukradená databáze se správně zahashovanými hesly — 10 000 pokusů za sekundu"],
      ["Offline, rychlý hash (MD5 / SHA-1)", "Ukradená databáze se slabým hashem, lámání na GPU — 10 miliard pokusů za sekundu"],
    ],
    breach: {
      idle: ["Začněte psát", "Kontrola proběhne automaticky chvíli poté, co přestanete psát."],
      checking: ["Kontroluji…", "Hledám prefix hashe v databázi úniků."],
      safe: ["Nenalezeno v žádném známém úniku dat", "Dobrá zpráva — útočníci toto heslo ve svých seznamech nemají. Samo o sobě to ale neznamená, že je silné, takže zkontrolujte i zbytek."],
      pwned: (n) => [`Nalezeno v únicích dat ${n}×`, "Toto heslo nikdy nepoužívejte. Uniklá hesla útočníci zkouší jako první — u všech účtů a na všech webech."],
      error: ["Nepodařilo se spojit s databází úniků", "Zkontrolujte připojení k internetu a zkuste to znovu."],
      insecure: ["Kontrola úniků zde není dostupná", "Prohlížeč povoluje hashování jen na zabezpečených stránkách (https:// nebo localhost). Otevřete stránku přes Live Server nebo https."],
    },
    steps: {
      received: (real, pad) => `přijato ${real} uniklých hashů (+ ${pad} položek výplně)`,
      match: (n) => `✓ shoda nalezena → uniklo ${n}×`,
      noMatch: "✗ žádná shoda → není v seznamu úniků",
      sent: "→ odesláno na api.pwnedpasswords.com",
    },
    tips: {
      pwned: "Přesně toto heslo už v minulosti uniklo. Útočníci zkouší uniklá hesla jako první — zvolte úplně nové.",
      length: "Prodlužte ho — délka je důležitější než složitost. Miřte na 12+ znaků, nebo použijte frázi ze 4–5 náhodných slov.",
      variety: "Přidejte jiné typy znaků — velká písmena, číslice nebo symboly.",
      repeat: "Vyhněte se opakování stejného znaku několikrát za sebou.",
      sequence: "Vyhněte se předvídatelným řadám jako abc, 123 nebo qwerty.",
      common: "Obsahuje běžné slovo nebo heslo. Útočníci zkouší slova ze slovníku a jejich varianty jako první.",
      great: "Vypadá skvěle. Používejte ho jen pro jeden účet a uložte si ho do správce hesel.",
    },
    copied: "Zkopírováno!",
  },
};

const RATES = [100 / 3600, 10, 1e4, 1e10];

const input = document.getElementById("pw");
const meter = document.getElementById("meter");
const strengthLabel = document.getElementById("strength-label");
const meterMeta = document.getElementById("meter-meta");
const feedbackEl = document.getElementById("feedback");
const checklistItems = document.querySelectorAll("#checklist li");
const crackTable = document.getElementById("crack-table");
const breachStatus = document.getElementById("breach-status");
const stepHash = document.getElementById("step-hash");
const stepPrefix = document.getElementById("step-prefix");
const stepReceived = document.getElementById("step-received");
const stepMatch = document.getElementById("step-match");

const t = () => Toolkit.pick(TXT);
const fmt = (n) => n.toLocaleString(Toolkit.lang === "cs" ? "cs-CZ" : "en-US");

const SEQUENCES = [
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "qwertyuiop",
  "qwertzuiop",
  "asdfghjkl",
  "yxcvbnm",
  "zxcvbnm",
];

const hasSequence = (pw) => {
  const s = pw.toLowerCase();
  for (let i = 0; i < s.length - 2; i++) {
    const chunk = s.slice(i, i + 3);
    const reversed = [...chunk].reverse().join("");
    if (SEQUENCES.some((seq) => seq.includes(chunk) || seq.includes(reversed))) return true;
  }
  return false;
};

const charsetSize = (pw) => {
  let size = 0;
  if (/[a-z]/.test(pw)) size += 26;
  if (/[A-Z]/.test(pw)) size += 26;
  if (/\d/.test(pw)) size += 10;
  if (/[^A-Za-z0-9]/.test(pw)) size += 33;
  if (/[^\x00-\x7F]/.test(pw)) size += 100; 
  return size;
};

const analyze = (pw) => {
  const length = [...pw].length;
  const bits = Math.round(length * Math.log2(Math.max(charsetSize(pw), 1)));
  const z = typeof zxcvbn === "function" ? zxcvbn(pw.slice(0, 100)) : null;

  let score;
  let guesses;
  if (z) {
    score = z.score;
    guesses = z.guesses;
  } else {
    score = bits < 28 ? 0 : bits < 36 ? 1 : bits < 60 ? 2 : bits < 80 ? 3 : 4;
    guesses = Math.pow(2, bits) / 2;
  }

  const common = z
    ? z.sequence.some((m) => m.pattern === "dictionary" && m.token.length >= 4)
    : null;

  const checks = {
    length: length >= 12,
    lower: /\p{Ll}/u.test(pw),
    upper: /\p{Lu}/u.test(pw),
    digit: /\d/.test(pw),
    symbol: /[^\p{L}\d]/u.test(pw),
    repeat: !/(.)\1\1/u.test(pw),
    sequence: !hasSequence(pw),
    common: common === null ? null : !common,
  };

  return { length, bits, score, guesses, checks };
};

const plural = (n, forms) => {
  if (Toolkit.lang === "cs") {
    if (n === 1) return forms[0];
    if (n >= 2 && n <= 4) return forms[1];
    return forms[2];
  }
  return n === 1 ? forms[0] : forms[1];
};

const formatDuration = (seconds) => {
  const tx = t();
  if (seconds < 1) return tx.instantly;
  const steps = [
    ["year", 31557600],
    ["month", 2629800],
    ["day", 86400],
    ["hour", 3600],
    ["minute", 60],
    ["second", 1],
  ];
  const years = seconds / 31557600;
  if (years >= 100) return tx.centuries;
  for (const [unit, size] of steps) {
    if (seconds >= size) {
      const n = Math.round(seconds / size);
      return `${fmt(n)} ${plural(n, tx.units[unit])}`;
    }
  }
  return tx.instantly;
};

const timeClass = (seconds) => (seconds < 86400 ? "bad" : seconds < 31557600 ? "meh" : "good");

let lastResult = null;
let breachState = { kind: "idle" };

const render = () => {
  const tx = t();
  const r = lastResult;

  const leaked = breachState.kind === "pwned";
  const score = r ? (leaked ? 0 : r.score) : -1;
  meter.dataset.score = score;
  strengthLabel.textContent = r ? (leaked ? tx.leaked : tx.strength[score]) : tx.empty;
  strengthLabel.className = r ? `score-${score}` : "";
  meterMeta.textContent = r ? tx.meta(r.length, r.bits) : "";

  checklistItems.forEach((li) => {
    const value = r ? r.checks[li.dataset.check] : null;
    li.classList.toggle("pass", value === true);
    li.classList.toggle("fail", value === false);
  });

  const note = r && leaked ? `<div class="crack-note"><i class="fa-solid fa-triangle-exclamation"></i> ${tx.leakedNote}</div>` : "";
  crackTable.innerHTML = note + tx.scenarios
    .map(([name, desc], i) => {
      const seconds = r ? r.guesses / RATES[i] : null;
      const time = r ? formatDuration(seconds) : tx.empty;
      const cls = r ? timeClass(seconds) : "";
      return `<div class="crack-row"><div><strong>${name}</strong><small>${desc}</small></div><span class="crack-time ${cls}">${time}</span></div>`;
    })
    .join("");

  const tips = [];
  if (r) {
    if (breachState.kind === "pwned") tips.push(["danger", tx.tips.pwned]);
    if (!r.checks.length) tips.push(["", tx.tips.length]);
    const variety = [r.checks.lower, r.checks.upper, r.checks.digit, r.checks.symbol].filter(Boolean).length;
    if (variety < 3 && r.length < 16) tips.push(["", tx.tips.variety]);
    if (!r.checks.repeat) tips.push(["", tx.tips.repeat]);
    if (!r.checks.sequence) tips.push(["", tx.tips.sequence]);
    if (r.checks.common === false) tips.push(["", tx.tips.common]);
    if (!tips.length && r.score >= 3 && !leaked) tips.push(["", tx.tips.great]);
  }
  feedbackEl.innerHTML = tips
    .map(([cls, text]) => `<li class="${cls}"><i class="fa-solid ${cls ? "fa-triangle-exclamation" : "fa-lightbulb"}"></i><span>${text}</span></li>`)
    .join("");

  renderBreach();
};

const renderBreach = () => {
  const tx = t();
  const b = breachState;
  const icons = {
    idle: "fa-circle-info",
    checking: "fa-circle-notch spin",
    safe: "fa-circle-check",
    pwned: "fa-triangle-exclamation",
    error: "fa-plug-circle-xmark",
    insecure: "fa-lock",
  };
  const [title, text] = b.kind === "pwned" ? tx.breach.pwned(fmt(b.count)) : tx.breach[b.kind];
  breachStatus.className = `status ${b.kind}`;
  breachStatus.innerHTML = `<i class="fa-solid ${icons[b.kind]}"></i><div><strong>${title}</strong><p>${text}</p></div>`;

  if (b.hash) {
    stepHash.innerHTML = `<mark>${b.hash.slice(0, 5)}</mark>${b.hash.slice(5)}`;
    stepPrefix.textContent = `${b.hash.slice(0, 5)}  ${tx.steps.sent}`;
  } else {
    stepHash.textContent = "—";
    stepPrefix.textContent = "—";
  }
  stepReceived.textContent = b.received ? tx.steps.received(fmt(b.received.real), fmt(b.received.padding)) : "—";
  stepMatch.innerHTML =
    b.kind === "pwned"
      ? `${b.hash.slice(0, 5)}<mark>${b.hash.slice(5)}</mark> ${tx.steps.match(fmt(b.count))}`
      : b.kind === "safe"
        ? tx.steps.noMatch
        : "—";
};

const sha1Hex = async (text) => {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-1", data);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
};

let breachTimer = null;
let breachController = null;

const checkBreach = async (pw) => {
  if (!window.crypto?.subtle) {
    breachState = { kind: "insecure" };
    return render();
  }

  breachController?.abort();
  breachController = new AbortController();
  const { signal } = breachController;

  const hash = await sha1Hex(pw);
  if (input.value !== pw) return; 

  breachState = { kind: "checking", hash };
  render();

  const prefix = hash.slice(0, 5);
  const suffix = hash.slice(5);

  try {
    const res = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`, {
      headers: { "Add-Padding": "true" },
      signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = await res.text();

    let real = 0;
    let padding = 0;
    let count = 0;
    for (const line of body.split("\n")) {
      const [s, c] = line.trim().split(":");
      if (!s) continue;
      const n = parseInt(c, 10) || 0;
      if (n > 0) real++;
      else padding++;
      if (s === suffix && n > 0) count = n;
    }

    if (input.value !== pw) return;
    breachState = { kind: count ? "pwned" : "safe", hash, count, received: { real, padding } };
  } catch (err) {
    if (err.name === "AbortError") return;
    breachState = { kind: "error", hash };
  }
  render();
};

const onInput = () => {
  const pw = input.value;
  clearTimeout(breachTimer);

  if (!pw) {
    breachController?.abort();
    lastResult = null;
    breachState = { kind: "idle" };
    return render();
  }

  lastResult = analyze(pw);
  if (breachState.kind !== "checking") breachState = { kind: "idle" };
  render();

  breachTimer = setTimeout(() => checkBreach(pw), 600);
};

input.addEventListener("input", onInput);

window.addEventListener("zxcvbn-ready", () => {
  if (input.value) {
    lastResult = analyze(input.value);
    render();
  }
});

Toolkit.onLanguageChange(render);

const toggleBtn = document.getElementById("toggle-visibility");
const setVisible = (visible) => {
  input.type = visible ? "text" : "password";
  toggleBtn.innerHTML = `<i class="fa-regular ${visible ? "fa-eye-slash" : "fa-eye"}"></i>`;
};
toggleBtn.addEventListener("click", () => setVisible(input.type === "password"));

const copyBtn = document.getElementById("copy-pw");
copyBtn.addEventListener("click", async () => {
  if (!input.value) return;
  try {
    await navigator.clipboard.writeText(input.value);
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    copyBtn.title = t().copied;
  } catch {
    input.select();
  }
  setTimeout(() => (copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>'), 1500);
});

const GEN_SETS = [
  "abcdefghijkmnopqrstuvwxyz", 
  "ABCDEFGHJKLMNPQRSTUVWXYZ", 
  "23456789", 
  "!@#$%^&*-_=+?",
];

const randomInt = (max) => {
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  do {
    crypto.getRandomValues(buf);
  } while (buf[0] >= limit);
  return buf[0] % max;
};

const generatePassword = (length = 20) => {
  const all = GEN_SETS.join("");
  let pw;
  do {
    pw = Array.from({ length }, () => all[randomInt(all.length)]).join("");
  } while (!GEN_SETS.every((set) => [...pw].some((ch) => set.includes(ch))));
  return pw;
};

document.getElementById("generate").addEventListener("click", () => {
  input.value = generatePassword();
  setVisible(true);
  onInput();
  input.focus();
});

render();
