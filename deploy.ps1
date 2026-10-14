# سكربت رفع التحديثات إلى GitHub
Write-Host "جارٍ رفع الموقع إلى GitHub..." -ForegroundColor Cyan
git add .
git commit -m "تحديث محتوى الموقع"
git push -u origin main
Write-Host "تم الرفع بنجاح! تفقد رابط GitHub Pages للمشاركة." -ForegroundColor Green
pause
