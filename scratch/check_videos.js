const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const start = html.indexOf('id="videos-container"');
const end = html.indexOf('</section>', start);
const slice = html.slice(start, end);

const cardMatches = slice.match(/<article[\s\S]*?<\/article>/g) || [];
console.log('Cards in index.html:', cardMatches.length);
cardMatches.forEach((c, i) => {
  const title = (c.match(/<h3[^>]*>(.*?)<\/h3>/) || [])[1];
  const meta = (c.match(/<div class="video-card-meta">[\s\S]*?<span>(.*?)<\/span>/) || [])[1];
  const dataVid = (c.match(/data-vid="([^"]+)"/) || [])[1];
  console.log(`${i + 1}. [${dataVid}] ${title} | ${meta}`);
});
