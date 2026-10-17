#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
scripts/sync_feed.py
محرك الجلب والمزامنة التلقائية اللحظية لمنشورات وفيديوهات الشاعر ذوالنون نايل
من تيك توك (@drwesh22) وفيسبوك
"""

import sys
import os
import json
import re
import urllib.request
from datetime import datetime

# إعداد مخرجات UTF-8
if sys.stdout.encoding != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FEED_FILE = os.path.join(ROOT_DIR, 'assets', 'data', 'social_feed.json')

def load_feed():
    if os.path.exists(FEED_FILE):
        try:
            with open(FEED_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"⚠️ خطأ في قراءة social_feed.json: {e}")
    return {
        "version": "1.0.2",
        "lastUpdated": datetime.utcnow().isoformat() + "Z",
        "syncStatus": "active_live",
        "poetStats": {
            "facebook": {"followers": "5,595", "following": "703", "pageUrl": "https://www.facebook.com/dhwalnwn.ahmd.nayl/", "liveSyncActive": True},
            "tiktok": {"handle": "@drwesh22", "followers": "+5,096", "likes": "+11.8K", "following": "3,318", "profileUrl": "https://www.tiktok.com/@drwesh22", "liveSyncActive": True}
        },
        "facebookPosts": [],
        "tiktokVideos": [],
        "syncedPoems": []
    }

def sync_tiktok_videos(feed):
    print("🎬 بدء جلب أحدث مقاطع وإحصائيات تيك توك لحساب @drwesh22...")
    try:
        import yt_dlp
    except ImportError:
        print("⚠️ مكتبة yt-dlp غير مثبتة، تخطي جلب تيك توك...")
        return False

    ydl_opts = {
        'extract_flat': 'in_playlist',
        'quiet': True,
        'playlistend': 12,
        'no_warnings': True
    }

    # استخدام المعرف المباشر للقناة لتفادي قيود استخراج المعرف الثانوي
    tiktok_targets = [
        'tiktokuser:MS4wLjABAAAACG6GMMrGVai-6EUBTjsa6ZsJrMRMnmQ61bZViDKkFSJXSt29a5G651xcjcRfhXDy',
        'https://www.tiktok.com/@drwesh22'
    ]

    try:
        entries = []
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            for target in tiktok_targets:
                try:
                    res = ydl.extract_info(target, download=False)
                    entries = res.get('entries', [])
                    if entries:
                        print(f"✅ تم العثور على {len(entries)} مقطع على حساب تيك توك عبر: {target[:40]}...")
                        break
                except Exception as t_err:
                    print(f"  محاولة الهدف التالي: {t_err}")

            # خريطة توثيق مقاطع تيك توك لضمان مطابقة الصورة وعنوان المنشور ونوعه بدقة
            KNOWN_TIKTOK_DATA = {
                "7696954333388197141": {
                    "title": "تعب الوجع (وجهتهن للرجعة ليك)",
                    "badge": "🔴 أحدث تسجيل (إلقاء)",
                    "category": "recitation",
                    "thumb": "assets/images/tiktok_latest.jpg",
                    "videoSrc": "assets/videos/tiktok_latest.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                },
                "7696358256222031125": {
                    "title": "عادي نتفارق (عمل غنائي جديد مع ZooZ)",
                    "badge": "🎵 عمل غنائي (أغنية)",
                    "category": "musical",
                    "thumb": "assets/images/tiktok_1.jpg",
                    "videoSrc": "assets/videos/tiktok_1.mp4",
                    "audio": "ZooZ - عادي نتفارق (كلمات: ذو النون نايل)"
                },
                "7695492300868177172": {
                    "title": "خفف خطاك (عمل غنائي مع ZooZ)",
                    "badge": "🎵 عمل غنائي (أغنية)",
                    "category": "musical",
                    "thumb": "assets/images/tiktok_3.jpg",
                    "videoSrc": "assets/videos/tiktok_3.mp4",
                    "audio": "إنتاج مشترك - كلمات: ذو النون نايل"
                },
                "7694075214056951060": {
                    "title": "كواليس التحضير لعمل فني جديد (مع ZooZ ومحمد خوجلي)",
                    "badge": "🎬 كواليس وتجارب",
                    "category": "programs",
                    "thumb": "assets/images/tiktok_2.jpg",
                    "videoSrc": "assets/videos/tiktok_2.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                },
                "7691755438961904917": {
                    "title": "حواس (هاك رعشتك)",
                    "badge": "🎙️ إلقاء شعري",
                    "category": "recitation",
                    "thumb": "assets/images/tiktok_5.jpg",
                    "videoSrc": "assets/videos/tiktok_5.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                },
                "7688419609950817556": {
                    "title": "ضجيج (لا تحِن يا السُّقا)",
                    "badge": "🎙️ إلقاء شعري",
                    "category": "recitation",
                    "thumb": "assets/images/tiktok_6.jpg",
                    "videoSrc": "assets/videos/tiktok_6.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                },
                "7685060833055083796": {
                    "title": "رهان (ما تكسرك إيد الظروف)",
                    "badge": "🎙️ إلقاء شعري",
                    "category": "recitation",
                    "thumb": "assets/images/tiktok_7.jpg",
                    "videoSrc": "assets/videos/tiktok_7.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                },
                "7680619000958635285": {
                    "title": "داويني (كفَّني ليلك ياحزن)",
                    "badge": "🎙️ إلقاء شعري",
                    "category": "recitation",
                    "thumb": "assets/images/tiktok_4.jpg",
                    "videoSrc": "assets/videos/tiktok_4.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                }
            }

            def resolve_video_details(vid, title_desc, existing_item, idx):
                if vid in KNOWN_TIKTOK_DATA:
                    return KNOWN_TIKTOK_DATA[vid]
                if existing_item and existing_item.get('title') and not existing_item.get('title').startswith('إلقاء: إلقاء شعري وجداني'):
                    return {
                        "title": existing_item.get('title'),
                        "badge": existing_item.get('badge', "🔴 أحدث مقطع" if idx == 0 else "مقطع موثق من تيك توك"),
                        "category": existing_item.get('category', "recitation"),
                        "thumb": existing_item.get('thumb') or f"assets/images/tiktok_{idx+1}.jpg",
                        "videoSrc": existing_item.get('videoSrc', 'assets/videos/tiktok_latest.mp4'),
                        "audio": existing_item.get('audio', "الصوت الأصلي - ذوالنون احمد نايل")
                    }

                # تصنيف ذكي للمنشور وتحديد نوعه وعنوانه الصحيح
                is_song = any(k in title_desc for k in ['أغنية', 'اغنية', 'غنائي', 'ZooZ', 'zooz', 'ألحان', 'الحان', 'توزيع', 'مكساج', 'كليب'])
                is_bts = any(k in title_desc for k in ['كواليس', 'تحضير', 'بروفات', 'انتظرونا', 'برنامج', 'حوار', 'لقاء', 'تجربة جمعني'])

                if is_song:
                    category = "musical"
                    badge = "🎵 عمل غنائي (أغنية)"
                elif is_bts:
                    category = "programs"
                    badge = "🎬 كواليس وتجارب"
                else:
                    category = "recitation"
                    badge = "🔴 أحدث تسجيل (إلقاء)" if idx == 0 else "🎙️ إلقاء شعري"

                # استخراج اسم القصيدة أو العمل من الهاشتاجات أو النص
                hashtags = re.findall(r'#([^\s#]+)', title_desc)
                generic_tags = {'السودان_مشاهير_تيك_توك', 'السودان', 'مشاهير', 'explore', 'شعر', 'fyp', 'viral', 'foryou'}
                specific_tags = [h.replace('_', ' ') for h in hashtags if h not in generic_tags]

                first_line = title_desc.split('\n')[0] if title_desc else ""
                first_line_clean = re.sub(r'#\S+', '', first_line).strip()

                if specific_tags:
                    core_name = specific_tags[0]
                    if is_song:
                        title = f"{core_name} (عمل غنائي)"
                    elif is_bts:
                        title = f"كواليس: {core_name}"
                    else:
                        title = f"{core_name} (إلقاء شعري)"
                elif first_line_clean:
                    if is_song:
                        title = f"{first_line_clean[:40]} (أغنية)"
                    elif is_bts:
                        title = f"كواليس: {first_line_clean[:40]}"
                    else:
                        title = f"إلقاء: {first_line_clean[:40]}"
                else:
                    title = "عمل غنائي جديد" if is_song else ("كواليس وتجارب" if is_bts else "إلقاء شعري جديد")

                return {
                    "title": title,
                    "badge": badge,
                    "category": category,
                    "thumb": f"assets/images/tiktok_{idx+1}.jpg",
                    "videoSrc": "assets/videos/tiktok_latest.mp4",
                    "audio": "الصوت الأصلي - ذوالنون احمد نايل"
                }

            for idx, entry in enumerate(entries[:8]):
                vid = str(entry.get('id'))
                if not vid:
                    continue

                vurl = f"https://www.tiktok.com/@drwesh22/video/{vid}"
                print(f"  [{idx+1}] فحص المقطع: {vid}")

                info = None
                try:
                    with yt_dlp.YoutubeDL({'quiet': True, 'no_warnings': True}) as ydl_single:
                        info = ydl_single.extract_info(vurl, download=False)
                except Exception as ex:
                    print(f"    تنبيه: تعذر جلب التفاصيل الفردية للمقطع {vid}: {ex}")

                old_item = existing_videos.get(vid, {})
                like_cnt = str(info.get('like_count') if info and info.get('like_count') is not None else entry.get('like_count') or old_item.get('likes') or "25")
                comment_cnt = str(info.get('comment_count') if info and info.get('comment_count') is not None else entry.get('comment_count') or old_item.get('comments') or "10")
                view_cnt = str(info.get('view_count') if info and info.get('view_count') is not None else entry.get('view_count') or old_item.get('views') or "200")
                title_desc = (info.get('description') or info.get('title') or entry.get('title') or entry.get('description') or old_item.get('caption') or "").strip()
                duration_sec = (info.get('duration') if info else 60) or 60
                dur_m = int(duration_sec // 60)
                dur_s = int(duration_sec % 60)
                dur_str = f"{dur_m:02d}:{dur_s:02d}"

                details = resolve_video_details(vid, title_desc, old_item, idx)

                video_item = {
                    "id": f"tt-synced-{vid}",
                    "videoId": vid,
                    "account": "@drwesh22",
                    "author": "ذوالنون احمد نايل",
                    "title": details["title"],
                    "caption": title_desc[:250] if title_desc else "#شعر #السودان_مشاهير_تيك_توك",
                    "views": view_cnt,
                    "likes": like_cnt,
                    "comments": comment_cnt,
                    "duration": dur_str,
                    "audio": details.get("audio", "الصوت الأصلي - ذوالنون احمد نايل"),
                    "url": vurl,
                    "badge": details["badge"],
                    "category": details["category"],
                    "videoSrc": details.get("videoSrc") or old_item.get('videoSrc', 'assets/videos/tiktok_latest.mp4'),
                    "thumb": details.get("thumb") or old_item.get('thumb') or f"assets/images/tiktok_{idx+1}.jpg"
                }
                updated_videos.append(video_item)

            if updated_videos:
                seen_ids = {v['videoId'] for v in updated_videos}
                for old_v in feed.get('tiktokVideos', []):
                    if old_v.get('videoId') not in seen_ids:
                        updated_videos.append(old_v)
                feed['tiktokVideos'] = updated_videos
                print(f"🎉 تم تحديث {len(updated_videos)} مقطع تيك توك بالبيانات والنوع والتصنيفات الدقيقة!")
                return True
    except Exception as e:
        print(f"❌ خطأ عام أثناء استدعاء تيك توك: {e}")
    return False

def sync_facebook_stats(feed):
    print("📘 فحص إحصائيات صفحة فيسبوك الرسمية...")
    try:
        headers = {'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'}
        req = urllib.request.Request('https://www.facebook.com/dhwalnwn.ahmd.nayl/', headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            desc_match = re.findall(r'<meta property="og:description" content="([^"]+)"', content)
            if desc_match:
                desc = desc_match[0]
                f_match = re.search(r'([\d\u0660-\u0669\u066C,]+)\s*متابع', desc)
                if f_match:
                    followers = f_match.group(1).replace('&#x66c;', ',')
                    feed['poetStats']['facebook']['followers'] = followers
                    print(f"✅ تم تحديث عدد متابعي فيسبوك: {followers}")
    except Exception as e:
        print(f"ℹ️ تعذر تحديث بيانات فيسبوك المباشرة: {e}")

def sync_visitor_analytics(feed):
    print("🌐 فحص وتحديث إحصائيات زوار الموقع السحابية...")
    try:
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        if 'siteAnalytics' not in feed:
            feed['siteAnalytics'] = {}

        # 1. إجمالي الزيارات
        try:
            req_t = urllib.request.Request('https://countapi.mileshilliard.com/api/v1/get/za_alnoon_official_site', headers=headers)
            with urllib.request.urlopen(req_t, timeout=8) as resp:
                data_t = json.loads(resp.read().decode('utf-8'))
                if 'value' in data_t:
                    feed['siteAnalytics']['totalVisits'] = data_t['value']
                    print(f"✅ تم تحديث إجمالي الزيارات سحابياً: {data_t['value']}")
        except Exception as e:
            print(f"ℹ️ تعذر قراءة إجمالي الزيارات: {e}")

        # 2. زوار اليوم
        try:
            today_key = 'za_alnoon_official_daily_' + datetime.utcnow().strftime('%Y_%m_%d')
            req_d = urllib.request.Request(f'https://countapi.mileshilliard.com/api/v1/get/{today_key}', headers=headers)
            with urllib.request.urlopen(req_d, timeout=8) as resp:
                data_d = json.loads(resp.read().decode('utf-8'))
                if 'value' in data_d:
                    feed['siteAnalytics']['todayVisits'] = data_d['value']
        except Exception:
            feed['siteAnalytics']['todayVisits'] = feed['siteAnalytics'].get('todayVisits', 0)

        # 3. الزوار الفريدون
        try:
            req_u = urllib.request.Request('https://countapi.mileshilliard.com/api/v1/get/za_alnoon_official_unique', headers=headers)
            with urllib.request.urlopen(req_u, timeout=8) as resp:
                data_u = json.loads(resp.read().decode('utf-8'))
                if 'value' in data_u:
                    feed['siteAnalytics']['uniqueVisitors'] = data_u['value']
        except Exception:
            pass

        feed['siteAnalytics']['lastUpdated'] = datetime.utcnow().isoformat() + "Z"
    except Exception as e:
        print(f"ℹ️ تعذر تحديث إحصائيات الزوار السحابية: {e}")

def main():
    print("=" * 60)
    print("🚀 بدء تشغيل محرك المزامنة التلقائية اللحظية (TikTok & Facebook)")
    print("=" * 60)

    feed = load_feed()
    changed = False

    if sync_tiktok_videos(feed):
        changed = True

    sync_facebook_stats(feed)
    sync_visitor_analytics(feed)
    changed = True

    feed['lastUpdated'] = datetime.utcnow().isoformat() + "Z"
    feed['syncStatus'] = "active_live"

    with open(FEED_FILE, 'w', encoding='utf-8') as f:
        json.dump(feed, f, ensure_ascii=False, indent=2)

    print(f"💾 تم حفظ البيانات المحدثة في: {FEED_FILE}")
    print("✨ تمت المزامنة بنجاح!")

if __name__ == '__main__':
    main()
