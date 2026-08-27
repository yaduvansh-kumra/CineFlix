/* =========================================================
   CineFlix - Core Application Logic
   HTML5 Video Playback • Movie Database • Dynamic Details •
   Horizontal Scrollers • Search • My List Persistence

   yeh js file mein poore project ki interactivity aur functionality hai
   koi bhi event ya animation yahan pe define hai
   ========================================================= */

// 1. Central Movie Database
// yeh object mein sab movies ka data hai - title, year, rating, cast, description etc
// har movie ke pass uska complete information hai jisse details page par show kar sak
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
// jab poora html document load ho jaye to yeh event fire hota hai
// tab hum sab initialization functions ko call karte hain
document.addEventListener("DOMContentLoaded", () => {
  // header ko sticky banao scroll ke sath
  initStickyHeader();
  // mobile menu ko toggle karne ka functionality add karo
  initMobileMenu();
  // search functionality add karo
  initSearch();
  // scroller buttons add karo horizontal scroll ke liye
  initScrollerButtons();
  // my list system ko initialize karo localStorage ke saath
  initMyListSystem();
  // details page ko dynamic banao
  initDetailsPage();
  // video player ko initialize karo
  initWatchPlayer();
});

// 3. Sticky Header on Scroll
// yeh function header ko sticky banata hai jab page scroll hove
function initStickyHeader() {
  // header element ko select karo
  const header = document.querySelector("#main-header");
  // agar header nahi mila to return karo
  if (!header) return;

  // jab user scroll kare to ye event fire hoga
  window.addEventListener("scroll", () => {
    // scrollY > 30 means ki user ne 30 pixels se zyada scroll kiya
    // to "scrolled" class add kar do header ko jo styling apply karega
    header.classList.toggle("scrolled", window.scrollY > 30);
  });
}

// 4. Mobile Navigation Drawer
// mobile mein hamburger menu toggle karne ke liye
function initMobileMenu() {
  // hamburger button ko select karo
  const menuToggle = document.querySelector("#menu-toggle");
  // navigation menu ko select karo
  const primaryNav = document.querySelector("#primary-nav");
  // agar dono nahi mile to return karo
  if (!menuToggle || !primaryNav) return;

  // menu button par click event listener add karo
  menuToggle.addEventListener("click", () => {
    // menu ko open/close toggle karo
    const isMenuOpen = primaryNav.classList.toggle("open");
    // body mein bhi class toggle karo taaki background lock ho
    document.body.classList.toggle("menu-open", isMenuOpen);
    // aria-expanded ko update karo accessibility ke liye
    menuToggle.setAttribute("aria-expanded", String(isMenuOpen));
    // button ka text change karo - open/close indicator
    menuToggle.textContent = isMenuOpen ? "✕" : "☰";
  });
}

// 5. Horizontal Scroller Navigation Buttons
// left aur right arrow buttons jo horizontal scroll karte hain
function initScrollerButtons() {
  // sab media scrollers ko select karo
  const scrollers = document.querySelectorAll(".media-scroller");

  // har scroller ke liye
  scrollers.forEach((scroller) => {
    // scroller ke parent ko find karo
    const wrapper = scroller.closest(".scroller-wrapper") || scroller.parentElement;
    // agar wrapper nahi mila to return karo
    if (!wrapper) return;

    // pehle se existing buttons check karo
    let leftBtn = wrapper.querySelector(".scroll-btn.left");
    let rightBtn = wrapper.querySelector(".scroll-btn.right");

    // agar buttons nahi hain to create kar do
    if (!leftBtn && !wrapper.classList.contains("no-scroll-btns")) {
      // wrapper ko relative position de do taaki buttons absolute ho sak
      wrapper.style.position = "relative";

      // left button create karo
      leftBtn = document.createElement("button");
      leftBtn.className = "scroll-btn left";
      leftBtn.setAttribute("aria-label", "Scroll Left");
      leftBtn.innerHTML = "‹";

      // right button create karo
      rightBtn = document.createElement("button");
      rightBtn.className = "scroll-btn right";
      rightBtn.setAttribute("aria-label", "Scroll Right");
      rightBtn.innerHTML = "›";

      // dono buttons ko wrapper mein append karo
      wrapper.appendChild(leftBtn);
      wrapper.appendChild(rightBtn);
    }

    // left button par click karte time left ko scroll karo
    if (leftBtn) {
      leftBtn.addEventListener("click", () => {
        // screen ka 65% width scroll karo
        scroller.scrollBy({ left: -window.innerWidth * 0.65, behavior: "smooth" });
      });
    }

    // right button par click karte time right ko scroll karo
    if (rightBtn) {
      rightBtn.addEventListener("click", () => {
        scroller.scrollBy({ left: window.innerWidth * 0.65, behavior: "smooth" });
      });
    }
  });
}

// 6. Real-time Search Filtering
// jab user search box mein type kare to movies/shows filter ho jaye
function initSearch() {
  // search input ko select karo
  const searchInput = document.querySelector("#movie-search");
  // sab media cards ko select karo (movies aur shows)
  const mediaCards = document.querySelectorAll(".media-card, .trending-item, .landscape-card");
  // empty state message jo tab show hota hai jab kuch nahi milta
  const searchEmpty = document.querySelector("#search-empty");

  // agar search input nahi mila to return karo
  if (!searchInput) return;

  // jab user type kare to
  searchInput.addEventListener("input", (e) => {
    // input value ko lowercase mein convert karo
    const query = e.target.value.trim().toLowerCase();
    // kitne results mile yeh count karne ke liye
    let matchCount = 0;

    // har card ke liye
    mediaCards.forEach((card) => {
      // card mein title data attribute se lao
      const title = card.dataset.title?.toLowerCase() || card.querySelector("h3, .media-title")?.textContent?.toLowerCase() || "";
      // category data attribute se lao
      const category = card.dataset.category?.toLowerCase() || "";

      // title ya category mein search term match ho to card show karo
      const isMatch = query === "" || title.includes(query) || category.includes(query);
      // display style ko set karo based on match
      card.style.display = isMatch ? "" : "none";

      // agar match hua to count badao
      if (isMatch) matchCount++;
    });

    // agar search term hai aur koi match nahi hua to empty message show karo
    if (searchEmpty) {
      searchEmpty.hidden = !(query !== "" && matchCount === 0);
    }
  });
}

// 7. My List Management with LocalStorage
// user ki watchlist ko save karo browser ke localStorage mein
function initMyListSystem() {
  // browser ke storage mein ye key use kar rahe hain
  const STORAGE_KEY = "cineflix_my_list";

  // localStorage se saved list ko get karo
  const getSavedList = () => {
    try {
      // try karo JSON parse karne ka
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      // agar error aaye to empty array return karo
      return [];
    }
  };

  // list ko localStorage mein save karo
  const saveList = (list) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  // jab koi bhi "add to list" button par click kare
  document.addEventListener("click", (e) => {
    // button ko closest method se find karo
    const btn = e.target.closest(".list-button, .btn-card-list");
    // agar button nahi mila to return karo
    if (!btn) return;

    // link action ko prevent karo
    e.preventDefault();
    e.stopPropagation();

    // movie title get karo button se data attribute se
    const title = btn.dataset.title || btn.closest("[data-title]")?.dataset?.title || "Interstellar";
    // current list ko get karo
    let list = getSavedList();
    // check karo ki title pehle se list mein hai ya nahi
    const index = list.indexOf(title);

    // agar list mein pehle se hai to remove karo
    if (index > -1) {
      list.splice(index, 1);
      btn.classList.remove("added");
      // button ke text ko reset karo
      if (btn.classList.contains("list-button")) btn.textContent = "+ My List";
      if (btn.classList.contains("btn-card-list")) btn.textContent = "+";
    } else {
      // agar nahi hai to add karo list mein
      list.push(title);
      btn.classList.add("added");
      // button ke text ko update karo
      if (btn.classList.contains("list-button")) btn.textContent = "✓ In My List";
      if (btn.classList.contains("btn-card-list")) btn.textContent = "✓";
    }

    // updated list ko save karo
    saveList(list);
  });

  // agar my-list page par ho to saved items ko highlight karo
  const listGrid = document.querySelector("#my-list-grid");
  if (listGrid) {
    // saved list get karo
    const saved = getSavedList();
    // agar list mein items hain
    if (saved.length > 0) {
      // sab cards ko find karo
      const cards = listGrid.querySelectorAll(".media-card");
      // har card ke liye
      cards.forEach(card => {
        // card ka title get karo
        const title = card.dataset.title;
        // list button find karo
        const btn = card.querySelector(".btn-card-list, .list-button");
        // agar title saved list mein hai to button ko highlight karo
        if (saved.includes(title) && btn) {
          btn.classList.add("added");
          btn.textContent = "✓";
        }
      });
    }
  }
}

// 8. Dynamic Movie Details Page Initialization
// details page mein jo movie ka data show hota hai url se lao aur display karo
function initDetailsPage() {
  // details page ko select karo
  const detailsPage = document.querySelector(".details-page");
  // agar details page nahi hai (maybe home page hai) to return karo
  if (!detailsPage) return;

  // URL se parameters nikalor
  const urlParams = new URLSearchParams(window.location.search);
  // title parameter get karo - default "Interstellar"
  const movieTitle = urlParams.get("title") || "Interstellar";
  // database se movie ki info get karo ya fallback value use karo
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

  // Page ke title ko update karo browser tab mein
  document.title = `${movie.title} | CineFlix`;

  // h1 heading ko movie title se update karo
  const h1 = detailsPage.querySelector(".details-content h1");
  if (h1) h1.textContent = movie.title;

  // backdrop image ko movie ka backdrop image se replace karo
  const backdropImg = detailsPage.querySelector(".details-backdrop img");
  if (backdropImg) {
    backdropImg.src = movie.backdrop || movie.poster;
    backdropImg.alt = `${movie.title} Backdrop`;
  }

  // match score ko update karo
  const matchScore = detailsPage.querySelector(".match-score");
  if (matchScore) matchScore.textContent = movie.match;

  // description ko update karo
  const desc = detailsPage.querySelector(".details-description");
  if (desc) desc.textContent = movie.description;

  // play button ke link ko movie title ke saath update karo
  const playBtn = detailsPage.querySelector(".hero-actions .btn-primary");
  if (playBtn) {
    playBtn.href = `watch.html?title=${encodeURIComponent(movie.title)}`;
  }

  // my list button ko set up karo
  const listBtn = detailsPage.querySelector(".hero-actions .list-button");
  if (listBtn) {
    listBtn.dataset.title = movie.title;
    try {
      // check karo ki title pehle se my list mein hai ya nahi
      const saved = JSON.parse(localStorage.getItem("cineflix_my_list")) || [];
      if (saved.includes(movie.title)) {
        listBtn.classList.add("added");
        listBtn.textContent = "✓ In My List";
      }
    } catch {}
  }

  // details information ko update karo (cast, director, genres)
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
// video player ke controls ko setup karo
function initWatchPlayer() {
  // video element ko select karo
  const video = document.querySelector("#main-video-player");
  // agar video nahi mila to return karo
  if (!video) return;

  // URL se title get karo
  const urlParams = new URLSearchParams(window.location.search);
  const movieTitle = urlParams.get("title") || "Interstellar";
  // database se movie info get karo
  const movie = MOVIES_DATABASE[movieTitle] || {
    title: movieTitle,
    year: "2024",
    match: "98% Match",
    age: "U/A 16+",
    duration: "2h 10m",
    genres: ["Action", "Sci-Fi"],
    description: "Streaming demo in high definition. Enjoy full video playback functionality."
  };

  // page title ko update karo
  document.title = `Watch ${movie.title} | CineFlix`;

  // player ka title update karo
  const titleDisplay = document.querySelector("#player-movie-title");
  if (titleDisplay) titleDisplay.textContent = movie.title;

  // watch info page ka title
  const watchInfoTitle = document.querySelector("#watch-title");
  if (watchInfoTitle) watchInfoTitle.textContent = movie.title;

  // description show karo
  const watchDesc = document.querySelector("#watch-desc");
  if (watchDesc) watchDesc.textContent = movie.description;

  // back link ko update karo
  const backLink = document.querySelector(".back-to-details");
  if (backLink) backLink.href = `details.html?title=${encodeURIComponent(movie.title)}`;

  // player ke controls ko select karo
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
  // video ko play/pause karo
  const togglePlay = () => {
    if (video.paused || video.ended) {
      // video ko play karo
      video.play().catch(() => {});
      if (playerWrapper) playerWrapper.classList.remove("paused");
      if (centerPlayBtn) centerPlayBtn.style.display = "none";
      if (playPauseBtn) playPauseBtn.innerHTML = "❚❚";
    } else {
      // video ko pause karo
      video.pause();
      if (playerWrapper) playerWrapper.classList.add("paused");
      if (centerPlayBtn) centerPlayBtn.style.display = "flex";
      if (playPauseBtn) playPauseBtn.innerHTML = "▶";
    }
  };

  // play/pause buttons par click listeners add karo
  if (centerPlayBtn) centerPlayBtn.addEventListener("click", togglePlay);
  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlay);
  // video par click karte time bhi toggle ho
  video.addEventListener("click", togglePlay);

  // Time ko MM:SS format mein convert karo
  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  // jab video load hove to total time show karo
  video.addEventListener("loadedmetadata", () => {
    if (timeTotal) timeTotal.textContent = formatTime(video.duration || 0);
  });

  // jab video play ho raha ho to current time update karo
  video.addEventListener("timeupdate", () => {
    if (video.duration) {
      // progress bar ko update karo
      const pct = (video.currentTime / video.duration) * 100;
      if (progressFilled) progressFilled.style.width = `${pct}%`;
      // current time display karo
      if (timeCurrent) timeCurrent.textContent = formatTime(video.currentTime);
      // total time display karo
      if (timeTotal && timeTotal.textContent === "00:00") {
        timeTotal.textContent = formatTime(video.duration);
      }
    }
  });

  // Seek on Scrubber Click
  // progress bar par click karte time video seek karo
  if (progressContainer) {
    progressContainer.addEventListener("click", (e) => {
      // click ka position percent mein nikalo
      const rect = progressContainer.getBoundingClientRect();
      const clickPos = (e.clientX - rect.left) / rect.width;
      // video ke currentTime ko update karo
      if (video.duration) {
        video.currentTime = clickPos * video.duration;
      }
    });
  }

  // Volume & Mute
  // mute button ko handle karo
  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      // muted state ko toggle karo
      video.muted = !video.muted;
      // button ka icon change karo based on muted state
      muteBtn.innerHTML = video.muted ? "🔇" : "🔊";
    });
  }

  // volume slider ko handle karo
  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      // slider ki value se volume set karo (0 se 1 tak)
      video.volume = parseFloat(e.target.value);
      // agar volume 0 ho to muted mark karo
      video.muted = video.volume === 0;
      // icon ko update karo
      if (muteBtn) muteBtn.innerHTML = video.muted ? "🔇" : "🔊";
    });
  }

  // Fullscreen
  // fullscreen button ko handle karo
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener("click", () => {
      // agar pehle se fullscreen nahi hai to fullscreen enter karo
      if (!document.fullscreenElement) {
        if (playerWrapper.requestFullscreen) playerWrapper.requestFullscreen();
      } else {
        // agar fullscreen hai to exit karo
        if (document.exitFullscreen) document.exitFullscreen();
      }
    });
  }

  // Try Auto-play with fallback
  // jab page load ho to video ko auto-play try karo
  video.play().then(() => {
    // agar auto-play successful ho to controls update karo
    if (playerWrapper) playerWrapper.classList.remove("paused");
    if (centerPlayBtn) centerPlayBtn.style.display = "none";
    if (playPauseBtn) playPauseBtn.innerHTML = "❚❚";
  }).catch(() => {
    // agar auto-play fail ho to big play button show karo
    if (playerWrapper) playerWrapper.classList.add("paused");
    if (centerPlayBtn) centerPlayBtn.style.display = "flex";
  });
}

// 10. Theme Toggle Logic
// dark aur light mode ko switch karne ka functionality
function initThemeToggle() {
  // sab theme toggle buttons ko select karo
  const themeToggleBtns = document.querySelectorAll('#theme-toggle, .theme-button');
  // agar buttons nahi mile to return karo
  if (!themeToggleBtns.length) return;

  // localStorage se saved theme ko get karo, default dark
  const savedTheme = localStorage.getItem('cineflix-theme') || 'dark';
  // html element par data-theme attribute set karo
  document.documentElement.setAttribute('data-theme', savedTheme);

  // har button par click listener add karo
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // current theme get karo
      const currentTheme = document.documentElement.getAttribute('data-theme');
      // agar light theme hai to dark karo, otherwise light karo
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      // html element ka theme change karo
      document.documentElement.setAttribute('data-theme', newTheme);
      // naya theme localStorage mein save karo taaki next time bhi same theme ho
      localStorage.setItem('cineflix-theme', newTheme);
    });
  });
}

// page load hote hi theme toggle ko initialize karo taaki flicker na ho
initThemeToggle();