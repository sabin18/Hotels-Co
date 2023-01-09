import logo from "@/images/resources/logo-1.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Tevily",
  about:
    "Welcome to our Hotel&Co.Guests are interested in all kinds of places. .",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+ 250781111111",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "hotel&Co@company.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "234 KG ST, kigali,Rwanda",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 3, link: "#", title: "Work with Us" },
    { id: 4, link: "#", title: "Meet the Team" },
  ],
  explore: [
    { id: 1, link: "#", title: "Account" },
    { id: 2, link: "#", title: "Contact" },
    { id: 3, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
