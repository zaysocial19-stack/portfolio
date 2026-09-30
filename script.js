document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const navLinks = document.querySelector(".nav-links");
  const menuToggle = document.querySelector(".menu-toggle");
  const themeToggle = document.querySelector(".theme-toggle");
  const backToTop = document.querySelector(".back-to-top");
  const toast = document.querySelector(".toast");
  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll(".nav-links a")];

  // ==================== YEAR ====================
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  // ==================== THEME ====================
  // Light mode is the default.
  // A manually selected theme is remembered in localStorage.
  const savedTheme = localStorage.getItem("portfolio-theme");

  if (savedTheme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  function updateThemeIcon() {
    if (!themeToggle) return;

    themeToggle.textContent = root.classList.contains("dark") ? "☾" : "☼";
    themeToggle.setAttribute(
      "aria-label",
      root.classList.contains("dark")
        ? "Switch to light theme"
        : "Switch to dark theme"
    );
  }

  updateThemeIcon();

  themeToggle?.addEventListener("click", () => {
    root.classList.toggle("dark");

    localStorage.setItem(
      "portfolio-theme",
      root.classList.contains("dark") ? "dark" : "light"
    );

    updateThemeIcon();
  });

  // ==================== MOBILE NAV ====================
  function closeMenu() {
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }

  menuToggle?.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      navLinks?.classList.contains("open") &&
      !navLinks.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // ==================== SCROLL SPY ====================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => observer.observe(section));

  // ==================== BACK TO TOP ====================
  window.addEventListener(
    "scroll",
    () => {
      backToTop?.classList.toggle("visible", window.scrollY > 500);
    },
    { passive: true }
  );

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ==================== TOAST ====================
  function showToast(message) {
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  // ==================== PLACEHOLDER LINK HELPER ====================
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast("Replace this placeholder link with your real URL.");
    });
  });

  // ==================== WEB3FORMS CONTACT FORM ====================
  const form = document.querySelector("#contact-form");
  const submitButton = document.querySelector("#contact-submit");
  const status = document.querySelector("#form-status");

  const COOLDOWN_MS = 60 * 1000;
  const COOLDOWN_KEY = "portfolio-contact-last-submit";

  function setStatus(message, type = "") {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status ${type}`.trim();
  }

  form?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const accessKey = form.querySelector('input[name="access_key"]')?.value;

    if (!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      setStatus(
        "Contact form is not configured yet. Add your Web3Forms access key first.",
        "error"
      );
      return;
    }

    // Client-side cooldown to reduce accidental/repeated submissions.
    const lastSubmit = Number(localStorage.getItem(COOLDOWN_KEY) || 0);
    const elapsed = Date.now() - lastSubmit;

    if (elapsed < COOLDOWN_MS) {
      const seconds = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
      setStatus(`Please wait ${seconds} seconds before sending another message.`, "error");
      return;
    }

    // Honeypot: a real visitor should leave this unchecked.
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck?.checked) {
      setStatus("Message could not be sent.", "error");
      return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    setStatus("");

    try {
      const formData = new FormData(form);

      // Web3Forms expects the form data as a POST request.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        localStorage.setItem(COOLDOWN_KEY, String(Date.now()));
        form.reset();
        setStatus("Your message has been sent successfully.", "success");
        showToast("Message sent.");
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Web3Forms error:", error);
      setStatus(
        "Something went wrong. Please try again later.",
        "error"
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Send Message";
    }
  });
});
