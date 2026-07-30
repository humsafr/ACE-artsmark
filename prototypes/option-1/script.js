"use strict";

/*
  CONTENT EDITING AREA

  Each criterion has:
  - a short framework description
  - one response field
  - criterion-specific guidance prompts
*/

const sections = [
  {
    title: "Values and Ethos",
    subtitle: "Demonstrate commitment to arts and culture",
    shortLabel: "Values and Ethos",
    guidance:
      "Tell us how arts, culture and creativity are valued in your setting and how that commitment is visible in everyday school life.",
    prompts: [
      "What did you intend to strengthen or change?",
      "What now happens in practice, and where is this visible?",
      "What difference has this made, and what helps you know?",
      "What have you learned, adapted or still need to strengthen?"
    ]
  },
  {
    title: "Equality, Diversity and Inclusion",
    subtitle: "Demonstrate equity, relevance and diversity for all",
    shortLabel: "Equality, Diversity and Inclusion",
    guidance:
      "Tell us how your provision supports equitable access, representation, relevance and belonging.",
    prompts: [
      "What did you intend to improve or address?",
      "What now happens in practice, including for different pupil groups?",
      "What changed in access, participation, representation or belonging, and how do you know?",
      "Where do barriers, gaps or unevenness remain?"
    ]
  },
  {
    title: "Leadership",
    subtitle: "Demonstrate ambitious and dynamic leadership",
    shortLabel: "Leadership",
    guidance:
      "Tell us how arts and culture are led, planned, resourced, reviewed and sustained.",
    prompts: [
      "What did you intend to strengthen about leadership?",
      "Who now owns, supports and makes decisions about the work?",
      "What difference has this made to priorities, resources or provision?",
      "What remains dependent on individuals or vulnerable to change?"
    ]
  },
  {
    title: "Children and Young People",
    subtitle: "Engage and empower children and young people",
    shortLabel: "Children and Young People",
    guidance:
      "Tell us how children and young people engage with, influence and take ownership of arts and cultural activity.",
    prompts: [
      "What did you intend to change about participation, voice or ownership?",
      "How do pupils now take part, shape decisions or lead?",
      "What difference has this made, and what pupil evidence supports your view?",
      "Whose voice or participation remains less visible?"
    ]
  },
  {
    title: "Curriculum Design and Delivery",
    subtitle: "Develop creative children and young people",
    shortLabel: "Curriculum Design and Delivery",
    guidance:
      "Tell us how arts learning is planned, taught and developed across subjects, phases or year groups.",
    prompts: [
      "What did you intend to strengthen in the curriculum?",
      "What now happens in teaching, learning and progression?",
      "What difference has this made to pupils, and how do you know?",
      "What remains inconsistent, underdeveloped or in need of adaptation?"
    ]
  },
  {
    title: "Range of Offer",
    subtitle: "Develop cultural entitlement for all children and young people",
    shortLabel: "Range of Offer",
    guidance:
      "Tell us about the breadth, relevance and accessibility of arts and cultural opportunities available to pupils.",
    prompts: [
      "What did you intend to broaden, connect or make more accessible?",
      "What do pupils now experience as creators, performers and audiences?",
      "What difference has this made to access, engagement or progression?",
      "Where are there still gaps across artforms, groups or phases?"
    ]
  },
  {
    title: "Continuing Professional Development",
    subtitle: "Embed quality staff development",
    shortLabel: "Continuing Professional Development",
    guidance:
      "Tell us how staff develop and share the knowledge, skills and confidence needed for quality arts and cultural provision.",
    prompts: [
      "What did you intend to strengthen in staff confidence or capability?",
      "What do staff now do differently in practice?",
      "What difference has this made to teaching, curriculum or pupil experience?",
      "What learning still needs to spread or be sustained?"
    ]
  },
  {
    title: "Cultural Collaborations",
    subtitle: "Build connections",
    shortLabel: "Cultural Collaborations",
    guidance:
      "Tell us how relationships with practitioners, organisations, networks and other settings strengthen your provision.",
    prompts: [
      "What did you intend the collaboration to make possible?",
      "What now happens through these relationships?",
      "What difference has this made to pupils, staff or the wider community?",
      "What have you learned about partnership depth, reciprocity or sustainability?"
    ]
  }
];

const STORAGE_KEY = "artsmark-option-1-simplified-draft";
const MAX_EVIDENCE_ITEMS = 5;

const answers = {};
const evidenceItems = [];

let synthesis = "";
let currentSectionIndex = 0;
let currentStage = "intro-screen";
let saveStatusTimeout = null;

const screens = [...document.querySelectorAll(".screen")];

const startButton = document.getElementById("start-button");
const resumeButton = document.getElementById("resume-button");

const applicationForm = document.getElementById("application-form");
const criterionResponse = document.getElementById("criterion-response");
const criterionCharacterCount = document.getElementById(
  "criterion-character-count"
);
const criterionPrompts = document.getElementById("criterion-prompts");

const sectionTitle = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");
const sectionGuidance = document.getElementById("section-guidance");
const sectionNumber = document.getElementById("section-number");
const sectionList = document.getElementById("section-list");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const progressTrack = document.getElementById("progress-track");
const savedStatus = document.getElementById("saved-status");

const backButton = document.getElementById("back-button");
const saveExitButton = document.getElementById("save-exit-button");
const nextButton = document.getElementById("next-button");

const overviewResponses = document.getElementById("overview-responses");
const synthesisResponse = document.getElementById("synthesis-response");
const synthesisCharacterCount = document.getElementById(
  "synthesis-character-count"
);
const editFromOverviewButton = document.getElementById(
  "edit-from-overview-button"
);
const overviewBackButton = document.getElementById("overview-back-button");
const continueToEvidenceButton = document.getElementById(
  "continue-to-evidence-button"
);

const evidenceList = document.getElementById("evidence-list");
const evidenceCountBadge = document.getElementById("evidence-count-badge");
const addEvidenceButton = document.getElementById("add-evidence-button");
const evidenceBackButton = document.getElementById("evidence-back-button");
const reviewApplicationButton = document.getElementById(
  "review-application-button"
);

const finalCriteriaReview = document.getElementById("final-criteria-review");
const finalSynthesis = document.getElementById("final-synthesis");
const finalEvidenceReview = document.getElementById("final-evidence-review");
const editOverviewButton = document.getElementById("edit-overview-button");
const editSynthesisButton = document.getElementById("edit-synthesis-button");
const editEvidenceButton = document.getElementById("edit-evidence-button");
const restartButton = document.getElementById("restart-button");

const liveRegion = document.getElementById("live-region");

function showScreen(screenId, focusSelector = "h1") {
  currentStage = screenId;

  screens.forEach((screen) => {
    const isActive = screen.id === screenId;

    screen.classList.toggle("screen--active", isActive);
    screen.setAttribute("aria-hidden", String(!isActive));
  });

  saveDraft(false);

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  window.setTimeout(() => {
    const targetScreen = document.getElementById(screenId);
    const focusTarget = targetScreen?.querySelector(focusSelector);

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
  return (
    Object.values(answers).some((value) =>
      Boolean(String(value || "").trim())
    ) ||
    Boolean(synthesis.trim()) ||
    evidenceItems.length > 0
  );
}

function isSectionComplete(index) {
  return Boolean((answers[index] || "").trim());
}

function updateProgress() {
  const completed = sections.filter((_, index) =>
    isSectionComplete(index)
  ).length;

  const percentage = Math.round(
    (completed / sections.length) * 100
  );

  progressText.textContent =
    `Criterion ${currentSectionIndex + 1} of ${sections.length}`;

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(percentage));

  [...sectionList.children].forEach((item, index) => {
    item.classList.toggle("is-current", index === currentSectionIndex);
    item.classList.toggle("is-complete", isSectionComplete(index));
  });
}

function showSavedStatus() {
  savedStatus.classList.add("is-visible");

  window.clearTimeout(saveStatusTimeout);

  saveStatusTimeout = window.setTimeout(() => {
    savedStatus.classList.remove("is-visible");
  }, 1400);
}

function saveDraft(showConfirmation = false) {
  const draft = {
    answers,
    synthesis,
    evidenceItems,
    currentSectionIndex,
    currentStage,
    savedAt: new Date().toISOString()
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    resumeButton.hidden = !hasAnySavedContent();

    if (showConfirmation) {
      showSavedStatus();
    }
  } catch (error) {
    console.warn("Unable to save this draft.", error);
  }
}

function loadDraft() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return false;
    }

    const parsed = JSON.parse(raw);

    if (parsed.answers && typeof parsed.answers === "object") {
      Object.assign(answers, parsed.answers);
    }

    if (typeof parsed.synthesis === "string") {
      synthesis = parsed.synthesis;
    }

    if (Array.isArray(parsed.evidenceItems)) {
      evidenceItems.push(
        ...parsed.evidenceItems
          .slice(0, MAX_EVIDENCE_ITEMS)
          .map((item) => ({
            title: String(item.title || ""),
            criterion: String(item.criterion || ""),
            note: String(item.note || ""),
            fileName: String(item.fileName || "")
          }))
      );
    }

    if (
      Number.isInteger(parsed.currentSectionIndex) &&
      parsed.currentSectionIndex >= 0 &&
      parsed.currentSectionIndex < sections.length
    ) {
      currentSectionIndex = parsed.currentSectionIndex;
    }

    if (typeof parsed.currentStage === "string") {
      currentStage = parsed.currentStage;
    }

    return hasAnySavedContent();
  } catch (error) {
    console.warn("Unable to restore this draft.", error);
    return false;
  }
}

function clearDraft() {
  Object.keys(answers).forEach((key) => {
    delete answers[key];
  });

  evidenceItems.splice(0, evidenceItems.length);

  synthesis = "";
  currentSectionIndex = 0;
  currentStage = "intro-screen";

  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Unable to clear this draft.", error);
  }

  resumeButton.hidden = true;
}

function updateCharacterCount(textarea, counter, max) {
  const length = textarea.value.length;
  const threshold = Math.round(max * 0.15);

  counter.textContent =
    `${length.toLocaleString()} / ${max.toLocaleString()} characters`;

  counter.classList.toggle(
    "is-near-limit",
    max - length <= threshold
  );
}

function saveCurrentCriterion(showConfirmation = false) {
  answers[currentSectionIndex] = criterionResponse.value;
  saveDraft(showConfirmation);
  updateProgress();
}

function renderSection(index) {
  currentSectionIndex = index;

  const section = sections[index];

  sectionNumber.textContent = `Criterion ${index + 1}`;
  sectionTitle.textContent = section.title;
  sectionSubtitle.textContent = section.subtitle;
  sectionGuidance.textContent = section.guidance;

  criterionPrompts.innerHTML = "";

  section.prompts.forEach((prompt) => {
    const item = document.createElement("li");
    item.textContent = prompt;
    criterionPrompts.appendChild(item);
  });

  criterionResponse.value = answers[index] || "";

  updateCharacterCount(
    criterionResponse,
    criterionCharacterCount,
    4000
  );

  backButton.disabled = index === 0;

  nextButton.textContent =
    index === sections.length - 1
      ? "Continue to overview"
      : "Save and continue";

  updateProgress();
  saveDraft(false);

  liveRegion.textContent =
    `${section.title}. Criterion ${index + 1} of ${sections.length}.`;
}

function renderOverview() {
  overviewResponses.innerHTML = "";

  sections.forEach((section, index) => {
    const row = document.createElement("article");
    const title = document.createElement("h3");
    const response = document.createElement("p");

    row.className = "overview-response";
    title.textContent = `${index + 1}. ${section.title}`;

    const value = (answers[index] || "").trim();

    response.textContent = value || "No response added.";
    response.classList.toggle("blank-response", !value);

    row.append(title, response);
    overviewResponses.appendChild(row);
  });

  synthesisResponse.value = synthesis;

  updateCharacterCount(
    synthesisResponse,
    synthesisCharacterCount,
    3000
  );
}

function saveSynthesis() {
  synthesis = synthesisResponse.value;
  saveDraft(false);
}

function addEvidenceItem() {
  if (evidenceItems.length >= MAX_EVIDENCE_ITEMS) {
    return;
  }

  evidenceItems.push({
    title: "",
    criterion: "",
    note: "",
    fileName: ""
  });

  renderEvidenceItems();
  saveDraft(false);
}

function renderEvidenceItems() {
  evidenceList.innerHTML = "";

  evidenceItems.forEach((item, index) => {
    const article = document.createElement("article");
    const header = document.createElement("div");
    const heading = document.createElement("h2");
    const removeButton = document.createElement("button");
    const fields = document.createElement("div");

    article.className = "evidence-item";
    header.className = "evidence-item__header";
    fields.className = "evidence-fields";

    heading.textContent = `Evidence item ${index + 1}`;

    removeButton.type = "button";
    removeButton.className = "remove-evidence-button";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      evidenceItems.splice(index, 1);
      renderEvidenceItems();
      saveDraft(false);
    });

    header.append(heading, removeButton);

    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");

    titleLabel.textContent = "Evidence title";
    titleInput.type = "text";
    titleInput.value = item.title;
    titleInput.placeholder = "For example: Year 5 progression extract";

    titleInput.addEventListener("input", () => {
      evidenceItems[index].title = titleInput.value;
      saveDraft(false);
    });

    titleLabel.appendChild(titleInput);

    const criterionLabel = document.createElement("label");
    const criterionSelect = document.createElement("select");

    criterionLabel.textContent = "Which criterion or claim does this support?";

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Choose a criterion";
    criterionSelect.appendChild(defaultOption);

    sections.forEach((section, sectionIndex) => {
      const option = document.createElement("option");

      option.value = String(sectionIndex);
      option.textContent = section.title;
      option.selected = item.criterion === String(sectionIndex);

      criterionSelect.appendChild(option);
    });

    criterionSelect.addEventListener("change", () => {
      evidenceItems[index].criterion = criterionSelect.value;
      saveDraft(false);
    });

    criterionLabel.appendChild(criterionSelect);

    const noteLabel = document.createElement("label");
    const noteTextarea = document.createElement("textarea");

    noteLabel.className = "field-wide";
    noteLabel.textContent = "What should the assessor notice?";

    noteTextarea.maxLength = 250;
    noteTextarea.value = item.note;
    noteTextarea.placeholder =
      "Explain briefly what this item shows and why it matters.";

    noteTextarea.addEventListener("input", () => {
      evidenceItems[index].note = noteTextarea.value;
      saveDraft(false);
    });

    noteLabel.appendChild(noteTextarea);

    const fileLabel = document.createElement("label");
    const fileInput = document.createElement("input");
    const fileHelp = document.createElement("div");

    fileLabel.className = "field-wide";
    fileLabel.textContent = "Choose a file";

    fileInput.type = "file";
    fileInput.accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov,.webm";

    fileInput.addEventListener("change", () => {
      evidenceItems[index].fileName =
        fileInput.files?.[0]?.name || "";

      fileHelp.textContent =
        evidenceItems[index].fileName ||
        "Prototype only: the selected file is not uploaded or stored.";

      saveDraft(false);
    });

    fileHelp.className = "file-placeholder";
    fileHelp.textContent =
      item.fileName ||
      "Prototype only: the selected file is not uploaded or stored.";

    fileLabel.append(fileInput, fileHelp);

    fields.append(
      titleLabel,
      criterionLabel,
      noteLabel,
      fileLabel
    );

    article.append(header, fields);
    evidenceList.appendChild(article);
  });

  evidenceCountBadge.textContent =
    `${evidenceItems.length} of ${MAX_EVIDENCE_ITEMS} items`;

  addEvidenceButton.disabled =
    evidenceItems.length >= MAX_EVIDENCE_ITEMS;

  addEvidenceButton.textContent =
    evidenceItems.length >= MAX_EVIDENCE_ITEMS
      ? "Maximum of five items reached"
      : "Add an evidence item";
}

function renderFinalReview() {
  finalCriteriaReview.innerHTML = "";

  sections.forEach((section, index) => {
    const article = document.createElement("article");
    const header = document.createElement("div");
    const title = document.createElement("h2");
    const editButton = document.createElement("button");
    const body = document.createElement("div");
    const response = document.createElement("p");

    article.className = "review-section";
    header.className = "review-section__header";
    body.className = "review-section__body";

    title.textContent = `${index + 1}. ${section.title}`;

    editButton.type = "button";
    editButton.className = "text-button";
    editButton.textContent = "Change response";

    editButton.addEventListener("click", () => {
      renderSection(index);
      showScreen("application-screen");
    });

    const value = (answers[index] || "").trim();

    response.textContent = value || "No response added.";
    response.classList.toggle("blank-response", !value);

    header.append(title, editButton);
    body.appendChild(response);
    article.append(header, body);

    finalCriteriaReview.appendChild(article);
  });

  finalSynthesis.textContent =
    synthesis.trim() || "No overall reflection added.";

  finalSynthesis.classList.toggle(
    "blank-response",
    !synthesis.trim()
  );

  finalEvidenceReview.innerHTML = "";

  if (evidenceItems.length === 0) {
    const empty = document.createElement("p");

    empty.className = "blank-response";
    empty.textContent = "No optional evidence added.";

    finalEvidenceReview.appendChild(empty);
    return;
  }

  evidenceItems.forEach((item, index) => {
    const article = document.createElement("article");
    const title = document.createElement("h3");
    const criterion = document.createElement("p");
    const note = document.createElement("p");
    const file = document.createElement("p");

    article.className = "final-evidence-item";

    title.textContent =
      item.title.trim() || `Evidence item ${index + 1}`;

    const criterionName =
      item.criterion !== "" && sections[Number(item.criterion)]
        ? sections[Number(item.criterion)].title
        : "No criterion selected";

    criterion.textContent = `Supports: ${criterionName}`;
    note.textContent =
      item.note.trim() || "No explanation added.";

    file.textContent =
      item.fileName
        ? `Selected file: ${item.fileName}`
        : "No file selected.";

    article.append(title, criterion, note, file);
    finalEvidenceReview.appendChild(article);
  });
}

startButton.addEventListener("click", () => {
  clearDraft();
  renderSection(0);
  showScreen("application-screen");
});

resumeButton.addEventListener("click", () => {
  if (currentStage === "overview-screen") {
    renderOverview();
    showScreen("overview-screen");
    return;
  }

  if (currentStage === "evidence-screen") {
    renderEvidenceItems();
    showScreen("evidence-screen");
    return;
  }

  if (currentStage === "final-review-screen") {
    renderFinalReview();
    showScreen("final-review-screen");
    return;
  }

  renderSection(currentSectionIndex);
  showScreen("application-screen");
});

criterionResponse.addEventListener("input", () => {
  answers[currentSectionIndex] = criterionResponse.value;

  updateCharacterCount(
    criterionResponse,
    criterionCharacterCount,
    4000
  );

  saveDraft(false);
  updateProgress();
});

criterionResponse.addEventListener("blur", () => {
  saveCurrentCriterion(true);
});

applicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveCurrentCriterion(true);

  if (currentSectionIndex < sections.length - 1) {
    renderSection(currentSectionIndex + 1);
    showScreen("application-screen");
    return;
  }

  renderOverview();
  showScreen("overview-screen");
});

backButton.addEventListener("click", () => {
  if (currentSectionIndex <= 0) {
    return;
  }

  saveCurrentCriterion(false);
  renderSection(currentSectionIndex - 1);
  showScreen("application-screen");
});

saveExitButton.addEventListener("click", () => {
  saveCurrentCriterion(true);
  showScreen("intro-screen");
});

editFromOverviewButton.addEventListener("click", () => {
  saveSynthesis();
  renderSection(0);
  showScreen("application-screen");
});

overviewBackButton.addEventListener("click", () => {
  saveSynthesis();
  renderSection(sections.length - 1);
  showScreen("application-screen");
});

synthesisResponse.addEventListener("input", () => {
  synthesis = synthesisResponse.value;

  updateCharacterCount(
    synthesisResponse,
    synthesisCharacterCount,
    3000
  );

  saveDraft(false);
});

synthesisResponse.addEventListener("blur", () => {
  saveSynthesis();
  saveDraft(true);
});

continueToEvidenceButton.addEventListener("click", () => {
  saveSynthesis();
  renderEvidenceItems();
  showScreen("evidence-screen");
});

addEvidenceButton.addEventListener("click", addEvidenceItem);

evidenceBackButton.addEventListener("click", () => {
  renderOverview();
  showScreen("overview-screen");
});

reviewApplicationButton.addEventListener("click", () => {
  renderFinalReview();
  showScreen("final-review-screen");
});

editOverviewButton.addEventListener("click", () => {
  renderOverview();
  showScreen("overview-screen");
});

editSynthesisButton.addEventListener("click", () => {
  renderOverview();
  showScreen("overview-screen", "#synthesis-title");
});

editEvidenceButton.addEventListener("click", () => {
  renderEvidenceItems();
  showScreen("evidence-screen");
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
