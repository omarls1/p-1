// subscrib
let subscrib = document.querySelector(".subscrib");
let subOverlay = document.querySelector(".sub-overlay");
let showsub = setInterval(() => {
  if (subscrib.classList.contains("remove")) {
    subscrib.classList.remove("remove");
    subOverlay.classList.remove("remove");
  } else if (!subscrib.classList.contains("remove")) {
    clearInterval(showsub);
  }
}, 3000);

let clossIcon = document.querySelector(".subscrib .closs-icon");
clossIcon.onclick = () => {
  subscrib.classList.add("remove");
  subOverlay.classList.add("remove");

  clearInterval(showsub); // إيقاف setInterval عند النقر على الزر
};

// card show more
let boxes = document.querySelector(".work .container .boxes .row");
let showMore = document.querySelector(".work .container .show-More");

let additionalContent = `<div class="col-3 text-light box">370px / 280px<span></span>
                            <p>Awesome Work</p>
                        </div>`;

showMore.addEventListener("click", () => {
  for (let i = 0; i < 3; i++) {
    boxes.innerHTML += additionalContent;
  }
  let box = document.querySelectorAll(".work .container .boxes .row .box");
  if (box.length >= 18) {
    showMore.style.display = "none";
  }
  console.log(box.length);
});
