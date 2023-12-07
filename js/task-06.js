document.addEventListener('DOMContentLoaded', function () {
  const inputNumber = document.querySelector("input");
  const buttonCreate = document.querySelector("[data-create]");
  const buttonDestroy = document.querySelector("[data-destroy]");
  const newBox = document.querySelector("#boxes");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      size += 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      newBox.appendChild(box);
    }
  }

  buttonCreate.addEventListener("click", () => {
    const amount = inputNumber.value;
    newBox.innerHTML = ""; // Очищаємо попередні блоки
    createBoxes(amount);
    inputNumber.value = "";
  });

  buttonDestroy.addEventListener("click", () => {
    newBox.innerHTML = "";
  });
});
