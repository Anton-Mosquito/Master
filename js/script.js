const data = document.querySelector("#dataField");
const btn = document.querySelector("#showReasult");
const resultField = document.querySelector(".simple-form__row--show-result");
const form = document.forms[0];

class FormCheck {
  constructor() {}
  renderResult() {
    function action(e) {
      const findSimbols = (arr) => {
        const arrayOfSimbols = [
          "!",
          "@,",
          "#",
          "$",
          "%",
          "^",
          "&",
          "*",
          "(",
          ")",
          "-",
          "_",
          "=",
          "+",
          "~",
          "`",
          "|",
        ];
        for (let i = 0; i < arr.length; i++) {
          for (let k = 0; k < arrayOfSimbols.length; k++) {
            if (arr[i] == arrayOfSimbols[k]) {
              return true;
            }
          }
        }
        return false;
      };
      const condition = () => {
        if (x.length > 3 && !findSimbol) {
          data.value = "";
          resultField.innerHTML += x.join("") + " ";
          resultField.style.backgroundColor = "green";
        } else if (findSimbol) {
          resultField.innerHTML += x.join("") + " ";
          resultField.style.backgroundColor = "red";
        }
      };
      let target = e.target;
      let x = data.value.split("");
      let findSimbol = findSimbols(x);
      if (target.tagName.toLowerCase() == "input") {
        if (e.key == "Enter") condition();
      } else if (target.tagName.toLowerCase() == "button") {
        condition();
      }
      resultField.classList.add("active");
    }
    form.addEventListener("submit", (e) => e.preventDefault());
    data.addEventListener("keydown", action);
    btn.addEventListener("click", action);
  }
}

let example = new FormCheck();
example.renderResult();
