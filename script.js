/* ============================================================
   IE-BattPlast — Main Script
   Trilingual (AR / EN / FR) + Carousel + Animations
   ============================================================ */

// ==================== TRANSLATIONS ====================
const translations = {
    ar: {
        logo_sub: "الشركة الإيطالية المصرية للصناعات البلاستيكية",
        nav_home: "الرئيسية",
        nav_products: "المنتجات",
        nav_about: "عن الشركة",
        nav_why: "لماذا نحن",
        nav_vision: "رؤيتنا",
        nav_contact: "تواصل معنا",

        hero_badge: "شريكك الموثوق في صناعة البلاستيك",
        hero_title_1: "الشركة الإيطالية المصرية",
        hero_title_2: "للصناعات البلاستيكية",
        hero_desc: "شركة رائدة متخصصة في تصنيع علب وأغطية بطاريات السيارات والدراجات النارية بجميع الأنواع والموديلات، بأعلى معايير الجودة العالمية.",
        hero_btn_products: "استكشف منتجاتنا",
        hero_btn_contact: "تواصل معنا",

        stat_founded: "سنة التأسيس",
        stat_experience: "سنوات الخبرة",
        stat_categories: "فئات منتجات",
        stat_quality: "معايير الجودة",

        products_tag: "ما نصنعه",
        products_title: "منتجاتنا",
        products_desc: "نقدم مجموعة شاملة من علب وأغطية البطاريات بمختلف الأنواع والمواصفات العالمية",
        product_jis: "أنواع JIS",
        product_jis_desc: "علب وأغطية بطاريات بالمعايير الصناعية اليابانية لسيارات الركاب",
        product_din: "أنواع DIN",
        product_din_desc: "علب وأغطية بطاريات بالمعايير الصناعية الألمانية للسيارات الأوروبية",
        product_truck: "أنواع الشاحنات",
        product_truck_desc: "علب وأغطية بطاريات مصممة خصيصاً للشاحنات والمركبات الثقيلة",
        product_moto: "أنواع الدراجات النارية",
        product_moto_desc: "علب وأغطية بطاريات مخصصة للدراجات النارية بجميع الأحجام",
        product_dakumar: "ماكينات حقن DAKUMAR",
        product_dakumar_desc: "وكلاء معتمدون لماكينات الحقن من مجموعة DAKUMAR العالمية",
        product_accessories: "إكسسوارات البطاريات",
        product_accessories_desc: "جميع المكونات البلاستيكية للبطاريات بما في ذلك العيون السحرية",
        product_details: "عرض التفاصيل",

        about_tag: "من نحن",
        about_title: "عن الشركة",
        about_badge_title: "وكيل معتمد",
        about_text_1: "شركة إيطالية مصرية رائدة متخصصة في تصنيع علب وأغطية بطاريات السيارات والدراجات النارية بجميع الأصناف والموديلات.",
        about_timeline_1_title: "التأسيس",
        about_timeline_1_desc: "تأسيس الشركة ووضع الخطط الاستراتيجية",
        about_timeline_2_title: "بداية الإنتاج",
        about_timeline_2_desc: "بدء العمليات الإنتاجية وإقامة شراكات مع جميع مصنعي البطاريات المحليين",
        about_timeline_3_title: "وكالة DAKUMAR",
        about_timeline_3_desc: "أصبحنا وكلاء معتمدين لمجموعة DAKUMAR العالمية لماكينات الحقن",

        why_tag: "مميزاتنا",
        why_title: "لماذا نحن",
        why_desc: "فريق متخصص بخبرة تتجاوز العشرين عاماً يقدم أعلى جودة وفقاً للمعايير العالمية بسرعة ودقة",
        why_card_1_title: "خبرة تتجاوز 21 عاماً",
        why_card_1_desc: "أكثر من 21 عاماً من الخبرة في مجال تصنيع بطاريات السيارات مع فريق محترف ومتخصص",
        why_card_2_title: "معايير جودة عالمية",
        why_card_2_desc: "نلتزم بأعلى معايير الجودة العالمية في جميع منتجاتنا مع الدقة والسرعة في التنفيذ",
        why_card_3_title: "تصنيع شامل",
        why_card_3_desc: "نصنع جميع المكونات البلاستيكية للبطاريات بما في ذلك العيون السحرية وجميع الملحقات",
        why_card_4_title: "قوالب عالمية المستوى",
        why_card_4_desc: "نستخدم قوالب حقن عالية الجودة من أفضل الشركات المصنعة العالمية",

        vision_tag: "نظرتنا المستقبلية",
        vision_title: "رؤيتنا وأهدافنا",
        vision_item_1_title: "منافسة عالمية",
        vision_item_1_desc: "إنتاج علب وأغطية بطاريات تنافس الشركات العالمية في الجودة والأداء",
        vision_item_2_title: "أعلى معايير الجودة",
        vision_item_2_desc: "الحفاظ على أعلى معايير الجودة لجميع العملاء بدون استثناء",
        vision_item_3_title: "التطوير المستمر",
        vision_item_3_desc: "دعم التطوير المستمر بما يتماشى مع تطور الصناعة وأحدث التقنيات",

        partners_tag: "شركاؤنا",
        partners_title: "شراكات موثوقة",
        partner_local: "مصنعو البطاريات المحليون",
        partner_mold: "شركات القوالب العالمية",

        contact_tag: "تواصل معنا",
        contact_title: "ابقَ على تواصل",
        contact_desc: "نحن هنا لمساعدتك. تواصل معنا للاستفسارات والطلبات",
        contact_address_label: "العنوان",
        contact_address: "الصالحية الجديدة - المنطقة الصناعية الثانية - القطعة 91&93 - محافظة الشرقية - مصر",
        contact_phone_label: "الهاتف",
        contact_sales_label: "المبيعات",
        contact_email_label: "البريد الإلكتروني",

        form_title: "أرسل رسالة",
        form_name: "الاسم الكامل",
        form_email: "البريد الإلكتروني",
        form_phone: "رقم الهاتف",
        form_subject: "الموضوع",
        form_message: "الرسالة",
        form_submit: "إرسال الرسالة",

        footer_desc: "شركة إيطالية مصرية رائدة في تصنيع علب وأغطية بطاريات السيارات والدراجات النارية.",
        footer_links: "روابط سريعة",
        footer_products: "المنتجات",
        footer_rights: "جميع الحقوق محفوظة."
    },

    en: {
        logo_sub: "Italian-Egyptian Plastic Industries Co.",
        nav_home: "Home",
        nav_products: "Products",
        nav_about: "About Us",
        nav_why: "Why Us",
        nav_vision: "Our Vision",
        nav_contact: "Contact Us",

        hero_badge: "Your Trusted Partner in Plastic Manufacturing",
        hero_title_1: "Italian-Egyptian Company",
        hero_title_2: "for Plastic Industries",
        hero_desc: "A leading company specializing in manufacturing car and motorcycle battery boxes and covers of all types and models, to the highest international quality standards.",
        hero_btn_products: "Explore Our Products",
        hero_btn_contact: "Contact Us",

        stat_founded: "Year Founded",
        stat_experience: "Years of Experience",
        stat_categories: "Product Categories",
        stat_quality: "Quality Standards",

        products_tag: "What We Manufacture",
        products_title: "Our Products",
        products_desc: "We offer a comprehensive range of battery boxes and covers in various types and international specifications",
        product_jis: "JIS Types",
        product_jis_desc: "Battery boxes and covers conforming to Japanese Industrial Standards for passenger vehicles",
        product_din: "DIN Types",
        product_din_desc: "Battery boxes and covers conforming to German Industrial Standards for European vehicles",
        product_truck: "Truck Types",
        product_truck_desc: "Battery boxes and covers specifically designed for trucks and heavy-duty vehicles",
        product_moto: "Motorcycle Types",
        product_moto_desc: "Battery boxes and covers designed for motorcycles of all sizes",
        product_dakumar: "DAKUMAR Injection Machines",
        product_dakumar_desc: "Authorized agents for injection machines from the global DAKUMAR Group",
        product_accessories: "Battery Accessories",
        product_accessories_desc: "All plastic battery components including magic eyes and all accessories",
        product_details: "View Details",

        about_tag: "Who We Are",
        about_title: "About the Company",
        about_badge_title: "Authorized Agent",
        about_text_1: "A leading Italian-Egyptian company specializing in manufacturing car and motorcycle battery boxes and covers of all varieties and models.",
        about_timeline_1_title: "Foundation",
        about_timeline_1_desc: "Company established and strategic plans laid out",
        about_timeline_2_title: "Production Launch",
        about_timeline_2_desc: "Operations commenced and partnerships established with all local battery manufacturers",
        about_timeline_3_title: "DAKUMAR Agency",
        about_timeline_3_desc: "Became authorized agents for the global DAKUMAR Group for injection machines",

        why_tag: "Our Advantages",
        why_title: "Why Choose Us",
        why_desc: "A specialized team with over 20 years of experience delivering the highest quality according to international standards with speed and precision",
        why_card_1_title: "Over 21 Years of Experience",
        why_card_1_desc: "More than 21 years of experience in automotive battery manufacturing with a professional, specialized team",
        why_card_2_title: "International Quality Standards",
        why_card_2_desc: "We adhere to the highest international quality standards across all our products with precision and speed",
        why_card_3_title: "Comprehensive Manufacturing",
        why_card_3_desc: "We manufacture all plastic battery components including magic eyes and all accessories",
        why_card_4_title: "World-Class Molds",
        why_card_4_desc: "We use high-quality injection molds from the world's premier manufacturers",

        vision_tag: "Our Future Outlook",
        vision_title: "Our Vision & Objectives",
        vision_item_1_title: "Global Competition",
        vision_item_1_desc: "Producing battery boxes and covers that compete with international companies in quality and performance",
        vision_item_2_title: "Highest Quality Standards",
        vision_item_2_desc: "Maintaining the highest quality standards for all clients without exception",
        vision_item_3_title: "Continuous Development",
        vision_item_3_desc: "Supporting continuous development aligned with manufacturing evolution and the latest technologies",

        partners_tag: "Our Partners",
        partners_title: "Trusted Partnerships",
        partner_local: "Local Battery Manufacturers",
        partner_mold: "Global Mold Companies",

        contact_tag: "Contact Us",
        contact_title: "Get in Touch",
        contact_desc: "We're here to help. Reach out to us for inquiries and orders",
        contact_address_label: "Address",
        contact_address: "Al-Salihia Al-Jadida - Second Industrial Zone - Plots 91&93 - Sharqia Governorate - Egypt",
        contact_phone_label: "Phone",
        contact_sales_label: "Sales",
        contact_email_label: "Email",

        form_title: "Send a Message",
        form_name: "Full Name",
        form_email: "Email Address",
        form_phone: "Phone Number",
        form_subject: "Subject",
        form_message: "Message",
        form_submit: "Send Message",

        footer_desc: "A leading Italian-Egyptian company in manufacturing car and motorcycle battery boxes and covers.",
        footer_links: "Quick Links",
        footer_products: "Products",
        footer_rights: "All rights reserved."
    },

    fr: {
        logo_sub: "Société Italo-Égyptienne des Industries Plastiques",
        nav_home: "Accueil",
        nav_products: "Produits",
        nav_about: "À Propos",
        nav_why: "Pourquoi Nous",
        nav_vision: "Notre Vision",
        nav_contact: "Contactez-Nous",

        hero_badge: "Votre Partenaire de Confiance en Industrie Plastique",
        hero_title_1: "Société Italo-Égyptienne",
        hero_title_2: "des Industries Plastiques",
        hero_desc: "Une société leader spécialisée dans la fabrication de boîtiers et couvercles de batteries pour voitures et motos de tous types et modèles, aux normes de qualité internationales les plus élevées.",
        hero_btn_products: "Découvrir Nos Produits",
        hero_btn_contact: "Contactez-Nous",

        stat_founded: "Année de Fondation",
        stat_experience: "Années d'Expérience",
        stat_categories: "Catégories de Produits",
        stat_quality: "Normes de Qualité",

        products_tag: "Ce Que Nous Fabriquons",
        products_title: "Nos Produits",
        products_desc: "Nous proposons une gamme complète de boîtiers et couvercles de batteries selon diverses spécifications internationales",
        product_jis: "Types JIS",
        product_jis_desc: "Boîtiers et couvercles de batteries conformes aux normes industrielles japonaises pour véhicules de tourisme",
        product_din: "Types DIN",
        product_din_desc: "Boîtiers et couvercles de batteries conformes aux normes industrielles allemandes pour véhicules européens",
        product_truck: "Types Camions",
        product_truck_desc: "Boîtiers et couvercles de batteries spécialement conçus pour camions et véhicules lourds",
        product_moto: "Types Motos",
        product_moto_desc: "Boîtiers et couvercles de batteries conçus pour motos de toutes tailles",
        product_dakumar: "Machines d'Injection DAKUMAR",
        product_dakumar_desc: "Agents agréés pour les machines d'injection du groupe mondial DAKUMAR",
        product_accessories: "Accessoires de Batteries",
        product_accessories_desc: "Tous les composants plastiques de batteries, y compris les yeux magiques et tous les accessoires",
        product_details: "Voir les Détails",

        about_tag: "Qui Sommes-Nous",
        about_title: "À Propos de la Société",
        about_badge_title: "Agent Agréé",
        about_text_1: "Une société italo-égyptienne leader spécialisée dans la fabrication de boîtiers et couvercles de batteries pour voitures et motos de toutes variétés et modèles.",
        about_timeline_1_title: "Fondation",
        about_timeline_1_desc: "Création de la société et élaboration des plans stratégiques",
        about_timeline_2_title: "Lancement de la Production",
        about_timeline_2_desc: "Début des opérations et établissement de partenariats avec tous les fabricants locaux de batteries",
        about_timeline_3_title: "Agence DAKUMAR",
        about_timeline_3_desc: "Devenus agents agréés du groupe mondial DAKUMAR pour les machines d'injection",

        why_tag: "Nos Avantages",
        why_title: "Pourquoi Nous Choisir",
        why_desc: "Une équipe spécialisée avec plus de 20 ans d'expérience offrant la plus haute qualité selon les normes internationales avec rapidité et précision",
        why_card_1_title: "Plus de 21 Ans d'Expérience",
        why_card_1_desc: "Plus de 21 ans d'expérience dans la fabrication de batteries automobiles avec une équipe professionnelle et spécialisée",
        why_card_2_title: "Normes de Qualité Internationales",
        why_card_2_desc: "Nous respectons les normes de qualité internationales les plus élevées dans tous nos produits avec précision et rapidité",
        why_card_3_title: "Fabrication Complète",
        why_card_3_desc: "Nous fabriquons tous les composants plastiques des batteries, y compris les yeux magiques et tous les accessoires",
        why_card_4_title: "Moules de Classe Mondiale",
        why_card_4_desc: "Nous utilisons des moules d'injection de haute qualité provenant des meilleurs fabricants mondiaux",

        vision_tag: "Notre Perspective d'Avenir",
        vision_title: "Notre Vision et Objectifs",
        vision_item_1_title: "Compétitivité Mondiale",
        vision_item_1_desc: "Produire des boîtiers et couvercles de batteries compétitifs face aux entreprises internationales en qualité et performance",
        vision_item_2_title: "Les Plus Hautes Normes de Qualité",
        vision_item_2_desc: "Maintenir les plus hautes normes de qualité pour tous les clients sans exception",
        vision_item_3_title: "Développement Continu",
        vision_item_3_desc: "Soutenir le développement continu en phase avec l'évolution de l'industrie et les dernières technologies",

        partners_tag: "Nos Partenaires",
        partners_title: "Partenariats de Confiance",
        partner_local: "Fabricants Locaux de Batteries",
        partner_mold: "Sociétés Mondiales de Moules",

        contact_tag: "Contactez-Nous",
        contact_title: "Restez en Contact",
        contact_desc: "Nous sommes là pour vous aider. Contactez-nous pour vos demandes et commandes",
        contact_address_label: "Adresse",
        contact_address: "Al-Salihia Al-Jadida - Deuxième Zone Industrielle - Parcelles 91&93 - Gouvernorat de Sharqia - Égypte",
        contact_phone_label: "Téléphone",
        contact_sales_label: "Ventes",
        contact_email_label: "E-mail",

        form_title: "Envoyer un Message",
        form_name: "Nom Complet",
        form_email: "Adresse E-mail",
        form_phone: "Numéro de Téléphone",
        form_subject: "Objet",
        form_message: "Message",
        form_submit: "Envoyer le Message",

        footer_desc: "Une société italo-égyptienne leader dans la fabrication de boîtiers et couvercles de batteries pour voitures et motos.",
        footer_links: "Liens Rapides",
        footer_products: "Produits",
        footer_rights: "Tous droits réservés."
    }
};

// ==================== LANGUAGE SYSTEM ====================
const langNames = { ar: "العربية", en: "English", fr: "Français" };

function setLanguage(lang) {
    const html = document.documentElement;
    const isRTL = lang === "ar";

    html.setAttribute("lang", lang);
    html.setAttribute("dir", isRTL ? "rtl" : "ltr");

    // Update all translatable elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update lang switcher button text
    document.getElementById("currentLang").textContent = langNames[lang];

    // Update active state in dropdown
    document.querySelectorAll(".lang-option").forEach(opt => {
        opt.classList.toggle("active", opt.dataset.lang === lang);
    });

    // Save preference
    localStorage.setItem("ie-battplast-lang", lang);

    // Close dropdown
    document.getElementById("langSwitcher").classList.remove("open");
}

// ==================== DOM READY ====================
document.addEventListener("DOMContentLoaded", () => {

    // ---------- Footer year ----------
    const yearEl = document.getElementById("footerYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // ---------- Language switcher ----------
    const langSwitcher = document.getElementById("langSwitcher");
    const langBtn = document.getElementById("langBtn");

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle("open");
    });

    document.querySelectorAll(".lang-option").forEach(opt => {
        opt.addEventListener("click", () => {
            setLanguage(opt.dataset.lang);
        });
    });

    document.addEventListener("click", (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove("open");
        }
    });

    // Restore saved language
    const savedLang = localStorage.getItem("ie-battplast-lang");
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    }

    // ---------- Navbar scroll ----------
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);

        // Back to top
        const backToTop = document.getElementById("backToTop");
        if (backToTop) {
            backToTop.classList.toggle("visible", window.scrollY > 400);
        }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ---------- Active nav link on scroll ----------
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar__link");

    const observerNav = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }, { rootMargin: "-40% 0px -60% 0px" });

    sections.forEach(section => observerNav.observe(section));

    // ---------- Mobile menu ----------
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll(".navbar__link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("open");
        });
    });

    // ---------- Back to top ----------
    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ---------- Reveal on scroll ----------
    const revealElements = document.querySelectorAll(".reveal");
    const observerReveal = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = parseInt(entry.target.dataset.delay || 0);
                setTimeout(() => {
                    entry.target.classList.add("revealed");
                }, delay);
                observerReveal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(el => observerReveal.observe(el));

    // ---------- Counter animation ----------
    const counters = document.querySelectorAll("[data-count]");
    const observerCount = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const duration = 2000;
                const start = performance.now();

                const animate = (now) => {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.round(target * eased);
                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    }
                };
                requestAnimationFrame(animate);
                observerCount.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observerCount.observe(c));

    // ---------- Hero carousel ----------
    const slides = document.querySelectorAll(".hero__slide");
    const dots = document.querySelectorAll(".carousel-dot");
    let currentSlide = 0;
    let carouselInterval;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        currentSlide = index;
        slides[currentSlide].classList.add("active");
        dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startCarousel() {
        carouselInterval = setInterval(nextSlide, 4000);
    }

    if (slides.length > 0) {
        dots.forEach(dot => {
            dot.addEventListener("click", () => {
                clearInterval(carouselInterval);
                goToSlide(parseInt(dot.dataset.slide));
                startCarousel();
            });
        });
        startCarousel();
    }

    // ---------- Smooth scroll for anchor links ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({ top: offsetTop, behavior: "smooth" });
            }
        });
    });

    // ---------- Contact form ----------
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector("button[type='submit'] span");
            const originalText = btn.textContent;
            btn.textContent = "✓";
            setTimeout(() => {
                btn.textContent = originalText;
                contactForm.reset();
            }, 2000);
        });
    }

    // ---------- Hero particles ----------
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer) {
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement("div");
            particle.className = "particle";
            const size = Math.random() * 4 + 1;
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255,255,255,${Math.random() * 0.15 + 0.05});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particle-float ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: ${Math.random() * -20}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }
});

// Particle float animation
const particleStyle = document.createElement("style");
particleStyle.textContent = `
@keyframes particle-float {
    0% { transform: translateY(0) translateX(0); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(-100vh) translateX(30px); opacity: 0; }
}
`;
document.head.appendChild(particleStyle);
