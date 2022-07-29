const body = document.querySelector("body");
const nav = body.querySelector("nav");
const menu = body.querySelector("#hamburger-menu");
const items = body.querySelector(".items");




menu.addEventListener("click", () => {
  nav.style.backgroundColor = "lightblue";
  body.style.backgroundColor = "black";
  const visibiltiy = items.getAttribute("data-visible");
  console.log(visibiltiy);
})
