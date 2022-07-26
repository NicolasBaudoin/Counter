//initial count
let count = 0;

//select value and btn
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); //nodelist
const span = document.querySelector("span");
//for each on nodelist

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
      span.style.color = "red";
    } else if (styles.contains("increase")) {
      count++;
      span.style.color = "green";
    } else if (styles.contains("reset")) {
      count = 0;
      span.style.color = "black";
    }
    value.textContent = count;
  });
});
