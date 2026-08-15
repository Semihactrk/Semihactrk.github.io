document.addEventListener("DOMContentLoaded", () => {
  // ===== Proje detay modalı =====
  // Proje kartına tıklanınca, karta karşılık gelen <template>'in içeriğini
  // modal'a (dialog) kopyalayıp açar.
  const modal = document.getElementById("project-modal");
  if (modal) {
    const modalBody = modal.querySelector(".modal-body");
    const closeBtn = modal.querySelector(".modal-close");

    document.querySelectorAll(".project-row").forEach((row) => {
      row.addEventListener("click", () => {
        const id = row.dataset.project;
        const template = document.getElementById(`detail-${id}`);
        if (!template) return;

        modalBody.innerHTML = "";
        modalBody.appendChild(template.content.cloneNode(true));
        modal.showModal();
      });
    });

    closeBtn.addEventListener("click", () => modal.close());

    // Arka plana (backdrop) tıklayınca kapat
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  // ===== Fotoğraf büyütme (lightbox) =====
  // .zoomable sınıfına sahip bir görsele tıklanınca, o görseli
  // büyük halde ortada gösterir. Görsel bir buton içindeyse
  // (proje satırları gibi), tıklamanın butonu da tetikleyip
  // proje detayını açmasını engeller (stopPropagation).
  const lightbox = document.getElementById("photo-lightbox");
  if (lightbox) {
    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const lightboxClose = lightbox.querySelector(".modal-close");

    document.querySelectorAll(".zoomable").forEach((img) => {
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.showModal();
      });
    });

    lightboxClose.addEventListener("click", () => lightbox.close());

    // Arka plana veya büyütülmüş fotoğrafın kendisine tıklayınca da kapat
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target === lightboxImg) lightbox.close();
    });
  }

  // Not: ESC tuşu <dialog> tarafından zaten otomatik destekleniyor.
});
