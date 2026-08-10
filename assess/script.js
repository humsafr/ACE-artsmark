const STORAGE_KEY = "artsmarkPrototypeEmergingV1";

const snapshotQuestions = [
  {
    id: "leadership",
    title: "How is responsibility for arts and culture currently held?",
    options: [
      "It depends mainly on one committed individual.",
      "One person leads, with support from a small number of colleagues.",
      "Responsibility is shared across several roles or teams, with clear leadership support.",
      "Arts and culture are embedded across leadership and planning and are resilient to staffing changes."
    ]
  },
  {
    id: "reach",
    title: "How consistent is pupils’ access to arts and cultural provision?",
    options: [
      "Access varies significantly between year groups, subjects or pupil groups.",
      "Most pupils have access, but provision is still uneven in some areas.",
      "Provision is consistent for most pupils and barriers are actively considered.",
      "Access is broad, consistent and deliberately monitored across phases and pupil groups."
    ]
  },
  {
    id: "pupilVoice",
    title: "How do children and young people influence arts and cultural provision?",
    options: [
      "They mainly take part in opportunities designed by adults.",
      "They are sometimes consulted or offered choices.",
      "Their views influence planning and delivery in meaningful ways.",
      "They regularly shape, initiate or lead aspects of provision and can influence wider school practice."
    ]
  },
  {
    id: "curriculum",
    title: "How coherent is arts learning across the curriculum?",
    options: [
      "Provision varies considerably between classes, subjects or phases.",
      "There is some shared planning, but consistency and progression are still developing.",
      "Progression and expectations are clear across most relevant phases or subjects.",
      "Progression is well embedded, reviewed and adapted, with a shared understanding of quality."
    ]
  },
  {
    id: "partnerships",
    title: "What role do cultural partners and other organisations currently play?",
    options: [
      "Relationships are mainly occasional or activity-based.",
      "The school has several developing relationships that broaden the offer.",
      "Sustained relationships contribute to teaching, learning, access or staff development.",
      "Partnerships are strategic and reciprocal and contribute to the school and its wider community."
    ]
  },
  {
    id: "learning",
    title: "How does the school currently understand the difference arts and culture are making?",
    options: [
      "Benefits are mostly understood informally or through individual examples.",
      "Staff use some feedback, participation information or observations to reflect on impact.",
      "Different sources of information are used to understand impact and inform decisions.",
      "Reflection and evidence are routinely used to test assumptions, understand variation and strengthen provision."
    ]
  }
];

const assessmentSections = [
  {
    id: "purposeLeadership",
    title: "Purpose and leadership",
    intro: "Show how arts and culture connect to the identity, priorities and leadership of your setting.",
    criteria: ["Values and Ethos", "Leadership"],
    examplePrompt: "Give one or two concrete examples that show how arts and culture are currently valued, led or sustained in your setting.",
    reflectionPrompt: "Looking across these examples, what do they tell you about the strength and consistency of practice in this area?"
  },
  {
    id: "equityAgency",
    title: "Equity and pupil agency",
    intro: "Show who is able to take part, whose experience shapes provision and where access or influence may still be uneven.",
    criteria: ["Equality, Diversity and Inclusion", "Children and Young People"],
    examplePrompt: "Give one or two examples that show how pupils access, experience or influence arts and cultural provision.",
    reflectionPrompt: "What do these examples tell you about reach, inclusion, belonging and pupil agency across the setting?"
  },
  {
    id: "learningEntitlement",
    title: "Learning and cultural entitlement",
    intro: "Show what pupils learn and experience, how provision connects across the school, and the quality and breadth of the offer.",
    criteria: ["Curriculum Design and Delivery", "Range of Offer"],
    examplePrompt: "Give one or two examples that show the quality, progression or breadth of arts and cultural learning.",
    reflectionPrompt: "What do these examples tell you about the consistency and quality of pupils’ cultural entitlement?"
  },
  {
    id: "capabilityConnection",
    title: "Capability and connection",
    intro: "Show how staff development and cultural relationships strengthen the quality, resilience and wider reach of provision.",
    criteria: ["Continuing Professional Development", "Cultural Collaborations"],
    examplePrompt: "Give one or two examples that show how staff development or external relationships have strengthened practice.",
    reflectionPrompt: "What do these examples tell you about capability, sustainability and the school’s contribution beyond its own boundaries?"
  }
];

const evidenceOptions = [
  "Pupil voice",
  "Participation / progression data",
  "Staff feedback",
  "Partner / community feedback",
  "Observation",
  "Curriculum / planning information",
  "Other"
];

let state = {
  record: {},
  snapshot: {},
  assessment: {},
  voice: {},
  assessmentIndex: 0
};

const screens = document.querySelectorAll(".screen");
const resumeBtn = document.getElementById("resumeBtn");

function showScreen(id) {
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({top: 0, behavior: "smooth"});
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  resumeBtn.hidden = false;
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return false;
  try {
    state = {...state, ...JSON.parse(raw)};
    return true;
  } catch {
    return false;
  }
}

function flash(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 1000);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

document.querySelectorAll("[data-go]").forEach(btn => {
  btn.addEventListener("click", () => showScreen(btn.dataset.go));
});

document.getElementById("startBtn").addEventListener("click", () => {
  populateRecord();
  showScreen("screen-record");
});

resumeBtn.addEventListener("click", () => {
  populateRecord();
  showScreen("screen-record");
});

const recordForm = document.getElementById("recordForm");

function populateRecord() {
  Object.entries(state.record || {}).forEach(([k,v]) => {
    if (recordForm.elements[k]) recordForm.elements[k].value = v;
  });
}

function saveRecord() {
  state.record = Object.fromEntries(new FormData(recordForm).entries());
  save();
}

recordForm.addEventListener("input", () => {
  saveRecord();
  flash("save-record");
});

recordForm.addEventListener("submit", e => {
  e.preventDefault();
  saveRecord();
  buildSnapshot();
  showScreen("screen-snapshot");
});

function buildSnapshot() {
  const holder = document.getElementById("snapshotQuestions");
  holder.innerHTML = "";
  snapshotQuestions.forEach((q, i) => {
    const box = document.createElement("fieldset");
    box.className = "question";
    const selected = state.snapshot[q.id];
    box.innerHTML = `
      <legend><div class="eyebrow">Snapshot ${i+1} of ${snapshotQuestions.length}</div><h2>${q.title}</h2></legend>
      <div class="option-list">
        ${q.options.map((opt, idx) => `
          <label class="option">
            <input type="radio" name="${q.id}" value="${idx}" ${String(selected) === String(idx) ? "checked" : ""}>
            <span>${opt}</span>
          </label>
        `).join("")}
      </div>
    `;
    holder.appendChild(box);
  });
}

const snapshotForm = document.getElementById("snapshotForm");
snapshotForm.addEventListener("change", () => {
  snapshotQuestions.forEach(q => {
    const checked = snapshotForm.querySelector(`input[name="${q.id}"]:checked`);
    if (checked) state.snapshot[q.id] = checked.value;
  });
  save();
  flash("save-snapshot");
});

snapshotForm.addEventListener("submit", e => {
  e.preventDefault();
  state.assessmentIndex = 0;
  buildAssessment();
  showScreen("screen-assessment");
});

function buildAssessmentNav() {
  const nav = document.getElementById("assessmentNav");
  nav.innerHTML = "";
  assessmentSections.forEach((s, i) => {
    const li = document.createElement("li");
    li.textContent = s.title;
    if (i === state.assessmentIndex) li.classList.add("current");
    if (state.assessment[s.id]?.examples || state.assessment[s.id]?.reflection) li.classList.add("complete");
    nav.appendChild(li);
  });
}

function buildAssessment() {
  const s = assessmentSections[state.assessmentIndex];
  const saved = state.assessment[s.id] || {examples:"", evidence:[], finding:"", reflection:""};

  document.getElementById("assessmentStep").textContent = `Section ${state.assessmentIndex + 1} of ${assessmentSections.length}`;
  document.getElementById("assessmentTitle").textContent = s.title;
  document.getElementById("assessmentIntro").textContent = s.intro;
  document.getElementById("criteriaTags").innerHTML = s.criteria.map(c => `<span class="tag">${c}</span>`).join("");
  document.getElementById("examplePrompt").textContent = s.examplePrompt;
  document.getElementById("reflectionPrompt").textContent = s.reflectionPrompt;
  document.getElementById("examplesResponse").value = saved.examples || "";
  document.getElementById("findingResponse").value = saved.finding || "";
  document.getElementById("reflectionResponse").value = saved.reflection || "";

  document.getElementById("evidenceOptions").innerHTML = evidenceOptions.map(o => `
    <label class="chip">
      <input type="checkbox" value="${o}" ${saved.evidence?.includes(o) ? "checked" : ""}>
      <span>${o}</span>
    </label>
  `).join("");

  const p = 50 + Math.round(((state.assessmentIndex + 1) / assessmentSections.length) * 30);
  document.getElementById("assessmentProgress").style.width = `${p}%`;

  document.getElementById("assessmentBack").textContent = state.assessmentIndex === 0 ? "Back to profile" : "Back";
  document.getElementById("assessmentNext").textContent =
    state.assessmentIndex === assessmentSections.length - 1 ? "Continue to school voice" : "Save and continue";

  buildAssessmentNav();
}

function saveAssessmentSection() {
  const s = assessmentSections[state.assessmentIndex];
  state.assessment[s.id] = {
    examples: document.getElementById("examplesResponse").value,
    evidence: [...document.querySelectorAll("#evidenceOptions input:checked")].map(x => x.value),
    finding: document.getElementById("findingResponse").value,
    reflection: document.getElementById("reflectionResponse").value
  };
  save();
}

document.getElementById("assessmentForm").addEventListener("input", () => {
  saveAssessmentSection();
  flash("save-assessment");
});

document.getElementById("assessmentForm").addEventListener("submit", e => {
  e.preventDefault();
  saveAssessmentSection();
  if (state.assessmentIndex < assessmentSections.length - 1) {
    state.assessmentIndex += 1;
    buildAssessment();
    window.scrollTo({top:0, behavior:"smooth"});
  } else {
    populateVoice();
    showScreen("screen-voice");
  }
});

document.getElementById("assessmentBack").addEventListener("click", () => {
  saveAssessmentSection();
  if (state.assessmentIndex > 0) {
    state.assessmentIndex -= 1;
    buildAssessment();
  } else {
    buildSnapshot();
    showScreen("screen-snapshot");
  }
});

const voiceForm = document.getElementById("voiceForm");

function populateVoice() {
  voiceForm.elements.distinctive.value = state.voice.distinctive || "";
  voiceForm.elements.proud.value = state.voice.proud || "";
}

function saveVoice() {
  state.voice = {
    distinctive: voiceForm.elements.distinctive.value,
    proud: voiceForm.elements.proud.value
  };
  save();
}

voiceForm.addEventListener("input", () => {
  saveVoice();
  flash("save-voice");
});

document.getElementById("voiceBack").addEventListener("click", () => {
  saveVoice();
  state.assessmentIndex = assessmentSections.length - 1;
  buildAssessment();
  showScreen("screen-assessment");
});

voiceForm.addEventListener("submit", e => {
  e.preventDefault();
  saveVoice();
  buildReview();
  showScreen("screen-review");
});

function item(label, value) {
  return `<div class="review-item"><div class="review-label">${label}</div><div class="${value ? "review-value" : "review-empty"}">${value ? escapeHtml(value) : "Not answered"}</div></div>`;
}

function buildReview() {
  const record = `
    ${item("School", state.record.schoolName)}
    ${item("School type", state.record.schoolType)}
    ${item("Age range", state.record.ageRange)}
    ${item("Arts and cultural provision", state.record.artforms)}
    ${item("Relevant context", state.record.context)}
  `;

  const snapshot = snapshotQuestions.map(q => {
    const idx = state.snapshot[q.id];
    const val = idx !== undefined ? q.options[Number(idx)] : "";
    return item(q.title, val);
  }).join("");

  const assessment = assessmentSections.map(s => {
    const x = state.assessment[s.id] || {};
    return `
      <div class="review-item"><div class="review-label">${s.title}</div></div>
      ${item("Concrete example", x.examples)}
      ${item("Evidence basis", (x.evidence || []).join(", "))}
      ${item("What it told you", x.finding)}
      ${item("Reflection", x.reflection)}
    `;
  }).join("");

  const voice = `
    ${item("What is distinctive?", state.voice.distinctive)}
    ${item("What are you proudest of?", state.voice.proud)}
  `;

  document.getElementById("reviewContainer").innerHTML = `
    <section class="review-section"><h2>1A · School record</h2><div class="review-body">${record}</div></section>
    <section class="review-section"><h2>1B · Current provision snapshot</h2><div class="review-body">${snapshot}</div></section>
    <section class="review-section"><h2>2A · Practice and impact</h2><div class="review-body">${assessment}</div></section>
    <section class="review-section"><h2>2B · School voice and distinctiveness</h2><div class="review-body">${voice}</div></section>
  `;
}

document.getElementById("restartBtn").addEventListener("click", () => {
  if (!confirm("Clear all prototype answers and start again?")) return;
  localStorage.removeItem(STORAGE_KEY);
  state = {record:{}, snapshot:{}, assessment:{}, voice:{}, assessmentIndex:0};
  resumeBtn.hidden = true;
  showScreen("screen-intro");
});

if (load()) resumeBtn.hidden = false;
buildSnapshot();
