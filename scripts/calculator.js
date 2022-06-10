const calculator = document.querySelector('.calculator');

const calculatorContainer = calculator.querySelector('.calculator__container');

const calculate = (e) => {
  const targetForm = e.target.closest('.calculator__carpet');
  const height = targetForm.querySelector('.calculator__form-input_param_height').value;
  const width = targetForm.querySelector('.calculator__form-input_param_width').value;
  const priceSelector = targetForm.querySelector('.calculator__form-input_param_type');
  const priceSelectorText = priceSelector.options[priceSelector.selectedIndex].text;
  const price = priceSelector.value;
  if (price > 0) {
    priceSelector.title = priceSelectorText;
  } else {
    priceSelector.title = "Выберите тип";
  }
  let subTotalPrice = 0;
  if (height > 0 && width > 0 && price > 0) {
    subTotalPrice = width * height * price;
    targetForm.querySelector('.calculator__text-sum').textContent = subTotalPrice;
  }
  totalSum();
}

const totalSum = () => {
  const sums = calculator.querySelectorAll('.calculator__text-sum');
  let total = 0;
  if (sums) {
    const sumsList = Array.from(sums);
    sumsList.forEach(item => {
      total += parseFloat(item.textContent);
    })
  }
  const totalField = calculator.querySelector('.calculator__total-sum');
  totalField.textContent = total;
}

const handleInputChange = (e) => {
  digit(e.target);
  calculate(e);
}

const addForm = () => {
  const carpetTemplate = calculatorContainer.querySelector('#carpet').content.querySelector('.calculator__carpet').cloneNode(true);
  let formsOnPage = 0;
  const forms = calculatorContainer.querySelectorAll('.calculator__form');
  if (forms) {
    formsOnPage = Array.from(forms).length;
  }
  if (formsOnPage <= 2) {
    const formId = formsOnPage + 1;
    const form = carpetTemplate.querySelector('.calculator__form');
    const inputs = form.querySelectorAll('.calculator__form-input');
    const title = carpetTemplate.querySelector('.calculator__title');
    const addButton = carpetTemplate.querySelector('.calculator__button');
    const removeButton = carpetTemplate.querySelector('.calculator__remove-button');

    inputs.forEach(item => {
      if (item.name === 'type') {
        item.addEventListener('change', calculate);
      } else {
        item.addEventListener('keyup', handleInputChange);
      }
    });

    if (formId !== 1) {
      removeButton.classList.add('calculator__remove-button_active');
      removeButton.addEventListener('click', removeForm);
    }
    addButton.addEventListener('click', addForm);

    title.textContent = `Ковёр №${formId}`;

    calculatorContainer.append(carpetTemplate);
  }
}

const removeForm = (e) => {
  e.target.closest('.calculator__carpet').remove();
  totalSum();
}


function digit(input) {
  input.value = input.value.replace(/[^\.\,\d]+/ig, '').replace(/[\.\,]+/ig, '.');
  return false;
};

addForm();
