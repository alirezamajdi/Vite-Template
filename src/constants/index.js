import ceo from "/public/images/profiles/ceo.png";
import cmo from "/public/images/profiles/cmo.png";
import cto from "/public/images/profiles/cto.png";
import cpo from "/public/images/profiles/cpo.jpg";

export const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
export const REFRESH_TOKEN = import.meta.env.VITE_REFRESH_TOKEN;
export const MODE_ENV = import.meta.env.MODE;
export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const APPKIT_PROJECT_ID = import.meta.env.VITE_APPKIT_PROJECT_ID;

;
export const PROFILES = [
  {
    img: ceo,
    name: "Rayka Moradi",
    nickname: "(Raymo)",
    position: "CEO",
    units: [],
    email: "rayka@gaply.org",
    linkedin: "https://linkedin.com/in/rayka-moradi-6ba361114",
  },
  {
    img: cmo,
    name: "Armin Zanbouri",
    nickname: "",
    position: "CMO",
    units: ["Marketing Solutions Unit", "R&D Unit"],
    email: "arminzanbouri@gaply.org",
    linkedin: "linkedin.com/in/armin-zanbouri-5b257b151",
  },
  {
    img: cto,
    name: "Bahram Rostami",
    nickname: "",
    position: "CTO",
    units: [
      "Cutting-Edge Dev Unit",
      "Infrestructure Dev Unit",
      "Tech Modules Unit",
    ],
    email: "misterbr@gaply.org",
    linkedin: "https://linkedin.com/in/miiisterbr",
  },
  {
    img: cpo,
    name: "Konstantinos Papadakis",
    nickname: "(FUZ)",
    position: "CPO",
    units: ["SaaS Unit", "R&D Unit"],
    email: "fuz@gaply.org",
    linkedin: "https://linkedin.com/in/fuztastiq",
  },
];

// ---------------------------------------------------
// SYSTEM LOCALES
// ---------------------------------------------------

export const SYSTEM_LOCALES = [
  {
    locale: "en",
    direction: "ltr",
  },
  {
    locale: "fa",
    direction: "rtl",
  },
];
