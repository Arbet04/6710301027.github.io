// ========================
// 1) Questions (EN) - original
// ========================
const EN_Q = [
  {
    id: 1,
    text: "The main memory accommodates __________",
    choices: { A: "all of the mentioned", B: "cpu", C: "operating system", D: "user processes" },
    answer: "C",
    explanation: "Main memory holds the OS and active programs/data while running.",
  },
  {
    id: 2,
    text: "The instruction being executed, must be in __________",
    choices: { A: "physical memory", B: "logical memory", C: "none of the mentioned", D: "physical & logical memory" },
    answer: "A",
    explanation: "CPU executes instructions that are loaded in RAM (physical memory).",
  },
  {
    id: 3,
    text: "By using the specific system call, we can __________",
    choices: { A: "open the file", B: "read the file", C: "all of the mentioned", D: "write into the file" },
    answer: "C",
    explanation: "File-related system calls include open/read/write, etc.",
  },
  {
    id: 4,
    text: "The relocation register helps in __________",
    choices: {
      A: "none of the mentioned",
      B: "to protect the address spaces of processes",
      C: "a different address space to processes",
      D: "providing more address space to processes",
    },
    answer: "B",
    explanation: "Used with limit register to keep a process within its memory bounds (protection).",
  },
  {
    id: 5,
    text: "What will happens when a process closes the file?",
    choices: {
      A: "all of the mentioned",
      B: "none of the mentioned",
      C: "per-process table entry is not removed",
      D: "system wide entry’s open count is decremented",
    },
    answer: "D",
    explanation: "Closing a file decreases the system-wide open count; per-process entry is removed.",
  },
  {
    id: 6,
    text: "The technique of duplicating every disk is known as __________",
    choices: { A: "shadowing", B: "all of the mentioned", C: "mirroring", D: "redundancy" },
    answer: "C",
    explanation: "Mirroring duplicates data on another disk (e.g., RAID 1).",
  },
  {
    id: 7,
    text: "Program always deals with __________",
    choices: { A: "physical address", B: "relative address", C: "absolute address", D: "logical address" },
    answer: "D",
    explanation: "Programs use logical (virtual) addresses; hardware translates to physical.",
  },
  {
    id: 8,
    text: "RAID level ____ spreads parity and data among all N+1 disks rather than storing data in N disks and parity in 1.",
    choices: { A: "3", B: "5", C: "6", D: "4" },
    answer: "B",
    explanation: "RAID 5 distributes parity across disks.",
  },
  {
    id: 9,
    text: "When memory is divided into several fixed sized partitions, each partition may contain __________",
    choices: {
      A: "multiple processes at once",
      B: "at least one process",
      C: "none of the mentioned",
      D: "exactly one process",
    },
    answer: "D",
    explanation: "In fixed partitioning, each partition holds exactly one process.",
  },
  {
    id: 10,
    text: "Which one of the following explains the sequential file access method?",
    choices: {
      A: "random access according to the given byte number",
      B: "read/write sequentially by record",
      C: "read bytes one at a time, in order",
      D: "read/write randomly by record",
    },
    answer: "C",
    explanation: "Sequential access reads data in order from the beginning.",
  },
  {
    id: 11,
    text: "The percentage of times a page number is found in the TLB is known as __________",
    choices: { A: "hit ratio", B: "miss ratio", C: "none of the mentioned", D: "miss percent" },
    answer: "A",
    explanation: "TLB hit ratio = fraction of address translations found in the TLB.",
  },
  {
    id: 12,
    text: "File attributes consist of __________",
    choices: { A: "identifier", B: "all of the mentioned", C: "name", D: "type" },
    answer: "B",
    explanation: "Attributes can include name, identifier, type, size, timestamps, permissions, etc.",
  },
  {
    id: 13,
    text: "Operating System maintains the page table for __________",
    choices: { A: "each instruction", B: "each thread", C: "each process", D: "each address" },
    answer: "C",
    explanation: "Page tables are per process (per address space).",
  },
  {
    id: 14,
    text: "For large files, when the index itself becomes too large to be kept in memory?",
    choices: {
      A: "index is called",
      B: "all of the mentioned",
      C: "an index is created for the index file",
      D: "secondary index files are created",
    },
    answer: "C",
    explanation: "Use multi-level indexing: create an index of the index.",
  },
  {
    id: 15,
    text: "Paging increases the _____ time.",
    choices: { A: "execution", B: "all of the mentioned", C: "context–switch", D: "waiting" },
    answer: "C",
    explanation: "Paging adds overhead to context switching due to page-table/TLB effects.",
  },
  {
    id: 16,
    text: "Which one of the following is the address generated by CPU?",
    choices: { A: "physical address", B: "absolute address", C: "none of the mentioned", D: "logical address" },
    answer: "D",
    explanation: "CPU generates logical addresses; MMU maps to physical.",
  },
  {
    id: 17,
    text: "Mapping of network file system protocol to local file system is done by __________",
    choices: { A: "network file system", B: "remote mirror", C: "volume manager", D: "local file system" },
    answer: "A",
    explanation: "NFS maps remote file operations to the local VFS/file system interface.",
  },
  {
    id: 18,
    text: "Which of the following are the types of Path names?",
    choices: { A: "global & relative", B: "relative & local", C: "absolute & relative", D: "local & global" },
    answer: "C",
    explanation: "Two main types: absolute and relative paths.",
  },
  {
    id: 19,
    text: "The first fit, best fit and worst fit are strategies to select a _____",
    choices: {
      A: "processor to run the next process",
      B: "all of the mentioned",
      C: "free hole from a set of available holes",
      D: "process from a queue to put in memory",
    },
    answer: "C",
    explanation: "They choose a free memory hole for allocation.",
  },
  {
    id: 20,
    text:
      "For 3 page frames, the following is the reference string:"\n 
      "7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1\n\n" 
      "How many page faults does the LRU page replacement algorithm produce?",
    choices: { A: "15", B: "12", C: "11", D: "10" },
    answer: "B",
    explanation: "For 3 frames, LRU produces 12 page faults for this reference string.",
  },
];

// ========================
// 2) Questions (TH) - translated 20/20
// ========================
const TH_Q = [
  {
    id: 1,
    text: "หน่วยความจำหลัก (Main memory) ใช้เก็บ/รองรับ __________",
    choices: { A: "ทั้งหมดที่กล่าวมา", B: "CPU", C: "ระบบปฏิบัติการ", D: "โปรเซสของผู้ใช้" },
    answer: "C",
    explanation: "แนวข้อสอบนี้มักเน้นว่า Main memory รองรับ OS และโปรแกรมที่กำลังทำงานอยู่",
  },
  {
    id: 2,
    text: "คำสั่งที่กำลังถูกประมวลผล ต้องอยู่ใน __________",
    choices: {
      A: "หน่วยความจำจริง (Physical memory / RAM)",
      B: "หน่วยความจำตรรกะ (Logical memory)",
      C: "ไม่มีข้อใดถูก",
      D: "ทั้ง Physical และ Logical",
    },
    answer: "A",
    explanation: "CPU จะ execute ได้ ต้องมีคำสั่งอยู่ใน RAM ก่อน",
  },
  {
    id: 3,
    text: "โดยใช้ system call ที่เหมาะสม เราสามารถ __________",
    choices: { A: "เปิดไฟล์", B: "อ่านไฟล์", C: "ทั้งหมดที่กล่าวมา", D: "เขียนลงไฟล์" },
    answer: "C",
    explanation: "system call ฝั่งไฟล์ทำได้ทั้ง open / read / write เป็นต้น",
  },
  {
    id: 4,
    text: "รีจิสเตอร์ relocation ช่วยในเรื่อง __________",
    choices: {
      A: "ไม่มีข้อใดถูก",
      B: "ป้องกัน/คุ้มครองพื้นที่ address ของโปรเซส",
      C: "ให้ address space ที่แตกต่างแก่โปรเซส",
      D: "เพิ่ม address space ให้โปรเซส",
    },
    answer: "B",
    explanation: "มักใช้ร่วมกับ limit register เพื่อกันไม่ให้โปรเซสออกนอกขอบเขตหน่วยความจำของตัวเอง",
  },
  {
    id: 5,
    text: "จะเกิดอะไรขึ้นเมื่อโปรเซสปิดไฟล์ (close file)?",
    choices: {
      A: "ทั้งหมดที่กล่าวมา",
      B: "ไม่มีข้อใดถูก",
      C: "รายการในตารางต่อโปรเซส (per-process table) จะไม่ถูกลบ",
      D: "ค่า open count ในตารางระดับระบบ (system-wide) จะลดลง",
    },
    answer: "D",
    explanation: "close แล้ว open count ของไฟล์ในระบบจะลดลง (และ entry ของโปรเซสมักถูกลบออก)",
  },
  {
    id: 6,
    text: "เทคนิคการทำสำเนาข้อมูลของดิสก์ทุกลูก เรียกว่า __________",
    choices: { A: "shadowing", B: "ทั้งหมดที่กล่าวมา", C: "mirroring", D: "redundancy" },
    answer: "C",
    explanation: "mirroring คือการทำข้อมูลซ้ำบนดิสก์อีกลูก (เช่น RAID 1)",
  },
  {
    id: 7,
    text: "โปรแกรมโดยทั่วไปจะทำงานกับ __________",
    choices: { A: "physical address", B: "relative address", C: "absolute address", D: "logical address" },
    answer: "D",
    explanation: "โปรแกรมมองเป็น logical/virtual address แล้วให้ MMU แปลงเป็น physical address",
  },
  {
    id: 8,
    text: "RAID ระดับ ____ จะกระจายทั้งข้อมูลและ parity ไปยังดิสก์ทั้งหมด N+1 ลูก แทนการเก็บข้อมูลไว้ N ลูก และ parity ไว้ 1 ลูก",
    choices: { A: "3", B: "5", C: "6", D: "4" },
    answer: "B",
    explanation: "RAID 5 กระจาย parity ไปตามดิสก์ต่าง ๆ",
  },
  {
    id: 9,
    text: "เมื่อแบ่งหน่วยความจำเป็นพาร์ทิชันขนาดคงที่หลายส่วน แต่ละพาร์ทิชันจะมีได้ __________",
    choices: {
      A: "หลายโปรเซสพร้อมกัน",
      B: "อย่างน้อย 1 โปรเซส",
      C: "ไม่มีข้อใดถูก",
      D: "ได้พอดี 1 โปรเซส",
    },
    answer: "D",
    explanation: "Fixed partitioning แบบคลาสสิก: 1 พาร์ทิชัน = 1 โปรเซส",
  },
  {
    id: 10,
    text: "ข้อใดอธิบายการเข้าถึงไฟล์แบบลำดับ (sequential access) ได้ถูกต้อง",
    choices: {
      A: "เข้าถึงแบบสุ่มตามหมายเลขไบต์ที่กำหนด",
      B: "อ่าน/เขียนทีละเรคคอร์ดแบบลำดับ",
      C: "อ่านไบต์ทีละตัวตามลำดับ",
      D: "อ่าน/เขียนแบบสุ่มตามเรคคอร์ด",
    },
    answer: "C",
    explanation: "Sequential access คืออ่านไปตามลำดับจากต้นไปท้าย",
  },
  {
    id: 11,
    text: "เปอร์เซ็นต์ของครั้งที่ค้นหา page number แล้วพบใน TLB เรียกว่า __________",
    choices: { A: "hit ratio", B: "miss ratio", C: "ไม่มีข้อใดถูก", D: "miss percent" },
    answer: "A",
    explanation: "เจอใน TLB = hit → สัดส่วนเรียก hit ratio",
  },
  {
    id: 12,
    text: "File attributes (คุณสมบัติของไฟล์) ประกอบด้วย __________",
    choices: { A: "identifier", B: "ทั้งหมดที่กล่าวมา", C: "name", D: "type" },
    answer: "B",
    explanation: "attribute ของไฟล์มีได้หลายอย่าง เช่น ชื่อ ชนิด รหัส ขนาด เวลาแก้ไข สิทธิ์ เป็นต้น",
  },
  {
    id: 13,
    text: "ระบบปฏิบัติการจะดูแล page table สำหรับ __________",
    choices: { A: "แต่ละคำสั่ง", B: "แต่ละเธรด", C: "แต่ละโปรเซส", D: "แต่ละ address" },
    answer: "C",
    explanation: "โดยทั่วไป page table จะผูกกับ process (address space ของ process)",
  },
  {
    id: 14,
    text: "สำหรับไฟล์ขนาดใหญ่ เมื่อ index ใหญ่เกินกว่าจะเก็บไว้ในหน่วยความจำได้ จะทำอย่างไร",
    choices: {
      A: "เรียก index ว่า index file",
      B: "ทั้งหมดที่กล่าวมา",
      C: "สร้าง index ให้กับ index file (index ซ้อน index)",
      D: "สร้าง secondary index files",
    },
    answer: "C",
    explanation: "แนวคิด multi-level index: ทำ index ของ index เพื่อให้จัดการได้",
  },
  {
    id: 15,
    text: "Paging จะเพิ่มเวลาในส่วน _____",
    choices: { A: "execution", B: "ทั้งหมดที่กล่าวมา", C: "context–switch", D: "waiting" },
    answer: "C",
    explanation: "มี overhead เพิ่มเกี่ยวกับการสลับบริบท/การจัดการ page table และ TLB",
  },
  {
    id: 16,
    text: "ข้อใดคือ address ที่ CPU สร้างขึ้น",
    choices: { A: "physical address", B: "absolute address", C: "ไม่มีข้อใดถูก", D: "logical address" },
    answer: "D",
    explanation: "CPU สร้าง logical address แล้ว MMU แปลงเป็น physical address",
  },
  {
    id: 17,
    text: "การแมป (mapping) โปรโตคอลของ Network File System ให้ใช้งานกับ local file system ทำโดย __________",
    choices: { A: "network file system", B: "remote mirror", C: "volume manager", D: "local file system" },
    answer: "A",
    explanation: "NFS ทำให้การเรียกใช้ไฟล์บนเครือข่ายดูเหมือนไฟล์ในเครื่อง",
  },
  {
    id: 18,
    text: "ประเภทของ Path name มีอะไรบ้าง",
    choices: { A: "global & relative", B: "relative & local", C: "absolute & relative", D: "local & global" },
    answer: "C",
    explanation: "Path name มี 2 แบบหลัก: absolute และ relative",
  },
  {
    id: 19,
    text: "First fit, best fit และ worst fit เป็นกลยุทธ์ในการเลือก __________",
    choices: {
      A: "โปรเซสเซอร์ที่จะรันโปรเซสถัดไป",
      B: "ทั้งหมดที่กล่าวมา",
      C: "ช่องว่าง (free hole) จากชุดของช่องว่างที่มี",
      D: "โปรเซสจากคิวเพื่อใส่เข้าหน่วยความจำ",
    },
    answer: "C",
    explanation: "เป็นวิธีเลือก memory hole สำหรับการจัดสรรหน่วยความจำ",
  },
  {
    id: 20,
    text:
      "สำหรับ page frame 3 ช่อง มี reference string:\n" 
      "7 0 1 2 0 3 0 4 2 3 0 3 2 1 2 0 1 7 0 1\n\n" 
      "อัลกอริทึม LRU จะเกิด page fault กี่ครั้ง",
    choices: { A: "15", B: "12", C: "11", D: "10" },
    answer: "B",
    explanation: "เมื่อมี 3 เฟรม ค่า page faults ของ LRU สำหรับชุดนี้ = 12",
  },
];

// ========================
// 3) UI strings (TH/EN)
// ========================
const UI = {
  th: {
    practice: "โหมดฝึก (ตอบแล้วรู้ผล)",
    restart: "เริ่มใหม่",
    submit: "Submit",
    needAll: "กรุณาตอบให้ครบทุกข้อก่อนกด Submit",
    score: (s, n) => `คะแนนของคุณ: ${s} / ${n}`,
    retry: "กด “เริ่มใหม่” เพื่อทำใหม่",
    explain: (x) => `อธิบาย: ${x || "-"}`,
    qPrefix: (i) => `ข้อ ${i}: `,
  },
  en: {
    practice: "Practice mode (instant feedback)",
    restart: "Restart",
    submit: "Submit",
    needAll: "Please answer every question before submitting.",
    score: (s, n) => `Your score: ${s} / ${n}`,
    retry: "Click “Restart” to try again",
    explain: (x) => `Explanation: ${x || "-"}`,
    qPrefix: (i) => `Q${i}: `,
  },
};

function toMap(arr) {
  const m = new Map();
  arr.forEach((q) => m.set(q.id, q));
  return m;
}
const EN_MAP = toMap(EN_Q);
const TH_MAP = toMap(TH_Q);

function getQ(currentLang, id) {
  const m = currentLang === "th" ? TH_MAP : EN_MAP;
  return m.get(id) || EN_MAP.get(id);
}

// ========================
// 4) State
// ========================

// ✅ EN is the default language
let lang = "en";

let practiceMode = false;

let shuffledIds = []; // shuffled order by question id
let answers = new Map(); // id -> chosenKey
let lockedQ = new Set(); // locked in practice mode
let lockedAll = false; // after submit

// ========================
// 5) Elements
// ========================
const quizEl = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const summaryEl = document.getElementById("summary");
const langBtn = document.getElementById("langBtn");
const practiceToggle = document.getElementById("practiceToggle");
const practiceLabel = document.getElementById("practiceLabel");

// ========================
// 6) Helpers
// ========================
function t(key, ...args) {
  const v = UI[lang][key];
  return typeof v === "function" ? v(...args) : v;
}
function shuffle(arr) {
  return arr
    .map((v) => ({ v, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map((x) => x.v);
}
function shuffleChoices(q) {
  // (3) shuffle choices order while keeping A/B/C/D keys
  return shuffle(Object.entries(q.choices)); // [ [key,label], ... ]
}

// ========================
// 7) Render
// ========================
function render() {
  quizEl.innerHTML = "";
  summaryEl.hidden = true;
  submitBtn.disabled = lockedAll;

  // labels/buttons
  if (practiceLabel) practiceLabel.textContent = t("practice");
  if (langBtn) langBtn.textContent = lang === "th" ? "EN" : "TH"; // show other language
  if (restartBtn) restartBtn.textContent = t("restart");
  if (submitBtn) submitBtn.textContent = t("submit");
  if (practiceToggle) practiceToggle.checked = practiceMode;

  // first time shuffle
  if (shuffledIds.length === 0) {
    shuffledIds = shuffle(EN_Q.map((q) => q.id));
  }

  shuffledIds.forEach((id, idx) => {
    const q = getQ(lang, id);

    const card = document.createElement("div");
    card.className = "qcard";
    card.dataset.qid = id;

    const title = document.createElement("p");
    title.className = "qtitle";
    title.textContent = t("qPrefix", idx + 1) + q.text;
    card.appendChild(title);

    const opts = document.createElement("div");
    opts.className = "options";

    const entries = shuffleChoices(q);
    entries.forEach(([key, label]) => {
      const opt = document.createElement("label");
      opt.className = "option";
      opt.dataset.key = key;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${id}`;
      input.value = key;

      if (answers.get(id) === key) input.checked = true;
      if (lockedAll || (practiceMode && lockedQ.has(id))) input.disabled = true;

      const span = document.createElement("span");
      span.textContent = `${key}. ${label}`;

      opt.appendChild(input);
      opt.appendChild(span);
      opts.appendChild(opt);
    });

    card.appendChild(opts);

    // Practice mode: show result immediately if this question already locked
    if (practiceMode && lockedQ.has(id)) {
      applyResultToCard(card, q, answers.get(id));
    }

    quizEl.appendChild(card);
  });

  markChosenUI();
}

function markChosenUI() {
  document.querySelectorAll(".qcard").forEach((card) => {
    const id = Number(card.dataset.qid);
    const chosen = answers.get(id) || null;
    card.querySelectorAll(".option").forEach((opt) => {
      opt.classList.toggle("chosen", opt.dataset.key === chosen);
    });
  });
}

function applyResultToCard(card, q, chosen) {
  card.classList.remove("correct", "wrong");
  card.querySelectorAll(".explain").forEach((e) => e.remove());

  // dim non-chosen
  card.querySelectorAll(".option").forEach((opt) => {
    const isChosen = opt.dataset.key === chosen;
    opt.classList.toggle("dim", !isChosen);
  });

  if (chosen === q.answer) {
    card.classList.add("correct");
    const exp = document.createElement("div");
    exp.className = "explain";
    exp.textContent = t("explain", q.explanation);
    card.appendChild(exp);
  } else {
    card.classList.add("wrong");
  }
}

function allAnswered() {
  return shuffledIds.every((id) => answers.has(id));
}

// ========================
// 8) Events
// ========================
quizEl.addEventListener("change", (e) => {
  if (!(e.target instanceof HTMLInputElement)) return;
  if (e.target.type !== "radio") return;

  const id = Number(e.target.name.replace("q_", ""));
  const chosen = e.target.value;

  if (lockedAll) return;
  if (practiceMode && lockedQ.has(id)) return;

  answers.set(id, chosen);
  markChosenUI();

  // (5) Practice mode: instant feedback + lock question
  if (practiceMode) {
    const q = getQ(lang, id);
    const card = document.querySelector(`.qcard[data-qid="${id}"]`);
    if (!card) return;

    lockedQ.add(id);
    card.querySelectorAll("input").forEach((i) => (i.disabled = true));
    applyResultToCard(card, q, chosen);
  }
});

submitBtn.addEventListener("click", () => {
  if (lockedAll) return;

  if (!allAnswered()) {
    alert(t("needAll"));
    return;
  }

  lockedAll = true;
  submitBtn.disabled = true;

  let score = 0;

  shuffledIds.forEach((id) => {
    const chosen = answers.get(id);
    const q = getQ(lang, id);
    const card = document.querySelector(`.qcard[data-qid="${id}"]`);
    if (!card) return;

    card.querySelectorAll("input").forEach((i) => (i.disabled = true));
    applyResultToCard(card, q, chosen);

    if (chosen === q.answer) score++;
  });

  summaryEl.hidden = false;
  summaryEl.innerHTML = `<b>${t("score", score, shuffledIds.length)}</b>
    <div style="color:var(--muted);margin-top:6px;">${t("retry")}</div>`;
});

restartBtn.addEventListener("click", () => {
  shuffledIds = [];
  answers.clear();
  lockedQ.clear();
  lockedAll = false;
  render();
});

if (langBtn) {
  langBtn.addEventListener("click", () => {
    lang = lang === "th" ? "en" : "th";
    render();
  });
}

if (practiceToggle) {
  practiceToggle.addEventListener("change", () => {
    practiceMode = practiceToggle.checked;
    lockedQ = practiceMode ? new Set([...answers.keys()]) : new Set();
    render();
  });
}

// start
render();
