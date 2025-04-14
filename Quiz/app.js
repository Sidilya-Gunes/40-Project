const quizData = [
  {
    question: "React'te bir bileşeni oluşturmanın temel yolu nedir?",
    a: "function() ",
    b: "defineComponent()",
    c: "const App = () => {}",
    d: "new Component()",
    e: "useComponent()",
    correct: "c",
  },
  {
    question:
      "Hangi hook, componentin yaşam döngüsünü (life cycle) yönetmek için kullanılır? ",
    a: "useContext",
    b: "useReducer",
    c: "useState",
    d: "useEffect",
    e: "useNavigate",
    correct: "d",
  },
  {
    question: "React'te props ne için kullanılır?",
    a: "Veritabanına bağlanmak için",
    b: "CSS stillerini değiştirmek için",
    c: "Bileşenler arasında veri aktarmak için",
    d: "Hook'ları kullanmak için",
    e: "Sayfa yönlendirmesi yapmak için",
    correct: "c",
  },
  {
    question: "React’te hangi yapı, tek bir kök öğeyi (root element) döndürmek zorundadır?",
    a: "Component",
    b: "Hook",
    c: "Props",
    d: "Event",
    e: "State",
    correct: "a",
  },
  {
    question: "React Router'da sayfaları yönlendirmek için hangi bileşen kullanılır?",
    a: "Switch",
    b: "Redirect",
    c: "RouteProvider",
    d: "Routes",
    e: "Path",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const e_text = document.getElementById("e_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];

  deselectedAnswers();

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
  e_text.innerHTML = currentQuizData.e;
}
function deselectedAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2>Test Tamamlandı, ${score * 20} puan aldınız 🥳</h2>
            <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀 </button>
            `;
    }
  }
});
