const input = document.getElementById('name-input');
  const output = document.getElementById('name-output');

  input.addEventListener('input', () => {
    const trimValue = input.value.trim();
    output.textContent = trimValue.length > 0 ? trimValue : 'Anonymous';
  });