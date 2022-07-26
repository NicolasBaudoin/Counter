//initial count
let count = 0;

//select value and btn
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); //nodelist

//for each on nodelist

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
  });
});
