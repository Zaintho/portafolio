import menuHamburguesa from "./menu-hamburguesa.js";
import submitFunction from "./submit.js";

const d = document;

d.addEventListener("click", (e) => {
  menuHamburguesa(e);
});
d.addEventListener("submit", (e) => {
  e.preventDefault();
  submitFunction(e);
});
