// Переменная для хранения текущего значения счетчика
let count = 0;

// Получаем элементы из DOM
const countText = document.getElementById('count');
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');
const btnDecreaseBy2 = document.getElementById('btn-decrease-by-2');
const btnIncreaseBy2 = document.getElementById('btn-increase-by-2');

// Функция обновления состояния кнопок и текста
function updateUI() {
    // Обновляем текст на странице
    countText.textContent = count;

    // Если счетчик 0 — кнопка "Уменьшить" отключена
    btnDecrease.disabled = (count <= 0);

    // Если счетчик 0 или 1 — кнопка "Уменьшить на 2" отключена
    btnDecreaseBy2.disabled = (count < 2);

    // Если счетчик 10 — кнопка "Увеличить" отключена
    btnIncrease.disabled = (count >= 10);

    // Если счетчик 9 или 10 — кнопка "Увеличить на 2" отключена
    btnIncreaseBy2.disabled = (count > 8);
}

// Навешиваем обработчики событий на кнопки
btnDecrease.addEventListener('click', () => {
    count -= 1;
    updateUI();
});

btnIncrease.addEventListener('click', () => {
    count += 1;
    updateUI();
});

btnDecreaseBy2.addEventListener('click', () => {
    count -= 2;
    updateUI();
});

btnIncreaseBy2.addEventListener('click', () => {
    count += 2;
    updateUI();
});

// Первоначальный вызов функции для установки корректного состояния кнопок на старте
updateUI();