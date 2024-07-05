// Завдання 1 - Таймер зворотного відліку
// Виконуй це завдання у файлах 1 - timer.html і 1 - timer.js.
// Напиши скрипт таймера, який здійснює зворотний відлік до певної дати.
// Такий таймер може використовуватися у блогах, інтернет - магазинах,
// сторінках реєстрації подій, під час технічного обслуговування тощо.
// Подивися демовідео роботи таймера.
// Елементи інтерфейсу

// Додай в HTML файл розмітку таймера, поля вибору кінцевої дати і кнопку,
// при кліку на яку таймер повинен запускатися.
// Додай оформлення елементів інтерфейсу згідно з макетом.
// Бібліотека flatpickr

// Використовуй бібліотеку flatpickr для того,
//     щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в 
// одному елементі інтерфейсу.Для того щоб підключити CSS код бібліотеки в проєкт,
// необхідно додати ще один імпорт, крім того, що описаний в документації.

// Вибір дати
// Метод onClose() з об'єкта параметрів викликається щоразу під час закриття 
// елемента інтерфейсу, який створює flatpickr. Саме в ньому варто обробляти дату, 
// обрану користувачем. Параметр selectedDates — це масив обраних дат, тому ми 
// беремо перший елемент selectedDates[0].
// Тобі ця обрана дата буде потрібна в коді і поза межами цього методу onClose().
// Тому оголоси поза межами методу let змінну, наприклад, userSelectedDate, і після
//  валідації її в методі onClose() на минуле/майбутнє запиши обрану дату в цю let 
//  змінну.

// Якщо користувач вибрав дату в минулому, покажи window.alert() з текстом 
// "Please choose a date in the future" і зроби кнопку «Start» не активною.
// Якщо користувач вибрав валідну дату (в майбутньому), кнопка «Start» стає 
// активною.
// Кнопка «Start» повинна бути неактивною доти, доки користувач не вибрав дату
//  в майбутньому. Зверни увагу, що при обранні валідної дати, не запуску таймера 
//  і обранні потім невалідної дати, кнопка після розблокування має знову стати 
//  неактивною.
// Натисканням на кнопку «Start» починається зворотний відлік часу до обраної 
// дати з моменту натискання.


// Відлік часу
// Натисканням на кнопку «Start» скрипт повинен обчислювати раз на секунду,
//  скільки часу залишилось до вказаної дати, і оновлювати інтерфейс таймера,
//   показуючи чотири цифри: дні, години, хвилини і секунди у форматі xx:xx:xx:xx.
// Кількість днів може складатися з більше, ніж двох цифр.
// Таймер повинен зупинятися, коли дійшов до кінцевої дати, 
// тобто залишок часу дорівнює нулю 00:00:00:00.
// Після запуску таймера натисканням кнопки Старт кнопка Старт і інпут стають 
// неактивним, щоб користувач не міг обрати нову дату, поки йде відлік часу.
//  Після зупинки таймера інпут стає активним, щоб користувач міг обрати наступну 
//  дату. Кнопка залишається не активною.
// Для підрахунку значень використовуй готову функцію convertMs, де ms — різниця 
// між кінцевою і поточною датою в мілісекундах.
   
// Форматування часу
// Функція convertMs() повертає об'єкт з розрахованим часом, що залишився 
// до кінцевої дати. Зверни увагу, що вона не форматує результат.
//  Тобто якщо залишилося 4 хвилини або будь-якої іншої складової часу, 
//  то функція поверне 4, а не 04. В інтерфейсі таймера необхідно додавати 0,
// якщо в числі менше двох символів. Напиши функцію, наприклад
// addLeadingZero(value), яка використовує метод рядка padStart() і перед 
// відмальовуванням інтерфейсу форматує значення.

// Бібліотека повідомлень
// Для відображення повідомлень користувачеві, замість window.alert(),
// використовуй бібліотеку iziToast. Для того щоб підключити CSS код бібліотеки
// в проєкт, необхідно додати ще один імпорт, крім того, що описаний у документації.
// Бібліотека очікує, що її ініціалізують на елементі input[type = "text"],
//     тому ми додали до HTML документа поле input#datetime - picker.


// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const datetimePicker = document.getElementById('datetime-picker');
const dataStart = document.getElementById('data-start');
const elements = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}
// Оголошуємо змінні для збереження вибраної дати та інтервалу таймера
let userSelectedDate = null;
let countdownInterval = null;

// Налаштування для flatpickr
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
      if(!userSelectedDate || userSelectedDate <= new Date()) {
        iziToast.warning({
            icon: '',
            messageColor: 'white',
            position: 'topRight',
            messageSize: '10px',
            backgroundColor: 'red',
            
            message:"Please choose a date in the future"
                });
        dataStart.disabled = true;
      } else{
        dataStart.disabled = false;
      }
    },
  };
  // Ініціалізація flatpickr з налаштуваннями
  flatpickr(datetimePicker, options);
  // Додавання обробника події на кнопку "Start"
  dataStart.addEventListener('click', () => {
    if (!userSelectedDate || userSelectedDate <= new Date()) {
        iziToast.show({
            icon: '',
            messageColor: 'white',
            position: 'topRight',
            messageSize: '10px',
            backgroundColor: 'red',
            
            message:"Please choose a date in the future"
        });
       return;
    }
  // Очищення попереднього інтервалу таймера
clearInterval(countdownInterval);
// Запуск таймера з оновленням раз на секунду
countdownInterval = setInterval(() => {
    const now = new Date(); // Поточний час
    const timeLeft = userSelectedDate - now; // Час, що залишився до вибраної дати
  // Якщо час вичерпано, зупиняємо таймер
  if(timeLeft <= 0 ) {
    clearInterval(countdownInterval);
    dataStart.disabled = false; // Активізація кнопки "Start"
    datetimePicker.disabled = false; // Активізація поля вибору дати
    return;
  }
  // Розрахунок днів, годин, хвилин та секунд, що залишилися
  const {days, hours, minutes, seconds} = convertMs(timeLeft);
  // Оновлення значень на екрані
  elements.days.textContent = addLeadingZero(days);
  elements.hours.textContent = addLeadingZero(hours);
  elements.minutes.textContent = addLeadingZero(minutes);
  elements.seconds.textContent = addLeadingZero(seconds);
   }, 1000);
dataStart.disabled = true; // Деактивація кнопки "Start" під час таймера
datetimePicker.disabled = true; // Деактивація поля вибору дати під час таймера
  });
  // Функція для перетворення мілісекунд у дні, години, хвилини та секунди
    function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  // Функція для додавання нуля перед числом, якщо воно менше двох символів
function addLeadingZero(value){
    return String(value).padStart(2, '0');
}

  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
  