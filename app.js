
/* ===== Simple i18n + nav toggle ===== */
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
    mottoMessage: "Comandél sa lekk, jend sa ndugu ak yonné bagage — LivréMa daay ligeey ci lu gaw lu woor fépp ci Senegaal.",
    joinWait: "Bindaat bi",
    joinWaitMessage: "Genn 128,000+ ñi ngi ci bindaat bi",
    story: "Sunuy Leeral",
    about1: "Livré Ma daay liggéey ngir joxe ay serwiis yu bees yu méngoo diamono ngir askanu Senegaal.",
    about2: "Sunuy xalaat mooy yokk seen jàmm ak li ñuy soxla, nu yónnee lu mëna gën a baax ca kaw këma.",
    about3: "Nu gëm ne teknoloji ak jëf yu dëppoo ci ñaari wet mën na jàppale ñi ci sañ-sañ, bu ëpp solo.",
    service: "Sunu Ligeey"
  }
};

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("primary-nav");
hamburger?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

const select = document.getElementById("langSelect");
select?.addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
});

// Basic email validation UX (no network request)
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    if (!input.checkValidity()) {
      input.focus();
      input.setAttribute("aria-invalid", "true");
      input.placeholder = "Please enter a valid email";
      return;
    }
    input.value = "";
    alert("Thanks! We'll be in touch soon.");
  });
});
