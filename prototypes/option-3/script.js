"use strict";

const evidenceOptions = [
  "Curriculum or planning documents",
  "Participation or progression information",
  "Pupil voice",
  "Staff or partner feedback",
  "Observation of practice",
  "Leadership or governor review",
  "No formal evidence yet"
];

const sections = [
  {
    title: "Purpose and leadership",
    shortLabel: "Purpose and leadership",
    subtitle: "Values and Ethos · Leadership",
    criteria: [
      {
        title: "Values and Ethos",
        shortLabel: "Values and Ethos",
        questions: [
          {
            id: "values-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes how arts, culture and creativity influence your setting?",
            options: [
              "They are most visible through particular subjects, events or individual enthusiasm.",
              "They are recognised as valuable and appear in some planning, communication and school activity.",
              "They are clearly connected to the setting’s values and influence learning, wellbeing or community priorities.",
              "They consistently shape strategic decisions, resource choices and the setting’s identity."
            ]
          },
          {
            id: "values-reach",
            dimension: "Reach and resilience",
            text: "How widely and consistently is this understanding established?",
            options: [
              "It is strongest among a small number of staff or in isolated activity.",
              "It is understood in some teams or parts of the setting, but varies considerably.",
              "It is shared across most of the setting and visible in regular practice.",
              "It is understood by pupils, staff, leaders and governors, and remains resilient through change."
            ]
          }
        ]
      },
      {
        title: "Leadership",
        shortLabel: "Leadership",
        questions: [
          {
            id: "leadership-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes how arts and culture are led?",
            options: [
              "The work depends mainly on one committed individual.",
              "A small group coordinates activity with some senior leadership support.",
              "Roles, decisions, resources and review are clear and connected to wider priorities.",
              "Leadership is distributed, evidence-informed and actively shapes whole-setting strategy."
            ]
          },
          {
            id: "leadership-reach",
            dimension: "Reach and resilience",
            text: "How resilient is leadership for this work?",
            options: [
              "Progress would be difficult to sustain if a key individual left.",
              "Some responsibility is shared, but ownership remains concentrated.",
              "Responsibility is shared across staff and leaders and is sustainable in most circumstances.",
              "Leadership is widely shared, strategically coordinated and resilient to staffing or funding changes."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Equity and pupil agency",
    shortLabel: "Equity and pupil agency",
    subtitle: "Equality, Diversity and Inclusion · Children and Young People",
    criteria: [
      {
        title: "Equality, Diversity and Inclusion",
        shortLabel: "Equity, Diversity and Inclusion",
        questions: [
          {
            id: "edi-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes how equity and representation are addressed?",
            options: [
              "Access and representation depend mainly on individual activities or staff choices.",
              "The setting is beginning to identify barriers and include a wider range of cultures and perspectives.",
              "Participation, barriers and representation are actively reviewed and provision changes in response.",
              "Equity is systematically embedded across curriculum, participation, partnerships and review."
            ]
          },
          {
            id: "edi-reach",
            dimension: "Reach and consistency",
            text: "How consistently does this apply across pupil groups and provision?",
            options: [
              "Positive practice is isolated and some groups experience markedly different access.",
              "Some groups or areas benefit more consistently than others.",
              "Most groups experience equitable and relevant provision, with targeted action where needed.",
              "The setting can demonstrate sustained, whole-setting action on access, representation and belonging."
            ]
          }
        ]
      },
      {
        title: "Children and Young People",
        shortLabel: "Children and Young People",
        questions: [
          {
            id: "cyp-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes pupils’ role in shaping provision?",
            options: [
              "Pupils mainly take part in activity designed by adults.",
              "Pupils are consulted or offered choices about some aspects of provision.",
              "Pupils influence planning and delivery and have meaningful creative ownership.",
              "Pupils lead, advocate and shape arts and cultural practice within or beyond the setting."
            ]
          },
          {
            id: "cyp-reach",
            dimension: "Reach and consistency",
            text: "How widely is meaningful pupil influence established?",
            options: [
              "It is limited to particular groups, activities or confident pupils.",
              "It happens in some phases or projects but is not yet consistent.",
              "It is established across most of the setting and includes a broad range of pupils.",
              "Pupil agency is embedded, inclusive and sustained across decision-making and practice."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Learning and cultural entitlement",
    shortLabel: "Learning and entitlement",
    subtitle: "Curriculum Design and Delivery · Range of Offer",
    criteria: [
      {
        title: "Curriculum Design and Delivery",
        shortLabel: "Curriculum Design and Delivery",
        questions: [
          {
            id: "curriculum-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes the quality and progression of arts learning?",
            options: [
              "Provision varies considerably and progression is not yet clear.",
              "Curriculum plans or schemes are developing greater consistency.",
              "Knowledge, skills and creativity build clearly over time and expectations are shared.",
              "Progression and pedagogy are embedded, reviewed and adapted to produce consistently strong outcomes."
            ]
          },
          {
            id: "curriculum-reach",
            dimension: "Reach and consistency",
            text: "How consistent is this quality across the setting?",
            options: [
              "Strong practice depends on particular teachers, subjects or phases.",
              "Some areas are well developed, but quality and progression remain uneven.",
              "Most pupils experience coherent progression and broadly consistent quality.",
              "High-quality arts learning is consistently understood, delivered and improved across the setting."
            ]
          }
        ]
      },
      {
        title: "Range of Offer",
        shortLabel: "Range of Offer",
        questions: [
          {
            id: "range-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes the breadth and coherence of the offer?",
            options: [
              "Opportunities are concentrated in a small number of artforms or events.",
              "A growing range is available through curriculum, enrichment, visits or performances.",
              "Pupils experience a broad, connected offer as creators, performers and audiences.",
              "The offer is rich, stretching and connected to sustained progression and cultural choice."
            ]
          },
          {
            id: "range-reach",
            dimension: "Reach and entitlement",
            text: "How equitably is this offer experienced?",
            options: [
              "Access depends significantly on year group, cost, timetable, confidence or existing interest.",
              "The setting is broadening access, but some groups participate less than others.",
              "Most pupils have meaningful access and barriers are actively identified and addressed.",
              "All groups experience a broad cultural entitlement, with targeted approaches where needed."
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Capability and connection",
    shortLabel: "Capability and connection",
    subtitle: "Continuing Professional Development · Cultural Collaborations",
    criteria: [
      {
        title: "Continuing Professional Development",
        shortLabel: "Continuing Professional Development",
        questions: [
          {
            id: "cpd-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes how staff capability is developed?",
            options: [
              "Development happens mainly through individual interest or immediate need.",
              "Some arts-related CPD or sharing of practice takes place.",
              "Development is planned around identified needs and leads to visible changes in practice.",
              "Staff learning is strategic, sustained and actively shapes curriculum, leadership and future priorities."
            ]
          },
          {
            id: "cpd-reach",
            dimension: "Reach and resilience",
            text: "How widely does learning spread and endure?",
            options: [
              "Expertise remains concentrated among particular staff.",
              "Learning is shared informally or within some teams.",
              "Good practice spreads across most of the setting and is sustained beyond individual activity.",
              "Professional learning is embedded, collaborative and contributes to capability within and beyond the setting."
            ]
          }
        ]
      },
      {
        title: "Cultural Collaborations",
        shortLabel: "Cultural Collaborations",
        questions: [
          {
            id: "collaboration-depth",
            dimension: "Depth of practice",
            text: "Which statement best describes the role of external relationships?",
            options: [
              "Relationships are mainly occasional or activity-based.",
              "Developing relationships broaden the offer or introduce new practice.",
              "Sustained collaborations improve teaching, learning, access or staff capability.",
              "Partnerships are strategic, reciprocal and build lasting capability and cultural connection."
            ]
          },
          {
            id: "collaboration-reach",
            dimension: "Reach and sustainability",
            text: "How embedded and sustainable are these relationships?",
            options: [
              "They depend on individual contacts or one-off opportunities.",
              "Some relationships repeat, but are not yet part of a wider strategy.",
              "Key relationships are sustained, purposeful and connected to setting priorities.",
              "A coherent network of relationships strengthens the setting and contributes to the wider cultural ecology."
            ]
          }
        ]
      }
    ]
  }
];

const STORAGE_KEY = "artsmark-option-3-self-assessment";

const answers = {};
const evidenceBasis = {};
const sectionExamples = {};
let finalReflection = "";

let currentSectionIndex = 0;
let chartScores = [];
let savedStatusTimeout = null;

const screens = [...document.querySelectorAll(".screen")];

const startButton = document.getElementById("start-button");
const resumeButton = document.getElementById("resume-button");
const questionsForm = document.getElementById("questions-form");
const criteriaContainer = document.getElementById("criteria-container");
const sectionTitle = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");
const sectionNumber = document.getElementById("section-number");
const sectionList = document.getElementById("section-list");
const progressText = document.getElementById("progress-text");
const answeredText = document.getElementById("answered-text");
const progressBar = document.getElementById("progress-bar");
const progressTrack = document.querySelector("#questionnaire-screen .progress-track");
const validationMessage = document.getElementById("validation-message");
const backButton = document.getElementById("back-button");
const saveExitButton = document.getElementById("save-exit-button");
const nextButton = document.getElementById("next-button");
const sectionExample = document.getElementById("section-example");
const sectionExampleCount = document.getElementById("section-example-count");

const reviewButton = document.getElementById("review-button");
const resultsButton = document.getElementById("results-button");
const reviewContainer = document.getElementById("review-container");
const reviewResultsButton = document.getElementById("review-results-button");
const reviewResultsButtonBottom = document.getElementById("review-results-button-bottom");
const reviewBackButton = document.getElementById("review-back-button");

const editFromResultsButton = document.getElementById("edit-from-results-button");
const radarCanvas = document.getElementById("radar-chart");
const strengthsSummary = document.getElementById("strengths-summary");
const developmentSummary = document.getElementById("development-summary");
const scoresList = document.getElementById("scores-list");
const startNarrativeButton = document.getElementById("start-narrative-button");

const narrativeForm = document.getElementById("narrative-form");
const narrativeResponse = document.getElementById("narrative-response");
const narrativeCharacterCount = document.getElementById("narrative-character-count");
const narrativeRadarCanvas = document.getElementById("narrative-radar-chart");
const narrativeScoresList = document.getElementById("narrative-scores-list");
const returnToResultsButton = document.getElementById("return-to-results-button");
const returnToResultsButtonBottom = document.getElementById("return-to-results-button-bottom");
const narrativeSaveExitButton = document.getElementById("narrative-save-exit-button");

const finalRadarCanvas = document.getElementById("final-radar-chart");
const finalScoresList = document.getElementById("final-scores-list");
const finalReflectionText = document.getElementById("final-reflection");
const assessorReviewList = document.getElementById("assessor-review-list");
const editNarrativeButton = document.getElementById("edit-narrative-button");
const editReflectionInline = document.getElementById("edit-reflection-inline");
const editQuestionnaireButton = document.getElementById("edit-questionnaire-button");
const restartButton = document.getElementById("restart-button");
const liveRegion = document.getElementById("live-region");

const criteria = sections.flatMap((section) => section.criteria);
const allQuestions = criteria.flatMap((criterion) => criterion.questions);
const totalQuestions = allQuestions.length;

function showScreen(screenId, focusSelector = "h1") {
  screens.forEach((screen) => {
    const active = screen.id === screenId;
    screen.classList.toggle("screen--active", active);
    screen.setAttribute("aria-hidden", String(!active));
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  window.setTimeout(() => {
    const screen = document.getElementById(screenId);
    const target = screen?.querySelector(focusSelector);

    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
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

function getAnsweredCount() {
  return allQuestions.filter((question) =>
    Number.isInteger(answers[question.id])
  ).length;
}

function isSectionComplete(index) {
  return sections[index].criteria.every((criterion) =>
    criterion.questions.every((question) =>
      Number.isInteger(answers[question.id])
    )
  );
}

function updateProgress() {
  const answered = getAnsweredCount();
  const percentage = Math.round((answered / totalQuestions) * 100);

  progressText.textContent =
    `Section ${currentSectionIndex + 1} of ${sections.length}`;

  answeredText.textContent =
    `${answered} of ${totalQuestions} judgements completed`;

  progressBar.style.width = `${percentage}%`;
  progressTrack.setAttribute("aria-valuenow", String(percentage));

  [...sectionList.children].forEach((item, index) => {
    item.classList.toggle("is-current", index === currentSectionIndex);
    item.classList.toggle("is-complete", isSectionComplete(index));
  });
}

function hasProgress() {
  return (
    getAnsweredCount() > 0 ||
    Object.values(sectionExamples).some((value) => String(value || "").trim()) ||
    Object.values(evidenceBasis).some((value) => Array.isArray(value) && value.length) ||
    Boolean(finalReflection.trim())
  );
}

function saveProgress() {
  const data = {
    answers,
    evidenceBasis,
    sectionExamples,
    finalReflection,
    currentSectionIndex,
    savedAt: new Date().toISOString()
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    resumeButton.hidden = !hasProgress();
  } catch (error) {
    console.warn("Unable to save progress.", error);
  }
}

function loadProgress() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return false;

    const parsed = JSON.parse(raw);
    Object.assign(answers, parsed.answers || {});
    Object.assign(evidenceBasis, parsed.evidenceBasis || {});
    Object.assign(sectionExamples, parsed.sectionExamples || {});

    finalReflection =
      typeof parsed.finalReflection === "string"
        ? parsed.finalReflection
        : "";

    if (
      Number.isInteger(parsed.currentSectionIndex) &&
      parsed.currentSectionIndex >= 0 &&
      parsed.currentSectionIndex < sections.length
    ) {
      currentSectionIndex = parsed.currentSectionIndex;
    }

    return hasProgress();
  } catch (error) {
    console.warn("Unable to restore progress.", error);
    return false;
  }
}

function clearProgress() {
  Object.keys(answers).forEach((key) => delete answers[key]);
  Object.keys(evidenceBasis).forEach((key) => delete evidenceBasis[key]);
  Object.keys(sectionExamples).forEach((key) => delete sectionExamples[key]);

  finalReflection = "";
  currentSectionIndex = 0;
  chartScores = [];

  sessionStorage.removeItem(STORAGE_KEY);
  resumeButton.hidden = true;
}

function createOption(question, optionText, optionIndex) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const textWrapper = document.createElement("span");
  const letter = document.createElement("span");
  const optionContent = document.createElement("span");

  label.className = "option";

  input.type = "radio";
  input.name = question.id;
  input.value = String(optionIndex);
  input.checked = answers[question.id] === optionIndex;

  input.addEventListener("change", () => {
    answers[question.id] = optionIndex;
    validationMessage.hidden = true;
    updateProgress();
    saveProgress();
  });

  letter.className = "option-letter";
  letter.textContent = String.fromCharCode(65 + optionIndex);
  letter.setAttribute("aria-hidden", "true");

  optionContent.className = "option-text";
  optionContent.textContent = optionText;

  textWrapper.append(letter, optionContent);
  label.append(input, textWrapper);

  return label;
}

function createQuestionCard(question, index) {
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  const count = document.createElement("span");
  const dimension = document.createElement("span");
  const optionsList = document.createElement("div");

  fieldset.className = "question-card";

  count.className = "question-count";
  count.textContent = `Judgement ${index + 1} of 2`;

  dimension.className = "dimension-label";
  dimension.textContent = question.dimension;

  legend.append(count, dimension, document.createTextNode(question.text));

  optionsList.className = "options-list";

  question.options.forEach((optionText, optionIndex) => {
    optionsList.appendChild(
      createOption(question, optionText, optionIndex)
    );
  });

  fieldset.append(legend, optionsList);
  return fieldset;
}

function createEvidenceBasis(criterion) {
  const article = document.createElement("article");
  const heading = document.createElement("h3");
  const help = document.createElement("p");
  const grid = document.createElement("div");

  article.className = "evidence-basis";
  heading.textContent = "What is this judgement based on?";
  help.textContent =
    "Select all that apply. This is not scored; it helps make the basis of the claim visible.";
  grid.className = "evidence-basis__grid";

  evidenceOptions.forEach((optionText) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    const selected = evidenceBasis[criterion.title] || [];

    input.type = "checkbox";
    input.value = optionText;
    input.checked = selected.includes(optionText);

    input.addEventListener("change", () => {
      const current = new Set(evidenceBasis[criterion.title] || []);

      if (input.checked) {
        current.add(optionText);
      } else {
        current.delete(optionText);
      }

      evidenceBasis[criterion.title] = [...current];
      saveProgress();
    });

    label.append(input, document.createTextNode(optionText));
    grid.appendChild(label);
  });

  article.append(heading, help, grid);
  return article;
}

function renderSection(index) {
  currentSectionIndex = index;
  const section = sections[index];

  sectionNumber.textContent = `Section ${index + 1}`;
  sectionTitle.textContent = section.title;
  sectionSubtitle.textContent = section.subtitle;
  criteriaContainer.innerHTML = "";
  validationMessage.hidden = true;

  section.criteria.forEach((criterion) => {
    const wrapper = document.createElement("section");
    const heading = document.createElement("div");
    const eyebrow = document.createElement("p");
    const title = document.createElement("h2");

    wrapper.className = "criterion-group";
    heading.className = "criterion-group__heading";
    eyebrow.className = "eyebrow";
    eyebrow.textContent = "Framework criterion";
    title.textContent = criterion.title;

    heading.append(eyebrow, title);
    wrapper.appendChild(heading);

    criterion.questions.forEach((question, questionIndex) => {
      wrapper.appendChild(createQuestionCard(question, questionIndex));
    });

    wrapper.appendChild(createEvidenceBasis(criterion));
    criteriaContainer.appendChild(wrapper);
  });

  sectionExample.value = sectionExamples[section.title] || "";
  updateSectionExampleCount();

  backButton.disabled = index === 0;
  nextButton.textContent =
    index === sections.length - 1
      ? "Finish self-assessment"
      : "Save and continue";

  updateProgress();
  saveProgress();

  liveRegion.textContent =
    `${section.title}. Section ${index + 1} of ${sections.length}.`;
}

function updateSectionExampleCount() {
  sectionExampleCount.textContent =
    `${sectionExample.value.length} / 800 characters`;
}

function validateCurrentSection() {
  const unanswered = sections[currentSectionIndex].criteria
    .flatMap((criterion) => criterion.questions)
    .find((question) => !Number.isInteger(answers[question.id]));

  if (!unanswered) {
    validationMessage.hidden = true;
    return true;
  }

  validationMessage.hidden = false;
  const input = criteriaContainer.querySelector(
    `input[name="${unanswered.id}"]`
  );
  input?.focus();
  return false;
}

function renderReview() {
  reviewContainer.innerHTML = "";

  sections.forEach((section, sectionIndex) => {
    const article = document.createElement("article");
    const header = document.createElement("div");
    const title = document.createElement("h2");
    const edit = document.createElement("button");
    const body = document.createElement("div");

    article.className = "review-section";
    header.className = "review-section__header";
    body.className = "self-assessment-review";

    title.textContent = `${sectionIndex + 1}. ${section.title}`;

    edit.type = "button";
    edit.className = "text-button";
    edit.textContent = "Change choices";
    edit.addEventListener("click", () => {
      renderSection(sectionIndex);
      showScreen("questionnaire-screen");
    });

    header.append(title, edit);

    section.criteria.forEach((criterion) => {
      const criterionBlock = document.createElement("section");
      const heading = document.createElement("h3");
      heading.textContent = criterion.title;
      criterionBlock.className = "review-criterion";

      criterion.questions.forEach((question) => {
        const row = document.createElement("div");
        const term = document.createElement("strong");
        const value = document.createElement("p");
        const answerIndex = answers[question.id];

        row.className = "review-judgement";
        term.textContent = question.dimension;
        value.textContent =
          Number.isInteger(answerIndex)
            ? question.options[answerIndex]
            : "Not answered";

        row.append(term, value);
        criterionBlock.appendChild(row);
      });

      const basis = document.createElement("p");
      const selected = evidenceBasis[criterion.title] || [];
      basis.className = "review-evidence-basis";
      basis.textContent =
        selected.length
          ? `Basis: ${selected.join(", ")}`
          : "Basis: none selected";

      criterionBlock.appendChild(basis);
      body.appendChild(criterionBlock);
    });

    const example = document.createElement("div");
    const exampleTitle = document.createElement("h3");
    const exampleText = document.createElement("p");

    example.className = "review-section-example";
    exampleTitle.textContent = "Section example";
    exampleText.textContent =
      String(sectionExamples[section.title] || "").trim() ||
      "No example added.";

    example.append(exampleTitle, exampleText);
    body.appendChild(example);

    article.append(header, body);
    reviewContainer.appendChild(article);
  });
}

function calculateScores() {
  return criteria.map((criterion) => {
    const values = criterion.questions.map((question) => {
      const answerIndex = answers[question.id];
      return Number.isInteger(answerIndex) ? answerIndex + 1 : 0;
    });

    return values.reduce((sum, value) => sum + value, 0) / values.length;
  });
}

function getProfileBand(score) {
  if (score < 1.75) return "Emerging or dependent";
  if (score < 2.5) return "Developing";
  if (score < 3.25) return "Established";
  return "Embedded and resilient";
}

function renderResultText(scores) {
  const ranked = scores
    .map((score, index) => ({
      score,
      title: criteria[index].title
    }))
    .sort((a, b) => b.score - a.score);

  const strongest = ranked.slice(0, 2);
  const developing = [...ranked].reverse().slice(0, 2);

  strengthsSummary.innerHTML = `
    <h3>Relative strengths</h3>
    <p>
      Your most developed self-assessments were
      <strong>${escapeHtml(strongest[0].title)}</strong>
      and
      <strong>${escapeHtml(strongest[1].title)}</strong>.
    </p>
  `;

  developmentSummary.innerHTML = `
    <h3>Areas to examine</h3>
    <p>
      Your less developed self-assessments were
      <strong>${escapeHtml(developing[0].title)}</strong>
      and
      <strong>${escapeHtml(developing[1].title)}</strong>.
      The final reflection should explain whether this reflects context,
      inconsistency or a genuine priority for change.
    </p>
  `;

  scoresList.innerHTML = "";

  scores.forEach((score, index) => {
    scoresList.appendChild(createScoreRow(score, index));
  });
}

function createScoreRow(score, index) {
  const row = document.createElement("div");
  const label = document.createElement("div");
  const value = document.createElement("div");
  const track = document.createElement("div");
  const fill = document.createElement("div");

  row.className = "score-row";
  label.className = "score-label";
  value.className = "score-value";
  track.className = "score-track";
  fill.className = "score-fill";

  label.textContent = criteria[index].title;
  value.textContent = getProfileBand(score);
  fill.style.width = `${(score / 4) * 100}%`;

  track.appendChild(fill);
  row.append(label, value, track);
  return row;
}

function renderMiniScores(container, scores) {
  container.innerHTML = "";

  scores.forEach((score, index) => {
    const row = document.createElement("div");
    const label = document.createElement("div");
    const value = document.createElement("div");
    const track = document.createElement("div");
    const fill = document.createElement("div");

    row.className = "mini-score";
    label.className = "mini-score__label";
    value.className = "mini-score__value";
    track.className = "mini-score__track";
    fill.className = "mini-score__fill";

    label.textContent = criteria[index].title;
    value.textContent = getProfileBand(score);
    fill.style.width = `${(score / 4) * 100}%`;

    track.appendChild(fill);
    row.append(label, value, track);
    container.appendChild(row);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function wrapCanvasText(context, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const test = line ? `${line} ${word}` : word;

    if (context.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });

  if (line) lines.push(line);
  return lines;
}

function drawRadarChart(canvas, scores, compact = false) {
  const container = canvas.parentElement;
  const rect = container.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;

  const cssWidth = Math.max(compact ? 240 : 300, Math.round(rect.width));
  const cssHeight = Math.max(compact ? 260 : 330, Math.round(rect.height));

  canvas.width = cssWidth * ratio;
  canvas.height = cssHeight * ratio;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, cssWidth, cssHeight);

  const centerX = cssWidth / 2;
  const centerY = cssHeight / 2;
  const labelSpace = compact ? 72 : cssWidth < 520 ? 86 : 115;
  const radius = Math.min(cssWidth, cssHeight) / 2 - labelSpace;
  const levels = 4;
  const axisCount = criteria.length;
  const startAngle = -Math.PI / 2;

  const styles = getComputedStyle(document.documentElement);
  const gridColor = styles.getPropertyValue("--border").trim();
  const textColor = styles.getPropertyValue("--text").trim();
  const mutedColor = styles.getPropertyValue("--text-muted").trim();
  const primaryColor = styles.getPropertyValue("--primary").trim();

  for (let level = 1; level <= levels; level += 1) {
    const r = radius * (level / levels);
    context.beginPath();

    for (let index = 0; index < axisCount; index += 1) {
      const angle = startAngle + (Math.PI * 2 * index) / axisCount;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
    }

    context.closePath();
    context.strokeStyle = gridColor;
    context.stroke();
  }

  criteria.forEach((criterion, index) => {
    const angle = startAngle + (Math.PI * 2 * index) / axisCount;
    const axisX = centerX + Math.cos(angle) * radius;
    const axisY = centerY + Math.sin(angle) * radius;

    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(axisX, axisY);
    context.strokeStyle = gridColor;
    context.stroke();

    const labelRadius = radius + (compact ? 30 : cssWidth < 520 ? 36 : 52);
    const labelX = centerX + Math.cos(angle) * labelRadius;
    const labelY = centerY + Math.sin(angle) * labelRadius;

    context.fillStyle = textColor;
    context.font = compact
      ? "600 8px system-ui, sans-serif"
      : cssWidth < 520
        ? "600 10px system-ui, sans-serif"
        : "600 12px system-ui, sans-serif";

    const lines = wrapCanvasText(
      context,
      criterion.shortLabel,
      compact ? 65 : cssWidth < 520 ? 82 : 112
    );

    const lineHeight = compact ? 10 : cssWidth < 520 ? 12 : 15;
    const totalHeight = (lines.length - 1) * lineHeight;

    context.textAlign =
      Math.cos(angle) > 0.25
        ? "left"
        : Math.cos(angle) < -0.25
          ? "right"
          : "center";

    context.textBaseline = "middle";

    lines.forEach((line, lineIndex) => {
      context.fillText(
        line,
        labelX,
        labelY - totalHeight / 2 + lineIndex * lineHeight
      );
    });
  });

  context.beginPath();

  scores.forEach((score, index) => {
    const angle = startAngle + (Math.PI * 2 * index) / axisCount;
    const pointRadius = radius * (score / 4);
    const x = centerX + Math.cos(angle) * pointRadius;
    const y = centerY + Math.sin(angle) * pointRadius;
    index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
  });

  context.closePath();
  context.fillStyle = hexToRgba(primaryColor, 0.2);
  context.strokeStyle = primaryColor;
  context.lineWidth = compact ? 2 : 3;
  context.fill();
  context.stroke();

  scores.forEach((score, index) => {
    const angle = startAngle + (Math.PI * 2 * index) / axisCount;
    const pointRadius = radius * (score / 4);
    const x = centerX + Math.cos(angle) * pointRadius;
    const y = centerY + Math.sin(angle) * pointRadius;

    context.beginPath();
    context.arc(x, y, compact ? 3 : 5, 0, Math.PI * 2);
    context.fillStyle = primaryColor;
    context.fill();
  });

  if (!compact) {
    context.fillStyle = mutedColor;
    context.font = "500 10px system-ui, sans-serif";
    context.textAlign = "center";
    context.fillText(
      "School self-assessment — not an award level",
      centerX,
      cssHeight - 8
    );
  }
}

function hexToRgba(color, alpha) {
  const hex = color.trim().replace("#", "");
  const expanded =
    hex.length === 3
      ? hex.split("").map((character) => character + character).join("")
      : hex;

  const value = Number.parseInt(expanded, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function showResults() {
  chartScores = calculateScores();
  renderResultText(chartScores);
  showScreen("results-screen");

  window.setTimeout(() => {
    drawRadarChart(radarCanvas, chartScores);
  }, 100);
}

function openNarrative() {
  chartScores = calculateScores();
  narrativeResponse.value = finalReflection;
  narrativeCharacterCount.textContent =
    `${finalReflection.length} / 1,800 characters`;

  renderMiniScores(narrativeScoresList, chartScores);
  showScreen("narrative-screen");

  window.setTimeout(() => {
    drawRadarChart(narrativeRadarCanvas, chartScores, true);
  }, 100);
}

function renderAssessorReview() {
  assessorReviewList.innerHTML = "";

  criteria.forEach((criterion) => {
    const row = document.createElement("article");
    const title = document.createElement("h3");
    const status = document.createElement("span");
    const rationale = document.createElement("p");

    row.className = "assessor-review-row";
    title.textContent = criterion.title;
    status.className = "assessor-status-placeholder";
    status.textContent = "Assessor status";
    rationale.textContent =
      "In a live service, the assessor would record their judgement and rationale here.";

    row.append(title, status, rationale);
    assessorReviewList.appendChild(row);
  });
}

function showFinalReview() {
  chartScores = calculateScores();

  finalReflectionText.textContent =
    finalReflection.trim() || "No final reflection added.";

  finalReflectionText.classList.toggle(
    "blank-response",
    !finalReflection.trim()
  );

  renderMiniScores(finalScoresList, chartScores);
  renderAssessorReview();
  showScreen("final-review-screen");

  window.setTimeout(() => {
    drawRadarChart(finalRadarCanvas, chartScores, true);
  }, 100);
}

startButton.addEventListener("click", () => {
  clearProgress();
  renderSection(0);
  showScreen("questionnaire-screen");
});

resumeButton.addEventListener("click", () => {
  renderSection(currentSectionIndex);
  showScreen("questionnaire-screen");
});

sectionExample.addEventListener("input", () => {
  sectionExamples[sections[currentSectionIndex].title] =
    sectionExample.value;

  updateSectionExampleCount();
  saveProgress();
});

questionsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateCurrentSection()) return;

  sectionExamples[sections[currentSectionIndex].title] =
    sectionExample.value;

  saveProgress();

  if (currentSectionIndex < sections.length - 1) {
    renderSection(currentSectionIndex + 1);
    showScreen("questionnaire-screen");
  } else {
    showScreen("completion-screen");
  }
});

backButton.addEventListener("click", () => {
  if (currentSectionIndex <= 0) return;

  sectionExamples[sections[currentSectionIndex].title] =
    sectionExample.value;

  renderSection(currentSectionIndex - 1);
  showScreen("questionnaire-screen");
});

saveExitButton.addEventListener("click", () => {
  sectionExamples[sections[currentSectionIndex].title] =
    sectionExample.value;

  saveProgress();
  showScreen("intro-screen");
});

reviewButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

resultsButton.addEventListener("click", showResults);
reviewResultsButton.addEventListener("click", showResults);
reviewResultsButtonBottom.addEventListener("click", showResults);

reviewBackButton.addEventListener("click", () => {
  showScreen("completion-screen");
});

editFromResultsButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

startNarrativeButton.addEventListener("click", openNarrative);

narrativeResponse.addEventListener("input", () => {
  finalReflection = narrativeResponse.value;
  narrativeCharacterCount.textContent =
    `${finalReflection.length} / 1,800 characters`;
  saveProgress();
});

narrativeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  finalReflection = narrativeResponse.value;
  saveProgress();
  showFinalReview();
});

returnToResultsButton.addEventListener("click", showResults);
returnToResultsButtonBottom.addEventListener("click", showResults);
narrativeSaveExitButton.addEventListener("click", showResults);

editNarrativeButton.addEventListener("click", openNarrative);
editReflectionInline.addEventListener("click", openNarrative);

editQuestionnaireButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

restartButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Clear all self-assessment responses and start again?"
  );

  if (!confirmed) return;

  clearProgress();
  showScreen("intro-screen");
});

window.addEventListener("resize", () => {
  if (!chartScores.length) return;

  window.requestAnimationFrame(() => {
    if (document.getElementById("results-screen").classList.contains("screen--active")) {
      drawRadarChart(radarCanvas, chartScores);
    }

    if (document.getElementById("narrative-screen").classList.contains("screen--active")) {
      drawRadarChart(narrativeRadarCanvas, chartScores, true);
    }

    if (document.getElementById("final-review-screen").classList.contains("screen--active")) {
      drawRadarChart(finalRadarCanvas, chartScores, true);
    }
  });
});

buildSectionNavigation();
resumeButton.hidden = !loadProgress();

screens.forEach((screen) => {
  screen.setAttribute(
    "aria-hidden",
    String(!screen.classList.contains("screen--active"))
  );
});
