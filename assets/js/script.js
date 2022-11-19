// Global variables
let que_count = 0;
let current_level = 1;
let next_btn = document.querySelector(".lv-test");
const levelText = document.getElementById('#level');
const play = document.getElementById("play");

// CAPITALIZED vars mean the value is immutable
const MAX_SCORE_POINTS = 10;
const MIN_SCORE_POINTS = 5;
const MAX_QUESTIONS = 10;

// Questions array
let questions = [
  {
    options: ["a", "b", "c", "j", "a"],
  },
  {
    options: ["g", "r", "t", "h", "k"],
  },
  {
    options: ["g", "g", "g", "a", "g"],
  },
];

function next_level() {
  next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
      que_count++;
      current_level++;
      questionCounter(current_level);
    } 
  };
}

function questionCounter(index) {
  const question_counter = document.querySelector(".level-current");
  let question_counter_content =  index 
  question_counter.innerHTML = question_counter_content;
}

// Update progress and timestamp
// function updateProgress() {
//     // Gives us the slide progress bar
//     let progressBar = document.getElementById('sample-progress-bar');
//     progress.value = (audio.start / audio.duration) * 100;

//     if (audio.start == 0) {
      
//     }

// };

/* Function to set inner html with the content from the questions this
function is just the base logic to understand what the game should do, it will be changed
*/
function CallGame(index) {

  let option_text = document.querySelector("#test");
  let option_content =
    '<div class="btn btn-dark round">' +
    questions[index].options[0] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[1] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[2] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[3] +
    "</div>" +
    '<div class="btn btn-dark round">' +
    questions[index].options[4] +
    "</div>";
}

function PlaySound(event) {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  key.classList.add("active");
  audio.currentTime = 0;
  audio.play();
}

function updatePlayIcon(){
    if (song.paused) {
        play.innerHTML = "<i class='fa fa-pause fa-2x'></i>";
    } else {
        song.innerHTML = "<i class='fa fa-play fa-2x'></i>"
    }
};

function removeClass(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.remove("active");
}

function path_game() {
  let link = document.querySelector('.link1')
  link.onclick = () => {
    window.location.href ='game.html'
  }
}

function path_instruction() {
  let link = document.querySelector('.link2')
  link.onclick = () => {
    window.location.href ='instructions.html'
  }
}

// Increment score 
function incrementScore (score) {
    let scoreText = document.getElementById('score');
    score +=num;
    scoreText.innerText = score++;
};

path_game()
path_instruction()
CallGame(0);
next_level(0);
window.addEventListener("keydown", PlaySound);
window.addEventListener("keyup", removeClass);
