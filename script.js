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
  }, //24
  {
  question: "Участвует в дыхании:",
  options: ["Диафрагма", "Плевра", "Сердечная мышца", "Сухожилие"],
  correctAnswer: "Диафрагма",
  }, //25
  {
    question: "Бактерии вызывающие болезни:",
    options: ["Молочнокислые", "Патогенные", "Цианобактерии", "Почвенные"],
    correctAnswer: "Патогенные",
  }, //26
  {
    question: "При скрещивании гетерозиготы с рецессивной гомозиготой, вероятность проявления рецессивного признака составляет:",
    options: ["20%", "30%", "50%", "40%"],
    correctAnswer: "50%",
  }, //27
  {    
    question: "Гормон участвующий в процессах роста:",
    options: ["Инсулин", "Глюкагон", "Тимозин", "Адреналин"],
    correctAnswer: "Тимозин",
  }, //28
  {    
    question: "Всасывает в кровь только воду и соли:",
    options: ["Тонкий кишечник", "Толстый кишечник", "Глотка", "Пищевод"],
    correctAnswer: "Толстый кишечник",
  }, //29
  {    
    question: "Двухкамерное сердце имеет:",
    options: ["Лягушка", "Голубь", "Окунь", "Собака"],
    correctAnswer: "Окунь",
  }, //30
  {    
    question: "Люди с первой группой крови, могут принимать кровь группы:",
    options: ["III (BB, B0)", "II (AA, A0)", "IV (AB)", "I (0)"],
    correctAnswer: "I (0)",
  }, //31
  {    
    question: "Слияние двух половых клеток:",
    options: ["Гаметогенез", "Развитие", "Оплодотворение", "Овогенез"],
    correctAnswer: "Оплодотворение",
  }, //32
  {    
    question: "Водоросль несколько раз побыбавшая в космосе:",
    options: ["Хламидомонада", "Хлорелла", "Глеокапса", "Диатом"],
    correctAnswer: "Хлорелла",
  }, //33
  {    
    question: "Организм, который относится к членистоногим:",
    options: ["Ланцетник", "Речной рак", "Морская звезда", "Тигровая акула"],
    correctAnswer: "Речной рак",
  }, //34
  {    
    question: "Класс членистоногие представляют:",
    options: ["Двустворчатые, брюхоногие, головоногие", "Ленточные черви, ресничные черви, сосальщики", "Многощетинковые, малощетинковые, пиявки", "Насекомые, ракообразные, паукообразные"],
    correctAnswer: "Насекомые, ракообразные, паукообразные",
  }, //35
  {    
    question: "При отсутствии йода в пище и воде, возникает заболевание:",
    options: ["Сахарный диабет", "Гемералопия", "Эндемический зоб", "Склероз"],
    correctAnswer: "Эндемический зоб",
  }, //36
  {    
    question: "Наука занимающаяся выведением новых пород:",
    options: ["Генетика", "Селекция", "Морфология", "Физиология"],
    correctAnswer: "Селекция",
  }, //37
  {    
    question: "Рыбы определяют глубину погружения с помощью органов:",
    options: ["Обоняния", "Зрения", "Боковой линии", "Хвостовым плавником"],
    correctAnswer: "Боковой линии",
  }, //38
  {    
    question: "Вид рыб:",
    options: ["Ластоногие", "Головоногие", "Рукокрылые", "Кистепёрые"],
    correctAnswer: "Кистепёрые",
  }, //39
  {    
    question: "Бактериофаги относятся к царству:",
    options: ["Вирусов", "Грибов", "Бактерий", "Растений"],
    correctAnswer: "Вирусов",
  }, //40
  {    
    question: "Оценить чистоту воздуха можно по присутствию:",
    options: ["Грибов", "Животных", "Вирусов", "Бактерий", "Растений", "Лишайников"],
    correctAnswer: "Лишайников",
  }, //41
  {    
    question: "К двуслойным животным относятся:",
    options: ["Рептилии", "Земноводные", "Кишечнополостные", "Млекопитающие"],
    correctAnswer: "Кишечнополостные",
  }, //42
  {    
    question: "На два бронха делится:",
    options: ["Правое лёгкое", "Бронхиола", "Левое лёгкое", "Глотка", "Трахея"],
    correctAnswer: "Трахея",
  }, //43
  {    
    question: "Система, отвечающая за развитие плода в организме:",
    options: ["Выделительная", "Опорно-двигательная", "Кровеносная", "Половая"],
    correctAnswer: "Половая",
  }, //44
  {    
    question: "Водорастворимый витамин:",
    options: ["Филлохинон", "Токоферол", "Ретинол", "Кальциферол", "Аскорбиновая кислота"],
    correctAnswer: "Аскорбиновая кислота",
  }, //45
  {    
    question: "Адреналин и норэпинифрин вырабатываются клетками:",
    options: ["Паращитовидной железой", "Мозговым веществом надпочечников", "Щитовидной железой", "Корковыми веществом надпочечников", "Поджелудочной железой"],
    correctAnswer: "Мозговым веществом надпочечников",
  }, //46
  {    
    question: "Способствует свёртываемости крови витамин:",
    options: ["E", "D", "C", "A", "K"],
    correctAnswer: "K",
  }, //47
  {
    question: "Белая планария относится к классу",
    options: ["Малощетинковые", "Ленточные", "Многощетинковые", "Ресничные"],
    correctAnswer: "Ресничные",
  }, //48
  {
    question: "Разделяет грудную и брюшную полость",
    options: ["Грудина", "Диафрагма", "Соединительная оболочка", "Фасция"],
    correctAnswer: "Диафрагма",
  }, //49
  {
    question: "Биокосные вещества в составе биосферы",
    options: ["Почва", "Растения", "Горные породы", "Животные"],
    correctAnswer: "Горные породы",
  }, //50
  {
    question: "Потеря участка хромосомы",
    options: ["Гаплоидия", "Транслокация", "Дупликация", "Делеция"],
    correctAnswer: "Делеция",
  }, //51
  {
    question: "Самый распространённый увеличительный прибор (вопросник до 2024 года)",
    options: ["Микроскоп", "Штативная лупа", "Ручная лупа", "Подзорная труба"],
    correctAnswer: "Ручная лупа",
  }, //52
  {
    question: "Синдром Шерешевский-Тернер",
    options: ["44+XXXY", "44+XXX", "44+XXXXX", "44+X0"],
    correctAnswer: "44+X0",
  }, //53
  {
    question: "Треугольная плоская кость",
    options: ["Ладонь", "Ребро", "Лопатка", "Грудина"],
    correctAnswer: "Лопатка",
  }, //54
  {
    question: "Белок, входящий в состав РНК",
    options: ["Сахароза", "Пентоза", "Гексоза", "Рибоза"],
    correctAnswer: "Рибоза",
  }, //55
  {
    question: "Сок, секретируемый поджелудочной железой",
    options: ["Панкреатин", "Пепсин", "Мальтоза", "Желчь"],
    correctAnswer: "Панкреатин",
  }, //56
  {
    question: "Бобовое растение, применяемое против кашля",
    options: ["Лакрица", "Соя", "Фасоль", "Горошек"],
    correctAnswer: "Лакрица",
  }, //57
  {
    question: "Структурная единица почек",
    options: ["Нефрон", "Остеоцит", "Миозин", "Нейрон", "Гемоглобин"],
    correctAnswer: "Нефрон",
  }, //58
  {
    question: "Вторичное всасывание в извитых канальцах",
    options: ["Абсорбция", "Реабсорбция", "Осмос", "Диффузия"],
    correctAnswer: "Реабсорбция",
  }, //59
  {
    question: "Наука, изучающая мхи",
    options: ["Ихтиология", "Альгология", "Микология", "Бриология"],
    correctAnswer: "Бриология",
  }, //60
  {
    question: "Мхи прикрепляются к субстрату с помощью",
    options: ["Ножек", "Корней", "Таллома", "Ризоидов"],
    correctAnswer: "Ризоидов",
  }, //61
  {
    question: "Наиболее богаты энергией",
    options: ["Жиры", "Углеводы", "Белки", "Витамины"],
    correctAnswer: "Жиры",
  }, //62
  {
    question: "Заболевание, при котором человек не может различать некоторые цвета",
    options: ["Дальтонизм", "Близорукость", "Дальнозоркость", "Астигматизм"],
    correctAnswer: "Дальтонизм",
  } //63
];

const doubleQuestions = [
  {
    question: "Какие гормоны вырабатываются гипофизом?",
    options: ["Адреналин", "Вазопрессин", "Инсулин", "Пролактин"],
    correctAnswer: ["Вазопрессин", "Пролактин"]
  }, //1 -
  {
    question: "Какие вещества являются основными компонентами ДНК?",
    options: ["Глицерин", "Угольная к-та", "Цитозин", "Гуанин"],
    correctAnswer: ["Гуанин", "Цитозин"]
  }, //2 -
  {
    question: "Подземные видоизменения побега",
    options: ["Клубень", "Луковица", "Усики", "Шипы", "Колючки"],
    correctAnswer: ["Клубень", "Луковица"]
  }, //3 -
  {
    question: "Пластиды растений",
    options: ["Хлоропласты", "Лейкопласты", "Вакуоли", "Центриоли", "Эритроциты"],
    correctAnswer: ["Хлоропласты", "Лейкопласты"]
  }, //4 -
  {
    question: "К сухим односемянным продам относятся",
    options: ["Зерновка", "Костянка", "Яблоко", "Орех", "Коробочка"],
    correctAnswer: ["Зерновка", "Костянка"]
  }, //5 -
  {
    question: "В полости малого таза женщины расположены",
    options: ["Семявыводящие потоки", "Маточные трубы", "Сперматозоиды", "Матка", "Мошонка", "Предстательная железа"],
    correctAnswer: ["Маточные трубы", "Матка"]
  }, //6  
  {
    question: "Заболевания глаз",
    options: ["Катаракта", "Глухота", "Экзема", "Псориаз", "Отит", "Глаукома"],
    correctAnswer: ["Катаракта", "Глаукома"]
  }, //7  
  {
    question: "Признаки, сближающие птиц с рептилиями",
    options: ["Клоака", "Наружные жабры", "Роговые чешуйки", "Воздушные мешки", "Холоднокровность"],
    correctAnswer: ["Клоака", "Роговые чешуйки"]
  }, //8
  {
    question: "К органам чувств относятся",
    options: ["Таламус", "Глаза", "Тимус", "Язык", "Гипоталамус", "Эпифиз"],
    correctAnswer: ["Глаза", "Язык"]
  }, //9
  {
    question: "Примеры межвидовой борьбы",
    options: ["Защита своей территории", "Конкуренция", "Борьба за самку", "Хищничество", "Паразитизм", "Поедание своего потомства"],
    correctAnswer: ["Хищничество", "Паразитизм"]
  }, //10
  {
    question: "Заболевание ушей",
    options: ["Отит", "Глухота", "Пиелонефрит", "Цистит", "Чесотка", "Гайморит"],
    correctAnswer: ["Отит", "Глухота"]
  } //11
  // ...
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

let timeLeft = 2700; // Время в секундах (45 минут)
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
