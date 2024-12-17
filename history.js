const questions = [
  {
    question: "Вид связи образующийся при помощи общей электронной пары",
    options: ["Ковалентная", "Водородная", "Ионная", "Межмолекулярная"],
    correctAnswer: "Ковалентная",
  }, //1
  {
    question: "По теории Льюиса кислота",
    options: ["Акцептор электронной пары", "Донор электронной пары", "При диссоциации выделяет H⁺", "При диссоциации выделяет OH⁻"],
    correctAnswer: "Акцептор электронной пары",
  }, //2
  {
    question: "Нелетучее, нерастворимое в воде вещество с высокой температурой плавления",
    options: ["Cr₂O₃", "Cl₂", "KCl", "Сахароза"],
    correctAnswer: "Cr₂O₃",
  }, //3
  {
    question: "Не является представителем галогенов",
    options: ["Радон", "Йод", "Астат", "Бром"],
    correctAnswer: "Радон",
  }, //4
  {
    question: "Неизвестный газ имеет относительную плотность по водороду равную 58, относительная плотность этого газа по воздуху равно",
    options: ["6", "22", "4", "0,5"],
    correctAnswer: "4",
  }, //5
  {
    question: "Fe -> FeCl₂ -> FeCl₃ -> X -> Fe₂O₃, найдите вещество X",
    options: ["FeO", "Fe(OH)₂", "Fe(OH)₃", "FeSO₄"],
    correctAnswer: "Fe(OH)₃",
  }, //6
  {
    question: "Электронная конфигурация иона S⁻²",
    options: ["s²p⁶", "s²p⁴", "s²p⁵", "s²d¹⁰p⁶"],
    correctAnswer: "s²p⁶",
  }, //7
  {
    question: "Валентный угол молекулы аммиака",
    options: ["104°, 27", "107°, 30", "180°", "105°, 9"],
    correctAnswer: "107°, 30",
  }, //8
  {
    question: "Элемент с электронным строением атома 1s²2s²2p⁶3s²3p⁵ расположен в периоде  и имеет число валентных электронов рваное",
    options: ["3 и 7", "3 и 5", "3 и 6", "3 и 4"],
    correctAnswer: "3 и 7",
  }, //9
  {
    question: "Какое воздействие на систему смещает равновесие налево в реакции '2H₂O <-> 2H₂ + O₂ - Q'",
    options: ["Добавление катализатора", "Повышение температуры", "Понижение температуры", "Увеличение концентрации воды"],
    correctAnswer: "Понижение температуры",
  }, //10
  {
    question: "Вид гибридизации в молекуле аммиака",
    options: ["sp", "sp²", "sp³d", "sp³"],
    correctAnswer: "sp³",
  }, //11
  {
    question: "Формула вещества, содержащего 32,4% натрия, 22,5% серы, 45,1% кислорода",
    options: ["Na₂S₂O₇", "NaSO₃", "Na₂SO₄", "Na₂S₂O₃"],
    correctAnswer: "Na₂SO₄",
  }, //12
  {
    question: "По принципу Паули максимальное количество электронов на третьем уровне равно",
    options: ["2", "8", "10", "18"],
    correctAnswer: "18",
  }, //13
  {
    question: "Соединение с sp³ гибридизацией",
    options: ["OF₂", "SO₃", "NH₃", "BeCl₂"],
    correctAnswer: "NH₃",
  }, //14
  {
    question: "Количество σ-связей в молекуле 2-метилбутен-1",
    options: ["10", "14", "13", "12"],
    correctAnswer: "14",
  }, //15
  {
    question: "Функциональные группы имеющиеся в составе аминокислот",
    options: ["Амин, карбонил", "Карбоксил, Амин", "Нитро, карбонил", "Амин, нитро"],
    correctAnswer: "Карбоксил, Амин",
  }, //16
  {
    question: "Углеводород имеющий относительную плотность по воздуху 2,345:",
    options: ["C₅H₁₀", "C₄H₁₀", "C₅H₁₀", "C₅H₈"],
    correctAnswer: "C₅H₈",
  }, //17
  {
    question: "При повышении температуры с 50° до 110°C реакция ускоряется в 729 раз. Найдите температурный коэффициент:",
    options: ["3,0", "2,5", "2,0", "4,2"],
    correctAnswer: "3,0",
  }, //18
  {
    question: "Масса уксусного альдегида полученного из 80г карбида кальция:",
    options: ["22", "44", "55", "85"],
    correctAnswer: "55",
  }, //19
  {
    question: "Молекулярная масса (г/моль) неизвестного газа, имеющего плотность по водороду  15:",
    options: ["60", "30", "15", "34", "17"],
    correctAnswer: "30",
  }, //20
  {
    question: "Относительная плотность (при н.у.) углекислого газа по воздуху:",
    options: ["1,52", "11", "22", "1,375", "22,4"],
    correctAnswer: "1,52",
  }, //21
  {
    question: "Сумма коэффициентов в уравнении взаимодействия за с железом (+2):",
    options: ["7", "3", "5", "9", "4"],
    correctAnswer: "3",
  } //22
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

let timeLeft = 2100; // Время в секундах (35 минут)
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
  const totalQuestions = selectedQuestions.single.length * 2;
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
      ${timeLeft < 0 ? "" : "Тест завершён!"} Вы набрали: ${score} из ${totalQuestions} (${percentage}%)
    </p>
    <div class="progress-bar-container">${progressBar.outerHTML}</div>
    <p class="motivational-message">${motivationalMessage}</p>
  `;
}

// Генерация теста
function generateQuiz() {
  const quizContainer = document.getElementById("questions");
  const selectedSingleQuestions = getRandomQuestions(questions, 20);
  
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
  
  // Устанавливаем таймер
  updateTimerDisplay();
  timerId = setInterval(countdown, 1000); // Запускаем таймер на 1 секунду
  
  return { single: selectedSingleQuestions };
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

  return score;
}

// Генерация вопросов
const selectedQuestions = generateQuiz();

document.getElementById("submit-btn").addEventListener("click", () => {
  timeLeft = -1; // Это заставит таймер мгновенно истечь
  countdown(); // Вызываем countdown для немедленного завершения теста
});

// ... (ваш существующий код)

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
