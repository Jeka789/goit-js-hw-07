function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function cubBoxes(amount) {
  const boxesCont = document.getElementById('boxes');
  boxesCont.innerHTML = '';

  const boxesFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesFragment.appendChild(box);
  }
  boxesCont.appendChild(boxesFragment);
}

function destroyBoxes() {
  const boxesCont = document.getElementById('boxes');
  boxesCont.innerHTML = '';
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('.inp-st');
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    return;
  }

  cubBoxes(amount);
  input.value = '';
});

document.querySelector('[data-destroy]').addEventListener('click', () => {
  destroyBoxes();
});






