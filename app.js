let openQ = document.querySelectorAll(".feqQuestion");

openQ.forEach((v, index) => {
  v.addEventListener("click", () => {
    v.nextElementSibling.classList.toggle("scale-y-100");
    v.nextElementSibling.classList.toggle("h-[auto]");
    v.nextElementSibling.classList.toggle("px-[20px]");
    v.children[1].classList.toggle("rotate-45");
    openQ.forEach((el, i) => {
      if (i != index) {
        el.nextElementSibling.classList.remove(
          "scale-y-100",
          "h-[auto]",
          "px-[20px]"
        );
        el.children[1].classList.remove("rotate-45");
      }
    });
  });
});
