<script>
document.addEventListener("DOMContentLoaded", function () {

    const NUMERO_WHATSAPP = "5511999999999"; // ALTERE AQUI

    const form = document.getElementById("formContato");

    if (!form) return; // evita erro se não encontrar o formulário

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const telefone = document.getElementById("telefone").value.trim();
        const email = document.getElementById("email").value.trim();
        const area = document.getElementById("area").value;
        const mensagem = document.getElementById("mensagem").value.trim();

        const texto = 
`Olá, gostaria de atendimento jurídico.

📌 Nome: ${nome}
📞 Telefone: ${telefone}
📧 E-mail: ${email}
⚖ Área de Interesse: ${area}

📝 Mensagem:
${mensagem}`;

        const link = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

        window.open(link, "_blank");

        form.reset(); // limpa formulário depois de enviar
    });

});
</script>
