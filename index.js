const img = document.querySelector(".wanda");
const container = document.querySelector(".container");
const div = document.querySelector(".divRight");
const feiticeira = document.querySelector(".feiticeira");
const fumaca = document.querySelector(".fumaca");
const background = document.querySelector(".background");
const raio1 = document.querySelector(".raio");
const raio2 = document.querySelector(".raio2");
const fogo1 = document.querySelector(".fogo");
const fogo2 = document.querySelector(".fogo2");

img.addEventListener("mouseover", () => {
  raio1.style.opacity = "1";
  raio2.style.opacity = "1";
});
img.addEventListener("mouseleave", () => {
  raio1.style.opacity = "0";
  raio2.style.opacity = "0";
});

container.addEventListener("click", (e) => {
  setTimeout(mudarBackground, 1000);
  setTimeout(mostrarFeiticeira, 2000);
  setTimeout(mostrarFumaca, 2000);
  setTimeout(mostrarVideo, 6000);
});

function mostrarVideo() {
  div.innerHTML =
    "<iframe class='video' &autoplay=1 src='https://www.youtube.com/embed/aWzlQ2N6qqg?start=0&autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";
  const video = document.querySelector(".video");
  video.style.opacity = "1";
}

function mostrarFeiticeira() {
  feiticeira.classList.add("show");
}

function mostrarFumaca() {
  fumaca.classList.add("show");
}

function mudarBackground() {
  background.style.opacity = "1";
  img.style.opacity = "0";
  raio1.style.opacity = "0";
  raio2.style.opacity = "0";
  fogo1.style.opacity = "0";
  fogo2.style.opacity = "0";
  raio2.style.zIndex = "96";
  raio1.style.zIndex = "96";
}
