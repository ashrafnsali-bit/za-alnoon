const fs = require('fs');

let mainJs = fs.readFileSync('assets/js/main.js', 'utf8');
mainJs = mainJs.replace(
  "let CURRENT_TIKTOK_DATA = typeof TIKTOK_DATA !== 'undefined' ? TIKTOK_DATA : [];",
  "let CURRENT_TIKTOK_DATA = [];"
);

fs.writeFileSync('scratch/test_main_fixed.js', mainJs);

// Now run lifecycle test with test_main_fixed.js
const testScript = fs.readFileSync('scratch/test_lifecycle.js', 'utf8')
  .replace('assets/js/main.js', 'scratch/test_main_fixed.js');
fs.writeFileSync('scratch/run_test.js', testScript);

const { execSync } = require('child_process');
try {
  const out = execSync('node scratch/run_test.js').toString();
  console.log(out);
} catch(e) {
  console.log(e.stdout ? e.stdout.toString() : e.message);
}
