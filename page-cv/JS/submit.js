const w = window,
  d = document;

const $form = d.querySelector("form");
const $loader = $form.querySelector(".contact-form-loader");
let $name = $form.querySelector("[name='name-npt']");
let $email = $form.querySelector("[name='email-npt']");
let $textarea = $form.querySelector("[name='text-area-npt']");
let $message = d.querySelector(".contact-form-response");
let smiley = "./assets/SVG/smiley-face.svg";
let success_message = "¡Muchas gracias por contactarme!";
let color_success = "var(--success_color)";
let sad = "./assets/SVG/sad-face.svg";
let fail_success_message =
  "Tu mensaje no se ha podido enviar, inténtalo nuevamente, gracias !";
let color_error = "var(--red-error)";

const submitFunction = (e) => {
  /* let current_dir = w.location.href;
  let dir = w.location.origin;
  dir = `${dir}/#thanks`; */
  $loader.classList.remove("none");
  let data = {
    nombre: $name.value,
    email: $email.value,
    message: $textarea.value,
  };

  fetch("https://formsubmit.co/ajax/avcobaleda@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      $message.style.backgroundColor = color_success;
      $message.querySelector("h3").textContent = success_message;
      $message.querySelector("img").src = smiley;
    })
    .catch((err) => {
      $message.style.backgroundColor = color_error;
      $message.querySelector("h3").textContent = fail_success_message;
      $message.querySelector("img").src = sad;
    })
    .finally(() => {
      location.hash = "#thanks";
      $loader.classList.add("none");
      $form.reset();
      setTimeout(() => {
        location.hash = "#contact";
      }, 2000);
    });
};

export default submitFunction;
