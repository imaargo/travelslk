/* ============================================================
   TravelsLK — site behaviour
   ============================================================ */
(function () {
  "use strict";

  /* ---------- inline icons ---------- */
  const I = {
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
    chevronR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.9c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.2-2.8c-.1-.2 0-.4.1-.5l.5-.6c.1-.2.1-.3 0-.5l-.7-1.7c-.1-.3-.3-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.3.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.6 4.1 2.3.9 2.8.7 3.3.7.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.2Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m16.2 7.8-2.2 6.2-6.2 2.2 2.2-6.2 6.2-2.2Z"/></svg>',
    boat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17h18l-2.5 4H5.5L3 17Z"/><path d="M5 17V8l7-4 7 4v9"/><path d="M9 17v-5"/><path d="M15 17v-5"/></svg>',
    heli: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 4h14"/><path d="M10 4v4"/><path d="M5 11h9l3 4H8l-3-4Z"/><path d="M8 15l-1 3"/><path d="M14 15l1 3"/><path d="M18 8h3"/></svg>',
    wave: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M2 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/><path d="M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15M15 6v15"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z"/><path d="M5 18v3M18.5 4v3"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    kayak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12c3-4 6-6 9-6s6 2 9 6c-3 4-6 6-9 6s-6-2-9-6Z"/><path d="M12 6v12"/><path d="m4 8 4 8M20 8l-4 8"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 17h14l-1.5-5.5a2 2 0 0 0-2-1.5h-7a2 2 0 0 0-2 1.5L5 17Z"/><path d="M3 17h18v3H3z"/><circle cx="7.5" cy="20" r="1.2"/><circle cx="16.5" cy="20" r="1.2"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
  };

  const WA_NUMBER = "94767107508";
  const PHONE = "+94 76 710 7508";
  const PHONE2 = "+94 70 710 7508";
  const EMAIL = "info.travelslk@gmail.com";
  const EMAIL2 = "contact@travelslk.com";

  const NAV = [
    { key: "home", label: "Home", href: "index.html" },
    { key: "tours", label: "Tours", href: "tours.html" },
    { key: "yacht", label: "Yacht", href: "yacht-tours.html" },
    { key: "heli", label: "Helicopter", href: "helicopter-tours.html" },
    { key: "destinations", label: "Destinations", href: "destinations.html" },
    { key: "activities", label: "Activities", href: "activities.html" },
    { key: "about", label: "About", href: "about.html" },
  ];
  const MORE = [
    { key: "mice", label: "MICE & Events", href: "mice-events.html" },
    { key: "blog", label: "Blog", href: "blog.html" },
    { key: "faq", label: "FAQ", href: "faq.html" },
    { key: "contact", label: "Contact Us", href: "contact.html" },
  ];

  function navLink(item, active) {
    const cur = item.key === active ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${cur}>${item.label}</a>`;
  }

  function headerHTML(active) {
    const overlay = active === "home";
    return `
    <header class="site-header${overlay ? " site-header--overlay" : ""}" id="siteHeader">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="TravelsLK home">
          <img class="brand-logo brand-logo--dark" src="assets/img/logo.png" alt="TravelsLK — Signature of Excellent Travel Destinations Provider">
          ${overlay ? `<img class="brand-logo brand-logo--light" src="assets/img/logo-light.png" alt="" aria-hidden="true">` : ""}
        </a>
        <nav class="nav" aria-label="Primary">
          ${NAV.map((n) => navLink(n, active)).join("")}
          <div class="nav-more" id="navMore">
            <button type="button" aria-expanded="false" aria-haspopup="true">More ${I.chevron}</button>
            <div class="nav-menu" role="menu">
              ${MORE.map((n) => `<a role="menuitem" href="${n.href}"${n.key === active ? ' aria-current="page"' : ""}>${n.label}</a>`).join("")}
            </div>
          </div>
        </nav>
        <div class="header-actions">
          <select class="currency-select" data-currency aria-label="Display currency">
            <option value="USD">USD $</option>
            <option value="EUR">EUR €</option>
            <option value="LKR">LKR Rs</option>
          </select>
          <a class="btn btn-primary btn-sm" href="plan-your-journey.html">Plan Your Journey</a>
          <button class="nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-nav" id="mobileNav">
      ${NAV.map((n) => navLink(n, active)).join("")}
      ${MORE.map((n) => navLink(n, active)).join("")}
      <a class="btn btn-primary" href="plan-your-journey.html">Plan Your Journey</a>
    </div>`;
  }

  function footerHTML() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="assets/img/logo.png" alt="TravelsLK">
            <p>Signature of Excellent Travel Destinations Provider. Tours, yacht days, helicopter skies and island adventures across Sri Lanka.</p>
            <div class="footer-social">
              <a href="https://wa.me/${WA_NUMBER}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.whatsapp}</a>
              <a href="tel:+94767107508" aria-label="Call us">${I.phone}</a>
              <a href="mailto:${EMAIL}" aria-label="Email us">${I.mail}</a>
            </div>
          </div>
          <div class="footer-col">
            <h3>Explore</h3>
            <a href="tours.html">Tailor-Made Tours</a>
            <a href="yacht-tours.html">Yacht Tours</a>
            <a href="helicopter-tours.html">Helicopter Tours</a>
            <a href="activities.html">Activities</a>
            <a href="destinations.html">Destinations</a>
          </div>
          <div class="footer-col">
            <h3>Company</h3>
            <a href="about.html">About Us</a>
            <a href="mice-events.html">MICE & Events</a>
            <a href="blog.html">Blog</a>
            <a href="faq.html">FAQ</a>
            <a href="contact.html">Contact Us</a>
          </div>
          <div class="footer-col">
            <h3>Contact</h3>
            <ul class="footer-contact">
              <li>${I.phone}<a href="tel:+94767107508">${PHONE}</a></li>
              <li>${I.phone}<a href="tel:+94707107508">${PHONE2}</a></li>
              <li>${I.mail}<a href="mailto:${EMAIL}">${EMAIL}</a></li>
              <li>${I.mail}<a href="mailto:${EMAIL2}">${EMAIL2}</a></li>
              <li>${I.pin}<span>Port City Marina, Colombo · Mirissa, Sri Lanka</span></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© <span data-year></span> TravelsLK. All rights reserved.</p>
          <div class="footer-gov">
            <a href="https://www.srilanka.travel/" target="_blank" rel="noopener">srilanka.travel</a>
            <a href="https://www.immigration.gov.lk/index_e.php" target="_blank" rel="noopener">Immigration</a>
            <a href="https://www.slida.gov.lk/en" target="_blank" rel="noopener">SLIDA</a>
            <a href="https://www.olankatravels.com/" target="_blank" rel="noopener">Olanka Travels</a>
            <a href="https://travelmyasia.com/" target="_blank" rel="noopener">Travel My Asia</a>
          </div>
        </div>
      </div>
    </footer>
    <a class="wa-float" href="https://wa.me/${WA_NUMBER}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      ${I.whatsapp}<span>Chat on WhatsApp</span>
    </a>`;
  }

  /* ---------- currency ---------- */
  const CURRENCIES = {
    USD: { rate: 1, prefix: "$", digits: 0 },
    EUR: { rate: 0.92, prefix: "€", digits: 0 },
    LKR: { rate: 300, prefix: "Rs ", digits: 0 },
  };
  let currency = "USD";
  try {
    const saved = localStorage.getItem("tlk-currency");
    if (saved && CURRENCIES[saved]) currency = saved;
  } catch (e) { /* storage may be blocked */ }

  function fmt(usd) {
    const c = CURRENCIES[currency] || CURRENCIES.USD;
    const value = Math.round((Number(usd) || 0) * c.rate);
    return c.prefix + value.toLocaleString("en-US");
  }

  function applyCurrency() {
    document.querySelectorAll("[data-usd]").forEach((el) => {
      const usd = parseFloat(el.getAttribute("data-usd"));
      if (!isNaN(usd)) el.textContent = fmt(usd);
    });
    document.querySelectorAll("[data-currency]").forEach((s) => (s.value = currency));
    try { localStorage.setItem("tlk-currency", currency); } catch (e) { /* ignore */ }
    if (window.__tlkSummary) window.__tlkSummary();
  }

  /* ---------- nav / header ---------- */
  function initNav() {
    const header = document.getElementById("siteHeader");
    const toggle = document.getElementById("navToggle");
    const mobile = document.getElementById("mobileNav");
    const more = document.getElementById("navMore");

    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (toggle && mobile) {
      toggle.addEventListener("click", () => {
        const open = document.body.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      });
      mobile.querySelectorAll("a").forEach((a) =>
        a.addEventListener("click", () => {
          document.body.classList.remove("nav-open");
          toggle.setAttribute("aria-expanded", "false");
        })
      );
    }

    if (more) {
      const btn = more.querySelector("button");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const open = more.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("click", (e) => {
        if (!more.contains(e.target)) {
          more.classList.remove("is-open");
          btn.setAttribute("aria-expanded", "false");
        }
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.body.classList.remove("nav-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
        if (more) {
          more.classList.remove("is-open");
          more.querySelector("button").setAttribute("aria-expanded", "false");
        }
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) document.body.classList.remove("nav-open");
    });

    document.querySelectorAll("[data-currency]").forEach((sel) => {
      sel.addEventListener("change", () => {
        currency = sel.value;
        applyCurrency();
      });
    });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));

    // safety net: reveal anything already on screen even if the observer is slow
    const revealInView = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach((el) => {
        if (el.classList.contains("in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) el.classList.add("in");
      });
    };
    requestAnimationFrame(revealInView);
    window.addEventListener("load", revealInView);
  }

  /* ---------- filters ---------- */
  function initFilters() {
    const bars = document.querySelectorAll("[data-filter-bar]");
    bars.forEach((bar) => {
      const targetSel = bar.getAttribute("data-target");
      const items = targetSel ? document.querySelectorAll(targetSel + " [data-cat]") : [];
      bar.querySelectorAll("[data-filter]").forEach((btn) => {
        btn.addEventListener("click", () => {
          bar.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("is-active"));
          btn.classList.add("is-active");
          const f = btn.getAttribute("data-filter");
          items.forEach((item) => {
            const cats = item.getAttribute("data-cat") || "";
            const show = f === "all" || cats.split(" ").includes(f);
            item.style.display = show ? "" : "none";
          });
        });
      });
    });
  }

  /* ---------- lightbox ---------- */
  function initLightbox() {
    const triggers = document.querySelectorAll("[data-lightbox]");
    if (!triggers.length) return;
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = `<button class="lightbox-close" type="button" aria-label="Close image">${I.x}</button><img alt="">`;
    document.body.appendChild(box);
    const img = box.querySelector("img");
    const close = () => {
      box.classList.remove("is-open");
      document.body.style.overflow = "";
    };
    box.addEventListener("click", (e) => {
      if (e.target === box || e.target.closest(".lightbox-close")) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && box.classList.contains("is-open")) close();
    });
    triggers.forEach((t) => {
      t.addEventListener("click", () => {
        img.src = t.getAttribute("data-lightbox");
        img.alt = t.getAttribute("data-alt") || "TravelsLK image";
        box.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });
  }

  /* ---------- booking wizard ---------- */
  function initBooking() {
    const form = document.getElementById("bookingForm");
    if (!form) return;

    const steps = Array.from(form.querySelectorAll(".step"));
    const dots = Array.from(document.querySelectorAll(".step-dot"));
    const progress = document.getElementById("progressFill");
    const success = document.getElementById("bookingSuccess");
    const summaryList = document.getElementById("summaryList");
    let current = 1;

    const fields = {
      experience: document.getElementById("bkExperience"),
      date: document.getElementById("bkDate"),
      flexible: document.getElementById("bkFlexible"),
      adults: document.getElementById("bkAdults"),
      children: document.getElementById("bkChildren"),
      pickup: document.getElementById("bkPickup"),
      name: document.getElementById("bkName"),
      email: document.getElementById("bkEmail"),
      phone: document.getElementById("bkPhone"),
      country: document.getElementById("bkCountry"),
      notes: document.getElementById("bkNotes"),
      consent: document.getElementById("bkConsent"),
    };

    function val(el) { return el ? el.value.trim() : ""; }
    function selectedAddons() {
      return Array.from(form.querySelectorAll('input[name="addon"]:checked')).map((c) => c.value);
    }
    function selectedExperienceText() {
      if (!fields.experience) return "";
      const opt = fields.experience.options[fields.experience.selectedIndex];
      return opt ? opt.textContent.trim() : "";
    }
    function selectedExperienceUsd() {
      if (!fields.experience) return null;
      const raw = fields.experience.value;
      const match = raw.match(/\|(\d+(?:\.\d+)?)$/);
      return match ? parseFloat(match[1]) : null;
    }
    function experienceLabel() {
      if (!fields.experience || !fields.experience.value) return "";
      return selectedExperienceText();
    }

    function updateSummary() {
      if (!summaryList) return;
      const addons = selectedAddons();
      const rows = [
        ["Experience", experienceLabel() || "Not selected"],
        ["Date", fields.flexible && fields.flexible.checked ? "Flexible" : val(fields.date) || "Not selected"],
        ["Guests", `${val(fields.adults) || 1} adult(s)${Number(val(fields.children)) > 0 ? ", " + val(fields.children) + " child(ren)" : ""}`],
        ["Pickup", val(fields.pickup) || "To confirm"],
        ["Add-ons", addons.length ? addons.join(", ") : "None"],
        ["Name", val(fields.name) || "—"],
        ["Contact", [val(fields.phone), val(fields.email)].filter(Boolean).join(" · ") || "—"],
      ];
      let html = rows
        .map(([k, v]) => `<div class="summary-item"><span>${k}</span><strong>${escapeHtml(v)}</strong></div>`)
        .join("");
      const usd = selectedExperienceUsd();
      if (usd) {
        html += `<div class="summary-item"><span>From</span><strong>${fmt(usd)}</strong></div>`;
      }
      summaryList.innerHTML = html;
    }

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    function showStep(n, scroll = true) {
      current = Math.min(Math.max(n, 1), steps.length);
      steps.forEach((s) => s.classList.toggle("is-active", Number(s.getAttribute("data-step")) === current));
      dots.forEach((d) => {
        const dn = Number(d.getAttribute("data-step"));
        d.classList.toggle("is-active", dn === current);
        d.classList.toggle("is-done", dn < current);
      });
      if (progress) progress.style.width = `${(current / steps.length) * 100}%`;
      updateSummary();
      const card = form.closest(".booking-card");
      if (scroll && card) card.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function setError(el, on) {
      const field = el ? el.closest(".field") : null;
      if (field) field.classList.toggle("has-error", on);
    }

    function validateStep(n) {
      let ok = true;
      if (n === 1) {
        if (!val(fields.experience)) { setError(fields.experience, true); ok = false; } else setError(fields.experience, false);
        const flexible = fields.flexible && fields.flexible.checked;
        if (!flexible && !val(fields.date)) { setError(fields.date, true); ok = false; } else setError(fields.date, false);
      }
      if (n === 2) {
        if (!val(fields.adults) || Number(val(fields.adults)) < 1) { setError(fields.adults, true); ok = false; } else setError(fields.adults, false);
      }
      if (n === 4) {
        if (!val(fields.name)) { setError(fields.name, true); ok = false; } else setError(fields.name, false);
        const hasContact = val(fields.phone) || val(fields.email);
        if (!hasContact) {
          setError(fields.phone, true);
          setError(fields.email, true);
          ok = false;
        } else {
          setError(fields.phone, false);
          setError(fields.email, false);
        }
        if (!fields.consent || !fields.consent.checked) { setError(fields.consent, true); ok = false; } else setError(fields.consent, false);
      }
      return ok;
    }

    form.querySelectorAll("[data-next]").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!validateStep(current)) return;
        showStep(current + 1);
      });
    });
    form.querySelectorAll("[data-prev]").forEach((btn) => {
      btn.addEventListener("click", () => showStep(current - 1));
    });

    form.addEventListener("input", updateSummary);
    form.addEventListener("change", updateSummary);

    if (fields.flexible) {
      fields.flexible.addEventListener("change", () => {
        if (fields.date) fields.date.disabled = fields.flexible.checked;
      });
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validateStep(4)) return;
      const addons = selectedAddons();
      const lines = [
        "New TravelsLK booking inquiry",
        "-----------------------------",
        `Experience: ${experienceLabel() || "Not selected"}`,
        `Date: ${fields.flexible && fields.flexible.checked ? "Flexible" : val(fields.date) || "Not selected"}`,
        `Adults: ${val(fields.adults) || "1"}`,
        `Children: ${val(fields.children) || "0"}`,
        `Pickup: ${val(fields.pickup) || "To confirm"}`,
        `Add-ons: ${addons.length ? addons.join(", ") : "None"}`,
        `Name: ${val(fields.name)}`,
        `Phone: ${val(fields.phone) || "-"}`,
        `Email: ${val(fields.email) || "-"}`,
        `Country: ${val(fields.country) || "-"}`,
        `Notes: ${val(fields.notes) || "-"}`,
      ];
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
      window.open(url, "_blank", "noopener");
      if (success) {
        form.style.display = "none";
        success.classList.add("is-visible");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    const again = document.getElementById("bookingAgain");
    if (again) {
      again.addEventListener("click", () => {
        form.reset();
        if (fields.date) fields.date.disabled = false;
        if (success) success.classList.remove("is-visible");
        form.style.display = "";
        showStep(1);
      });
    }

    // preselect from ?experience=slug
    const params = new URLSearchParams(window.location.search);
    const preselect = params.get("experience");
    if (preselect && fields.experience) {
      const match = Array.from(fields.experience.options).find(
        (o) => o.value.split("|")[0] === preselect
      );
      if (match) fields.experience.value = match.value;
    }

    window.__tlkSummary = updateSummary;
    showStep(1, false);
  }

  /* ---------- simple contact form ---------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const get = (n) => (form.elements[n] ? form.elements[n].value.trim() : "");
      const lines = [
        "New message from travelsLK.com",
        "-----------------------------",
        `Name: ${get("name")}`,
        `Email: ${get("email")}`,
        `Phone: ${get("phone") || "-"}`,
        `Subject: ${get("subject") || "-"}`,
        `Message: ${get("message")}`,
      ];
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
      const ok = document.getElementById("contactSuccess");
      if (ok) ok.classList.add("is-visible");
      form.reset();
    });
  }

  /* ---------- init ---------- */
  function init() {
    const active = document.body.getAttribute("data-page") || "";
    const headerMount = document.getElementById("site-header");
    const footerMount = document.getElementById("site-footer");
    if (headerMount) headerMount.innerHTML = headerHTML(active);
    if (footerMount) footerMount.innerHTML = footerHTML();

    document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

    initNav();
    initReveal();
    initFilters();
    initLightbox();
    initBooking();
    initContactForm();
    applyCurrency();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
