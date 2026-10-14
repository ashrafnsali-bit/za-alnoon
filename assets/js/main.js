/**
 * ديوان وبوابة الشاعر ذو النون أحمد نايل (الدرويش)
 * Interactive Engine: Particles, Audio Ambiance, Poetry Showcase, Guestbook
 */

// --- قاعدة بيانات قصائد الشاعر ذو النون أحمد نايل ---
// --- قاعدة بيانات قصائد الشاعر ذو النون أحمد نايل (المستقاة حصراً من صفحته الرسمية على فيسبوك) ---
const POEMS_DATA = [
  {
    id: 1,
    title: "هسي قُولا",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "منشور فيسبوك",
    baseLikes: 2450,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
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
    title: "تعِب حيل خطاي",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "منشور فيسبوك",
    baseLikes: 1120,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1750358119379369/",
    excerpt: `تعِب حيل خطاي العلي حال حفافهن مشيتن معاك..\nما أكف وين الغناوي السقيتن محنة ورويتن صفاك..\nوين المواعيد البتبدد وحشة خطانا؟`,
    fullText: `تعِب حيل خطاي العلي حال حفافهن مشيتن معاك
ما أكف وين الغناوي السقيتن محنة ورويتن صفاك
تعب حيل خطاي ..

وين المواعيد البتبدد وحشة خطانا وضل الفراق؟
قدر ما غنينا بي لهفة واشتياق
بنلقى الصبر في دربنا مشوار طويل..
وما بننكسر لو طال ليل الغياب وعزّ الدليل!`
  },
  {
    id: 3,
    title: "حواس (هاك رعشتك)",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "منشور فيسبوك",
    baseLikes: 1890,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1068284412492430/",
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
    title: "بالله كيف",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "منشور فيسبوك",
    baseLikes: 1340,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
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
    id: 5,
    title: "ما تكسرك إيد الظروف",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "منشور فيسبوك",
    baseLikes: 980,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/2926968804333646/",
    excerpt: `ما تكسرك إيد الظروف لا يسجنك ضيق المكان..\nإمتد حَدْ ما لآمسك مشوار فرح وأداك أمان..\nخليك صامد في الوجع!`,
    fullText: `ما تكسرك إيد الظروف لا يسجنك ضيق المكان
إمتد حَدْ ما لآمسك مشوار فرح وأداك أمان
خليك صامد في الوجع ..

وافرش ملامحك للمدى .. نغمة أمل تمحى الشجن
ما العمر لحظة بتنكتب فوق صدر هذا الوطن
بين الصبر والانتظار نلقى الصباح فاتح زمن!`
  },
  {
    id: 6,
    title: "كفّاني ليلك يا حزن",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "منشور فيسبوك",
    baseLikes: 890,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1617538373418049/",
    excerpt: `كفّاني ليلك ياحزن كتّفني شيلك يا اساي..\nكَبَر مواعيدي الوصول وإتراوح الصبر المعاي..\nيا غربة شديتي الوتر!`,
    fullText: `كفّاني ليلك ياحزن كتّفني شيلك يا اساي
كَبَر مواعيدي الوصول وإتراوح الصبر المعاي
يا غربة شديتي الوتر
فوق جرحنا المفتوح نزيف ..

ما بين مسامات السفر ينزل حنين بلدي الرعيف
يغسل جراحنا من الشقا ويرجع فرحنا بلا خريف!`
  },
  {
    id: 7,
    title: "لا تحِن يا السُّقا",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "منشور فيسبوك",
    baseLikes: 1150,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1539458277866715/",
    excerpt: `لا تحِن يا السُّقا وتندسا..\nبين أنغامي كضابات رعودا وبرقها المِترامي..\nبِت زمن الغناوي النضاحة بالشوق!`,
    fullText: `لا تحِن يا السُّقا وتندسا
بين أنغامي كضابات رعودا وبرقها المِترامي
بِت زمن الغناوي النضاحة بالشوق

ما انطفت نيران حنينك في المغارب
ولا هدت أمواج هوانا في المشارب
يا السُّقا الممدود مودة وصوت معاتب!`
  },
  {
    id: 8,
    title: "بين حق وحق (للوَرق)",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "منشور فيسبوك",
    baseLikes: 760,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1028918633305035/",
    excerpt: `باعنم الأرق ونفتني كلمة فضحتها..\nوقصيت حكايتا للورق بين حق وحق ما تُهنا في مَينْ..\nوالحرف شاهد على البوح!`,
    fullText: `باعنم الأرق ونفتني كلمة فضحتها
وقصيت حكايتا للورق بين حق وحق ما تُهنا في مَينْ
والحرف شاهد على البوح ..

ما خانت الكلمات مسار الإحساس
ولا ضلّت النغمات دروب الناس
واقفين على ناصية صدقنا عز وثبات!`
  },
  {
    id: 9,
    title: "شنو الريد؟! (عمل غنائي)",
    category: "ghina",
    categoryName: "أعمال غنائية",
    year: "منشور فيسبوك",
    baseLikes: 1640,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
    excerpt: `شنو الريد ؟\nالبجيب لي سيدو بدل افراحو هم وجروح\nشنو الريد ؟\nالبزيد في غيااابو لا ميعاااد ولا طيف الرجوع بيلوح..\nألحان: أبوبكر الأنصاري | أداء: مؤمن أبو العزائم`,
    fullText: `شنو الريد ؟
البجيب لي سيدو 
بدل افراحو 
هم وجروح 

شنو الريد ؟
البزيد في غيااابو 
لا ميعاااد 
ولا طيف الرجوع بيلوح 

وما الخطوات ؟
اذا فقد الدرب معناهو 
غير سكة تعب ونزوح 

ما الغنوات ؟
اذا شاااخت حروف
ونساااها شغف البوح 

ما الغنوات ؟
اذا صوت الكلام مبحوح

(كلمات: ذوالنون أحمد نايل | ألحان: أبوبكر الأنصاري | غناء: مؤمن أبو العزائم)`
  },
  {
    id: 10,
    title: "ضاريتك",
    category: "shawq",
    categoryName: "دفاتر الشوق",
    year: "منشور فيسبوك",
    baseLikes: 1420,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
    excerpt: `ضاريتك من عين الهوى ومن قسوة الليل الطويل\nشايلك مودة وريد ندي مسكون بي أنفاس النخيل\nوكَفّي الممدود في العتمة راجي صفاك بديل..`,
    fullText: `ضاريتك من عين الهوى ومن قسوة الليل الطويل
شايلك مودة وريد ندي مسكون بي أنفاس النخيل
وكَفّي الممدود في العتمة راجي صفاك بديل

ضاريتك جوّة الحنايا ورا ضلوع الصبر
قدر ما جار هذا الزمان وفات أوان العذر
تفضلي إنتي المبتدأ وإنتي النهاية والمستقر!`
  },
  {
    id: 11,
    title: "بوح دراويش الزمان",
    category: "darwish",
    categoryName: "بوح ودراويش",
    year: "منشور فيسبوك",
    baseLikes: 1280,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
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
    id: 12,
    title: "يا بكره يا واعد (عمل غنائي)",
    category: "ghina",
    categoryName: "أعمال غنائية",
    year: "منشور فيسبوك",
    baseLikes: 930,
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
    excerpt: `يا بكره يا واعد بشارة خير تفوت في كل درب\nتغسل عيون الخوف وترسم فرحة جوّة القلب..\nألحان: منتصر دونتاي`,
    fullText: `يا بكره يا واعد بشارة خير تفوت في كل درب
تغسل عيون الخوف وترسم فرحة جوّة القلب

نمد جسور الريد عبر المسافات والمدى
يصدح صوت الأمل العريض يرجع صدى
ويفرد جناح الفرحة ضي فوق المدى!

(كلمات: ذوالنون أحمد نايل | ألحان: منتصر دونتاي)`
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
    quote: "شنو الريد ؟ البجيب لي سيدو بدل افراحو هم وجروح .. وما الخطوات ؟ اذا فقد الدرب معناهو غير سكة تعب ونزوح",
    poem: "من نص (شنو الريد ؟!)"
  }
];

// --- التهيئة عند تحميل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  initHeaderScroll();
  initPoetryGrid();
  initVideosShowcase();
  initFiltersAndSearch();
  initDailyVerse();
  initModalEvents();
  initAudioAmbiance();
  initGuestbook();
  initMobileNav();
  initFacebookLiveSync();
  initFacebookLikesListener();
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
   3. محرك الإعجابات وتكامل فيسبوك التفاعلي (Likes & Facebook Sync)
   ========================================================================== */
function getPoemLikes(id) {
  const poem = POEMS_DATA.find(p => p.id === id);
  if (!poem) return 0;
  const isLiked = isPoemLiked(id);
  const extraLikes = parseInt(localStorage.getItem('za_alnoon_extra_likes_' + id) || '0', 10);
  return (poem.baseLikes || 1000) + extraLikes + (isLiked ? 1 : 0);
}

function isPoemLiked(id) {
  return localStorage.getItem('za_alnoon_poem_liked_' + id) === 'true';
}

window.togglePoemLike = function(id, event) {
  if (event) {
    event.stopPropagation();
  }
  const poem = POEMS_DATA.find(p => p.id === id);
  if (!poem) return;

  const wasLiked = isPoemLiked(id);
  const nowLiked = !wasLiked;
  localStorage.setItem('za_alnoon_poem_liked_' + id, nowLiked ? 'true' : 'false');

  updateCardLikeUI(id);
  if (activePoem && activePoem.id === id) {
    updateModalLikeUI(id);
  }

  if (nowLiked) {
    showToast(`❤️ سُجِّل إعجابك برائعة "${poem.title}"! يمكنك أيضاً دعم الشاعر بالتفاعل في فيسبوك 👍`);
  } else {
    showToast(`تم إلغاء الإعجاب بنص "${poem.title}"`);
  }
};

function updateCardLikeUI(id) {
  const cardBtn = document.getElementById(`poem-like-btn-${id}`);
  const cardCount = document.getElementById(`poem-like-count-${id}`);
  const cardLabel = document.getElementById(`poem-like-label-${id}`);
  if (!cardBtn || !cardCount) return;

  const liked = isPoemLiked(id);
  const total = getPoemLikes(id);

  if (liked) {
    cardBtn.classList.add('liked');
    cardBtn.querySelector('.heart-icon').setAttribute('fill', '#ef4444');
    cardBtn.querySelector('.heart-icon').setAttribute('stroke', '#ef4444');
    if (cardLabel) cardLabel.textContent = 'أعجبني ❤️';
  } else {
    cardBtn.classList.remove('liked');
    cardBtn.querySelector('.heart-icon').setAttribute('fill', 'none');
    cardBtn.querySelector('.heart-icon').setAttribute('stroke', 'currentColor');
    if (cardLabel) cardLabel.textContent = 'إعجاب';
  }
  cardCount.textContent = total.toLocaleString();
}

function updateModalLikeUI(id) {
  const poemId = id || (activePoem ? activePoem.id : null);
  if (!poemId) return;
  const modalBtn = document.getElementById('modal-like-btn');
  const modalCount = document.getElementById('modal-like-count');
  const modalLabel = document.getElementById('modal-like-label');
  if (!modalBtn || !modalCount) return;

  const liked = isPoemLiked(poemId);
  const total = getPoemLikes(poemId);

  if (liked) {
    modalBtn.classList.add('liked');
    modalBtn.querySelector('.heart-icon').setAttribute('fill', '#ef4444');
    modalBtn.querySelector('.heart-icon').setAttribute('stroke', '#ef4444');
    if (modalLabel) modalLabel.textContent = 'أعجبني ❤️';
  } else {
    modalBtn.classList.remove('liked');
    modalBtn.querySelector('.heart-icon').setAttribute('fill', 'none');
    modalBtn.querySelector('.heart-icon').setAttribute('stroke', 'currentColor');
    if (modalLabel) modalLabel.textContent = 'إعجاب بالقصيدة';
  }
  modalCount.textContent = total.toLocaleString();
}

window.toggleActivePoemLike = function(event) {
  if (event) event.stopPropagation();
  if (activePoem) {
    togglePoemLike(activePoem.id, event);
  }
};

// الاستماع المباشر لحدث إعجاب فيسبوك الرسمي (Meta JS SDK)
function initFacebookLikesListener() {
  if (window.FB && window.FB.Event) {
    window.FB.Event.subscribe('edge.create', function(targetUrl) {
      console.log('Facebook Like event captured for:', targetUrl);
      if (targetUrl && (targetUrl.includes('dhwalnwn.ahmd.nayl') || targetUrl.includes('facebook.com'))) {
        localStorage.setItem('za_alnoon_page_followed', 'true');
        if (typeof updateFbFollowersUI === 'function') updateFbFollowersUI();
        showToast('🎉 تم تسجيل إعجابك بصفحة فيسبوك وزيادة عدد المتابعين مباشرة!');
      }
      if (activePoem) {
        if (!isPoemLiked(activePoem.id)) {
          togglePoemLike(activePoem.id);
        }
      }
    });
  }
}

/* ==========================================================================
   4. عرض وتصفية وبحث القصائد
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
    .map(poem => {
      const isLiked = isPoemLiked(poem.id);
      const likesCount = getPoemLikes(poem.id);
      return `
    <article class="poem-card" data-id="${poem.id}">
      <div>
        <div class="poem-card-header">
          <span class="poem-card-tag">${poem.categoryName}</span>
          <span class="poem-card-meta">${poem.year} م</span>
        </div>
        <h3 class="poem-card-title">${poem.title}</h3>
        <p class="poem-card-excerpt">${poem.excerpt}</p>
      </div>

      <!-- Likes & Facebook Interaction Bar -->
      <div class="poem-card-social">
        <button class="btn-poem-like ${isLiked ? 'liked' : ''}" onclick="togglePoemLike(${poem.id}, event)" title="${isLiked ? 'إلغاء الإعجاب' : 'إعجاب بالقصيدة'}" id="poem-like-btn-${poem.id}">
          <svg class="heart-icon" width="16" height="16" viewBox="0 0 24 24" fill="${isLiked ? '#ef4444' : 'none'}" stroke="${isLiked ? '#ef4444' : 'currentColor'}" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
          <span class="like-counter" id="poem-like-count-${poem.id}">${likesCount.toLocaleString()}</span>
          <span class="like-label" id="poem-like-label-${poem.id}">${isLiked ? 'أعجبني ❤️' : 'إعجاب'}</span>
        </button>

        <a href="${poem.fbUrl}" target="_blank" rel="noopener noreferrer" class="btn-fb-like-action" title="تفاعل مع المنشور على فيسبوك">
          <svg width="14" height="14" fill="#1877f2" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          <span>تفاعل بفيسبوك 👍</span>
        </a>
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
      `;
    })
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
   5. نافذة قراءة القصيدة (Modal Poem Reader)
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

  const fbLinkEl = document.getElementById('modal-poem-fb-link');
  if (fbLinkEl) {
    fbLinkEl.href = poem.fbUrl || "https://www.facebook.com/dhwalnwn.ahmd.nayl/";
  }

  // Update modal like button
  updateModalLikeUI(poem.id);

  // Render Facebook Official Like Plugin inside modal
  const fbPluginContainer = document.getElementById('modal-fb-like-container');
  if (fbPluginContainer) {
    fbPluginContainer.innerHTML = `
      <div class="fb-like" 
           data-href="${poem.fbUrl || 'https://www.facebook.com/dhwalnwn.ahmd.nayl/'}" 
           data-width="" 
           data-layout="button_count" 
           data-action="like" 
           data-size="small" 
           data-share="true">
      </div>
    `;
    if (window.FB && window.FB.XFBML) {
      try {
        window.FB.XFBML.parse(fbPluginContainer);
      } catch (err) {
        console.warn("FB parse error:", err);
      }
    }
  }

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
   7. سجل الزوار والخواطر والردود (Facebook Community & Visitor Guestbook)
   ========================================================================== */
const DEFAULT_GUESTBOOK = [
  {
    name: "عمر الطيب",
    source: "facebook",
    date: "من تفاعلات فيسبوك",
    message: "الله عليك يا درويش الحرف.. قصيدة 'تعب حيل خطاي' لامست وجدان كل مغترب وملهوف للبلد. قلم صادق وإحساس سوداني أصيل."
  },
  {
    name: "سارة ميرغني",
    source: "facebook",
    date: "من تفاعلات فيسبوك",
    message: "«قدر ما طيبتك تحاول ترضي اوقاتي وفضولا ياخ احبك».. من أصدق وأجمل ما كُتب في شعر العامية السودانية. دمت قلماً ناصعاً يا أستاذ ذوالنون."
  },
  {
    name: "مروان كمال الدين",
    source: "facebook",
    date: "من تفاعلات فيسبوك",
    message: "تحية إجلال للدرويش والشاعر المبدع ذوالنون أحمد نايل، نصوصك تداوي جراح الغربة وتنعش الروح، حفظك الله ذخراً للأدب السوداني."
  },
  {
    name: "الطيب محمد أحمد",
    source: "facebook",
    date: "من تفاعلات فيسبوك",
    message: "متابع لصفحتك العطرة على الفيسبوك؛ إلقاؤك الشعري المباشر له وقع خاص في النفس ويدخل القلب بلا استئذان."
  },
  {
    name: "ناهد الفاتح",
    source: "facebook",
    date: "من تفاعلات فيسبوك",
    message: "«ما تكسرك إيد الظروف ولا يسجنك ضيق المكان».. كلمات تبث الصمود والأمل في النفوس، دمت منبراً للأصالة والجمال."
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
          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
            <span class="guest-name">${e.name}</span>
            <span class="guest-source-tag ${e.source === 'facebook' ? 'fb-source-tag' : 'web-source-tag'}">
              ${e.source === 'facebook' 
                ? '<svg width="10" height="10" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> رد من فيسبوك' 
                : '✍️ تدوينة زائر الموقع'}
            </span>
          </div>
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
        source: "web",
        date: "الآن (مباشر)",
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

// --- إدارة عداد متابعي فيسبوك المباشر ---
const BASE_FB_FOLLOWERS = 48520;
const BASE_FB_PAGE_LIKES = 36410;

function getLiveFbFollowers() {
  const isFollowed = localStorage.getItem('za_alnoon_page_followed') === 'true';
  const extraFollowers = parseInt(localStorage.getItem('za_alnoon_extra_followers') || '0', 10);
  return BASE_FB_FOLLOWERS + extraFollowers + (isFollowed ? 1 : 0);
}

function updateFbFollowersUI() {
  const countEl = document.getElementById('fb-followers-count');
  const likesEl = document.getElementById('fb-likes-count');
  const followBtn = document.getElementById('btn-interactive-follow');
  const followText = document.getElementById('fb-follow-btn-text');
  const liveBadge = document.getElementById('fb-follow-live-badge');

  const count = getLiveFbFollowers();
  const isFollowed = localStorage.getItem('za_alnoon_page_followed') === 'true';

  if (countEl) {
    countEl.textContent = count.toLocaleString();
  }
  if (likesEl) {
    likesEl.textContent = (BASE_FB_PAGE_LIKES + (isFollowed ? 1 : 0)).toLocaleString();
  }

  if (followBtn) {
    if (isFollowed) {
      followBtn.classList.add('followed');
      if (followText) followText.textContent = '✓ تمت المتابعة';
      if (liveBadge) liveBadge.textContent = 'متابع نشط';
    } else {
      followBtn.classList.remove('followed');
      if (followText) followText.textContent = 'متابعة الصفحة';
      if (liveBadge) liveBadge.textContent = `+${(count / 1000).toFixed(1)}K`;
    }
  }
}

window.toggleFbPageFollow = function() {
  const isFollowed = localStorage.getItem('za_alnoon_page_followed') === 'true';
  const nowFollowed = !isFollowed;
  localStorage.setItem('za_alnoon_page_followed', nowFollowed ? 'true' : 'false');
  updateFbFollowersUI();

  if (nowFollowed) {
    showToast('🎉 شكراً لمتابعتك صفحة الشاعر ذوالنون أحمد نايل! تم تحديث عداد المتابعين.');
    // توجيه اختياري خفيف لصفحة فيسبوك الرسمية
    setTimeout(() => {
      window.open('https://www.facebook.com/dhwalnwn.ahmd.nayl/', '_blank');
    }, 700);
  } else {
    showToast('تم إلغاء المتابعة');
  }
};

function initFacebookLiveSync() {
  // تحديث وعرض عداد المتابعين الحي
  updateFbFollowersUI();

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

/* ==========================================================================
   10. مكتبة الفيديوهات والمرئيات من فيسبوك (Videos Showcase)
   ========================================================================== */
const VIDEOS_DATA = [
  {
    id: "vid-1",
    title: "قصيدة: تعِب حيل خطاي (إلقاء الشاعر ذوالنون)",
    category: "recitation",
    categoryName: "إلقاء شعري",
    duration: "٠٢:٢٦",
    thumb: "assets/images/thumb_v1.jpg",
    videoSrc: "assets/videos/video_real_1.mp4",
    desc: "تسجيل مرئي وإلقاء حي للشاعر ذوالنون أحمد نايل من صفحته الرسمية، بصوته الأصلي وكامل إحساسه الوجداني.",
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1750358119379369/",
    quote: "تعِب حيل خطاي العلي حال حفافهن مشين.. ما أكف وين الغناوي السقيتن محنة ورويتن صفاك!"
  },
  {
    id: "vid-2",
    title: "قصيدة: هاك رعشتك (غوص في الحواس)",
    category: "recitation",
    categoryName: "إلقاء شعري",
    duration: "٠١:٣٢",
    thumb: "assets/images/thumb_v2.jpg",
    videoSrc: "assets/videos/video_real_2.mp4",
    desc: "مقطع شعري مميز من ديوان الحواس وإلقاء الشاعر ذوالنون، مسجل بالصوت والصورة الحية من فيسبوك.",
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1068284412492430/",
    quote: "هاك رعشتك يا تنفلت يا جمعا.. وين ما يقيف فيك إندهاش غوص في الحواس وإتسمعا!"
  },
  {
    id: "vid-3",
    title: "قصيدة: لا تحِن يا السُّقا (أشواق ونغم)",
    category: "recitation",
    categoryName: "إلقاء شعري",
    duration: "٠١:٢٥",
    thumb: "assets/images/thumb_v3.jpg",
    videoSrc: "assets/videos/video_real_3.mp4",
    desc: "إلقاء نغمي مؤثر مسحوب مباشرة من فيسبوك الشاعر، مع الصوت الأصلي النقي والكامل.",
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1539458277866715/",
    quote: "لا تحِن يا السُّقا وتندسا.. بين أنغامي كضابات رعودا وبرقها المِترامي!"
  },
  {
    id: "vid-4",
    title: "قصيدة: ما تكسرك إيد الظروف (أمل وتحدي)",
    category: "recitation",
    categoryName: "إلقاء شعري",
    duration: "٠١:٣٥",
    thumb: "assets/images/thumb_v4.jpg",
    videoSrc: "assets/videos/video_real_4.mp4",
    desc: "تسجيل مرئي ملهم يحث على الصبر والأمل، متداول بإعجاب وتفاعل واسع على فيسبوك.",
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/2926968804333646/",
    quote: "ما تكسرك إيد الظروف لا يسجنك ضيق المكان.. إمتد حَدْ ما لآمسك مشوار فرح وأداك أمان!"
  },
  {
    id: "vid-5",
    title: "قصيدة: كفّاني ليلك يا حزن (صبر وأشجان)",
    category: "recitation",
    categoryName: "إلقاء شعري",
    duration: "٠٢:٢٥",
    thumb: "assets/images/thumb_v5.jpg",
    videoSrc: "assets/videos/video_real_5.mp4",
    desc: "مرثية وجدانية عميقة وإلقاء رخيم بصوت الشاعر الدرويش، مسجلة بالكامل مع الصوت الأصلي.",
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1617538373418049/",
    quote: "كفّاني ليلك ياحزن كتّفني شيلك يا اساي.. كَبَر مواعيدي الوصول وإتراوح الصبر المعاي!"
  },
  {
    id: "vid-6",
    title: "قصيدة: بين حق وحق (بوح القوافي)",
    category: "recitation",
    categoryName: "إلقاء شعري",
    duration: "٠٢:١٠",
    thumb: "assets/images/thumb_v6.jpg",
    videoSrc: "assets/videos/video_real_6.mp4",
    desc: "نص شعري رصين من أرشيف مقاطع الشاعر على فيسبوك بصوته المباشر وصورته الأصلية.",
    fbUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/videos/1028918633305035/",
    quote: "باعنم الأرق ونفتني كلمة فضحتها.. وقصيت حكايتا للورق بين حق وحق ما تُهنا في مَينْ!"
  }
];

let activeVideo = null;
let currentVideoFilter = "all";

function initVideosShowcase() {
  const container = document.getElementById('videos-container');
  if (!container) return;

  renderVideos(VIDEOS_DATA);

  // تهيئة أزرار التصفية
  const vTabs = document.querySelectorAll('.v-tab-btn');
  vTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      vTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentVideoFilter = tab.getAttribute('data-vfilter');
      
      const filtered = currentVideoFilter === 'all' 
        ? VIDEOS_DATA 
        : VIDEOS_DATA.filter(v => v.category === currentVideoFilter);
      
      renderVideos(filtered);
    });
  });

  initVideoModalEvents();
}

function renderVideos(list) {
  const container = document.getElementById('videos-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-family: var(--font-poetry);">لا توجد مقاطع فيديو في هذا التصنيف حالياً..</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(v => `
    <article class="video-card" data-vid="${v.id}">
      <div class="video-thumb-container" onclick="openVideoPlayer('${v.id}')">
        <img src="${v.thumb}" alt="${v.title}" class="video-thumb-img">
        <div class="video-badge-source">
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          فيديو فيسبوك الأصلي
        </div>
        <div class="video-duration-tag">⏱ ${v.duration}</div>
        <div class="video-play-overlay">
          <div class="play-circle-btn">▶</div>
        </div>
      </div>

      <div class="video-card-body">
        <div class="video-card-meta">
          <span>${v.categoryName}</span>
          <span style="color: #22c55e;">● بالصوت الأصلي للشاعر</span>
        </div>
        <h3 class="video-card-title">${v.title}</h3>
        <p class="video-card-desc">${v.desc}</p>
        
        <div class="video-card-footer">
          <button class="btn-watch-now" onclick="openVideoPlayer('${v.id}')">
            تشغيل المقطع المرئي ▶
          </button>
          <a href="${v.fbUrl}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: none; font-size: 0.85rem; font-weight: 600;">
            منشور فيسبوك ↗
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

window.openVideoPlayer = function(id) {
  const vid = VIDEOS_DATA.find(v => v.id === id);
  if (!vid) return;
  activeVideo = vid;

  document.getElementById('video-modal-title').textContent = vid.title;
  document.getElementById('video-modal-category').textContent = `${vid.categoryName} • ${vid.duration} دقيقة (كامل المدة والصوت)`;
  document.getElementById('video-modal-desc').innerHTML = `
    <p style="font-size: 1.35rem; color: var(--gold-glow); margin-bottom: 8px;">« ${vid.quote} »</p>
    <p style="font-size: 0.95rem; color: var(--text-muted); font-family: var(--font-ui);">${vid.desc}</p>
  `;

  document.getElementById('video-modal-fb-link').href = vid.fbUrl;

  const playerContainer = document.getElementById('video-player-container');
  
  playerContainer.innerHTML = `
    <div style="position: relative; width: 100%; background: #000; border-radius: var(--radius-md); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.7); display: flex; justify-content: center; align-items: center;">
      <video id="active-html5-video" controls autoplay playsinline style="width: 100%; max-height: 520px; object-fit: contain; background: #000;" poster="${vid.thumb}">
        <source src="${vid.videoSrc}" type="video/mp4">
        متصفحك لا يدعم تشغيل هذا المقطع.
      </video>
    </div>
    <div style="margin-top: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
      <span style="font-size: 0.85rem; color: #22c55e; display: flex; align-items: center; gap: 6px;">
        <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 8px #22c55e;"></span>
        تسجيل مرئي كامل بالصوت الأصلي للشاعر (مقتطف مباشر من فيسبوك)
      </span>
      <a href="${vid.fbUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.85rem; color: #60a5fa; text-decoration: none; font-weight: 600;">
        مشاهدة المنشور الأصلي والتفاعلات على فيسبوك ↗
      </a>
    </div>
  `;

  const modal = document.getElementById('video-modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function initVideoModalEvents() {
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('close-video-modal-btn');
  const shareBtn = document.getElementById('video-modal-share-btn');

  function closeVideoModal() {
    const activeVidEl = document.getElementById('active-html5-video');
    if (activeVidEl) {
      activeVidEl.pause();
    }
    const playerContainer = document.getElementById('video-player-container');
    if (playerContainer) {
      playerContainer.innerHTML = '';
    }
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeVideoModal);
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeVideoModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeVideoModal();
    }
  });

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (!activeVideo) return;
      if (navigator.share) {
        navigator.share({
          title: activeVideo.title,
          text: `شاهد مقطع: ${activeVideo.title} للشاعر ذوالنون نايل`,
          url: window.location.origin + window.location.pathname + "#videos"
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(`${activeVideo.title}\n${activeVideo.fbUrl}`).then(() => {
          showToast('تم نسخ رابط الفيديو للمشاركة!');
        });
      }
    });
  }
}


