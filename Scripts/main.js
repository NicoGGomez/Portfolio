/* =====================================================
   FORMULARIO DE CONTACTO
===================================================== */

const contactForm =
    document.getElementById("contact-form");

const contactStatus =
    document.getElementById("contact-status");

const contactSubmit =
    document.querySelector(".contact__submit");


/* Inicializar EmailJS */

emailjs.init({
    publicKey: "Z1zZWU8mOaSMKb943"
});


/* Enviar formulario */

contactForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        contactSubmit.disabled = true;

        contactSubmit.textContent =
            "Enviando...";

        contactStatus.textContent = "";


        try {

            await emailjs.sendForm(
                "service_drnlt58",
                "template_hyikbu1",
                contactForm
            );


            contactStatus.textContent =
                "¡Mensaje enviado correctamente!";

            contactStatus.style.color =
                "#16803c";


            contactForm.reset();


        } catch (error) {

            console.error(
                "Error al enviar el mensaje:",
                error
            );


            contactStatus.textContent =
                "No se pudo enviar el mensaje. Intentá nuevamente.";

            contactStatus.style.color =
                "#b42318";


        } finally {

            contactSubmit.disabled = false;

            contactSubmit.textContent =
                "Enviar mensaje ↗";

        }

    }
);



/* =====================================================
   MODAL DE PROYECTOS
===================================================== */

const projectCards = document.querySelectorAll(".project-card");

const projectModal = document.getElementById("project-modal");

const projectModalBackground = document.querySelector(
    ".project-modal__background"
);

const projectModalClose = document.getElementById(
    "project-modal-close"
);

const projectVideo = document.getElementById("project-video");

const projectVideoSource = document.getElementById(
    "project-video-source"
);

const modalProjectCategory = document.getElementById(
    "modal-project-category"
);

const modalProjectTitle = document.getElementById(
    "modal-project-title"
);

const modalProjectDescription = document.getElementById(
    "modal-project-description"
);

const modalProjectTechnologies = document.getElementById(
    "modal-project-technologies"
);

const modalProjectDemo = document.getElementById(
    "modal-project-demo"
);

const modalProjectGithub = document.getElementById(
    "modal-project-github"
);

const projectModalVideo = document.querySelector(
    ".project-modal__video"
);

const projectModalImage = document.getElementById(
    "project-modal-image"
);

/* =====================================================
   INFORMACIÓN DE LOS PROYECTOS
===================================================== */

const projects = {

    /* =================================================
       VIBE
    ================================================= */

    vibe: {

        category: "E-commerce Full Stack",

        title: "Vibe",

        image: "./Assets/imgs/proyectos/foto10.png",

        description:
            "Desarrollé Vibe, una plataforma web de comercio electrónico " +
            "enfocada en la venta de productos de tecnología, accesorios " +
            "y moda. La aplicación permite explorar un catálogo dinámico, " +
            "filtrar productos, visualizar información detallada y gestionar " +
            "un carrito de compras. También implementé un panel de " +
            "administración para gestionar productos y categorías. " +
            "El proyecto integra frontend, backend, base de datos, " +
            "autenticación mediante JWT e integración con Mercado Pago.",

        technologies: [
            "JavaScript",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Supabase",
            "JWT",
            "Mercado Pago"
        ],

        video: "https://player.cloudinary.com/embed/?cloud_name=dyhfcnn0&public_id=Video-Vibe",

        demo: "https://vibetandil.netlify.app/",

        github: "https://github.com/NicoGGomez/vibe"
    },


    /* =================================================
       GALAXY GAMES
    ================================================= */

    "galaxy-games": {

        category: "Proyecto web interactivo",

        title: "Galaxy Games",

        image: "./Assets/imgs/proyectos/foto5.png",

        description:
            "Desarrollé Galaxy Games, una plataforma web orientada al " +
            "entretenimiento interactivo. Además del sitio principal, " +
            "implementé distintos juegos utilizando Canvas, incorporando " +
            "lógica de animación, detección de colisiones y control de " +
            "eventos en tiempo real. El proyecto combina JavaScript, HTML " +
            "y CSS para crear una experiencia dinámica y accesible.",

        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "Canvas"
        ],

        video: "",

        demo: "https://nicoggomez.github.io/TPE-INTERFACES/Segunda-entrega/index.html",

        github: "https://github.com/NicoGGomez/TPE-INTERFACES"
    },


    /* =================================================
       EDUBOT
    ================================================= */

    edubot: {

        category: "Inteligencia Artificial",

        title: "EduBot",

        image: "./Assets/imgs/proyectos/foto9.png",

        description:
            "Desarrollé EduBot, un asistente educativo inteligente para " +
            "Telegram orientado a estudiantes de nivel primario. La " +
            "aplicación combina procesamiento de lenguaje natural, análisis " +
            "de imágenes, reconocimiento de voz y análisis de sentimientos " +
            "para brindar apoyo educativo personalizado. El proyecto utiliza " +
            "modelos de inteligencia artificial de Groq y Hugging Face " +
            "junto con la API de Telegram.",

        technologies: [
            "Python",
            "Groq",
            "Hugging Face",
            "Telegram API",
            "NLP",
            "IA"
        ],

        video: null,

        demo: "https://github.com/NicoGGomez/EduBot",

        github: "https://github.com/NicoGGomez/EduBot"
    },


    /* =================================================
       QUIZ CHICAS PROGRAMADORAS
    ================================================= */

    "quiz-chicas": {

        category: "Proyecto educativo",

        title: "Quiz Chicas Programadoras",

        image: "./Assets/imgs/proyectos/foto7.png",

        description:
            "Diseñé un quiz interactivo orientado a chicas interesadas " +
            "en programación. La aplicación guía al usuario mediante una " +
            "serie de preguntas dinámicas y analiza sus respuestas para " +
            "sugerir cursos y caminos de aprendizaje. Se aplicaron " +
            "principios de UX/UI para crear una experiencia clara, " +
            "inclusiva y atractiva.",

        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
            "UX/UI"
        ],

        video: null,

        demo: "https://clubchicasprogramadorasquiz.netlify.app/",

        github: "https://github.com/NicoGGomez/ChicasProgramadorasForm"
    },


    /* =================================================
       NOPROC
    ================================================= */

    noproc: {

        category: "Agente web",

        title: "NoProc",

        image: "./Assets/imgs/proyectos/foto8.png",

        description:
            "Creé NoProc, un agente web interactivo enfocado en combatir " +
            "la procrastinación mediante una experiencia conversacional " +
            "guiada por voz. La aplicación utiliza audios generados " +
            "dinámicamente para acompañar al usuario paso a paso. " +
            "La solución combina un frontend desarrollado en JavaScript " +
            "con un backend en Node.js para la generación de audio.",

        technologies: [
            "Node.js",
            "JavaScript",
            "CSS",
            "API",
            "Audio"
        ],

        video: null,

        demo: "https://noproc.netlify.app/",

        github: "https://github.com/NicoGGomez/NoProc"
    },


    /* =================================================
       BUSCADOR DE PELÍCULAS
    ================================================= */

    peliculas: {

        category: "Frontend",

        title: "Buscador de películas",

        image: "./Assets/imgs/proyectos/foto6.png",

        description:
            "Realicé un buscador de películas utilizando React. La " +
            "aplicación consume una API externa para obtener información " +
            "actualizada y permite realizar búsquedas dinámicas. " +
            "Implementé manejo de estados, solicitudes asincrónicas y " +
            "componentes reutilizables para organizar la lógica y la interfaz.",

        technologies: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "API"
        ],

        video: null,

        demo: "#",

        github: "#"
    },


    /* =================================================
       LÚPULO LIBRE
    ================================================= */

    "lupulo-libre": {

        category: "Aplicación web",

        title: "Lúpulo Libre",

        image: "./Assets/imgs/proyectos/foto4.png",

        description:
            "Desarrollé Lúpulo Libre, una aplicación web interactiva " +
            "centrada en la gestión y exploración de cervezas artesanales. " +
            "Aplicamos principios de UX/UI para ofrecer una navegación " +
            "clara, intuitiva y visualmente atractiva. La aplicación " +
            "incluye una vista general del catálogo, formularios de contacto " +
            "y un panel exclusivo para administradores.",

        technologies: [
            "Angular",
            "TypeScript",
            "CSS",
            "UX/UI"
        ],

        video: null,

        demo: "https://github.com/NicoGGomez/Lupulo-Libre",

        github: "https://github.com/NicoGGomez/Lupulo-Libre"
    },


    /* =================================================
       NUMBER BLOCKS
    ================================================= */

    "number-blocks": {

        category: "UX/UI · Educación",

        title: "Number Blocks",

        image: "./Assets/imgs/proyectos/foto2.png",

        description:
            "Diseñamos una interfaz interactiva basada en los personajes " +
            "de Numberblocks, enfocada en mejorar la experiencia digital " +
            "de niños en edad preescolar. Aplicamos principios de UX para " +
            "lograr una navegación simple, visual y accesible, combinando " +
            "diseño, tecnología y educación.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "UX/UI"
        ],

        video: null,

        demo: "https://github.com/NicoGGomez/INTERFACES-2024",

        github: "https://github.com/NicoGGomez/INTERFACES-2024"
    },


    /* =================================================
       TO DO LIST
    ================================================= */

    "todo-list": {

        category: "Full Stack",

        title: "To Do List",

        image: "./Assets/imgs/proyectos/foto1.png",

        description:
            "Desarrollé una aplicación web de To Do List con sistema de " +
            "registro e inicio de sesión. Implementé una base de datos " +
            "relacional para almacenar tareas vinculadas a usuarios " +
            "registrados, asegurando una gestión individualizada. " +
            "El proyecto combina desarrollo backend y frontend para crear " +
            "una herramienta práctica y funcional.",

        technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS"
        ],

        video: null,

        demo: "https://github.com/NicoGGomez/To-doList",

        github: "https://github.com/NicoGGomez/To-doList"
    },


    /* =================================================
       HAND SERVO MOTOR
    ================================================= */

    "hand-servo": {

        category: "Computer Vision · IoT",

        title: "Hand Servo Motor",

        image: "./Assets/imgs/proyectos/foto3.png",

        description:
            "Desarrollamos un sistema interactivo utilizando visión por " +
            "computadora con OpenCV y Python. El sistema detecta gestos " +
            "de la mano mediante una cámara web y los utiliza para controlar " +
            "un servomotor en tiempo real. También permite generar respuestas " +
            "dinámicas, mejorando la interacción entre el usuario y el sistema.",

        technologies: [
            "Python",
            "OpenCV",
            "Arduino",
            "Computer Vision"
        ],

        video: null,

        demo: "https://github.com/NicoGGomez/HandServoControl-",

        github: "https://github.com/NicoGGomez/HandServoControl-"
    }

};


/* =====================================================
   ABRIR MODAL
===================================================== */

function openProjectModal(projectId) {

    const project = projects[projectId];

    if (!project) {

        console.error(
            `No existe información para el proyecto: ${projectId}`
        );

        return;
    }


    /* Información */

    modalProjectCategory.textContent =
        project.category;

    modalProjectTitle.textContent =
        project.title;

    modalProjectDescription.textContent =
        project.description;


    /* Tecnologías */

    modalProjectTechnologies.innerHTML = "";

    project.technologies.forEach(technology => {

        const span = document.createElement("span");

        span.textContent = technology;

        modalProjectTechnologies.appendChild(span);

    });


    /* =================================================
    VIDEO / IMAGEN
    ================================================= */

    if (project.video) {

        // Hay video → mostrar video
        projectModalVideo.style.display = "block";

        projectVideo.style.display = "block";
        projectModalImage.style.display = "none";

        projectVideo.pause();

        projectVideoSource.src = project.video;

        projectVideo.load();

    } else {

        // No hay video → mostrar imagen del proyecto
        projectVideo.pause();

        projectVideoSource.src = "";

        projectVideo.load();

        projectVideo.style.display = "none";

        projectModalImage.src = project.image;
        projectModalImage.alt = project.title;
        projectModalImage.style.display = "block";

        projectModalVideo.style.display = "block";
    }


    /* =================================================
       LINKS
    ================================================= */

    if (project.demo && project.demo !== "#") {

        modalProjectDemo.href = project.demo;

        modalProjectDemo.style.display = "inline-block";

    } else {

        modalProjectDemo.removeAttribute("href");

        modalProjectDemo.style.display = "none";

    }


    if (project.github && project.github !== "#") {

        modalProjectGithub.href = project.github;

        modalProjectGithub.style.display = "inline-block";

    } else {

        modalProjectGithub.removeAttribute("href");

        modalProjectGithub.style.display = "none";

    }


    /* =================================================
       MOSTRAR MODAL
    ================================================= */

    projectModal.classList.add("active");

    projectModal.setAttribute(
        "aria-hidden",
        "false"
    );


    /* Evitar scroll del body */

    document.body.style.overflow = "hidden";


    /* Intentar reproducir video */

    if (project.video) {

        projectVideo
            .play()
            .catch(() => {

                /*
                    Algunos navegadores pueden bloquear
                    la reproducción automática.
                    El usuario podrá iniciarla manualmente.
                */

            });

    }

}


/* =====================================================
   CERRAR MODAL
===================================================== */

function closeProjectModal() {

    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";


    /* Detener video */

    projectVideo.pause();

    projectVideo.currentTime = 0;

    projectVideoSource.src = "";

    projectVideo.load();

}

/* =====================================================
   BOTÓN CERRAR
===================================================== */

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


/* =====================================================
   CLICK EN EL FONDO
===================================================== */

projectModalBackground.addEventListener(
    "click",
    closeProjectModal
);


/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);


/* =====================================================
   CLICK EN LAS CARDS
===================================================== */

projectCards.forEach(card => {

    card.addEventListener("click", () => {

        const projectId =
            card.dataset.project;

        openProjectModal(projectId);

    });


    /* Accesibilidad: Enter / Space */

    card.addEventListener("keydown", event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            const projectId =
                card.dataset.project;

            openProjectModal(projectId);

        }

    });

});


/* =====================================================
   BOTÓN CERRAR
===================================================== */

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


/* =====================================================
   CLICK EN EL FONDO
===================================================== */

projectModalBackground.addEventListener(
    "click",
    closeProjectModal
);


/* =====================================================
   ESCAPE
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

    }
);





/* =====================================================
   ESCENA 3D: CÓDIGO LATERAL + PROFUNDIDAD + SCROLL
===================================================== */

(() => {
    const escena = document.querySelector(".portfolio-scene");

    if (!escena) {
        console.warn("No se encontró .portfolio-scene en el HTML");
        return;
    }

    // Evitar duplicar elementos si el script se inicializa otra vez
    escena.querySelectorAll(".scene-code-generated").forEach(el => el.remove());

    const fragmentos = [
        "const app = createApp();",
        "function render() { ... }",
        "npm run dev",
        "import React from 'react';",
        "GET /api/projects",
        "const response = await fetch(url);",
        "return data.map(item => item);",
        "class Component extends HTMLElement",
        "git commit -m 'update'",
        "SELECT * FROM projects;",
        "if (isLoading) return;",
        "export default Portfolio;",
        "const [state, setState] = useState();",
        "app.listen(PORT);",
        "async function fetchData() {",
        "0101 1100 1010",
        "display: grid;",
        "border-radius: 12px;",
        "POST /api/contact",
        "while (isRunning) { ... }",
        "const result = await query();",
        "useEffect(() => {}, []);",
        "interface Project { ... }",
        "return <Portfolio />;",
        "npm install",
        "git push origin main",
        "const server = express();",
        "response.status(200).json(data);",
        "animation: transform 0.3s;",
        "SELECT id, title FROM projects;"
    ];

    const colores = [
        "rgba(124, 58, 237, .42)",
        "rgba(17, 17, 17, .30)",
        "rgba(79, 70, 229, .38)",
        "rgba(100, 100, 100, .30)"
    ];

    let elementos = [];
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    function crearEscena() {
        // Limpiar únicamente los elementos generados
        escena.querySelectorAll(".scene-code-generated").forEach(el => el.remove());
        elementos = [];

        // Extender la escena a toda la página
        const contenido = document.querySelector("main");
        const altoPagina = contenido.getBoundingClientRect().bottom + window.scrollY;

        escena.style.height = `${altoPagina}px`;
        const cantidad = Math.max(30, Math.ceil(altoPagina / 115));

        for (let i = 0; i < cantidad; i++) {
            const codigo = document.createElement("div");
            codigo.className = "scene-code scene-code-generated";

            codigo.textContent = fragmentos[i % fragmentos.length];

            const izquierda = i % 2 === 0;
            const profundidad = 0.35 + (i % 5) * 0.18;

            codigo.style.top = `${80 + i * (altoPagina - 160) / cantidad}px`;
            codigo.style.left = izquierda ? `${1 + (i % 3) * 1.4}vw` : "auto";
            codigo.style.right = izquierda ? "auto" : `${1 + (i % 3) * 1.4}vw`;
            codigo.style.fontSize = `${9 + (i % 4) * 2}px`;
            codigo.style.color = colores[i % colores.length];
            codigo.style.opacity = `${0.45 + (i % 4) * 0.12}`;
            codigo.style.setProperty("--depth", profundidad);
            codigo.style.setProperty("--offset", `${(i % 5 - 2) * 8}px`);

            // Cada línea aparece progresivamente al acercarse al scroll
            codigo.style.opacity = "0";
            codigo.style.transform = "translateY(12px)";

            escena.appendChild(codigo);
            elementos.push(codigo);
        }

        actualizarVisibilidad();
    }

    function actualizarVisibilidad() {
        const scroll = window.scrollY;
        const altoVentana = window.innerHeight;

        elementos.forEach((elemento, i) => {
            const top = parseFloat(elemento.style.top);
            const distancia = top - (scroll + altoVentana * 0.75);
            const visible = distancia < 0;

            if (visible) {
                elemento.classList.add("scene-code-visible");
            } else {
                elemento.classList.remove("scene-code-visible");
            }
        });
    }

    window.addEventListener("mousemove", event => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    });

    function animar() {
        currentX += (mouseX - currentX) * 0.035;
        currentY += (mouseY - currentY) * 0.035;

        elementos.forEach(elemento => {
            const profundidad = Number(elemento.style.getPropertyValue("--depth")) || 1;
            const offset = elemento.style.getPropertyValue("--offset") || "0px";

            elemento.style.setProperty("--mouse-x", `${currentX * 12 * profundidad}px`);
            elemento.style.setProperty("--mouse-y", `${currentY * 8 * profundidad}px`);
            elemento.style.setProperty("--scroll-offset", offset);
        });

        requestAnimationFrame(animar);
    }

    let esperandoScroll = false;

    window.addEventListener("scroll", () => {
        if (esperandoScroll) return;

        esperandoScroll = true;

        requestAnimationFrame(() => {
            actualizarVisibilidad();
            esperandoScroll = false;
        });
    }, { passive: true });

    window.addEventListener("resize", crearEscena);

    crearEscena();
    animar();
})();





// ===== SCROLLBAR PERSONALIZADA =====

(() => {
    const barra = document.createElement("div");
    barra.className = "custom-scrollbar";

    const indicador = document.createElement("div");
    indicador.className = "custom-scrollbar-thumb";

    barra.appendChild(indicador);
    document.body.appendChild(barra);

    function actualizarBarra() {
        const altoVentana = window.innerHeight;
        const altoDocumento = document.documentElement.scrollHeight;
        const scrollActual = window.scrollY;

        const proporcion = altoVentana / altoDocumento;
        const altoIndicador = Math.max(
            45,
            altoVentana * Math.min(1, proporcion)
        );

        const maxScroll = altoDocumento - altoVentana;
        const maxTop = altoVentana - altoIndicador;

        indicador.style.height = `${altoIndicador}px`;
        indicador.style.top = `${
            maxScroll > 0
                ? (scrollActual / maxScroll) * maxTop
                : 0
        }px`;

        barra.style.display =
            altoDocumento > altoVentana ? "block" : "none";
    }

    window.addEventListener("scroll", actualizarBarra, {
        passive: true
    });

    window.addEventListener("resize", actualizarBarra);

    // Permite arrastrar el indicador
    let arrastrando = false;
    let inicioY = 0;
    let inicioTop = 0;

    indicador.addEventListener("pointerdown", (e) => {
        arrastrando = true;
        inicioY = e.clientY;
        inicioTop = indicador.offsetTop;

        indicador.setPointerCapture(e.pointerId);
        e.preventDefault();
    });

    indicador.addEventListener("pointermove", (e) => {
        if (!arrastrando) return;

        const altoVentana = window.innerHeight;
        const altoDocumento = document.documentElement.scrollHeight;
        const altoIndicador = indicador.offsetHeight;
        const maxTop = altoVentana - altoIndicador;
        const maxScroll = altoDocumento - altoVentana;

        const nuevoTop = Math.max(
            0,
            Math.min(maxTop, inicioTop + e.clientY - inicioY)
        );

        window.scrollTo(
            0,
            maxTop > 0 ? (nuevoTop / maxTop) * maxScroll : 0
        );
    });

    indicador.addEventListener("pointerup", () => {
        arrastrando = false;
    });

    indicador.addEventListener("pointercancel", () => {
        arrastrando = false;
    });

    actualizarBarra();
})();


/* ===== SCROLLBAR PERSONALIZADA DEL MODAL ===== */

(() => {
    const modal = document.querySelector(".project-modal");
    const contenido = document.querySelector(".project-modal__content");

    if (!modal || !contenido) return;

    const barra = document.createElement("div");
    barra.className = "modal-custom-scrollbar";

    const thumb = document.createElement("div");
    thumb.className = "modal-custom-scrollbar__thumb";

    barra.appendChild(thumb);
    document.body.appendChild(barra);

    let arrastrando = false;
    let inicioY = 0;
    let inicioTop = 0;

    function actualizar() {
        const rect = contenido.getBoundingClientRect();
        const altoContenido = contenido.scrollHeight;
        const altoVisible = contenido.clientHeight;

        const modalAbierto = modal.classList.contains("active");
        const necesitaScroll = altoContenido > altoVisible + 1;

        barra.style.top = `${rect.top}px`;
        barra.style.left = `${rect.right - 22}px`;
        barra.style.height = `${rect.height}px`;

        barra.classList.toggle(
            "visible",
            modalAbierto && necesitaScroll
        );

        if (!necesitaScroll) return;

        const altoThumb = Math.max(
            45,
            altoVisible * (altoVisible / altoContenido)
        );

        const maxTop = altoVisible - altoThumb;
        const maxScroll = altoContenido - altoVisible;

        thumb.style.height = `${altoThumb}px`;
        thumb.style.top = `${
            maxScroll > 0
                ? (contenido.scrollTop / maxScroll) * maxTop
                : 0
        }px`;
    }

    contenido.addEventListener("scroll", actualizar, {
        passive: true
    });

    window.addEventListener("resize", actualizar);

    const observer = new MutationObserver(actualizar);
    observer.observe(modal, {
        attributes: true,
        attributeFilter: ["class"]
    });

    thumb.addEventListener("pointerdown", (e) => {
        arrastrando = true;
        inicioY = e.clientY;
        inicioTop = thumb.offsetTop;

        barra.classList.add("dragging");
        thumb.setPointerCapture(e.pointerId);

        e.preventDefault();
    });

    thumb.addEventListener("pointermove", (e) => {
        if (!arrastrando) return;

        const maxTop = barra.clientHeight - thumb.offsetHeight;
        const maxScroll =
            contenido.scrollHeight - contenido.clientHeight;

        const nuevoTop = Math.max(
            0,
            Math.min(
                maxTop,
                inicioTop + e.clientY - inicioY
            )
        );

        contenido.scrollTop =
            maxTop > 0
                ? (nuevoTop / maxTop) * maxScroll
                : 0;
    });

    function finalizarArrastre() {
        arrastrando = false;
        barra.classList.remove("dragging");
    }

    thumb.addEventListener("pointerup", finalizarArrastre);
    thumb.addEventListener("pointercancel", finalizarArrastre);

    actualizar();
})();
