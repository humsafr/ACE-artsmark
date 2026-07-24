"use strict";

/*
  ============================================================
  CONTENT EDITING AREA
  ============================================================

  Edit the `sections` array to change:
  - section names
  - framework criteria
  - introductory text
  - question wording
  - supporting prompts
  - character limits

  Video guidance and wording are currently in index.html.

  The remainder of the file controls prototype behaviour.
*/

const sections = [
  {
    title: "Purpose, leadership and inclusion",
    shortLabel: "Purpose, leadership and inclusion",
    introduction:
      "Describe how arts, culture and creativity are understood, prioritised, led and made relevant across your setting.",
    criteria: [
      "Values and Ethos",
      "Leadership",
      "Equality, Diversity and Inclusion"
    ],
    questions: [
      {
        id: "purpose-leadership",
        title:
          "How are arts, culture and creativity understood, prioritised and led across your setting?",
        prompts: [
          "How do they connect to your values and strategic priorities?",
          "Who owns the work, makes decisions and provides resources?",
          "How widely is responsibility shared?",
          "What makes the provision sustainable beyond particular individuals?"
        ],
        maxCharacters: 2200
      },
      {
        id: "purpose-inclusion",
        title:
          "How do you ensure that your provision is relevant, representative and accessible?",
        prompts: [
          "How do you understand who participates and who may face barriers?",
          "How are different identities, cultures and experiences reflected?",
          "Give an example of an issue you identified and how you responded.",
          "What remains uneven or difficult?"
        ],
        maxCharacters: 2200
      }
    ]
  },
  {
    title: "Learning and cultural entitlement",
    shortLabel: "Learning and cultural entitlement",
    introduction:
      "Describe the quality, breadth and coherence of what children and young people learn and experience.",
    criteria: [
      "Curriculum Design and Delivery",
      "Range of Offer"
    ],
    questions: [
      {
        id: "learning-experience",
        title:
          "What do children and young people learn and experience through arts and culture?",
        prompts: [
          "How do knowledge, skills and creativity develop over time?",
          "What opportunities are available within and beyond the curriculum?",
          "How broad and coherent is the offer?",
          "Give examples from different phases, subjects or pupil groups."
        ],
        maxCharacters: 2200
      },
      {
        id: "learning-quality",
        title:
          "How do you judge the quality, breadth and accessibility of that provision?",
        prompts: [
          "What does strong practice look like in your setting?",
          "Where is provision consistent, and where does it vary?",
          "How do curriculum, enrichment, visits and partnerships connect?",
          "What have you changed in response to gaps or challenges?"
        ],
        maxCharacters: 2200
      }
    ]
  },
  {
    title: "Voice, experience and impact",
    shortLabel: "Voice, experience and impact",
    introduction:
      "Describe how children and young people influence provision and what difference their arts and cultural experiences make.",
    criteria: [
      "Children and Young People",
      "Equality, Diversity and Inclusion",
      "Range of Offer"
    ],
    questions: [
      {
        id: "voice-ownership",
        title:
          "How do children and young people shape and take ownership of arts and cultural activity?",
        prompts: [
          "Where do they make choices or influence planning?",
          "Where do they create, lead, advocate or support others?",
          "Whose voices are less visible?",
          "Give a concrete example of pupil influence changing what happened."
        ],
        maxCharacters: 2200
      },
      {
        id: "voice-impact",
        title:
          "What difference does the provision make to children and young people, and how do you know?",
        prompts: [
          "What changes have you seen in learning, confidence, wellbeing, identity, belonging or progression?",
          "What evidence supports this?",
          "Include pupil voice or a short case example.",
          "Were there any unexpected or uneven outcomes?"
        ],
        maxCharacters: 2200
      }
    ]
  },
  {
    title: "People, partnerships and sustainability",
    shortLabel: "People, partnerships and sustainability",
    introduction:
      "Describe how staff development, external relationships and organisational conditions strengthen and sustain the work.",
    criteria: [
      "Continuing Professional Development",
      "Cultural Collaborations",
      "Leadership"
    ],
    questions: [
      {
        id: "people-partnerships",
        title:
          "How do staff development and external relationships strengthen practice?",
        prompts: [
          "How are staff knowledge and confidence developed?",
          "Which partnerships improve teaching, learning or cultural access?",
          "Are relationships one-off or sustained?",
          "Give an example of a collaboration or development activity changing practice."
        ],
        maxCharacters: 2200
      },
      {
        id: "people-sustainability",
        title:
          "What is sustaining the work, what remains fragile, and what are you strengthening next?",
        prompts: [
          "What conditions have made the work possible?",
          "What depends on particular people, funding or circumstances?",
          "How have you responded to challenge or change?",
          "What are your next priorities, and why?"
        ],
        maxCharacters: 2200
      }
    ]
  }
];

/*
  ============================================================
  PROTOTYPE BEHAVIOUR
  ============================================================
*/

const STORAGE_KEY = "artsmark-option-2-draft";

const answers = {};
const visitedSections = new Set();

const videoContribution = {
  fileName: "",
  description: ""
};

let currentSectionIndex = 0;
let saveStatusTimeout = null;
let videoSaveStatusTimeout = null;

const screens = [...document.querySelectorAll(".screen")];

const startButton = document.getElementById("start-button");
const resumeButton = document.getElementById("resume-button");

const applicationForm = document.getElementById("application-form");
const questionsContainer = document.getElementById("questions-container");

const sectionNumber = document.getElementById("section-number");
const sectionTitle = document.getElementById("section-title");
const sectionIntroduction = document.getElementById(
  "section-introduction"
);
const criteriaTags = document.getElementById("criteria-tags");
const sectionList = document.getElementById("section-list");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const progressTrack = document.getElementById("progress-track");
const savedStatus = document.getElementById("saved-status");

const backButton = document.getElementById("back-button");
const saveExitButton = document.getElementById("save-exit-button");
const nextButton = document.getElementById("next-button");

const videoForm = document.getElementById("video-form");
const videoFileInput = document.getElementById("video-file");
const fileName = document.getElementById("file-name");
const videoDescriptionInput = document.getElementById(
  "video-description"
);
const videoDescriptionCount = document.getElementById(
  "video-description-count"
);
const prototypeFileNotice = document.getElementById(
  "prototype-file-notice"
);
const videoBackButton = document.getElementById("video-back-button");
const continueWithoutVideoButton = document.getElementById(
  "continue-without-video-button"
);
const videoSavedStatus = document.getElementById(
  "video-saved-status"
);

const reviewButton = document.getElementById("review-button");
const overviewButton = document.getElementById("overview-button");

const reviewContainer = document.getElementById("review-container");
const reviewVideoFile = document.getElementById("review-video-file");
const reviewVideoDescription = document.getElementById(
  "review-video-description"
);
const editVideoButton = document.getElementById("edit-video-button");

const reviewOverviewButton = document.getElementById(
  "review-overview-button"
);
const reviewOverviewButtonBottom = document.getElementById(
  "review-overview-button-bottom"
);
const reviewBackButton = document.getElementById("review-back-button");

const editFromOverviewButton = document.getElementById(
  "edit-from-overview-button"
);
const frameworkMap = document.getElementById("framework-map");
const videoOverview = document.getElementById("video-overview");
const restartButton = document.getElementById("restart-button");

const liveRegion = document.getElementById("live-region");

function showScreen(screenId, focusSelector = "h1") {
  screens.forEach((screen) => {
    const isActive = screen.id === screenId;

    screen.classList.toggle("screen--active", isActive);
    screen.setAttribute("aria-hidden", String(!isActive));
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  window.setTimeout(() => {
    const targetScreen = document.getElementById(screenId);
    const focusTarget = targetScreen.querySelector(focusSelector);

    if (focusTarget) {
      focusTarget.setAttribute("tabindex", "-1");
      focusTarget.focus({ preventScroll: true });
    }
  }, 60);
}

function buildSectionNavigation() {
  sectionList.innerHTML = "";

  sections.forEach((section, index) => {
    const item = document.createElement("li");

    item.textContent = section.shortLabel;
    item.dataset.index = String(index + 1);

    sectionList.appendChild(item);
  });
}

function hasAnySavedContent() {
  const hasWrittenAnswer = sections.some((section) => {
    return section.questions.some((question) => {
      return Boolean((answers[question.id] || "").trim());
    });
  });

  return (
    hasWrittenAnswer ||
    Boolean(videoContribution.fileName) ||
    Boolean(videoContribution.description.trim())
  );
}

function updateProgress() {
  const percentage = Math.round(
    ((currentSectionIndex + 1) / sections.length) * 100
  );

  progressText.textContent =
    `Section ${currentSectionIndex + 1} of ${sections.length}`;

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(percentage));

  [...sectionList.children].forEach((item, index) => {
    item.classList.toggle("is-current", index === currentSectionIndex);
    item.classList.toggle(
      "is-visited",
      visitedSections.has(index) && index !== currentSectionIndex
    );
  });
}

function saveDraft(showConfirmation = true, source = "application") {
  const draft = {
    answers,
    currentSectionIndex,
    visitedSections: [...visitedSections],
    videoContribution,
    savedAt: new Date().toISOString()
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));

    if (showConfirmation) {
      showSavedStatus(source);
    }

    resumeButton.hidden =
      !hasAnySavedContent() && visitedSections.size === 0;
  } catch (error) {
    console.warn("Unable to save draft in this browser session.", error);
  }
}

function loadDraft() {
  try {
    const savedDraft = sessionStorage.getItem(STORAGE_KEY);

    if (!savedDraft) {
      return false;
    }

    const parsed = JSON.parse(savedDraft);

    if (parsed.answers && typeof parsed.answers === "object") {
      Object.assign(answers, parsed.answers);
    }

    if (
      Number.isInteger(parsed.currentSectionIndex) &&
      parsed.currentSectionIndex >= 0 &&
      parsed.currentSectionIndex < sections.length
    ) {
      currentSectionIndex = parsed.currentSectionIndex;
    }

    if (Array.isArray(parsed.visitedSections)) {
      parsed.visitedSections.forEach((index) => {
        if (
          Number.isInteger(index) &&
          index >= 0 &&
          index < sections.length
        ) {
          visitedSections.add(index);
        }
      });
    }

    if (
      parsed.videoContribution &&
      typeof parsed.videoContribution === "object"
    ) {
      videoContribution.fileName =
        parsed.videoContribution.fileName || "";

      videoContribution.description =
        parsed.videoContribution.description || "";
    }

    return hasAnySavedContent() || visitedSections.size > 0;
  } catch (error) {
    console.warn("Unable to restore the saved draft.", error);
    return false;
  }
}

function clearDraft() {
  Object.keys(answers).forEach((key) => {
    delete answers[key];
  });

  visitedSections.clear();

  videoContribution.fileName = "";
  videoContribution.description = "";

  currentSectionIndex = 0;

  videoFileInput.value = "";
  videoDescriptionInput.value = "";

  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Unable to clear the saved draft.", error);
  }

  resumeButton.hidden = true;
}

function showSavedStatus(source = "application") {
  const target =
    source === "video"
      ? videoSavedStatus
      : savedStatus;

  const timeoutKey =
    source === "video"
      ? "video"
      : "application";

  target.textContent = "Draft saved";
  target.classList.add("is-visible");

  if (timeoutKey === "video") {
    window.clearTimeout(videoSaveStatusTimeout);

    videoSaveStatusTimeout = window.setTimeout(() => {
      target.classList.remove("is-visible");
    }, 1400);
  } else {
    window.clearTimeout(saveStatusTimeout);

    saveStatusTimeout = window.setTimeout(() => {
      target.classList.remove("is-visible");
    }, 1400);
  }
}

function createQuestionCard(question, questionIndex, totalQuestions) {
  const article = document.createElement("article");
  const count = document.createElement("p");
  const title = document.createElement("h2");
  const promptList = document.createElement("ul");

  const textareaWrapper = document.createElement("div");
  const textarea = document.createElement("textarea");
  const textareaMeta = document.createElement("div");
  const guidanceText = document.createElement("span");
  const characterCount = document.createElement("span");

  article.className = "question-card";

  count.className = "question-count";
  count.textContent =
    `Question ${questionIndex + 1} of ${totalQuestions}`;

  title.className = "question-title";
  title.id = `${question.id}-title`;
  title.textContent = question.title;

  promptList.className = "prompt-list";
  promptList.id = `${question.id}-prompts`;

  question.prompts.forEach((prompt) => {
    const item = document.createElement("li");
    item.textContent = prompt;
    promptList.appendChild(item);
  });

  textareaWrapper.className = "textarea-wrapper";

  textarea.id = question.id;
  textarea.name = question.id;
  textarea.value = answers[question.id] || "";
  textarea.maxLength = question.maxCharacters;
  textarea.rows = 10;

  textarea.setAttribute(
    "aria-labelledby",
    `${question.id}-title`
  );

  textarea.setAttribute(
    "aria-describedby",
    `${question.id}-prompts ${question.id}-count`
  );

  guidanceText.textContent =
    "Use the prompts as guidance rather than a checklist.";

  characterCount.className = "character-count";
  characterCount.id = `${question.id}-count`;

  function updateCharacterCount() {
    const length = textarea.value.length;
    const remaining = question.maxCharacters - length;
    const threshold = Math.round(question.maxCharacters * 0.15);

    characterCount.textContent =
      `${length.toLocaleString()} / ` +
      `${question.maxCharacters.toLocaleString()} characters`;

    characterCount.classList.toggle(
      "is-near-limit",
      remaining <= threshold
    );
  }

  textarea.addEventListener("input", () => {
    answers[question.id] = textarea.value;
    updateCharacterCount();
    saveDraft(false);
  });

  textarea.addEventListener("blur", () => {
    saveDraft(true);
  });

  updateCharacterCount();

  textareaMeta.className = "textarea-meta";
  textareaMeta.append(guidanceText, characterCount);

  textareaWrapper.append(textarea, textareaMeta);

  article.append(
    count,
    title,
    promptList,
    textareaWrapper
  );

  return article;
}

function renderCriteriaTags(criteria) {
  criteriaTags.innerHTML = "";

  criteria.forEach((criterion) => {
    const item = document.createElement("li");
    item.textContent = criterion;
    criteriaTags.appendChild(item);
  });
}

function renderSection(sectionIndex) {
  currentSectionIndex = sectionIndex;
  visitedSections.add(sectionIndex);

  const section = sections[currentSectionIndex];

  sectionNumber.textContent =
    `Section ${currentSectionIndex + 1}`;

  sectionTitle.textContent = section.title;
  sectionIntroduction.textContent = section.introduction;

  renderCriteriaTags(section.criteria);

  questionsContainer.innerHTML = "";

  section.questions.forEach((question, questionIndex) => {
    questionsContainer.appendChild(
      createQuestionCard(
        question,
        questionIndex,
        section.questions.length
      )
    );
  });

  backButton.disabled = currentSectionIndex === 0;

  nextButton.textContent =
    currentSectionIndex === sections.length - 1
      ? "Continue to optional video"
      : "Save and continue";

  updateProgress();
  saveDraft(false);

  liveRegion.textContent =
    `${section.title}. Section ${currentSectionIndex + 1} ` +
    `of ${sections.length}.`;
}

function renderVideoStep() {
  fileName.textContent =
    videoContribution.fileName || "No file selected";

  videoDescriptionInput.value =
    videoContribution.description || "";

  updateVideoDescriptionCount();

  prototypeFileNotice.hidden =
    !videoContribution.fileName;
}

function updateVideoDescriptionCount() {
  const length = videoDescriptionInput.value.length;

  videoDescriptionCount.textContent =
    `${length} / 250 characters`;
}

function saveVideoContribution(includeFile = true) {
  if (includeFile && videoFileInput.files.length > 0) {
    videoContribution.fileName =
      videoFileInput.files[0].name;
  }

  videoContribution.description =
    videoDescriptionInput.value;

  saveDraft(true, "video");
}

function renderReview() {
  reviewContainer.innerHTML = "";

  sections.forEach((section, sectionIndex) => {
    const article = document.createElement("article");
    const header = document.createElement("div");
    const headingGroup = document.createElement("div");
    const title = document.createElement("h2");
    const criteria = document.createElement("p");
    const editButton = document.createElement("button");
    const answerList = document.createElement("dl");

    article.className = "review-section";
    header.className = "review-section__header";
    criteria.className = "review-section__criteria";
    answerList.className = "review-answers";

    title.textContent =
      `${sectionIndex + 1}. ${section.title}`;

    criteria.textContent =
      `Framework criteria: ${section.criteria.join(", ")}`;

    headingGroup.append(title, criteria);

    editButton.type = "button";
    editButton.className = "text-button";
    editButton.textContent = "Change responses";

    editButton.addEventListener("click", () => {
      renderSection(sectionIndex);
      showScreen("application-screen");
    });

    header.append(headingGroup, editButton);

    section.questions.forEach((question) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");

      const response = (answers[question.id] || "").trim();

      row.className = "review-answer";

      term.textContent = question.title;
      description.textContent =
        response || "No response added.";

      description.classList.toggle(
        "blank-response",
        !response
      );

      row.append(term, description);
      answerList.appendChild(row);
    });

    article.append(header, answerList);
    reviewContainer.appendChild(article);
  });

  renderVideoReview();
}

function renderVideoReview() {
  reviewVideoFile.textContent =
    videoContribution.fileName || "No video added.";

  reviewVideoDescription.textContent =
    videoContribution.description.trim() ||
    "No description added.";

  reviewVideoFile.classList.toggle(
    "blank-response",
    !videoContribution.fileName
  );

  reviewVideoDescription.classList.toggle(
    "blank-response",
    !videoContribution.description.trim()
  );
}

function renderFrameworkMap() {
  frameworkMap.innerHTML = "";

  sections.forEach((section) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const tags = document.createElement("ul");

    article.className = "framework-map__section";
    tags.className = "framework-map__tags";

    title.textContent = section.title;
    description.textContent =
      `${section.questions.length} narrative questions`;

    section.criteria.forEach((criterion) => {
      const item = document.createElement("li");
      item.textContent = criterion;
      tags.appendChild(item);
    });

    article.append(title, description, tags);
    frameworkMap.appendChild(article);
  });
}

function renderVideoOverview() {
  const hasVideo = Boolean(videoContribution.fileName);

  videoOverview.innerHTML = "";

  const title = document.createElement("h3");
  const description = document.createElement("p");

  title.textContent = "Optional recorded contribution";

  if (hasVideo) {
    description.textContent =
      `A video has been added: ${videoContribution.fileName}.`;
  } else {
    description.textContent =
      "No video has been added. This does not disadvantage the application.";
  }

  videoOverview.append(title, description);
}

function showOverview() {
  renderFrameworkMap();
  renderVideoOverview();
  showScreen("overview-screen");
}

startButton.addEventListener("click", () => {
  clearDraft();
  renderSection(0);
  showScreen("application-screen");
});

resumeButton.addEventListener("click", () => {
  renderSection(currentSectionIndex);
  showScreen("application-screen");
});

applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  /*
    Blank responses are allowed.

    Save whatever is present and continue to the next section.
  */
  saveDraft(true);

  if (currentSectionIndex < sections.length - 1) {
    renderSection(currentSectionIndex + 1);
    showScreen("application-screen");
  } else {
    renderVideoStep();
    showScreen("video-screen");
  }
});

backButton.addEventListener("click", () => {
  if (currentSectionIndex <= 0) {
    return;
  }

  saveDraft(false);
  renderSection(currentSectionIndex - 1);
  showScreen("application-screen");
});

saveExitButton.addEventListener("click", () => {
  saveDraft(true);
  showScreen("intro-screen");
});

videoFileInput.addEventListener("change", () => {
  if (videoFileInput.files.length === 0) {
    fileName.textContent =
      videoContribution.fileName || "No file selected";

    return;
  }

  const selectedFile = videoFileInput.files[0];

  fileName.textContent = selectedFile.name;
  prototypeFileNotice.hidden = false;
});

videoDescriptionInput.addEventListener("input", () => {
  videoContribution.description =
    videoDescriptionInput.value;

  updateVideoDescriptionCount();
  saveDraft(false);
});

videoDescriptionInput.addEventListener("blur", () => {
  saveDraft(true, "video");
});

videoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveVideoContribution(true);
  showScreen("completion-screen");
});

continueWithoutVideoButton.addEventListener("click", () => {
  /*
    Deliberately clear any previously selected contribution when
    the user explicitly chooses to continue without a video.
  */
  videoContribution.fileName = "";
  videoContribution.description = "";

  videoFileInput.value = "";
  videoDescriptionInput.value = "";

  saveDraft(false);
  showScreen("completion-screen");
});

videoBackButton.addEventListener("click", () => {
  saveVideoContribution(true);
  renderSection(sections.length - 1);
  showScreen("application-screen");
});

reviewButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

overviewButton.addEventListener("click", showOverview);
reviewOverviewButton.addEventListener("click", showOverview);
reviewOverviewButtonBottom.addEventListener("click", showOverview);

reviewBackButton.addEventListener("click", () => {
  showScreen("completion-screen");
});

editVideoButton.addEventListener("click", () => {
  renderVideoStep();
  showScreen("video-screen");
});

editFromOverviewButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

restartButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Clear this draft and start again?"
  );

  if (!confirmed) {
    return;
  }

  clearDraft();
  showScreen("intro-screen");
});

buildSectionNavigation();

const draftWasRestored = loadDraft();
resumeButton.hidden = !draftWasRestored;

screens.forEach((screen) => {
  screen.setAttribute(
    "aria-hidden",
    String(!screen.classList.contains("screen--active"))
  );
});