/* =========================================================
   CineFlix - Core Application Logic
   HTML5 Video Playback • Movie Database • Dynamic Details •
   Horizontal Scrollers • Search • My List Persistence
   ========================================================= */

// 1. Central Movie Database
const MOVIES_DATABASE = {
  "Interstellar": {
    title: "Interstellar",
    year: "2014",
    match: "98% Match",
    rating: "★ 8.7",
    age: "U/A 13+",
    duration: "2h 49m",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    description: "When Earth becomes uninhabitable, a former NASA pilot joins a mission through a newly discovered wormhole. The crew must find a planet capable of becoming humanity's new home before time runs out.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80"
  },
  "Neon Horizon": {
    title: "Neon Horizon",
    year: "2024",
    match: "97% Match",
    rating: "★ 8.5",
    age: "A 18+",
    duration: "2h 15m",
    quality: "4K HDR",
    genres: ["Action", "Sci-Fi", "Cyberpunk"],
    director: "Elena Vance",
    cast: ["Alex Rivera", "Mia Zhang", "David Sterling"],
    description: "In a neon-drenched megacity controlled by mega-corporations, an augmented rogue mercenary uncovers a secret AI that has the power to rewrite human consciousness.",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
  },
  "The Last Signal": {
    title: "The Last Signal",
    year: "2023",
    match: "95% Match",
    rating: "★ 8.4",
    age: "U/A 13+",
    duration: "1h 58m",
    quality: "HD",
    genres: ["Mystery", "Sci-Fi", "Drama"],
    director: "Marcus Webb",
    cast: ["Sarah Jenkins", "Thomas Cole", "Liam Vance"],
    description: "A deep-space listening station intercepts a mysterious rhythmic signal originating from the dark side of Neptune, sparking a race against an unknown celestial entity.",
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1600&q=80"
  },
  "Shadow Protocol": {
    title: "Shadow Protocol",
    year: "2024",
    match: "96% Match",
    rating: "★ 8.8",
    age: "U/A 16+",
    duration: "2h 08m",
    quality: "4K Ultra HD",
    genres: ["Action", "Spy", "Thriller"],
    director: "Kenji Sato",
    cast: ["Christian Cross", "Valerie Dupond", "Hassan Tariq"],
    description: "When an elite undercover syndicate is betrayed from the top, a lone operative must use dark network protocols to expose international conspirators.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1600&q=80"
  },
  "Red Orbit": {
    title: "Red Orbit",
    year: "2023",
    match: "93% Match",
    rating: "★ 8.2",
    age: "U/A 13+",
    duration: "2h 20m",
    quality: "4K HDR",
    genres: ["Sci-Fi", "Space", "Adventure"],
    director: "Julian Bennett",
    cast: ["Ethan Hawke", "Clara Oswald", "Raymond Bell"],
    description: "The first manned expedition to colonize Mars encounters severe geomagnetic storms and a subterranean alien geological structure that defies known physics.",
    poster: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=80"
  },
  "Quantum Realm": {
    title: "Quantum Realm",
    year: "2024",
    match: "94% Match",
    rating: "★ 8.6",
    age: "U/A 13+",
    duration: "2h 12m",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Quantum", "Action"],
    director: "Sophie Laurent",
    cast: ["Lucas Gray", "Emma Watson", "Zack Chen"],
    description: "A team of theoretical physicists accidentally open a stable subatomic portal into a multi-layered dimension where time flows in multiple directions simultaneously.",
    poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1600&q=80"
  },
  "Dark Velocity": {
    title: "Dark Velocity",
    year: "2024",
    match: "92% Match",
    rating: "★ 8.1",
    age: "U/A 16+",
    duration: "1h 52m",
    quality: "4K HDR",
    genres: ["Action", "Racing", "Crime"],
    director: "Dominic Thorne",
    cast: ["Leo Vance", "Carlos Mendez", "Kira Knight"],
    description: "In the underground midnight street circuits of Tokyo and Berlin, high-tech hypercars tuned with experimental jet engines race for extreme stakes.",
    poster: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
  },
  "Dragon Blade": {
    title: "Dragon Blade",
    year: "2023",
    match: "91% Match",
    rating: "★ 8.3",
    age: "U/A 16+",
    duration: "2h 30m",
    quality: "4K Ultra HD",
    genres: ["Fantasy", "Action", "Epic"],
    director: "Chen Wei",
    cast: ["Li Jun", "Zhang Wei", "Aiko Tanaka"],
    description: "An ancient warrior awakens after a thousand years of slumber to defend the imperial dynasty against dark mythical hordes unleashed from the underworld.",
    poster: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=1600&q=80"
  },
  "Mind Hunter": {
    title: "Mind Hunter",
    year: "2024",
    match: "96% Match",
    rating: "★ 8.9",
    age: "A 18+",
    duration: "2h 05m",
    quality: "4K Ultra HD",
    genres: ["Crime", "Psychological", "Mystery"],
    director: "David Fincher",
    cast: ["Jonathan Ross", "Holt McCallany", "Anna Torv"],
    description: "An elite squad of criminal profilers uses cutting-edge behavioral psychology and neurolinguistics to hunt the world's most cunning serial minds.",
    poster: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80"
  },
  "Midnight Sun": {
    title: "Midnight Sun",
    year: "2023",
    match: "90% Match",
    rating: "★ 8.0",
    age: "U/A 13+",
    duration: "2h 02m",
    quality: "HD",
    genres: ["Drama", "Nordic Noir", "Thriller"],
    director: "Astrid Lind",
    cast: ["Freja Lind", "Lars Mikkelsen", "Kari Nygard"],
    description: "Set in northern Scandinavia where the sun never sets during summer, an eerie homicide unravels long-buried secret conspiracies within an isolated arctic community.",
    poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=80"
  },
  "Stranger Echoes": {
    title: "Stranger Echoes",
    year: "2024",
    match: "98% Match",
    rating: "★ 8.9",
    age: "U/A 16+",
    duration: "1 Season",
    quality: "4K Ultra HD",
    genres: ["Supernatural", "Sci-Fi", "Mystery"],
    director: "The Ross Brothers",
    cast: ["Millie Brown", "Finn Wolf", "David Harbour"],
    description: "When a boy vanishes into thin air in an 80s small town, friends and family uncover secret military experiments, terrifying supernatural frequencies, and a strange girl with telekinesis.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80"
  },
  "City of Echoes": {
    title: "City of Echoes",
    year: "2024",
    match: "95% Match",
    rating: "★ 8.5",
    age: "U/A 16+",
    duration: "2 Seasons",
    quality: "4K HDR",
    genres: ["Mystery", "Cyberpunk", "Drama"],
    director: "Nia DaCosta",
    cast: ["Zendaya", "John Boyega", "Gemma Chan"],
    description: "In a futuristic metropolis where memories are recorded and traded as currency, a detective investigates a murder case where the victim's memory chip has been wiped clean.",
    poster: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1600&q=80"
  },
  "Ghost in the Void": {
    title: "Ghost in the Void",
    year: "2024",
    match: "94% Match",
    rating: "★ 8.4",
    age: "U/A 16+",
    duration: "1h 45m",
    quality: "4K Ultra HD",
    genres: ["Anime", "Sci-Fi", "Action"],
    director: "Mamoru Oshii",
    cast: ["Atsuko Tanaka", "Akio Otsuka", "Koichi Yamadera"],
    description: "In 2060, a cyborg federal agent hunts an elusive hacker known as The Puppet Master, leading to deep philosophical questions about human souls in artificial shells.",
    poster: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80"
  },
  "Arcane Legacy": {
    title: "Arcane Legacy",
    year: "2024",
    match: "99% Match",
    rating: "★ 9.1",
    age: "U/A 16+",
    duration: "2 Seasons",
    quality: "4K Ultra HD",
    genres: ["Animation", "Steampunk", "Fantasy"],
    director: "Pascal Charrue",
    cast: ["Hailee Steinfeld", "Ella Purnell", "Kevin Alejandro"],
    description: "Set in the utopian region of Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic champions and the power that will tear them apart.",
    poster: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1600&q=80"
  },
  "The Witcher's Oath": {
    title: "The Witcher's Oath",
    year: "2023",
    match: "96% Match",
    rating: "★ 8.7",
    age: "A 18+",
    duration: "3 Seasons",
    quality: "4K HDR",
    genres: ["Dark Fantasy", "Action", "Adventure"],
    director: "Lauren Schmidt",
    cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
    description: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    poster: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&w=1600&q=80"
  },
  "Chrono Rift": {
    title: "Chrono Rift",
    year: "2024",
    match: "97% Match",
    rating: "★ 8.8",
    age: "U/A 16+",
    duration: "2h 18m",
    quality: "4K Ultra HD",
    genres: ["Time Travel", "Sci-Fi", "Action"],
    director: "James Cameron",
    cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
    description: "A time-traveling strike team is sent back 500 years into humanity's past to stop a rogue temporal anomaly from wiping out the modern galaxy.",
    poster: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1600&q=80"
  }
};

// 2. DOM Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  initMobileMenu();
  initSearch();
  initScrollerButtons();
  initMyListSystem();
  initDetailsPage();
  initWatchPlayer();
});

// 3. Sticky Header on Scroll
function initStickyHeader() {
  const header = document.querySelector("#main-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });
}

// 4. Mobile Navigation Drawer
function initMobileMenu() {
  const menuToggle = document.querySelector("#menu-toggle");
  const primaryNav = document.querySelector("#primary-nav");
  if (!menuToggle || !primaryNav) return;

  menuToggle.addEventListener("click", () => {
    const isMenuOpen = primaryNav.classList.toggle("open");
    document.body.classList.toggle("menu-open", isMenuOpen);
    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    menuToggle.textContent = isMenuOpen ? "✕" : "☰";
  });
}

// 5. Horizontal Scroller Navigation Buttons
function initScrollerButtons() {
  const scrollers = document.querySelectorAll(".media-scroller");

  scrollers.forEach((scroller) => {
    const wrapper = scroller.closest(".scroller-wrapper") || scroller.parentElement;
    if (!wrapper) return;

    // Check if buttons exist, else create them
    let leftBtn = wrapper.querySelector(".scroll-btn.left");
    let rightBtn = wrapper.querySelector(".scroll-btn.right");

    if (!leftBtn && !wrapper.classList.contains("no-scroll-btns")) {
      wrapper.style.position = "relative";
      leftBtn = document.createElement("button");
      leftBtn.className = "scroll-btn left";
      leftBtn.setAttribute("aria-label", "Scroll Left");
      leftBtn.innerHTML = "‹";

      rightBtn = document.createElement("button");
      rightBtn.className = "scroll-btn right";
      rightBtn.setAttribute("aria-label", "Scroll Right");
      rightBtn.innerHTML = "›";

      wrapper.appendChild(leftBtn);
      wrapper.appendChild(rightBtn);
    }

    if (leftBtn) {
      leftBtn.addEventListener("click", () => {
        scroller.scrollBy({ left: -window.innerWidth * 0.65, behavior: "smooth" });
      });
    }

    if (rightBtn) {
      rightBtn.addEventListener("click", () => {
        scroller.scrollBy({ left: window.innerWidth * 0.65, behavior: "smooth" });
      });
    }
  });
}

// 6. Real-time Search Filtering
function initSearch() {
  const searchInput = document.querySelector("#movie-search");
  const mediaCards = document.querySelectorAll(".media-card, .trending-item, .landscape-card");
  const searchEmpty = document.querySelector("#search-empty");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim().toLowerCase();
    let matchCount = 0;

    mediaCards.forEach((card) => {
      const title = card.dataset.title?.toLowerCase() || card.querySelector("h3, .media-title")?.textContent?.toLowerCase() || "";
      const category = card.dataset.category?.toLowerCase() || "";

      const isMatch = query === "" || title.includes(query) || category.includes(query);
      card.style.display = isMatch ? "" : "none";

      if (isMatch) matchCount++;
    });

    if (searchEmpty) {
      searchEmpty.hidden = !(query !== "" && matchCount === 0);
    }
  });
}

// 7. My List Management with LocalStorage
function initMyListSystem() {
  const STORAGE_KEY = "cineflix_my_list";
  const getSavedList = () => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  };

  const saveList = (list) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  // Attach click listener for buttons
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".list-button, .btn-card-list");
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();

    const title = btn.dataset.title || btn.closest("[data-title]")?.dataset?.title || "Interstellar";
    let list = getSavedList();
    const index = list.indexOf(title);

    if (index > -1) {
      list.splice(index, 1);
      btn.classList.remove("added");
      if (btn.classList.contains("list-button")) btn.textContent = "+ My List";
      if (btn.classList.contains("btn-card-list")) btn.textContent = "+";
    } else {
      list.push(title);
      btn.classList.add("added");
      if (btn.classList.contains("list-button")) btn.textContent = "✓ In My List";
      if (btn.classList.contains("btn-card-list")) btn.textContent = "✓";
    }

    saveList(list);
  });

  // If on My List page, render saved items or update badges
  const listGrid = document.querySelector("#my-list-grid");
  if (listGrid) {
    const saved = getSavedList();
    if (saved.length > 0) {
      // Highlight existing items
      const cards = listGrid.querySelectorAll(".media-card");
      cards.forEach(card => {
        const title = card.dataset.title;
        const btn = card.querySelector(".btn-card-list, .list-button");
        if (saved.includes(title) && btn) {
          btn.classList.add("added");
          btn.textContent = "✓";
        }
      });
    }
  }
}

// 8. Dynamic Movie Details Page Initialization
function initDetailsPage() {
  const detailsPage = document.querySelector(".details-page");
  if (!detailsPage) return;

  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get("title") || "Interstellar";
  const movie = MOVIES_DATABASE[movieTitle] || {
    title: movieTitle,
    year: "2024",
    match: "95% Match",
    rating: "★ 8.5",
    age: "U/A 16+",
    duration: "2h 15m",
    quality: "4K Ultra HD",
    genres: ["Sci-Fi", "Action", "Thriller"],
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    description: "An exhilarating cinematic streaming journey packed with breathtaking suspense and cutting-edge visual sequences.",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1600&q=80"
  };

  // Update Page Elements
  document.title = `${movie.title} | CineFlix`;

  const h1 = detailsPage.querySelector(".details-content h1");
  if (h1) h1.textContent = movie.title;

  const backdropImg = detailsPage.querySelector(".details-backdrop img");
  if (backdropImg) {
    backdropImg.src = movie.backdrop || movie.poster;
    backdropImg.alt = `${movie.title} Backdrop`;
  }

  const matchScore = detailsPage.querySelector(".match-score");
  if (matchScore) matchScore.textContent = movie.match;

  const desc = detailsPage.querySelector(".details-description");
  if (desc) desc.textContent = movie.description;

  const playBtn = detailsPage.querySelector(".hero-actions .btn-primary");
  if (playBtn) {
    playBtn.href = `watch.html?title=${encodeURIComponent(movie.title)}`;
  }

  const listBtn = detailsPage.querySelector(".hero-actions .list-button");
  if (listBtn) {
    listBtn.dataset.title = movie.title;
    try {
      const saved = JSON.parse(localStorage.getItem("cineflix_my_list")) || [];
      if (saved.includes(movie.title)) {
        listBtn.classList.add("added");
        listBtn.textContent = "✓ In My List";
      }
    } catch {}
  }

  const infoDiv = detailsPage.querySelector(".details-information");
  if (infoDiv) {
    infoDiv.innerHTML = `
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
      <p><strong>Genres:</strong> ${movie.genres.join(", ")}</p>
      <p><strong>Audio / Subtitles:</strong> English [Original], Hindi, Spanish, French</p>
    `;
  }
}

// 9. Video Player Logic on watch.html
function initWatchPlayer() {
  const video = document.querySelector("#main-video-player");
  if (!video) return;

  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get("title") || "Interstellar";
  const movie = MOVIES_DATABASE[movieTitle] || {
    title: movieTitle,
    year: "2024",
    match: "98% Match",
    age: "U/A 16+",
    duration: "2h 10m",
    genres: ["Action", "Sci-Fi"],
    description: "Streaming demo in high definition. Enjoy full video playback functionality."
  };

  // Update Watch UI texts
  document.title = `Watch ${movie.title} | CineFlix`;
  const titleDisplay = document.querySelector("#player-movie-title");
  if (titleDisplay) titleDisplay.textContent = movie.title;

  const watchInfoTitle = document.querySelector("#watch-title");
  if (watchInfoTitle) watchInfoTitle.textContent = movie.title;

  const watchDesc = document.querySelector("#watch-desc");
  if (watchDesc) watchDesc.textContent = movie.description;

  const backLink = document.querySelector(".back-to-details");
  if (backLink) backLink.href = `details.html?title=${encodeURIComponent(movie.title)}`;

  // Controls Elements
  const playerWrapper = document.querySelector(".player-wrapper");
  const playPauseBtn = document.querySelector("#btn-play-pause");
  const centerPlayBtn = document.querySelector("#center-play-btn");
  const progressContainer = document.querySelector("#progress-container");
  const progressFilled = document.querySelector("#progress-filled");
  const timeCurrent = document.querySelector("#time-current");
  const timeTotal = document.querySelector("#time-total");
  const muteBtn = document.querySelector("#btn-mute");
  const volumeSlider = document.querySelector("#volume-slider");
  const fullscreenBtn = document.querySelector("#btn-fullscreen");

  // Play / Pause Toggle
  const togglePlay = () => {
    if (video.paused || video.ended) {
      video.play().catch(() => {});
      if (playerWrapper) playerWrapper.classList.remove("paused");
      if (centerPlayBtn) centerPlayBtn.style.display = "none";
      if (playPauseBtn) playPauseBtn.innerHTML = "❚❚";
    } else {
      video.pause();
      if (playerWrapper) playerWrapper.classList.add("paused");
      if (centerPlayBtn) centerPlayBtn.style.display = "flex";
      if (playPauseBtn) playPauseBtn.innerHTML = "▶";
    }
  };

  if (centerPlayBtn) centerPlayBtn.addEventListener("click", togglePlay);
  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  // Time & Progress Formatting
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  video.addEventListener("loadedmetadata", () => {
    if (timeTotal) timeTotal.textContent = formatTime(video.duration || 0);
  });

  video.addEventListener("timeupdate", () => {
    if (video.duration) {
      const pct = (video.currentTime / video.duration) * 100;
      if (progressFilled) progressFilled.style.width = `${pct}%`;
      if (timeCurrent) timeCurrent.textContent = formatTime(video.currentTime);
      if (timeTotal && timeTotal.textContent === "00:00") {
        timeTotal.textContent = formatTime(video.duration);
      }
    }
  });

  // Seek on Scrubber Click
  if (progressContainer) {
    progressContainer.addEventListener("click", (e) => {
      const rect = progressContainer.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      if (video.duration) {
        video.currentTime = clickPos * video.duration;
      }
    });
  }

  // Volume & Mute
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      muteBtn.innerHTML = video.muted ? "🔇" : "🔊";
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      video.volume = parseFloat(e.target.value);
      video.muted = video.volume === 0;
      if (muteBtn) muteBtn.innerHTML = video.muted ? "🔇" : "🔊";
    });
  }

  // Fullscreen
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        if (playerWrapper.requestFullscreen) playerWrapper.requestFullscreen();
      } else {
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  // Try Auto-play with fallback
  video.play().then(() => {
    if (playerWrapper) playerWrapper.classList.remove("paused");
    if (centerPlayBtn) centerPlayBtn.style.display = "none";
    if (playPauseBtn) playPauseBtn.innerHTML = "❚❚";
  }).catch(() => {
    // Autoplay prevented by browser, show big play button
    if (playerWrapper) playerWrapper.classList.add("paused");
    if (centerPlayBtn) centerPlayBtn.style.display = "flex";
  });
}