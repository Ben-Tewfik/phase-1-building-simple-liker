// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const modal = document.querySelector("#modal");
modal.classList.add("hidden");
document.addEventListener("DOMContentLoaded", () => {
  const emptyHearts = document.querySelectorAll(".like-glyph");
  const modalMessage = document.getElementById("modal-message");
  emptyHearts.forEach(emptyHeart =>
    emptyHeart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          if (emptyHeart.textContent === EMPTY_HEART) {
            emptyHeart.textContent = FULL_HEART;
            emptyHeart.classList.add("activated-heart");
          } else {
            emptyHeart.textContent = EMPTY_HEART;
            emptyHeart.classList.remove("activated-heart");
          }
        })
        .catch(error => {
          modal.classList.remove("hidden");
          modalMessage.textContent = error;
          setTimeout(() => {
            modal.classList.add("hidden");
          }, 3000);
        });
    })
  );
});

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
