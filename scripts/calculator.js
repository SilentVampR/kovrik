/*jQuery(function () {
  function calculate() {
    var total1 = 0;
    if ($('#height').val() != '') {
      var height = parseFloat($('#height').val());
    }
    else {
      var height = 0;
    }
    if ($('#width').val() != '') {
      var width = parseFloat($('#width').val());
    }
    else {
      var width = 0;
    }
    var type = $('#type').val();
    var total1 = width * height;
    total1 = total1 * type;
    $('#sub_total').html("Подитог: от " + total1 + " руб.");
    return total1;
  }
  function calculate2() {
    var total2 = 0;
    if ($('#height2').val() != '') {
      var height2 = parseFloat($('#height2').val());
    }
    else {
      var height2 = 0;
    }
    if ($('#width2').val() != '') {
      var width2 = parseFloat($('#width2').val());
    }
    else {
      var width2 = 0;
    }
    var type2 = $('#type2').val();
    var total2 = width2 * height2;
    total2 = total2 * type2;
    $('#sub_total2').html("Подитог: от " + total2 + " руб.");
    return total2;
  }
  function calculate3() {
    var total3 = 0;
    if ($('#height3').val() != '') {
      var height3 = parseFloat($('#height3').val());
    }
    else {
      var height3 = 0;
    }
    if ($('#width3').val() != '') {
      var width3 = parseFloat($('#width3').val());
    }
    else {
      var width3 = 0;
    }
    var type3 = $('#type3').val();
    var total3 = width3 * height3;
    total3 = total3 * type3
    $('#sub_total3').html("Подитог: от " + total3 + " руб.");
    return total3;
  }
  function add1() {
    $('#add_1').css('display', 'none');
    $('#form2').css('display', 'block');
  }
  function add2() {
    $('#add_2').css('display', 'none');
    $('#form3').css('display', 'block');
  }
  function write() {
    var wtotal1 = calculate();
    var wtotal2 = calculate2();
    var wtotal3 = calculate3();
    var wtotal = wtotal1 + wtotal2 + wtotal3;
    var wtext = "Итого: от " + wtotal + " руб.";
    $('#total').html(wtext);
  }

  function del2() {
    $('#height2').val('');
    $('#width2').val('');
    $('#type2').val('0');
    $('#add_1').css('display', 'block');
    $('#form2').css('display', 'none');
    write();
  }
  function del3() {
    $('#height3').val('');
    $('#width3').val('');
    $('#type3').val('0');
    $('#add_2').css('display', 'block');
    $('#form3').css('display', 'none');
    write();
  }

  $('#add_1').on('click', add1);
  $('#add_2').on('click', add2);

  $('#height').keyup(calculate);
  $('#height').keyup(write);
  $('#width').keyup(calculate);
  $('#width').keyup(write);
  $('#type').change(calculate);
  $('#type').change(write);
  $('#height2').keyup(calculate);
  $('#height2').keyup(write);
  $('#width2').keyup(calculate);
  $('#width2').keyup(write);
  $('#type2').change(calculate);
  $('#type2').change(write);
  $('#height3').keyup(calculate);
  $('#height3').keyup(write);
  $('#width3').keyup(calculate);
  $('#width3').keyup(write);
  $('#type3').change(calculate);
  $('#type3').change(write);

  $('#del2').on('click', del2);
  $('#del3').on('click', del3);
});*/

const calculator = document.querySelector('.calculator');

const calculatorContainer = calculator.querySelector('.calculator__container');

// const form = calculatorContainer.querySelector('.calculator__form');


const calculate = (e) => {
  const targetForm = e.target.closest('.calculator__carpet');
  const height = targetForm.querySelector('.calculator__form-input_param_height').value;
  const width = targetForm.querySelector('.calculator__form-input_param_width').value;
  const price = targetForm.querySelector('.calculator__form-input_param_type').value;
  let subTotalPrice = 0;
  if(height > 0 && width > 0 && price > 0) {
    subTotalPrice = width * height * price;
    targetForm.querySelector('.calculator__text-sum').textContent = subTotalPrice;
  }
  totalSum();
}

const totalSum = () => {
  const sums = calculator.querySelectorAll('.calculator__text-sum');
  let total = 0;
  if(sums) {
    const sumsList = Array.from(sums);
    sumsList.forEach(item => {
      total += parseFloat(item.textContent);
    })
  }
  //Берем все итого на странице и складываем в конце каждой калькуляции
  console.log(total);
}

const addForm = () => {
  const carpetTemplate = calculatorContainer.querySelector('#carpet').content.querySelector('.calculator__carpet').cloneNode(true);
  let formsOnPage = 0;
  const forms = calculatorContainer.querySelectorAll('.calculator__form');
  if(forms) {
    formsOnPage = Array.from(forms).length;
  }
  if (formsOnPage <= 3) {
    const formId = formsOnPage + 1;
    const form = carpetTemplate.querySelector('.calculator__form');
    const inputs = form.querySelectorAll('.calculator__form-input');
    const title = carpetTemplate.querySelector('.calculator__title');
    const addButton = carpetTemplate.querySelector('.calculator__button');
    if(formId !== 1) {
      addButton.classList.remove('calculator__button_type_add');
      addButton.classList.add('calculator__button_type_remove');
      addButton.textContent = "Удалить ковёр";
      addButton.addEventListener('click', removeForm);
    } else {
      addButton.addEventListener('click', addForm);
    }

    form.addEventListener('keyup', calculate);

    title.textContent = `Ковёр №${formId}`;
    console.log(carpetTemplate);
    calculatorContainer.append(carpetTemplate);
  }
}

const removeForm = (e) => {
  // e.target.removeEventlistener('click', removeForm);
  console.log(e.target);
}


function digit(input) {
  input.value = input.value.replace(/[^\.\,\d]+/ig, '').replace(/[\.\,]+/ig, '.');
  return false;
};

addForm();
