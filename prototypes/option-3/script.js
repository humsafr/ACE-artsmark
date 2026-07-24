"use strict";

/*
  ============================================================
  CONTENT EDITING AREA: QUESTIONNAIRE
  ============================================================

  Change criterion names, subtitles, questions and answer options
  in the `sections` array below.

  Each answer option is scored from 1 to 4 internally to create
  the descriptive snapshot. The score is not shown as an award
  level and is not an assessment result.
*/

const sections = [
  {
    title: "Values and Ethos",
    subtitle: "Demonstrate commitment to arts and culture",
    shortLabel: "Values and Ethos",
    questions: [
      {
        id: "values-visibility",
        text:
          "How visible are arts, culture and creativity in the identity and values of your setting?",
        options: [
          "They are visible mainly through particular subjects, events or individual staff interests.",
          "They are recognised as valuable and appear in aspects of school life, communication or planning.",
          "They are clearly connected to the setting’s values and influence approaches to learning, wellbeing, personal development or community.",
          "They are central to the setting’s identity and consistently shape decisions, priorities and how the setting presents itself to others."
        ]
      },
      {
        id: "values-understanding",
        text:
          "How widely is the value of arts and culture understood?",
        options: [
          "Understanding is strongest among arts specialists or particular enthusiasts.",
          "Staff and leaders are broadly supportive, although understanding varies across the setting.",
          "There is a shared understanding among staff and leaders of why arts and culture matter for children and young people.",
          "Pupils, staff, leaders, governors and the wider community can articulate the role arts and culture play in the setting."
        ]
      },
      {
        id: "values-outcomes",
        text:
          "How are arts and culture connected to wider outcomes?",
        options: [
          "Connections to wider learning or wellbeing are mostly informal or assumed.",
          "Arts activities are sometimes used to support wider learning, confidence, engagement or wellbeing.",
          "Arts and culture are intentionally used to contribute to learning, wellbeing, personal development and community.",
          "The setting can show how arts and culture make a sustained contribution to wider outcomes and advocates for their value beyond the setting."
        ]
      }
    ]
  },
  {
    title: "Equality, Diversity and Inclusion",
    subtitle: "Demonstrate equity, relevance and diversity for all",
    shortLabel: "Equality, Diversity and Inclusion",
    questions: [
      {
        id: "edi-participation",
        text:
          "How well do you understand who participates in arts and cultural opportunities?",
        options: [
          "Opportunities are offered, but participation is not routinely reviewed by pupil group or need.",
          "Staff have some awareness of who participates and where access may be uneven.",
          "Participation and barriers are actively reviewed, using data, pupil voice or staff knowledge.",
          "The setting systematically identifies and addresses inequities in access, participation and progression."
        ]
      },
      {
        id: "edi-representation",
        text:
          "How representative is your arts and cultural provision?",
        options: [
          "Representation depends mainly on individual topics, events or resources.",
          "Different cultures, identities and perspectives are included, although not consistently across the year or curriculum.",
          "Provision is intentionally planned to reflect the diversity of the setting and wider society.",
          "Diverse voices and perspectives are embedded across curriculum, partnerships and cultural experiences, and pupils help shape this work."
        ]
      },
      {
        id: "edi-belonging",
        text:
          "How does arts and culture contribute to belonging and inclusion?",
        options: [
          "Positive experiences occur, but this is not yet an explicit aim of provision.",
          "Arts activity is sometimes used to support inclusion, confidence or wellbeing.",
          "Arts and culture are deliberately used to foster belonging, representation, good relations and participation.",
          "The setting can demonstrate positive outcomes from strategies that use arts and culture to address exclusion, discrimination or barriers to belonging."
        ]
      }
    ]
  },
  {
    title: "Leadership",
    subtitle: "Demonstrate ambitious and dynamic leadership",
    shortLabel: "Leadership",
    questions: [
      {
        id: "leadership-responsibility",
        text:
          "How is responsibility for arts and culture held?",
        options: [
          "It depends mainly on one committed individual.",
          "A small group shares responsibility, with some senior leadership support.",
          "Responsibility is distributed across staff and leaders, with clear roles and accountability.",
          "Leadership is widely shared, strategically coordinated and resilient to staffing changes."
        ]
      },
      {
        id: "leadership-planning",
        text:
          "How are arts and culture reflected in strategic planning?",
        options: [
          "They sit mainly in subject plans or activity plans.",
          "They appear in some wider priorities or development planning.",
          "They are clearly linked to the setting’s improvement priorities, with actions, resources and review points.",
          "Leaders and governors use evidence about arts and culture to shape, evaluate and revise whole-setting strategy."
        ]
      },
      {
        id: "leadership-monitoring",
        text:
          "How actively do leaders monitor quality and impact?",
        options: [
          "Leaders are aware of activity but review is mainly informal.",
          "Progress is discussed periodically, usually through the Arts Lead or subject leadership.",
          "Leaders and governors review provision, participation, quality and impact.",
          "Review is systematic, informs decision-making and includes sharing learning or advocating beyond the setting."
        ]
      }
    ]
  },
  {
    title: "Children and Young People",
    subtitle: "Engage and empower children and young people",
    shortLabel: "Children and Young People",
    questions: [
      {
        id: "cyp-shaping",
        text:
          "What role do children and young people play in shaping provision?",
        options: [
          "They mainly participate in activities designed by adults.",
          "They are consulted or offered choices about some aspects of provision.",
          "They influence planning and delivery and have meaningful opportunities to shape what happens.",
          "They take ownership, lead activity and influence arts and cultural practice within or beyond the setting."
        ]
      },
      {
        id: "cyp-engagement",
        text:
          "What is the quality of pupils’ engagement?",
        options: [
          "Engagement is strongest among particular groups, subjects or activities.",
          "Many pupils participate and enjoy arts and cultural opportunities.",
          "There is high and broad engagement, with pupils showing confidence, curiosity and commitment.",
          "Pupils actively seek, create and lead opportunities and can explain the value of arts and culture in their lives."
        ]
      },
      {
        id: "cyp-development",
        text:
          "How do arts and culture support pupils’ development?",
        options: [
          "Benefits are mainly described through enjoyment or participation.",
          "Staff can identify examples of increased confidence, engagement, expression or wellbeing.",
          "The setting can show how arts and culture contribute to personal development, identity, agency, wellbeing or progression.",
          "Pupils use arts and culture to explore issues, influence their community, support others or advocate for change."
        ]
      }
    ]
  },
  {
    title: "Curriculum Design and Delivery",
    subtitle: "Develop creative children and young people",
    shortLabel: "Curriculum Design and Delivery",
    questions: [
      {
        id: "curriculum-progression",
        text:
          "How coherent is progression in arts learning?",
        options: [
          "Provision varies across classes, subjects or phases and progression is not yet clear.",
          "Schemes of work or curriculum plans are developing greater consistency.",
          "Curriculum plans show clear progression in knowledge, skills and understanding across phases or year groups.",
          "Progression is well embedded, reviewed and adapted, and produces consistently strong and stretching outcomes."
        ]
      },
      {
        id: "curriculum-quality",
        text:
          "How well understood is quality in arts teaching and learning?",
        options: [
          "Expectations depend largely on individual teachers or specialists.",
          "Staff are beginning to develop a shared understanding of quality.",
          "There is a clear and shared understanding of quality, reflected in planning, teaching and review.",
          "Staff confidently articulate, evaluate and improve arts pedagogy, and share strong practice with others."
        ]
      },
      {
        id: "curriculum-creativity",
        text:
          "How does the curriculum develop creativity?",
        options: [
          "Pupils mainly complete planned activities or outcomes.",
          "Pupils have some opportunities to explore, experiment and make choices.",
          "Pupils regularly create, perform, take risks, solve problems and develop their own ideas.",
          "The curriculum deliberately develops creativity, curiosity, craftsmanship, confidence and independent artistic practice."
        ]
      }
    ]
  },
  {
    title: "Range of Offer",
    subtitle: "Develop cultural entitlement for all children and young people",
    shortLabel: "Range of Offer",
    questions: [
      {
        id: "range-breadth",
        text:
          "How broad is the offer?",
        options: [
          "Opportunities are concentrated in a small number of artforms, subjects or events.",
          "A growing range is available through curriculum, clubs, trips, visitors or performances.",
          "Pupils experience a broad range of artforms and cultural opportunities as creators, performers and audiences.",
          "The offer is rich, stretching and varied, including less familiar artforms, digital creativity and opportunities beyond the setting."
        ]
      },
      {
        id: "range-access",
        text:
          "How equitable is access to the offer?",
        options: [
          "Access depends partly on year group, timetable, cost, confidence or existing interest.",
          "The setting is working to broaden access, but some groups participate less than others.",
          "Provision is planned to be inclusive, and barriers to participation are identified and addressed.",
          "All groups have meaningful access to a broad cultural entitlement, with targeted approaches where needed."
        ]
      },
      {
        id: "range-connection",
        text:
          "How connected are curriculum and wider opportunities?",
        options: [
          "Enrichment and curriculum activity mostly operate separately.",
          "Some wider opportunities reinforce curriculum learning.",
          "Curriculum, enrichment, visits, performances and partnerships form a coherent offer.",
          "Pupils experience a connected cultural pathway that supports progression, choice and sustained engagement."
        ]
      }
    ]
  },
  {
    title: "Continuing Professional Development",
    subtitle: "Embed quality staff development",
    shortLabel: "Continuing Professional Development",
    questions: [
      {
        id: "cpd-planning",
        text:
          "How planned is staff development in arts and culture?",
        options: [
          "Development happens mainly through individual interest or immediate need.",
          "Some arts-related CPD or sharing of practice takes place.",
          "Staff development is planned around identified needs and wider arts ambitions.",
          "There is a sustained strategic approach to developing staff confidence, knowledge and leadership."
        ]
      },
      {
        id: "cpd-impact",
        text:
          "What difference does CPD make to practice?",
        options: [
          "The impact of development is not routinely followed up.",
          "Staff report increased confidence or use new ideas in some areas.",
          "CPD leads to visible changes in curriculum, teaching or pupil experience.",
          "Staff development produces sustained improvement, is shared across the setting and informs future priorities."
        ]
      },
      {
        id: "cpd-sharing",
        text:
          "How widely is expertise shared?",
        options: [
          "Expertise is concentrated among particular staff.",
          "Staff share ideas informally or within teams.",
          "Good practice is shared across the setting and developed through collaboration.",
          "Staff lead development within and beyond the setting and contribute to wider professional learning."
        ]
      }
    ]
  },
  {
    title: "Cultural Collaborations",
    subtitle: "Build connections",
    shortLabel: "Cultural Collaborations",
    questions: [
      {
        id: "collaboration-relationships",
        text:
          "What is the nature of your external relationships?",
        options: [
          "Contact with practitioners or organisations is mainly occasional or activity-based.",
          "The setting has a number of developing relationships with practitioners, organisations, networks or other settings.",
          "Sustained collaborations are chosen because they improve teaching, learning or cultural access.",
          "Partnerships are strategic, reciprocal and form part of the setting’s long-term approach."
        ]
      },
      {
        id: "collaboration-practice",
        text:
          "How do collaborations affect practice?",
        options: [
          "Partners mainly provide additional activities or experiences.",
          "Collaborations broaden the offer and introduce pupils or staff to new practice.",
          "Partners contribute to planning, staff development, curriculum quality or sustained pupil progression.",
          "Collaborations build lasting capability, strengthen the local cultural ecology and benefit other settings or communities."
        ]
      },
      {
        id: "collaboration-community",
        text:
          "How connected is the setting to its wider community?",
        options: [
          "Engagement with families, local culture or other settings is occasional.",
          "Arts activity creates some opportunities for community participation or connection.",
          "Arts and culture strengthen relationships with families, local organisations and peer settings.",
          "The setting plays an active role in cultural networks, builds deep community relationships and creates opportunities with and for others."
        ]
      }
    ]
  }
];

/*
  ============================================================
  CONTENT EDITING AREA: NARRATIVE FOLLOW-UP
  ============================================================

  Edit these five objects to change the question wording,
  supporting guidance or character limits.
*/

const narrativeQuestions = [
  {
    id: "snapshot-context",
    title:
      "What does this snapshot get right, and where does it need more context?",
    guidance: [
      "Where does the profile feel accurate?",
      "Where does it oversimplify your setting?",
      "Are there important differences across phases, subjects, year groups or pupil groups?",
      "Does anything look stronger or less developed for reasons the snapshot cannot show?"
    ],
    maxCharacters: 2400
  },
  {
    id: "strength-and-impact",
    title:
      "Which examples best show the strength and impact of your provision?",
    guidance: [
      "Choose two or three examples that bring the snapshot to life.",
      "For each example, explain what you were trying to achieve, what you did, what changed and how you know.",
      "Include the difference made to children and young people, staff, leadership or the wider community where relevant."
    ],
    maxCharacters: 3000
  },
  {
    id: "uneven-or-fragile",
    title:
      "What is less established, uneven or fragile?",
    guidance: [
      "What is inconsistent across the setting or still developing?",
      "What depends on particular people, funding or circumstances?",
      "What is difficult to sustain?",
      "Is anything working well for some groups but not others?",
      "This is not about presenting failure. It helps the assessor understand the reality of your current provision."
    ],
    maxCharacters: 2400
  },
  {
    id: "challenges-and-next",
    title:
      "What are the main challenges, which feel most addressable, and what are you strengthening next?",
    guidance: [
      "What is getting in the way?",
      "Which challenges are structural or outside your control?",
      "Which could realistically be addressed?",
      "What do you want to strengthen next, and why?",
      "What support, leadership, time, resources or partnerships would help?"
    ],
    maxCharacters: 2600
  },
  {
    id: "not-captured",
    title:
      "Is there anything important the snapshot has not captured?",
    guidance: [
      "Add any important contextual information.",
      "Include pupil or community voice where helpful.",
      "Describe unusual or distinctive practice.",
      "Explain anything that cuts across several criteria.",
      "Add anything else an assessor should understand before reviewing your application."
    ],
    maxCharacters: 2000
  }
];

/*
  ============================================================
  PROTOTYPE BEHAVIOUR
  ============================================================
*/

const STORAGE_KEY = "artsmark-option-3-progress";

const answers = {};
const narrativeAnswers = {};

const totalQuestions = sections.reduce(
  (total, section) => total + section.questions.length,
  0
);

let currentSectionIndex = 0;
let currentNarrativeIndex = 0;
let chartScores = [];
let savedStatusTimeout = null;

const screens = [...document.querySelectorAll(".screen")];

const startButton = document.getElementById("start-button");
const resumeButton = document.getElementById("resume-button");

const questionsForm = document.getElementById("questions-form");
const questionsContainer = document.getElementById("questions-container");
const sectionTitle = document.getElementById("section-title");
const sectionSubtitle = document.getElementById("section-subtitle");
const sectionNumber = document.getElementById("section-number");
const sectionList = document.getElementById("section-list");
const progressText = document.getElementById("progress-text");
const answeredText = document.getElementById("answered-text");
const progressBar = document.getElementById("progress-bar");
const progressTrack = document.querySelector(
  "#questionnaire-screen .progress-track"
);
const validationMessage = document.getElementById("validation-message");
const backButton = document.getElementById("back-button");
const saveExitButton = document.getElementById("save-exit-button");
const nextButton = document.getElementById("next-button");

const reviewButton = document.getElementById("review-button");
const resultsButton = document.getElementById("results-button");
const reviewContainer = document.getElementById("review-container");
const reviewResultsButton = document.getElementById(
  "review-results-button"
);
const reviewResultsButtonBottom = document.getElementById(
  "review-results-button-bottom"
);
const reviewBackButton = document.getElementById("review-back-button");

const editFromResultsButton = document.getElementById(
  "edit-from-results-button"
);
const radarCanvas = document.getElementById("radar-chart");
const strengthsSummary = document.getElementById("strengths-summary");
const developmentSummary = document.getElementById(
  "development-summary"
);
const scoresList = document.getElementById("scores-list");
const startNarrativeButton = document.getElementById(
  "start-narrative-button"
);

const narrativeForm = document.getElementById("narrative-form");
const narrativeQuestionCount = document.getElementById(
  "narrative-question-count"
);
const narrativeQuestionTitle = document.getElementById(
  "narrative-question-title"
);
const narrativeGuidanceList = document.getElementById(
  "narrative-guidance-list"
);
const narrativeResponse = document.getElementById("narrative-response");
const narrativeCharacterCount = document.getElementById(
  "narrative-character-count"
);
const narrativeProgressText = document.getElementById(
  "narrative-progress-text"
);
const narrativeProgressBar = document.getElementById(
  "narrative-progress-bar"
);
const narrativeProgressTrack = document.getElementById(
  "narrative-progress-track"
);
const narrativeSavedStatus = document.getElementById(
  "narrative-saved-status"
);
const narrativeBackButton = document.getElementById(
  "narrative-back-button"
);
const narrativeSaveExitButton = document.getElementById(
  "narrative-save-exit-button"
);
const narrativeNextButton = document.getElementById(
  "narrative-next-button"
);
const returnToResultsButton = document.getElementById(
  "return-to-results-button"
);

const narrativeRadarCanvas = document.getElementById(
  "narrative-radar-chart"
);
const mobileRadarCanvas = document.getElementById(
  "mobile-radar-chart"
);
const finalRadarCanvas = document.getElementById("final-radar-chart");

const narrativeScoresList = document.getElementById(
  "narrative-scores-list"
);
const mobileScoresList = document.getElementById(
  "mobile-scores-list"
);
const finalScoresList = document.getElementById(
  "final-scores-list"
);

const narrativeReviewContainer = document.getElementById(
  "narrative-review-container"
);
const editNarrativeButton = document.getElementById(
  "edit-narrative-button"
);
const editQuestionnaireButton = document.getElementById(
  "edit-questionnaire-button"
);
const restartButton = document.getElementById("restart-button");

const liveRegion = document.getElementById("live-region");

function showScreen(screenId, options = {}) {
  const {
    focusSelector = "h1"
  } = options;

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

function saveProgress() {
  const progress = {
    answers,
    narrativeAnswers,
    currentSectionIndex,
    currentNarrativeIndex,
    savedAt: new Date().toISOString()
  };

  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    );

    updateResumeButton();
  } catch (error) {
    console.warn(
      "Unable to save progress in this browser session.",
      error
    );
  }
}

function loadProgress() {
  try {
    const savedProgress = sessionStorage.getItem(STORAGE_KEY);

    if (!savedProgress) {
      return false;
    }

    const parsed = JSON.parse(savedProgress);

    if (parsed.answers && typeof parsed.answers === "object") {
      Object.assign(answers, parsed.answers);
    }

    if (
      parsed.narrativeAnswers &&
      typeof parsed.narrativeAnswers === "object"
    ) {
      Object.assign(
        narrativeAnswers,
        parsed.narrativeAnswers
      );
    }

    if (
      Number.isInteger(parsed.currentSectionIndex) &&
      parsed.currentSectionIndex >= 0 &&
      parsed.currentSectionIndex < sections.length
    ) {
      currentSectionIndex = parsed.currentSectionIndex;
    }

    if (
      Number.isInteger(parsed.currentNarrativeIndex) &&
      parsed.currentNarrativeIndex >= 0 &&
      parsed.currentNarrativeIndex < narrativeQuestions.length
    ) {
      currentNarrativeIndex = parsed.currentNarrativeIndex;
    }

    return hasSavedProgress();
  } catch (error) {
    console.warn("Unable to restore saved progress.", error);
    return false;
  }
}

function hasSavedProgress() {
  return (
    Object.keys(answers).length > 0 ||
    Object.values(narrativeAnswers).some((value) => {
      return Boolean(String(value || "").trim());
    })
  );
}

function updateResumeButton() {
  resumeButton.hidden = !hasSavedProgress();
}

function clearProgress() {
  Object.keys(answers).forEach((key) => {
    delete answers[key];
  });

  Object.keys(narrativeAnswers).forEach((key) => {
    delete narrativeAnswers[key];
  });

  currentSectionIndex = 0;
  currentNarrativeIndex = 0;
  chartScores = [];

  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("Unable to clear saved progress.", error);
  }

  updateResumeButton();
}

function showSavedStatus() {
  narrativeSavedStatus.textContent = "Draft saved";
  narrativeSavedStatus.classList.add("is-visible");

  window.clearTimeout(savedStatusTimeout);

  savedStatusTimeout = window.setTimeout(() => {
    narrativeSavedStatus.classList.remove("is-visible");
  }, 1400);
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

function getAnsweredCount() {
  return Object.keys(answers).length;
}

function isSectionComplete(sectionIndex) {
  return sections[sectionIndex].questions.every(
    (question) => Number.isInteger(answers[question.id])
  );
}

function updateQuestionnaireProgress() {
  const answeredCount = getAnsweredCount();
  const completionPercentage = Math.round(
    (answeredCount / totalQuestions) * 100
  );

  progressText.textContent =
    `Section ${currentSectionIndex + 1} of ${sections.length}`;

  answeredText.textContent =
    `${answeredCount} of ${totalQuestions} questions answered`;

  progressBar.style.width = `${completionPercentage}%`;
  progressTrack.setAttribute(
    "aria-valuenow",
    String(completionPercentage)
  );

  [...sectionList.children].forEach((item, index) => {
    item.classList.toggle(
      "is-current",
      index === currentSectionIndex
    );

    item.classList.toggle(
      "is-complete",
      isSectionComplete(index)
    );
  });
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

    updateQuestionnaireProgress();
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

function renderSection(sectionIndex) {
  currentSectionIndex = sectionIndex;

  const section = sections[currentSectionIndex];

  sectionNumber.textContent =
    `Criterion ${currentSectionIndex + 1}`;

  sectionTitle.textContent = section.title;
  sectionSubtitle.textContent = section.subtitle;

  questionsContainer.innerHTML = "";
  validationMessage.hidden = true;

  section.questions.forEach((question, questionIndex) => {
    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    const questionCount = document.createElement("span");
    const optionsList = document.createElement("div");

    fieldset.className = "question-card";

    questionCount.className = "question-count";
    questionCount.textContent =
      `Question ${questionIndex + 1} of ${section.questions.length}`;

    legend.append(
      questionCount,
      document.createTextNode(question.text)
    );

    optionsList.className = "options-list";

    question.options.forEach((optionText, optionIndex) => {
      optionsList.appendChild(
        createOption(question, optionText, optionIndex)
      );
    });

    fieldset.append(legend, optionsList);
    questionsContainer.appendChild(fieldset);
  });

  backButton.disabled = currentSectionIndex === 0;

  nextButton.textContent =
    currentSectionIndex === sections.length - 1
      ? "Finish questionnaire"
      : "Save and continue";

  updateQuestionnaireProgress();
  saveProgress();

  liveRegion.textContent =
    `${section.title}. Section ${currentSectionIndex + 1} ` +
    `of ${sections.length}.`;
}

function validateCurrentSection() {
  const unansweredQuestion =
    sections[currentSectionIndex].questions.find(
      (question) => !Number.isInteger(answers[question.id])
    );

  if (!unansweredQuestion) {
    validationMessage.hidden = true;
    return true;
  }

  validationMessage.hidden = false;

  const firstUnansweredInput = questionsContainer.querySelector(
    `input[name="${unansweredQuestion.id}"]`
  );

  if (firstUnansweredInput) {
    firstUnansweredInput.focus();
  }

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

    title.textContent =
      `${sectionIndex + 1}. ${section.title}`;

    editButton.type = "button";
    editButton.className = "text-button";
    editButton.textContent = "Change answers";

    editButton.addEventListener("click", () => {
      renderSection(sectionIndex);
      showScreen("questionnaire-screen");
    });

    header.append(title, editButton);

    section.questions.forEach((question) => {
      const answerIndex = answers[question.id];
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      const answerRow = document.createElement("div");

      answerRow.className = "review-answer";

      term.textContent = question.text;

      description.textContent = Number.isInteger(answerIndex)
        ? question.options[answerIndex]
        : "Not answered";

      answerRow.append(term, description);
      answerList.appendChild(answerRow);
    });

    article.append(header, answerList);
    reviewContainer.appendChild(article);
  });
}

function calculateScores() {
  return sections.map((section) => {
    const total = section.questions.reduce((sum, question) => {
      const answerIndex = answers[question.id];

      return sum + (
        Number.isInteger(answerIndex)
          ? answerIndex + 1
          : 0
      );
    }, 0);

    return total / section.questions.length;
  });
}

function getProfileBand(score) {
  if (score < 1.75) {
    return "More dependent or emerging";
  }

  if (score < 2.5) {
    return "Developing";
  }

  if (score < 3.25) {
    return "More established";
  }

  return "Strongly embedded";
}

function renderResultText(scores) {
  const ranked = scores
    .map((score, index) => ({
      score,
      title: sections[index].title
    }))
    .sort((a, b) => b.score - a.score);

  const strongest = ranked.slice(0, 2);
  const developing = [...ranked].reverse().slice(0, 2);

  strengthsSummary.innerHTML = `
    <h3>Relative strengths</h3>
    <p>
      Your most developed responses were in
      <strong>${escapeHtml(strongest[0].title)}</strong>
      and
      <strong>${escapeHtml(strongest[1].title)}</strong>.
      The narrative stage will help explain what sits behind these answers.
    </p>
  `;

  developmentSummary.innerHTML = `
    <h3>Areas to explore</h3>
    <p>
      Your less developed responses were in
      <strong>${escapeHtml(developing[0].title)}</strong>
      and
      <strong>${escapeHtml(developing[1].title)}</strong>.
      This may reflect unevenness, context or difficulty sustaining the work.
    </p>
  `;

  scoresList.innerHTML = "";

  scores.forEach((score, index) => {
    scoresList.appendChild(
      createScoreRow(score, index)
    );
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

  label.textContent = sections[index].title;
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

    label.textContent = sections[index].title;
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
  let currentLine = "";

  words.forEach((word) => {
    const testLine = currentLine
      ? `${currentLine} ${word}`
      : word;

    if (
      context.measureText(testLine).width > maxWidth &&
      currentLine
    ) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
}

function drawRadarChart(canvas, scores, compact = false) {
  const container = canvas.parentElement;
  const rect = container.getBoundingClientRect();
  const devicePixelRatio = window.devicePixelRatio || 1;

  const cssWidth = Math.max(
    compact ? 240 : 300,
    Math.round(rect.width)
  );

  const cssHeight = Math.max(
    compact ? 260 : 330,
    Math.round(rect.height)
  );

  canvas.width = cssWidth * devicePixelRatio;
  canvas.height = cssHeight * devicePixelRatio;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  const context = canvas.getContext("2d");

  if (!context) {
    return;
  }

  context.setTransform(
    devicePixelRatio,
    0,
    0,
    devicePixelRatio,
    0,
    0
  );

  context.clearRect(0, 0, cssWidth, cssHeight);

  const centerX = cssWidth / 2;
  const centerY = cssHeight / 2;

  const labelSpace = compact
    ? 74
    : cssWidth < 520
      ? 88
      : 120;

  const radius =
    Math.min(cssWidth, cssHeight) / 2 - labelSpace;

  const levels = 4;
  const axisCount = sections.length;
  const startAngle = -Math.PI / 2;

  const styles = getComputedStyle(
    document.documentElement
  );

  const gridColor = styles
    .getPropertyValue("--border")
    .trim();

  const textColor = styles
    .getPropertyValue("--text")
    .trim();

  const mutedColor = styles
    .getPropertyValue("--text-muted")
    .trim();

  const primaryColor = styles
    .getPropertyValue("--primary")
    .trim();

  context.lineJoin = "round";
  context.lineCap = "round";

  for (let level = 1; level <= levels; level += 1) {
    const levelRadius = radius * (level / levels);

    context.beginPath();

    for (let index = 0; index < axisCount; index += 1) {
      const angle =
        startAngle + (Math.PI * 2 * index) / axisCount;

      const x =
        centerX + Math.cos(angle) * levelRadius;

      const y =
        centerY + Math.sin(angle) * levelRadius;

      if (index === 0) {
        context.moveTo(x, y);
      } else {
        context.lineTo(x, y);
      }
    }

    context.closePath();
    context.strokeStyle = gridColor;
    context.lineWidth = 1;
    context.stroke();
  }

  sections.forEach((section, index) => {
    const angle =
      startAngle + (Math.PI * 2 * index) / axisCount;

    const axisX =
      centerX + Math.cos(angle) * radius;

    const axisY =
      centerY + Math.sin(angle) * radius;

    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(axisX, axisY);
    context.strokeStyle = gridColor;
    context.lineWidth = 1;
    context.stroke();

    const labelRadius =
      radius + (
        compact
          ? 31
          : cssWidth < 520
            ? 36
            : 54
      );

    const labelX =
      centerX + Math.cos(angle) * labelRadius;

    const labelY =
      centerY + Math.sin(angle) * labelRadius;

    context.fillStyle = textColor;

    context.font = compact
      ? "600 8px system-ui, sans-serif"
      : cssWidth < 520
        ? "600 10px system-ui, sans-serif"
        : "600 12px system-ui, sans-serif";

    const maxLabelWidth = compact
      ? 65
      : cssWidth < 520
        ? 82
        : 118;

    const lines = wrapCanvasText(
      context,
      section.shortLabel,
      maxLabelWidth
    );

    const lineHeight = compact
      ? 10
      : cssWidth < 520
        ? 12
        : 15;

    const totalHeight =
      (lines.length - 1) * lineHeight;

    if (Math.cos(angle) > 0.25) {
      context.textAlign = "left";
    } else if (Math.cos(angle) < -0.25) {
      context.textAlign = "right";
    } else {
      context.textAlign = "center";
    }

    context.textBaseline = "middle";

    lines.forEach((line, lineIndex) => {
      context.fillText(
        line,
        labelX,
        labelY -
          totalHeight / 2 +
          lineIndex * lineHeight
      );
    });
  });

  context.beginPath();

  scores.forEach((score, index) => {
    const angle =
      startAngle + (Math.PI * 2 * index) / axisCount;

    const pointRadius = radius * (score / 4);

    const x =
      centerX + Math.cos(angle) * pointRadius;

    const y =
      centerY + Math.sin(angle) * pointRadius;

    if (index === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  });

  context.closePath();
  context.fillStyle = hexToRgba(primaryColor, 0.2);
  context.strokeStyle = primaryColor;
  context.lineWidth = compact ? 2 : 3;
  context.fill();
  context.stroke();

  scores.forEach((score, index) => {
    const angle =
      startAngle + (Math.PI * 2 * index) / axisCount;

    const pointRadius = radius * (score / 4);

    const x =
      centerX + Math.cos(angle) * pointRadius;

    const y =
      centerY + Math.sin(angle) * pointRadius;

    context.beginPath();
    context.arc(
      x,
      y,
      compact ? 3 : 5,
      0,
      Math.PI * 2
    );

    context.fillStyle = primaryColor;
    context.fill();
  });

  if (!compact) {
    context.fillStyle = mutedColor;
    context.font = "500 10px system-ui, sans-serif";
    context.textAlign = "center";

    context.fillText(
      "Descriptive profile — not an award level",
      centerX,
      cssHeight - 8
    );
  }
}

function hexToRgba(color, alpha) {
  const normalized = color.trim();

  if (!normalized.startsWith("#")) {
    return `rgba(45, 67, 86, ${alpha})`;
  }

  const hex = normalized.slice(1);

  const expanded =
    hex.length === 3
      ? hex
          .split("")
          .map((character) => character + character)
          .join("")
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

function renderNarrativeReference() {
  chartScores = calculateScores();

  renderMiniScores(
    narrativeScoresList,
    chartScores
  );

  renderMiniScores(
    mobileScoresList,
    chartScores
  );

  window.setTimeout(() => {
    drawRadarChart(
      narrativeRadarCanvas,
      chartScores,
      true
    );

    drawRadarChart(
      mobileRadarCanvas,
      chartScores,
      true
    );
  }, 100);
}

function updateNarrativeCharacterCount(question) {
  const length = narrativeResponse.value.length;

  narrativeCharacterCount.textContent =
    `${length.toLocaleString()} / ` +
    `${question.maxCharacters.toLocaleString()} characters`;
}

function renderNarrativeQuestion(index) {
  currentNarrativeIndex = index;

  const question = narrativeQuestions[index];

  narrativeQuestionCount.textContent =
    `Question ${index + 1} of ${narrativeQuestions.length}`;

  narrativeProgressText.textContent =
    `Question ${index + 1} of ${narrativeQuestions.length}`;

  narrativeQuestionTitle.textContent = question.title;

  narrativeGuidanceList.innerHTML = "";

  question.guidance.forEach((guidanceItem) => {
    const item = document.createElement("li");
    item.textContent = guidanceItem;
    narrativeGuidanceList.appendChild(item);
  });

  narrativeResponse.maxLength = question.maxCharacters;
  narrativeResponse.value =
    narrativeAnswers[question.id] || "";

  updateNarrativeCharacterCount(question);

  const progressPercentage = Math.round(
    ((index + 1) / narrativeQuestions.length) * 100
  );

  narrativeProgressBar.style.width =
    `${progressPercentage}%`;

  narrativeProgressTrack.setAttribute(
    "aria-valuenow",
    String(progressPercentage)
  );

  narrativeBackButton.disabled = index === 0;

  narrativeNextButton.textContent =
    index === narrativeQuestions.length - 1
      ? "Review application"
      : "Save and continue";

  saveProgress();

  liveRegion.textContent =
    `Narrative question ${index + 1} ` +
    `of ${narrativeQuestions.length}.`;
}

function openNarrative(index = 0) {
  renderNarrativeReference();
  renderNarrativeQuestion(index);
  showScreen("narrative-screen");
}

function saveCurrentNarrativeResponse(
  showConfirmation = false
) {
  const question =
    narrativeQuestions[currentNarrativeIndex];

  narrativeAnswers[question.id] =
    narrativeResponse.value;

  saveProgress();

  if (showConfirmation) {
    showSavedStatus();
  }
}

function renderNarrativeReview() {
  narrativeReviewContainer.innerHTML = "";

  narrativeQuestions.forEach((question, index) => {
    const article = document.createElement("article");
    const header = document.createElement("div");
    const title = document.createElement("h2");
    const editButton = document.createElement("button");
    const response = document.createElement("p");

    article.className = "narrative-review-card";
    header.className =
      "narrative-review-card__header";

    title.textContent =
      `${index + 1}. ${question.title}`;

    editButton.type = "button";
    editButton.className = "text-button";
    editButton.textContent = "Change response";

    editButton.addEventListener("click", () => {
      openNarrative(index);
    });

    const savedResponse =
      String(narrativeAnswers[question.id] || "").trim();

    response.textContent =
      savedResponse || "No response added.";

    response.classList.toggle(
      "blank-response",
      !savedResponse
    );

    header.append(title, editButton);
    article.append(header, response);

    narrativeReviewContainer.appendChild(article);
  });
}

function showFinalReview() {
  chartScores = calculateScores();

  renderNarrativeReview();
  renderMiniScores(finalScoresList, chartScores);

  showScreen("final-review-screen");

  window.setTimeout(() => {
    drawRadarChart(
      finalRadarCanvas,
      chartScores,
      true
    );
  }, 100);
}

startButton.addEventListener("click", () => {
  clearProgress();
  renderSection(0);
  showScreen("questionnaire-screen");
});

resumeButton.addEventListener("click", () => {
  const allQuestionnaireAnswersComplete =
    getAnsweredCount() === totalQuestions;

  const hasNarrativeProgress =
    Object.keys(narrativeAnswers).length > 0;

  if (
    allQuestionnaireAnswersComplete &&
    hasNarrativeProgress
  ) {
    openNarrative(currentNarrativeIndex);
    return;
  }

  renderSection(currentSectionIndex);
  showScreen("questionnaire-screen");
});

questionsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateCurrentSection()) {
    return;
  }

  saveProgress();

  if (currentSectionIndex < sections.length - 1) {
    renderSection(currentSectionIndex + 1);
    showScreen("questionnaire-screen");
  } else {
    showScreen("completion-screen");
  }
});

backButton.addEventListener("click", () => {
  if (currentSectionIndex > 0) {
    renderSection(currentSectionIndex - 1);
    showScreen("questionnaire-screen");
  }
});

saveExitButton.addEventListener("click", () => {
  saveProgress();
  showScreen("intro-screen");
});

reviewButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

resultsButton.addEventListener("click", showResults);

reviewResultsButton.addEventListener(
  "click",
  showResults
);

reviewResultsButtonBottom.addEventListener(
  "click",
  showResults
);

reviewBackButton.addEventListener("click", () => {
  showScreen("completion-screen");
});

editFromResultsButton.addEventListener("click", () => {
  renderReview();
  showScreen("review-screen");
});

startNarrativeButton.addEventListener("click", () => {
  openNarrative(currentNarrativeIndex);
});

returnToResultsButton.addEventListener("click", () => {
  saveCurrentNarrativeResponse(false);
  showResults();
});

narrativeResponse.addEventListener("input", () => {
  const question =
    narrativeQuestions[currentNarrativeIndex];

  narrativeAnswers[question.id] =
    narrativeResponse.value;

  updateNarrativeCharacterCount(question);
  saveProgress();
});

narrativeResponse.addEventListener("blur", () => {
  saveCurrentNarrativeResponse(true);
});

narrativeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveCurrentNarrativeResponse(true);

  if (
    currentNarrativeIndex <
    narrativeQuestions.length - 1
  ) {
    renderNarrativeQuestion(
      currentNarrativeIndex + 1
    );

    showScreen("narrative-screen");
  } else {
    showFinalReview();
  }
});

narrativeBackButton.addEventListener("click", () => {
  if (currentNarrativeIndex <= 0) {
    return;
  }

  saveCurrentNarrativeResponse(false);

  renderNarrativeQuestion(
    currentNarrativeIndex - 1
  );

  showScreen("narrative-screen");
});

narrativeSaveExitButton.addEventListener(
  "click",
  () => {
    saveCurrentNarrativeResponse(true);
    showResults();
  }
);

editNarrativeButton.addEventListener("click", () => {
  openNarrative(currentNarrativeIndex);
});

editQuestionnaireButton.addEventListener(
  "click",
  () => {
    renderReview();
    showScreen("review-screen");
  }
);

restartButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Clear all questionnaire and narrative responses and start again?"
  );

  if (!confirmed) {
    return;
  }

  clearProgress();
  showScreen("intro-screen");
});

window.addEventListener("resize", () => {
  if (!chartScores.length) {
    return;
  }

  window.requestAnimationFrame(() => {
    if (
      document
        .getElementById("results-screen")
        .classList.contains("screen--active")
    ) {
      drawRadarChart(radarCanvas, chartScores);
    }

    if (
      document
        .getElementById("narrative-screen")
        .classList.contains("screen--active")
    ) {
      drawRadarChart(
        narrativeRadarCanvas,
        chartScores,
        true
      );

      drawRadarChart(
        mobileRadarCanvas,
        chartScores,
        true
      );
    }

    if (
      document
        .getElementById("final-review-screen")
        .classList.contains("screen--active")
    ) {
      drawRadarChart(
        finalRadarCanvas,
        chartScores,
        true
      );
    }
  });
});

buildSectionNavigation();

const savedProgressWasRestored = loadProgress();
resumeButton.hidden = !savedProgressWasRestored;

screens.forEach((screen) => {
  screen.setAttribute(
    "aria-hidden",
    String(
      !screen.classList.contains("screen--active")
    )
  );
});