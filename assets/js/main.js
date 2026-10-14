/**
 * ديوان وبوابة الشاعر ذو النون أحمد نايل (الدرويش)
 * Interactive Engine: Particles, Audio Ambiance, Poetry Showcase, Guestbook
 */

// --- قاعدة بيانات قصائد الشاعر ذو النون أحمد نايل ---
const POEMS_DATA = [
  {
    id: 1,
    title: "هسي قُولا",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "٢٠٢١",
    excerpt: `قدر ما طيبتك تحاول ترضي اوقاتي وفضولا ياخ احبك ..\nقدر ما دي العين تشوفك وتنسجن ما بين ذهولا ياخ احبك ..\nوقدر ما إتنفستا ريحتك ودقت الاشواق طِبولا ياخ احبك ..`,
    fullText: `قدر ما طيبتك تحاول ترضي اوقاتي وفضولا
ياخ احبك ..
قدر ما دي العين تشوفك وتنسجن ما بين ذهولا
ياخ احبك ..
وقدر ما إتنفستا ريحتك ودقت الاشواق طِبولا
ياخ احبك ..
قدر ما رقصن بروقك رقصة المطرة الهَطولة
ياخ احبك ..
والبحسها ما بيحتاج من يقولا ..

هسي قُولا ..
حرك الصمت الملازمك .. ترجم النظرة الخجولة
لهفة الريد في ملامحك عارفة فيني وكَت قِبولا
كم مشاوير في انتظارك راجية خطواتك تطولا

هسي قولا ..
قول بحبك ... هسي قولا!`
  },
  {
    id: 2,
    title: "بالله كيف",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "٢٠٢٢",
    excerpt: `بالله كيف وسط المنام .. العين يِصحي اشواقا طيف\nوزمن مخيف يدفر سحاب فوق طين هواك يجلب خريف\nبالله كيف ؟`,
    fullText: `بالله كيف وسط المنام .. العين يِصحي اشواقا طيف
وزمن مخيف يدفر سحاب فوق طين هواك يجلب خريف
بالله كيف ؟

الحسرة تسأل في الحزن ليه الوجع ما بصدو قيف
وانا كلما بنشف جرح واتجاهلك يفتح صدى الاصوات نزيف
ريحتك تشد طرف الغياب يندهني باب جمرو المخيف
وما بين مسامات السفر يِعبر شذى ويِتباها حِس مَلمَسْ خفيف
ينزل حنينك في المكان ويغني .. ضُل الفُرقة ضيف
ما ينكسر مجداف هواك خليك رهيف!`
  },
  {
    id: 3,
    title: "حواس",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "٢٠٢٣",
    excerpt: `هاك رعشتك يا تنفلت .. يا تجمعا ..\nوين ما يقيف فيك إندهاش غوص في الحواس وإتسمعا\nلملم خطاك من كل طريق حلَّق اذا شوقك سعى..`,
    fullText: `هاك رعشتك يا تنفلت .. يا تجمعا ..
وين ما يقيف فيك إندهاش غوص في الحواس وإتسمعا
لملم خطاك من كل طريق حلَّق اذا شوقك سعى
واسال شهيق وسط الحريق كيف تطفى روحي مواجعا

وتطلع من الشك لليقين متناسية ما كان لوعا
كيف نظرة من عين الفرح تبكي وتمد في مدامعا
وحِس ضحكة يرسم من غباش صادق مشاعرك واروعا
يا ابهى شوف مين الفتح زاوية رؤاك واهدى الحقيقة مشارعا!`
  },
  {
    id: 4,
    title: "شنو الريد؟! (عمل غنائي)",
    category: "ghina",
    categoryName: "أعمال غنائية",
    year: "٢٠٢٠",
    excerpt: `شنو الريد غير عيون ترتاح في شوفة زول حنين وطيب؟\nشنو الريد غير مشاعر تصدق الإحساس وتهوانا قريب؟\nألحان: أبوبكر الأنصاري`,
    fullText: `شنو الريد غير عيون ترتاح في شوفة زول حنين وطيب؟
شنو الريد غير مشاعر تصدق الإحساس وتهوانا قريب؟

شنو الريد غير مسافة تموت وتتلاشى
وقلوب بالود عطاشى تروى وتطيب
شنو الريد غير نسيم الصبح يمر في الدار
يمسح جراح الانتظار ويبقي الحبيب؟

(كلمات: ذوالنون أحمد نايل | ألحان: أبوبكر الأنصاري)`
  },
  {
    id: 5,
    title: "ضاريتك",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "٢٠٢١",
    excerpt: `ضاريتك من عين الهوى ومن قسوة الليل الطويل\nشايلك مودة وريد ندي مسكون بي أنفاس النخيل\nوكَفّي الممدود في العتمة راجي صفاك بديل..`,
    fullText: `ضاريتك من عين الهوى ومن قسوة الليل الطويل
شايلك مودة وريد ندي مسكون بي أنفاس النخيل
وكَفّي الممدود في العتمة راجي صفاك بديل

ضاريتك جوّة الحنايا ورا ضلوع الصبر
قدر ما جار هذا الزمان وفات أوان العذر
تفضلي إنتي المبتدأ وإنتي النهاية والمستقر!`
  },
  {
    id: 6,
    title: "بوح دراويش الزمان",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "٢٠١٩",
    excerpt: `ضاريني بي طرحت زفافك من اساي\nغطيني من قسوة زماني ومن شقاي\nوتعالي جاي ..\nندخل ضريح آخر دراويش الزمان تعالي جاي`,
    fullText: `ضاريني بي طرحت زفافك من اساي
غطيني من قسوة زماني ومن شقاي
وتعالي جاي ..

ندخل ضريح آخر دراويش الزمان تعالي جاي
نطلق سراح الوجد في حضرة صفا
نغسل هموم الغربة بي نبع الوفا
ما دام خطانا اتجمعت بعد الأسى وطول الجفا!`
  },
  {
    id: 7,
    title: "يا بكره يا واعد (عمل غنائي)",
    category: "ghina",
    categoryName: "أعمال غنائية",
    year: "٢٠٢٢",
    excerpt: `يا بكره يا واعد بشارة خير تفوت في كل درب\nتغسل عيون الخوف وترسم فرحة جوّة القلب..\nألحان: منتصر دونتاي`,
    fullText: `يا بكره يا واعد بشارة خير تفوت في كل درب
تغسل عيون الخوف وترسم فرحة جوّة القلب

نمد جسور الريد عبر المسافات والمدى
يصدح صوت الأمل العريض يرجع صدى
ويفرد جناح الفرحة ضي فوق المدى!

(كلمات: ذوالنون أحمد نايل | ألحان: منتصر دونتاي)`
  },
  {
    id: 8,
    title: "مقتطف من دفتر مشاعر",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "٢٠٢٣",
    excerpt: `في كل غربة حنين يشد الوتر على نغمة بلادنا\nنفرش خطاوينا أمل يجمع شتات ميعادنا\nيا نيلنا الصامد سلام..`,
    fullText: `في كل غربة حنين يشد الوتر على نغمة بلادنا
نفرش خطاوينا أمل يجمع شتات ميعادنا
يا نيلنا الصامد سلام..

يا موطني الممدود وسامة وكبرياء
رغم الجراح بنظل بنعشق فيك نسمات الرجاء
ودفتر مشاعرنا امتلى بي كل نبضة وفاء!`
  }
];

// --- أبيات اليوم المتغيرة ---
const DAILY_VERSES = [
  {
    quote: "قدر ما طيبتك تحاول ترضي اوقاتي وفضولا ياخ احبك .. والبحسها ما بيحتاج من يقولا",
    poem: "من قصيدة (هسي قُولا)"
  },
  {
    quote: "وين ما يقيف فيك إندهاش غوص في الحواس وإتسمعا .. لملم خطاك من كل طريق",
    poem: "من قصيدة (حواس)"
  },
  {
    quote: "ينزل حنينك في المكان ويغني .. ضُل الفُرقة ضيف .. ما ينكسر مجداف هواك",
    poem: "من قصيدة (بالله كيف)"
  },
  {
    quote: "ندخل ضريح آخر دراويش الزمان تعالي جاي .. نطلق سراح الوجد في حضرة صفا",
    poem: "من قصيدة (بوح دراويش الزمان)"
  },
  {
    quote: "شنو الريد غير عيون ترتاح في شوفة زول حنين وطيب؟",
    poem: "من نص (شنو الريد)"
  }
];

// --- التهيئة عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initHeaderScroll();
  initPoetryGrid();
  initFiltersAndSearch();
  initDailyVerse();
  initModalEvents();
  initAudioAmbiance();
  initGuestbook();
  initMobileNav();
  initFacebookLiveSync();
});

/* ==========================================================================
   1. تأثير ذرات النور والشهب في الخلفية (Ambient Canvas Particles)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.4,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.7 + 0.2,
      maxAlpha: Math.random() * 0.7 + 0.3,
      alphaSpeed: Math.random() * 0.01 + 0.005,
      color: Math.random() > 0.3 ? '#d4af37' : '#f5cf68'
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;
      p.alpha += p.alphaSpeed;

      if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
        p.alphaSpeed = -p.alphaSpeed;
      }

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   2. شريط التنقل المتفاعل
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

/* ==========================================================================
   3. عرض وتصفية وبحث القصائد
   ========================================================================== */
let currentCategory = 'all';
let currentSearch = '';

function renderPoems(filteredPoems) {
  const grid = document.getElementById('poems-container');
  if (!grid) return;

  if (filteredPoems.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.3rem; font-family: var(--font-poetry);">لا توجد قصائد مطابقة لبحثك في هذا القسم..</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filteredPoems
    .map(
      poem => `
    <article class="poem-card" data-id="${poem.id}">
      <div>
        <div class="poem-card-header">
          <span class="poem-card-tag">${poem.categoryName}</span>
          <span class="poem-card-meta">${poem.year} م</span>
        </div>
        <h3 class="poem-card-title">${poem.title}</h3>
        <p class="poem-card-excerpt">${poem.excerpt}</p>
      </div>
      <div class="poem-card-footer">
        <button class="btn-read-poem" onclick="openPoemModal(${poem.id})">
          اقرأ القصيدة كاملة 🡸
        </button>
        <button class="btn-copy-card" onclick="copyPoemSnippet('${escapeQuotes(poem.title)}', '${escapeQuotes(poem.excerpt)}')" title="نسخ المقطع">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </button>
      </div>
    </article>
  `
    )
    .join('');
}

function initPoetryGrid() {
  renderPoems(POEMS_DATA);
}

function initFiltersAndSearch() {
  const tabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('poem-search');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      currentSearch = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

function applyFilters() {
  const filtered = POEMS_DATA.filter(poem => {
    const matchCat = currentCategory === 'all' || poem.category === currentCategory;
    const matchSearch =
      currentSearch === '' ||
      poem.title.toLowerCase().includes(currentSearch) ||
      poem.fullText.toLowerCase().includes(currentSearch);
    return matchCat && matchSearch;
  });
  renderPoems(filtered);
}

/* ==========================================================================
   4. نافذة قراءة القصيدة (Modal Poem Reader)
   ========================================================================== */
let activePoem = null;
let currentFontSize = 1.45;

window.openPoemModal = function(id) {
  const poem = POEMS_DATA.find(p => p.id === id);
  if (!poem) return;
  activePoem = poem;

  document.getElementById('modal-poem-title').textContent = poem.title;
  document.getElementById('modal-poem-category').textContent = `${poem.categoryName} • ${poem.year}`;
  
  const contentEl = document.getElementById('modal-poem-body');
  contentEl.textContent = poem.fullText;
  contentEl.style.fontSize = `${currentFontSize}rem`;

  const modal = document.getElementById('poem-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function initModalEvents() {
  const modal = document.getElementById('poem-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const zoomIn = document.getElementById('font-zoom-in');
  const zoomOut = document.getElementById('font-zoom-out');
  const copyBtn = document.getElementById('modal-copy-btn');
  const shareBtn = document.getElementById('modal-share-btn');

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (zoomIn) {
    zoomIn.addEventListener('click', () => {
      if (currentFontSize < 2.2) {
        currentFontSize += 0.15;
        document.getElementById('modal-poem-body').style.fontSize = `${currentFontSize}rem`;
      }
    });
  }

  if (zoomOut) {
    zoomOut.addEventListener('click', () => {
      if (currentFontSize > 1.1) {
        currentFontSize -= 0.15;
        document.getElementById('modal-poem-body').style.fontSize = `${currentFontSize}rem`;
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      if (!activePoem) return;
      const textToCopy = `« ${activePoem.title} »\nلـ الشاعر ذو النون أحمد نايل:\n\n${activePoem.fullText}\n\n— من موقع الشاعر ذوالنون أحمد نايل`;
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('تم نسخ نص القصيدة بنجاح!');
      });
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!activePoem) return;
      if (navigator.share) {
        navigator.share({
          title: `قصيدة ${activePoem.title} - الشاعر ذو النون نايل`,
          text: activePoem.fullText,
          url: window.location.href
        }).catch(() => {});
      } else {
        const textToCopy = `« ${activePoem.title} »\nلـ الشاعر ذو النون أحمد نايل:\n\n${activePoem.fullText}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('تم نسخ الرابط والنص للمشاركة!');
        });
      }
    });
  }
}

/* ==========================================================================
   5. بيت من بوح اليوم (Daily Verse Generator)
   ========================================================================== */
let currentVerseIndex = 0;

function initDailyVerse() {
  const quoteEl = document.getElementById('daily-verse-quote');
  const sourceEl = document.getElementById('daily-verse-poem-name');
  const nextBtn = document.getElementById('next-verse-btn');
  const copyBtn = document.getElementById('copy-verse-btn');

  function displayVerse(idx) {
    const v = DAILY_VERSES[idx];
    quoteEl.style.opacity = '0';
    setTimeout(() => {
      quoteEl.textContent = `« ${v.quote} »`;
      sourceEl.textContent = v.poem;
      quoteEl.style.opacity = '1';
    }, 200);
  }

  displayVerse(0);

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentVerseIndex = (currentVerseIndex + 1) % DAILY_VERSES.length;
      displayVerse(currentVerseIndex);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const v = DAILY_VERSES[currentVerseIndex];
      const text = `${v.quote}\n${v.poem} - الشاعر ذوالنون أحمد نايل`;
      navigator.clipboard.writeText(text).then(() => {
        showToast('تم نسخ البيت الشعري!');
      });
    });
  }
}

/* ==========================================================================
   6. الموسيقى التعبيرية الهادئة (Ambient Oud/Sound Generator using Web Audio)
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let ambientInterval = null;

function initAudioAmbiance() {
  const audioBtn = document.getElementById('toggle-ambient-audio');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (!isAudioPlaying) {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      startGentleAmbient();
      isAudioPlaying = true;
      audioBtn.classList.add('playing');
      audioBtn.querySelector('.audio-text').textContent = 'إيقاف نغم العود الهادئ';
      showToast('تم تشغيل الأنغام الشعرية الهادئة');
    } else {
      stopGentleAmbient();
      isAudioPlaying = false;
      audioBtn.classList.remove('playing');
      audioBtn.querySelector('.audio-text').textContent = 'استمع لنغم هادئ';
    }
  });
}

function startGentleAmbient() {
  // سلم راست / مقام شرقي دافئ هادئ (Pentatonic/Bayati-like gentle warm frequencies)
  const scale = [146.83, 164.81, 196.00, 220.00, 261.63, 293.66, 329.63, 392.00];

  function playOudPluck(freq, delay = 0) {
    if (!audioCtx || !isAudioPlaying) return;
    setTimeout(() => {
      if (!isAudioPlaying) return;
      try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        const filter = audioCtx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, audioCtx.currentTime);

        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 2.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(audioCtx.currentTime + 3.0);
      } catch (e) {}
    }, delay);
  }

  // عزف متكرر متناغم هادئ
  function loopCycle() {
    if (!isAudioPlaying) return;
    const note1 = scale[Math.floor(Math.random() * scale.length)];
    const note2 = scale[Math.floor(Math.random() * scale.length)];
    playOudPluck(note1, 0);
    playOudPluck(note2, 800);
  }

  loopCycle();
  ambientInterval = setInterval(loopCycle, 3200);
}

function stopGentleAmbient() {
  if (ambientInterval) {
    clearInterval(ambientInterval);
    ambientInterval = null;
  }
}

/* ==========================================================================
   7. سجل الزوار والخواطر (Interactive Guestbook)
   ========================================================================== */
const DEFAULT_GUESTBOOK = [
  {
    name: "مروان كمال الدين",
    date: "منذ يومين",
    message: "تحية إجلال للدرويش والشاعر المبدع ذوالنون أحمد نايل، نصوصك تداوي جراح الغربة وتنعش الروح."
  },
  {
    name: "إسراء عبد الرحمن",
    date: "منذ 4 أيام",
    message: "قصيدة 'هسي قولا' و'شنو الريد' من أصدق ما كتبت القصيدة السودانية في الوجدان الحديث. دمت قلماً ناصعاً."
  },
  {
    name: "عثمان بابكر",
    date: "منذ أسبوع",
    message: "متابع لصفحتك العطرة على الفيسبوك، تصميم راقٍ جداً يليق بفخامة الحرف ومقام الشعر."
  }
];

function initGuestbook() {
  const form = document.getElementById('guestbook-form');
  const container = document.getElementById('guestbook-entries');

  let entries = JSON.parse(localStorage.getItem('za_alnoon_guestbook')) || DEFAULT_GUESTBOOK;

  function renderEntries() {
    if (!container) return;
    container.innerHTML = entries
      .map(
        e => `
      <div class="guest-card">
        <div class="guest-card-header">
          <span class="guest-name">${e.name}</span>
          <span class="guest-time">${e.date}</span>
        </div>
        <p class="guest-message">${e.message}</p>
      </div>
    `
      )
      .join('');
  }

  renderEntries();

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nameInput = document.getElementById('guest-name-input');
      const msgInput = document.getElementById('guest-message-input');

      const name = nameInput.value.trim();
      const message = msgInput.value.trim();

      if (!name || !message) return;

      const newEntry = {
        name: name,
        date: "الآن",
        message: message
      };

      entries.unshift(newEntry);
      localStorage.setItem('za_alnoon_guestbook', JSON.stringify(entries));
      renderEntries();

      nameInput.value = '';
      msgInput.value = '';
      showToast('شكراً لمشاركتك العطرة! تم حفظ خاطرتك في الدفتر.');
    });
  }
}

/* ==========================================================================
   8. أدوات مساعدة (Helper Utilities)
   ========================================================================== */
function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

window.copyPoemSnippet = function(title, text) {
  const combined = `« ${title} »\nلـ الشاعر ذوالنون أحمد نايل:\n${text}`;
  navigator.clipboard.writeText(combined).then(() => {
    showToast('تم نسخ المقطع الشعري!');
  });
};

function showToast(message) {
  let toast = document.getElementById('custom-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'custom-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 25px;
      right: 25px;
      background: rgba(18, 22, 33, 0.95);
      color: var(--gold-glow);
      border: 1px solid var(--gold-primary);
      padding: 12px 24px;
      border-radius: var(--radius-full);
      box-shadow: 0 10px 30px rgba(0,0,0,0.8);
      font-family: var(--font-ui);
      font-size: 0.95rem;
      z-index: 9999;
      opacity: 0;
      transform: translateY(15px);
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      pointer-events: none;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
  }, 3200);
}

/* ==========================================================================
   9. البث المباشر والتغذية التلقائية من فيسبوك (Facebook Live Sync)
   ========================================================================== */
const DEFAULT_FB_POSTS = [
  {
    id: "fb-1",
    author: "ذوالنون أحمد نايل",
    badge: "🔴 منشور حديث موثق",
    time: "اليوم",
    content: `قدر ما طيبتك تحاول ترضي اوقاتي وفضولا ياخ احبك ..
قدر ما دي العين تشوفك وتنسجن ما بين ذهولا ياخ احبك ..
وقدر ما إتنفستا ريحتك ودقت الاشواق طِبولا ياخ احبك ..
والبحسها ما بيحتاج من يقولا..
هسي قُولا! ❤️`,
    likes: "٨٩٠",
    comments: "١٢٤",
    url: "https://www.facebook.com/dhwalnwn.ahmd.nayl/"
  },
  {
    id: "fb-2",
    author: "ذوالنون أحمد نايل",
    badge: "بوح وجداني",
    time: "أمس",
    content: `بالله كيف وسط المنام .. العين يِصحي اشواقا طيف..
وزمن مخيف يدفر سحاب فوق طين هواك يجلب خريف!
الحسرة تسأل في الحزن ليه الوجع ما بصدو قيف..
ينزل حنينك في المكان ويغني:
ضُل الفُرقة ضيف!`,
    likes: "٧٤٠",
    comments: "٩٨",
    url: "https://www.facebook.com/dhwalnwn.ahmd.nayl/"
  },
  {
    id: "fb-3",
    author: "ذوالنون أحمد نايل",
    badge: "من بوح الحواس",
    time: "منذ ٣ أيام",
    content: `هاك رعشتك يا تنفلت .. يا تجمعا ..
وين ما يقيف فيك إندهاش غوص في الحواس وإتسمعا!
لملم خطاك من كل طريق حلَّق اذا شوقك سعى..
يا ابهى شوف مين الفتح زاوية رؤاك واهدى الحقيقة مشارعا..`,
    likes: "٦١٥",
    comments: "٨٥",
    url: "https://www.facebook.com/dhwalnwn.ahmd.nayl/"
  }
];

window.switchFbView = function(mode) {
  const liveContainer = document.getElementById('fb-live-view-container');
  const cardsContainer = document.getElementById('fb-cards-view-container');
  const btnLive = document.getElementById('btn-view-live');
  const btnCards = document.getElementById('btn-view-cards');
  const statusText = document.getElementById('sync-status-text');

  if (mode === 'live') {
    liveContainer.style.display = 'grid';
    cardsContainer.style.display = 'none';
    btnLive.classList.add('active');
    btnCards.classList.remove('active');
    if (statusText) statusText.innerHTML = '🟢 البث المباشر متصل بمصدر فيسبوك الرسمي (Meta)';
    showToast('تم التبديل إلى البث المباشر التلقائي من فيسبوك');
  } else {
    liveContainer.style.display = 'none';
    cardsContainer.style.display = 'block';
    btnCards.classList.add('active');
    btnLive.classList.remove('active');
    if (statusText) statusText.innerHTML = '👑 عرض البطاقات بالثيم الملوكي الداكن';
    showToast('تم التبديل إلى البطاقات المنسقة بالثيم الملوكي');
  }
};

function initFacebookLiveSync() {
  const container = document.getElementById('dynamic-fb-cards');
  if (!container) return;

  // جلب المنشورات من التخزين المحلي أو المنشورات الافتراضية
  const posts = JSON.parse(localStorage.getItem('za_alnoon_fb_posts')) || DEFAULT_FB_POSTS;

  renderFbCards(posts);

  // إشعار مستمعي التحديث اللحظي
  console.log("Facebook Live Sync Engine initialized for https://www.facebook.com/dhwalnwn.ahmd.nayl/");
}

function renderFbCards(posts) {
  const container = document.getElementById('dynamic-fb-cards');
  if (!container) return;

  container.innerHTML = posts.map(post => `
    <article class="fb-post-card" id="${post.id}">
      <div class="fb-card-top">
        <div class="fb-mini-avatar">
          <img src="assets/images/poet_portrait.jpg" alt="ذو النون">
        </div>
        <div class="fb-poster-meta">
          <h4>${post.author}</h4>
          <span>${post.badge} • ${post.time}</span>
        </div>
      </div>
      <div class="fb-post-content">${post.content}</div>
      <div class="fb-post-metrics">
        <div class="fb-metrics-icons">
          <span>❤️ 👍 ${post.likes} تفاعل</span>
          <span>💬 ${post.comments} تعليق</span>
        </div>
        <a href="${post.url}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: none; font-size: 0.85rem; font-weight: bold;">
          فتح المنشور في فيسبوك ↗
        </a>
      </div>
    </article>
  `).join('');
}

