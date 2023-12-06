const nameImput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");


nameImput.addEventListener('input', (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue === '') {
        output.textContent = 'Anonymous';
    } else { output.textContent = inputValue; }
})
