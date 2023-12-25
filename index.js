let z = 0;
const imageTime = 500;
const textTime = 250;
const offsetTime = 150;

const handleFilmClicked = (event) => {
  const target = event.target;

  if (target.style.transform != "rotateY(180deg)") {
    target.parentElement.style.zIndex = ++z;
    target.style.transform = "rotateY(180deg)";
    target.style.transition = `${imageTime}ms`;
    target.querySelector("img").style.transition = `${imageTime}ms`;
    target.querySelector(".description").style.transition = `${textTime}ms`;
    target.querySelector("img").style.filter = "blur(15px) brightness(0.4)";
    target.querySelector("img").style.transform = "scale(1.2)";

    setTimeout(() => {
      target.querySelector(".description").style.opacity = "1";
    }, imageTime - textTime - 100);
  } else {
    target.style.transform = "rotateY(0deg)";
    target.querySelector("img").style.filter = "none";
    target.querySelector("img").style.transform = "scale(1)";
    target.querySelector(".description").style.opacity = "0";
  }
}

Array.from(document.querySelectorAll(".film")).forEach(film => {
  film.addEventListener("click", handleFilmClicked);
});