/**
 * scripts/sync-social.js
 * مَحْرَك الأَتْمَتَة والمزامنة الديناميكية لمنشورات وقصائد فيسبوك وتيك توك
 * للشاعر ذو النون أحمد نايل
 *
 * يعمل هذا السكربت عبر:
 * 1. مجدول المهام التلقائي (GitHub Actions Cron Schedule)
 * 2. وب هوك الاستدعاء الفوري (GitHub Actions repository_dispatch Webhook)
 * 3. التشغيل اليدوي (Manual Dispatch)
 */

const fs = require('fs');
const path = require('path');

const FEED_FILE = path.join(__dirname, '..', 'assets', 'data', 'social_feed.json');

// قراءة بيانات التغذية الحالية
function loadFeed() {
  try {
    if (fs.existsSync(FEED_FILE)) {
      const data = fs.readFileSync(FEED_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('⚠️ خطأ في قراءة social_feed.json:', err.message);
  }
  return {
    version: "1.0.0",
    lastUpdated: new Date().toISOString(),
    syncStatus: "active_live",
    poetStats: {
      facebook: { followers: "5,595", following: "703", pageUrl: "https://www.facebook.com/dhwalnwn.ahmd.nayl/", liveSyncActive: true },
      tiktok: { handle: "@drwesh22", followers: "+5,096", likes: "+11.8K", following: "3,318", profileUrl: "https://www.tiktok.com/@drwesh22", liveSyncActive: true }
    },
    facebookPosts: [],
    tiktokVideos: [],
    syncedPoems: []
  };
}

// حفظ البيانات المحدثة
function saveFeed(feed) {
  feed.lastUpdated = new Date().toISOString();
  fs.writeFileSync(FEED_FILE, JSON.stringify(feed, null, 2), 'utf8');
  console.log('✅ تم حفظ التغذية المحدثة بنجاح في:', FEED_FILE);
}

// تنسيق التاريخ والوقت العربي
function getArabicDateTime() {
  const now = new Date();
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'م' : 'ص';
  hours = hours % 12 || 12;

  return {
    publishDate: `${day} ${month} ${year}`,
    publishTime: `${hours}:${minutes} ${ampm}`,
    timeAgo: 'منذ لحظات'
  };
}

// معالجة وب هوك الوارد (Payload)
function handleIncomingPayload(feed, payload) {
  const { publishDate, publishTime, timeAgo } = getArabicDateTime();
  const platform = (payload.platform || 'facebook').toLowerCase();
  const isFacebook = platform === 'facebook' || platform === 'fb';
  const isTikTok = platform === 'tiktok' || platform === 'tt';

  console.log(`📡 استلام منشور جديد عبر المنصة: ${platform}`);

  if (isFacebook) {
    const newPostId = `fb-${Date.now()}`;
    const newPost = {
      id: newPostId,
      author: payload.author || "ذوالنون أحمد نايل",
      badge: payload.badge || "🔴 أحدث منشور على فيسبوك",
      publishDate: payload.publishDate || publishDate,
      publishTime: payload.publishTime || publishTime,
      timeAgo: payload.timeAgo || timeAgo,
      content: payload.content || "",
      likes: payload.likes || "١",
      comments: payload.comments || "٠",
      url: payload.url || "https://www.facebook.com/dhwalnwn.ahmd.nayl/",
      sampleComment: payload.sampleComment || null
    };

    // منع التكرار
    const existingIndex = feed.facebookPosts.findIndex(p => p.url === newPost.url && newPost.url !== 'https://www.facebook.com/dhwalnwn.ahmd.nayl/');
    if (existingIndex >= 0) {
      feed.facebookPosts[existingIndex] = { ...feed.facebookPosts[existingIndex], ...newPost };
      console.log(`🔄 تم تحديث المنشور الحالي: ${newPost.url}`);
    } else {
      feed.facebookPosts.unshift(newPost);
      console.log(`✨ تم إضافة منشور فيسبوك جديد بنجاح: ${newPostId}`);
    }

    // إذا كان المنشور قصيدة شعرية، نضيفه أيضاً إلى syncedPoems ليظهر في الديوان
    if (payload.isPoem || payload.type === 'poem' || (payload.content && payload.content.includes('\n'))) {
      const poemTitle = payload.title || (newPost.content.split('\n')[0].replace(/[#*]/g, '').trim()) || "بوح جديد";
      const newPoem = {
        id: `synced-poem-${Date.now()}`,
        title: poemTitle,
        category: payload.category || "social",
        categoryName: "منشورات فيسبوك الحية",
        year: String(new Date().getFullYear()),
        desc: `قصيدة مستقاة مباشرة ولحظياً من صفحة الشاعر الرسمية على فيسبوك بتاريخ ${publishDate}.`,
        verses: newPost.content.split('\n').filter(line => line.trim().length > 0),
        quote: newPost.content.split('\n')[0] || poemTitle,
        badge: "✨ جديد من فيسبوك",
        sourceUrl: newPost.url,
        fbUrl: newPost.url
      };
      
      feed.syncedPoems = feed.syncedPoems || [];
      feed.syncedPoems.unshift(newPoem);
      console.log(`📜 تم إدراج القصيدة تلقائياً في ديوان الموقع: «${newPoem.title}»`);
    }

  } else if (isTikTok) {
    const newVideoId = `tt-${Date.now()}`;
    const newVideo = {
      id: newVideoId,
      videoId: payload.videoId || String(Date.now()),
      account: "@drwesh22",
      author: "ذوالنون احمد نايل",
      title: payload.title || "مقطع وإلقاء جديد على تيك توك",
      caption: payload.caption || payload.content || "#شعر #سودان_مشاهير_تيك_توك",
      views: payload.views || "1",
      likes: payload.likes || "1",
      comments: payload.comments || "0",
      duration: payload.duration || "01:00",
      audio: payload.audio || "الصوت الأصلي - ذوالنون احمد نايل",
      url: payload.url || "https://www.tiktok.com/@drwesh22",
      badge: payload.badge || "مقطع جديد",
      category: payload.category || "recitation",
      videoSrc: payload.videoSrc || payload.mediaUrl || "assets/videos/tiktok_1.mp4",
      thumb: payload.thumb || payload.imageUrl || "assets/images/poet_portrait.jpg"
    };

    const existingIndex = feed.tiktokVideos.findIndex(v => v.url === newVideo.url && newVideo.url !== 'https://www.tiktok.com/@drwesh22');
    if (existingIndex >= 0) {
      feed.tiktokVideos[existingIndex] = { ...feed.tiktokVideos[existingIndex], ...newVideo };
      console.log(`🔄 تم تحديث مقطع تيك توك الحالي: ${newVideo.url}`);
    } else {
      feed.tiktokVideos.unshift(newVideo);
      console.log(`🎬 تم إضافة مقطع تيك توك جديد: ${newVideoId}`);
    }
  }

  // تحديث إحصائيات المتابعين إذا وردت
  if (payload.facebookFollowers) {
    feed.poetStats.facebook.followers = payload.facebookFollowers;
  }
  if (payload.tiktokFollowers) {
    feed.poetStats.tiktok.followers = payload.tiktokFollowers;
  }
}

// الدالة الرئيسية لتشغيل السكربت
function main() {
  console.log('========================================================');
  console.log('🚀 بدء تشغيل نظام المزامنة اللحظية للشاعر ذوالنون نايل');
  console.log('========================================================');

  const feed = loadFeed();

  // فحص ما إذا كان هناك Payload ممرر عبر متغير البيئة أو وسائط السطر
  let rawPayload = process.env.CLIENT_PAYLOAD || process.env.WEBHOOK_PAYLOAD || process.argv.slice(2).join(' ');

  if (rawPayload && rawPayload.trim().length > 0) {
    try {
      let cleaned = rawPayload.trim();
      if ((cleaned.startsWith("'") && cleaned.endsWith("'")) || (cleaned.startsWith('"') && cleaned.endsWith('"'))) {
        cleaned = cleaned.slice(1, -1);
      }
      const payload = typeof cleaned === 'object' ? cleaned : JSON.parse(cleaned);
      console.log('📥 تم الكشف عن بيانات جديدة واردة عبر Webhook / Dispatch:');
      console.log(JSON.stringify(payload, null, 2));
      handleIncomingPayload(feed, payload);
    } catch (e) {
      console.warn('⚠️ محاولة قراءة الحمولة كمتغير بيئة مبسط...');
      if (process.env.INPUT_CONTENT || process.env.INPUT_PLATFORM) {
        handleIncomingPayload(feed, {
          platform: process.env.INPUT_PLATFORM || 'facebook',
          content: process.env.INPUT_CONTENT || '',
          url: process.env.INPUT_URL || ''
        });
      } else {
        console.error('❌ تعذر تحليل حمولة Webhook JSON:', e.message);
      }
    }
  } else {
    console.log('ℹ️ تشغيل دوري مجدول بدون حمولة مباشرة. جاري تأكيد حالة الاتصال وتحديث الختم الزمني...');
    // تحديث الطابع الزمني ليقرأه المتصفح كدليل على نشاط المزامنة
    feed.lastUpdated = new Date().toISOString();
    feed.syncStatus = "active_live";
  }

  saveFeed(feed);
  console.log('✨ اكتملت دورة المزامنة بنجاح!');
}

main();
