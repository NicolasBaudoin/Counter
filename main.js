//initial count
let count = 0;

//select value and btn
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); //nodelist
const span = document.querySelector("span");

//for each on nodelist to increase, decrease or reset the count

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
    // change caracters color according to count
    if (count < 0) {
      span.style.color = "red";
    } else if (count === 0) {
      span.style.color = "black";
    } else if (count > 0) {
      span.style.color = "green";
    }
  });
});
