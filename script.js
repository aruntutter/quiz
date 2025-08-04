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

let count = sessionStorage.getItem("clickCount") || 0;
count = parseInt(count);
let score = sessionStorage.getItem("currentScore") || 0;
score = parseInt(score);
let answer = document.createElement("p");
let finalScore = document.createElement("p");
let isAnswered = false;
let isCorrect = false;

nextBtn.addEventListener("click", () => {
  if (isAnswered) {
    count++;
    sessionStorage.setItem("clickCount", count);

    // CLEAR ELEMENTS
    questionDiv.innerHTML = "";
    optionsUl.innerHTML = "";
    answerDiv.innerHTML = "";
    isAnswered = false;
    isCorrect = false;
    sessionStorage.removeItem("selectedAnswer");
    sessionStorage.removeItem("selectedAnswerDetails");
    sessionStorage.removeItem("isAnswered");

    if (count !== arr.length) {
      domDisplay();

      if (count == arr.length - 1) {
        nextBtn.innerText = "Finish";
      }
    } else {
      container.innerHTML = "Questions Completed!";

      finalScore.innerText = `Your Total Score is: ${score} out of ${arr.length}`;
      container.appendChild(finalScore);

      const resetButton = document.createElement("button");
      resetButton.textContent = "Reset";
      resetButton.className = "reset-btn";

      container.appendChild(resetButton);

      resetButton.addEventListener("click", () => {
        count = 0;
        score = 0;
        isAnswered = false;
        isCorrect = false;

        // Reset sessionStorage
        sessionStorage.setItem("clickCount", count);
        sessionStorage.setItem("currentScore", score);
        sessionStorage.removeItem("selectedAnswer");
        sessionStorage.removeItem("selectedAnswerDetails");
        sessionStorage.removeItem("isAnswered");

        // Reset UI
        container.innerHTML = "";

        // Rebind elements
        location.reload();
      });
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
  questionDiv.appendChild(question);

  // OPTIONS
  let newOptions = [...arr[count].options];

  newOptions.forEach((optionText, i) => {
    let li = document.createElement("li");
    li.className = "option";
    li.textContent = optionText;
    li.setAttribute("data-index", i + 1);
    optionsUl.appendChild(li);

    // USER OPTION CLICKED
    li.addEventListener("click", () => {
      answerStore(li);
    });
  });

  // Store Selected Answer
  const answerStore = (li) => {
    const detailsOfSelectedItem = {
      optionNumber: li.getAttribute("data-index"),
      correctAnswerIs: arr[count].answer,
      userSelectedAnswerIS: li.textContent,
    };

    sessionStorage.setItem(
      "selectedAnswerDetails",
      JSON.stringify(detailsOfSelectedItem)
    );
    answerSelected(li, detailsOfSelectedItem.correctAnswerIs);

    sessionStorage.setItem("isAnswered", "true");
  };

  // ANSWER
  const answerSelected = (element, correctAns) => {
    if (element.textContent == correctAns) {
      element.style.backgroundColor = "#18881860";
      answer.innerText = `Correct Answer!`;
      answerDiv.appendChild(answer);

      // Only increase score if question wasn't already answered
      if (sessionStorage.getItem("isAnswered") !== "true") {
        score++;
        sessionStorage.setItem("currentScore", score);
      }
      scoreDiv.innerText = `${score}/${arr.length}`;
      isCorrect = true;
    } else {
      element.style.backgroundColor = "#d129296f";
      answer.innerText = `Wrong, Correct Ans is: ${correctAns}`;
    }

    answerDiv.innerHTML = "";
    answerDiv.appendChild(answer);

    // OPTIONS DISABLED
    Array.from(optionsUl.children).forEach((optEl) => {
      optEl.classList.add("disabled");
    });
    isAnswered = true;
  };

  // 🔄 Restore previous selection (on refresh)
  const storedAnswer = JSON.parse(
    sessionStorage.getItem("selectedAnswerDetails")
  );
  if (storedAnswer && storedAnswer.correctAnswerIs === arr[count].answer) {
    const selectedEl = document.querySelector(
      `[data-index="${storedAnswer.optionNumber}"]`
    );
    if (selectedEl) {
      answerSelected(selectedEl, storedAnswer.correctAnswerIs);
    }
  }
};

domDisplay();
