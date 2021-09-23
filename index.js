const $app = document.getElementById("app");

let $dialog1SecondScene = null;
let $dialog2SecondScene = null;
let $dialog3SecondScene = null;

let $Holding = null;
let $SuperHolding = null;
let holding = null;
let $pupila1;
let $pupila2;

$app.style.display = "none";

window.onload = async () => {
  const responseTxt = await fetch("./Holding.html");
  const response = await responseTxt.text();
  const responseSuperHolding = await (await fetch("./SuperHolding.html")).text();

  const $scene_3 = document.querySelector("#scene_3");
  const $4Holding = document.querySelector("#fourHolding");

  $pupila1 = document.querySelector(".pupila1");
  $pupila2 = document.querySelector(".pupila2");

  holding = response;
  $Holding = document.createElement("div");
  $Holding.innerHTML = response;
  $Holding.classList.add("big");
  $Holding.querySelector(".eye1").classList.add("eyeCeja");
  $Holding.querySelector(".eye2").classList.add("eyeCeja2");
  $Holding.querySelector(".eye1").classList.remove("eye1");
  $Holding.querySelector(".eye2").classList.remove("eye2");
  $scene_3.appendChild($Holding);

  $SuperHolding = document.createElement("div");
  $SuperHolding.innerHTML = responseSuperHolding;
  $4Holding.appendChild($SuperHolding);

  $dialog1SecondScene = document.querySelector(".dialog1_section");
  $dialog2SecondScene = document.querySelector(".dialog2_section");
  $dialog3SecondScene = document.querySelector(".dialog3_section");
  const $loading = document.querySelector(".Loading");

  $loading.style.display = "none";
  $app.style.display = "initial";
  play();
};

function play () {
  firstScene();
  secondScene();
  threeScene();
  fourScene();
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
    $pupila1.classList.add("movePupi");
    $pupila2.classList.add("movePupi");
    const timer = setTimeout(() => {
      $dialog1SecondScene.style.opacity = "1";
      $dialog1SecondScene.style.display = "block";
      clearTimeout(timer);
    }, 1000);
    $tronando.removeEventListener("animationend", () => {}, false);
  });
}

function secondScene () {
  const $scene_2 = document.querySelector(".house");
  const $ceja2 = document.querySelector(".ceja2");
  const $ceja1 = document.querySelector(".ceja1");

  const $arm2 = document.getElementById("arm2");
  const $arm2_ante = $arm2.querySelector(".arm2container");
  const $cart = document.querySelector("#cart");
  const $mouth = document.querySelector(".mouth");
  const $pierna_2 = document.getElementById("pierna2");
  const $imgDialog3 = document.querySelector("#imgDialog3");

  $pierna_2.addEventListener("animationend", () => {
    clearableClasses($pierna_2);
    $ceja1.classList.add("isawesome");
    $ceja2.classList.add("isawesome");
    $arm2.classList.add("armMover");
    $arm2_ante.classList.add("armMoverAnte");
    $arm2.addEventListener("animationend", () => {
      $cart.style.display = "none";
      document.querySelector(".dk").style.display = "block";
      $ceja1.classList.add("isawesomestatic");
      $ceja2.classList.add("isawesomestatic");
      $mouth.classList.add("mouth_awesome");
      clearableClasses($arm2);
      $dialog2SecondScene.addEventListener("animationend", () => {
        $arm2.classList.add("armMoverBACK");
        $arm2_ante.classList.add("armMoverAnteBACK");
        clearableClasses($dialog2SecondScene);
        $ceja1.classList.remove("isawesomestatic");
        $ceja2.classList.remove("isawesomestatic");
        $ceja1.classList.add("sad1");
        $ceja2.classList.add("sad2");

        $dialog2SecondScene.style.display = "none";
        $dialog3SecondScene.style.display = "block";
        $dialog3SecondScene.style.opacity = "1";
      });
      $dialog1SecondScene.style.opacity = "0";
      $dialog1SecondScene.style.display = "none";
      $dialog2SecondScene.style.opacity = "1";
      $dialog2SecondScene.style.display = "block";
    });
  });

  $imgDialog3.addEventListener("animationend", () => {
    const $scene_3 = document.querySelector("#scene_3");
    $scene_2.classList.remove("selected");
    $scene_3.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
    $scene_2.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");
    $scene_3.classList.add("selected");

    const $pupila11 = $Holding.querySelector(".pupila1");
    const $pupila22 = $Holding.querySelector(".pupila2");

    $pupila11.classList.add("movePupis");
    $pupila22.classList.add("movePupis");
    $pupila1.classList.remove("movePupi");
    $pupila2.classList.remove("movePupi");
    $scene_3.classList.add("scene3_animation");

    $scene_3.querySelector(".dialog1_section3").style.opacity = "1";
    $scene_3.querySelector(".sky").classList.add("sk1");
    $scene_3.querySelector(".sky2").classList.add("sk2");
    $Holding.querySelector(".ceja1").classList.add("interestingAction");

    clearableClasses($imgDialog3);
  });
}

function threeScene () {
  const $scene_3 = document.querySelector("#scene_3");
  const $scene_4 = document.querySelector("#scene_4");
  const $parallax_image = document.getElementById("parallax_image");

  $scene_3.addEventListener("animationend", () => {
    $scene_3.classList.remove("selected");
    $scene_3.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");

    $scene_4.classList.add("selected");
    $scene_4.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
    const timer = setTimeout(() => {
      $SuperHolding.querySelector(".antifas").classList.add("fade");
      $SuperHolding.querySelector(".torso_container").classList.add("Super__torso_container");
      $SuperHolding.querySelector(".arm2_container").classList.add("Super_arm2_container");
      $SuperHolding.querySelector(".arm1_container").classList.add("Super_arm1_container");
      $SuperHolding.querySelector(".pierna2").classList.add("Super__pierna2");
      $SuperHolding.querySelector(".pierna1").classList.add("Super__pierna1");
      $SuperHolding.querySelector(".Torso").classList.add("Super__Torso");
      $SuperHolding.querySelector(".Pelvis").classList.add("Super__Pelvis");
      $SuperHolding.classList.add("SuperSize");
      document.querySelector(".image__middle").classList.add("image__middle__all");
      $SuperHolding.classList.add("SuperHead");
      clearTimeout(timer);
    }, 3000);
    $parallax_image.classList.add("rollate");
  });
}

async function fourScene () {
  const $scene_4 = document.querySelector("#scene_4");
  const $scene_5 = document.querySelector("#scene_5");
  const $parallax_image = document.getElementById("parallax_image");
  const $Dragon = document.createElement("div");
  const $SuperHoldingLocal = document.createElement("div");
  const dragon = await (await fetch("./Dragon.html")).text();
  const superHolding = await (await fetch("./SuperHoldingNormal.html")).text();
  $Dragon.innerHTML = dragon;
  $Dragon.classList.add("DragonContainer");
  $SuperHoldingLocal.innerHTML = superHolding;
  $SuperHoldingLocal.classList.add("SuperContainer");

  $scene_5.querySelector(".content").appendChild($SuperHoldingLocal);
  $scene_5.querySelector(".content").appendChild($Dragon);
  
  $parallax_image.addEventListener("animationend", () => {
    $scene_4.classList.remove("selected");
    $scene_4.querySelector(".bulletPoint_tapa").classList.remove("opacity-none");
    $scene_5.querySelector(".bulletPoint_tapa").classList.add("opacity-none");
    $scene_5.classList.add("selected");

    const timer = setTimeout(() => {
      $Dragon.classList.add("DragonContainerDK");
      $SuperHoldingLocal.classList.add("SuperNormal");
      $Dragon.querySelector(".ala").classList.add("fly");
      $Dragon.querySelector(".ala1").classList.add("fly2");
      clearTimeout(timer);
    }, 2000);
  });

  $SuperHoldingLocal.addEventListener("animationend", () => {
    $scene_5.querySelector(".ilusion").style.opacity = "0";
    const timer = setTimeout(() => {
      $scene_5.querySelector(".ilusion").style.display = "none";

      $scene_5.querySelector(".reality").innerHTML += holding;
      clearTimeout(timer);
    }, 500);
  });
}

function clearableClasses ($element, type = "animationend") {
  const $pierna_2 = document.getElementById("pierna2");
  const $pierna_1 = document.getElementById("pierna1");

  $pierna_2.classList.remove("caminar");
  $pierna_1.classList.remove("caminar11");
  $pierna_2.querySelector(".pierna22").classList.remove("moveleg12");
  $pierna_1.querySelector(".pierna11").classList.remove("moveleg11");
  $element.removeEventListener(type, () => {}, false);
}
