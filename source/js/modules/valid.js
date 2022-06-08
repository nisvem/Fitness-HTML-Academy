import {modals as modal} from '../modules/modals/init-modals';


window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-form]').forEach((form) => {
    const name = form.querySelector('[data-name]');
    const phone = form.querySelector('[data-tel]');

    form.addEventListener('submit', function (evt) {

      if (!validatePhone(phone.value) || !validateName(name.value)) {
        evt.preventDefault();

        if (!validateName(name.value)) {
          name.classList.remove('is--error');
          name.classList.add('is--error');
        } else {
          name.classList.remove('is--error');
        }

        if (!validatePhone(phone.value)) {
          phone.classList.remove('is--error');
          phone.classList.add('is--error');
        } else {
          phone.classList.remove('is--error');
        }

      } else {
        evt.preventDefault();
        phone.classList.remove('is--error');
        name.classList.remove('is--error');
        modal.open('success');
        name.value = '';
        phone.value = '';
        // Тут отправить форму Ajax'ом
      }
    });
  });
});

function validatePhone(phone) {
  if (phone.length < 17) {
    return false;
  } else {
    return true;
  }
}

function validateName(name) {
  if (name.length > 0) {
    return true;
  } else {
    return false;
  }
}

// Код взят с сайта и доработан https://newqos.com/zametki-yuzera/42-maska-vvoda-nomera-telefona-na-chistom-js

window.addEventListener('DOMContentLoaded', function () {
  [].forEach.call(document.querySelectorAll('[data-tel]'), function (input) {
    let keyCode;
    function mask(event) {

      if (event.keyCode) {
        keyCode = event.keyCode;
      }
      let pos = input.selectionStart;
      if (pos < 3) {
        event.preventDefault();
      }
      let matrix = '+7 (___) ___ ____';
      let i = 0;
      let def = matrix.replace(/\D/g, '');
      let val = input.value.replace(/\D/g, '');
      let newValue = matrix.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        if (i < 5) {
          i = 3;
        }
        newValue = newValue.slice(0, i);
      }
      let reg = matrix.substr(0, input.value.length).replace(/_+/g,
          function (a) {
            return '\\d{1,' + a.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(input.value) || input.value.length < 5 || keyCode > 47 && keyCode < 58) {
        input.value = newValue;
      }
      if (event.type === 'blur' && input.value.length < 5) {
        input.value = '';
      }
    }

    input.addEventListener('input', mask, false);
    input.addEventListener('focus', mask, false);
    input.addEventListener('blur', mask, false);
    input.addEventListener('keydown', mask, false);
  });
});
