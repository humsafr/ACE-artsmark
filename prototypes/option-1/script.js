"use strict";

/*
  ============================================================
  CONTENT EDITING AREA
  ============================================================

  Change section names, guidance, prompts and suggested limits
  in the `sections` array below.

  Each criterion currently has four prompts:
  1. What practice looks like
  2. How embedded it is
  3. Its impact and evidence
  4. Learning and future strengthening

  The rest of the file controls prototype behaviour.
*/

const sections = [
  {
    title: "Values and Ethos",
    subtitle: "Demonstrate commitment to arts and culture",
    shortLabel: "Values and Ethos",
    guidance:
      "Tell us how arts, culture and creativity are valued in your setting and how that commitment is visible in school life.",
    prompts: [
      {
        id: "values-practice",
        title: "What does this look like in your setting?",
        help:
          "Describe how arts, culture and creativity connect to your values, ethos and everyday school life.",
        maxCharacters: 1200
      },
      {
        id: "values-embeddedness",
        title: "How is this embedded or developing?",
        help:
          "Explain how widely the commitment is understood, who is involved and how it influences priorities or decisions.",
        maxCharacters: 1200
      },
      {
        id: "values-impact",
        title: "What difference does it make, and how do you know?",
        help:
          "Use one or two examples showing an effect on learning, wellbeing, personal development or community.",
        maxCharacters: 1400
      },
      {
        id: "values-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe anything that remains uneven, unclear or in development.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Equality, Diversity and Inclusion",
    subtitle: "Demonstrate equity, relevance and diversity for all",
    shortLabel: "Equality, Diversity and Inclusion",
    guidance:
      "Tell us how your provision supports equitable access, representation, relevance and belonging.",
    prompts: [
      {
        id: "edi-practice",
        title: "What does this look like in your setting?",
        help:
          "Describe how your arts and cultural provision reflects your pupils, communities and wider society.",
        maxCharacters: 1200
      },
      {
        id: "edi-embeddedness",
        title: "How do you identify and address barriers?",
        help:
          "Explain how you understand participation, access and representation across different groups.",
        maxCharacters: 1200
      },
      {
        id: "edi-impact",
        title: "What difference does it make, and how do you know?",
        help:
          "Give examples of changes in participation, belonging, representation, wellbeing or relationships.",
        maxCharacters: 1400
      },
      {
        id: "edi-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe any gaps, groups or aspects of provision that need further attention.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Leadership",
    subtitle: "Demonstrate ambitious and dynamic leadership",
    shortLabel: "Leadership",
    guidance:
      "Tell us how arts and culture are led, planned, resourced, reviewed and sustained.",
    prompts: [
      {
        id: "leadership-practice",
        title: "What does leadership look like in your setting?",
        help:
          "Describe who owns the work, who makes decisions and how senior leaders and governors are involved.",
        maxCharacters: 1200
      },
      {
        id: "leadership-embeddedness",
        title: "How is leadership distributed and sustained?",
        help:
          "Explain how responsibility extends beyond one person and how the work connects to strategic planning.",
        maxCharacters: 1200
      },
      {
        id: "leadership-impact",
        title: "What difference does this leadership make?",
        help:
          "Give examples of decisions, resources, plans or changes that have strengthened provision.",
        maxCharacters: 1400
      },
      {
        id: "leadership-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe anything that remains dependent on individuals, vulnerable to change or insufficiently prioritised.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Children and Young People",
    subtitle: "Engage and empower children and young people",
    shortLabel: "Children and Young People",
    guidance:
      "Tell us how children and young people engage with, influence and take ownership of arts and cultural activity.",
    prompts: [
      {
        id: "cyp-practice",
        title: "What does participation and influence look like?",
        help:
          "Describe how pupils take part, make choices, shape activity or contribute to planning and delivery.",
        maxCharacters: 1200
      },
      {
        id: "cyp-embeddedness",
        title: "How widely is pupil ownership embedded?",
        help:
          "Explain whether voice and influence extend across groups, phases and different parts of provision.",
        maxCharacters: 1200
      },
      {
        id: "cyp-impact",
        title: "What difference does it make, and how do you know?",
        help:
          "Use pupil voice or examples showing effects on confidence, identity, agency, wellbeing or progression.",
        maxCharacters: 1400
      },
      {
        id: "cyp-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe where participation is still adult-led or where some pupil voices are less visible.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Curriculum Design and Delivery",
    subtitle: "Develop creative children and young people",
    shortLabel: "Curriculum Design and Delivery",
    guidance:
      "Tell us how arts learning is planned, taught and developed across subjects, phases or year groups.",
    prompts: [
      {
        id: "curriculum-practice",
        title: "What does arts learning look like in your curriculum?",
        help:
          "Describe the artforms, knowledge, skills and creative opportunities pupils encounter.",
        maxCharacters: 1200
      },
      {
        id: "curriculum-embeddedness",
        title: "How is quality and progression embedded?",
        help:
          "Explain how learning builds over time and how staff understand and review quality.",
        maxCharacters: 1200
      },
      {
        id: "curriculum-impact",
        title: "What difference does the curriculum make?",
        help:
          "Give examples of pupils developing creativity, confidence, craftsmanship, curiosity or artistic independence.",
        maxCharacters: 1400
      },
      {
        id: "curriculum-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe gaps in progression, consistency, subject knowledge, breadth or quality.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Range of Offer",
    subtitle: "Develop cultural entitlement for all children and young people",
    shortLabel: "Range of Offer",
    guidance:
      "Tell us about the breadth, relevance and accessibility of arts and cultural opportunities available to pupils.",
    prompts: [
      {
        id: "range-practice",
        title: "What opportunities do children and young people experience?",
        help:
          "Describe provision within and beyond the timetable, including creating, performing and experiencing culture.",
        maxCharacters: 1200
      },
      {
        id: "range-embeddedness",
        title: "How broad, connected and equitable is the offer?",
        help:
          "Explain how curriculum, enrichment, visits, events and partnerships work together and who can access them.",
        maxCharacters: 1200
      },
      {
        id: "range-impact",
        title: "What difference does the offer make?",
        help:
          "Give examples of increased access, engagement, progression, cultural awareness or sustained participation.",
        maxCharacters: 1400
      },
      {
        id: "range-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe any gaps across artforms, pupil groups, phases, access or progression.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Continuing Professional Development",
    subtitle: "Embed quality staff development",
    shortLabel: "Continuing Professional Development",
    guidance:
      "Tell us how staff develop and share the knowledge, skills and confidence needed for quality arts and cultural provision.",
    prompts: [
      {
        id: "cpd-practice",
        title: "What staff development currently takes place?",
        help:
          "Describe internal learning, external CPD, practitioner input, peer support or collaborative development.",
        maxCharacters: 1200
      },
      {
        id: "cpd-embeddedness",
        title: "How is staff development planned and shared?",
        help:
          "Explain how needs are identified, how learning spreads and how expertise is sustained.",
        maxCharacters: 1200
      },
      {
        id: "cpd-impact",
        title: "What difference has staff development made?",
        help:
          "Give examples of changes in confidence, teaching, curriculum, pupil experience or leadership.",
        maxCharacters: 1400
      },
      {
        id: "cpd-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe remaining gaps in confidence, capability, subject knowledge or access to development.",
        maxCharacters: 900
      }
    ]
  },
  {
    title: "Cultural Collaborations",
    subtitle: "Build connections",
    shortLabel: "Cultural Collaborations",
    guidance:
      "Tell us how relationships with practitioners, organisations, networks and other settings strengthen your provision.",
    prompts: [
      {
        id: "collaboration-practice",
        title: "What collaborations are currently in place?",
        help:
          "Describe who you work with, why those relationships matter and what they contribute.",
        maxCharacters: 1200
      },
      {
        id: "collaboration-embeddedness",
        title: "How strategic and sustained are these relationships?",
        help:
          "Explain whether partnerships are one-off, repeated, reciprocal or connected to longer-term priorities.",
        maxCharacters: 1200
      },
      {
        id: "collaboration-impact",
        title: "What difference do collaborations make?",
        help:
          "Give examples of changes in teaching, staff capability, pupil learning, cultural access or community connection.",
        maxCharacters: 1400
      },
      {
        id: "collaboration-next",
        title: "What are you learning or strengthening next?",
        help:
          "Describe gaps in local connection, partnership depth, access, reciprocity or sustainability.",
        maxCharacters: 900
      }
    ]
  }
];

/*
  ============================================================
  PROTOTYPE BEHAVIOUR
  ============================================================
*/

const STORAGE_KEY = "artsmark-option-1-draft";

const answers = {};
let currentSectionIndex = 0;
let saveStatusTimeout = null;

const screens = [...document.querySelectorAll(".screen")];

const startButton = document.getElementById("start-button");
const resumeButton = document.getElementById("resume-button");

const applicationForm = document.getElementById("application-form");
const promptsContainer = document.getElementById("prompts-container");
const sectionTitle = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");
const sectionGuidance = document.getElementById("section-guidance");
const sectionNumber = document.getElementById("section-number");
const sectionList = document.getElementById("section-list");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const progressTrack = document.getElementById("progress-track");
const savedStatus = document.getElementById("saved-status");
const validationMessage = document.getElementById("validation-message");

const backButton = document.getElementById("back-button");
const saveExitButton = document.getElementById("save-exit-button");
const nextButton = document.getElementById("next-button");

const reviewButton = document.getElementById("review-button");
const overviewButton = document.getElementById("overview-button");

const reviewContainer = document.getElementById("review-container");
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
const coverageList = document.getElementById("coverage-list");
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
    item.dataset.sectionIndex = String(index);

    sectionList.appendChild(item);
  });
}

function getAllPrompts() {
  return sections.flatMap((section) => section.prompts);
}

function hasAnySavedContent() {
  return getAllPrompts().some((prompt) => {
    return Boolean((answers[prompt.id] || "").trim());
  });
}

function isSectionComplete(sectionIndex) {
  return sections[sectionIndex].prompts.every((prompt) => {
    return Boolean((answers[prompt.id] || "").trim());
  });
}

function getCompletedSectionCount() {
  return sections.filter((section, index) => {
    return isSectionComplete(index);
  }).length;
}

function updateProgress() {
  const completedSections = getCompletedSectionCount();
  const percentage = Math.round(
    (completedSections / sections.length) * 100
  );

  progressText.textContent =
    `Section ${currentSectionIndex + 1} of ${sections.length}`;

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(percentage));

  [...sectionList.children].forEach((item, index) => {
    item.classList.toggle("is-current", index === currentSectionIndex);
    item.classList.toggle("is-complete", isSectionComplete(index));
  });
}

function saveDraft(showConfirmation = true) {
  const draft = {
    answers,
    currentSectionIndex,
    savedAt: new Date().toISOString()
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));

    if (showConfirmation) {
      showSavedStatus();
    }

    resumeButton.hidden = !hasAnySavedContent();
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

    return hasAnySavedContent();
  } catch (error) {
    console.warn("Unable to restore the saved draft.", error);
    return false;
  }
}

function clearDraft() {
  Object.keys(answers).forEach((key) => {
    delete answers[key];
  });

  currentSectionIndex = 0;

  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Unable to clear the saved draft.", error);
  }

  resumeButton.hidden = true;
}

function showSavedStatus() {
  savedStatus.textContent = "Draft saved";
  savedStatus.classList.add("is-visible");

  window.clearTimeout(saveStatusTimeout);

  saveStatusTimeout = window.setTimeout(() => {
    savedStatus.classList.remove("is-visible");
  }, 1400);
}

function createPromptCard(prompt, promptIndex, totalPrompts) {
  const article = document.createElement("article");
  const header = document.createElement("div");
  const count = document.createElement("p");
  const title = document.createElement("h2");
  const help = document.createElement("p");

  const textareaWrapper = document.createElement("div");
  const textarea = document.createElement("textarea");
  const textareaMeta = document.createElement("div");
  const guidanceText = document.createElement("span");
  const characterCount = document.createElement("span");

  article.className = "prompt-card";
  header.className = "prompt-header";

  count.className = "prompt-count";
  count.textContent = `Prompt ${promptIndex + 1} of ${totalPrompts}`;

  title.className = "prompt-title";
  title.id = `${prompt.id}-title`;
  title.textContent = prompt.title;

  help.className = "prompt-help";
  help.id = `${prompt.id}-help`;
  help.textContent = prompt.help;

  header.append(count, title, help);

  textareaWrapper.className = "textarea-wrapper";

  textarea.id = prompt.id;
  textarea.name = prompt.id;
  textarea.value = answers[prompt.id] || "";
  textarea.maxLength = prompt.maxCharacters;
  textarea.rows = 7;
  textarea.setAttribute(
    "aria-labelledby",
    `${prompt.id}-title`
  );
  textarea.setAttribute(
    "aria-describedby",
    `${prompt.id}-help ${prompt.id}-count`
  );

  guidanceText.textContent = "A focused working draft is fine.";

  characterCount.className = "character-count";
  characterCount.id = `${prompt.id}-count`;

  function updateCharacterCount() {
    const length = textarea.value.length;
    const remaining = prompt.maxCharacters - length;
    const threshold = Math.round(prompt.maxCharacters * 0.15);

    characterCount.textContent =
      `${length.toLocaleString()} / ` +
      `${prompt.maxCharacters.toLocaleString()} characters`;

    characterCount.classList.toggle(
      "is-near-limit",
      remaining <= threshold && remaining >= 0
    );

    characterCount.classList.toggle(
      "is-over-limit",
      remaining < 0
    );
  }

  textarea.addEventListener("input", () => {
    answers[prompt.id] = textarea.value;
    textarea.classList.remove("has-error");
    validationMessage.hidden = true;

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
  article.append(header, textareaWrapper);

  return article;
}

function renderSection(sectionIndex) {
  currentSectionIndex = sectionIndex;

  const section = sections[currentSectionIndex];

  sectionNumber.textContent = `Criterion ${currentSectionIndex + 1}`;
  sectionTitle.textContent = section.title;
  sectionSubtitle.textContent = section.subtitle;
  sectionGuidance.textContent = section.guidance;

  promptsContainer.innerHTML = "";
  validationMessage.hidden = true;

  section.prompts.forEach((prompt, promptIndex) => {
    promptsContainer.appendChild(
      createPromptCard(
        prompt,
        promptIndex,
        section.prompts.length
      )
    );
  });

  backButton.disabled = currentSectionIndex === 0;

  nextButton.textContent =
    currentSectionIndex === sections.length - 1
      ? "Finish draft"
      : "Save and continue";

  updateProgress();
  saveDraft(false);

  liveRegion.textContent =
    `${section.title}. Section ${currentSectionIndex + 1} ` +
    `of ${sections.length}.`;
}

function validateCurrentSection() {
  const section = sections[currentSectionIndex];
  let firstInvalidTextarea = null;

  section.prompts.forEach((prompt) => {
    const textarea = document.getElementById(prompt.id);
    const isEmpty = !(textarea.value || "").trim();

    textarea.classList.toggle("has-error", isEmpty);

    if (isEmpty && !firstInvalidTextarea) {
      firstInvalidTextarea = textarea;
    }
  });

  if (!firstInvalidTextarea) {
    validationMessage.hidden = true;
    return true;
  }

  validationMessage.hidden = false;
  firstInvalidTextarea.focus();

  return false;
}

function renderReview() {
  reviewContainer.innerHTML = "";

  sections.forEach((section, sectionIndex) => {
    const article = document.createElement("article");
    const header = document.createElement("div");
    const title = document.createElement("h2");
    const editButton = document.createElement("button");
    const answerList = document.createElement("dl");

    article.className = "review-section";
    header.className = "review-section__header";
    answerList.className = "review-answers";

    title.textContent = `${sectionIndex + 1}. ${section.title}`;

    editButton.type = "button";
    editButton.className = "text-button";
    editButton.textContent = "Change answers";

    editButton.addEventListener("click", () => {
      renderSection(sectionIndex);
      showScreen("application-screen");
    });

    header.append(title, editButton);

    section.prompts.forEach((prompt) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");

      row.className = "review-answer";

      term.textContent = prompt.title;
      description.textContent =
        (answers[prompt.id] || "").trim() || "No response added.";

      row.append(term, description);
      answerList.appendChild(row);
    });

    article.append(header, answerList);
    reviewContainer.appendChild(article);
  });
}

function calculateSectionCoverage(section) {
  const totalCharacters = section.prompts.reduce((total, prompt) => {
    return total + (answers[prompt.id] || "").trim().length;
  }, 0);

  const totalSuggestedCharacters = section.prompts.reduce(
    (total, prompt) => total + prompt.maxCharacters,
    0
  );

  /*
    Coverage is deliberately capped at 100%.

    This is only a visual indication of draft completeness.
    It is not a quality score or assessment judgement.
  */
  return Math.min(
    100,
    Math.round(
      (totalCharacters / totalSuggestedCharacters) * 100
    )
  );
}

function getCoverageLabel(percentage) {
  if (percentage === 0) {
    return "Not started";
  }

  if (percentage < 20) {
    return "Brief draft";
  }

  if (percentage < 45) {
    return "Developing draft";
  }

  if (percentage < 70) {
    return "Substantial draft";
  }

  return "Detailed draft";
}

function renderOverview() {
  coverageList.innerHTML = "";

  sections.forEach((section) => {
    const percentage = calculateSectionCoverage(section);

    const row = document.createElement("div");
    const label = document.createElement("div");
    const value = document.createElement("div");
    const track = document.createElement("div");
    const fill = document.createElement("div");

    row.className = "coverage-row";
    label.className = "coverage-label";
    value.className = "coverage-value";
    track.className = "coverage-track";
    fill.className = "coverage-fill";

    label.textContent = section.title;
    value.textContent = getCoverageLabel(percentage);
    fill.style.width = `${percentage}%`;

    track.setAttribute("aria-hidden", "true");

    track.appendChild(fill);
    row.append(label, value, track);
    coverageList.appendChild(row);
  });
}

function showOverview() {
  renderOverview();
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

  // Save whatever is present, including blank responses,
  // then continue to the next section.
  saveDraft(true);

  if (currentSectionIndex < sections.length - 1) {
    renderSection(currentSectionIndex + 1);
    showScreen("application-screen");
  } else {
    showScreen("completion-screen");
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