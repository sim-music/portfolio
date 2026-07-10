const navLinks = document.querySelectorAll('a[href^="#"]');
const sitePlayer = document.querySelector(".site-player");
const audio = document.querySelector(".player-audio");
const playerToggle = document.querySelector(".player-toggle");
const playerTitle = document.querySelector(".player-track-title");
const playerSelect = document.querySelector(".player-select");
const youtubePlayer = document.querySelector(".youtube-player");
const videoRows = document.querySelectorAll(".video-row");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

function setPlayerState(isPlaying) {
  if (!sitePlayer || !playerToggle) return;

  sitePlayer.classList.toggle("is-playing", isPlaying);
  playerToggle.setAttribute("aria-label", isPlaying ? "Pause current track" : "Play current track");
}

function setTrackFromSelect() {
  if (!audio || !playerSelect || !playerTitle) return;

  const selectedOption = playerSelect.options[playerSelect.selectedIndex];
  audio.src = playerSelect.value;
  playerTitle.textContent = selectedOption.textContent;
  setPlayerState(false);
}

if (audio && playerToggle) {
  playerToggle.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        setPlayerState(true);
      } catch {
        setPlayerState(false);
        if (playerTitle) playerTitle.textContent = "Add the audio file in assets/audio";
      }
    } else {
      audio.pause();
      setPlayerState(false);
    }
  });

  audio.addEventListener("ended", () => setPlayerState(false));
  audio.addEventListener("error", () => {
    setPlayerState(false);
    if (playerTitle) playerTitle.textContent = "Audio file is not added yet";
  });
}

if (playerSelect) {
  playerSelect.addEventListener("change", setTrackFromSelect);
}

videoRows.forEach((row) => {
  row.addEventListener("click", () => {
    const youtubeId = row.dataset.youtubeId;
    if (!youtubePlayer || !youtubeId) return;

    youtubePlayer.src = `https://www.youtube.com/embed/${youtubeId}`;
    videoRows.forEach((item) => item.classList.toggle("is-active", item === row));
  });
});
const carousel = document.querySelector(".projects-carousel");
const cards = document.querySelectorAll(".project-card");
const nextButton = document.querySelector(".projects-arrow");
const dots = document.querySelectorAll(".project-dot");

let currentProject = 0;

function updateProjectsSlider() {
  if (!carousel) return;

  carousel.style.transform =
    `translateX(-${currentProject * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle(
      "active",
      index === currentProject
    );
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    currentProject++;

    if (currentProject >= cards.length) {
      currentProject = 0;
    }

    updateProjectsSlider();
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentProject = index;
    updateProjectsSlider();
  });
});
let touchStartX = 0;

carousel?.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel?.addEventListener("touchend", (e) => {
  const touchEndX =
    e.changedTouches[0].clientX;

  const delta =
    touchStartX - touchEndX;

  if (delta > 50) {
    currentProject =
      (currentProject + 1) %
      cards.length;

    updateProjectsSlider();
  }

  if (delta < -50) {
    currentProject =
      (currentProject - 1 + cards.length) %
      cards.length;

    updateProjectsSlider();
  }
});
