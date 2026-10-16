/**
 * assets/js/admin.js
 * محرك لوحة تحكم وإدارة ديوان الشاعر ذو النون أحمد نايل
 * إضافة وتعديل القصائد - ترتيب الأحدث أولاً - سحب منشورات فيسبوك وتيك توك
 */

// رمز الدخول الافتراضي للوحة الإدارة
const DEFAULT_ADMIN_PIN = "2026";

// قائمة الأشهر العربية لتحويل وتدقيق التواريخ
const ARABIC_MONTHS = {
  'يناير': 0, 'فبراير': 1, 'مارس': 2, 'أبريل': 3, 'مايو': 4, 'يونيو': 5,
  'يوليو': 6, 'أغسطس': 7, 'سبتمبر': 8, 'أكتوبر': 9, 'نوفمبر': 10, 'ديسمبر': 11
};

// البيانات المركزية للقصائد في لوحة الإدارة
let ADMIN_POEMS = [];
let ADMIN_SOCIAL_FEED = null;
let currentEditingPoemId = null;

// ==========================================================================
// 1. نظام الحماية وتسجيل الدخول (Admin Authentication)
// ==========================================================================
function initAdminAuth() {
  const lockScreen = document.getElementById('admin-lock-screen');
  const isAuth = sessionStorage.getItem('za_alnoon_admin_auth') === 'true';

  if (isAuth && lockScreen) {
    lockScreen.style.display = 'none';
    initAdminDashboard();
    return;
  }

  const pinInputs = document.querySelectorAll('.pin-input');
  pinInputs.forEach((input, idx) => {
    input.addEventListener('input', (e) => {
      const val = e.target.value;
      if (val.length === 1 && idx < pinInputs.length - 1) {
        pinInputs[idx + 1].focus();
      }
      checkPinMatch();
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace' && !e.target.value && idx > 0) {
        pinInputs[idx - 1].focus();
      }
    });
  });

  const submitBtn = document.getElementById('btn-submit-pin');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => checkPinMatch(true));
  }
}

function checkPinMatch(force = false) {
  const pinInputs = Array.from(document.querySelectorAll('.pin-input'));
  const enteredPin = pinInputs.map(inp => inp.value).join('');

  if (enteredPin.length === 4 || force) {
    const savedPin = localStorage.getItem('za_alnoon_admin_custom_pin') || DEFAULT_ADMIN_PIN;
    if (enteredPin === savedPin) {
      sessionStorage.setItem('za_alnoon_admin_auth', 'true');
      const lockScreen = document.getElementById('admin-lock-screen');
      if (lockScreen) {
        lockScreen.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        lockScreen.style.opacity = '0';
        lockScreen.style.transform = 'scale(1.05)';
        setTimeout(() => {
          lockScreen.style.display = 'none';
          initAdminDashboard();
        }, 400);
      }
      showAdminToast('👑 مرحباً بك في لوحة إدارة ديوان الشاعر ذوالنون أحمد نايل');
    } else {
      pinInputs.forEach(inp => {
        inp.style.borderColor = '#ef4444';
        inp.value = '';
      });
      pinInputs[0].focus();
      showAdminToast('❌ رمز المرور غير صحيح! (الرمز الافتراضي: 2026)');
    }
  }
}

function adminLogout() {
  sessionStorage.removeItem('za_alnoon_admin_auth');
  window.location.reload();
}

// ==========================================================================
// 2. دوال تحويل وتدقيق التواريخ (Date Parsing & Sorting Helpers)
// ==========================================================================
function parseArabicDateToTimestamp(dateStr) {
  if (!dateStr) return 0;
  // تحويل الأرقام المشرقية إلى مغربية
  const normalized = String(dateStr).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

  // محاولة الفحص كـ ISO أو تاريخ قياسي
  const standardDate = new Date(normalized);
  if (!isNaN(standardDate.getTime())) return standardDate.getTime();

  // فحص صيغة التاريخ العربي: "11 أكتوبر 2026"
  const match = normalized.match(/(\d+)\s+([^\s\d]+)\s+(\d{4})/);
  if (match) {
    const day = parseInt(match[1], 10);
    const monthName = match[2].trim();
    const year = parseInt(match[3], 10);
    const month = ARABIC_MONTHS[monthName] !== undefined ? ARABIC_MONTHS[monthName] : 0;
    return new Date(year, month, day).getTime();
  }

  // إذا وردت السنة فقط
  const yearMatch = normalized.match(/(\d{4})/);
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1], 10), 0, 1).getTime();
  }

  return 0;
}

// ترتيب القصائد من الأحدث إلى الأقدم (Newest First)
function sortPoemsNewestFirst(poemsList) {
  return poemsList.sort((a, b) => {
    const timeA = a.timestamp || parseArabicDateToTimestamp(a.fbPublishDate || a.year);
    const timeB = b.timestamp || parseArabicDateToTimestamp(b.fbPublishDate || b.year);
    return timeB - timeA;
  });
}

// تحويل التاريخ الحالي إلى نص عربي
function getFormattedArabicDateNow() {
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const now = new Date();
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'م' : 'ص';
  hours = hours % 12 || 12;

  // تحويل الأرقام إلى عربية للتناسق الجمالي
  const toAr = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

  return {
    dateArabic: `${toAr(day)} ${month} ${toAr(year)}`,
    timeArabic: `${toAr(hours)}:${toAr(minutes)} ${ampm}`,
    timestamp: now.getTime()
  };
}

// ==========================================================================
// 3. تحميل ودمج القصائد من المصادر (Data Loader)
// ==========================================================================
function loadAdminPoems() {
  // 1. فحص وجود بيانات مخصصة محفوظة محلياً
  const savedCustom = localStorage.getItem('za_alnoon_custom_poems_v1');
  if (savedCustom) {
    try {
      const parsed = JSON.parse(savedCustom);
      if (Array.isArray(parsed) && parsed.length > 0) {
        ADMIN_POEMS = parsed;
        sortPoemsNewestFirst(ADMIN_POEMS);
        return;
      }
    } catch(e) {}
  }

  // 2. إذا لم توجد بيانات مخصصة، نأخذ POEMS_DATA الأصلية
  if (typeof POEMS_DATA !== 'undefined' && Array.isArray(POEMS_DATA)) {
    ADMIN_POEMS = JSON.parse(JSON.stringify(POEMS_DATA));
  } else {
    ADMIN_POEMS = [];
  }

  sortPoemsNewestFirst(ADMIN_POEMS);
  saveAdminPoemsLocally();
}

function saveAdminPoemsLocally() {
  sortPoemsNewestFirst(ADMIN_POEMS);
  localStorage.setItem('za_alnoon_custom_poems_v1', JSON.stringify(ADMIN_POEMS));
}

// ==========================================================================
// 4. تهيئة لوحة التحكم (Dashboard Initialization)
// ==========================================================================
function initAdminDashboard() {
  loadAdminPoems();
  fetchSocialFeedForAdmin();
  renderPoemsTable();
  updateAdminStats();
  initAdminTabs();
  initFormEvents();
  initEditModalEvents();
}

function updateAdminStats() {
  const totalCountEl = document.getElementById('stat-total-poems');
  const liveCountEl = document.getElementById('stat-live-posts');
  const lastSyncEl = document.getElementById('stat-last-sync');

  if (totalCountEl) totalCountEl.textContent = ADMIN_POEMS.length;
  if (liveCountEl) {
    const fbCount = (ADMIN_SOCIAL_FEED?.facebookPosts?.length || 4);
    const ttCount = (ADMIN_SOCIAL_FEED?.tiktokVideos?.length || 7);
    liveCountEl.textContent = `${fbCount + ttCount} منشور ومقطع`;
  }
  if (lastSyncEl) {
    const now = new Date();
    lastSyncEl.textContent = `متصل الآن (${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')})`;
  }
}

// ==========================================================================
// 5. التبديل بين التبويبات (Admin Tabs Switcher)
// ==========================================================================
function initAdminTabs() {
  const tabBtns = document.querySelectorAll('.admin-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }

      if (targetId === 'tab-manage-poems') {
        renderPoemsTable();
      } else if (targetId === 'tab-social-radar') {
        renderSocialRadarCards();
      }
    });
  });
}

function switchTab(tabId) {
  const btn = document.querySelector(`.admin-tab-btn[data-target="${tabId}"]`);
  if (btn) btn.click();
}

// ==========================================================================
// 6. عرض جدول القصائد مع الترتيب والبحث (Render Poems Table)
// ==========================================================================
function renderPoemsTable(filterQuery = '') {
  const tbody = document.getElementById('poems-table-body');
  if (!tbody) return;

  sortPoemsNewestFirst(ADMIN_POEMS);

  const query = filterQuery.trim().toLowerCase();
  const list = ADMIN_POEMS.filter(p => {
    return query === '' || 
      p.title.toLowerCase().includes(query) || 
      (p.categoryName && p.categoryName.toLowerCase().includes(query)) ||
      (p.fullText && p.fullText.toLowerCase().includes(query));
  });

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 3rem; color: var(--text-muted);">
          لا توجد قصائد مطابقة لبحثك..
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = list.map((poem, index) => {
    const isNewest = index === 0;
    const versesCount = poem.fullText ? poem.fullText.split('\n').filter(l => l.trim().length > 0).length : 0;

    return `
      <tr id="row-poem-${poem.id}">
        <td>
          <span class="poem-row-order">${index + 1}</span>
        </td>
        <td class="poem-title-cell">
          <h4>${poem.title} ${isNewest ? '<span class="badge-newest">🌟 الأحدث</span>' : ''}</h4>
          <span>${poem.excerpt ? poem.excerpt.split('\n')[0].slice(0, 50) + '...' : ''}</span>
        </td>
        <td>
          <span class="badge-category">${poem.categoryName || 'بوح ودراويش'}</span>
        </td>
        <td>
          <div style="font-size: 0.82rem; color: #cbd5e1;">
            <strong>${poem.fbPublishDate || poem.year || 'غير محدد'}</strong>
            ${poem.fbPublishTime ? `<div style="font-size: 0.72rem; color: var(--text-dim);">${poem.fbPublishTime}</div>` : ''}
          </div>
        </td>
        <td>
          <span style="font-size: 0.85rem; color: var(--gold-light);">❤️ ${poem.baseLikes || 100}</span>
          <div style="font-size: 0.72rem; color: var(--text-dim);">${versesCount} بيت</div>
        </td>
        <td>
          ${poem.fbUrl ? `
            <a href="${poem.fbUrl}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
              <span>فيسبوك</span>
              <span>↗</span>
            </a>
          ` : '<span style="color: var(--text-dim); font-size: 0.78rem;">—</span>'}
        </td>
        <td>
          <div class="table-actions">
            <button class="btn-action-icon" onclick="openEditPoemModal('${poem.id}')" title="تعديل القصيدة">
              ✏️
            </button>
            <button class="btn-action-icon" onclick="previewPoemModal('${poem.id}')" title="معاينة النص">
              👁️
            </button>
            <button class="btn-action-icon btn-action-delete" onclick="deletePoem('${poem.id}')" title="حذف القصيدة">
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// فلترة فورية بالبحث
function filterPoemsTable(input) {
  renderPoemsTable(input.value);
}

// ==========================================================================
// 7. إضافة قصيدة جديدة (Add New Poem)
// ==========================================================================
function initFormEvents() {
  const addForm = document.getElementById('add-poem-form');
  if (!addForm) return;

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('poem-title-input').value.trim();
    const category = document.getElementById('poem-category-select').value;
    const categoryName = document.getElementById('poem-category-select').selectedOptions[0].text;
    const fullText = document.getElementById('poem-text-input').value.trim();
    let dateStr = document.getElementById('poem-date-input').value.trim();
    const timeStr = document.getElementById('poem-time-input').value.trim();
    const fbUrl = document.getElementById('poem-fburl-input').value.trim();
    const badge = document.getElementById('poem-badge-input').value.trim();

    if (!title || !fullText) {
      showAdminToast('⚠️ يرجى ملء عنوان القصيدة وأبياتها الكاملة!');
      return;
    }

    if (!dateStr) {
      const nowData = getFormattedArabicDateNow();
      dateStr = nowData.dateArabic;
    }

    const lines = fullText.split('\n').filter(l => l.trim().length > 0);
    const excerpt = lines.slice(0, 3).join('\n.. ');

    const newPoem = {
      id: 'admin-' + Date.now(),
      title: title,
      category: category,
      categoryName: categoryName,
      year: "منشور فيسبوك وتيك توك",
      fbPublishDate: dateStr,
      fbPublishTime: timeStr || "حديث",
      timestamp: Date.now(), // يضمن تصدرها كأحدث قصيدة
      baseLikes: Math.floor(Math.random() * 50) + 90,
      fbUrl: fbUrl || "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
      excerpt: excerpt,
      fullText: fullText,
      badge: badge || "✨ أحدث قصيدة"
    };

    // إدراج القصيدة في رأس القائمة
    ADMIN_POEMS.unshift(newPoem);
    saveAdminPoemsLocally();
    updateAdminStats();

    // تفريغ النموذج
    addForm.reset();
    showAdminToast(`🎉 تم حفظ وإدراج قصيدة «${newPoem.title}» بنجاح في رأس الديوان!`);

    // الانتقال لتبويب الإدارة
    switchTab('tab-manage-poems');
  });
}

// ==========================================================================
// 8. تعديل قصيدة قائمة (Edit Existing Poem Modal)
// ==========================================================================
function initEditModalEvents() {
  const editForm = document.getElementById('edit-poem-form');
  const closeBtn = document.getElementById('close-edit-modal-btn');
  const cancelBtn = document.getElementById('btn-cancel-edit');
  const modal = document.getElementById('admin-edit-modal');

  const closeModal = () => {
    if (modal) modal.classList.remove('active');
    currentEditingPoemId = null;
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!currentEditingPoemId) return;

      const poemIndex = ADMIN_POEMS.findIndex(p => String(p.id) === String(currentEditingPoemId));
      if (poemIndex === -1) return;

      const title = document.getElementById('edit-title-input').value.trim();
      const category = document.getElementById('edit-category-select').value;
      const categoryName = document.getElementById('edit-category-select').selectedOptions[0].text;
      const fullText = document.getElementById('edit-text-input').value.trim();
      const dateStr = document.getElementById('edit-date-input').value.trim();
      const timeStr = document.getElementById('edit-time-input').value.trim();
      const fbUrl = document.getElementById('edit-fburl-input').value.trim();
      const likes = parseInt(document.getElementById('edit-likes-input').value, 10) || 100;

      const lines = fullText.split('\n').filter(l => l.trim().length > 0);
      const excerpt = lines.slice(0, 3).join('\n.. ');

      ADMIN_POEMS[poemIndex] = {
        ...ADMIN_POEMS[poemIndex],
        title,
        category,
        categoryName,
        fbPublishDate: dateStr,
        fbPublishTime: timeStr,
        timestamp: parseArabicDateToTimestamp(dateStr),
        baseLikes: likes,
        fbUrl,
        excerpt,
        fullText
      };

      saveAdminPoemsLocally();
      closeModal();
      renderPoemsTable();
      showAdminToast(`✅ تم تحديث قصيدة «${title}» بنجاح!`);
    });
  }
}

window.openEditPoemModal = function(poemId) {
  const poem = ADMIN_POEMS.find(p => String(p.id) === String(poemId));
  if (!poem) return;

  currentEditingPoemId = poem.id;

  document.getElementById('edit-title-input').value = poem.title || '';
  document.getElementById('edit-category-select').value = poem.category || 'darwish';
  document.getElementById('edit-date-input').value = poem.fbPublishDate || poem.year || '';
  document.getElementById('edit-time-input').value = poem.fbPublishTime || '';
  document.getElementById('edit-fburl-input').value = poem.fbUrl || '';
  document.getElementById('edit-likes-input').value = poem.baseLikes || 100;
  document.getElementById('edit-text-input').value = poem.fullText || '';

  const modal = document.getElementById('admin-edit-modal');
  if (modal) modal.classList.add('active');
};

// حذف قصيدة
window.deletePoem = function(poemId) {
  const poem = ADMIN_POEMS.find(p => String(p.id) === String(poemId));
  if (!poem) return;

  if (confirm(`هل أنت متأكد من رغبتك في حذف قصيدة «${poem.title}» من الديوان نهائياً؟`)) {
    ADMIN_POEMS = ADMIN_POEMS.filter(p => String(p.id) !== String(poemId));
    saveAdminPoemsLocally();
    renderPoemsTable();
    updateAdminStats();
    showAdminToast(`🗑️ تم حذف قصيدة «${poem.title}» وتحديث ديوان الموقع.`);
  }
};

// معاينة القصيدة
window.previewPoemModal = function(poemId) {
  const poem = ADMIN_POEMS.find(p => String(p.id) === String(poemId));
  if (!poem) return;
  alert(`📜 ${poem.title} (${poem.categoryName})\n\nالتاريخ: ${poem.fbPublishDate || poem.year}\n\n${poem.fullText}`);
};

// ==========================================================================
// 9. رادار استيراد منشورات فيسبوك وتيك توك (Social Ingestion Radar)
// ==========================================================================
async function fetchSocialFeedForAdmin(forceToast = false) {
  try {
    const res = await fetch(`assets/data/social_feed.json?t=${Date.now()}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    ADMIN_SOCIAL_FEED = data;

    renderSocialRadarCards();
    updateAdminStats();

    if (forceToast) {
      showAdminToast('🟢 تم سحب أحدث بيانات فيسبوك وتيك توك بنجاح!');
    }
  } catch (err) {
    console.warn('[Admin Social Sync] تعذر استدعاء social_feed.json:', err.message);
  }
}

function renderSocialRadarCards() {
  const container = document.getElementById('social-radar-cards-container');
  if (!container) return;

  const fbPosts = ADMIN_SOCIAL_FEED?.facebookPosts || [];
  const ttVideos = ADMIN_SOCIAL_FEED?.tiktokVideos || [];

  if (fbPosts.length === 0 && ttVideos.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        لا توجد منشورات مسحوبة حالياً.. انقر على زر "سحب أحدث المنشورات الآن".
      </div>
    `;
    return;
  }

  const fbHtml = fbPosts.map(post => `
    <article class="social-ingest-card">
      <div>
        <div class="social-card-top">
          <span class="social-platform-pill pill-fb">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            فيسبوك مباشر
          </span>
          <span style="font-size: 0.75rem; color: var(--text-dim);">${post.publishDate}</span>
        </div>
        <div class="social-card-content">${post.content}</div>
        <div class="social-card-meta">
          <span>❤️ ${post.likes} تفاعل</span> • 
          <a href="${post.url}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; text-decoration: none;">فتح المنشور ↗</a>
        </div>
      </div>
      <button class="btn-convert-poem" onclick="convertSocialPostToPoem('${post.id}', 'facebook')">
        <span>📜 تحويل إلى قصيدة بالديوان</span>
        <span>+</span>
      </button>
    </article>
  `).join('');

  const ttHtml = ttVideos.map(vid => `
    <article class="social-ingest-card">
      <div>
        <div class="social-card-top">
          <span class="social-platform-pill pill-tt">
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.33 6.33 0 0 0 6.32-6.32V8.92a8.28 8.28 0 0 0 4.84 1.57v-3.8z"/></svg>
            تيك توك @drwesh22
          </span>
          <span style="font-size: 0.75rem; color: var(--text-dim);">⏱️ ${vid.duration}</span>
        </div>
        <h4 style="font-size: 1rem; color: #fff; margin-bottom: 6px;">${vid.title}</h4>
        <div class="social-card-content" style="font-family: var(--font-ui); font-size: 0.88rem;">${vid.caption}</div>
        <div class="social-card-meta">
          <span>👁️ ${vid.views} مشاهدة</span> • <span>❤️ ${vid.likes}</span> • 
          <a href="${vid.url}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: none;">فتح الفيديو ↗</a>
        </div>
      </div>
      <button class="btn-convert-poem" onclick="convertSocialPostToPoem('${vid.id}', 'tiktok')">
        <span>🎬 إدراج كعمل شعري بالديوان</span>
        <span>+</span>
      </button>
    </article>
  `).join('');

  container.innerHTML = fbHtml + ttHtml;
}

// تحويل المنشور إلى قصيدة بنقرة واحدة
window.convertSocialPostToPoem = function(id, platform) {
  if (platform === 'facebook') {
    const post = (ADMIN_SOCIAL_FEED?.facebookPosts || []).find(p => p.id === id);
    if (!post) return;

    const lines = post.content.split('\n').filter(l => l.trim().length > 0);
    const rawTitle = lines[0].replace(/[#*]/g, '').trim();
    const title = rawTitle.length > 3 ? rawTitle : 'بوح من فيسبوك';

    const poem = {
      id: 'fb-poem-' + Date.now(),
      title: title,
      category: 'darwish',
      categoryName: 'بوح ودراويش',
      year: 'منشور فيسبوك',
      fbPublishDate: post.publishDate || 'محدث الآن',
      fbPublishTime: post.publishTime || 'حديث',
      timestamp: Date.now(),
      baseLikes: parseInt(post.likes, 10) || 120,
      fbUrl: post.url,
      excerpt: lines.slice(0, 3).join('\n.. '),
      fullText: post.content,
      badge: '🔴 مستقى من فيسبوك'
    };

    ADMIN_POEMS.unshift(poem);
    saveAdminPoemsLocally();
    updateAdminStats();
    showAdminToast(`✨ تم إدراج منشور فيسبوك كقصيدة جديدة: «${poem.title}» في رأس الديوان!`);
    switchTab('tab-manage-poems');

  } else if (platform === 'tiktok') {
    const vid = (ADMIN_SOCIAL_FEED?.tiktokVideos || []).find(v => v.id === id);
    if (!vid) return;

    const poem = {
      id: 'tt-poem-' + Date.now(),
      title: vid.title,
      category: 'darwish',
      categoryName: 'إلقاء تيك توك',
      year: 'مقطع تيك توك',
      fbPublishDate: 'محدث الآن',
      fbPublishTime: vid.duration,
      timestamp: Date.now(),
      baseLikes: parseInt(vid.likes, 10) || 80,
      fbUrl: vid.url,
      excerpt: vid.caption,
      fullText: `${vid.title}\n\n${vid.caption}\n\n🎙️ إلقاء بصوت الشاعر ذوالنون أحمد نايل\nحساب تيك توك الرسمي: @drwesh22`,
      badge: '🎵 من تيك توك'
    };

    ADMIN_POEMS.unshift(poem);
    saveAdminPoemsLocally();
    updateAdminStats();
    showAdminToast(`🎬 تم إدراج مقطع تيك توك كقصيدة جديدة: «${poem.title}» في رأس الديوان!`);
    switchTab('tab-manage-poems');
  }
};

// ==========================================================================
// 10. تصدير وحفظ البيانات ومزامنة GitHub
// ==========================================================================
function exportPoemsJSON() {
  sortPoemsNewestFirst(ADMIN_POEMS);
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ADMIN_POEMS, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `za_alnoon_poems_sorted_${new Date().toISOString().slice(0,10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showAdminToast('📥 تم تصدير ملف القصائد المحدثة بنجاح!');
}

function deployChangesNotice() {
  saveAdminPoemsLocally();
  showAdminToast('💾 تم حفظ كافة التعديلات محلياً وتحديث الموقع فوراً! لنشرها لجميع الزوار على الإنترنت، قم بتشغيل deploy.ps1 أو أتمتة GitHub.');
}

// ==========================================================================
// 11. رسائل التنبيهات (Admin Toast Message)
// ==========================================================================
function showAdminToast(msg) {
  let toast = document.getElementById('admin-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'admin-toast';
    toast.className = 'admin-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.adminToastTimer);
  window.adminToastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  initAdminAuth();
});
