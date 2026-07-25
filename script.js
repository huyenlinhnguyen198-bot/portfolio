/* =========================================================
   Nguyen Huyen Linh — Concert & Vinyl Record Portfolio
   ========================================================= */
(function () {
  "use strict";

  /* -------------------- DATA (from CV) -------------------- */
  const sideA = [
    {
      track: "01",
      title: "Forgot Password Flow",
      subtitle: "Mobile Banking Application · BA Mock Project",
      tags: ["User Flow", "Wireframe", "Validation"],
      details: [
        "Designed the end-to-end user flow and wireframes for the Forgot Password journey.",
        "Defined business rules, validation logic and error-handling states for edge cases.",
        "Mapped screen navigation so engineering had an unambiguous build target."
      ],
      date: "Jun 2026"
    },
    {
      track: "02",
      title: "Customer Appointment Booking",
      subtitle: "Mobile Banking Application · BA Mock Project",
      tags: ["BPMN", "Screen Spec", "Error Handling"],
      details: [
        "Designed end-to-end flows and wireframes for the appointment booking journey.",
        "Modeled the underlying system process using BPMN before handoff.",
        "Covered business rules, validations and error handling across every screen."
      ],
      date: "Jun 2026"
    },
    {
      track: "03",
      title: "BRD · FRD · SRS Playbook",
      subtitle: "Requirements &amp; API Documentation",
      tags: ["Requirements Doc", "API Logic", "Postman", "DBeaver"],
      details: [
        "Documented functional requirements, API logic and integration points across BRD, FRD and SRS.",
        "Validated APIs using Postman to confirm behaviour matched the written spec.",
        "Reviewed database structures in DBeaver to sanity-check data models against requirements."
      ],
      date: "Jun 2026"
    }
  ];

  const sideB = [
    {
      track: "04",
      title: "130K Conversations",
      subtitle: "Everred Group (“Godmother”) · Customer Service Staff",
      tags: ["TikTok", "Shopee", "Conversion"],
      details: [
        "Managed 130,000+ quarterly customer conversations across TikTok and Shopee.",
        "Supported conversion rates of 37.45% and 24.11% respectively across the two channels.",
        "Contributed to approximately VND 13.8 billion in quarterly chat-assisted revenue.",
        "Maintained an average customer satisfaction rate of 80.41% throughout."
      ],
      date: "Aug 2025 – Aug 2026"
    },
    {
      track: "05",
      title: "Chart-Topping Research",
      subtitle: "Economic Research Champion 2025 · YES Scientific Research Club",
      tags: ["Research", "Top 20 / 120"],
      details: [
        "Placed in the Top 20 out of 120 competing teams nationwide.",
        "Organized by the YES Scientific Research Club, National Economics University."
      ],
      date: "Sep 2025"
    },
    {
      track: "06",
      title: "Published Track",
      subtitle: "Journal of Economics and Business Administration",
      tags: ["Publication", "Consumer Behaviour"],
      details: [
        "“Factors Affecting Students’ Willingness to Pay for Eco-friendly Tote Bags at Foreign Trade University.”",
        "Accepted for publication in the Journal of Economics and Business Administration."
      ],
      date: "Jul 2026"
    }
  ];

  const skillsBA = ["Requirements Elicitation & Analysis", "BPMN", "BRD / FRD / SRS", "User Flow Design", "Screen Specification", "API Documentation"];
  const skillsTools = ["Figma", "Draw.io", "Postman", "DBeaver", "Excel", "Basic Python", "Data Analysis"];
  const skillsSoft = ["Stakeholder Communication", "Analytical Thinking", "Cross-functional Collaboration", "Presentation", "Problem Solving"];

  const tourStops = [
    { date: "2021 – 2023", venue: "Live at CLEEN Project — Season 4", role: "Head of Organizing Committee · Led a recycling initiative turning plastic waste into study desks for underprivileged schools in Sapa; ran a 15,000-follower community page and coordinated fundraising, production and distribution." },
    { date: "Jun 2023 – Jul 2025", venue: "Live at Blossom Grapeseed Kim Dong", role: "English Teaching Assistant" },
    { date: "2023 — Expected 2027", venue: "Foreign Trade University", role: "International Economics · GPA 3.27/4.0 · IELTS 6.5" },
    { date: "Nov 2023 – Jun 2024", venue: "Live at FTU Dynamic Club", role: "Member, Project Management Department · Coordinated logistics and cross-team execution for a competition with 1,000+ participants" },
    { date: "Aug 2025 – Aug 2026", venue: "Live at Everred Group — “Godmother”", role: "Customer Service Staff" },
    { date: "Sep 2025", venue: "Special Guest — YES Scientific Research Club", role: "Top 20/120, Economic Research Champion 2025" },
    { date: "Jun 2026", venue: "Live at SmartSotek Company", role: "Hands-on Business Analysis Training (with Ms. Thu, BA Trainer)" },
    { date: "Jun 2026", venue: "Live at Mobile Banking Application", role: "Business Analyst Mock Project" },
    { date: "Jul 2026", venue: "Track Released — Journal of Economics and Business Administration", role: "Publication Accepted" }
  ];

  /* -------------------- ALBUM GATE DATA -------------------- */
  /* Track titles + producer credits for "Xoay Tron" by Hoang Dung (2025) —
     used purely as decorative flavour text on the intro screen and the
     spinning discs; titles/credits only, no lyrics. */
  const xoayTronTracks = [
    { n: "01", title: "Cities (Intro)", artist: "Pixel Neko" },
    { n: "02", title: "La Bàn", artist: "Pixel Neko" },
    { n: "03", title: "Sao Giờ Em Mới Tới", artist: "Pixel Neko" },
    { n: "04", title: "Cuối Tuần (1825)", artist: "Lelarec" },
    { n: "05", title: "Conversations (Interlude)", artist: "Lelarec" },
    { n: "06", title: "Tách", artist: "Lelarec" },
    { n: "07", title: "Em Trồng Cây", artist: "Lelarec" },
    { n: "08", title: "Không Quan Trọng", artist: "Pixel Neko" },
    { n: "09", title: "Khiêu Vũ Trong Đêm", artist: "Pixel Neko, Nân" },
    { n: "10", title: "Morality (Interlude)", artist: "Pixel Neko" },
    { n: "11", title: "Ba Mươi Cái Chớp Mắt", artist: "Pixel Neko" },
    { n: "12", title: "Sâm-panh", artist: "Lelarec" },
    { n: "13", title: "Bức Tranh Và Cánh Chim", artist: "Lelarec" },
    { n: "14", title: "Giữ Anh Cho Ngày Hôm Qua", artist: "Rhymastic, Lelarec" },
    { n: "15", title: "Đừng Giữ Chỗ", artist: "Hoàng Dũng" }
  ];

  const orbitGradients = [
    ["#F6C947", "#F0801E", "#E23B2E"],
    ["#EAF2FF", "#3568A6", "#7B2C55"],
    ["#EAFBE9", "#74B04C", "#1F5C3A"],
    ["#FDEFF6", "#E85B96", "#7B2C55"],
    ["#F6C947", "#74B04C", "#1F5C3A"],
    ["#FFF3E9", "#E85B96", "#E23B2E"]
  ];

  /* which tracks spin in which section, and where */
  const orbitLayout = {
    orbitHero: [
      { track: 0, style: "top:-42px;left:-64px;width:220px;", duration: 26 },
      { track: 1, style: "top:6%;right:-74px;width:190px;", duration: 32, reverse: true },
      { track: 2, style: "bottom:-52px;left:5%;width:200px;", duration: 22 },
      { track: 3, style: "bottom:-34px;right:3%;width:230px;", duration: 30, reverse: true },
      { track: 4, style: "top:38%;left:-92px;width:150px;", duration: 18 },
      { track: 5, style: "top:60%;right:-82px;width:160px;", duration: 20, reverse: true },
      { track: 6, style: "top:14%;left:38%;width:90px;", duration: 15 },
      { track: 9, style: "bottom:8%;right:20%;width:100px;", duration: 23, reverse: true },
      { track: 12, style: "top:2%;left:16%;width:80px;", duration: 17, reverse: true }
    ],
    orbitTracklist: [
      { track: 6, style: "top:-30px;right:-40px;width:130px;", duration: 24 },
      { track: 7, style: "bottom:-30px;left:-30px;width:120px;", duration: 19, reverse: true },
      { track: 1, style: "top:18%;left:-24px;width:95px;", duration: 21, reverse: true },
      { track: 13, style: "bottom:12%;right:-22px;width:90px;", duration: 26 }
    ],
    orbitBackstage: [
      { track: 8, style: "top:-20px;left:-50px;width:140px;", duration: 28, reverse: true },
      { track: 9, style: "bottom:-20px;right:-40px;width:130px;", duration: 21 },
      { track: 2, style: "top:32%;right:-26px;width:100px;", duration: 19 },
      { track: 5, style: "bottom:4%;left:-26px;width:105px;", duration: 25, reverse: true }
    ],
    orbitTour: [
      { track: 10, style: "top:-20px;right:-30px;width:120px;", duration: 23 },
      { track: 11, style: "bottom:-20px;left:-40px;width:130px;", duration: 27, reverse: true },
      { track: 4, style: "top:6%;left:-22px;width:95px;", duration: 18, reverse: true },
      { track: 8, style: "bottom:2%;right:-24px;width:100px;", duration: 20 }
    ],
    orbitEncore: [
      { track: 12, style: "top:-20px;left:-40px;width:140px;", duration: 25, reverse: true },
      { track: 13, style: "top:-10px;right:-40px;width:130px;", duration: 20 },
      { track: 14, style: "bottom:-40px;left:38%;width:150px;", duration: 30, reverse: true },
      { track: 1, style: "top:30%;right:-30px;width:100px;", duration: 19, reverse: true },
      { track: 5, style: "bottom:6%;right:22%;width:80px;", duration: 16 }
    ],
    orbitGate: [
      { track: 0, style: "top:8%;left:-70px;width:170px;", duration: 24 },
      { track: 3, style: "top:4%;right:-60px;width:150px;", duration: 30, reverse: true },
      { track: 7, style: "top:44%;left:2%;width:110px;", duration: 20, reverse: true },
      { track: 11, style: "top:40%;right:4%;width:120px;", duration: 26 },
      { track: 14, style: "top:78%;left:20%;width:100px;", duration: 18, reverse: true },
      { track: 9, style: "top:64%;right:18%;width:90px;", duration: 22, reverse: true },
      { track: 5, style: "top:12%;left:42%;width:80px;", duration: 15 }
    ]
  };

  let orbitIdCounter = 0;

  function buildOrbitDisc(track, gradientStops, style, duration, reverse) {
    orbitIdCounter++;
    const gid = "og" + orbitIdCounter;
    const pid = "op" + orbitIdCounter;
    const label = (track.title + " • " + (track.artist || "Xoay Tròn") + " • ").toUpperCase();
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "orbit-disc");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("style", style + "animation-duration:" + duration + "s;" + (reverse ? "animation-direction:reverse;" : ""));
    svg.innerHTML =
      '<defs>' +
        '<radialGradient id="' + gid + '" cx="50%" cy="50%" r="50%">' +
          '<stop offset="0%" stop-color="' + gradientStops[0] + '"/>' +
          '<stop offset="45%" stop-color="' + gradientStops[1] + '"/>' +
          '<stop offset="100%" stop-color="' + gradientStops[2] + '"/>' +
        '</radialGradient>' +
        '<path id="' + pid + '" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0"/>' +
      '</defs>' +
      '<circle cx="100" cy="100" r="98" fill="#F7F4EC"/>' +
      '<circle cx="100" cy="100" r="79" fill="url(#' + gid + ')"/>' +
      '<text font-size="9.2" letter-spacing="2" fill="#15130F" font-family="\'Space Mono\', monospace">' +
        '<textPath href="#' + pid + '">' + label + label + '</textPath>' +
      '</text>';
    return svg;
  }

  function renderOrbitFields() {
    Object.keys(orbitLayout).forEach((containerId) => {
      const container = document.getElementById(containerId);
      if (!container) return;
      orbitLayout[containerId].forEach((cfg, i) => {
        const track = xoayTronTracks[cfg.track];
        if (!track) return;
        const gradient = orbitGradients[cfg.track % orbitGradients.length];
        container.appendChild(buildOrbitDisc(track, gradient, cfg.style, cfg.duration, cfg.reverse));
      });
    });
  }

  /* -------------------- ALBUM GATE -------------------- */
  function initAlbumGate() {
    const gate = document.getElementById("albumGate");
    if (!gate) return;
    const startBtn = document.getElementById("startListenBtn");
    const skipLink = document.getElementById("gateSkip");

    function enter(startAudio) {
      gate.classList.add("closing");
      document.body.classList.remove("gate-active");
      setTimeout(() => { gate.hidden = true; }, 500);
      if (startAudio) {
        // load + attempt autoplay right on this click — the strongest signal
        // a browser will accept for "the user asked for sound"
        revealNowPlaying(true);
      }
    }

    startBtn.addEventListener("click", () => enter(true));
    skipLink.addEventListener("click", (e) => { e.preventDefault(); enter(false); });
  }

  /* -------------------- RENDER -------------------- */
  function trackRow(item, index) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.className = "track-row";
    btn.type = "button";
    btn.setAttribute("data-index", String(index));
    btn.innerHTML =
      '<span class="track-num">' + item.track + '</span>' +
      '<span class="track-info">' +
        '<span class="track-title">' + item.title + '</span>' +
        '<span class="track-subtitle">' + item.subtitle + '</span>' +
      '</span>' +
      '<span class="track-play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor"/></svg></span>';
    li.appendChild(btn);
    return li;
  }

  function renderTracklist() {
    const allTracks = sideA.concat(sideB);
    const $a = document.getElementById("sideA");
    const $b = document.getElementById("sideB");
    sideA.forEach((t, i) => $a.appendChild(trackRow(t, i)));
    sideB.forEach((t, i) => $b.appendChild(trackRow(t, sideA.length + i)));

    const stage = document.getElementById("stageVinyl");
    const stageTrack = document.getElementById("stageVinylTrack");
    const stageCaption = document.getElementById("stageCaption");
    const rows = document.querySelectorAll(".track-row");

    function setStage(item) {
      stageTrack.textContent = item.track;
      stageCaption.textContent = item.title + " — " + item.subtitle;
    }

    rows.forEach((row) => {
      const idx = Number(row.getAttribute("data-index"));
      const item = allTracks[idx];
      row.addEventListener("mouseenter", () => setStage(item));
      row.addEventListener("focus", () => setStage(item));
      row.addEventListener("click", () => openModal(item));
    });
  }

  function tagLi(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  function renderSkills() {
    const ba = document.getElementById("skillsBA");
    const tools = document.getElementById("skillsTools");
    const soft = document.getElementById("skillsSoft");
    skillsBA.forEach((s) => ba.appendChild(tagLi(s)));
    skillsTools.forEach((s) => tools.appendChild(tagLi(s)));
    skillsSoft.forEach((s) => soft.appendChild(tagLi(s)));
  }

  function renderTour() {
    const list = document.getElementById("tourList");
    tourStops.forEach((stop) => {
      const li = document.createElement("li");
      li.className = "tour-item";
      li.innerHTML =
        '<span class="tour-date">' + stop.date + '</span>' +
        '<span>' +
          '<span class="tour-venue">' + stop.venue + '</span>' +
          '<span class="tour-role">' + stop.role + '</span>' +
        '</span>';
      list.appendChild(li);
    });
  }

  /* -------------------- MODAL -------------------- */
  const backdrop = document.getElementById("modalBackdrop");
  const booklet = document.getElementById("modalBooklet");
  let lastFocused = null;

  function openModal(item) {
    document.getElementById("modalTrackNo").textContent = "Track " + item.track;
    document.getElementById("modalTitle").innerHTML = item.title;
    document.getElementById("modalSubtitle").innerHTML = item.subtitle;
    document.getElementById("modalDate").textContent = item.date;

    const tagsEl = document.getElementById("modalTags");
    tagsEl.innerHTML = "";
    item.tags.forEach((t) => tagsEl.appendChild(tagLi(t)));

    const detailsEl = document.getElementById("modalDetails");
    detailsEl.innerHTML = "";
    item.details.forEach((d) => {
      const li = document.createElement("li");
      li.innerHTML = d;
      detailsEl.appendChild(li);
    });

    lastFocused = document.activeElement;
    backdrop.hidden = false;
    requestAnimationFrame(() => backdrop.classList.add("show"));
    document.getElementById("modalClose").focus();
    document.body.style.overflow = "hidden";
    audio.click();
  }

  function closeModal() {
    backdrop.classList.remove("show");
    document.body.style.overflow = "";
    setTimeout(() => { backdrop.hidden = true; }, 300);
    if (lastFocused) lastFocused.focus();
  }

  document.getElementById("modalClose").addEventListener("click", closeModal);
  backdrop.addEventListener("click", (e) => { if (e.target === backdrop) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hidden) closeModal();
  });

  /* -------------------- NAV: mobile menu -------------------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    document.body.classList.remove("nav-open");
    hamburger.setAttribute("aria-expanded", "false");
  }));

  /* -------------------- THEME: Lights On/Off -------------------- */
  const lightsBtn = document.getElementById("lightsToggle");
  const lightsLabel = lightsBtn.querySelector(".lights-label");
  const THEME_KEY = "hlinh-theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const on = theme === "lights-on";
    lightsLabel.textContent = on ? "Lights On" : "Lights Off";
    lightsBtn.setAttribute("aria-pressed", String(on));
  }

  const savedTheme = localStorage.getItem(THEME_KEY);
  applyTheme(savedTheme === "lights-off" ? "lights-off" : "lights-on");

  lightsBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "lights-on" ? "lights-off" : "lights-on";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
    audio.click();
    revealNowPlaying(true);
  });

  /* -------------------- CURSOR: spotlight + pick -------------------- */
  const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if (supportsHover) {
    const dot = document.querySelector(".cursor-dot");
    const glow = document.querySelector(".cursor-glow");
    let gx = window.innerWidth / 2, gy = window.innerHeight / 2;
    document.addEventListener("mousemove", (e) => {
      document.body.classList.add("cursor-ready");
      dot.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px) translate(-50%,-50%)";
      gx = e.clientX; gy = e.clientY;
    });
    (function loop() {
      glow.style.transform = "translate(" + gx + "px," + gy + "px) translate(-50%,-50%)";
      requestAnimationFrame(loop);
    })();
  }

  /* -------------------- SCROLL: vinyl speed + tonearm -------------------- */
  const vinyl = document.getElementById("ttVinyl");
  const tonearm = document.getElementById("ttTonearm");
  const overture = document.getElementById("overture");
  let scrollTimer = null;

  window.addEventListener("scroll", () => {
    vinyl.classList.add("fast");
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => vinyl.classList.remove("fast"), 500);
  }, { passive: true });

  if ("IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        tonearm.classList.toggle("playing", entry.intersectionRatio < 0.6);
      });
    }, { threshold: [0, 0.6, 1] });
    heroObserver.observe(overture);
  }

  /* -------------------- REVEAL on scroll -------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in-view"));
  }

  /* -------------------- AUDIO: only the real Hoang Dung track plays --------
     The synthesized vinyl-crackle / lofi pad has been removed per request.
     "audio" is kept as a harmless stub so existing call sites don't break. */
  const audio = {
    startAmbience: function () {},
    stopAmbience: function () {},
    click: function () {},
    setMuted: function () {},
    isMuted: function () { return true; },
    isPlaying: function () { return false; }
  };

  const playIntroBtn = document.getElementById("playIntroBtn");
  const playIntroLabel = document.getElementById("playIntroLabel");
  playIntroBtn.addEventListener("click", () => {
    revealNowPlaying(true);
  });

  /* -------------------- ENCORE: mailto form -------------------- */
  const requestForm = document.getElementById("requestForm");
  requestForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("reqName").value.trim();
    const email = document.getElementById("reqEmail").value.trim();
    const msg = document.getElementById("reqMsg").value.trim();
    const subject = encodeURIComponent("Song Request from " + name);
    const body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
    window.location.href = "mailto:huyenlinhnguyen198@gmail.com?subject=" + subject + "&body=" + body;
  });

  /* -------------------- NOW PLAYING widget -------------------- */
  const nowPlaying = document.getElementById("nowPlaying");
  const nowPlayingToggle = document.getElementById("nowPlayingToggle");
  const nowPlayingFrame = document.getElementById("nowPlayingFrame");
  const nowPlayingMute = document.getElementById("nowPlayingMute");
  const muteIconOn = nowPlayingMute ? nowPlayingMute.querySelector(".icon-sound-on") : null;
  const muteIconOff = nowPlayingMute ? nowPlayingMute.querySelector(".icon-sound-off") : null;
  const SPOTIFY_TRACK_SRC = "https://open.spotify.com/embed/track/2q6qZMPd4lNMCkvc06s7zs?utm_source=generator&theme=0&autoplay=1";
  let nowPlayingLoaded = false;
  let nowPlayingMuted = false;

  function loadNowPlaying() {
    if (nowPlayingLoaded || !nowPlayingFrame) return;
    nowPlayingLoaded = true;
    nowPlayingFrame.src = SPOTIFY_TRACK_SRC;
  }

  /* every "play" trigger in the site (Lights On, Play Album button, the
     album gate) funnels through here — if the user has muted via the
     single speaker icon on the widget, respect that and stay silent */
  function revealNowPlaying(pulse) {
    if (!nowPlaying || nowPlayingMuted) return;
    loadNowPlaying();
    nowPlaying.classList.remove("collapsed");
    if (nowPlayingToggle) nowPlayingToggle.setAttribute("aria-expanded", "true");
    if (pulse) {
      nowPlaying.classList.add("pulse");
      setTimeout(() => nowPlaying.classList.remove("pulse"), 2400);
    }
  }

  if (nowPlaying && nowPlayingToggle) {
    nowPlayingToggle.addEventListener("click", () => {
      const collapsed = nowPlaying.classList.toggle("collapsed");
      nowPlayingToggle.setAttribute("aria-expanded", String(!collapsed));
    });
  }

  /* single speaker icon = mute control. Click it to stop the track
     (unloads the Spotify embed entirely); click again to resume. */
  function reflectMuteState() {
    if (!nowPlayingMute) return;
    nowPlayingMute.setAttribute("aria-pressed", String(nowPlayingMuted));
    nowPlayingMute.setAttribute("aria-label", nowPlayingMuted ? "Unmute music" : "Mute music");
    if (muteIconOn) muteIconOn.hidden = nowPlayingMuted;
    if (muteIconOff) muteIconOff.hidden = !nowPlayingMuted;
  }
  reflectMuteState();

  if (nowPlayingMute) {
    nowPlayingMute.addEventListener("click", () => {
      nowPlayingMuted = !nowPlayingMuted;
      reflectMuteState();
      if (nowPlayingMuted) {
        if (nowPlayingFrame) nowPlayingFrame.src = "";
        nowPlayingLoaded = false;
        if (nowPlaying) nowPlaying.classList.add("collapsed");
        if (nowPlayingToggle) nowPlayingToggle.setAttribute("aria-expanded", "false");
      } else {
        loadNowPlaying();
        if (nowPlaying) nowPlaying.classList.remove("collapsed");
        if (nowPlayingToggle) nowPlayingToggle.setAttribute("aria-expanded", "true");
      }
    });
  }

  /* -------------------- GALAXY DEPTH: scroll parallax -------------------- */
  const galaxyFar = document.querySelector(".galaxy-depth-far");
  const galaxyNear = document.querySelector(".galaxy-depth-near");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (galaxyFar && galaxyNear && !reduceMotion) {
    let parallaxFrame = null;
    const updateParallax = () => {
      const y = window.scrollY;
      galaxyFar.style.transform = "translateY(" + (y * 0.03) + "px)";
      galaxyNear.style.transform = "translateY(" + (y * 0.08) + "px)";
      parallaxFrame = null;
    };
    window.addEventListener("scroll", () => {
      if (parallaxFrame === null) parallaxFrame = requestAnimationFrame(updateParallax);
    }, { passive: true });
  }

  /* -------------------- misc -------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* -------------------- init -------------------- */
  renderTracklist();
  renderSkills();
  renderTour();
  renderOrbitFields();
  initAlbumGate();
})();
