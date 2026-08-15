// Bu dosya translations.js'in tanımladığı `translations` ve `projects`
// globallerine bağımlıdır — index.html'de translations.js ondan önce yüklenir.

document.addEventListener("DOMContentLoaded", () => {
  const LANG_STORAGE_KEY = "portfolyo-lang";

  const modal = document.getElementById("project-modal");
  const modalBody = modal ? modal.querySelector(".modal-body") : null;
  const projectList = document.getElementById("project-list");

  const lightbox = document.getElementById("photo-lightbox");
  const lightboxImg = lightbox ? lightbox.querySelector(".lightbox-img") : null;

  // ===== Fotoğraf büyütme (lightbox) =====
  // Verilen <img> öğesine tıklanınca büyük halini ortada gösterir.
  // stopPropagation sayesinde, görsel bir proje satırının (buton) içindeyse
  // tıklama satırı da tetikleyip proje detayını açmaz.
  function bindZoomable(img) {
    img.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.showModal();
    });
  }

  if (lightbox && lightboxImg) {
    const lightboxClose = lightbox.querySelector(".modal-close");
    lightboxClose.addEventListener("click", () => lightbox.close());

    // Arka plana veya büyütülmüş fotoğrafın kendisine tıklayınca kapat
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === lightboxImg) lightbox.close();
    });
  }

  // Sayfada JS dışı (statik) kalan tek görsel: Hakkımda'daki profil fotoğrafı.
  // Proje thumbnail'leri renderProjects() içinde, oluşturuldukları anda bağlanıyor.
  const aboutPhoto = document.querySelector(".about-photo .zoomable");
  if (aboutPhoto) bindZoomable(aboutPhoto);

  // ===== Proje detay modalı =====
  function openProjectModal(project, lang) {
    if (!modal || !modalBody) return;
    const t = project[lang];

    modalBody.innerHTML = "";

    const h3 = document.createElement("h3");
    h3.textContent = t.title;
    modalBody.appendChild(h3);

    (project.badges || []).forEach((b) => {
      const span = document.createElement("span");
      span.className = b.cls ? `badge ${b.cls}` : "badge";
      span.textContent = b[lang];
      modalBody.appendChild(span);
    });

    t.modalParagraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      modalBody.appendChild(p);
    });

    if (project.modalTech) {
      const techP = document.createElement("p");
      techP.className = "tech";
      techP.textContent = project.modalTech;
      modalBody.appendChild(techP);
    }

    if (t.highlight) {
      const highlightP = document.createElement("p");
      highlightP.className = "highlight";
      const strong = document.createElement("strong");
      strong.textContent = `${translations[lang].highlightLabel}: `;
      highlightP.appendChild(strong);
      highlightP.appendChild(document.createTextNode(t.highlight));
      modalBody.appendChild(highlightP);
    }

    if (project.github || project.demo) {
      const linksDiv = document.createElement("div");
      linksDiv.className = "modal-links";

      if (project.github) {
        const a = document.createElement("a");
        a.href = project.github;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = `${translations[lang].githubLinkLabel} ↗`;
        linksDiv.appendChild(a);
      }
      if (project.demo) {
        const a = document.createElement("a");
        a.href = project.demo;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = `${translations[lang].demoLinkLabel} ↗`;
        linksDiv.appendChild(a);
      }
      modalBody.appendChild(linksDiv);
    }

    modal.showModal();
  }

  if (modal) {
    const modalClose = modal.querySelector(".modal-close");
    modalClose.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  // ===== Proje kartlarını üret (TR/EN'e göre) =====
  function renderProjects(lang) {
    if (!projectList) return;
    projectList.innerHTML = "";

    projects.forEach((project) => {
      const t = project[lang];

      const row = document.createElement("button");
      row.type = "button";
      row.className = "project-row";
      row.setAttribute("aria-haspopup", "dialog");

      const thumb = document.createElement("div");
      thumb.className = project.thumbContain ? "project-thumb thumb-contain" : "project-thumb";

      const img = document.createElement("img");
      img.src = project.image;
      img.alt = t.alt;
      img.loading = "lazy";
      img.className = "zoomable";
      bindZoomable(img);
      thumb.appendChild(img);

      const content = document.createElement("div");
      content.className = "project-row-content";

      const h3 = document.createElement("h3");
      h3.textContent = `${t.title} `;
      const extIcon = document.createElement("span");
      extIcon.className = "ext-icon";
      extIcon.setAttribute("aria-hidden", "true");
      extIcon.textContent = "↗";
      h3.appendChild(extIcon);
      content.appendChild(h3);

      (project.badges || []).forEach((b) => {
        const span = document.createElement("span");
        span.className = b.cls ? `badge ${b.cls}` : "badge";
        span.textContent = b[lang];
        content.appendChild(span);
      });

      const p = document.createElement("p");
      p.textContent = t.shortDesc;
      content.appendChild(p);

      const ul = document.createElement("ul");
      ul.className = "tech-pills";
      project.tech.forEach((tech) => {
        const li = document.createElement("li");
        li.textContent = tech;
        ul.appendChild(li);
      });
      content.appendChild(ul);

      row.appendChild(thumb);
      row.appendChild(content);
      row.addEventListener("click", () => openProjectModal(project, lang));

      projectList.appendChild(row);
    });
  }

  // ===== Dil değiştirme =====
  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.title = translations[lang].title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", translations[lang].metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang][key] !== undefined) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.dataset.i18nAria;
      if (translations[lang][key] !== undefined) {
        el.setAttribute("aria-label", translations[lang][key]);
      }
    });

    renderProjects(lang);

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });

  const savedLang = localStorage.getItem(LANG_STORAGE_KEY);
  applyLanguage(savedLang === "en" ? "en" : "tr");

  // Not: ESC tuşu <dialog> tarafından zaten otomatik destekleniyor.
});
