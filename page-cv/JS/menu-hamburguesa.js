const d = document;
const $btn = d.querySelector(".menu-btn");
const $nav = d.querySelector(".menu");

const menuHamburguesa = (e) => {
  if (e.target.matches(".menu-btn") || e.target.matches(".menu-btn *")) {
    $nav.classList.toggle("is-active");
    $btn.firstElementChild.classList.toggle("none");
    $btn.lastElementChild.classList.toggle("none");
  } else {
    $nav.classList.remove("is-active");
    $btn.firstElementChild.classList.remove("none");
    $btn.lastElementChild.classList.add("none");
  }
};

export default menuHamburguesa;
