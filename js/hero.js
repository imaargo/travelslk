/* TravelsLK — home hero: video, loop crossfade, parallax, pause control */
(function () {
  "use strict";

  var hero = document.querySelector("[data-hero]");
  if (!hero) return;

  var video = hero.querySelector("[data-hero-video]");
  var deck = hero.querySelector("[data-hero-deck]");
  var motion = hero.querySelector("[data-hero-motion]");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var desktop = window.matchMedia("(min-width: 981px)");

  var conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection || {};
  var saveData = !!conn.saveData;
  var slowNetwork = /(^|-)2g$/.test(conn.effectiveType || "");

  var userPaused = false;
  var inView = true;
  var loaded = false;

  function canRun() {
    return desktop.matches && !reduceMotion.matches && !saveData && !slowNetwork;
  }

  /* ---------- video ---------- */
  function loadVideo() {
    if (!video || loaded) return;
    var src = video.getAttribute("data-src");
    if (!src) return;
    loaded = true;
    var source = document.createElement("source");
    source.src = src;
    source.type = "video/mp4";
    video.appendChild(source);
    video.load();
  }

  function attemptPlay() {
    if (!video || !loaded || userPaused || !inView || document.hidden) return;
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {
        /* autoplay blocked or video failed — keep the poster */
        hero.classList.remove("is-animated");
      });
    }
  }

  function syncButton() {
    if (!video || !motion) return;
    var paused = video.paused || userPaused;
    motion.setAttribute("aria-pressed", paused ? "true" : "false");
    motion.setAttribute("aria-label", paused ? "Play background video" : "Pause background video");
  }

  function startVideo() {
    if (!canRun() || !video) return;
    loadVideo();
    hero.classList.add("is-animated");
    attemptPlay();
    syncButton();
  }

  if (video) {
    video.addEventListener("playing", function () {
      hero.classList.add("is-playing");
      syncButton();
      startLoopWatch();
    });

    video.addEventListener("pause", function () {
      hero.classList.remove("is-playing");
      hero.classList.remove("is-looping");
      syncButton();
    });

    /* fade through the poster as the clip wraps, so the loop never hard-cuts.
       Driven by rAF rather than timeupdate, which fires too coarsely on some
       browsers to catch the last half second reliably. */
    var loopFrame = null;

    function watchLoop() {
      loopFrame = null;
      if (!video.paused && video.duration) {
        var left = video.duration - video.currentTime;
        if (left < 0.55) {
          hero.classList.add("is-looping");
        } else if (video.currentTime < 0.4) {
          hero.classList.remove("is-looping");
        }
        loopFrame = window.requestAnimationFrame(watchLoop);
      }
    }

    function startLoopWatch() {
      if (loopFrame === null) loopFrame = window.requestAnimationFrame(watchLoop);
    }
  }

  if (motion && video) {
    motion.addEventListener("click", function () {
      userPaused = !userPaused;
      if (userPaused) {
        video.pause();
      } else {
        loadVideo();
        attemptPlay();
      }
      syncButton();
    });
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          inView = entry.isIntersecting && entry.intersectionRatio > 0.12;
          if (!video || !loaded) return;
          if (inView && !userPaused) {
            attemptPlay();
          } else if (!inView && !video.paused) {
            video.pause();
          }
        });
      },
      { threshold: [0, 0.12, 0.5] }
    ).observe(hero);
  }

  document.addEventListener("visibilitychange", function () {
    if (!video || !loaded) return;
    if (document.hidden) {
      video.pause();
    } else if (!userPaused && inView) {
      attemptPlay();
    }
  });

  /* ---------- pointer + scroll parallax ---------- */
  var targetX = 0;
  var targetY = 0;
  var currentX = 0;
  var currentY = 0;
  var pointerFrame = null;
  var scrollFrame = null;

  function animatePointer() {
    pointerFrame = null;
    currentX += (targetX - currentX) * 0.09;
    currentY += (targetY - currentY) * 0.09;
    hero.style.setProperty("--mx", currentX.toFixed(3));
    hero.style.setProperty("--my", currentY.toFixed(3));
    if (Math.abs(targetX - currentX) > 0.0015 || Math.abs(targetY - currentY) > 0.0015) {
      pointerFrame = window.requestAnimationFrame(animatePointer);
    }
  }

  function queuePointer() {
    if (!pointerFrame) pointerFrame = window.requestAnimationFrame(animatePointer);
  }

  function onPointerMove(event) {
    if (!canRun() || !deck) return;
    var rect = hero.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    queuePointer();
  }

  function onPointerLeave() {
    targetX = 0;
    targetY = 0;
    queuePointer();
  }

  function queueScroll() {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(function () {
      scrollFrame = null;
      if (!canRun()) return;
      var rect = hero.getBoundingClientRect();
      var progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, rect.height)));
      hero.style.setProperty("--sp", progress.toFixed(3));
    });
  }

  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    hero.addEventListener("pointermove", onPointerMove, { passive: true });
    hero.addEventListener("pointerleave", onPointerLeave, { passive: true });
  }
  window.addEventListener("scroll", queueScroll, { passive: true });

  /* ---------- environment changes ---------- */
  function refresh() {
    if (canRun()) {
      startVideo();
    } else {
      hero.classList.remove("is-animated", "is-playing", "is-looping");
      if (video && !video.paused) video.pause();
      hero.style.setProperty("--mx", "0");
      hero.style.setProperty("--my", "0");
      hero.style.setProperty("--sp", "0");
    }
  }

  if (typeof reduceMotion.addEventListener === "function") {
    reduceMotion.addEventListener("change", refresh);
    desktop.addEventListener("change", refresh);
  } else if (typeof reduceMotion.addListener === "function") {
    reduceMotion.addListener(refresh);
    desktop.addListener(refresh);
  }

  refresh();
})();
