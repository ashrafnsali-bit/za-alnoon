const fs = require('fs');
const path = require('path');

const mainJsPath = path.join(__dirname, '..', 'assets', 'js', 'main.js');
let code = fs.readFileSync(mainJsPath, 'utf8');

// 1. Fix CURRENT_TIKTOK_DATA TDZ error
const target1 = "let CURRENT_TIKTOK_DATA = typeof TIKTOK_DATA !== 'undefined' ? TIKTOK_DATA : [];";
const replace1 = "let CURRENT_TIKTOK_DATA = [];";

if (code.includes(target1)) {
  code = code.replace(target1, replace1);
  console.log('✅ Replaced target1 (CURRENT_TIKTOK_DATA TDZ fix)');
} else {
  console.log('⚠️ Could not find target1');
}

// 2. Enhance initVideosShowcase and filterVideosByTab
const target2 = `function initVideosShowcase() {
  const container = document.getElementById('videos-container');
  if (!container) return;

  const cleanVideos = deduplicateVideosByLink(VIDEOS_DATA);
  renderVideos(cleanVideos);

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
}`;

const replace2 = `// دالة تصفية المرئيات العامة (تعمل بالنقر المباشر أو عبر مستمعات الأحداث)
window.filterVideosByTab = function(filterCategory, btnEl) {
  const vTabs = document.querySelectorAll('.v-tab-btn');
  vTabs.forEach(t => t.classList.remove('active'));

  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    const target = document.querySelector(\`.v-tab-btn[data-vfilter="\${filterCategory}"]\`);
    if (target) target.classList.add('active');
  }

  currentVideoFilter = filterCategory || 'all';
  const allClean = deduplicateVideosByLink(VIDEOS_DATA);
  const filtered = currentVideoFilter === 'all'
    ? allClean
    : allClean.filter(v => v.category === currentVideoFilter);

  renderVideos(filtered);
};

function initVideosShowcase() {
  const container = document.getElementById('videos-container');
  if (!container) return;

  const cleanVideos = deduplicateVideosByLink(VIDEOS_DATA);
  renderVideos(cleanVideos);

  // تهيئة أزرار التصفية
  const vTabs = document.querySelectorAll('.v-tab-btn');
  vTabs.forEach(tab => {
    tab.onclick = function() {
      const filter = this.getAttribute('data-vfilter') || 'all';
      window.filterVideosByTab(filter, this);
    };
  });

  initVideoModalEvents();
}`;

// Normalize line endings for replacement
const normalize = s => s.replace(/\r\n/g, '\n');

if (normalize(code).includes(normalize(target2))) {
  // Replace cleanly
  const normCode = normalize(code);
  const idx = normCode.indexOf(normalize(target2));
  const before = normCode.slice(0, idx);
  const after = normCode.slice(idx + normalize(target2).length);
  code = before + replace2 + after;
  console.log('✅ Replaced target2 (filterVideosByTab & initVideosShowcase)');
} else {
  console.log('⚠️ Could not find target2');
}

// 3. Update empty state in renderVideos
const target3 = `  if (list.length === 0) {
    container.innerHTML = \`
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-family: var(--font-poetry);">لا توجد مقاطع فيديو في هذا التصنيف حالياً..</p>
      </div>
    \`;
    return;
  }`;

const replace3 = `  if (list.length === 0) {
    container.innerHTML = \`
      <div style="grid-column: 1/-1; text-align: center; padding: 3.5rem 1.5rem; background: rgba(255,255,255,0.02); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
        <div style="font-size: 2.5rem; margin-bottom: 0.8rem;">🎬</div>
        <p style="font-size: 1.15rem; font-family: var(--font-poetry); color: var(--gold-light); margin-bottom: 0.6rem;">لا توجد تسجيلات مضافة حالياً في هذا التصنيف</p>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.2rem;">يمكنك مشاهدة كافة المقاطع واللقاءات والمشاركات التلفزيونية مباشرة على صفحة الشاعر الرسمية.</p>
        <a href="https://www.facebook.com/dhwalnwn.ahmd.nayl/videos" target="_blank" rel="noopener noreferrer" class="btn-facebook" style="display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; padding: 8px 20px;">
          <span>مكتبة فيديوهات فيسبوك ↗</span>
        </a>
      </div>
    \`;
    return;
  }`;

const normCode = normalize(code);
if (normCode.includes(normalize(target3))) {
  const idx = normCode.indexOf(normalize(target3));
  const before = normCode.slice(0, idx);
  const after = normCode.slice(idx + normalize(target3).length);
  code = before + replace3 + after;
  console.log('✅ Replaced target3 (empty state in renderVideos)');
}

fs.writeFileSync(mainJsPath, code, 'utf8');
console.log('💾 Successfully saved assets/js/main.js');
