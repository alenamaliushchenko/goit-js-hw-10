// Завдання 2 - Генератор промісів

// Виконуй це завдання у файлах 2-snackbar.html і 2-snackbar.js.
//  Подивися демовідео роботи генератора промісів.
// Додай в HTML файл розмітку форми. Форма складається з поля вводу для
// введення значення затримки в мілісекундах, двох радіокнопок, які визначають те, 
// як виконається проміс, і кнопки з типом submit, при кліку на яку має
// створюватися проміс.
// Напиши скрипт, який після сабміту форми створює проміс. 
// В середині колбека цього промісу через вказану користувачем кількість мілісекунд
// проміс має виконуватися (при fulfilled) або відхилятися (при rejected), 
// залежно від обраної опції в радіокнопках. Значенням промісу, яке передається 
// як аргумент у методи resolve/reject, має бути значення затримки в мілісекундах.

// Створений проміс треба опрацювати у відповідних для вдалого/невдалого
//  виконання методах.

// Якщо проміс виконується вдало, виводь у консоль наступний рядок, 
// де delay — це значення затримки виклику промісу в мілісекундах.
// `✅ Fulfilled promise in ${delay}ms`
// Якщо проміс буде відхилено, то виводь у консоль наступний рядок, 
// де delay — це значення затримки промісу в мілісекундах.
// `❌ Rejected promise in ${delay}ms`
// Бібліотека повідомлень

// Для відображення повідомлень, замість console.log(),
//  використовуй бібліотеку iziToast. Для того щоб підключити CSS 
//  код бібліотеки в проєкт, необхідно додати ще один імпорт,
//   крім того, що описаний у документації.

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

document.getElementById('promise-form').addEventListener ('submit', function(event) {
    event.preventDefault();

    const delay = parseInt(document.getElementById('delay').value, 10);
    const state = document.querySelector('input[name="state"]:checked').value;

    const promise = new Promise((resolve, reject) => {
        setTimeout (() => {
            if(state === "success") {
                    resolve(`✅ Fulfilled promise in ${delay}ms`);
            } else {
                    reject(`❌ Rejected promise in ${delay}ms`);
            }
        }, delay);
    });
        promise
        .then(message => {
            iziToast.show ({
                title: 'Success',
                backgroundColor: 'green',
                messageColor: 'white',
                position: 'topRight',
                messageSize: '10px'
            });
        })
        .catch (message => {
            iziToast.show ({
                title: 'Error',
                backgroundColor: 'red',
                messageColor: 'white',
                position: 'topRight',
                messageSize: '10px'
            });
        });
    });