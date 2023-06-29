(function () {
    const burgerItem = document.querySelector('.burger');
    console.log(burgerItem);
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });

    if (window.innerWidth <= 1500) {

        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav_active');
            });
        }
    }

}());



function validation(form) {
    function removeError(input) {

        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove()
            parent.classList.remove('error')
        }
    }


    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label')
        errorLabel.classList.add('error-label')
        errorLabel.textContent = text


        parent.classList.add('error')
        parent.append(errorLabel)

    }
    let result = true;


    const allInputs = form.querySelectorAll('input');
    for (const input of allInputs) {
        removeError(input)

        if (input.value == "") {
            console.log('Ошибка')
            createError(input, 'Поле не заполнено')
            result = false
        }

    }


    return result
}

document.getElementById('add-form').addEventListener('submit', function (event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('Форма проверена успешна')
    }

})

/*
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Отменяем отправку формы по умолчанию
  
  const formData = new FormData(form);
  
  fetch('url_сервера', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Обработка ответа от сервера
    console.log(data);
  })
  .catch(error => {
    // Обработка ошибок
    console.error(error);
  });
});
*/