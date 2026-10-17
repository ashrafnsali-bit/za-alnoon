const fs = require('fs');
const path = require('path');

const adminJsPath = path.join(__dirname, '..', 'assets', 'js', 'admin.js');
let code = fs.readFileSync(adminJsPath, 'utf8');

// 1. Add formatPoemSourceBadge helper
const sourceBadgeFn = `
/* ==========================================================================
   دالة فحص وتنسيق شارة مصدر القصيدة (تيك توك / فيسبوك ريلز / فيسبوك فيديو)
   ========================================================================== */
function formatPoemSourceBadge(url, context = '') {
  if (!url || typeof url !== 'string' || !url.trim()) {
    return '<span style="color: var(--text-dim); font-size: 0.78rem;">— بدون رابط</span>';
  }

  const clean = url.trim();

  // 1. مصدر تيك توك
  if (/tiktok\.com/i.test(clean) || /تيك\\s*توك/i.test(context)) {
    return \`
      <a href="\${clean}" target="_blank" rel="noopener noreferrer" 
         class="source-badge badge-tiktok"
         style="color: #00f2fe; background: rgba(0, 242, 254, 0.12); border: 1px solid rgba(0, 242, 254, 0.35); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-weight: 600; white-space: nowrap; transition: all 0.2s ease;" 
         onmouseover="this.style.background='rgba(0, 242, 254, 0.25)'"
         onmouseout="this.style.background='rgba(0, 242, 254, 0.12)'"
         title="رابط تيك توك الأصلي: \${clean}">
        <span>🎵 تيك توك</span>
        <span style="font-size: 0.7rem;">↗</span>
      </a>
    \`;
  }

  // 2. فيسبوك ريلز
  if (/facebook\\.com\\/reel\\//i.test(clean)) {
    return \`
      <a href="\${clean}" target="_blank" rel="noopener noreferrer" 
         class="source-badge badge-fb-reel"
         style="color: #c084fc; background: rgba(192, 132, 252, 0.12); border: 1px solid rgba(192, 132, 252, 0.35); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-weight: 600; white-space: nowrap; transition: all 0.2s ease;" 
         onmouseover="this.style.background='rgba(192, 132, 252, 0.25)'"
         onmouseout="this.style.background='rgba(192, 132, 252, 0.12)'"
         title="ريلز فيسبوك الرسمي: \${clean}">
        <span>🎬 فيسبوك ريلز</span>
        <span style="font-size: 0.7rem;">↗</span>
      </a>
    \`;
  }

  // 3. فيسبوك فيديو
  if (/facebook\\.com\\/(?:[^/]+\\/videos|video|watch)/i.test(clean) || /facebook\\.com\\/share\\/v\\//i.test(clean)) {
    return \`
      <a href="\${clean}" target="_blank" rel="noopener noreferrer" 
         class="source-badge badge-fb-video"
         style="color: #60a5fa; background: rgba(96, 165, 250, 0.12); border: 1px solid rgba(96, 165, 250, 0.35); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-weight: 600; white-space: nowrap; transition: all 0.2s ease;" 
         onmouseover="this.style.background='rgba(96, 165, 250, 0.25)'"
         onmouseout="this.style.background='rgba(96, 165, 250, 0.12)'"
         title="فيديو فيسبوك الرسمي: \${clean}">
        <span>📹 فيسبوك فيديو</span>
        <span style="font-size: 0.7rem;">↗</span>
      </a>
    \`;
  }

  // 4. فيسبوك منشور عادي
  if (/facebook\\.com/i.test(clean)) {
    return \`
      <a href="\${clean}" target="_blank" rel="noopener noreferrer" 
         class="source-badge badge-fb-post"
         style="color: #60a5fa; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.25); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; font-weight: 600; white-space: nowrap; transition: all 0.2s ease;" 
         onmouseover="this.style.background='rgba(96, 165, 250, 0.2)'"
         onmouseout="this.style.background='rgba(96, 165, 250, 0.1)'"
         title="منشور فيسبوك الرسمي: \${clean}">
        <span>📘 فيسبوك</span>
        <span style="font-size: 0.7rem;">↗</span>
      </a>
    \`;
  }

  // 5. رابط عام
  return \`
    <a href="\${clean}" target="_blank" rel="noopener noreferrer" 
       class="source-badge badge-external"
       style="color: #cbd5e1; background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.2); padding: 4px 10px; border-radius: 12px; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 5px; white-space: nowrap;" 
       title="رابط المصدر: \${clean}">
      <span>🌐 المصدر</span>
      <span style="font-size: 0.7rem;">↗</span>
    </a>
  \`;
}
`;

// Insert formatPoemSourceBadge before loadAdminPoems
const loadAdminPoemsIdx = code.indexOf('function loadAdminPoems()');
if (loadAdminPoemsIdx !== -1) {
  code = code.slice(0, loadAdminPoemsIdx) + sourceBadgeFn + '\n' + code.slice(loadAdminPoemsIdx);
}

// 2. Update loadAdminPoems to merge and sync with POEMS_DATA
const updatedLoadAdminPoems = `function loadAdminPoems() {
  const basePoems = (typeof POEMS_DATA !== 'undefined' && Array.isArray(POEMS_DATA))
    ? JSON.parse(JSON.stringify(POEMS_DATA))
    : [];

  const savedCustom = localStorage.getItem('za_alnoon_custom_poems_v1');
  if (savedCustom) {
    try {
      const parsed = JSON.parse(savedCustom);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const baseMap = new Map();
        basePoems.forEach(p => {
          baseMap.set(String(p.id), p);
          baseMap.set(p.title, p);
          if (p.fbUrl) baseMap.set(extractCanonicalMediaKey(p.fbUrl, p.title), p);
        });

        parsed.forEach(customPoem => {
          const matchKey = extractCanonicalMediaKey(customPoem.fbUrl, customPoem.title);
          const match = baseMap.get(matchKey) || baseMap.get(String(customPoem.id)) || baseMap.get(customPoem.title);
          if (!match) {
            basePoems.push(customPoem);
          } else {
            // تحديث الرابط والتفاصيل من النسخة المعتمدة
            if (match.fbUrl) customPoem.fbUrl = match.fbUrl;
            Object.assign(match, customPoem);
          }
        });
      }
    } catch(e) {}
  }

  ADMIN_POEMS = deduplicatePoemsByLink(basePoems);
  sortPoemsNewestFirst(ADMIN_POEMS);
  saveAdminPoemsLocally();
}`;

const oldLoadIdx = code.indexOf('function loadAdminPoems()');
const oldSaveIdx = code.indexOf('function saveAdminPoemsLocally()');
if (oldLoadIdx !== -1 && oldSaveIdx !== -1) {
  code = code.slice(0, oldLoadIdx) + updatedLoadAdminPoems + '\n\n' + code.slice(oldSaveIdx);
}

// 3. Update table rendering for source cell
// Replace the old cell with formatPoemSourceBadge
const oldCell = `<td>
          \${poem.fbUrl ? \`
            <a href="\${poem.fbUrl}" target="_blank" rel="noopener noreferrer" style="color: #60a5fa; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
              <span>فيسبوك</span>
              <span>↗</span>
            </a>
          \` : '<span style="color: var(--text-dim); font-size: 0.78rem;">—</span>'}
        </td>`;

const newCell = `<td>
          \${formatPoemSourceBadge(poem.fbUrl, (poem.categoryName || '') + ' ' + (poem.year || ''))}
        </td>`;

if (code.includes(oldCell)) {
  code = code.replace(oldCell, newCell);
  console.log('✅ Replaced old hardcoded cell with formatPoemSourceBadge');
} else {
  // Try regex replace for flexibility
  const cellRegex = /<td>\s*\$\{poem\.fbUrl\s*\?[\s\S]*?<span>فيسبوك<\/span>[\s\S]*?<\/td>/;
  if (cellRegex.test(code)) {
    code = code.replace(cellRegex, newCell);
    console.log('✅ Replaced with regex replace');
  } else {
    console.log('⚠️ Could not match old cell');
  }
}

fs.writeFileSync(adminJsPath, code, 'utf8');
console.log('💾 Successfully updated assets/js/admin.js');
