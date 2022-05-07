// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const likesList = Array.from(document.querySelectorAll(".like-glyph"));
let errorMsg = document.querySelector("#modal");

likesList.forEach((btn) => btn.addEventListener("click", updateLike));

function updateLike(e) {
  mimicServerCall()
    .then(() => {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.classList.add("activated-heart");
        e.target.textContent = FULL_HEART;
      } else if (e.target.textContent === FULL_HEART) {
        e.target.classList.remove("activated-heart");
        e.target.textContent = EMPTY_HEART;
      }
    })
    .catch((error) => {
      errorMsg.classList.remove("hidden");
      errorMsg.textContent = error;
      setTimeout(() => errorMsg.classList.add("hidden"), 3000);
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
