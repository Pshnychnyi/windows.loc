const checkNumInputs = (selector, prefix = '') => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = `${prefix + item.value.replace(/\D/g, '').slice(0, 11)}`;
        })
    })
}

export default checkNumInputs;