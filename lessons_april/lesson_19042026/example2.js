export const quiz = {
    question: 'Выберите столицу Канады',
    variants: ['Toronto', 'Vancouver', 'Ottawa'],
    correctVariant: 'Ottawa'
}

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');

questionEl.textContent = quiz.question;

// 3. Создаем кнопку для каждого варианта ответа
quiz.variants.forEach((variant) => {
    const button = document.createElement('button');
    button.textContent = variant;
    button.style.margin = '5px'; // Небольшой отступ

    // Обработка клика по кнопке
    button.addEventListener('click', (event) => {
        event.preventDefault();

        if (variant === quiz.correctVariant) {
            resultEl.textContent = 'Правильно! Ottawa — столица Канады.';
            resultEl.style.color = 'green';
        } else {
            resultEl.textContent = 'Неправильно, попробуйте еще раз.';
            resultEl.style.color = 'red';
        }
    });

    optionsEl.appendChild(button);
});
