const Toolkit = (() => {
  const LANGS = ["en", "cs"];
  let lang = LANGS.includes(localStorage.getItem("lang")) ? localStorage.getItem("lang") : "en";
  let cs = {};
  const listeners = [];

  const applyLanguage = () => {
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.innerHTML = lang === "en" ? el.dataset.en : cs[el.dataset.i18n] ?? el.dataset.en;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = lang === "en" ? el.dataset.enPlaceholder : cs[el.dataset.i18nPlaceholder] ?? el.dataset.enPlaceholder;
    });
    if (document.body.dataset.titleEn) {
      document.title = lang === "en" ? document.body.dataset.titleEn : document.body.dataset.titleCs;
    }

    document.querySelectorAll(".lang-switch [data-lang]").forEach((s) =>
      s.classList.toggle("active", s.dataset.lang === lang)
    );
    listeners.forEach((fn) => fn(lang));
  };

  const init = (csDict = {}) => {
    cs = csDict;

    document.querySelectorAll("[data-i18n]").forEach((el) => (el.dataset.en = el.innerHTML));
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => (el.dataset.enPlaceholder = el.placeholder));

    document.querySelectorAll(".theme-btn").forEach((btn) =>
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      })
    );

    document.querySelectorAll(".lang-switch").forEach((btn) =>
      btn.addEventListener("click", () => {
        lang = lang === "en" ? "cs" : "en";
        localStorage.setItem("lang", lang);
        applyLanguage();
      })
    );

    document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

    applyLanguage();
  };

  return {
    init,
    get lang() {
      return lang;
    },
    pick: (obj) => obj[lang] ?? obj.en,
    onLanguageChange: (fn) => listeners.push(fn),
  };
})();
