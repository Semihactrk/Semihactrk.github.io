// ===== Site geneli çeviriler =====
// applyLanguage() bu objedeki anahtarları [data-i18n] öğelerine textContent
// olarak; [data-i18n-aria] öğelerine ise aria-label olarak yazar.
const translations = {
  tr: {
    title: `Semiha Çıtırkı — Portfolyo`,
    metaDescription: `Semiha Çıtırkı'nın kişisel portfolyo sitesi.`,

    navAbout: `Hakkımda`,
    navSkills: `Yetenekler`,
    navProjects: `Projeler`,
    navContact: `İletişim`,

    heroPretitle: `Merhaba, ben`,
    heroSlogan: `Fikirleri koda dönüştürüyorum.`,
    heroDesc: `Yapay zeka ve modern yazılım mimarilerine odaklanan bir yazılım mühendisi adayıyım.`,
    heroBtn: `Projelerimi Gör`,

    aboutTitle: `Hakkımda`,
    aboutP1: `Yapay zeka teknolojileri ve modern yazılım mimarilerine tutkuyla bağlı, teorik bilgisini ölçeklenebilir ve yenilikçi çözümlere dönüştürmeyi hedefleyen bir yazılım mühendisi adayıyım.`,
    aboutP2: `Makine öğrenmesi, bilgisayarla görü ve doğal dil işleme gibi güncel teknolojileri yakından takip ediyor; bu yaklaşımları uçtan uca çalışan, sağlam yazılım ürünlerine entegre etmeye odaklanıyorum. Takım çalışmasına yatkınlığım ve analitik düşünme yapımla, dinamik teknoloji ekiplerinde değer yaratmayı amaçlıyorum.`,

    skillsTitle: `Yetenekler`,
    skillCV: `Bilgisayarlı Görü (YOLO)`,

    projectsTitle: `Projeler`,
    githubLinkLabel: `GitHub'da İncele`,
    demoLinkLabel: `Canlı Demo`,
    highlightLabel: `Öne Çıkan Zorluk`,

    contactPretitle: `Şimdi ne olacak?`,
    contactTitle: `İletişime Geçelim`,
    contactDesc: `Yeni fırsatlar, iş birlikleri veya sadece merhaba demek için bana ulaşmaktan çekinme. Mesajını en kısa sürede yanıtlarım.`,
    contactBtn: `Merhaba De`,
    emailLabel: `E-posta`,

    footerText: `Tasarımda Brittany Chiang'dan ilham aldım, kodun tamamını Visual Studio Code'da yazdım. HTML, CSS ve JavaScript ile geliştirildi, GitHub Pages üzerinden yayınlanıyor.`,

    modalClose: `Kapat`,
  },

  en: {
    title: `Semiha Çıtırkı — Portfolio`,
    metaDescription: `Semiha Çıtırkı's personal portfolio website.`,

    navAbout: `About`,
    navSkills: `Skills`,
    navProjects: `Projects`,
    navContact: `Contact`,

    heroPretitle: `Hi, I'm`,
    heroSlogan: `I turn ideas into code.`,
    heroDesc: `I'm a software engineering graduate candidate focused on AI and modern software architectures.`,
    heroBtn: `View My Projects`,

    aboutTitle: `About`,
    aboutP1: `I'm a software engineering graduate candidate passionate about AI technologies and modern software architectures, aiming to turn theoretical knowledge into scalable, innovative solutions.`,
    aboutP2: `I closely follow current technologies such as machine learning, computer vision, and natural language processing, and focus on integrating these approaches into robust, end-to-end software products. With my aptitude for teamwork and analytical thinking, I aim to create value within dynamic technology teams.`,

    skillsTitle: `Skills`,
    skillCV: `Computer Vision (YOLO)`,

    projectsTitle: `Projects`,
    githubLinkLabel: `View on GitHub`,
    demoLinkLabel: `Live Demo`,
    highlightLabel: `Key Challenge`,

    contactPretitle: `What's next?`,
    contactTitle: `Get In Touch`,
    contactDesc: `Feel free to reach out about new opportunities, collaborations, or just to say hello. I'll get back to you as soon as possible.`,
    contactBtn: `Say Hello`,
    emailLabel: `Email`,

    footerText: `I drew design inspiration from Brittany Chiang and wrote all the code in Visual Studio Code. Built with HTML, CSS, and JavaScript, hosted on GitHub Pages.`,

    modalClose: `Close`,
  },
};

// ===== Proje verileri =====
// Her proje: dilden bağımsız alanlar (id, image, github, demo, tech pill'leri,
// rozetler) + tr/en'e özel metinler (başlık, kısa açıklama, modal paragrafları,
// modal teknoloji satırı, opsiyonel "öne çıkan zorluk" metni).
const projects = [
  {
    id: `local-rag`,
    image: `images/Microsoft4.jpg`,
    github: `https://github.com/Semihactrk/-Local-RAG-AI-Assistant-with-Microsoft-Foundry-Local`,
    demo: null,
    tech: [`Python`, `Flask`, `SQLite`, `Foundry Local`],
    modalTech: `Python · Flask · SQLite · Foundry Local (Qwen2.5 & Qwen3-Embedding)`,
    badges: [
      { cls: `badge-accent`, tr: `Microsoft AI Innovators Summer Internship`, en: `Microsoft AI Innovators Summer Internship` },
    ],
    tr: {
      title: `Local RAG Assistant — Foundry Local`,
      alt: `Local RAG Assistant ekran görüntüsü`,
      shortDesc: `Microsoft Foundry Local ile tamamen offline çalışan, doküman tabanlı soru-cevap asistanı. Dokümanları embed edip en alakalı parçaları bularak kaynak göstererek cevaplıyor.`,
      modalParagraphs: [
        `Microsoft Foundry Local ile tamamen offline çalışan, doküman tabanlı soru-cevap asistanı. Yüklenen dokümanları embed edip SQLite üzerinde en alakalı metin parçalarını buluyor, ardından yerel bir dil modeliyle kaynak göstererek cevaplıyor. Microsoft AI Innovators Summer Internship programı kapsamında geliştirildi.`,
      ],
      highlight: `Model bazı sorularda aynı cümleyi 80+ kez tekrarlayıp yanıt süresini 104 saniyeye çıkarıyordu; frequency_penalty ayarıyla bunu 10 saniyeye indirdim. Ayrıca retrieval benzerlik skorlarını kalibre ederek "cevap bulunamadı" durumlarını güvenilir şekilde ayırt eden bir eşik değeri (threshold) belirledim.`,
    },
    en: {
      title: `Local RAG Assistant — Foundry Local`,
      alt: `Local RAG Assistant screenshot`,
      shortDesc: `A fully offline, document-based Q&A assistant built with Microsoft Foundry Local. It embeds documents, retrieves the most relevant passages, and answers with cited sources.`,
      modalParagraphs: [
        `A fully offline, document-based Q&A assistant built with Microsoft Foundry Local. It embeds uploaded documents, finds the most relevant text chunks in SQLite, then answers with a local language model while citing its sources. Built as part of the Microsoft AI Innovators Summer Internship program.`,
      ],
      highlight: `The model sometimes repeated the same sentence 80+ times on certain questions, pushing response time to 104 seconds; I brought that down to 10 seconds by tuning the frequency_penalty setting. I also calibrated retrieval similarity scores to set a threshold that reliably distinguishes genuine "no answer found" cases.`,
    },
  },

  {
    id: `yolcu`,
    image: `images/Yolcu.jpg`,
    github: `https://github.com/Semihactrk/Besteam_Pupilica_Hackathon_2025`,
    demo: null,
    tech: [`React`, `FastAPI`, `PostgreSQL`, `Gemini API`],
    modalTech: `React · TypeScript · Vite · FastAPI · PostgreSQL · SQLAlchemy · Google Gemini API · Render`,
    badges: [
      { cls: ``, tr: `🏆 Pupilica Hackathon 2025 — İlk 10`, en: `🏆 Pupilica Hackathon 2025 — Top 10` },
    ],
    tr: {
      title: `Yolcu — Kariyer Ekosistem Uygulaması`,
      alt: `Yolcu — Kariyer Ekosistem Uygulaması ekran görüntüsü`,
      shortDesc: `Yeni mezunları kariyer hayatına hazırlayan, yapay zeka destekli yol haritaları ve CV analizi sunan web uygulaması.`,
      modalParagraphs: [
        `Yeni mezunları ve kariyer başındaki profesyonelleri iş hayatına hazırlayan bir web uygulaması. "Nereden başlamalıyım?" sorusuna yapılandırılmış, adım adım bir yanıt vermeyi hedefliyor.`,
        `Gemini API ile kullanıcının hedeflediği kariyer yoluna özel öğrenme yol haritaları oluşturuluyor; NLP tabanlı CV analizi ATS uyumluluğunu puanlayıp eksiklikleri ve iyileştirme önerilerini sunuyor. Ayrıca her konu için zorluk seviyesine göre pekiştirme soruları, pratik proje önerileri ve WebSocket tabanlı bir sohbet asistanı yer alıyor.`,
      ],
    },
    en: {
      title: `Yolcu — Career Ecosystem App`,
      alt: `Yolcu — Career Ecosystem App screenshot`,
      shortDesc: `A web app that prepares new graduates for their career journey with AI-powered roadmaps and resume analysis.`,
      modalParagraphs: [
        `A web application that prepares new graduates and early-career professionals for the workforce. It aims to give a structured, step-by-step answer to the question "Where do I even start?"`,
        `The Gemini API generates learning roadmaps tailored to the user's target career path; NLP-based resume analysis scores ATS compatibility and surfaces gaps and improvement suggestions. It also includes difficulty-tiered practice questions for every topic, hands-on project ideas, and a WebSocket-based chat assistant.`,
      ],
    },
  },

  {
    id: `fikirlab`,
    image: `images/Fikirlab.jpg`,
    github: `https://github.com/Semihactrk/YZTA---Team-138`,
    demo: `https://fikirlab-frontend.onrender.com`,
    tech: [`Django REST`, `React`, `PostgreSQL`, `Gemini API`],
    modalTech: `Django REST Framework · React · TypeScript · Tailwind CSS · PostgreSQL (pgvector) · Google Gemini · Docker`,
    badges: [
      { cls: `badge-accent`, tr: `Yapay Zeka ve Teknoloji Akademisi — Bootcamp Projesi`, en: `AI & Technology Academy — Bootcamp Project` },
    ],
    tr: {
      title: `FikirLab — AI Destekli Fikir Doğrulama`,
      alt: `FikirLab ekran görüntüsü`,
      shortDesc: `Girişimcilerin iş fikirlerini yapay zeka destekli analizlerle sistematik olarak doğrulamasına yardımcı olan karar destek platformu.`,
      modalParagraphs: [
        `Erken aşama girişimcilerin iş fikirlerini yapay zeka destekli analizlerle sistematik şekilde doğrulamasına yardımcı olan bir karar destek platformu. Kullanıcı fikrini girdiğinde; riskli varsayımlar, müşteri görüşme soruları, MVP kapsam önceliklendirmesi ve doğrulama yol haritası gibi AI üretimi içgörüler sunuyor.`,
        `Beş aşamalı bir doğrulama akışı (riskli varsayım tespiti, Mom Test soruları, MoSCoW ile MVP önceliklendirme, doğrulama yol haritası ve genel değerlendirme) sunuyor. Ayrıca tool-calling yapabilen bir AI mentor ajanı, müşteri görüşme notu yönetimi, kanıt analizi ve PDF olarak dışa aktarılabilen kapsamlı doğrulama raporları içeriyor. Analizleri zenginleştirmek için pgvector ile RAG kullanıyor; hem metin hem YouTube transkript girişini destekliyor.`,
      ],
    },
    en: {
      title: `FikirLab — AI-Powered Idea Validation`,
      alt: `FikirLab screenshot`,
      shortDesc: `A decision-support platform that helps entrepreneurs systematically validate their business ideas through AI-driven analysis.`,
      modalParagraphs: [
        `A decision-support platform that helps early-stage entrepreneurs systematically validate their business ideas through AI-driven analysis. Once a user enters their idea, it surfaces AI-generated insights such as risky assumptions, customer interview questions, MVP scope prioritization, and a validation roadmap.`,
        `It offers a five-stage validation workflow (risky assumption detection, Mom Test questions, MoSCoW-based MVP prioritization, a validation roadmap, and an overall assessment). It also includes a tool-calling AI mentor agent, customer interview note management, evidence analysis, and comprehensive validation reports exportable as PDF. It uses RAG with pgvector to enrich its analyses, supporting both text and YouTube transcript input.`,
      ],
    },
  },

  {
    id: `toprak-ana`,
    image: `images/ToprakAna.jpg`,
    github: `https://github.com/Semihactrk/YZTA-Hackathon-2026`,
    demo: null,
    tech: [`FastAPI`, `React`, `Gemini API`, `RAG`],
    modalTech: `FastAPI · SQLAlchemy · SQLite · Google Gemini API · React · TypeScript · Vite · scikit-learn`,
    badges: [
      { cls: `badge-accent`, tr: `Yapay Zeka ve Teknoloji Akademisi — Hackathon Projesi`, en: `AI & Technology Academy — Hackathon Project` },
    ],
    tr: {
      title: `Toprak Ana — AI Destekli Kooperatif Pazaryeri`,
      alt: `Toprak Ana ekran görüntüsü`,
      shortDesc: `Hatay'daki kadın üreticilerin el işi ve yerel ürünlerini satabildiği, çok ajanlı yapay zeka destekli bir e-ticaret platformu.`,
      modalParagraphs: [
        `Hatay'daki kadın üreticilerin el işi ve yerel ürünlerini dijital ortamda satmasını sağlayan, tam entegre bir e-ticaret platformu. Deprem sonrası ekonomik zorluklar yaşayan kooperatiflerin tüketicilere ulaşmasını amaçlıyor.`,
        `Google Gemini tabanlı üç ajanlı (Orchestrator, Satış, Operasyon) bir yapay zeka sistemi kullanıcı mesajlarını analiz edip yönlendiriyor; kooperatif hikayeleri vektörel RAG ile semantik aramayla sunuluyor. Kritik stok, lojistik risk ve gecikmiş siparişler Telegram üzerinden otomatik bildiriliyor. Ayrıca dashboard, ürün/sipariş yönetimi ve rol tabanlı erişimin olduğu bir admin paneli içeriyor.`,
      ],
    },
    en: {
      title: `Toprak Ana — AI-Powered Cooperative Marketplace`,
      alt: `Toprak Ana screenshot`,
      shortDesc: `A multi-agent, AI-powered e-commerce platform where women producers in Hatay can sell their handmade and local goods.`,
      modalParagraphs: [
        `A fully integrated e-commerce platform that lets women producers in Hatay sell their handmade and local goods online. It aims to help cooperatives facing post-earthquake economic hardship reach consumers.`,
        `A Google Gemini-based three-agent AI system (Orchestrator, Sales, Operations) analyzes and routes user messages; cooperative stories are surfaced through vector-based RAG semantic search. Critical stock levels, logistics risks, and delayed orders are automatically reported via Telegram. It also includes an admin panel with a dashboard, product/order management, and role-based access.`,
      ],
    },
  },

  {
    id: `aerovision`,
    image: `images/teknofest-logo.png`,
    thumbContain: true,
    github: null,
    demo: null,
    tech: [`YOLOv26m`, `Visual Odometry`, `SIFT`, `SAHI`],
    modalTech: `YOLOv26m · SAHI · Visual Odometry (Lucas-Kanade) · SIFT · CLAHE · Python`,
    badges: [
      { cls: `badge-accent`, tr: `TEKNOFEST 2026 — Havacılıkta Yapay Zeka Yarışması`, en: `TEKNOFEST 2026 — AI in Aviation Competition` },
      { cls: ``, tr: `👑 Takım Kaptanı`, en: `👑 Team Captain` },
    ],
    tr: {
      title: `AeroVision — TEKNOFEST - Havacılıkta Yapay Zeka`,
      alt: `AeroVision proje görseli`,
      shortDesc: `İnsansız hava aracı görüntülerinden gerçek zamanlı nesne tespiti, GPS kesildiğinde görsel odometri ile konum kestirimi yapan yarışma projesi.`,
      modalParagraphs: [
        `Yazılım Mühendisliği ve Bilgisayar Mühendisliği öğrencilerinden oluşan AeroVision takımının kaptanlığını üstlendim. Takım, otonom araçlar için bu yarışma projesini geliştirdi. RGB ve termal görüntüler; deniz, orman, karlı bölgeler gibi farklı coğrafi koşulları ve gündüz, güneşli, akşam gibi farklı ışık koşullarını kapsayan çeşitlendirilmiş bir veri seti üzerinde çalışıyor.`,
        `Nesne tespiti için hız/doğruluk dengesi nedeniyle YOLOv26m mimarisi tercih edildi; küçük ve kısmen görünen nesneler için çok ölçekli feature fusion ve SAHI (Slicing Aided Hyper Inference) kullanıldı. GPS verisinin kesilebileceği durumlarda FAST özellik çıkarımı ve Lucas-Kanade optik akış ile görsel odometri tabanlı konum kestirimi yapılıyor. Daha önce tanımlanmamış nesneleri bulmak için SIFT tabanlı eşleştirme, zorlu hava koşullarında (sis, yağmur, düşük ışık) ise görüntü ön işleme teknikleri uygulanıyor. Eğitimde SCIoU kayıp fonksiyonu ve Lion optimizasyon algoritması kullanıldı.`,
      ],
    },
    en: {
      title: `AeroVision — TEKNOFEST - AI in Aviation`,
      alt: `AeroVision project image`,
      shortDesc: `A competition project performing real-time object detection from drone footage and visual-odometry-based position estimation when GPS is lost.`,
      modalParagraphs: [
        `I served as captain of Team AeroVision, made up of Software Engineering and Computer Engineering students. The team built this competition project for autonomous vehicles. It works on a diverse dataset of RGB and thermal imagery covering different geographic conditions — sea, forest, snowy terrain — and different lighting conditions such as daytime, sunny, and evening.`,
        `YOLOv26m was chosen for object detection due to its speed/accuracy balance; multi-scale feature fusion and SAHI (Slicing Aided Hyper Inference) were used for small and partially visible objects. When GPS signal may be lost, position is estimated via visual odometry using FAST feature extraction and Lucas-Kanade optical flow. SIFT-based matching finds previously undefined objects, while image preprocessing techniques handle harsh weather conditions (fog, rain, low light). Training used the SCIoU loss function and the Lion optimization algorithm.`,
      ],
    },
  },

  {
    id: `proje-2`,
    image: `images/proje-2.png`,
    github: `https://github.com/Semihactrk`,
    demo: null,
    tech: [`Python`, `Flask`],
    modalTech: `Python · Flask`,
    badges: [],
    tr: {
      title: `Proje Adı`,
      alt: `Proje Adı ekran görüntüsü`,
      shortDesc: `Projenin ne işe yaradığını, hangi problemi çözdüğünü 2-3 satırla anlat.`,
      modalParagraphs: [
        `Buraya projenin tam açıklamasını, karşılaştığın zorlukları ve nasıl çözdüğünü istediğin kadar uzun yazabilirsin — kartta görünmez, sadece tıklayınca burada çıkar.`,
      ],
    },
    en: {
      title: `Project Name`,
      alt: `Project Name screenshot`,
      shortDesc: `Describe what the project does and what problem it solves in 2-3 lines.`,
      modalParagraphs: [
        `Write the full description here — the challenges you faced and how you solved them, as long as you like. It won't show on the card, only when clicked.`,
      ],
    },
  },

  {
    id: `proje-3`,
    image: `images/proje-3.png`,
    github: `https://github.com/Semihactrk`,
    demo: null,
    tech: [`JavaScript`, `CSS`],
    modalTech: `JavaScript · CSS`,
    badges: [],
    tr: {
      title: `Proje Adı`,
      alt: `Proje Adı ekran görüntüsü`,
      shortDesc: `Projenin ne işe yaradığını, hangi problemi çözdüğünü 2-3 satırla anlat.`,
      modalParagraphs: [
        `Buraya projenin tam açıklamasını, karşılaştığın zorlukları ve nasıl çözdüğünü istediğin kadar uzun yazabilirsin — kartta görünmez, sadece tıklayınca burada çıkar.`,
      ],
    },
    en: {
      title: `Project Name`,
      alt: `Project Name screenshot`,
      shortDesc: `Describe what the project does and what problem it solves in 2-3 lines.`,
      modalParagraphs: [
        `Write the full description here — the challenges you faced and how you solved them, as long as you like. It won't show on the card, only when clicked.`,
      ],
    },
  },
];
