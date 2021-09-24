let train = null;
let holding = null;

const start = async ({ holdingParameter }) => {
  holding = holdingParameter;
  train = await (await fetch("./assets/scenes/Train.html")).text();
  firstScene();
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
    $scene12.querySelector(".ilusion").style.opacity = "0";
    const timer = setTimeout(() => {
      $scene12.querySelector(".ilusion").style.display = "none";
      clearTimeout(timer);
    }, 2000);
  });
};

export {
  start,
};
