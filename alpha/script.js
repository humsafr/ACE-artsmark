const profileSections = [
  {
    title: "About your school",
    subtitle: "School details",
    fields: [
      { id: "schoolName", label: "School name", type: "input" },
      { id: "urn", label: "URN / DfE number", type: "input" },
      { id: "schoolType", label: "School type", type: "input" },
      { id: "location", label: "Location", type: "input" },
      { id: "pupilCount", label: "Number of pupils", type: "input" },
      { id: "ageRange", label: "Age range / phases", type: "input" },
      {
        id: "schoolStructure",
        label: "School structure / group",
        help:
          "For example: MAT, federation, trust, group or other arrangement, if relevant",
        type: "input",
        fullWidth: true
      },
      {
        id: "communityContext",
        label:
          "Is there anything about the pupils or communities your school serves that would help the assessor understand your setting?",
        help:
          "Keep this factual and relevant to your arts and cultural provision.",
        type: "textarea",
        fullWidth: true
      }
    ]
  },

  {
    title: "Your arts and cultural provision",
    fields: [
      {
        id: "subjectsArtforms",
        label:
          "Which arts and cultural subjects or artforms are currently available in your school?",
        help:
          "Please indicate where these are taught through the curriculum and/or available through enrichment or other opportunities.",
        type: "textarea"
      },
      {
        id: "ageProvision",
        label:
          "Which age groups or phases experience this provision?",
        help:
          "If provision varies substantially between phases or groups, briefly explain how.",
        type: "textarea"
      },
      {
        id: "qualifications",
        label:
          "Which arts or cultural qualifications or progression routes are available?",
        help:
          "If this is not relevant to your setting, select Not applicable.",
        type: "textarea"
      }
    ]
  },

  {
    title: "How your provision is organised",
    fields: [
      {
        id: "primaryResponsibility",
        label:
          "Who has primary responsibility for arts and cultural provision in your school?",
        help:
          "Please give their role rather than only their name.",
        type: "textarea"
      },
      {
        id: "othersInvolved",
        label:
          "Who else is involved in making the provision happen?",
        help:
          "This might include other teaching or support staff, senior leaders, specialist staff or external contributors.",
        type: "textarea"
      },
      {
        id: "resources",
        label:
          "Is there anything useful for us to know about the broad resources available for this work?",
        help:
          "For example, dedicated staffing, spaces, regular funding or other significant support. We are asking for context, not detailed financial information.",
        type: "textarea"
      }
    ]
  },

  {
    title: "Anything else we should understand about your setting?",
    intro:
      "Tell us about anything not captured above that would help an assessor understand your current provision fairly.",
    help:
      "This might include recent changes in leadership or staffing, restructuring, changes in pupil population, funding pressures, disruption or other circumstances affecting your provision.",
    fields: [
      {
        id: "settingContext",
        type: "textarea"
      }
    ]
  }
];

const criteriaSections = [
  {
    id: "learning-experiences",
    title: "Learning and experiences",
    criteria:
      "Artsmark criteria: Curriculum design and delivery + Range of offer",
    description:
      "This is about what pupils experience through arts and culture in your school: what they learn, the opportunities available to them, and how those different experiences come together.",
    extraDescription:
      "This might include curriculum learning, enrichment and extra-curricular activity, performances or events, opportunities beyond the school, or other experiences relevant to your setting.",
    howUsed: [
      "We want to understand the arts and cultural entitlement pupils have in your school and the thinking behind it.",
      "We are interested not simply in how many activities or artforms you offer, but in how provision has been designed for your pupils: its quality and breadth, how different experiences fit together, and how pupils are able to develop through them."
    ],
    prompts: [
      "what arts and cultural learning and experiences pupils currently have",
      "how provision differs across ages, phases or groups",
      "how curriculum, enrichment and extra-curricular opportunities fit together",
      "how pupils build knowledge, skills, confidence or creative capability over time",
      "choices you have made about what to offer and why",
      "how the provision reflects your pupils, setting or priorities",
      "areas of provision that are particularly established or strong",
      "gaps, constraints or areas that you are still developing",
      "what you have learned about which experiences are particularly valuable for pupils"
    ],
    responseGuidance:
      "Choose the examples that best help us understand your current provision and the thinking behind it. You can use paragraphs, bullet points or a combination.",
    limitNote:
      "Word limit to be tested in pilot (suggested up to 300 words)",
    countGuidance:
      "Suggested up to 300 words"
  },

  {
    id: "inclusion-agency",
    title: "Inclusion and pupil agency",
    criteria:
      "Artsmark criteria: Equality, diversity and inclusion + Children and young people",
    description:
      "This is about who gets to experience arts and culture, whose lives and experiences are reflected, and the role children and young people have in shaping the opportunities available to them.",
    extraDescription: "",
    howUsed: [
      "We want to understand how pupils experience your provision: who participates, whether experiences differ between groups, how you respond to barriers or uneven access, and the extent to which pupils are able to influence what happens.",
      "This may look very different depending on the age, needs and circumstances of the children and young people in your setting."
    ],
    prompts: [
      "who participates in arts and cultural opportunities",
      "whether some pupils or groups experience the offer differently",
      "how you identify and respond to barriers to access or participation",
      "how pupils' backgrounds, identities, interests and needs are reflected",
      "how children and young people influence choices, activities or priorities",
      "how you hear and learn from pupils about their experiences",
      "changes you have made because of what pupils told you or what you observed",
      "what you understand about who benefits and where there may still be gaps",
      "where meaningful pupil agency looks different because of pupils' age, needs or communication preferences"
    ],
    responseGuidance:
      "Choose the examples that best help us understand your current practice. You can use paragraphs, bullet points or a combination.",
    limitNote:
      "Word limit to be tested in pilot (suggested range from 100–300 words)",
    countGuidance:
      "Suggested range 100–300 words"
  },

  {
    id: "people-capability-sustainability",
    title: "People, capability and sustainability",
    criteria:
      "Artsmark criteria: Values and ethos + Leadership + Continuing professional development",
    description:
      "This is about the people and conditions that make your arts and cultural provision possible: why the work matters in your school, how it is led and supported, and how staff develop the capability to sustain and strengthen it.",
    extraDescription: "",
    howUsed: [
      "We want to understand how far arts and culture are supported by the school rather than depending solely on individual enthusiasm.",
      "That includes the role leaders play in making the work possible, how responsibility and expertise are held or shared, how staff build their knowledge and confidence, and what helps strong practice continue over time."
    ],
    prompts: [
      "why arts and culture matter in your setting and how this is reflected in school priorities",
      "who leads or champions the work and who else takes responsibility",
      "how leadership decisions about time, staffing, curriculum, resources or priorities support provision",
      "how staff develop their knowledge, confidence or practice",
      "formal or informal CPD, coaching, collaboration or shared learning",
      "how professional learning has shaped what staff do or what pupils experience",
      "how knowledge and expertise are shared rather than remaining with particular individuals",
      "what would continue if key people changed role or left",
      "what is more established and what remains more dependent on particular people",
      "barriers or constraints affecting the school's ability to build capability or sustain provision"
    ],
    responseGuidance:
      "Choose the examples that best help us understand how arts and culture are supported and sustained in your school. You can use paragraphs, bullet points or a combination.",
    limitNote:
      "Word limit to be tested in pilot (suggested range from 100–300 words)",
    countGuidance:
      "Suggested range 100–300 words"
  },

  {
    id: "connections-contribution",
    title: "Cultural connections and contribution",
    criteria:
      "Artsmark criteria: Cultural collaborations",
    description:
      "This is about your school's relationships beyond its own walls: how you connect and exchange with artists, organisations, other schools and networks, families and communities, and what those relationships make possible.",
    extraDescription:
      "For some schools, this may be a significant part of their provision. For others, the most appropriate or realistic focus may be on a small number of relationships, local community connections or developing provision within the school itself.",
    howUsed: [
      "We want to understand the role that relationships beyond the school play in your arts and cultural provision.",
      "This is not about having a particular number or type of partner. We are interested in what the connections you do have contribute, how they relate to your setting and community, and whether they are one-off or continuing, wherever that is useful and appropriate.",
      "We are also interested in exchange: what the school draws on from people and organisations around it, and what it may contribute to its community or wider networks in return."
    ],
    prompts: [
      "artists, cultural organisations or other partners you work with and what those relationships enable",
      "other schools, trusts or networks through which you share learning, expertise or opportunities",
      "connections with families, community groups or other people in your local area",
      "how your community informs or contributes to arts and cultural life in the school",
      "opportunities pupils have to encounter arts and culture beyond the school",
      "ways the school contributes arts and cultural activity, opportunities or expertise to others",
      "whether connections tend to be one-off or project-based, or are sustained over time",
      "how relationships are maintained and who is involved in holding them",
      "what your school and the people or organisations you work with learn from one another",
      "geographical, capacity or other barriers that shape what kinds of connections are possible for you",
      "where a small number of meaningful relationships are more appropriate than a broad network"
    ],
    responseGuidance:
      "Choose the examples that speak to relationships and connections that are relevant to your setting, what they make possible and what you have learned from them. You can use paragraphs, bullet points or a combination.",
    limitNote:
      "Word limit to be tested in pilot (suggested range from 100–300 words)",
    countGuidance:
      "Suggested range 100–300 words"
  }
];

const voiceQuestions = [
  {
    id: "distinctive",
    title:
      "What is distinctive about arts and culture in your school?",
    guidance:
      "Tell us what matters most about arts and culture in your school. You might include how different parts of your provision connect, what feels distinctive about the experience of children and young people, what your setting enables or constrains, and what you most want the assessor to understand.",
    limitNote:
      "Word limit to be tested in pilot (suggested range from 100–300 words)",
    type: "text"
  },

  {
    id: "proud",
    title:
      "What are you most proud of in your arts and cultural provision right now?",
    guidance:
      "Tell us about something you feel especially proud of in your current provision. This could relate to children and young people's experience, something your school sustains particularly well, something you have worked hard to strengthen, or something you contribute beyond the school.",
    limitNote:
      "Word limit to be tested in pilot (suggested range from 100–300 words)",
    type: "text"
  },

  {
    id: "next",
    title:
      "Where would you like to take your arts and cultural provision next?",
    guidance:
      "Tell us what you would most like to strengthen, develop or explore, and how you think you might get there. You might reflect on what you could build on, who you may need to involve, what you may need to do differently, or any support or conditions that would help make this possible.",
    limitNote:
      "Word limit to be tested in pilot (suggested range from 100–300 words)",
    type: "text"
  },

  {
    id: "bring-to-life",
    title:
      "What would you like to bring to life?",
    guidance:
      "Some aspects of arts and cultural life are difficult to communicate in writing. Alongside your response above, you can share a small amount of material that helps the assessor see what you are proud of in practice. This is not additional evidence, or proof of anything mentioned in your application. Your written responses are the basis of the assessment. Assessors will look briefly at this material to add colour and context to what you have told them. The amount or production quality of what you share will not influence your award level.",
    limitNote: "",
    type: "bring-to-life"
  }
];

const STORAGE_KEY = "artsmark-assessment-v3-progress";

const state = {
  profile: {},
  payment: {
    option: ""
  },
  enrolmentComplete: false,
  criteria: {},
  voice: {},
  final: {},
  currentCriteriaIndex: 0,
  currentVoiceIndex: 0,
  lastScreen: "landing-screen"
};

let savedStatusTimer = null;

const screens = [...document.querySelectorAll(".screen")];
const liveRegion = document.getElementById("live-region");

const startEnrolmentButton =
  document.getElementById("start-enrolment-button");

const startAssessmentButton =
  document.getElementById("start-assessment-button");

const enrolmentStatus =
  document.getElementById("enrolment-status");

const assessmentStatus =
  document.getElementById("assessment-status");

const assessmentLockNote =
  document.getElementById("assessment-lock-note");

function countWords(value) {
  const text = String(value || "").trim();
  return text ? text.split(/\s+/).length : 0;
}

function showScreen(screenId) {
  screens.forEach((screen) => {
    const isActive = screen.id === screenId;

    screen.classList.toggle("screen--active", isActive);
    screen.setAttribute("aria-hidden", String(!isActive));
  });

  state.lastScreen = screenId;
  saveProgress();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  window.setTimeout(() => {
    const screen = document.getElementById(screenId);
    const heading = screen?.querySelector("h1");

    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }, 50);
}

function showSavedStatus(element) {
  if (!element) return;

  element.classList.add("is-visible");

  window.clearTimeout(savedStatusTimer);

  savedStatusTimer = window.setTimeout(() => {
    element.classList.remove("is-visible");
  }, 1400);
}

function saveProgress() {
  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

    updateLandingState();
  } catch (error) {
    console.warn("Unable to save progress.", error);
  }
}

function loadProgress() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);

    if (!raw) return false;

    const saved = JSON.parse(raw);

    Object.assign(state.profile, saved.profile || {});
    Object.assign(state.payment, saved.payment || {});
    Object.assign(state.criteria, saved.criteria || {});
    Object.assign(state.voice, saved.voice || {});
    Object.assign(state.final, saved.final || {});

    state.enrolmentComplete =
      Boolean(saved.enrolmentComplete);

    if (Number.isInteger(saved.currentCriteriaIndex)) {
      state.currentCriteriaIndex =
        Math.max(
          0,
          Math.min(
            criteriaSections.length - 1,
            saved.currentCriteriaIndex
          )
        );
    }

    if (Number.isInteger(saved.currentVoiceIndex)) {
      state.currentVoiceIndex =
        Math.max(
          0,
          Math.min(
            voiceQuestions.length - 1,
            saved.currentVoiceIndex
          )
        );
    }

    if (typeof saved.lastScreen === "string") {
      state.lastScreen = saved.lastScreen;
    }

    return true;
  } catch (error) {
    console.warn("Unable to restore progress.", error);
    return false;
  }
}

function clearProgress() {
  state.profile = {};
  state.payment = { option: "" };
  state.enrolmentComplete = false;
  state.criteria = {};
  state.voice = {};
  state.final = {};
  state.currentCriteriaIndex = 0;
  state.currentVoiceIndex = 0;
  state.lastScreen = "landing-screen";

  sessionStorage.removeItem(STORAGE_KEY);
  updateLandingState();
}

function hasAssessmentProgress() {
  return (
    Object.values(state.criteria).some((value) =>
      String(value || "").trim()
    ) ||
    Object.keys(state.voice).length > 0 ||
    Object.keys(state.final).length > 0
  );
}

function updateLandingState() {
  if (state.enrolmentComplete) {
    enrolmentStatus.hidden = false;
    startEnrolmentButton.textContent = "Review enrolment";

    startAssessmentButton.disabled = false;
    assessmentLockNote.hidden = true;
  } else {
    enrolmentStatus.hidden = true;
    startEnrolmentButton.textContent = "Start enrolment";

    startAssessmentButton.disabled = true;
    assessmentLockNote.hidden = false;
  }

  if (hasAssessmentProgress()) {
    assessmentStatus.hidden = false;
    assessmentStatus.textContent = "In progress";
    startAssessmentButton.textContent = "Continue assessment";
  } else {
    assessmentStatus.hidden = true;
    startAssessmentButton.textContent = "Start assessment";
  }
}

/* ============================================================
   PROFILE
   ============================================================ */

const profileForm = document.getElementById("profile-form");
const profileContent = document.getElementById("profile-content");
const profileSavedStatus =
  document.getElementById("profile-saved-status");

function createProfileField(field) {
  const wrapper = document.createElement("div");
  wrapper.className = "field";

  if (field.fullWidth) {
    wrapper.classList.add("field--full");
  }

  if (field.label) {
    const label = document.createElement("label");
    label.setAttribute("for", field.id);
    label.textContent = field.label;
    wrapper.appendChild(label);
  }

  if (field.help) {
    const help = document.createElement("p");
    help.className = "field-help";
    help.textContent = field.help;
    wrapper.appendChild(help);
  }

  let control;

  if (field.type === "textarea") {
    control = document.createElement("textarea");
    control.rows = 6;
    control.placeholder = "Type your response here";
  } else {
    control = document.createElement("input");
    control.type = "text";
  }

  control.id = field.id;
  control.name = field.id;
  control.value = state.profile[field.id] || "";

  control.addEventListener("input", () => {
    state.profile[field.id] = control.value;
    saveProgress();
    showSavedStatus(profileSavedStatus);
  });

  wrapper.appendChild(control);

  return wrapper;
}

function renderProfile() {
  profileContent.innerHTML = "";

  profileSections.forEach((section) => {
    const container = document.createElement("section");
    container.className = "form-section";

    const kicker = document.createElement("p");
    kicker.className = "section-kicker";
    kicker.textContent = section.title;
    container.appendChild(kicker);

    if (section.subtitle) {
      const heading = document.createElement("h2");
      heading.textContent = section.subtitle;
      container.appendChild(heading);
    }

    if (section.intro) {
      const intro = document.createElement("p");
      intro.className = "question-intro";
      intro.textContent = section.intro;
      container.appendChild(intro);
    }

    if (section.help) {
      const help = document.createElement("p");
      help.className = "field-help";
      help.textContent = section.help;
      container.appendChild(help);
    }

    const fieldContainer = document.createElement("div");

    const simpleInputs = section.fields.filter(
      (field) => field.type === "input" && !field.fullWidth
    );

    if (simpleInputs.length > 1) {
      fieldContainer.className = "field-grid field-grid--two";
    }

    section.fields.forEach((field) => {
      const fieldElement = createProfileField(field);

      if (field.fullWidth || field.type === "textarea") {
        container.appendChild(fieldElement);
      } else {
        fieldContainer.appendChild(fieldElement);
      }
    });

    if (fieldContainer.children.length) {
      container.insertBefore(
        fieldContainer,
        container.children[section.subtitle ? 2 : 1] || null
      );
    }

    profileContent.appendChild(container);
  });
}

/* ============================================================
   PAYMENT
   ============================================================ */

const paymentForm = document.getElementById("payment-form");
const paymentRadios =
  [...document.querySelectorAll('input[name="paymentOption"]')];

const payNowGuidance =
  document.getElementById("pay-now-guidance");

const payLaterGuidance =
  document.getElementById("pay-later-guidance");

const paymentValidation =
  document.getElementById("payment-validation");

const paymentSummary =
  document.getElementById("payment-summary");

function renderPayment() {
  paymentRadios.forEach((radio) => {
    radio.checked =
      radio.value === state.payment.option;
  });

  updatePaymentGuidance();
}

function updatePaymentGuidance() {
  payNowGuidance.hidden =
    state.payment.option !== "now";

  payLaterGuidance.hidden =
    state.payment.option !== "later";

  paymentValidation.hidden = true;
}

function renderPaymentSummary() {
  if (state.payment.option === "later") {
    paymentSummary.innerHTML = `
      <h2>Payment arranged for later</h2>
      <p>
        Payment must be received by
        <strong>[DD Month YYYY]</strong>.
      </p>
      <p>
        If you need help arranging payment, contact
        <strong>[Artsmark contact / email]</strong>.
      </p>
    `;
  } else {
    paymentSummary.innerHTML = `
      <h2>Payment option selected</h2>
      <p>
        You selected <strong>Pay now</strong>.
        In the live service, payment would be completed through the
        Artsmark payment process.
      </p>
    `;
  }
}

/* ============================================================
   CRITERIA
   ============================================================ */

const criteriaForm =
  document.getElementById("criteria-form");

const criteriaSectionList =
  document.getElementById("criteria-section-list");

const criteriaProgressText =
  document.getElementById("criteria-progress-text");

const criteriaProgressBar =
  document.getElementById("criteria-progress-bar");

const criteriaProgressTrack =
  document.getElementById("criteria-progress-track");

const criteriaSavedStatus =
  document.getElementById("criteria-saved-status");

const criteriaEyebrow =
  document.getElementById("criteria-eyebrow");

const criteriaTitle =
  document.getElementById("criteria-title");

const criteriaLabel =
  document.getElementById("criteria-label");

const criteriaDescription =
  document.getElementById("criteria-description");

const criteriaExtraDescription =
  document.getElementById("criteria-extra-description");

const criteriaHowUsed =
  document.getElementById("criteria-how-used");

const criteriaPrompts =
  document.getElementById("criteria-prompts");

const criteriaResponseGuidance =
  document.getElementById("criteria-response-guidance");

const criteriaLimitNote =
  document.getElementById("criteria-limit-note");

const criteriaWordGuidance =
  document.getElementById("criteria-word-guidance");

const criteriaWordCount =
  document.getElementById("criteria-word-count");

const criteriaResponse =
  document.getElementById("criteria-response");

const criteriaNext =
  document.getElementById("criteria-next");

function buildCriteriaNavigation() {
  criteriaSectionList.innerHTML = "";

  criteriaSections.forEach((section, index) => {
    const item = document.createElement("li");
    item.textContent = section.title;
    item.dataset.index = String(index + 1);

    item.classList.toggle(
      "is-current",
      index === state.currentCriteriaIndex
    );

    const completed = Boolean(
      String(state.criteria[section.id] || "").trim()
    );

    item.classList.toggle(
      "is-complete",
      completed && index !== state.currentCriteriaIndex
    );

    criteriaSectionList.appendChild(item);
  });
}

function renderCriteria(index) {
  state.currentCriteriaIndex = index;

  const section = criteriaSections[index];

  const percentage = Math.round(
    ((index + 1) / criteriaSections.length) * 100
  );

  criteriaProgressText.textContent =
    `Area ${index + 1} of ${criteriaSections.length}`;

  criteriaProgressBar.style.width = `${percentage}%`;

  criteriaProgressTrack.setAttribute(
    "aria-valuenow",
    String(percentage)
  );

  criteriaEyebrow.textContent =
    `${index + 1}. ${section.title}`;

  criteriaTitle.textContent = section.title;
  criteriaLabel.textContent = section.criteria;
  criteriaDescription.textContent = section.description;
  criteriaExtraDescription.textContent =
    section.extraDescription;

  criteriaExtraDescription.hidden =
    !section.extraDescription;

  criteriaHowUsed.innerHTML = "";

  section.howUsed.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    criteriaHowUsed.appendChild(p);
  });

  criteriaPrompts.innerHTML = "";

  section.prompts.forEach((prompt) => {
    const li = document.createElement("li");
    li.textContent = prompt;
    criteriaPrompts.appendChild(li);
  });

  criteriaResponseGuidance.textContent =
    section.responseGuidance;

  criteriaLimitNote.textContent =
    section.limitNote;

  criteriaWordGuidance.textContent =
    section.countGuidance;

  criteriaResponse.value =
    state.criteria[section.id] || "";

  criteriaWordCount.textContent =
    `${countWords(criteriaResponse.value)} words`;

  criteriaNext.textContent =
    index === criteriaSections.length - 1
      ? "Continue to school voice"
      : "Save and continue";

  buildCriteriaNavigation();
  saveProgress();

  liveRegion.textContent =
    `${section.title}. Area ${index + 1} of ${criteriaSections.length}.`;
}

function saveCurrentCriteria() {
  const section =
    criteriaSections[state.currentCriteriaIndex];

  state.criteria[section.id] =
    criteriaResponse.value;

  saveProgress();
  showSavedStatus(criteriaSavedStatus);
}

/* ============================================================
   SCHOOL VOICE
   ============================================================ */

const voiceForm =
  document.getElementById("voice-form");

const voiceSectionList =
  document.getElementById("voice-section-list");

const voiceProgressText =
  document.getElementById("voice-progress-text");

const voiceProgressBar =
  document.getElementById("voice-progress-bar");

const voiceProgressTrack =
  document.getElementById("voice-progress-track");

const voiceSavedStatus =
  document.getElementById("voice-saved-status");

const voiceQuestionCount =
  document.getElementById("voice-question-count");

const voiceTitle =
  document.getElementById("voice-title");

const voiceGuidance =
  document.getElementById("voice-guidance");

const voiceLimitNote =
  document.getElementById("voice-limit-note");

const standardVoiceResponse =
  document.getElementById("standard-voice-response");

const voiceResponse =
  document.getElementById("voice-response");

const voiceWordCount =
  document.getElementById("voice-word-count");

const bringToLifeContent =
  document.getElementById("bring-to-life-content");

const bringNotice =
  document.getElementById("bring-notice");

const folderLink =
  document.getElementById("folder-link");

const sharePermission =
  document.getElementById("share-permission");

const voiceNext =
  document.getElementById("voice-next");

function buildVoiceNavigation() {
  voiceSectionList.innerHTML = "";

  voiceQuestions.forEach((question, index) => {
    const item = document.createElement("li");
    item.textContent = question.title;
    item.dataset.index = String(index + 1);

    item.classList.toggle(
      "is-current",
      index === state.currentVoiceIndex
    );

    const saved = state.voice[question.id];

    const completed =
      question.type === "bring-to-life"
        ? Boolean(
            saved &&
            (
              saved.notice ||
              saved.folderLink ||
              saved.sharePermission
            )
          )
        : Boolean(String(saved || "").trim());

    item.classList.toggle(
      "is-complete",
      completed && index !== state.currentVoiceIndex
    );

    voiceSectionList.appendChild(item);
  });
}

function renderVoice(index) {
  state.currentVoiceIndex = index;

  const question = voiceQuestions[index];

  const percentage = Math.round(
    ((index + 1) / voiceQuestions.length) * 100
  );

  voiceProgressText.textContent =
    `Question ${index + 1} of ${voiceQuestions.length}`;

  voiceProgressBar.style.width = `${percentage}%`;

  voiceProgressTrack.setAttribute(
    "aria-valuenow",
    String(percentage)
  );

  voiceQuestionCount.textContent =
    `Question ${index + 1} of ${voiceQuestions.length}`;

  voiceTitle.textContent =
    `${index + 1}. ${question.title}`;

  voiceGuidance.textContent = question.guidance;
  voiceLimitNote.textContent = question.limitNote;
  voiceLimitNote.hidden = !question.limitNote;

  const isBringToLife =
    question.type === "bring-to-life";

  standardVoiceResponse.hidden = isBringToLife;
  bringToLifeContent.hidden = !isBringToLife;

  if (isBringToLife) {
    const saved =
      state.voice[question.id] || {};

    bringNotice.value =
      saved.notice || "";

    folderLink.value =
      saved.folderLink || "";

    sharePermission.checked =
      Boolean(saved.sharePermission);
  } else {
    voiceResponse.value =
      state.voice[question.id] || "";

    voiceWordCount.textContent =
      `${countWords(voiceResponse.value)} words`;
  }

  voiceNext.textContent =
    index === voiceQuestions.length - 1
      ? "Continue to final check"
      : "Save and continue";

  buildVoiceNavigation();
  saveProgress();

  liveRegion.textContent =
    `${question.title}. Question ${index + 1} of ${voiceQuestions.length}.`;
}

function saveCurrentVoice() {
  const question =
    voiceQuestions[state.currentVoiceIndex];

  if (question.type === "bring-to-life") {
    state.voice[question.id] = {
      notice: bringNotice.value,
      folderLink: folderLink.value,
      sharePermission: sharePermission.checked
    };
  } else {
    state.voice[question.id] =
      voiceResponse.value;
  }

  saveProgress();
  showSavedStatus(voiceSavedStatus);
}

/* ============================================================
   FINAL DETAILS
   ============================================================ */

const submitForm =
  document.getElementById("submit-form");

const submitterName =
  document.getElementById("submitter-name");

const submitterRole =
  document.getElementById("submitter-role");

const submitDate =
  document.getElementById("submit-date");

const declarationConfirmation =
  document.getElementById("declaration-confirmation");

function restoreFinalDetails() {
  submitterName.value =
    state.final.submitterName || "";

  submitterRole.value =
    state.final.submitterRole || "";

  submitDate.value =
    state.final.submitDate || "";

  declarationConfirmation.checked =
    Boolean(
      state.final.declarationConfirmation
    );
}

function saveFinalDetails() {
  state.final.submitterName =
    submitterName.value;

  state.final.submitterRole =
    submitterRole.value;

  state.final.submitDate =
    submitDate.value;

  state.final.declarationConfirmation =
    declarationConfirmation.checked;

  saveProgress();
}

/* ============================================================
   EVENTS
   ============================================================ */

startEnrolmentButton.addEventListener("click", () => {
  renderProfile();
  showScreen("profile-screen");
});

startAssessmentButton.addEventListener("click", () => {
  if (!state.enrolmentComplete) {
    return;
  }

  if (hasAssessmentProgress()) {
    if (state.lastScreen === "criteria-screen") {
      renderCriteria(state.currentCriteriaIndex);
      showScreen("criteria-screen");
      return;
    }

    if (state.lastScreen === "voice-screen") {
      renderVoice(state.currentVoiceIndex);
      showScreen("voice-screen");
      return;
    }

    if (state.lastScreen === "submit-screen") {
      restoreFinalDetails();
      showScreen("submit-screen");
      return;
    }
  }

  showScreen("assessment-intro-screen");
});

/* Profile */

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPayment();
  showScreen("payment-screen");
});

document
  .getElementById("profile-back")
  .addEventListener("click", () => {
    showScreen("landing-screen");
  });

document
  .getElementById("profile-save-exit")
  .addEventListener("click", () => {
    showScreen("landing-screen");
  });

/* Payment */

paymentRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    state.payment.option = radio.value;
    updatePaymentGuidance();
    saveProgress();
  });
});

document
  .getElementById("prototype-pay-button")
  .addEventListener("click", () => {
    window.alert(
      "Prototype only: the live service would continue to the payment process here."
    );
  });

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!state.payment.option) {
    paymentValidation.hidden = false;
    return;
  }

  state.enrolmentComplete = true;
  saveProgress();
  renderPaymentSummary();
  showScreen("enrolment-complete-screen");
});

document
  .getElementById("payment-back")
  .addEventListener("click", () => {
    renderProfile();
    showScreen("profile-screen");
  });

document
  .getElementById("payment-save-exit")
  .addEventListener("click", () => {
    showScreen("landing-screen");
  });

document
  .getElementById("go-to-assessment-button")
  .addEventListener("click", () => {
    showScreen("assessment-intro-screen");
  });

document
  .getElementById("return-home-after-enrolment")
  .addEventListener("click", () => {
    showScreen("landing-screen");
  });

/* Assessment intro */

document
  .getElementById("assessment-intro-back")
  .addEventListener("click", () => {
    showScreen("landing-screen");
  });

document
  .getElementById("assessment-intro-next")
  .addEventListener("click", () => {
    showScreen("criteria-intro-screen");
  });

/* Criteria intro */

document
  .getElementById("criteria-intro-back")
  .addEventListener("click", () => {
    showScreen("assessment-intro-screen");
  });

document
  .getElementById("criteria-intro-next")
  .addEventListener("click", () => {
    renderCriteria(state.currentCriteriaIndex);
    showScreen("criteria-screen");
  });

/* Criteria */

criteriaResponse.addEventListener("input", () => {
  criteriaWordCount.textContent =
    `${countWords(criteriaResponse.value)} words`;

  saveCurrentCriteria();
});

criteriaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveCurrentCriteria();

  if (
    state.currentCriteriaIndex <
    criteriaSections.length - 1
  ) {
    renderCriteria(
      state.currentCriteriaIndex + 1
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    showScreen("voice-intro-screen");
  }
});

document
  .getElementById("criteria-back")
  .addEventListener("click", () => {
    saveCurrentCriteria();

    if (state.currentCriteriaIndex > 0) {
      renderCriteria(
        state.currentCriteriaIndex - 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      showScreen("criteria-intro-screen");
    }
  });

document
  .getElementById("criteria-save-exit")
  .addEventListener("click", () => {
    saveCurrentCriteria();
    showScreen("landing-screen");
  });

/* Voice intro */

document
  .getElementById("voice-intro-back")
  .addEventListener("click", () => {
    renderCriteria(
      criteriaSections.length - 1
    );

    showScreen("criteria-screen");
  });

document
  .getElementById("voice-intro-next")
  .addEventListener("click", () => {
    renderVoice(state.currentVoiceIndex);
    showScreen("voice-screen");
  });

/* Voice */

voiceResponse.addEventListener("input", () => {
  voiceWordCount.textContent =
    `${countWords(voiceResponse.value)} words`;

  saveCurrentVoice();
});

[bringNotice, folderLink].forEach((field) => {
  field.addEventListener("input", saveCurrentVoice);
});

sharePermission.addEventListener(
  "change",
  saveCurrentVoice
);

voiceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveCurrentVoice();

  if (
    state.currentVoiceIndex <
    voiceQuestions.length - 1
  ) {
    renderVoice(
      state.currentVoiceIndex + 1
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  } else {
    restoreFinalDetails();
    showScreen("submit-screen");
  }
});

document
  .getElementById("voice-back")
  .addEventListener("click", () => {
    saveCurrentVoice();

    if (state.currentVoiceIndex > 0) {
      renderVoice(
        state.currentVoiceIndex - 1
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      showScreen("voice-intro-screen");
    }
  });

document
  .getElementById("voice-save-exit")
  .addEventListener("click", () => {
    saveCurrentVoice();
    showScreen("landing-screen");
  });

/* Final */

[
  submitterName,
  submitterRole,
  submitDate
].forEach((field) => {
  field.addEventListener("input", saveFinalDetails);
});

declarationConfirmation.addEventListener(
  "change",
  saveFinalDetails
);

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  saveFinalDetails();
  showScreen("complete-screen");
});

document
  .getElementById("submit-back")
  .addEventListener("click", () => {
    saveFinalDetails();

    renderVoice(
      voiceQuestions.length - 1
    );

    showScreen("voice-screen");
  });

document
  .getElementById("submit-save-exit")
  .addEventListener("click", () => {
    saveFinalDetails();
    showScreen("landing-screen");
  });

/* Complete */

document
  .getElementById("return-to-form")
  .addEventListener("click", () => {
    restoreFinalDetails();
    showScreen("submit-screen");
  });

document
  .getElementById("return-home")
  .addEventListener("click", () => {
    showScreen("landing-screen");
  });

document
  .getElementById("restart-button")
  .addEventListener("click", () => {
    const confirmed = window.confirm(
      "Clear all enrolment and assessment responses from this browser session and start again?"
    );

    if (!confirmed) return;

    clearProgress();
    renderProfile();
    renderPayment();
    showScreen("landing-screen");
  });

/* Initialisation */

loadProgress();
renderProfile();
renderPayment();
restoreFinalDetails();
buildCriteriaNavigation();
buildVoiceNavigation();
updateLandingState();
