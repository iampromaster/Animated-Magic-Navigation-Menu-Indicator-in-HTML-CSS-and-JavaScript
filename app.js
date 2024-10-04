let links = document.querySelectorAll("li");
let indicator = document.querySelector(".indicator");

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    links.forEach((link) => {
      link.classList.remove("active");
    })
    link.classList.add("active");

    indicator.style.transform = `translateX(calc(${index} * 70px))`;
  })
})
