const translations = {
    ENG: {
        home_nav: "Home",
        about_nav: "About Us",
        service_nav: "Our Services",
        title: "What you need, when you need it!",
        motto: "Senegal's Premier Delivery Service",
        mottoMessage: "Order food, groceries, parcels, and more — LivréMa delivers it all with speed and heart, anywhere in Senegal."
    },
    FRE: {
        home_nav: "Accueil",
        about_nav: "Qui Sommes-nous",
        service_nav: "Nos Services",
        title: "Ce dont vous avez besoin, quand vous en avez besoin !",
        motto: "Le premier service de livraison du Sénégal",
        mottoMessage: "Commandez des repas, des courses, des colis et plus encore — LivréMa livre tout avec rapidité et passion, partout au Sénégal."
    },
    WOL: {
        home_nav: "Dalal ak jamm",
        about_nav: "Ñun nooy kaan",
        service_nav: "Sunu Ligeey",
        title: "Li ngeen di soxla, mooy seen mbékté!",
        motto: "Livraison bu jitu ci Senegaal",
        mottoMessage: "Amaal sa lekk, say ndugu ak yonné bagage — LivréMa daay ligeey ci lu gaw lu woor fépp ci Senegaal."
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