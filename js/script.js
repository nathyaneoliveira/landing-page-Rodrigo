document.addEventListener("DOMContentLoaded", function () {

    const NUMERO_CONTATO = "5583988731369";
    const NUMERO_PARCERIA = "5583998565071";

    /* =========================
       FORMULÁRIO DE CONTATO
    ========================= */
    const formContato = document.getElementById("formContato");

    if (formContato) {
        formContato.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const area = document.getElementById("area")?.value || "";
            const mensagem = document.getElementById("mensagem")?.value.trim() || "";

            const texto =
                "Olá, gostaria de atendimento jurídico.\n\n" +
                "Nome: " + nome + "\n" +
                "E-mail: " + email + "\n" +
                "Área de Interesse: " + area + "\n\n" +
                "Mensagem:\n" + mensagem;

            const link = "https://wa.me/" + NUMERO_CONTATO + "?text=" + encodeURIComponent(texto);

            window.open(link, "_blank");
            formContato.reset();
        });
    }

    /* =========================
       FORMULÁRIO DE PARCERIA
    ========================= */
    const formParceria = document.getElementById("formParceria");

    if (formParceria) {
        formParceria.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome")?.value.trim() || "";
            const email = document.getElementById("email")?.value.trim() || "";
            const cidade = document.getElementById("cidade")?.value.trim() || "";
            const area = document.getElementById("area")?.value || "";
            const mensagem = document.getElementById("mensagem")?.value.trim() || "";

            const texto =
                "Olá, gostaria de parceria jurídica.\n\n" +
                "Nome: " + nome + "\n" +
                "E-mail: " + email + "\n" +
                "Cidade/Estado: " + cidade + "\n" +
                "Área de Atuação: " + area + "\n\n" +
                "Experiência:\n" + mensagem;

            const link = "https://wa.me/" + NUMERO_PARCERIA + "?text=" + encodeURIComponent(texto);

            window.open(link, "_blank");
            formParceria.reset();
        });
    }

});
