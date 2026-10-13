window.__revealLoaded = true;

Toolkit.init({
  "nav.tools": "Všechny nástroje",
  "fp.title": "Co o vás prozradí prohlížeč",
  "fp.lead": "Tohle všechno si může přečíst každý web ve chvíli, kdy ho otevřete — bez povolení a bez cookies. Dohromady to tvoří <strong>otisk prohlížeče</strong>, podle kterého vás lze poznat napříč weby.",
  "fp.privacy": "Měřeno ve vašem zařízení — nic se neodesílá ani neukládá",
  "sum.idLabel": "ID vašeho otisku",
  "sum.idNote": "Spočítáno z hodnot níže. Když nic nezměníte, zůstane stejné.",
  "sum.uniqueLabel": "Jak jste jedineční",
  "sum.try": "<strong>Vyzkoušejte:</strong> otevřete tuto stránku v anonymním okně, nebo smažte cookies a vraťte se. ID zůstane stejné — proto sledování přes otisk funguje i tehdy, když cookies blokujete.",
  "adv.title": "Pokročilé sledovací techniky",
  "adv.lead": "Weby mohou potají vykreslit obrázek nebo zpracovat zvuk. Drobné rozdíly v grafické kartě, ovladačích a systému způsobí, že výsledek je na každém počítači trochu jiný — pro vás neviditelné, ale snadno změřitelné.",
  "adv.canvas": "Otisk přes canvas",
  "adv.audio": "Otisk přes zvuk",
  "fonts.title": "Nainstalovaná písma",
  "fonts.lead": "Změřením šířky textu web zjistí, jaká písma máte nainstalovaná. Písma z Microsoft Office, Adobe nebo vývojářských nástrojů navíc prozradí, jaký software používáte.",
  "tips.title": "Jak se chránit",
  "tips.list":
    '<li><i class="fa-solid fa-circle-check"></i><div><strong>Používejte prohlížeč s ochranou proti otiskům.</strong> Brave, Firefox (Rozšířená ochrana proti sledování → Přísná) a Safari přidávají šum nebo skrývají detaily. Tor Browser dělá všechny uživatele stejné.</div></li>' +
    '<li><i class="fa-solid fa-circle-check"></i><div><strong>Splyňte s davem.</strong> Neobvyklá nastavení, vzácná písma a spousta rozšíření vás dělají <em>více</em> jedinečnými, ne méně.</div></li>' +
    '<li><i class="fa-solid fa-circle-check"></i><div><strong>Anonymní okno tady nepomůže.</strong> Smaže cookies a historii, ale otisk zůstane stejný.</div></li>' +
    '<li><i class="fa-solid fa-circle-check"></i><div><strong>Používejte blokovač sledování</strong>, například uBlock Origin — mnoho skriptů pro otisky se vůbec nenačte.</div></li>' +
    '<li><i class="fa-solid fa-circle-check"></i><div><strong>Nezapomeňte na IP adresu.</strong> Tu vidí každý web také (zde se nezobrazuje, protože stránka nekontaktuje žádný server). VPN ji skryje — ale otisk ne.</div></li>',
  "footer.built": "Vytvořil",
});

const TXT = {
  en: {
    groups: {
      device: "Device & system",
      screen: "Screen & display",
      locale: "Location & language",
      settings: "Browser settings",
    },
    labels: {
      os: "Operating system", browser: "Browser", arch: "CPU architecture", cores: "CPU threads", memory: "Memory (RAM)",
      gpu: "Graphics card", touch: "Touch screen", battery: "Battery", connection: "Network connection",
      screen: "Screen resolution", avail: "Usable screen area", window: "Browser window", colorDepth: "Colour depth",
      dpr: "Pixel ratio (zoom / scaling)", colorScheme: "Dark or light mode", hdr: "Colour range",
      timezone: "Time zone", offset: "UTC offset", locale: "Locale", languages: "Preferred languages", dateFormat: "Date format",
      cookies: "Cookies", dnt: "“Do Not Track”", gpc: "Global Privacy Control", pdf: "Built-in PDF viewer",
      storage: "Storage available to websites", webdriver: "Controlled by automation", motion: "Reduced motion",
    },
    yes: "yes", no: "no", unknown: "not available", blocked: "hidden by your browser",
    on: "on", off: "off", dark: "dark", light: "light", charging: "charging", notCharging: "not charging",
    touchPoints: (n) => `yes — up to ${n} fingers`,
    memory: (gb) => `at least ${gb} GB`,
    storage: (gb) => `≈ ${gb} GB (hints at your disk size)`,
    window: (w, h) => `${w} × ${h} (changes when you resize)`,
    legend: {
      title: "How much each value helps to identify you:",
      low: "little", med: "some", high: "a lot", none: "not used in the ID",
    },
    bitsLabel: (b) => `~${b} bits`,
    unique: {
      likely: "Likely unique",
      likelySub: "More possible combinations than people on Earth",
      oneIn: (n) => `About 1 in ${n}`,
      big: (n) => (n >= 1e9 ? `${(n / 1e9).toFixed(1)} billion` : n >= 1e6 ? `${(n / 1e6).toFixed(1)} million` : n >= 1e3 ? `${Math.round(n / 1e3)} thousand` : `${Math.round(n)}`),
      bits: (raw, eff) => `${raw} bits of identifying information (~${eff} after overlap) · rough estimate — studies found 80–90 % of browsers have a unique fingerprint`,
    },
    canvas: {
      stable: "Stable — your computer draws this image the same way every time, so it can identify you.",
      noise: "Your browser adds random noise to canvas reads — fingerprinting protection is active 👍",
      blocked: "Reading the canvas is blocked — nice protection.",
    },
    audio: {
      stable: "Stable — the processed sound is identical on every visit.",
      noise: "Your browser randomises audio output — fingerprinting protection is active 👍",
      blocked: "Audio processing is not available.",
    },
    fontsNone: "No fonts from the test list detected — your browser may be hiding them.",
    fontsOf: (n, total) => `${n} of ${total} tested`,
  },
  cs: {
    groups: {
      device: "Zařízení a systém",
      screen: "Obrazovka",
      locale: "Poloha a jazyk",
      settings: "Nastavení prohlížeče",
    },
    labels: {
      os: "Operační systém", browser: "Prohlížeč", arch: "Architektura procesoru", cores: "Vlákna procesoru", memory: "Paměť (RAM)",
      gpu: "Grafická karta", touch: "Dotyková obrazovka", battery: "Baterie", connection: "Připojení k síti",
      screen: "Rozlišení obrazovky", avail: "Využitelná plocha", window: "Okno prohlížeče", colorDepth: "Barevná hloubka",
      dpr: "Poměr pixelů (přiblížení / měřítko)", colorScheme: "Tmavý nebo světlý režim", hdr: "Barevný rozsah",
      timezone: "Časové pásmo", offset: "Posun od UTC", locale: "Národní prostředí", languages: "Preferované jazyky", dateFormat: "Formát data",
      cookies: "Cookies", dnt: "„Nesledovat“ (DNT)", gpc: "Global Privacy Control", pdf: "Vestavěný prohlížeč PDF",
      storage: "Úložiště dostupné webům", webdriver: "Ovládáno automatizací", motion: "Omezení animací",
    },
    yes: "ano", no: "ne", unknown: "nedostupné", blocked: "skryto prohlížečem",
    on: "zapnuto", off: "vypnuto", dark: "tmavý", light: "světlý", charging: "nabíjí se", notCharging: "nenabíjí se",
    touchPoints: (n) => `ano — až ${n} prstů`,
    memory: (gb) => `alespoň ${gb} GB`,
    storage: (gb) => `≈ ${gb} GB (napovídá velikost disku)`,
    window: (w, h) => `${w} × ${h} (mění se se změnou velikosti)`,
    legend: {
      title: "Jak moc vás daná hodnota pomáhá identifikovat:",
      low: "málo", med: "středně", high: "hodně", none: "nepoužito v ID",
    },
    bitsLabel: (b) => {
      const n = String(b).replace(".", ",");
      if (!Number.isInteger(b)) return `~${n} bitu`;
      return `~${n} ${b === 1 ? "bit" : b >= 2 && b <= 4 ? "bity" : "bitů"}`;
    },
    unique: {
      likely: "Pravděpodobně jedineční",
      likelySub: "Víc možných kombinací, než je lidí na Zemi",
      oneIn: (n) => `Zhruba 1 z ${n}`,
      big: (n) => (n >= 1e9 ? `${(n / 1e9).toFixed(1).replace(".", ",")} mld.` : n >= 1e6 ? `${(n / 1e6).toFixed(1).replace(".", ",")} mil.` : n >= 1e3 ? `${Math.round(n / 1e3)} tis.` : `${Math.round(n)}`),
      bits: (raw, eff) => `${raw} bitů identifikujících informací (~${eff} po započtení překryvů) · hrubý odhad — studie zjistily, že 80–90 % prohlížečů má jedinečný otisk`,
    },
    canvas: {
      stable: "Stabilní — váš počítač vykreslí obrázek pokaždé stejně, takže vás podle něj lze poznat.",
      noise: "Váš prohlížeč přidává do čtení canvasu náhodný šum — ochrana proti otiskům je aktivní 👍",
      blocked: "Čtení canvasu je zablokované — dobrá ochrana.",
    },
    audio: {
      stable: "Stabilní — zpracovaný zvuk je při každé návštěvě stejný.",
      noise: "Váš prohlížeč znáhodňuje zvukový výstup — ochrana proti otiskům je aktivní 👍",
      blocked: "Zpracování zvuku není dostupné.",
    },
    fontsNone: "Z testovaného seznamu nebylo nalezeno žádné písmo — prohlížeč je možná skrývá.",
    fontsOf: (n, total) => `${n} z ${total} testovaných`,
  },
};
const t = () => Toolkit.pick(TXT);

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const cyrb53 = (str, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16).padStart(14, "0");
};

const media = (q) => window.matchMedia(q).matches;

const detectOS = (ua, hi) => {
  if (hi?.platform === "Windows") {
    const major = parseInt(hi.platformVersion, 10);
    return major >= 13 ? "Windows 11" : major > 0 ? "Windows 10" : "Windows";
  }
  if (/Windows NT 10/.test(ua)) return "Windows 10 / 11";
  if (/Windows/.test(ua)) return "Windows";
  if (/Android ([\d.]+)/.test(ua)) return `Android ${ua.match(/Android ([\d.]+)/)[1]}`;
  if (/(iPhone|iPad).*OS ([\d_]+)/.test(ua)) return `iOS ${ua.match(/OS ([\d_]+)/)[1].replace(/_/g, ".")}`;
  if (hi?.platform === "macOS" && hi.platformVersion) return `macOS ${hi.platformVersion.split(".").slice(0, 2).join(".")}`;
  if (/Mac OS X/.test(ua)) return "macOS";
  if (/CrOS/.test(ua)) return "ChromeOS";
  if (/Linux/.test(ua)) return "Linux";
  return "?";
};

const detectBrowser = (ua, hi) => {
  const list = hi?.fullVersionList;
  if (list?.length) {
    const preferred = ["Microsoft Edge", "Opera", "Brave", "Vivaldi", "Google Chrome", "Chromium"];
    for (const name of preferred) {
      const b = list.find((x) => x.brand === name);
      if (b) return `${name} ${b.version.split(".")[0]}`;
    }
  }
  const tests = [
    [/Edg\/([\d]+)/, "Microsoft Edge"], [/OPR\/([\d]+)/, "Opera"], [/Firefox\/([\d]+)/, "Firefox"],
    [/Chrome\/([\d]+)/, "Chrome"], [/Version\/([\d]+).*Safari/, "Safari"],
  ];
  for (const [re, name] of tests) {
    const m = ua.match(re);
    if (m) return `${name} ${m[1]}`;
  }
  return "?";
};

const detectGPU = () => {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return null;
    const dbg = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    // "ANGLE (NVIDIA, NVIDIA GeForce RTX 3060 (0x2504) Direct3D11 ...)" → "NVIDIA GeForce RTX 3060"
    const angle = renderer.match(/ANGLE \([^,]+,\s*([^,(]+?)\s*(\(|Direct3D|,|$)/);
    return (angle ? angle[1] : renderer).trim();
  } catch {
    return null;
  }
};

const drawCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 90;
  const ctx = canvas.getContext("2d");
  const grad = ctx.createLinearGradient(0, 0, 300, 0);
  grad.addColorStop(0, "#14b8a6");
  grad.addColorStop(1, "#38bdf8");
  ctx.fillStyle = grad;
  ctx.fillRect(10, 10, 120, 30);
  ctx.textBaseline = "top";
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0f172a";
  ctx.fillText("Security Toolkit 🛡️ Ωж", 60, 22);
  ctx.font = "italic 14px Georgia, serif";
  ctx.fillStyle = "rgba(220, 38, 38, 0.7)";
  ctx.fillText("fingerprint ✓ 1.0", 150, 58);
  ctx.globalCompositeOperation = "multiply";
  ctx.beginPath();
  ctx.arc(250, 30, 22, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(56, 189, 248, 0.8)";
  ctx.fill();
  ctx.shadowBlur = 8;
  ctx.shadowColor = "#6b46fe";
  ctx.beginPath();
  ctx.arc(30, 65, 14, 0, Math.PI * 2);
  ctx.fillStyle = "#f59e0b";
  ctx.fill();
  return canvas;
};

const canvasFingerprint = () => {
  try {
    const a = drawCanvas();
    const b = drawCanvas();
    const dataA = a.toDataURL();
    const dataB = b.toDataURL();
    if (!dataA || dataA === "data:,") return { status: "blocked" };
    return { canvas: a, hash: cyrb53(dataA), status: dataA === dataB ? "stable" : "noise" };
  } catch {
    return { status: "blocked" };
  }
};

const renderAudio = async () => {
  const Ctx = window.OfflineAudioContext || window.webkitOfflineAudioContext;
  const ctx = new Ctx(1, 5000, 44100);
  const osc = ctx.createOscillator();
  osc.type = "triangle";
  osc.frequency.value = 10000;
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -50;
  comp.knee.value = 40;
  comp.ratio.value = 12;
  comp.attack.value = 0;
  comp.release.value = 0.25;
  osc.connect(comp);
  comp.connect(ctx.destination);
  osc.start(0);
  const buffer = await ctx.startRendering();
  return buffer.getChannelData(0).slice(4500, 5000);
};

const audioFingerprint = async () => {
  try {
    if (!(window.OfflineAudioContext || window.webkitOfflineAudioContext)) return { status: "blocked" };
    const a = await withTimeout(renderAudio(), 2000);
    const b = await withTimeout(renderAudio(), 2000);
    if (!a || !b) return { status: "blocked" };
    const sum = a.reduce((s, v) => s + Math.abs(v), 0);
    const same = a.every((v, i) => v === b[i]);
    return { samples: a, value: sum, hash: cyrb53(String(sum)), status: same ? "stable" : "noise" };
  } catch {
    return { status: "blocked" };
  }
};

const FONTS = [
  ["Arial"], ["Arial Black"], ["Bahnschrift"], ["Calibri"], ["Cambria"], ["Candara"], ["Comic Sans MS"], ["Consolas"],
  ["Constantia"], ["Corbel"], ["Courier New"], ["Ebrima"], ["Franklin Gothic Medium"], ["Gabriola"], ["Georgia"],
  ["Impact"], ["Ink Free"], ["Lucida Console"], ["Lucida Sans Unicode"], ["Palatino Linotype"], ["Segoe Print"],
  ["Segoe Script"], ["Segoe UI"], ["Sitka Text"], ["Sylfaen"], ["Tahoma"], ["Times New Roman"], ["Trebuchet MS"],
  ["Verdana"], ["Webdings"], ["Yu Gothic"], ["Malgun Gothic"], ["Microsoft YaHei"],
  ["Helvetica"], ["Helvetica Neue"], ["Avenir"], ["Avenir Next"], ["Futura"], ["Gill Sans"], ["Optima"], ["Menlo"],
  ["Monaco"], ["Didot"], ["American Typewriter"], ["Baskerville"], ["Hoefler Text"], ["Chalkboard SE"],
  ["Ubuntu"], ["DejaVu Sans"], ["Liberation Sans"], ["Noto Sans"], ["Cantarell"], ["Roboto"],
  ["Aptos", "Office"], ["Agency FB", "Office"], ["Bodoni MT", "Office"], ["Book Antiqua", "Office"],
  ["Bookman Old Style", "Office"], ["Century Gothic", "Office"], ["Garamond", "Office"], ["Gill Sans MT", "Office"],
  ["Monotype Corsiva", "Office"], ["Rockwell", "Office"], ["Tw Cen MT", "Office"],
  ["Myriad Pro", "Adobe"], ["Minion Pro", "Adobe"], ["Adobe Caslon Pro", "Adobe"],
  ["Cascadia Code", "dev"], ["Fira Code", "dev"], ["Source Code Pro", "dev"], ["Hack", "dev"],
];

const detectFonts = () => {
  const ctx = document.createElement("canvas").getContext("2d");
  const sample = "mmmmmmmmmmlli1WWW@#ÁŘž";
  const bases = ["monospace", "sans-serif", "serif"];
  const baseWidths = bases.map((b) => {
    ctx.font = `72px ${b}`;
    return ctx.measureText(sample).width;
  });
  const widths = (name) =>
    bases.map((b) => {
      ctx.font = `72px "${name}", ${b}`;
      return ctx.measureText(sample).width;
    });
  const arial = widths("Arial");
  return FONTS.filter(([name]) => {
    const w = widths(name);
    const differsFromFallback = w.some((width, i) => width !== baseWidths[i]);
    const isArialAlias = name !== "Arial" && w.every((width, i) => width === arial[i]);
    return differsFromFallback && !isArialAlias;
  });
};

const withTimeout = (promise, ms = 1500, fallback = null) =>
  Promise.race([
    Promise.resolve(promise).catch(() => fallback),
    new Promise((resolve) => setTimeout(() => resolve(fallback), ms)),
  ]);

const collect = async () => {
  const nav = navigator;
  const ua = nav.userAgent;

  const hi = await withTimeout(
    nav.userAgentData?.getHighEntropyValues(["platform", "platformVersion", "architecture", "bitness", "fullVersionList"])
  );

  const b = await withTimeout(nav.getBattery?.());
  const battery = b ? { level: Math.round(b.level * 100), charging: b.charging } : null;

  const est = await withTimeout(nav.storage?.estimate?.());
  const quotaGb = est?.quota ? Math.round(est.quota / 1e9) : null;

  const tz = Intl.DateTimeFormat().resolvedOptions();
  const offset = -new Date().getTimezoneOffset() / 60;
  const gpu = detectGPU();
  const conn = nav.connection;

  const groups = {
    device: {
      icon: "fa-laptop",
      items: [
        ["os", detectOS(ua, hi), 3],
        ["browser", detectBrowser(ua, hi), 10],
        ["arch", hi?.architecture ? `${hi.architecture} ${hi.bitness ? hi.bitness + "-bit" : ""}`.trim() : (tx) => tx.unknown, 1],
        ["cores", nav.hardwareConcurrency ?? ((tx) => tx.unknown), 2.5],
        ["memory", nav.deviceMemory ? (tx) => tx.memory(nav.deviceMemory) : (tx) => tx.unknown, 1.5],
        ["gpu", gpu ?? ((tx) => tx.blocked), 7],
        ["touch", nav.maxTouchPoints > 0 ? (tx) => tx.touchPoints(nav.maxTouchPoints) : (tx) => tx.no, 1],
        ["battery", battery ? (tx) => `${battery.level} % · ${battery.charging ? tx.charging : tx.notCharging}` : (tx) => tx.unknown, null],
        ["connection", conn?.effectiveType ? `${conn.effectiveType.toUpperCase()} · ~${conn.downlink} Mb/s · ${conn.rtt} ms` : (tx) => tx.unknown, null],
      ],
    },
    screen: {
      icon: "fa-display",
      items: [
        ["screen", `${screen.width} × ${screen.height}`, 4.8],
        ["avail", `${screen.availWidth} × ${screen.availHeight}`, 2],
        ["window", (tx) => tx.window(innerWidth, innerHeight), null],
        ["colorDepth", `${screen.colorDepth}-bit`, 0.9],
        ["dpr", `${Math.round(devicePixelRatio * 100)} %`, 2.2],
        ["colorScheme", media("(prefers-color-scheme: dark)") ? (tx) => tx.dark : (tx) => tx.light, 1],
        ["hdr", media("(dynamic-range: high)") ? "HDR" : media("(color-gamut: p3)") ? "Display P3" : "sRGB", 1],
      ],
    },
    locale: {
      icon: "fa-earth-europe",
      items: [
        ["timezone", tz.timeZone, 3],
        ["offset", `UTC${offset >= 0 ? "+" : ""}${offset}`, null],
        ["locale", tz.locale, 2],
        ["languages", (nav.languages || [nav.language]).join(", "), 5],
        ["dateFormat", new Date().toLocaleDateString(), null],
      ],
    },
    settings: {
      icon: "fa-sliders",
      items: [
        ["cookies", nav.cookieEnabled ? (tx) => tx.on : (tx) => tx.off, 0.2],
        ["dnt", nav.doNotTrack === "1" ? (tx) => tx.on : (tx) => tx.off, 1],
        ["gpc", nav.globalPrivacyControl ? (tx) => tx.on : (tx) => tx.off, 0.5],
        ["pdf", nav.pdfViewerEnabled ? (tx) => tx.yes : (tx) => tx.no, 0.5],
        ["storage", quotaGb ? (tx) => tx.storage(quotaGb) : (tx) => tx.unknown, null],
        ["motion", media("(prefers-reduced-motion: reduce)") ? (tx) => tx.on : (tx) => tx.off, 0.3],
        ["webdriver", nav.webdriver ? (tx) => tx.yes : (tx) => tx.no, 0.1],
      ],
    },
  };

  const canvas = canvasFingerprint();
  const audio = await audioFingerprint();
  let fonts = [];
  try {
    fonts = detectFonts();
  } catch {}

  const stable = [];
  let rawBits = 0;
  for (const g of Object.values(groups)) {
    for (const [key, value, bits] of g.items) {
      if (bits === null) continue;
      stable.push(`${key}=${typeof value === "function" ? value(TXT.en) : value}`);
      rawBits += bits;
    }
  }
  if (canvas.status === "stable") {
    stable.push(`canvas=${canvas.hash}`);
    rawBits += 8;
  }
  if (audio.status === "stable") {
    stable.push(`audio=${audio.value}`);
    rawBits += 5;
  }
  stable.push(`fonts=${fonts.map(([n]) => n).join(",")}`);
  const fontBits = Math.min(13, 2 + fonts.length * 0.35);
  rawBits += fontBits;

  const joined = stable.join("|");
  const id = (cyrb53(joined, 1) + cyrb53(joined, 2)).slice(0, 16);

  const effectiveBits = rawBits * 0.5;

  return { groups, canvas, audio, fonts, fontBits, id, rawBits, effectiveBits };
};

let data = null;

const bitsClass = (b) => (b === null ? "none" : b < 2 ? "low" : b < 5 ? "med" : "high");
const bitsBadge = (b) => {
  const tx = t();
  const label = b === null ? tx.legend.none : tx.bitsLabel(Math.round(b * 10) / 10);
  return `<span class="bits ${bitsClass(b)}">${esc(label)}</span>`;
};

const render = () => {
  if (!data) return;
  const tx = t();

  $("fp-id").textContent = data.id.match(/.{1,4}/g).join(" ");
  const n = Math.pow(2, data.effectiveBits);
  $("fp-unique").innerHTML =
    n >= 8e9
      ? `${tx.unique.likely}<div class="muted small">${tx.unique.likelySub}</div>`
      : esc(tx.unique.oneIn(tx.unique.big(n)));
  $("uniq-bar").style.width = `${Math.min(100, (data.effectiveBits / 33) * 100)}%`;
  $("fp-bits").textContent = tx.unique.bits(Math.round(data.rawBits), Math.round(data.effectiveBits));

  const legend =
    `<div class="legend">${tx.legend.title} ` +
    ["low", "med", "high"].map((c) => `<span><span class="bits ${c}">${tx.legend[c]}</span></span>`).join("") +
    `</div>`;
  $("groups").innerHTML =
    legend +
    Object.entries(data.groups)
      .map(([key, g]) => {
        const rows = g.items
          .map(([k, value, bits]) => {
            const v = typeof value === "function" ? value(tx) : value;
            return `<li class="attr"><span class="attr-name">${tx.labels[k]}</span>${bitsBadge(bits)}<span class="attr-value">${esc(v)}</span></li>`;
          })
          .join("");
        return `<section class="card"><h2 class="card-title"><i class="fa-solid ${g.icon}"></i> ${tx.groups[key]}</h2><ul class="attr-list">${rows}</ul></section>`;
      })
      .join("");

  const c = data.canvas;
  $("canvas-hash").textContent = c.hash ?? "—";
  $("canvas-status").textContent = tx.canvas[c.status];
  $("canvas-status").className = `adv-status ${c.status === "stable" ? "" : "ok"}`;

  const a = data.audio;
  $("audio-hash").textContent = a.value !== undefined ? `${a.value.toFixed(8)} · ${a.hash}` : "—";
  $("audio-status").textContent = tx.audio[a.status];
  $("audio-status").className = `adv-status ${a.status === "stable" ? "" : "ok"}`;

  $("font-count").textContent = tx.fontsOf(data.fonts.length, FONTS.length);
  $("font-chips").innerHTML = data.fonts.length
    ? data.fonts
        .map(([name, sw]) => `<span class="font-chip${sw ? " software" : ""}" style="font-family:'${esc(name)}', monospace">${esc(name)}${sw ? `<small>${esc(sw)}</small>` : ""}</span>`)
        .join("")
    : `<p class="muted">${tx.fontsNone}</p>`;
};

const $ = (id) => document.getElementById(id);

const drawOnce = () => {
  if (data.canvas.canvas) $("canvas-preview").appendChild(data.canvas.canvas);

  if (data.audio.samples) {
    const s = data.audio.samples;
    const max = Math.max(...s.map(Math.abs)) || 1;
    const points = Array.from(s, (v, i) => `${(i / (s.length - 1)) * 300},${45 - (v / max) * 38}`).join(" ");
    $("audio-wave").innerHTML =
      `<svg viewBox="0 0 300 90" preserveAspectRatio="none"><polyline points="${points}" fill="none" stroke="var(--accent)" stroke-width="1.5"/></svg>`;
  }
};

(async () => {
  try {
    data = await collect();
    drawOnce();
    render();
  } catch (err) {
    console.error("Fingerprint collection failed:", err);
    $("fp-id").innerHTML = `<span class="fp-error">${esc(err?.message || err)}</span>`;
  }
})();

Toolkit.onLanguageChange(render);
