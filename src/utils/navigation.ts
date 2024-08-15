// An array of links for navigation bar
const navBarLinks = [
  { name: "Strona główna", url: "/" },
  { name: "LMS Project", url: "/lms" },
  { name: "Produkty", url: "/inne" },
  { name: "Kontakt", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Przydatne linki",
    links: [
      { name: "Dokumentacja", url: "/" },
      { name: "Narzędzia i dodatki", url: "/" },
      { name: "Inne usługi", url: "/" },
    ],
  },
  {
    section: "Produkt",
    links: [
      { name: "O nas", url: "#" },
      { name: "Kariera", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};