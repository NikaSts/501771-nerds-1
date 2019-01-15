var openModalFeedback = document.querySelector(".open-modal-feedback");
var popup = document.querySelector(".modal-feedback");
var closeModalFeedback = popup.querySelector(".close-button");
var form = popup.querySelector(".feedback-form");
var userName = popup.querySelector("[name=username]");
var userEmail = popup.querySelector("[name=user-email]");
var messageText = popup.querySelector("[name=message]");
var isStorageSupport = true;
var localUserName = localStorage.getItem("userName");
var localUserEmail = localStorage.getItem("userEmail");

try {
  storage = localStorage.getItem("userName");
  storage = localStorage.getItem("userEmail");
} catch (err) {
  isStorageSupport = false;
}

openModalFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (localUserName) {
    userName.value = localUserName;
    userEmail.focus();
  } else {
    userName.focus();
  }
  if (localUserEmail) {
    userEmail.value = localUserEmail;
    messageText.focus();
  }
});

closeModalFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !messageText.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userEmail", userEmail.value);
    }
  }
});
