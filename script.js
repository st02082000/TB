/* ===================================
   THIBAUT BIRTHDAY WEBSITE - JAVASCRIPT
   Mobile-First Interactive Features
   =================================== */

// ===================================
// CONFIGURATION & CREDENTIALS
// ===================================

// Login credentials (easily editable)
const CREDENTIALS = {
  username: "September",
  password: "01",
};

// Birth date configuration
const BIRTH_DATE = new Date("2000-08-02T00:00:00.000Z");

// Constellation data with accurate star positions
const CONSTELLATION_DATA = {
  leo: {
    name: "Leo",
    symbol: "♌",
    description:
      "The Lion - Your ruling constellation! Contains the bright 'Sickle' asterism",
    color: "#fbbf24",
    stars: [
      {
        name: "Regulus (α Leo)",
        magnitude: 1.35,
        type: "Blue-white giant",
        x: 30,
        y: 75,
        isMain: true,
      },
      {
        name: "Denebola (β Leo)",
        magnitude: 2.14,
        type: "White main-sequence",
        x: 85,
        y: 25,
        isMain: true,
      },
      {
        name: "Algieba (γ Leo)",
        magnitude: 2.08,
        type: "Golden giant binary",
        x: 25,
        y: 60,
        isMain: true,
      },
      {
        name: "Zosma (δ Leo)",
        magnitude: 2.56,
        type: "White subgiant",
        x: 70,
        y: 35,
        isMain: true,
      },
      {
        name: "Ras Elased Australis (ε Leo)",
        magnitude: 2.98,
        type: "Yellow giant",
        x: 20,
        y: 50,
        isMain: true,
      },
      {
        name: "Adhafera (ζ Leo)",
        magnitude: 3.44,
        type: "Yellow supergiant",
        x: 35,
        y: 65,
        isMain: true,
      },
      {
        name: "Alterf (λ Leo)",
        magnitude: 4.32,
        type: "Orange giant",
        x: 15,
        y: 55,
        isMain: false,
      },
      {
        name: "Rasalas (μ Leo)",
        magnitude: 3.88,
        type: "Orange giant",
        x: 18,
        y: 65,
        isMain: false,
      },
      {
        name: "Subra (ο Leo)",
        magnitude: 3.52,
        type: "White giant",
        x: 22,
        y: 70,
        isMain: false,
      },
      {
        name: "Chertan (θ Leo)",
        magnitude: 3.34,
        type: "White main-sequence",
        x: 75,
        y: 40,
        isMain: false,
      },
      {
        name: "Iota Leonis (ι Leo)",
        magnitude: 4.0,
        type: "Yellow subgiant",
        x: 45,
        y: 45,
        isMain: false,
      },
    ],
    connections: [
      [7, 0],
      [0, 5],
      [5, 2],
      [2, 4],
      [4, 6], // The Sickle pattern
      [1, 3],
      [3, 9],
      [9, 1], // The triangle (hindquarters)
    ],
  },
  virgo: {
    name: "Virgo",
    symbol: "♍",
    description:
      "The Maiden - Contains brilliant Spica, one of the brightest stars in the sky",
    color: "#60a5fa",
    stars: [
      {
        name: "Spica (α Vir)",
        magnitude: 0.97,
        type: "Blue giant binary",
        x: 70,
        y: 85,
        isMain: true,
      },
      {
        name: "Zavijava (β Vir)",
        magnitude: 3.61,
        type: "Yellow main-sequence",
        x: 25,
        y: 35,
        isMain: true,
      },
      {
        name: "Porrima (γ Vir)",
        magnitude: 2.74,
        type: "Yellow-white binary",
        x: 45,
        y: 65,
        isMain: true,
      },
      {
        name: "Auva (δ Vir)",
        magnitude: 3.38,
        type: "Red giant",
        x: 55,
        y: 50,
        isMain: true,
      },
      {
        name: "Vindemiatrix (ε Vir)",
        magnitude: 2.83,
        type: "Yellow giant",
        x: 35,
        y: 25,
        isMain: true,
      },
      {
        name: "Heze (ζ Vir)",
        magnitude: 3.38,
        type: "White main-sequence",
        x: 60,
        y: 70,
        isMain: true,
      },
      {
        name: "Zaniah (η Vir)",
        magnitude: 3.89,
        type: "White main-sequence",
        x: 40,
        y: 55,
        isMain: false,
      },
      {
        name: "Syrma (ι Vir)",
        magnitude: 4.08,
        type: "Yellow subgiant",
        x: 75,
        y: 60,
        isMain: false,
      },
    ],
    connections: [
      [4, 1],
      [1, 6],
      [6, 3],
      [3, 2],
      [2, 5],
      [5, 0],
      [0, 7], // Main Virgo pattern
    ],
  },
  "ursa-major": {
    name: "Ursa Major",
    symbol: "",
    description: "The Great Bear - Contains the famous Big Dipper asterism",
    color: "#a78bfa",
    stars: [
      {
        name: "Dubhe (α UMa)",
        magnitude: 1.79,
        type: "Orange giant",
        x: 20,
        y: 30,
        isMain: true,
      },
      {
        name: "Merak (β UMa)",
        magnitude: 2.37,
        type: "White subgiant",
        x: 35,
        y: 35,
        isMain: true,
      },
      {
        name: "Phecda (γ UMa)",
        magnitude: 2.44,
        type: "White main-sequence",
        x: 50,
        y: 45,
        isMain: true,
      },
      {
        name: "Megrez (δ UMa)",
        magnitude: 3.31,
        type: "White main-sequence",
        x: 60,
        y: 50,
        isMain: true,
      },
      {
        name: "Alioth (ε UMa)",
        magnitude: 1.77,
        type: "White peculiar",
        x: 70,
        y: 55,
        isMain: true,
      },
      {
        name: "Mizar (ζ UMa)",
        magnitude: 2.04,
        type: "White main-sequence",
        x: 75,
        y: 60,
        isMain: true,
      },
      {
        name: "Alkaid (η UMa)",
        magnitude: 1.86,
        type: "Blue main-sequence",
        x: 85,
        y: 65,
        isMain: true,
      },
      {
        name: "Muscida (ο UMa)",
        magnitude: 3.35,
        type: "Yellow giant",
        x: 15,
        y: 45,
        isMain: false,
      },
      {
        name: "Tania Australis (μ UMa)",
        magnitude: 3.06,
        type: "Red giant",
        x: 45,
        y: 25,
        isMain: false,
      },
      {
        name: "Tania Borealis (λ UMa)",
        magnitude: 3.45,
        type: "White main-sequence",
        x: 40,
        y: 20,
        isMain: false,
      },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0], // Big Dipper bowl
      [3, 4],
      [4, 5],
      [5, 6], // Big Dipper handle
      [8, 9],
      [8, 2], // Connection to other stars
      [3, 6],
    ],
  },
};

// ===================================
// GLOBAL STATE
// ===================================

let isAuthenticated = false;
let audioPlaying = false;
let ageUpdateInterval = null;
let visibleElements = new Set();
let shootingStarIntervals = {};

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Generate random number between min and max
 */
function random(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Create a delay promise
 */
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check if element is in viewport
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Animate element visibility with stagger
 */
function animateElementIn(element, delay = 0) {
  setTimeout(() => {
    element.classList.add("visible");
  }, delay);
}

// ===================================
// STAR FIELD GENERATION
// ===================================

/**
 * Create animated star field background
 */
function createStarField(container, starCount = 100) {
  container.innerHTML = ""; // Clear existing stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random position
    const left = random(0, 100);
    const top = random(0, 100);

    // Random size and brightness
    const size = random(1, 3);
    const brightness = random(0.3, 1);
    const animationDelay = random(0, 4);

    // Apply styles
    star.style.left = `${left}%`;
    star.style.top = `${top}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.opacity = brightness;
    star.style.animationDelay = `${animationDelay}s`;

    container.appendChild(star);
  }
}

// ===================================
// LOGIN SYSTEM
// ===================================

/**
 * Initialize login system
 */
function initializeLogin() {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");
  const loginScreen = document.getElementById("login-screen");
  const mainContent = document.getElementById("main-content");

  // Create star field for login screen
  const loginStars = document.querySelector(".login-stars");
  if (loginStars) {
    createStarField(loginStars, 50);
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validate credentials
    if (
      username === CREDENTIALS.username &&
      password === CREDENTIALS.password
    ) {
      // Success - hide error message
      errorMessage.classList.add("hidden");

      // Animate login screen out
      loginScreen.style.opacity = "0";
      loginScreen.style.transform = "scale(0.95)";

      await delay(500);

      // Hide login screen and show main content
      loginScreen.classList.add("hidden");
      mainContent.classList.remove("hidden");

      // Set authentication state
      isAuthenticated = true;

      // Initialize main website
      initializeMainWebsite();
    } else {
      // Show error message
      errorMessage.textContent =
        "Invalid username or password. Please try again.";
      errorMessage.classList.remove("hidden");

      // Shake animation for error
      loginForm.style.animation = "shake 0.5s ease-in-out";
      setTimeout(() => {
        loginForm.style.animation = "";
      }, 500);
    }
  });
}

// ===================================
// CONSTELLATION VISUALIZATION
// ===================================

/**
 * Create shooting star effect
 */
function createShootingStar(svgElement, constellation) {
  const shootingStar = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  shootingStar.setAttribute("r", "0.5");
  shootingStar.setAttribute("fill", "white");
  shootingStar.setAttribute("opacity", "0");
  shootingStar.classList.add("shooting-star");

  // Random starting position
  const startX = random(-10, 110);
  const startY = random(-10, 110);
  const endX = startX + random(20, 50);
  const endY = startY + random(20, 50);

  shootingStar.setAttribute("cx", startX);
  shootingStar.setAttribute("cy", startY);

  // Create tail
  const tail = document.createElementNS("http://www.w3.org/2000/svg", "line");
  tail.setAttribute("x1", startX);
  tail.setAttribute("y1", startY);
  tail.setAttribute("x2", startX - 5);
  tail.setAttribute("y2", startY - 5);
  tail.setAttribute("stroke", "white");
  tail.setAttribute("stroke-width", "0.3");
  tail.setAttribute("opacity", "0");
  tail.classList.add("shooting-star-tail");

  svgElement.appendChild(tail);
  svgElement.appendChild(shootingStar);

  // Animate shooting star
  const duration = random(1000, 2000);
  const startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    if (progress < 1) {
      const currentX = startX + (endX - startX) * progress;
      const currentY = startY + (endY - startY) * progress;

      shootingStar.setAttribute("cx", currentX);
      shootingStar.setAttribute("cy", currentY);
      tail.setAttribute("x1", currentX);
      tail.setAttribute("y1", currentY);
      tail.setAttribute("x2", currentX - 5);
      tail.setAttribute("y2", currentY - 5);

      // Fade in and out
      if (progress < 0.3) {
        const opacity = progress / 0.3;
        shootingStar.setAttribute("opacity", opacity);
        tail.setAttribute("opacity", opacity * 0.6);
      } else if (progress > 0.7) {
        const opacity = (1 - progress) / 0.3;
        shootingStar.setAttribute("opacity", opacity);
        tail.setAttribute("opacity", opacity * 0.6);
      } else {
        shootingStar.setAttribute("opacity", "1");
        tail.setAttribute("opacity", "0.6");
      }

      requestAnimationFrame(animate);
    } else {
      // Remove shooting star
      svgElement.removeChild(shootingStar);
      svgElement.removeChild(tail);
    }
  }

  animate();
}

/**
 * Add cosmic dust particles
 */
function addCosmicDust(svgElement, constellation) {
  for (let i = 0; i < 15; i++) {
    const dust = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    const x = random(0, 100);
    const y = random(0, 100);
    const size = random(0.1, 0.3);
    const opacity = random(0.1, 0.4);

    dust.setAttribute("cx", x);
    dust.setAttribute("cy", y);
    dust.setAttribute("r", size);
    dust.setAttribute("fill", "white");
    dust.setAttribute("opacity", opacity);
    dust.classList.add("cosmic-dust");
    dust.style.animationDelay = `${random(0, 10)}s`;
    dust.style.animationDuration = `${random(8, 15)}s`;

    svgElement.appendChild(dust);
  }
}

/**
 * Create SVG constellation map
 */
function createConstellationMap(constellation, svgElement) {
  const { stars, connections, color } = constellation;

  // Clear existing content
  svgElement.innerHTML = "";

  // Create definitions for gradients and effects
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");

  // Star glow gradient
  const gradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "radialGradient"
  );
  gradient.setAttribute("id", `starGlow-${constellation.name.toLowerCase()}`);
  gradient.setAttribute("cx", "50%");
  gradient.setAttribute("cy", "50%");
  gradient.setAttribute("r", "50%");

  const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop1.setAttribute("offset", "0%");
  stop1.setAttribute("stop-color", color);
  stop1.setAttribute("stop-opacity", "0.8");

  const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
  stop2.setAttribute("offset", "100%");
  stop2.setAttribute("stop-color", color);
  stop2.setAttribute("stop-opacity", "0");

  gradient.appendChild(stop1);
  gradient.appendChild(stop2);
  defs.appendChild(gradient);
  svgElement.appendChild(defs);

  // Add cosmic dust particles
  addCosmicDust(svgElement, constellation);

  // Draw constellation lines first (behind stars)
  if (connections) {
    connections.forEach((connection, idx) => {
      const star1 = stars[connection[0]];
      const star2 = stars[connection[1]];

      if (star1 && star2) {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line"
        );
        line.setAttribute("x1", star1.x);
        line.setAttribute("y1", star1.y);
        line.setAttribute("x2", star2.x);
        line.setAttribute("y2", star2.y);
        line.setAttribute("stroke", color);
        line.setAttribute("stroke-width", "0.3");
        line.setAttribute("opacity", "0.6");

        svgElement.appendChild(line);
      }
    });
  }

  // Draw background field stars
  for (let i = 0; i < 25; i++) {
    const seed = constellation.name.charCodeAt(0) + i;
    const x = (seed * 17 + 23) % 100;
    const y = (seed * 31 + 47) % 100;
    const size = 0.2 + (seed % 5) / 10;
    const opacity = 0.3 + (seed % 3) / 10;

    const bgStar = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    bgStar.setAttribute("cx", x);
    bgStar.setAttribute("cy", y);
    bgStar.setAttribute("r", size);
    bgStar.setAttribute("fill", "white");
    bgStar.setAttribute("opacity", opacity);
    bgStar.classList.add("constellation-bg-star");
    bgStar.style.animationDelay = `${(seed % 40) / 10}s`;

    svgElement.appendChild(bgStar);
  }

  // Draw constellation stars with proper sizing
  stars.forEach((star, starIndex) => {
    // Fixed star sizing formula - brighter stars (lower magnitude) should be bigger
    const starSize = Math.max(0.8, 3.5 - star.magnitude * 0.8);
    const isMainStar = star.isMain;

    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");

    // Star glow for main stars only
    if (isMainStar) {
      const glow = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      glow.setAttribute("cx", star.x);
      glow.setAttribute("cy", star.y);
      glow.setAttribute("r", starSize * 1.5);
      glow.setAttribute(
        "fill",
        `url(#starGlow-${constellation.name.toLowerCase()})`
      );
      glow.classList.add("constellation-star-glow");
      glow.style.animationDelay = `${starIndex * 0.3}s`;
      group.appendChild(glow);
    }

    // Main star circle
    const starElement = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    starElement.setAttribute("cx", star.x);
    starElement.setAttribute("cy", star.y);
    starElement.setAttribute("r", starSize);
    starElement.setAttribute("fill", color);
    starElement.setAttribute("stroke", "none"); // No border
    starElement.setAttribute("stroke-width", "0"); // Extra: ensure no border

    if (isMainStar) {
      starElement.classList.add("constellation-star");
      starElement.style.animationDelay = `${starIndex * 0.3}s`;
    }

    group.appendChild(starElement);

    // Star name label (smaller for non-main stars)
    const label = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    label.setAttribute("x", star.x + starSize + 1);
    label.setAttribute("y", star.y + 0.5);
    label.setAttribute("fill", "white");
    label.setAttribute("font-size", isMainStar ? "1.8" : "1.4");
    label.setAttribute("font-family", "system-ui, sans-serif");
    label.setAttribute("opacity", isMainStar ? "1" : "0.8");
    label.style.textShadow = "1px 1px 2px rgba(0,0,0,0.8)";
    label.textContent = star.name;
    group.appendChild(label);

    // Magnitude indicator for main stars only
    if (isMainStar) {
      const magnitude = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      magnitude.setAttribute("x", star.x);
      magnitude.setAttribute("y", star.y + starSize + 3);
      magnitude.setAttribute("fill", "#fbbf24");
      magnitude.setAttribute("font-size", "1.2");
      magnitude.setAttribute("text-anchor", "middle");
      magnitude.textContent = star.magnitude;
      group.appendChild(magnitude);
    }

    svgElement.appendChild(group);
  });

  // Start shooting star animation
  const constellationName = constellation.name.toLowerCase().replace(" ", "-");

  // Clear any existing interval
  if (shootingStarIntervals[constellationName]) {
    clearInterval(shootingStarIntervals[constellationName]);
  }

  // Create shooting stars periodically
  shootingStarIntervals[constellationName] = setInterval(() => {
    if (Math.random() < 0.7) {
      // 70% chance every interval
      createShootingStar(svgElement, constellation);
    }
  }, random(2000, 5000)); // Every 3-7 seconds
}

/**
 * Create star list for constellation
 */
function createStarList(constellation, container) {
  container.innerHTML = "";

  constellation.stars.forEach((star, index) => {
    const starItem = document.createElement("div");
    starItem.className = "star-item";

    starItem.innerHTML = `
            <div class="star-info">
                <div class="star-indicator" style="background: ${constellation.color}; box-shadow: 0 0 10px ${constellation.color};"></div>
                <div class="star-details">
                    <h6>${star.name}</h6>
                    <p class="star-type">${star.type}</p>
                </div>
            </div>
            <div class="star-magnitude">mag ${star.magnitude}</div>
        `;

    // Add staggered animation
    setTimeout(() => {
      starItem.classList.add("visible");
    }, index * 200);

    container.appendChild(starItem);
  });
}

// ===================================
// AGE CALCULATION
// ===================================

/**
 * Calculate precise age from birth date including weeks
 */
function calculateAge() {
  const now = new Date();
  const birth = new Date(BIRTH_DATE);

  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const daysInPrevMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate weeks from remaining days
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return { years, months, weeks, days: remainingDays, hours, minutes, seconds };
}

/**
 * Update age counter display
 */
function updateAgeDisplay() {
  const age = calculateAge();

  // Update age display elements
  const elements = {
    "age-years": age.years,
    "age-months": age.months,
    "age-weeks": age.weeks,
    "age-days": age.days,
    "age-hours": age.hours,
    "age-minutes": age.minutes,
    "age-seconds": age.seconds,
  };

  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
}

// ===================================
// AUDIO SYSTEM
// ===================================

/**
 * Initialize audio controls
 */
function initializeAudio() {
  const audioToggle = document.getElementById("audio-toggle");
  const backgroundAudio = document.getElementById("background-audio");

  if (!audioToggle || !backgroundAudio) return;

  // Set initial volume
  backgroundAudio.volume = 0.3;

  audioToggle.addEventListener("click", async () => {
    try {
      if (audioPlaying) {
        // Pause audio
        backgroundAudio.pause();
        audioToggle.classList.add("muted");
        audioPlaying = false;
      } else {
        // Play audio
        await backgroundAudio.play();
        audioToggle.classList.remove("muted");
        audioPlaying = true;
      }
    } catch (error) {
      console.log("Audio playback failed:", error);
      // Handle autoplay restrictions gracefully
    }
  });

  // Handle audio events
  backgroundAudio.addEventListener("ended", () => {
    audioPlaying = false;
    audioToggle.classList.add("muted");
  });

  backgroundAudio.addEventListener("error", (e) => {
    console.log("Audio error:", e);
    // Hide audio button if audio file is not available
    audioToggle.style.display = "none";
  });
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

/**
 * Initialize intersection observer for scroll animations
 */
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const elementId = element.id || element.className;

        if (!visibleElements.has(elementId)) {
          // Add to visible set
          visibleElements.add(elementId);

          // Animate element
          animateElementIn(element, 0);

          // Handle special cases
          if (element.classList.contains("constellation-card")) {
            initializeConstellation(element);
          }
        }
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const elements = document.querySelectorAll(
    ".content-card, .constellation-card, .love-card, .age-card"
  );
  elements.forEach((element) => {
    observer.observe(element);
  });
}

/**
 * Initialize individual constellation when it becomes visible
 */
function initializeConstellation(card) {
  const constellationId = card.getAttribute("data-constellation");
  const constellation = CONSTELLATION_DATA[constellationId];

  if (!constellation) return;

  // Create constellation map
  const svg = card.querySelector(".star-map");
  if (svg) {
    setTimeout(() => {
      createConstellationMap(constellation, svg);
    }, 300);
  }

  // Create star list
  const starList = card.querySelector(".star-list");
  if (starList) {
    setTimeout(() => {
      createStarList(constellation, starList);
    }, 600);
  }
}

// ===================================
// CLEANUP FUNCTIONS
// ===================================

/**
 * Clean up shooting star intervals
 */
function cleanupShootingStars() {
  Object.values(shootingStarIntervals).forEach((interval) => {
    clearInterval(interval);
  });
  shootingStarIntervals = {};
}

// ===================================
// MAIN WEBSITE INITIALIZATION
// ===================================

/**
 * Initialize main website features
 */
function initializeMainWebsite() {
  console.log("Initializing main website...");

  // Create main star field
  const mainStars = document.querySelector(".main-stars");
  if (mainStars) {
    createStarField(mainStars, 120);
  }

  // Initialize audio controls
  initializeAudio();

  // Initialize scroll animations
  initializeScrollAnimations();

  // Start age counter
  updateAgeDisplay();
  ageUpdateInterval = setInterval(updateAgeDisplay, 1000);

  // Animate hero section
  const heroSection = document.querySelector(".hero-section");
  if (heroSection) {
    setTimeout(() => {
      heroSection.style.opacity = "1";
      heroSection.style.transform = "translateY(0)";
    }, 500);
  }

  // Initialize moon section after delay
  setTimeout(() => {
    const moonSection = document.querySelector(".moon-section .content-card");
    if (moonSection) {
      animateElementIn(moonSection, 0);
    }
  }, 1000);

  // Force initialize all constellation cards that are already visible
  setTimeout(() => {
    const constellationCards = document.querySelectorAll(".constellation-card");
    constellationCards.forEach((card, index) => {
      // Add visible class and initialize constellation
      setTimeout(() => {
        animateElementIn(card, 0);
        initializeConstellation(card);
      }, index * 500);
    });
  }, 1500);

  console.log("Main website initialized successfully!");
}

// ===================================
// MOBILE OPTIMIZATIONS
// ===================================

/**
 * Handle mobile-specific optimizations
 */
function initializeMobileOptimizations() {
  // Prevent zoom on iOS
  document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
      e.preventDefault();
    }
  });

  // Handle orientation change
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      // Recalculate star fields
      const starFields = document.querySelectorAll(".star-field");
      starFields.forEach((field) => {
        if (field.classList.contains("main-stars")) {
          createStarField(field, 120);
        } else if (field.classList.contains("login-stars")) {
          createStarField(field, 50);
        }
      });
    }, 500);
  });

  // Optimize scroll performance
  let scrollTimer = null;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = setTimeout(() => {
        // Throttled scroll handling if needed
      }, 10);
    },
    { passive: true }
  );
}

// ===================================
// ERROR HANDLING
// ===================================

/**
 * Global error handler
 */
function initializeErrorHandling() {
  window.addEventListener("error", (e) => {
    console.error("JavaScript error:", e.error);
    // Gracefully handle errors without breaking the experience
  });

  window.addEventListener("unhandledrejection", (e) => {
    console.error("Unhandled promise rejection:", e.reason);
    e.preventDefault();
  });
}

// ===================================
// APPLICATION INITIALIZATION
// ===================================

/**
 * Initialize the entire application
 */
function initializeApp() {
  console.log("Initializing birthday website...");

  // Initialize error handling first
  initializeErrorHandling();

  // Initialize mobile optimizations
  initializeMobileOptimizations();

  // Initialize login system
  initializeLogin();

  console.log("Birthday website ready!");
}

// ===================================
// CLEANUP ON PAGE UNLOAD
// ===================================

window.addEventListener("beforeunload", () => {
  // Clear all intervals
  if (ageUpdateInterval) {
    clearInterval(ageUpdateInterval);
  }
  cleanupShootingStars();
});

// ===================================
// STARTUP
// ===================================

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}

// Add CSS animations for cosmic effects
const cosmicKeyframes = `
    @keyframes cosmicDrift {
        0% { transform: translateX(0) translateY(0); opacity: 0.1; }
        50% { opacity: 0.4; }
        100% { transform: translateX(5px) translateY(-5px); opacity: 0.1; }
    }

    @keyframes shootingStarMove {
        0% { opacity: 0; transform: translateX(-20px) translateY(-20px); }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; transform: translateX(40px) translateY(40px); }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;

// Inject cosmic animations
const styleSheet = document.createElement("style");
styleSheet.textContent = cosmicKeyframes;
document.head.appendChild(styleSheet);
