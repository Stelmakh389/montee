// Считываем поле ввода
let phoneInput = document.querySelectorAll(".phone");
// Считываем кнопку
let btn = document.querySelectorAll(".btn");

phoneInput.forEach(function (elex) {
  
// Создаем маску в инпуте

const phoneMask = new IMask(elex, {
      mask: "+{7}(000)000-00-00",
    });
    
// Обработчик события для инпута
elex.addEventListener("input", phoneInputHandler);    

// Если ввели правлильно - кнопка активна
function phoneInputHandler() {
  
    btn.forEach(function (btnm) {
        if (phoneMask.masked.isComplete) {
            btnm.classList.add("btn--active");
          } else {
            btnm.classList.remove("btn--active");
          }
    });
  }
  
});


$(document).ready(function () {
    $(".popup.telegram-form").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'send.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                window.location.href = "thank-you.php";
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html('<p style="text-align:center">Произошла ошибка отправки формы. Перезагрузите страницу!</p>');
            }
        });
        return false;
    });
});

$(document).ready(function () {
    $("#quiz").submit(function () {
        // Получение ID формы
        var formID = $(this).attr('id');
        // Добавление решётки к имени ID
        var formNm = $('#' + formID);
        $.ajax({
            type: "POST",
            url: 'send2.php',
            data: formNm.serialize(),
            beforeSend: function () {
                // Вывод текста в процессе отправки
                $(formNm).html('<p style="text-align:center">Отправка...</p>');
            },
            success: function (data) {
                // Вывод текста результата отправки
                window.location.href = "thank-you.php";
            },
            error: function (jqXHR, text, error) {
                // Вывод текста ошибки отправки
                $(formNm).html('<p style="text-align:center">Произошла ошибка отправки формы. Перезагрузите страницу!</p>');
            }
        });
        return false;
    })
    
});




	