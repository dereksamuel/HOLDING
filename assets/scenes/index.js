let train = null;
let holding = null;
let consuelo = null;
let $HoldingHuman = null;

const start = async ({ holdingParameter }) => {
  holding = holdingParameter;
  train = await (await fetch("./assets/scenes/Train.html")).text();
  consuelo = await (await fetch("./Consuelo.html")).text();
  firstScene();
  secondScene();
};

const firstScene = () => {
  const $content_1 = document.getElementById("content_1");
  const $Train = document.createElement("div");
  const $Holding = document.createElement("div");
  const $six_circle = document.getElementById("six_circle");

  $Holding.classList.add("SuperEsfuerzo");
  $Holding.innerHTML = holding;
  $Train.innerHTML = train;

  $content_1.appendChild($Train);
  $content_1.appendChild($Holding);
  
  $six_circle.addEventListener("animationend", () => {
    const $scene12 = document.getElementById("scene12");
    $HoldingHuman = document.createElement("div");
    const $Consuelo = document.createElement("div");
    $HoldingHuman.innerHTML = holding;
    $Consuelo.innerHTML = consuelo;

    $scene12.querySelector(".ilusion").style.opacity = "0";
    $scene12.querySelector(".reality").appendChild($HoldingHuman);
    $scene12.querySelector(".reality").appendChild($Consuelo);
    const timer = setTimeout(() => {
      $scene12.querySelector(".ilusion").style.display = "none";
      clearTimeout(timer);
    }, 900);
  });
};

const secondScene = () => {
  const $scene12 = document.getElementById("scene12");
  const $scene22 = document.getElementById("scene22");

  $HoldingHuman.addEventListener("animationend", () => {
    $scene12.classList.remove("selected");
    $scene12.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");

    $scene22.classList.add("selected");
    $scene22.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
  });
};

export {
  start,
};
