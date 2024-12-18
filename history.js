const questions = [
  {
    question: "В каких годах прошла Крестьянская война с участием казахов под предводительством Е. И. Пугачева?",
    options: ["1771-1773", "1773-1775", "1775-1777", "1777-1779"],
    correctAnswer: "1773-1775",
  }, //1
  {
    question: "Когда Е. Пугачев направил Нуралы хану письмо с просьбой поддержать восстание вооружёнными отрядами?",
    options: ["20 сентября 1771", "20 октября 1779", "20 ноября 1775", "20 сентября 1773"],
    correctAnswer: "20 сентября 1771",
  }, //2
  {
    question: "В сентябре 1773 года казахи участвовали в осаде",
    options: ["Яицкой крепости", "У реки Волга", "В осаде Оренбурга", "В Гурьеве"],
    correctAnswer: "Яицкой крепости",
  }, //3
  {
    question: "Укажите последствие поражения восстания для казахов",
    options: ["Проведены восстания на территории Младшего жуза", "Казахам запрещалось переходить на правый берег реки Урал", "Казнили Е. Пугачева", "Не была восстановлена Уральская пограничная линия"],
    correctAnswer: "Казахам запрещалось переходить на правый берег реки Урал",
  }, //4
  {
    question: "Какое историческое значение сыграло роль, участие казахов в Крестьянкой войне?",
    options: ["Была проведена реорганизация местного управления", "Восстановлена Ханская власть", "Первое открытое выступление против колониальной политики царизма", "Кочевые казахи успокоили общины силой"],
    correctAnswer: "Первое открытое выступление против колониальной политики царизма",
  }, //5
  {
    question: "Кто также участвовал в восстаниях в Крестьянской войне?",
    options: ["Сырым Датулы", "Кенесары Касымулы", "Бий Дауытбай", "Махамбет Утемисулы"],
    correctAnswer: "Сырым Датулы",
  }, //6
  {
    question: "Основатель Букеевской орды",
    options: ["Нуралы хан", "Жангир хан", "Букей хан", "Айшуак султан"],
    correctAnswer: "Букей хан",
  }, //7
  {
    question: "Когда была образована Внутренняя орда по приказу Павла I?",
    options: ["11 марта 1801", "11 апреля 1802", "11 мая 1801", "11 марта 1823"],
    correctAnswer: "11 марта 1801",
  }, //8
  {
    question: "Какой хан организовал делопроизводство в Букеевской орде?",
    options: ["Букей хан", "Жангир хан", "Нуралы хан", "Айшуак султан"],
    correctAnswer: "Жангир хан",
  }, //9
  {
    question: "В каком году была открыта первая светская школа в Букеевской орде?",
    options: ["1823", "1835", "1831", "1841"],
    correctAnswer: "1841",
  }, //10
  {
    question: "Кем был издан устав об оренбургских казахах?",
    options: ["Павел I", "Александр I", "Николай II", "Эссен"],
    correctAnswer: "Эссен",
  }, //11
  {
    question: "По указу младший жуз был поделён на? (XVIII- XIX вв)",
    options: ["Три внешних зауральских округа", "Два внешних зауральских округа", "Пять внешних зауральских округа", "На один внешний зауральский округ"],
    correctAnswer: "Три внешних зауральских округа",
  }, //12
  {
    question: "Кто стоял во главе округов по уставу (Эссена, XVIII-XIX)?",
    options: ["Дистанционный начальник", "Султан-правитель", "Генерал-губернатор", "Аульный старшина"],
    correctAnswer: "Султан-правитель",
  }, //13
  {
    question: "Все должностные лица назначались и подчинялись приказу (младший жуз, XVIII-XIX, Эссен)?",
    options: ["Дистанционный начальник", "Султан-правитель", "Генерал-губернатор", "Аульный старшина"],
    correctAnswer: "Генерал-губернатор",
  }, //14
  {
    question: "Устав 1824г. позволил",
    options: ["Отменить ханскую власть в старшем жузе", "Отметить ханскую власть в среднем жузе", "Отметить ханскую власть в младшем жузе", "Отметить ханскую власть в старшем и среднем жузе"],
    correctAnswer: "Отметить ханскую власть в младшем жузе",
  }, //15
  {
    "question": "Назовите столицу монгольской империи при Чингисхане",
    "options": ["Сарай", "Каракорум", "Отрар", "Пекин", "Сыгнак"],
    "correctAnswer": "Каракорум"
  }, //16
  {
    "question": "Какие вопросы решал в золотой орде беклярибек?",
    "options": ["Хозяйственные", "Дипломатические", "Финансовые", "Культурные", "Торговые"],
    "correctAnswer": "Дипломатические"
  }, //17
  {
    "question": "При каких ханах золотая орда достигла наивысшего расцвета?",
    "options": ["Бату и Берке", "Бердыбек и Шейдибек", "Узбек и Джанибек", "Мамай и Тамерлан", "Тохтамыш и Урус"],
    "correctAnswer": "Узбек и Джанибек"
  }, //18
  {
    "question": "На каком языке говорила основная часть населения золотой орды?",
    "options": ["Чагатайский", "Кыпчакский", "Казахский", "Персидский", "Монгольский"],
    "correctAnswer": "Кыпчакский"
  }, //19
  {
    "question": "Какой город на Сырдарье оказал сильное сопротивление монголам?",
    "options": ["Тараз", "Сузак", "Джент", "Шаш", "Сыгнак"],
    "correctAnswer": "Сыгнак"
  }, //20
  {
    "question": "Как называется золотая орда в мусульманских источниках?",
    "options": ["Могулистан", "Улус Чагатая", "Улус Угэдея", "Улус Джучи", "Улус Тулуя"],
    "correctAnswer": "Улус Джучи"
  }, //21
  {
    "question": "Улус Джучи располагался на территории",
    "options": ["Северо-восточного Казахстана", "Центральной Монголии", "Центрального Казахстана", "Южного и Юго-Восточного Казахстана", "Семиречья и Мавернахра"],
    "correctAnswer": "Центрального Казахстана"
  }, //22
  {
    "question": "В каком году территория Казахстана окончательно вошла в состав империи Чингисхана?",
    "options": ["1227", "1230", "1231", "1224", "1226"],
    "correctAnswer": "1224"
  }, //23
  {
    "question": "Как характеризуется период 1359-1379 гг в истории золотой орды?",
    "options": ["Период расцвета", "Период войны с Тамерланом", "Период принятия мусульманства", "Период нового усиления", "\"Великая смута\""]
    "correctAnswer": "Период расцвета"
  }, //24
  {
    "question": "Главный город золотой орды",
    "options": ["Сарай", "Сыгнак", "Алмалык", "Баласагун", "Туркестан"],
    "correctAnswer": "Сарай"
  } //25
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
  const totalQuestions = selectedQuestions.single.length;
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
