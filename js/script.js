document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       CONFIGURAÇÕES
       ===================================================== */

    /*const NUMERO_CONTATO = "5583998565071";
    const NUMERO_PARCERIA = "5583998565071";*/
    const NUMERO_CONTATO = "5583988731369";
    const NUMERO_PARCERIA = "5583988731369";

    const FORMULARIOS = {
        contato: {
            title: "Agendar Consultoria",
            formId: "formContato",
            html: `
                <h2 class="titulo-secao">Agendar Consultoria</h2>
                <form id="formContato" class="formulario">
                    <input type="text" id="nome" placeholder="Nome completo" required>
                    <input type="email" id="email" placeholder="E-mail" required>
                    <select id="area" required>
                        <option value>Selecione a área de interesse</option>
                        <option>Direito Empresarial</option>
                        <option>Direito Tributário</option>
                        <option>Direito Civil</option>
                        <option>Outro assunto</option>
                    </select>
                    <textarea id="mensagem" rows="5" placeholder="Descreva brevemente sua necessidade"></textarea>
                    <div class="botoes-form">
                        <button type="submit" class="btn-dourado">
                            Solicitar Atendimento
                        </button>
                    </div>
                </form>
                <div class="form-modal-localizacao">
                    <div class="form-modal-map-wrap">
                        <iframe
                            src="https://www.google.com/maps?q=-6.838925,-35.125210&output=embed"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <a
                        href="https://www.google.com/maps?q=-6.838925,-35.125210"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-mapa form-modal-btn-localizacao">
                        Ver localização
                    </a>
                </div>
            `
        },
        parceiro: {
            title: "Seja um Parceiro",
            formId: "formParceria",
            html: `
                <h2 class="titulo-secao">Seja um Parceiro</h2>
                <form id="formParceria" class="formulario">
                    <input type="text" id="nome" placeholder="Nome completo" required>
                    <input type="email" id="email" placeholder="E-mail profissional" required>
                    <input type="text" id="cidade" placeholder="Cidade / Estado" required>
                    <select id="area" required>
                        <option value>Área de atuação</option>
                        <option>Direito Empresarial</option>
                        <option>Direito Tributário</option>
                        <option>Direito Civil</option>
                        <option>Outras áreas</option>
                    </select>
                    <textarea id="mensagem" rows="5" placeholder="Descreva sua experiência profissional"></textarea>
                    <div class="botoes-form">
                        <button type="submit" class="btn-dourado">
                            Enviar Solicitação
                        </button>
                    </div>
                </form>
                <div class="form-modal-localizacao">
                    <div class="form-modal-map-wrap">
                        <iframe
                            src="https://www.google.com/maps?q=-6.838925,-35.125210&output=embed"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <a
                        href="https://www.google.com/maps?q=-6.838925,-35.125210"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn-mapa form-modal-btn-localizacao">
                        Ver localização
                    </a>
                </div>
            `
        }
    };

    const formModal = document.getElementById("formModal");
    const formModalBody = document.getElementById("formModalBody");

    function abrirFormulario(tipo) {
        if (!formModal || !formModalBody || !FORMULARIOS[tipo]) return;

        formModalBody.innerHTML = FORMULARIOS[tipo].html;
        formModal.style.display = "flex";

        const form = document.getElementById(FORMULARIOS[tipo].formId);

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                if (tipo === "contato") {
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
                } else {
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
                }

                fecharFormulario();
                form.reset();
            });
        }
    }

    window.abrirFormulario = function (tipo) {
        abrirFormulario(tipo);
    };

    window.fecharFormulario = function () {
        if (formModal) {
            formModal.style.display = "none";
        }
    };

    document.querySelectorAll(".abrir-formulario").forEach(function (button) {
        button.addEventListener("click", function () {
            abrirFormulario(button.dataset.form);
        });
    });

    if (formModal) {
        formModal.addEventListener("click", function (event) {
            if (event.target === formModal) {
                fecharFormulario();
            }
        });
    }


    /* =====================================================
       FORMULÁRIO DE CONTATO
       ===================================================== */

    const formContato = document.getElementById("formContato");

    if (formContato) {

        formContato.addEventListener("submit", function (e) {

            e.preventDefault();

            const nome =
                document.getElementById("nome")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const area =
                document.getElementById("area")?.value || "";

            const mensagem =
                document.getElementById("mensagem")?.value.trim() || "";


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
                "https://wa.me/" +
                NUMERO_CONTATO +
                "?text=" +
                encodeURIComponent(texto);


            window.open(link, "_blank");

            formContato.reset();
        });
    }


    /* =====================================================
       FORMULÁRIO DE PARCERIA
       ===================================================== */

    const formParceria = document.getElementById("formParceria");

    if (formParceria) {

        formParceria.addEventListener("submit", function (e) {

            e.preventDefault();

            const nome =
                document.getElementById("nome")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const cidade =
                document.getElementById("cidade")?.value.trim() || "";

            const area =
                document.getElementById("area")?.value || "";

            const mensagem =
                document.getElementById("mensagem")?.value.trim() || "";


            const texto =
                "Olá, gostaria de parceria jurídica.\n\n" +
                "Nome: " +
                nome +
                "\n" +
                "E-mail: " +
                email +
                "\n" +
                "Cidade/Estado: " +
                cidade +
                "\n" +
                "Área de Atuação: " +
                area +
                "\n\n" +
                "Experiência:\n" +
                mensagem;


            const link =
                "https://wa.me/" +
                NUMERO_PARCERIA +
                "?text=" +
                encodeURIComponent(texto);


            window.open(link, "_blank");

            formParceria.reset();
        });
    }


    /* =====================================================
       MODAL DE FOTOS DA EQUIPE
       ===================================================== */

    window.abrirModal = function (foto, nome, descricao) {

        const modal = document.getElementById("modal");
        const fotoModal = document.getElementById("fotoModal");
        const nomeModal = document.getElementById("nomeModal");
        const descricaoModal =
            document.getElementById("descricaoModal");


        if (!modal) return;


        if (fotoModal) {
            fotoModal.src = foto;
        }

        if (nomeModal) {
            nomeModal.textContent = nome;
        }

        if (descricaoModal) {
            descricaoModal.textContent = descricao;
        }


        modal.style.display = "flex";
    };


    window.fecharModal = function () {

        const modal = document.getElementById("modal");

        if (modal) {
            modal.style.display = "none";
        }
    };


    window.addEventListener("click", function (event) {

        const modal = document.getElementById("modal");

        if (modal && event.target === modal) {
            modal.style.display = "none";
        }
    });


    /* =====================================================
       CARROSSEL DA EQUIPE
       ===================================================== */

    const equipeCarousel = document.getElementById("equipeCarousel");

    if (equipeCarousel) {

        const equipe = equipeCarousel.querySelector(".equipe");
        const btnEquipeAnterior = document.querySelector(".equipe-btn-prev");
        const btnEquipeProximo = document.querySelector(".equipe-btn-next");

        if (equipe && btnEquipeAnterior && btnEquipeProximo) {

            const getEquipeScrollAmount = function () {

                const primeiroCard = equipe.querySelector(".card");

                if (!primeiroCard) {
                    return equipeCarousel.clientWidth * 0.85;
                }

                return primeiroCard.offsetWidth + 24;
            };

            btnEquipeAnterior.addEventListener("click", function () {
                equipeCarousel.scrollBy({
                    left: -getEquipeScrollAmount(),
                    behavior: "smooth"
                });
            });

            btnEquipeProximo.addEventListener("click", function () {
                equipeCarousel.scrollBy({
                    left: getEquipeScrollAmount(),
                    behavior: "smooth"
                });
            });
        }
    }


    /* =====================================================
       CARROSSEL — SOBRE O ESCRITÓRIO
       ===================================================== */

    const carousel = document.getElementById("grainyCarousel");

    if (carousel) {

        const imagens =
            carousel.querySelectorAll("img");

        const canvas =
            document.getElementById("grainCanvas");

        const btnAnterior =
            document.getElementById("carouselAnterior");

        const btnProximo =
            document.getElementById("carouselProximo");

        const indicadores =
            document.querySelectorAll(".carousel-indicator");


        let indiceAtual = 0;


        /* -------------------------------------------------
           MOSTRAR IMAGEM
           ------------------------------------------------- */

        function mostrarImagem(indice) {

            if (!imagens.length) return;


            indiceAtual =
                (indice + imagens.length) % imagens.length;


            imagens.forEach(function (imagem, i) {

                imagem.classList.toggle(
                    "active",
                    i === indiceAtual
                );

            });


            indicadores.forEach(function (indicador, i) {

                indicador.classList.toggle(
                    "active",
                    i === indiceAtual
                );

            });
        }


        /* -------------------------------------------------
           PRÓXIMA IMAGEM
           ------------------------------------------------- */

        function proximaImagem() {
            mostrarImagem(indiceAtual + 1);
        }


        /* -------------------------------------------------
           IMAGEM ANTERIOR
           ------------------------------------------------- */

        function imagemAnterior() {
            mostrarImagem(indiceAtual - 1);
        }


        /* -------------------------------------------------
           BOTÕES
           ------------------------------------------------- */

        if (btnProximo) {

            btnProximo.addEventListener(
                "click",
                proximaImagem
            );
        }


        if (btnAnterior) {

            btnAnterior.addEventListener(
                "click",
                imagemAnterior
            );
        }


        /* -------------------------------------------------
           INDICADORES
           ------------------------------------------------- */

        indicadores.forEach(function (indicador, i) {

            indicador.addEventListener(
                "click",
                function () {

                    mostrarImagem(i);

                }
            );

        });


        /* -------------------------------------------------
           SWIPE / ARRASTAR NO CELULAR
           ------------------------------------------------- */

        let inicioX = 0;
        let fimX = 0;


        carousel.addEventListener(
            "touchstart",
            function (event) {

                inicioX =
                    event.touches[0].clientX;

            },
            { passive: true }
        );


        carousel.addEventListener(
            "touchend",
            function (event) {

                fimX =
                    event.changedTouches[0].clientX;


                const distancia =
                    fimX - inicioX;


                if (Math.abs(distancia) < 50) {
                    return;
                }


                if (distancia < 0) {

                    proximaImagem();

                } else {

                    imagemAnterior();

                }

            },
            { passive: true }
        );


        /* -------------------------------------------------
           ARRASTAR COM MOUSE
           ------------------------------------------------- */

        let mouseInicio = 0;
        let arrastando = false;


        carousel.addEventListener(
            "mousedown",
            function (event) {

                arrastando = true;

                mouseInicio =
                    event.clientX;

                carousel.style.cursor = "grabbing";
            }
        );


        carousel.addEventListener(
            "mouseup",
            function (event) {

                if (!arrastando) return;

                arrastando = false;

                carousel.style.cursor = "grab";


                const distancia =
                    event.clientX - mouseInicio;


                if (Math.abs(distancia) < 50) {
                    return;
                }


                if (distancia < 0) {

                    proximaImagem();

                } else {

                    imagemAnterior();

                }
            }
        );


        carousel.addEventListener(
            "mouseleave",
            function () {

                arrastando = false;

                carousel.style.cursor = "grab";

            }
        );


        /* -------------------------------------------------
           TECLADO
           ------------------------------------------------- */

        carousel.setAttribute(
            "tabindex",
            "0"
        );


        carousel.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "ArrowRight") {

                    proximaImagem();

                }

                if (event.key === "ArrowLeft") {

                    imagemAnterior();

                }

            }
        );


        /* -------------------------------------------------
           AUTOPLAY
           ------------------------------------------------- */

        let autoplay =
            setInterval(
                proximaImagem,
                5000
            );


        carousel.addEventListener(
            "mouseenter",
            function () {

                clearInterval(autoplay);

            }
        );


        carousel.addEventListener(
            "mouseleave",
            function () {

                autoplay =
                    setInterval(
                        proximaImagem,
                        5000
                    );

            }
        );


        /* -------------------------------------------------
           EFEITO GRANULADO
           ------------------------------------------------- */

        if (canvas) {

            const contexto =
                canvas.getContext("2d");

            function ajustarCanvas() {

                canvas.width =
                    carousel.clientWidth;

                canvas.height =
                    carousel.clientHeight;
            }


            function gerarGrain() {

                if (!contexto) return;


                const largura = canvas.width;
                const altura = canvas.height;


                const imagem =
                    contexto.createImageData(
                        largura,
                        altura
                    );


                const dados =
                    imagem.data;


                for (
                    let i = 0;
                    i < dados.length;
                    i += 4
                ) {

                    const valor =
                        Math.random() * 255;


                    dados[i] = valor;
                    dados[i + 1] = valor;
                    dados[i + 2] = valor;
                    dados[i + 3] = 35;
                }


                contexto.putImageData(
                    imagem,
                    0,
                    0
                );


                requestAnimationFrame(
                    gerarGrain
                );
            }


            ajustarCanvas();


            window.addEventListener(
                "resize",
                ajustarCanvas
            );


            gerarGrain();
        }


        /* -------------------------------------------------
           ESTADO INICIAL
           ------------------------------------------------- */

        carousel.style.cursor = "grab";

        mostrarImagem(0);
    }

});
