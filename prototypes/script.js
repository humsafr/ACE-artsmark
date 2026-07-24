"use strict";

/*
  ============================================================
  LANDING-PAGE BEHAVIOUR
  ============================================================

  This page does not need JavaScript to function. All prototype
  links are ordinary relative HTML links.

  This small enhancement records which option a tester opened
  most recently in the current browser session. It does not
  alter the page or send any information remotely.

  Remove this file and the <script> tag in index.html if no
  JavaScript is wanted on the landing page.
*/

const STORAGE_KEY = "artsmark-last-prototype-opened";

const optionLinks = [
  {
    element: document.querySelector(
      'a[href="./option-1/index.html"]'
    ),
    option: "option-1"
  },
  {
    element: document.querySelector(
      'a[href="./option-2/index.html"]'
    ),
    option: "option-2"
  },
  {
    element: document.querySelector(
      'a[href="./option-3/index.html"]'
    ),
    option: "option-3"
  }
];

optionLinks.forEach(({ element, option }) => {
  if (!element) {
    return;
  }

  element.addEventListener("click", () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, option);
    } catch (error) {
      /*
        The links continue to work normally if browser storage
        is unavailable.
      */
      console.warn(
        "Unable to record the last prototype opened.",
        error
      );
    }
  });
});