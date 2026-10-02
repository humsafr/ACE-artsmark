"use strict";

const overview = [
  ["1A", "School record",
    "A factual picture of your school and what is currently on offer.",
    "school-record"],
  ["1B", "Current provision snapshot",
    "A short self-reflection on where you think your school is currently.",
    "snapshot"],
  ["2A", "Your practice across the Artsmark criteria",
    "Four criterion-linked sections about practice, reach, embeddedness, impact and how you know.",
    "criteria-intro"],
  ["2B", "School voice and distinctiveness",
    "Space to connect the dots and explain what matters most about arts and culture in your setting.",
    "voice"],
  ["3", "Optional: bring your application to life",
    "Share a small amount of additional material that helps the assessor see or hear aspects of your provision.",
    "materials"]
];

const snapshotQuestions = [
  [
    "How is responsibility for arts and culture currently held?",
    [
      "It depends mainly on one committed individual.",
      "One person leads, with support from a small number of colleagues.",
      "Responsibility is shared across several roles or teams, with clear leadership support.",
      "Arts and culture are embedded across leadership and planning and are resilient to staffing changes."
    ]
  ],
  [
    "How consistent is pupils’ access to arts and cultural provision?",
    [
      "Access varies significantly between year groups, subjects or pupil groups.",
      "Most pupils have access, but provision is still uneven in some areas.",
      "Provision is consistent for most pupils and barriers are actively considered.",
      "Access is broad, consistent and deliberately monitored across phases and pupil groups."
    ]
  ],
  [
    "How do children and young people influence arts and cultural provision?",
    [
      "They mainly take part in opportunities designed by adults.",
      "They are sometimes consulted or offered choices.",
      "Their views influence planning and delivery in meaningful ways.",
      "They regularly shape, initiate or lead aspects of provision and can influence wider school practice."
    ]
  ],
  [
    "How coherent is arts learning across the curriculum?",
    [
      "Provision varies considerably between classes, subjects or phases.",
      "There is some shared planning, but consistency and progression are still developing.",
      "Progression and expectations are clear across most relevant phases or subjects.",
      "Progression is well embedded, reviewed and adapted, with a shared understanding of quality."
    ]
  ],
  [
    "What role do cultural partners and other organisations currently play?",
    [
      "Relationships are mainly occasional or activity-based.",
      "The school has several developing relationships that broaden the offer.",
      "Sustained relationships contribute to teaching, learning, access or staff development.",
      "Partnerships are strategic and reciprocal and contribute to the school and its wider community."
    ]
  ],
  [
    "How does the school currently understand the difference arts and culture are making?",
    [
      "Benefits are mostly understood informally or through individual examples.",
      "Staff use some feedback, participation information or observations to reflect on impact.",
      "Different sources of information are used to understand impact and inform decisions.",
      "Reflection and evidence are routinely used to test assumptions, understand variation and strengthen provision."
    ]
  ]
];

const criteria = [
  {
    id: "purpose",
    title: "Purpose and leadership",
    criteria: "Values and Ethos · Leadership",
    blurb:
      "How arts and culture are valued, prioritised and led in your school — including how they connect to your wider values, decisions, resources and long-term commitment.",
    question:
      "How do arts and culture show up in the purpose and leadership of your school?",
    prompt:
      "Share a few examples of how this area currently operates in your setting. Bullet points are welcome.",
    reflection:
      "Tell us what feels significant about those examples such as how embedded or widespread the practice is, what difference it is making, where there are strengths or challenges, and how you know."
  },
  {
    id: "equity",
    title: "Equity and agency",
    criteria: "Equality, Diversity and Inclusion · Children and Young People",
    blurb:
      "How children and young people access, experience and help shape arts and culture — including who participates, whose voices are heard, the quality of their engagement, and how barriers are addressed.",
    question:
      "How do equity and agency show up in your arts and cultural provision?",
    prompt:
      "Share a few examples of how this area currently operates in your setting. Bullet points are welcome.",
    reflection:
      "Tell us what feels significant about those examples such as how embedded or widespread the practice is, what difference it is making, where there are strengths or challenges, and how you know."
  },
  {
    id: "learning",
    title: "Learning and cultural entitlement",
    criteria: "Curriculum Design and Delivery · Range of Offer",
    blurb:
      "What children and young people have the opportunity to learn and experience — including the breadth and quality of the offer, how learning develops over time, and how creativity and progression are supported.",
    question:
      "What does arts and cultural learning look like for children and young people in your school?",
    prompt:
      "Share a few examples of how this area currently operates in your setting. Bullet points are welcome.",
    reflection:
      "Tell us what feels significant about those examples such as how embedded or widespread the practice is, what difference it is making, where there are strengths or challenges, and how you know."
  },
  {
    id: "capability",
    title: "Capability and connection",
    criteria: "Continuing Professional Development · Cultural Collaborations",
    blurb:
      "How staff learning and external relationships strengthen your provision — including how knowledge, confidence, partnerships and connections support and sustain good practice.",
    question:
      "How do people and partnerships strengthen arts and culture in your school?",
    prompt:
      "Share a few examples of how this area currently operates in your setting. Bullet points are welcome.",
    reflection:
      "Tell us what feels significant about those examples such as how embedded or widespread the practice is, what difference it is making, where there are strengths or challenges, and how you know."
  }
];

const navItems = [
  ["school-record", "1A · School record"],
  ["snapshot", "1B · Provision snapshot"],
  ["criteria-intro", "2A · Criteria overview"],
  ...criteria.map(item => [`criteria-${item.id}`, item.title]),
  ["voice", "2B · School voice"],
  ["materials", "3 · Optional material"],
  ["review", "Review"]
];

function wordCount(value) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function textQuestion(name, title, prompt, limit = null, rows = 8) {
  return `
    <div class="question">
      <h3>${title}</h3>
      <p>${prompt}</p>
      ${limit ? `<div class="limit">Indicative limit for testing: up to ${limit} words.</div>` : ""}
      <textarea name="${name}" rows="${rows}" ${limit ? `data-limit="${limit}"` : ""}></textarea>
      ${limit ? `<div class="word-count"></div>` : ""}
    </div>`;
}

function navButtons(previous, next, nextLabel) {
  return `
    <div class="section-actions">
      ${previous
        ? `<button class="secondary" data-go="${previous}">Back</button>`
        : "<span></span>"}
      ${next
        ? `<button class="primary" data-go="${next}">${nextLabel}</button>`
        : `<button class="primary" data-finish="true">${nextLabel}</button>`}
    </div>`;
}

function schoolRecord() {
  return `
    <article class="form-section" id="school-record">
      <p class="eyebrow">Part 1A · Your school profile</p>
      <h1>School record</h1>
      <p class="section-subtitle">
        Give the assessor the factual picture they need to understand your setting and what is currently on offer.
      </p>

      <div class="info">
        <strong>How this part is used</strong>
        <p>
          This section gives assessors the basic context they need to understand your school and its arts and cultural provision.
          By capturing this factual information up front, you won’t need to repeat it in the assessment questions, where you can
          focus more on the Artsmark criteria, the impact of your provision and what that looks like in practice.
        </p>
        <p>
          In future, this information could be saved and updated when you reapply, rather than completed from scratch.
        </p>
      </div>

      <h2>About your school</h2>

      <div class="field-grid">
        ${[
          "URN / DfE number",
          "School name",
          "School type",
          "School structure / MAT / federation",
          "Age range / key stages",
          "Approximate pupil roll"
        ].map((label, index) =>
          `<label>${label}<input type="text" name="record-${index}"></label>`
        ).join("")}
      </div>

      <p class="instruction">
        Keep the following sections brief and answer only what is relevant to your setting.
      </p>

      ${textQuestion(
        "serve",
        "Who does your school serve?",
        "Give the assessor any brief context about the pupils and communities you serve that is useful for understanding your provision. Short bullet points are fine."
      )}

      ${textQuestion(
        "artforms",
        "What artforms and subjects are taught?",
        "List the artforms and subjects currently available. For example: visual art, music, drama, dance, film, creative writing, photography or digital arts. Short bullet points are fine."
      )}

      ${textQuestion(
        "age-offer",
        "How does the offer differ by age group or phase?",
        "If relevant in your case, help us briefly understand what younger and older pupils experience, including any significant differences in curriculum, enrichment or access."
      )}

      ${textQuestion(
        "routes",
        "What qualifications or progression routes are available?",
        "Where relevant, include arts qualifications, pathways or opportunities for pupils to continue their arts learning."
      )}

      ${textQuestion(
        "organised",
        "How is arts provision organised?",
        "Tell us briefly who has primary responsibility for arts and culture, who else contributes, and how the work is organised."
      )}

      ${textQuestion(
        "capacity",
        "Anything relevant about capacity, resources or funding?",
        "Include anything that materially affects what you are currently able to support or offer."
      )}

      ${textQuestion(
        "other-context",
        "Anything else we should know?",
        "Use this space to give any context that the standard fields have not captured. This might include recent leadership, staffing, structural or funding changes, changes in pupil population, disruption, or anything else that helps the assessor understand your current provision fairly."
      )}

      ${navButtons(null, "snapshot", "Continue to provision snapshot")}
    </article>`;
}

function snapshot() {
  return `
    <article class="form-section" id="snapshot">
      <p class="eyebrow">Part 1B · Your school profile</p>
      <h1>Current provision snapshot</h1>
      <p class="section-subtitle">
        Choose the description that feels closest to your setting now.
      </p>

      <div class="info">
        <strong>How this part is used</strong>
        <p>
          This section is a short self-reflection on where you think your school is currently.
          It helps assessors understand how you see your own provision before they read the main
          assessment, and gives you a chance to reflect on your current strengths and areas that are less developed.
        </p>
        <p>
          In future, this information could be saved and updated when you reapply, rather than completed from scratch.
        </p>
      </div>

      <div class="support">
        <strong>How to answer</strong>
        <p>
          Choose the statement that is closest to your current reality, even if none is a perfect fit.
          There is no single right answer and what each response looks like in practice will vary between schools.
        </p>
      </div>

      ${snapshotQuestions.map((question, index) => `
        <div class="snapshot">
          <h3>${index + 1}. ${question[0]}</h3>
          <div class="options">
            ${question[1].map((option, optionIndex) => `
              <label>
                <input type="radio" name="snapshot-${index}" value="${optionIndex}">
                <span>${option}</span>
              </label>
            `).join("")}
          </div>
        </div>
      `).join("")}

      ${navButtons("school-record", "criteria-intro", "Continue to assessment")}
    </article>`;
}

function criteriaIntro() {
  return `
    <article class="form-section" id="criteria-intro">
      <p class="eyebrow">Part 2A · Your assessment</p>
      <h1>Your practice across the Artsmark criteria</h1>
      <p class="section-subtitle">
        Reflect on how each area shows up in your school: what you do, how embedded it is,
        where there are strengths or challenges, and what tells you it is making a difference.
      </p>

      <div class="info">
        <strong>How this part is used</strong>
        <p>
          This part of the assessment gives you a chance to speak directly to the Artsmark criteria that make up the award.
        </p>
        <p>
          Assessors want to understand how this shows up in your school: the examples you think are most significant,
          how widely or consistently practice is experienced, how embedded it is, and where there are particular
          challenges or areas that are still developing.
        </p>
        <p>
          You are not expected to be equally strong across every criterion. Schools will have different patterns
          of strengths and areas for development.
        </p>
      </div>

      <p>
        The eight Artsmark criteria are grouped into four sections so that you can show how related areas of practice connect,
        without having to speak to every single criterion separately.
      </p>

      <div class="criteria-grid">
        ${criteria.map(item => `
          <div class="criteria-card">
            <strong>${item.title}</strong>
            <div class="criteria-names">Criteria: ${item.criteria}</div>
            <p>${item.blurb}</p>
          </div>
        `).join("")}
      </div>

      <div class="section-context">
        <h2>For each section, we ask you to do two things</h2>
        <p>
          <strong>1. Tell us what this looks like in your school</strong><br>
          Share a few examples of how this area currently operates in your setting. Bullet points are welcome.
        </p>
        <p>
          <strong>2. Reflect on what this tells us about your practice</strong><br>
          Tell us what feels significant about those examples such as how embedded or widespread the practice is,
          what difference it is making, where there are strengths or challenges, and how you know.
        </p>
      </div>

      <div class="support">
        <strong>What makes a useful answer?</strong>
        <p>
          Useful answers are specific and grounded in your school’s actual practice. Tell us what happened,
          who experienced it, how widely it applies, what changed and how you know. It is fine to acknowledge
          variation, limits or things that are still developing.
        </p>
        <p>
          You might bring your response to life by referring to a school improvement plan or strategic priority,
          a curriculum change, a regular process or review, pupil voice, participation or progression information,
          staff or partner feedback, pupil work or activity, observations or changes over time.
        </p>
        <p>
          You do not need to upload this material. Where useful or relevant, refer to it and explain what it helped you understand.
        </p>
      </div>

      ${navButtons("snapshot", "criteria-purpose", "Start criterion sections")}
    </article>`;
}

function criterionSection(item, index) {
  const previous = index === 0
    ? "criteria-intro"
    : `criteria-${criteria[index - 1].id}`;

  const next = index === criteria.length - 1
    ? "voice"
    : `criteria-${criteria[index + 1].id}`;

  return `
    <article class="form-section" id="criteria-${item.id}">
      <p class="eyebrow">Part 2A · Section ${index + 1} of 4</p>
      <h1>${item.title}</h1>
      <p class="section-subtitle">${item.blurb}</p>

      <div class="info">
        <strong>Artsmark criteria in this section</strong>
        <p>${item.criteria}</p>
      </div>

      ${textQuestion(
        `${item.id}-example`,
        item.question,
        item.prompt,
        300,
        10
      )}

      ${textQuestion(
        `${item.id}-reflection`,
        "What does this say about your practice?",
        item.reflection,
        300,
        10
      )}

      ${navButtons(
        previous,
        next,
        index === criteria.length - 1 ? "Continue to school voice" : "Continue"
      )}
    </article>`;
}

function voice() {
  return `
    <article class="form-section" id="voice">
      <p class="eyebrow">Part 2B · Your assessment</p>
      <h1>School voice and distinctiveness</h1>
      <p class="section-subtitle">
        Use this space to connect the dots and show what arts and culture mean in your school as a whole.
      </p>

      <div class="info">
        <strong>How this part is used</strong>
        <p>
          This section builds on your responses to the Artsmark criteria by giving you space to connect the dots
          and show what arts and culture mean in your school as a whole.
        </p>
        <p>
          It helps assessors understand what is distinctive about your setting, where arts and culture bring
          particular joy or meaning, how your provision connects beyond the school, and what you most want them
          to understand about your practice.
        </p>
      </div>

      <div class="support">
        <strong>What makes a useful answer?</strong>
        <p>
          Use this space to add what may not have come through in the criterion-linked questions. You might want to
          highlight something you are especially proud of, what feels distinctive, where children and young people
          experience joy, creativity or freedom, your contribution to the wider school community, an area you have
          worked hard to strengthen, or where you would like to take your provision next.
        </p>
        <p>
          You do not need to repeat examples already given unless they help tell a bigger story.
        </p>
      </div>

      ${textQuestion(
        "distinctive",
        "1. What is distinctive about arts and culture in your school?",
        "Tell us what matters most about arts and culture in your school. You might include how different parts of your provision connect, what feels distinctive about the experience of children and young people, what your setting enables or constrains, and what you most want the assessor to understand.",
        300,
        10
      )}

      ${textQuestion(
        "proud",
        "2. What are you proudest of right now?",
        "Tell us about something you feel especially proud of in your current provision. This could relate to children and young people’s experience, something your school sustains particularly well, something you have worked hard to strengthen, or something you contribute beyond the school.",
        300,
        10
      )}

      ${textQuestion(
        "next",
        "3. Where would you like to take your arts and cultural provision next?",
        "Tell us what you would most like to strengthen, develop or explore, and how you think you might get there. You might reflect on what you could build on, who you may need to involve, what you may need to do differently, or any support or conditions that would help make this possible.",
        500,
        12
      )}

      ${navButtons("criteria-capability", "materials", "Continue to optional material")}
    </article>`;
}

function materials() {
  return `
    <article class="form-section" id="materials">
      <p class="eyebrow">Part 3 · Optional</p>
      <h1>Bring your application to life</h1>
      <p class="section-subtitle">
        Share something that is difficult to communicate through writing alone.
      </p>

      <div class="info">
        <strong>How this part is used</strong>
        <p>
          This section is optional and gives you a chance to share something that is difficult to communicate through writing alone.
          Assessors will review anything you choose to include alongside the rest of your application, to help them understand what
          your provision looks and feels like in practice.
        </p>
        <p>
          Schools may choose to share very different kinds of material, or not to use this section at all. For that reason,
          assessors will not compare applications based on the amount of material provided or its production quality.
        </p>
        <p>
          The main basis for the award will remain the information you provide in the assessment. Anything shared here is intended
          to add context, texture and a more concrete sense of your school.
        </p>
      </div>

      <p class="instruction">
        For testing, imagine you could share up to three items. Possible formats might include images, pupil work,
        a document, a webpage, audio or a short video link.
      </p>

      ${[1, 2, 3].map(index => `
        <div class="question">
          <h3>Supporting item ${index}</h3>
          <div class="field-grid">
            <label>
              What are you sharing?
              <input type="text" name="material-${index}-type">
            </label>
            <label>
              File / link (for testing)
              <input type="url" name="material-${index}-link">
            </label>
          </div>

          ${textQuestion(
            `material-${index}-note`,
            "What would you like the assessor to notice or understand from this?",
            "A sentence or two is enough.",
            50,
            4
          )}
        </div>
      `).join("")}

      <label class="checkbox">
        <input type="checkbox" name="sharing-permission">
        <span>
          If Artsmark thought something I shared could be useful or inspiring to other schools,
          I would be happy to be contacted for permission to share it more widely.
        </span>
      </label>

      ${navButtons("voice", "review", "Review application")}
    </article>`;
}

function review() {
  const items = [
    "I have checked that the school profile is factually accurate and up to date.",
    "I understand that the current provision snapshot is contextual and does not calculate an award level.",
    "I have addressed each of the eight Artsmark criteria through the four assessment sections.",
    "I have used specific examples rather than relying mainly on broad statements.",
    "For important claims, I have explained how we know and what the relevant information showed us.",
    "I have been clear where provision varies across groups, phases or subjects where that matters.",
    "I have used the school voice section to add meaning and distinctiveness rather than repeat earlier answers.",
    "Any optional supporting material is something we have permission to share with Artsmark.",
    "I am satisfied that the application is an accurate and authentic account of our current provision."
  ];

  return `
    <article class="form-section" id="review">
      <p class="eyebrow">Before you submit</p>
      <h1>Review your application</h1>
      <p class="section-subtitle">Use this checklist to review the application as a whole.</p>

      ${items.map((item, index) => `
        <label class="checkbox">
          <input type="checkbox" name="review-${index}">
          <span>${item}</span>
        </label>
      `).join("")}

      <div class="testing-note">
        <strong>For testing purposes</strong>
        <p>
          As you review this draft, please note anything that feels unclear, repetitive,
          difficult to answer, too burdensome, missing or too leading.
        </p>
      </div>

      ${navButtons("materials", null, "Finish prototype")}
    </article>`;
}

function buildForm() {
  const formBody = document.querySelector("#formBody");
  const nav = document.querySelector("#nav");

  formBody.innerHTML =
    schoolRecord() +
    snapshot() +
    criteriaIntro() +
    criteria.map(criterionSection).join("") +
    voice() +
    materials() +
    review();

  nav.innerHTML = navItems
    .map(([id, label]) => `<button data-go="${id}">${label}</button>`)
    .join("");
}

function buildOverview() {
  const overviewCards = document.querySelector("#overviewCards");

  overviewCards.innerHTML = overview
    .map(([number, title, description, id]) => `
      <button class="overview-card" data-go="${id}">
        <span class="number">${number}</span>
        <span>
          <strong>${title}</strong>
          <small>${description}</small>
        </span>
        <span class="status" data-status="${id}">Not started</span>
      </button>
    `)
    .join("");

  const optionalStatus = document.querySelector('[data-status="materials"]');
  if (optionalStatus) {
    optionalStatus.textContent = "Optional";
  }
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const screen = document.querySelector(`#${id}`);
  if (screen) {
    screen.classList.add("active");
  }

  window.scrollTo(0, 0);
}

function showSection(id) {
  showScreen("form");

  document.querySelectorAll(".form-section").forEach(section => {
    section.classList.remove("active");
  });

  const section = document.querySelector(`#${id}`);
  if (section) {
    section.classList.add("active");
  }

  document.querySelectorAll(".form-nav button").forEach(button => {
    button.classList.toggle("active", button.dataset.go === id);
  });

  window.scrollTo(0, 0);
}

function save() {
  const data = {};

  document.querySelectorAll("#form input, #form textarea").forEach(element => {
    if (element.type === "radio") {
      if (element.checked) data[element.name] = element.value;
    } else if (element.type === "checkbox") {
      data[element.name] = element.checked;
    } else {
      data[element.name] = element.value;
    }
  });

  localStorage.setItem("artsmark-test", JSON.stringify(data));
  updateProgress();
}

function restore() {
  let data = {};

  try {
    data = JSON.parse(localStorage.getItem("artsmark-test") || "{}");
  } catch {
    data = {};
  }

  document.querySelectorAll("#form input, #form textarea").forEach(element => {
    if (!(element.name in data)) return;

    if (element.type === "radio") {
      element.checked = String(element.value) === String(data[element.name]);
    } else if (element.type === "checkbox") {
      element.checked = Boolean(data[element.name]);
    } else {
      element.value = data[element.name];
    }
  });

  updateCounts();
  updateProgress();
}

function updateCounts() {
  document.querySelectorAll("textarea[data-limit]").forEach(textarea => {
    const count = wordCount(textarea.value);
    const limit = Number(textarea.dataset.limit);
    const output = textarea.nextElementSibling;

    if (output && output.classList.contains("word-count")) {
      output.textContent = `${count} / ${limit} words`;
      output.classList.toggle("over", count > limit);
    }
  });
}

function updateProgress() {
  const requiredTextareas = [
    ...document.querySelectorAll("#form textarea")
  ];

  const snapshotResponses = snapshotQuestions.map((_, index) =>
    [...document.querySelectorAll(`[name="snapshot-${index}"]`)]
      .some(input => input.checked)
  );

  const completed =
    requiredTextareas.filter(textarea => textarea.value.trim()).length +
    snapshotResponses.filter(Boolean).length;

  const total = requiredTextareas.length + snapshotResponses.length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;

  document.querySelector("#progressBar").style.width = `${percentage}%`;
  document.querySelector("#progressLabel").textContent = `${percentage}%`;
}

const feedbackRows = [
  ["Values and Ethos", "Strong",
    "Creativity is visible in the school improvement plan, assemblies and curriculum priorities, and staff can explain why arts and culture matter in this community.",
    "Keep making the link between these commitments and the experiences of different groups of children and young people."],
  ["Leadership", "Strong",
    "Senior leaders provide time, budget and visible sponsorship; arts priorities are reviewed rather than sitting solely with one lead.",
    "Spread ownership further so leadership remains resilient through staffing or role changes."],
  ["Equality, Diversity and Inclusion", "Emerging",
    "Your curriculum examples show thoughtful representation and targeted access, with some strong individual responses to barriers.",
    "Use participation information and voice more routinely to identify who is missing out and whether changes are working."],
  ["Children and Young People", "Strong",
    "Children and young people influence clubs, performances and the annual creative week, and there are examples of them leading activity.",
    "Extend meaningful agency beyond the most engaged groups and make it more consistent across year groups."],
  ["Curriculum Design and Delivery", "Strong",
    "Progression in art and music is clearly planned, with growing coherence in drama and cross-curricular creative work.",
    "Continue building consistency in subject knowledge and progression where provision is newer or less specialist."],
  ["Range of Offer", "Strong",
    "The combination of curriculum, clubs, visits, live performance and making gives children and young people a broad cultural entitlement.",
    "Consider where the offer remains narrower — particularly dance and digital practice — and whether this matters for your context."],
  ["Continuing Professional Development", "Emerging",
    "Peer sharing and recent external training have increased confidence, particularly in music and visual arts.",
    "Move from individual opportunities to a clearer CPD plan linked to the areas of provision you most want to strengthen."],
  ["Cultural Collaborations", "Emerging",
    "Partnerships with the local theatre and gallery have created memorable experiences and contributed specialist expertise.",
    "Develop fewer, deeper relationships with clearer shared aims and a stronger sense of what changes because of the partnership."]
];

function buildFeedback() {
  const criteriaTable = document.querySelector("#criteriaTable");
  const nextSteps = document.querySelector("#nextSteps");

  criteriaTable.innerHTML = `
    <thead>
      <tr>
        <th>Criterion</th>
        <th>Status</th>
        <th>What stood out</th>
        <th>What to build on</th>
      </tr>
    </thead>
    <tbody>
      ${feedbackRows.map(row => `
        <tr>
          <td><strong>${row[0]}</strong></td>
          <td><span class="pill pill--${row[1].toLowerCase()}">${row[1]}</span></td>
          <td>${row[2]}</td>
          <td>${row[3]}</td>
        </tr>
      `).join("")}
    </tbody>
  `;

  const steps = [
    [
      "Make equity and participation more visible",
      "Build a simple, repeatable way to look at who participates in different arts and cultural opportunities and whose voices are less visible. Combine participation information with pupil voice, then use what you learn to make targeted changes.",
      "This would strengthen Equality, Diversity and Inclusion while also giving you better evidence of the reach and impact of your offer."
    ],
    [
      "Turn staff development into a shared capability plan",
      "Identify the parts of the curriculum where staff confidence or subject knowledge is least secure and plan CPD around those needs. Use internal expertise alongside external support, and revisit whether practice has changed.",
      "This would reduce reliance on a small number of confident staff and help make strong provision more consistent."
    ],
    [
      "Deepen a small number of cultural partnerships",
      "Build on the theatre and gallery relationships by agreeing clearer shared aims, longer-term activity and what each partner hopes children, staff or the wider community will gain.",
      "This would help move collaboration from access to sustained development and make its contribution easier to understand."
    ]
  ];

  nextSteps.innerHTML = steps
    .map((step, index) => `
      <div class="next-step">
        <span>${index + 1}</span>
        <div>
          <h3>${step[0]}</h3>
          <p>${step[1]}</p>
        </div>
      </div>
    `)
    .join("");

  drawRadar();
}

function drawRadar() {
  const labels = [
    "Values & Ethos",
    "Leadership",
    "EDI",
    "Children & Young People",
    "Curriculum",
    "Range of Offer",
    "CPD",
    "Collaborations"
  ];

  const values = [4, 4, 2.7, 3.6, 3.8, 3.8, 2.7, 2.8];
  const cx = 240;
  const cy = 220;
  const radius = 140;
  const count = labels.length;

  function point(index, scale) {
    const angle = -Math.PI / 2 + index * Math.PI * 2 / count;
    return [
      cx + Math.cos(angle) * radius * scale,
      cy + Math.sin(angle) * radius * scale
    ];
  }

  let svg = `<svg viewBox="0 0 480 440" role="img" aria-label="Illustrative Artsmark criteria profile">`;

  [0.25, 0.5, 0.75, 1].forEach(scale => {
    svg += `
      <polygon
        points="${labels.map((_, index) => point(index, scale).join(",")).join(" ")}"
        fill="none"
        stroke="#d5dcdf"
      />`;
  });

  labels.forEach((label, index) => {
    const edge = point(index, 1);
    const labelPoint = point(index, 1.28);

    svg += `
      <line
        x1="${cx}"
        y1="${cy}"
        x2="${edge[0]}"
        y2="${edge[1]}"
        stroke="#d5dcdf"
      />`;

    svg += `
      <text
        x="${labelPoint[0]}"
        y="${labelPoint[1]}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="10"
        fill="#52626c"
      >${label}</text>`;
  });

  const dataPoints = values.map((value, index) => point(index, value / 4));

  svg += `
    <polygon
      points="${dataPoints.map(point => point.join(",")).join(" ")}"
      fill="rgba(182,94,67,.18)"
      stroke="#b65e43"
      stroke-width="3"
    />`;

  dataPoints.forEach(pointValue => {
    svg += `<circle cx="${pointValue[0]}" cy="${pointValue[1]}" r="4" fill="#b65e43" />`;
  });

  svg += `</svg>`;

  document.querySelector("#radar").innerHTML = svg;
}

document.addEventListener("DOMContentLoaded", () => {
  buildOverview();
  buildForm();
  buildFeedback();
  restore();

  document.body.addEventListener("click", event => {
    const goButton = event.target.closest("[data-go]");

    if (goButton) {
      event.preventDefault();
      showSection(goButton.dataset.go);
    }

    const finishButton = event.target.closest("[data-finish]");

    if (finishButton) {
      event.preventDefault();
      save();
      showScreen("landing");
    }
  });

  document.querySelector("#home").addEventListener("click", () => {
    showScreen("landing");
  });

  document.querySelector("#feedbackHome").addEventListener("click", () => {
    showScreen("landing");
  });

  document.querySelector("#viewFeedback").addEventListener("click", () => {
    showScreen("feedback");
  });

  document.body.addEventListener("input", event => {
    if (event.target.matches("input, textarea")) {
      updateCounts();
      save();
    }
  });

  document.body.addEventListener("change", event => {
    if (event.target.matches("input, textarea")) {
      save();
    }
  });
});
