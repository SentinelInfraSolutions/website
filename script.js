
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".primary-nav");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("#year").forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const consultationForm = document.querySelector("#consultation-form");
if (consultationForm) {
  consultationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(consultationForm);
    const subject = `Consultation request: ${data.get("service") || "IT support"}`;
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Company: ${data.get("company") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Service: ${data.get("service") || ""}`,
      `Preferred support type: ${data.get("support_type") || ""}`,
      "",
      "Request details:",
      data.get("message") || ""
    ].join("\n");

    window.location.href =
      "mailto:admin@sentinelinfrasolutions.com" +
      `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
