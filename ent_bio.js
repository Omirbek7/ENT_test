const questions = [
  {
    question: "Что является единицей наследственности?",
    options: ["Ген", "Клетка", "Организм", "Белок"],
    correctAnswer: "Ген",
  }, //1
];

const doubleQuestions = [
  {
    question: "Какие гормоны вырабатываются гипофизом?",
    options: ["Адреналин", "Гонадотропин", "Инсулин", "Пролактин"],
    correctAnswer: ["Гонадотропин", "Пролактин"]
  }, //1 -
];

// Перемешивание массива
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Получение 20 случайных вопросов (или меньше, если в массиве меньше 20)
function getRandomQuestions(questions, count = 30) {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, questions.length));
}

let timeLeft = 600; // Время в секундах (10 минут)
let timerId;

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById('timer').textContent = `Осталось времени: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function countdown() {
  timeLeft--;
  updateTimerDisplay();

  if (timeLeft < 0) {
    clearInterval(timerId); // Останавливаем таймер
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerId); // Убедимся, что таймер остановлен
  const score = checkAnswers(selectedQuestions);
  const totalQuestions = selectedQuestions.single.length + selectedQuestions.double.length * 2;
  const percentage = Math.round((score / totalQuestions) * 100);

  document.getElementById("questions").innerHTML = ""; // Удаляем все вопросы
  document.getElementById("submit-btn").style.display = "none"; // Скрываем кнопку завершения

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";

  // Вычисление цвета в зависимости от результата
  let resultColor = "";
  let motivationalMessage = "";
  if (percentage <= 65) {
    resultColor = "red";
    motivationalMessage = "Не расстраивайтесь! Попробуйте еще раз. Вы можете добиться большего!";
  } else if (percentage <= 84) {
    resultColor = "orange";
    motivationalMessage = "Хороший результат! Но вы можете улучшить свои знания.";
  } else {
    resultColor = "green";
    motivationalMessage = "Отлично! Вы хорошо разбираетесь в этом материале!";
  }

  // Создание полоски результата
  const progressBar = document.createElement("div");
  progressBar.classList.add("progress-bar");
  progressBar.style.width = `${percentage}%`;
  progressBar.style.backgroundColor = resultColor;

  // Добавляем текст результата и мотивационное сообщение
  resultContainer.innerHTML = `
    <p style="color: ${resultColor}; font-weight: bold;">
      ${timeLeft < 0 ? "!" : "Тест завершён!"} Вы набрали: ${score} из ${totalQuestions} (${percentage}%)
    </p>
    <div class="progress-bar-container">${progressBar.outerHTML}</div>
    <p class="motivational-message">${motivationalMessage}</p>
  `;
}

// Генерация теста
function generateQuiz() {
  const quizContainer = document.getElementById("questions");
  const selectedSingleQuestions = getRandomQuestions(questions, 30);
  const selectedDoubleQuestions = getRandomQuestions(doubleQuestions, 10);
  
  quizContainer.innerHTML = ""; // Очищаем контейнер перед заполнением

  // Добавляем вопросы с одним правильным ответом
  selectedSingleQuestions.forEach((q, index) => {
    const shuffledOptions = shuffleArray([...q.options]);

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      <ul class="options">
        ${shuffledOptions
          .map(
            (opt) => `
          <li>
            <label>
              <input type="radio" name="q${index}" value="${opt}">
              ${opt}
            </label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    quizContainer.appendChild(questionDiv);
    q.shuffledCorrectAnswer = shuffledOptions.indexOf(q.correctAnswer);
  });

 // Добавляем вопросы с двумя правильными ответами
  selectedDoubleQuestions.forEach((q, index) => {
    const shuffledOptions = shuffleArray([...q.options]);
    const correctIndices = q.correctAnswer.map(ans => shuffledOptions.indexOf(ans));

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    questionDiv.innerHTML = `
      <p>${index + 31}. ${q.question}</p>
      <ul class="options">
        ${shuffledOptions
          .map(
            (opt, optIndex) => `
          <li>
            <label>
              <input type="checkbox" name="q${index + 30}" value="${opt}" onchange="limitCheckboxes(this)">
              ${opt}
            </label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    quizContainer.appendChild(questionDiv);
    q.shuffledCorrectAnswer = correctIndices; // Сохраняем индексы правильных ответов после перемешивания
  });
  
  // Устанавливаем таймер
  updateTimerDisplay();
  timerId = setInterval(countdown, 1000); // Запускаем таймер на 1 секунду
  
  return { single: selectedSingleQuestions, double: selectedDoubleQuestions };
}

// Ограничение выбора до двух вариантов для двуответных вопросов
function limitCheckboxes(checkbox) {
  const checkboxes = document.querySelectorAll(`input[name="${checkbox.name}"]`);
  const checkedCheckboxes = Array.from(checkboxes).filter(cb => cb.checked);
  
  if (checkedCheckboxes.length > 2) {
    checkbox.checked = false; // Просто отменяем выбор текущего чекбокса, если уже выбрано 2 варианта
  }
}

// Проверка результатов
function checkAnswers(questions) {
  let score = 0;
  
  // Проверка вопросов с одним ответом
  questions.single.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.correctAnswer) {
      score++;
    }
  });

// Проверка вопросов с двумя ответами
  questions.double.forEach((q, index) => {
    const selectedOptions = Array.from(document.querySelectorAll(`input[name="q${index + 30}"]:checked`));
    const selectedValues = selectedOptions.map(option => option.value);
    
    // Проверяем каждый выбранный ответ и добавляем 1 балл за каждый правильный ответ
    q.correctAnswer.forEach(correct => {
      if (selectedValues.includes(correct)) {
        score++;
      }
    });
  });

  return score;
}

// Генерация вопросов
const selectedQuestions = generateQuiz();

document.getElementById("submit-btn").addEventListener("click", () => {
  timeLeft = -1; // Это заставит таймер мгновенно истечь
  countdown(); // Вызываем countdown для немедленного завершения теста
});

//new

// Функция для переключения темы
function toggleTheme() {
    const darkStylesheet = document.getElementById('dark-styles');
    
    if (darkStylesheet) {
        darkStylesheet.disabled = !darkStylesheet.disabled;
    } else {
        const link = document.createElement('link');
        link.id = 'dark-styles';
        link.rel = 'stylesheet';
        link.href = 'dark-styles.css';
        document.head.appendChild(link);
    }

    localStorage.setItem('dark-mode', !darkStylesheet || darkStylesheet.disabled ? 'false' : 'true');
}

// Проверяем предпочтения, сохраненные в localStorage
if (localStorage.getItem('dark-mode') === 'true') {
    const link = document.createElement('link');
    link.id = 'dark-styles';
    link.rel = 'stylesheet';
    link.href = 'dark-styles.css';
    document.head.appendChild(link);
}

// Добавляем обработчик для переключателя темы
document.getElementById('themeToggle').addEventListener('change', toggleTheme);
