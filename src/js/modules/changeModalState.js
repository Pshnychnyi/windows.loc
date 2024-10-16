import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = (event, selector, prop) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elements.forEach((box, j) => {
                                box.checked = i === j;
                            })
                        } else  {
                            state[prop] = item.value;
                        }
                        break;

                }
            })

        })
    }

    bindActionToElems('click', '.balcon_icons_img', 'form')
    bindActionToElems('input', '#width', 'width')
    bindActionToElems('input', '#height', 'height')
    bindActionToElems('change', '#view_type', 'profile')
    bindActionToElems('change', '.checkbox', 'type')
}

export default changeModalState;