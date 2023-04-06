/* Created by Tivotal */
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let maxBoxes = 10;

function generatePalette() {
  container.innerHTML = "";
  for (let i = 0; i < maxBoxes; i++) {
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);

    //adding # to hex value
    randomHex = `#${randomHex.padStart(6, "0")}`;
    //here pad start will add 0 to make sure that hex value length is 6
    console.log(randomHex);

    //creating new li tag
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = ` <div class="box" style="background: ${randomHex}"></div>
        <span class="value">${randomHex}</span>`;
    color.addEventListener("click", () => {
      copyColorCode(color, randomHex);
    });
    container.appendChild(color);
  }
}

generatePalette();

btn.addEventListener("click", generatePalette);

function copyColorCode(element, code) {
  const colorElement = element.querySelector(".value");
  //copying hex value to clipboard
  navigator.clipboard.writeText(code).then(() => {
    //once copied text changes to copied and color into green
    colorElement.innerText = "Copied";
    colorElement.style.color = "green";
    setTimeout(() => {
      //after 1 second text changes to color code and color into black
      colorElement.innerText = code;
      colorElement.style.color = "#444";
    }, 1000);
  });
}
