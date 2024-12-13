// Вопросы
const questions = [
  {
    question: "Что является единицей наследственности?",
    options: ["Ген", "Клетка", "Организм", "Белок"],
    correctAnswer: "Ген", // Указываем правильный ответ текстом
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
    question: "Сколько kamer v serdce у человека?",
    options: ["4", "3", "1", "2"],
    correctAnswer: "4",
  }, //4
  {
    question: "Сколько neyronov v kore bolshih polushariy у человека?",
    options: ["16 mlrd", "86 mlrd", "31 mlrd", "12 mlrd"],
    correctAnswer: "16 mlrd",
  }, //5
  {
    question: "Сколько par cherepno-mozgovyh nervov у человека?",
    options: ["14", "15", "12", "13"],
    correctAnswer: "12",
  }, //6
  {
    question: "Сколько vesit golovnoy mozg у человека?",
    options: ["1-2 kg", "700-800 g", "2-2,5 kg", "850-1000 g"],
    correctAnswer: "1-2 kg",
  }, //7
  {
    question: "Сколько vesit spinnoy mozg у человека?",
    options: ["~30 g", "~50 g", "~45 mg", "~200 g"],
    correctAnswer: "~30 g",
  }, //8
  {
    question: "Сколько neyronov v golovnom mozge у человека?",
    options: ["31 mlrd", "58 mlrd", "86 mlrd", "70 mlrd"],
    correctAnswer: "86 mlrd",
  }, //9
  {
    question: "Gormon shishkovidnoy zhelezy у человека?",
    options: ["Melatonin", "Melanin", "Timozin", "Kortizol"],
    correctAnswer: "Melatonin",
  }, //10
  {
    question: "Chto voznikaet pri nedostatochnom vydelenii Somatotropina у человека?",
    options: ["Gigantizm", "Karlikovost", "Akromegaliya", "Geterohromiya"],
    correctAnswer: "Karlikovost",
  }, //11
  {
    question: "Kolichestvo pervichnoy mochi v organizme",
    options: ["100-120 l", "190-210 l", "150-180 l", "1,5-2 l"],
    correctAnswer: "150-180 l",
  }, //12
  {
    question: "Kolichestvo vtorichnoy mochi v organizme",
    options: ["100-120 l", "4-5 l", "15 l", "1,5-2 l"],
    correctAnswer: "1,5-2 l",
  }, //13
  {
    question: "Kolichestvo eritrocitov v mm^3 krovi",
    options: ["2 mln", "4,5-5 mln", "4-8 tys", "150-400 tys"],
    correctAnswer: "4,5-5 mln",
  }, //14
  {
    question: "Kolichestvo leykocitov v mm^3 krovi",
    options: ["2 mln", "180 tys", "4-9 tys", "2-3 tys"],
    correctAnswer: "4-9 tys",
  }, //15
  {
    question: "Kolichestvo trombocitov v mm^3 krovi",
    options: ["4-5 mln", "150-400 tys", "4-9 tys", "15-17 tys"],
    correctAnswer: "150-400 tys",
  }, //16
  {
    question: "Universalniy donor:",
    options: ["I (0)", "IV (AB)", "II (A0)", "III (BB)"],
    correctAnswer: "I (0)",
  }, //17
  {
    question: "Universalniy recepient:",
    options: ["I (0)", "IV (AB)", "II (AA)", "III (B0), (BB)"],
    correctAnswer: "IV (AB)",
  }, //18
  {
    question: "Kletki krovi, otvechayushiye za immunnuyu sistemu:",
    options: ["Trombocity", "Eritrocity", "Leykocity", "Miocity"],
    correctAnswer: "Leykocity",
  }, //19
  {
    question: "Kletki krovi, krasnogo cveta, dvuyako-vognutoy formy:",
    options: ["Trombocity", "Eritrocity", "Leykocity", "Osteocity"],
    correctAnswer: "Eritrocity",
  }, //20
  {
    question: "Formenniye kletki krovi, sostavlyayut __% krovi:",
    options: ["33%", "66-67%", "55%", "45%"],
    correctAnswer: "45%",
  }, //21
  {
    question: "V plazme soderzhitsya __% vody:",
    options: ["90-92%", "80%", "55%", "70%"],
    correctAnswer: "90-92%",
  }, //22
  {
    question: "Kletki krovi, krasnogo cveta, dvuyako-vognutoy formy zhivut:",
    options: ["120 sutok", "7-10 dney", "neskolko let", "neskolko chasov"],
    correctAnswer: "120 sutok",
  }, //23
  {
    question: "Kletki krovi, trombocity zhivut:",
    options: ["7-10 dney", "30 dney", "5 let", "neskolko chasov"],
    correctAnswer: "7-10 dney",
  }, //24
  // Добавь ещё вопросы
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

