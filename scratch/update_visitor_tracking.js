const fs = require('fs');
const path = require('path');

// 1. Update assets/js/main.js
const mainJsPath = path.join(__dirname, '..', 'assets', 'js', 'main.js');
let mainJs = fs.readFileSync(mainJsPath, 'utf8');

const oldTrackFnStart = '/* ==========================================================================\r\n   14. تتبع زيارات';
const oldTrackFnAlt = '/* ==========================================================================\n   14. تتبع زيارات';

const newTrackCode = `/* ==========================================================================
   14. تتبع زيارات الموقع السحابي بصمت تام خلف الكواليس (Cloud Site Visit Telemetry)
   خاص حصرياً بلوحة تحكم الإدارة (admin.html) - بدون أي أثر أو ظهور في الواجهة الرئيسية
   يرسل النبضات إلى السيرفر السحابي الموحد لضمان احتساب الزيارات الحقيقية من كافة الأجهزة
   ========================================================================== */
function trackSiteVisit() {
  try {
    // عدم احتساب فتح صفحة الإدارة كزيارة عادية
    if (window.location && window.location.pathname && window.location.pathname.includes('admin.html')) return;

    const STORAGE_KEY = 'za_alnoon_site_visits';
    const SESSION_KEY = 'za_alnoon_session_active';
    const UID_KEY = 'za_alnoon_visitor_uid';
    const COUNT_API_BASE = 'https://countapi.mileshilliard.com/api/v1';

    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
    const todayKey = 'za_alnoon_official_daily_' + todayStr.replace(/-/g, '_');

    // 1. فحص الجلسة النشطة (تجنب التكرار عند تحديث نفس الزائر للصفحة)
    const isNewSession = !sessionStorage.getItem(SESSION_KEY);
    if (isNewSession) {
      sessionStorage.setItem(SESSION_KEY, 'active_' + Date.now());
      // إرسال نبضة الزيارة السحابية الموحدة
      fetch(\`\${COUNT_API_BASE}/hit/za_alnoon_official_site\`, { mode: 'cors' }).catch(() => {});
      fetch(\`\${COUNT_API_BASE}/hit/\${todayKey}\`, { mode: 'cors' }).catch(() => {});
    }

    // 2. فحص الزائر الفريد
    let uid = localStorage.getItem(UID_KEY);
    if (!uid) {
      uid = 'usr_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
      localStorage.setItem(UID_KEY, uid);
      // إرسال نبضة زائر فريد جديد للسيرفر السحابي
      fetch(\`\${COUNT_API_BASE}/hit/za_alnoon_official_unique\`, { mode: 'cors' }).catch(() => {});
    }

    // 3. تحديث الكاش المحلي كنسخة احتياطية سريعة
    let stats = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) stats = JSON.parse(raw);
    } catch (e) {}

    if (!stats || typeof stats.totalVisits !== 'number') {
      stats = {
        totalVisits: 1486,
        todayVisits: 43,
        uniqueVisitors: 1120,
        lastDate: todayStr,
        lastVisitTime: now.toISOString()
      };
    }

    if (stats.lastDate !== todayStr) {
      stats.todayVisits = 0;
      stats.lastDate = todayStr;
    }

    if (!uid) {
      stats.uniqueVisitors = (stats.uniqueVisitors || 1120) + 1;
    }

    if (isNewSession) {
      stats.totalVisits = (stats.totalVisits || 1486) + 1;
      stats.todayVisits = (stats.todayVisits || 0) + 1;
      stats.lastVisitTime = now.toISOString();
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch (err) {
    // تتبع صامت بدون أي استثناء أو تدخل في الواجهة
  }
}
`;

const trackIdx = mainJs.indexOf('14. تتبع زيارات');
if (trackIdx !== -1) {
  // Find start of comment block
  const commentStart = mainJs.lastIndexOf('/* ==========================================================================', trackIdx);
  if (commentStart !== -1) {
    mainJs = mainJs.slice(0, commentStart) + newTrackCode;
    fs.writeFileSync(mainJsPath, mainJs, 'utf8');
    console.log('✅ Updated main.js with Cloud Visitor Telemetry');
  }
} else {
  console.log('⚠️ Could not find trackSiteVisit block in main.js');
}

// 2. Update assets/js/admin.js
const adminJsPath = path.join(__dirname, '..', 'assets', 'js', 'admin.js');
let adminJs = fs.readFileSync(adminJsPath, 'utf8');

const newAdminMetricsCode = `// قراءة وتحديث إحصائيات زوار الموقع الحقيقية والربط السحابي اللحظي
function updateAdminVisitorMetrics() {
  const visitorsEl = document.getElementById('stat-total-visitors');
  const todayEl = document.getElementById('stat-today-visitors');
  const uniqueEl = document.getElementById('stat-unique-visitors');
  if (!visitorsEl && !todayEl && !uniqueEl) return;

  const formatNum = n => Number(n || 0).toLocaleString('en-US');
  const STORAGE_KEY = 'za_alnoon_site_visits';
  const COUNT_API_BASE = 'https://countapi.mileshilliard.com/api/v1';
  const todayKey = 'za_alnoon_official_daily_' + new Date().toISOString().slice(0, 10).replace(/-/g, '_');

  // 1. عرض القيم المحفوظة محلياً أو المضمنة فوراً لتفادي الانتظار
  let stats = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) stats = JSON.parse(raw);
  } catch (e) {}

  if (!stats || typeof stats.totalVisits !== 'number') {
    stats = ADMIN_SOCIAL_FEED?.siteAnalytics || {
      totalVisits: 1486,
      todayVisits: 43,
      uniqueVisitors: 1120
    };
  }

  if (visitorsEl) visitorsEl.textContent = formatNum(stats.totalVisits);
  if (todayEl) todayEl.textContent = formatNum(stats.todayVisits);
  if (uniqueEl) uniqueEl.textContent = formatNum(stats.uniqueVisitors);

  // 2. جلب الأرقام الحقيقية المحدثة لحظياً من السيرفر السحابي الموحد (Live Global Counter)
  Promise.all([
    fetch(\`\${COUNT_API_BASE}/get/za_alnoon_official_site\`, { mode: 'cors' }).then(r => r.json()).catch(() => null),
    fetch(\`\${COUNT_API_BASE}/get/\${todayKey}\`, { mode: 'cors' }).then(r => r.json()).catch(() => null),
    fetch(\`\${COUNT_API_BASE}/get/za_alnoon_official_unique\`, { mode: 'cors' }).then(r => r.json()).catch(() => null)
  ]).then(([siteData, todayData, uniqueData]) => {
    let updated = false;

    if (siteData && typeof siteData.value === 'number') {
      stats.totalVisits = siteData.value;
      if (visitorsEl) visitorsEl.textContent = formatNum(siteData.value);
      updated = true;
    }

    if (todayData && typeof todayData.value === 'number') {
      stats.todayVisits = todayData.value;
      if (todayEl) todayEl.textContent = formatNum(todayData.value);
      updated = true;
    } else if (todayData && todayData.error === 'Key not found') {
      stats.todayVisits = 0;
      if (todayEl) todayEl.textContent = '0';
      updated = true;
    }

    if (uniqueData && typeof uniqueData.value === 'number') {
      stats.uniqueVisitors = uniqueData.value;
      if (uniqueEl) uniqueEl.textContent = formatNum(uniqueData.value);
      updated = true;
    }

    if (updated) {
      stats.lastDate = new Date().toISOString().slice(0, 10);
      stats.lastVisitTime = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    }
  }).catch(() => {
    // الاحتفاظ بالبيانات المحلية إذا تعذر الاتصال
  });
}

// دالة للإدارة لمعايرة أو تحديث عداد الزيارات عند الحاجة
window.calibrateAdminVisitors = function(event) {
  if (event) event.stopPropagation();
  const current = parseInt(document.getElementById('stat-total-visitors')?.textContent?.replace(/,/g, '') || '1486', 10);
  const promptVal = prompt('👑 [لوحة الإدارة] إدخال رقم أساسي لعدد زوار الموقع:', current);
  if (promptVal !== null) {
    const newCount = parseInt(promptVal.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(newCount) && newCount >= 0) {
      const STORAGE_KEY = 'za_alnoon_site_visits';
      const COUNT_API_BASE = 'https://countapi.mileshilliard.com/api/v1';

      // تحديث السيرفر السحابي الموحد فوراً
      fetch(\`\${COUNT_API_BASE}/set/za_alnoon_official_site?value=\${newCount}\`).catch(() => {});
      const uniqueCalc = Math.round(newCount * 0.75);
      fetch(\`\${COUNT_API_BASE}/set/za_alnoon_official_unique?value=\${uniqueCalc}\`).catch(() => {});

      let stats = {};
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) stats = JSON.parse(raw) || {};
      } catch (e) {}
      stats.totalVisits = newCount;
      if (!stats.todayVisits) stats.todayVisits = 43;
      stats.uniqueVisitors = uniqueCalc;
      stats.lastDate = new Date().toISOString().slice(0, 10);
      stats.lastVisitTime = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));

      updateAdminVisitorMetrics();
      showAdminToast(\`✅ تم تحديث وتثبيت عداد زوار الموقع سحابياً إلى: \${newCount.toLocaleString('en-US')}\`);
    }
  }
};`;

const updateMetricsIdx = adminJs.indexOf('function updateAdminVisitorMetrics()');
const initAdminTabsIdx = adminJs.indexOf('function initAdminTabs()');

if (updateMetricsIdx !== -1 && initAdminTabsIdx !== -1) {
  const commentStart = adminJs.lastIndexOf('// قراءة وتحديث', updateMetricsIdx);
  const replaceStart = commentStart !== -1 ? commentStart : updateMetricsIdx;
  // find preceding comments for section 5
  const section5Start = adminJs.lastIndexOf('// ==========================================================================', initAdminTabsIdx);
  
  adminJs = adminJs.slice(0, replaceStart) + newAdminMetricsCode + '\n\n' + adminJs.slice(section5Start);
  fs.writeFileSync(adminJsPath, adminJs, 'utf8');
  console.log('✅ Updated admin.js with Cloud Visitor Metrics and calibrateAdminVisitors');
} else {
  console.log('⚠️ Could not find updateAdminVisitorMetrics block in admin.js');
}
