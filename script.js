const questions = [
  {
    question: "Что является единицей наследственности?",
    options: ["Ген", "Клетка", "Организм", "Белок"],
    correctAnswer: "Ген",
  }, //1
  {
    question: "Какой газ растения поглощают из атмосферы?",
    options: ["Оксид углерода", "Кислород", "Азот", "Углекислый газ"],
    correctAnswer: "Углекислый газ",
  }, //2
  {
    question: "Сколько хромосом у человека?",
    options: ["44", "46", "48", "42"],
    correctAnswer: "46",
  }, //3
  {
    question: "Сколько камер в сердце у человека?",
    options: ["4", "3", "1", "2"],
    correctAnswer: "4",
  }, //4
  {
    question: "Сколько нейронов в коре больших полушарий у человека?",
    options: ["16 млрд", "86 млрд", "31 млрд", "12 млрд"],
    correctAnswer: "16 млрд",
  }, //5
  {
    question: "Сколько пар черепно-мозговых нервов у человека?",
    options: ["14", "15", "12", "13"],
    correctAnswer: "12",
  }, //6
  {
    question: "Сколько весит головной мозг у человека?",
    options: ["1-2 кг", "700-800 г", "2-2,5 кг", "850-1000 г"],
    correctAnswer: "1-2 кг",
  }, //7
  {
    question: "Сколько весит спинной мозг у человека?",
    options: ["~30 г", "~50 г", "~45 мг", "~200 г"],
    correctAnswer: "~30 г",
  }, //8
  {
    question: "Сколько нейронов в головном мозге у человека?",
    options: ["31 млрд", "58 млрд", "86 млрд", "70 млрд"],
    correctAnswer: "86 млрд",
  }, //9
  {
    question: "Гормон шишковидной железы у человека?",
    options: ["Мелатонин", "Меланин", "Тимозин", "Кортизол"],
    correctAnswer: "Мелатонин",
  }, //10
  {
    question: "Что возникает при недостаточном выделении Соматотропина у человека?",
    options: ["Гигантизм", "Карликовость", "Акромегалия", "Гетерохромия"],
    correctAnswer: "Карликовость",
  }, //11
  {
    question: "Количество первичной мочи в организме",
    options: ["100-120 л", "190-210 л", "150-180 л", "1,5-2 л"],
    correctAnswer: "150-180 л",
  }, //12
  {
    question: "Количество вторичной мочи в организме",
    options: ["100-120 л", "4-5 л", "15 л", "1,5-2 л"],
    correctAnswer: "1,5-2 л",
  }, //13
  {
    question: "Количество эритроцитов в мм^3 крови",
    options: ["2 млн", "4,5-5 млн", "4-8 тыс", "150-400 тыс"],
    correctAnswer: "4,5-5 млн",
  }, //14
  {
    question: "Количество лейкоцитов в мм^3 крови",
    options: ["2 млн", "180 тыс", "4-9 тыс", "2-3 тыс"],
    correctAnswer: "4-9 тыс",
  }, //15
  {
    question: "Количество тромбоцитов в мм^3 крови",
    options: ["4-5 млн", "150-400 тыс", "4-9 тыс", "15-17 тыс"],
    correctAnswer: "150-400 тыс",
  }, //16
  {
    question: "Универсальный донор:",
    options: ["I (0)", "IV (AB)", "II (A0)", "III (BB)"],
    correctAnswer: "I (0)",
  }, //17
  {
    question: "Универсальный реципиент:",
    options: ["I (0)", "IV (AB)", "II (AA)", "III (B0), (BB)"],
    correctAnswer: "IV (AB)",
  }, //18
  {
    question: "Клетки крови, отвечающие за иммунную систему:",
    options: ["Тромбоциты", "Эритроциты", "Лейкоциты", "Миоциты"],
    correctAnswer: "Лейкоциты",
  }, //19
  {
    question: "Клетки крови, красного цвета, двояковогнутой формы:",
    options: ["Тромбоциты", "Эритроциты", "Лейкоциты", "Остеобласты"],
    correctAnswer: "Эритроциты",
  }, //20
  {
    question: "Форменные клетки крови составляют __% крови:",
    options: ["33%", "66-67%", "55%", "45%"],
    correctAnswer: "45%",
  }, //21
  {
    question: "В плазме содержится __% воды:",
    options: ["90-92%", "80%", "55%", "70%"],
    correctAnswer: "90-92%",
  }, //22
  {
    question: "Клетки крови, красного цвета, двояковогнутой формы живут:",
    options: ["120 суток", "7-10 дней", "несколько лет", "несколько часов"],
    correctAnswer: "120 суток",
  }, //23
  {
    question: "Клетки крови, тромбоциты живут:",
    options: ["7-10 дней", "30 дней", "5 лет", "несколько часов"],
    correctAnswer: "7-10 дней",
  } //24
];

// Перемешивание массива
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Получение 20 случайных вопросов (или меньше, если в массиве меньше 20)
function getRandomQuestions(questions, count = 20) {
  const shuffled = shuffleArray(questions);
  return shuffled.slice(0, Math.min(count, questions.length));
}

// Генерация теста
function generateQuiz() {
  const quizContainer = document.getElementById("questions");
  const selectedQuestions = getRandomQuestions(questions);
  quizContainer.innerHTML = ""; // Очищаем контейнер перед заполнением

  selectedQuestions.forEach((q, index) => {
    // Перемешиваем варианты ответов
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

    // Сохраняем правильный ответ для проверки
    q.shuffledCorrectAnswer = shuffledOptions.indexOf(q.correctAnswer);
  });

  return selectedQuestions;
}

// Проверка результатов
function checkAnswers(questions) {
  let score = 0;
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    if (selectedOption && selectedOption.value === q.correctAnswer) {
      score++;
    }
  });
  return score;
}

// Генерация вопросов
const selectedQuestions = generateQuiz();

document.getElementById("submit-btn").addEventListener("click", () => {
  const score = checkAnswers(selectedQuestions);
  const totalQuestions = selectedQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

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
      Вы набрали: ${score} из ${totalQuestions} (${percentage}%)
    </p>
    <div class="progress-bar-container">${progressBar.outerHTML}</div>
    <p class="motivational-message">${motivationalMessage}</p>
  `;
});

