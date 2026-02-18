document.addEventListener("DOMContentLoaded", function () {
  const NUMERO_WHATSAPP = "5583998565071"; // DDI + DDD + número

  const form = document.getElementById("formContato");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const area = document.getElementById("area").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
      "Olá, gostaria de atendimento jurídico.\n\n" +
      "Nome: " +
      nome +
      "\n" +
      "E-mail: " +
      email +
      "\n" +
      "Área de Interesse: " +
      area +
      "\n\n" +
      "Mensagem:\n" +
      mensagem;

    const link =
      "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);

    window.open(link, "_blank");

    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      document
        .querySelectorAll(".campo input, .campo textarea, .campo select")
        .forEach((campo) => {
          campo.addEventListener("focus", () => {
            campo.parentElement.classList.add("ativo");
          });

          campo.addEventListener("blur", () => {
            if (campo.value === "") {
              campo.parentElement.classList.remove("ativo");
            }
          });
          window.addEventListener("load", () => {
            document.querySelector(".formulario").classList.add("aparecer");
          });
          document
            .getElementById("formContato")
            .addEventListener("submit", function (e) {
              const campos = this.querySelectorAll("input, select");

              campos.forEach((campo) => {
                if (!campo.value) {
                  e.preventDefault();
                  campo.style.borderColor = "red";
                } else {
                  campo.style.borderColor = "var(--dourado)";
                }
              });
            });
        });
    });
  });
});
