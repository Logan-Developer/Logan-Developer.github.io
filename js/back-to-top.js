const showOnPx = 950;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

const goToTop = () => {
    document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop)

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("back-to-top-hidden")
  } else {
    backToTopButton.classList.add("back-to-top-hidden")
  }
})