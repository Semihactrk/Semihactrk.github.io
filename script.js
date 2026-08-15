// Proje kartına tıklanınca, karta karşılık gelen <template>'in içeriğini
// modal'a (dialog) kopyalayıp açar.
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

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

  // Kapat butonu
  closeBtn.addEventListener("click", () => modal.close());

  // Arka plana (backdrop) tıklayınca kapat
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.close();
  });

  // Not: ESC tuşu <dialog> tarafından zaten otomatik destekleniyor.
});
