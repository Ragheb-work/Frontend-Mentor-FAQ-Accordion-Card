let questions = Array.from(document.querySelectorAll(".ask"));

questions.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.nextElementSibling.classList.contains("show")) {
      item.classList.toggle("open");
      item.nextElementSibling.classList.toggle("show");
      e.children[0].classList.toggle("arrow");
    } else {
      questions.forEach((iteem) => {
        iteem.nextElementSibling.classList.remove("show");
        item.nextElementSibling.classList.add("show");
        iteem.classList.remove("open");
        item.classList.add("open");
        iteem.children[0].classList.remove("arrow");
        item.children[0].classList.add("arrow");
      });
    }
  });
});
