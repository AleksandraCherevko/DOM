//TODO:==============================================
/*
Завдання 1
Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)
*/

const btnEl = document.querySelector("#alertButton");
const inputEl = document.querySelector("#alertInput");

btnEl.addEventListener("click", inputValue);
function inputValue(event) {
  console.log(inputEl.value);
}
//TODO:==============================================
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapButtonEl = document.querySelector("#swapButton");
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");

swapButtonEl.addEventListener("click", swapInputValue);
function swapInputValue(event) {
  const leftSwapInputEl = leftSwapInput.value;
  const rightSwapInputEl = rightSwapInput.value;

  rightSwapInput.value = leftSwapInputEl;
  leftSwapInput.value = rightSwapInputEl;
}

//TODO:==============================================
/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/

const passwordInputRef = document.querySelector("#passwordInput");
const passwordButtonRef = document.querySelector("#passwordButton");

passwordButtonRef.addEventListener(
  "click",
  hidePassword("Открыть", "Закрыть", "type")
);

function hidePassword(btnTextOpen, btnTextClose) {
  return () => {
    const inputTypeValue = passwordInputRef.getAttribute("type");

    if (inputTypeValue === "text") {
      passwordInputRef.setAttribute("type", "password");
      passwordButtonRef.textContent = btnTextOpen;
    } else {
      passwordInputRef.setAttribute("type", "text");
      passwordButtonRef.textContent = btnTextClose;
    }
  };
}

//TODO:==============================================
/*
Завдання 4
Кнопка "Зменшити" робить квадрат менше на 10 пікселів,  "Збільшити" - більше на 10 пікселів.
*/

const boxEl = document.querySelector("#box");
const decreaseBtn = document.querySelector("#decrease");
const increaseBtn = document.querySelector("#increase");

decreaseBtn.addEventListener("click", decreaseBox);
function decreaseBox(event) {}

//TODO:==============================================
/*
Завдання 5
Додайте слухач кліку на window і визначте чи клікнув користувач у дів з id="place".
*/

// const placeRef = document.querySelector("#place");
// addEventListener("click", (e) => {
//   console.log(e.target === placeRef ? true : false);
// });

//TODO:==============================================
/*
Завдання 6
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази
*/

//TODO:==============================================
/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// ===================================================
// ===================================================

/*
Задача 8
При кліку на кожну із кнопок додаються значення з data-атрибутів.
При натисканні на кнопку "Вивести результат" виводиться сума значень, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// ===================================================
// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/
