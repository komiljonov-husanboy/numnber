var elList = document.querySelector('.list');
var count = 0;

function next() {
  if (count < 3) {
    count = count + 1;
  } else {
    count = 0;
  }
  elList.style.transform = `translateX(-${600 * count}px)`;
}

function back() {
  if (count > 0) {
    count = count - 1;
  } else {
    count = 3;
  }
  elList.style.transform = `translateX(-${600 * count}px)`;
}


//yangi vazifa 

var elSpan = document.querySelector('span');
var elInput = document.querySelector('.inpt');

function input() {
  var number = parseInt(elInput.value);

  if (number === 3 || number === 7) {
    var natija = '';
    
    for (var i = 0; i < 100; i++) {
      if (i % number === 0) {
        natija += i + ' ';
      }
    }

    if (natija !== '') {
      elSpan.textContent = natija;
    } else {
      elSpan.textContent = 'Bunday son mavjud emas.';
    }
  } else {
    elSpan.textContent = 'Faqat 3 yoki 7 ni kriting.';
  }
}


function inps() {
  var allInputs = document.querySelectorAll('.spen');
  var resultSpan = document.querySelector('.all');
  var number = parseInt(allInputs[0].value);

  if (!isNaN(number)) {
    var result = '';

    for (let i = 0; i < 100; i++) {
      if (i % number === 0) {
        result += i + ' ';
      }
    }

    if (result !== '') {
      resultSpan.textContent = result;
    } else {
      resultSpan.textContent = 'Bunday son mavjud emas.';
    }
  } else {
    resultSpan.textContent = 'Iltimos, haqiqiy son kiriting.';
  }
}