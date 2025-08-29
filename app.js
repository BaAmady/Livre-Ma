const translations = {
    ENG: {
        home_nav: "Home",
        about_nav: "About Us",
        service_nav: "Our Services",
        title: "What you need, when you need it!",
        motto: "Senegal's Premier Delivery Service",
        mottoMessage: "Order food, groceries, parcels, and more — LivréMa delivers it all with speed and heart, anywhere in Senegal.",
        joinWait: "Join The Waitlist",
        joinWaitMessage: "Join 128,000+ others on the waitlist",
        story: "Our Story",
        about1: "Livré Ma is committed to offering modern delivery services that resonate with Senegal's local culture.",
        about2: "Our passion for connecting people with their needs drives us to deliver more than just packages — we deliver experiences.",
        about3: "We believe in the power of technology combined with a local touch to create a seamless and accessible delivery experience.",
        service: "Our Services"
    },
    FRE: {
        home_nav: "Accueil",
        about_nav: "Qui Sommes-nous",
        service_nav: "Nos Services",
        title: "Ce dont vous avez besoin, quand vous en avez besoin !",
        motto: "Le premier service de livraison du Sénégal",
        mottoMessage: "Commandez des repas, des courses, des colis et plus encore — LivréMa livre tout avec rapidité et passion, partout au Sénégal.",
        joinWait: "Rejoindre la liste d'attente",
        joinWaitMessage: "Rejoignez plus de 128,000 personnes sur la liste d'attente",
        story: "Notre histoire",
        about1: "Livré Ma s'engage à offrir des services de livraison modernes qui s'harmonisent avec la culture locale du Sénégal.",
        about2: "Notre passion pour connecter les gens à ce dont ils ont besoin nous pousse à livrer bien plus que des colis — nous livrons des expériences.",
        about3: "Nous croyons au pouvoir de la technologie allié à une touche locale pour offrir une expérience de livraison fluide et accessible à tous.",
        service: "Nos Services"
    },
    WOL: {
        home_nav: "Dalal ak jamm",
        about_nav: "Ñun nooy kaan",
        service_nav: "Sunu Ligeey",
        title: "Li ngeen di soxla, mooy seen mbékté!",
        motto: "Livraison bu jitu ci Senegaal",
        mottoMessage: "Amaal sa lekk, say ndugu ak yonné bagage — LivréMa daay ligeey ci lu gaw lu woor fépp ci Senegaal.",
        joinWait: "Rejoindre la liste d'attente",
        joinWaitMessage: "Rejoignez plus de 128,000 personnes sur la liste d'attente",
        story: "Notre histoire",
        about1: "Livré Ma s'engage à offrir des services de livraison modernes qui s'harmonisent avec la culture locale du Sénégal.",
        about2: "Notre passion pour connecter les gens à ce dont ils ont besoin nous pousse à livrer bien plus que des colis — nous livrons des expériences.",
        about3: "Nous croyons au pouvoir de la technologie allié à une touche locale pour offrir une expérience de livraison fluide et accessible à tous.",
        service: "Nos Services"
    }
}

const languageSelect = document.querySelector('select')
languageSelect.addEventListener('change', (e)=>{
    const lang = e.target.value
    document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n')
        el.textContent = translations[lang][key]
    })
})