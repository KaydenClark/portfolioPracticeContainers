let accord = document.querySelector("#accord")
let container = document.querySelector("#left")

accord.addEventListener("mouseleave", () => {
    container.classList.add("hover-left");
  });
  
  accord.addEventListener("mouseenter", () => {
    container.classList.remove("hover-left");
  });