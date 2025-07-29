"use strict";

const questionDiv = document.querySelector(".question");
const optionsUl = document.querySelector(".options");
const scoreDiv = document.querySelector(".score");
const answerDiv = document.querySelector(".answer");
const noOfQuestions = document.querySelector(".no-of-questions");
const nextBtn = document.querySelector(".nxt");
const container = document.querySelector(".container");

const arr = [
  {
    question: "Which one means 'I'?",
    options: ["anata", "watashi", "sensei", "gakusei"],
    answer: "watashi",
  },
  {
    question: "Which one means 'you'?",
    options: ["watashi", "ginkouin", "anata", "isha"],
    answer: "anata",
  },
  {
    question: "Which phrase refers to 'that person, he, she'?",
    options: ["ano hito", "sensei", "anata", "daigaku"],
    answer: "ano hito",
  },
  {
    question: "Which suffix is used for Mr./Ms.?",
    options: ["-chan", "-san", "-kun", "-jin"],
    answer: "-san",
  },
  {
    question: "Which suffix is often added to a child's name?",
    options: ["-san", "-chan", "-kun", "-jin"],
    answer: "-chan",
  },
  {
    question: "Which suffix means 'a national of'?",
    options: ["-san", "-kun", "-jin", "-chan"],
    answer: "-jin",
  },
  {
    question: "Which word means 'teacher, instructor' (used for others)?",
    options: ["sensei", "kyoushi", "gakusei", "kenkyuusha"],
    answer: "sensei",
  },
  {
    question: "Which word means 'teacher, instructor' (used for yourself)?",
    options: ["kyoushi", "sensei", "isha", "kaishain"],
    answer: "kyoushi",
  },
  {
    question: "Which word means 'student'?",
    options: ["gakusei", "kenkyuusha", "kaishain", "shain"],
    answer: "gakusei",
  },
  {
    question: "Which word means 'company employee'?",
    options: ["isha", "ginkouin", "shain", "kaishain"],
    answer: "kaishain",
  },
  {
    question: "Which word means 'employee of a specific company'?",
    options: ["gakusei", "shain", "isha", "daigaku"],
    answer: "shain",
  },
  {
    question: "Which word means 'bank employee'?",
    options: ["ginkouin", "isha", "kenkyuusha", "shain"],
    answer: "ginkouin",
  },
  {
    question: "Which word means 'medical doctor'?",
    options: ["isha", "gakusei", "sensei", "shain"],
    answer: "isha",
  },
  {
    question: "Which word means 'researcher, scholar'?",
    options: ["kenkyuusha", "daigaku", "sensei", "ginkouin"],
    answer: "kenkyuusha",
  },
  {
    question: "Which word means 'university'?",
    options: ["byouin", "gakkou", "daigaku", "gakusei"],
    answer: "daigaku",
  },
  {
    question: "Which word means 'hospital'?",
    options: ["daigaku", "byouin", "isha", "kenkyuusha"],
    answer: "byouin",
  },
  {
    question: "Which word means 'who' (casual)?",
    options: ["anata", "dare", "donata", "kare"],
    answer: "dare",
  },
  {
    question: "Which word means 'who' (polite)?",
    options: ["dare", "donata", "anata", "san"],
    answer: "donata",
  },
  {
    question: "What suffix means 'years old'?",
    options: ["-jin", "-san", "-sai", "-chan"],
    answer: "-sai",
  },
  {
    question: "How do you ask 'how old' (casual)?",
    options: ["ikutsu", "nan-sai", "nansai", "o-ikutsu"],
    answer: "nan-sai",
  },
  {
    question: "How do you ask 'how old' (polite)?",
    options: ["ikutsu", "nan-sai", "o-ikutsu", "nansai"],
    answer: "o-ikutsu",
  },
  {
    question: "Which word means 'yes'?",
    options: ["iie", "hai", "sō", "un"],
    answer: "hai",
  },
  {
    question: "Which word means 'no'?",
    options: ["hai", "iie", "iee", "uun"],
    answer: "iie",
  },
  {
    question: "Which greeting is used when meeting for the first time?",
    options: ["Konnichiwa", "Sayounara", "Hajimemashite", "Arigatou"],
    answer: "Hajimemashite",
  },
];

let count = 0;
let score = 0;
let answer = document.createElement("p");
let finalScore = document.createElement("p");
let isAnswered = false;
let isCorrect = false;

nextBtn.addEventListener("click", () => {
  if (isAnswered) {
    count++;

    // CLEAR ELEMENTS
    questionDiv.innerHTML = "";
    optionsUl.innerHTML = "";
    answerDiv.innerHTML = "";
    isAnswered = false;
    isCorrect = false;

    if (count !== arr.length) {
      domDisplay();

      if (count == arr.length - 1) {
        nextBtn.innerText = "Finish";
      }
    } else {
      container.innerHTML = "Questions Completed!";

      finalScore.innerText = `Your Total Score is: ${score} out of ${arr.length}`;
      container.appendChild(finalScore);
    }
  } else {
    alert("Please select the option!");
  }
});

const domDisplay = () => {
  let question = document.createElement("p");

  // NO OF QUESTIONS
  noOfQuestions.innerText = `${count + 1}/${arr.length}`;
  // NO OF SCORE
  scoreDiv.innerText = `${score}/${arr.length}`;

  // QUESTION
  question.innerText = arr[count].question;

  // OPTIONS
  let newOptions = [];
  arr[count].options.forEach((el) => {
    newOptions.push(el);
  });

  newOptions.forEach((optionText) => {
    let li = document.createElement("li");
    li.className = "option";
    li.textContent = optionText;
    optionsUl.appendChild(li);

    // USER OPTION CLICKED
    li.addEventListener("click", () => {
      answerSelected(li);
    });
  });
  questionDiv.appendChild(question);

  // ANSWER
  const answerSelected = (li) => {
    let correctAnswer = arr[count].answer;

    if (li.textContent == correctAnswer) {
      li.style.backgroundColor = "#18881860";
      answer.innerText = `Correct Answer!`;
      answerDiv.appendChild(answer);
      isCorrect = true;
      if (isCorrect) {
        score++;
        // NO OF SCORE
        scoreDiv.innerText = `${score}/${arr.length}`;
      }
    } else {
      li.style.backgroundColor = "#d129296f";
      answer.innerText = `Wrong, Correct Ans is: ${correctAnswer}`;
      answerDiv.appendChild(answer);
    }

    // OPTIONS DISABLED
    let optionsList = Array.from(optionsUl.children);

    optionsList.forEach((optEl) => {
      optEl.classList.add("disabled");
    });
    isAnswered = true;
  };
};

domDisplay();
