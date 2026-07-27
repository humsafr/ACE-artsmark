"use strict";

/*
  This prototype does not store the actual profile.

  The button simply demonstrates that schools could review and
  update information retained from a previous application.
*/

const updateButton = document.getElementById("update-button");
const saveMessage = document.getElementById("save-message");

updateButton.addEventListener("click", () => {
  saveMessage.textContent =
    "Example profile updated for this prototype.";

  window.setTimeout(() => {
    saveMessage.textContent = "";
  }, 3000);
});