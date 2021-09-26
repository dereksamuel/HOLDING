const $SuperHoldingLocalFour = document.createElement("div");

let train = null;
let holding = null;
let consuelo = null;
let $HoldingHuman = null;
let $HoldingDiv = null;

let $Dragon = null;
let $SuperHoldingLocal = null;
let dragon = null;
let superHolding = null;

const start = async ({ holdingParameter }) => {
  holding = holdingParameter;

  const $scene52 = document.querySelector("#scene52");
  const $scene32 = document.querySelector("#scene32");
  $HoldingDiv = document.createElement("div");
  $HoldingDiv.innerHTML = holding;
  $scene52.querySelector(".content").appendChild($HoldingDiv);

  $Dragon = document.createElement("div");
  $SuperHoldingLocal = document.createElement("div");
  dragon = await (await fetch("./Dragon.html")).text();
  superHolding = await (await fetch("./SuperHoldingNormal.html")).text();

  $Dragon.innerHTML = dragon;
  $Dragon.classList.add("DragonContainer");

  $SuperHoldingLocal.innerHTML = superHolding;
  $SuperHoldingLocal.classList.add("SuperContainer");

  $scene32.querySelector(".content").appendChild($SuperHoldingLocal);
  $scene32.querySelector(".content").appendChild($Dragon);

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
        const timer3 = setTimeout(() => {
          threeScene($Holding2, $scene22);
          clearTimeout(timer3);
        }, 4500);
      }, 3400);
      $scene22.classList.add("enfermo");
      clearTimeout(timer);
    }, 1500);
  });
};

const threeScene = async ($Holding2, $scene22) => {
  const $scene32 = document.querySelector("#scene32");

  const $dialog1 = $scene32.querySelector(".dialog_section_21");
  const $dialog2 = $scene32.querySelector(".dialog2_section_22");
  const $dialog3 = $scene32.querySelector(".dialog2_section_23");

  $Holding2.querySelector(".Holding").addEventListener("animationend", () => {
    $scene22.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");
    $scene22.classList.remove("selected");

    $scene32.classList.add("selected");
    $dialog1.style.animation = "ocultarChat 12s forwards 1 ease alternate";
    $scene32.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
    const timer = setTimeout(() => {
      $Dragon.classList.add("DragonContainerDK");
      $SuperHoldingLocal.classList.add("SuperNormal");
      $SuperHoldingLocal.style.right = "100px";
      $Dragon.querySelector(".ala").classList.add("fly");
      $Dragon.querySelector(".ala1").classList.add("fly2");
      clearTimeout(timer);
    }, 2000);
  });
  
  $SuperHoldingLocal.addEventListener("animationend", () => {
    $dialog1.style.animation = "none";
    $dialog2.style.animation = "ocultarChatPoco 10s forwards 1 ease alternate";
    $SuperHoldingLocal.style.animation = "none";
    $SuperHoldingLocal.style.transform = "translate(0, 75px) scale(0.8, 0.7)";

    $SuperHoldingLocal.querySelector(".fire").style.opacity = "0";
    $SuperHoldingLocal.querySelector(".fire2").style.opacity = "0";
    $SuperHoldingLocal.querySelector(".fire").style.animation = "none";
    $SuperHoldingLocal.querySelector(".fire2").style.animation = "none";

    $SuperHoldingLocal.querySelector(".Pierna2_leg1").style.animation = "none";
    $SuperHoldingLocal.querySelector(".Pierna1_leg1").style.animation = "none";
    $SuperHoldingLocal.querySelector(".pierna22").style.animation = "none";
    $SuperHoldingLocal.querySelector(".pierna11").style.animation = "none";

    $SuperHoldingLocal.querySelector(".arm2_container").style.transform = "translate(-7px, -2px)";
    $SuperHoldingLocal.querySelector(".arm1_container").style.transform = "translate(7px, -2px)";
    $SuperHoldingLocal.querySelector(".arm2container").style.animation = "none";
    $SuperHoldingLocal.querySelector(".arm1container").style.animation = "none";
    $SuperHoldingLocal.querySelector(".gorro").style.animation = "none";
  });


  $dialog2.addEventListener("animationend", () => {
    $Dragon.classList.add("DragonAtack");
    const timer12 = setTimeout(() => {
      $SuperHoldingLocal.querySelector(".arm2_container").style.transform = "translate(1px, -9px) rotate(102deg)";
      $SuperHoldingLocal.querySelector(".arm1_container").style.transform = "translate(34px, -9px) rotate(85deg)";
      $SuperHoldingLocal.style.transition = "8s all";
      $SuperHoldingLocal.style.transform = "translate(224px, 45px) scale(0.8, 0.7)";
      $scene32.querySelector(".FireConsecutive").style.animation = "1s fireGun forwards ease-in 3";
      $scene32.querySelector(".pows #img1").style.opacity = "1";
      $scene32.querySelector(".pows #img1").style.transition = "1s";
      $scene32.querySelector(".pows #img2").style.opacity = "1";
      $scene32.querySelector(".pows #img2").style.transition = "2s";
      $scene32.querySelector(".pows #img3").style.opacity = "1";
      $scene32.querySelector(".pows #img3").style.transition = "3s";
      $dialog3.style.animation = "ocultarChatPoco 6s backwards 1 ease alternate";
      const timer33 = setTimeout(() => {
        $Dragon.querySelector(".ala").classList.remove("fly");
        $Dragon.querySelector(".ala1").classList.remove("fly2");
        fourScene();
        clearTimeout(timer33);
      }, 3000);
      clearTimeout(timer12);
    }, 1800);
  });
};

const fourScene = () => {
  const $scene32 = document.querySelector("#scene32");
  const $scene42 = document.querySelector("#scene42");
  $SuperHoldingLocalFour.innerHTML = superHolding;

  $scene32.classList.remove("selected");
  $scene32.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");

  $scene42.classList.add("selected");
  $scene42.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
  $scene42.querySelector(".content").appendChild($SuperHoldingLocalFour);

  $SuperHoldingLocalFour.querySelector(".arm2_container").style.transform = "translate(-7px, -2px)";
  $SuperHoldingLocalFour.querySelector(".arm1_container").style.transform = "translate(7px, -2px)";

  $SuperHoldingLocalFour.style.transition = "1s all";
  $SuperHoldingLocalFour.style.right = "96px";

  $SuperHoldingLocalFour.classList.add("SuperContainer");
  $SuperHoldingLocalFour.classList.add("SuperNormal");
  $SuperHoldingLocalFour.classList.add("HoldingHerido");

  $SuperHoldingLocalFour.querySelector(".fire").style.opacity = "0";
  $SuperHoldingLocalFour.querySelector(".fire2").style.opacity = "0";
  $SuperHoldingLocalFour.querySelector(".fire").style.animation = "none";
  $SuperHoldingLocalFour.querySelector(".fire2").style.animation = "none";

  $SuperHoldingLocalFour.querySelector(".Pierna2_leg1").style.animation = "none";
  $SuperHoldingLocalFour.querySelector(".Pierna1_leg1").style.animation = "none";
  $SuperHoldingLocalFour.querySelector(".pierna22").style.animation = "none";
  $SuperHoldingLocalFour.querySelector(".pierna11").style.animation = "none";

  $SuperHoldingLocalFour.querySelector(".arm2container").style.animation = "none";
  $SuperHoldingLocalFour.querySelector(".arm1container").style.animation = "none";
  $SuperHoldingLocalFour.querySelector(".arm1container").style.transform = "rotate(-70deg) translateY(-11px) translateX(7px)";
  $SuperHoldingLocalFour.querySelector(".arm1container").style.transformOrigin = "right top";

  const semiUltimateTimer = setTimeout(() => {
    ultimateScene($scene42);
    clearTimeout(semiUltimateTimer);
  }, 6500);
};

const ultimateScene = ($scene42) => {
  const $scene52 = document.querySelector("#scene52");

  $scene42.classList.remove("selected");
  $scene42.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");

  $HoldingDiv.classList.add("Enfermo");
  $scene52.classList.add("selected");
  $scene52.querySelector(".remember").style.opacity = "1";
  $scene52.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
  const ultimateTimeout = setTimeout(() => {
    $scene52.querySelector(".remember .img2").style.opacity = "1";
    $scene52.querySelector(".realtyDK").style.transition = "6s all";
    $scene52.querySelector(".realtyDK").style.transform = "scale(1.5) translate(132px, -53px)";
    clearTimeout(ultimateTimeout);
  }, 2500);
};

export {
  start,
};
