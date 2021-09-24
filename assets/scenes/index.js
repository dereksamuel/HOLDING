let train = null;
let holding = null;
let consuelo = null;
let $HoldingHuman = null;

const start = async ({ holdingParameter }) => {
  holding = holdingParameter;
  train = await (await fetch("./assets/scenes/Train.html")).text();
  consuelo = await (await fetch("./Consuelo.html")).text();
  firstScene();
};

const firstScene = () => {
  const $content_1 = document.getElementById("content_1");
  const $Train = document.createElement("div");
  const $Holding = document.createElement("div");
  const $Holding2 = document.createElement("div");
  const $six_circle = document.getElementById("six_circle");
  const $scene22 = document.getElementById("scene22");

  $Holding.classList.add("SuperEsfuerzo");
  $Holding.innerHTML = holding;
  $Holding2.innerHTML = holding;
  $Train.innerHTML = train;

  $content_1.appendChild($Train);
  $content_1.appendChild($Holding);
  $scene22.querySelector(".content").appendChild($Holding2);
  
  $six_circle.addEventListener("animationend", () => {
    const $scene12 = document.getElementById("scene12");
    $HoldingHuman = document.createElement("div");
    const $Consuelo = document.createElement("div");
    $HoldingHuman.innerHTML = holding;
    $HoldingHuman.id = "HoldingLove";
    $Consuelo.innerHTML = consuelo;

    $scene12.querySelector(".ilusion").style.opacity = "0";
    $scene12.querySelector(".reality").appendChild($HoldingHuman);
    $scene12.querySelector(".reality").appendChild($Consuelo);
    const timer = setTimeout(() => {
      $scene12.querySelector(".ilusion").style.display = "none";
      clearTimeout(timer);
    }, 900);
    secondScene($Holding2);
  });
};

const secondScene = ($Holding2) => {
  const $scene12 = document.getElementById("scene12");
  const $scene22 = document.getElementById("scene22");
  const $HoldingHumanLove = document.getElementById("HoldingLove").querySelector(".Holding");
  const $pierna_2 = $Holding2.querySelector("#pierna2");
  const $pierna_1 = $Holding2.querySelector("#pierna1");

  $HoldingHumanLove.addEventListener("animationend", () => {
    $scene12.classList.remove("selected");
    $scene12.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");

    $scene22.classList.add("selected");
    $scene22.querySelector(".bulletPoint_tapa").classList.add("opacity-none");

    $Holding2.classList.add("dolorHombro");
    $Holding2.querySelector(".ceja1").classList.add("fury");
    $Holding2.querySelector(".ceja2").classList.add("fury");
    $Holding2.querySelector(".ceja2").style.transform = "rotate(-20deg)";
    $Holding2.querySelector(".pupila1").style.left = "3px";
    $Holding2.querySelector(".pupila2").style.left = "3px";
    $Holding2.style.animation = "movemeX 8s alternate 1 ease forwards";
    $pierna_2.classList.add("caminar");
    $pierna_1.classList.add("caminar11");
    $pierna_2.querySelector(".pierna22").classList.add("moveleg12");
    $pierna_1.querySelector(".pierna11").classList.add("moveleg11");
  });

  $Holding2.addEventListener("animationend", () => {
    $Holding2.querySelector(".ceja1").classList.remove("fury");
    $Holding2.querySelector(".ceja2").classList.remove("fury");

    $Holding2.querySelector(".ceja2").style.transform = "none";

    $Holding2.querySelector(".ceja1").classList.add("isawesome");
    $Holding2.querySelector(".ceja1").classList.add("isawesome");
    const timer = setTimeout(() => {
      $Holding2.querySelector(".Holding").classList.add("caer");
      const timer2 = setTimeout(() => {
        $Holding2.querySelector(".Holding").classList.add("caerScale");
        $Holding2.querySelector("#arm2").classList.add("heat");
        clearTimeout(timer2);
      }, 2500);
      $scene22.classList.add("enfermo");
      clearTimeout(timer);
    }, 1500);
  });

  $Holding2.querySelector("#arm2").addEventListener("animationend", () => {
    $scene22.querySelector(".content").style.opacity = "0";
  });
};

export {
  start,
};
