window.onload = () => {
  const $loading = document.querySelector(".Loading");

  $loading.style.display = "none";
  play();
};

function play () {
  firstScene();
  secondScene();
}

function firstScene () {
  const $one_tapa = document.getElementById("one_tapa");
  const $tronando = document.querySelector(".tronando");
  const $scene_2 = document.getElementById("scene_2");
  const $pierna_2 = document.getElementById("pierna2");
  const $pierna_1 = document.getElementById("pierna1");
  const $Holding = document.querySelector(".Holding");

  $tronando.addEventListener("animationend", () => {
    $one_tapa.classList.remove("opacity-none");
    $tronando.style.border = "none";
    $scene_2.classList.add("selected");
    $scene_2.querySelector(".bulletPoint_tapa").classList.add("opacity-none");

    $Holding.classList.add("move");
    $pierna_2.classList.add("caminar");
    $pierna_1.classList.add("caminar11");
    $pierna_2.querySelector(".pierna22").classList.add("moveleg12");
    $pierna_1.querySelector(".pierna11").classList.add("moveleg11");
    $tronando.removeEventListener("animationend", () => {}, false);
  });
}

function secondScene () {
  const $scene_2 = document.getElementById("scene_2");
  const $ceja2 = document.querySelector(".ceja2");
  const $ceja1 = document.querySelector(".ceja1");

  $scene_2.addEventListener("animationend", () => {
    clearableClasses($scene_2);
    $ceja1.classList.add("isawesome");
    $ceja2.classList.add("isawesome");
  });
}

function clearableClasses ($element) {
  const $pierna_2 = document.getElementById("pierna2");
  const $pierna_1 = document.getElementById("pierna1");

  $pierna_2.classList.remove("caminar");
  $pierna_1.classList.remove("caminar11");
  $pierna_2.querySelector(".pierna22").classList.remove("moveleg12");
  $pierna_1.querySelector(".pierna11").classList.remove("moveleg11");
  $element.removeEventListener("animationend", () => {}, false);
}
