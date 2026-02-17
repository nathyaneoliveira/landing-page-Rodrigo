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
            "Nome: " + nome + "\n" +
            "E-mail: " + email + "\n" +
            "Área de Interesse: " + area + "\n\n" +
            "Mensagem:\n" + mensagem;

        const link = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto);

        window.open(link, "_blank");

        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');

        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
    });

    });
    

});


