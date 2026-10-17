const fs = require('fs');

// Create mock browser environment
const events = {};
const elements = {};

class MockElement {
  constructor(tag, id = '', className = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = className;
    this.classList = {
      _classes: new Set(className ? className.split(' ') : []),
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
      contains(c) { return this._classes.has(c); },
      toggle(c) { if (this.contains(c)) this.remove(c); else this.add(c); }
    };
    this.attributes = {};
    this.style = {};
    this.children = [];
    this._innerHTML = '';
  }
  getAttribute(name) { return this.attributes[name]; }
  setAttribute(name, val) { this.attributes[name] = val; }
  querySelector(sel) { return null; }
  querySelectorAll(sel) { return []; }
  addEventListener(ev, fn) {
    if (!events[ev]) events[ev] = [];
    events[ev].push({ elem: this, fn });
  }
  set innerHTML(val) { this._innerHTML = val; }
  get innerHTML() { return this._innerHTML; }
}

const vContainer = new MockElement('div', 'videos-container');
const vTabs = [
  new MockElement('button', '', 'v-tab-btn active'),
  new MockElement('button', '', 'v-tab-btn'),
  new MockElement('button', '', 'v-tab-btn'),
  new MockElement('button', '', 'v-tab-btn')
];
vTabs[0].setAttribute('data-vfilter', 'all');
vTabs[1].setAttribute('data-vfilter', 'recitation');
vTabs[2].setAttribute('data-vfilter', 'musical');
vTabs[3].setAttribute('data-vfilter', 'programs');

global.window = {
  location: { pathname: '/index.html' },
  addEventListener(ev, fn) {
    if (!events[ev]) events[ev] = [];
    events[ev].push({ elem: window, fn });
  },
  innerWidth: 1200,
  innerHeight: 800
};

global.document = {
  readyState: 'complete',
  body: new MockElement('body'),
  addEventListener(ev, fn) {
    if (!events[ev]) events[ev] = [];
    events[ev].push({ elem: document, fn });
  },
  getElementById(id) {
    if (id === 'videos-container') return vContainer;
    return new MockElement('div', id);
  },
  querySelectorAll(sel) {
    if (sel === '.v-tab-btn') return vTabs;
    return [];
  },
  querySelector(sel) { return null; }
};

global.localStorage = {
  _s: {},
  getItem(k) { return this._s[k] || null; },
  setItem(k, v) { this._s[k] = String(v); }
};
global.sessionStorage = {
  _s: {},
  getItem(k) { return this._s[k] || null; },
  setItem(k, v) { this._s[k] = String(v); }
};
global.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({}) });

const mainJs = fs.readFileSync('scratch/test_main_fixed.js', 'utf8');

try {
  eval(mainJs);
  console.log('✅ main.js loaded into environment successfully');
} catch(e) {
  console.error('❌ Error executing main.js top-level:', e);
}

// Trigger DOMContentLoaded
console.log('Registered events:', Object.keys(events));
const domLoadedHandlers = events['DOMContentLoaded'] || [];
console.log('DOMContentLoaded handlers count:', domLoadedHandlers.length);

domLoadedHandlers.forEach(({ fn }, i) => {
  try {
    fn();
    console.log(`✅ DOMContentLoaded handler #${i} finished`);
  } catch(e) {
    console.error(`❌ DOMContentLoaded handler #${i} threw error:`, e);
  }
});

console.log('vContainer innerHTML length after load:', vContainer.innerHTML.length);
console.log('Testing click on vTabs[1] (recitation):');
const clickHandlers = events['click'] || [];
console.log('Total registered click handlers:', clickHandlers.length);
vTabs.forEach((tab, idx) => {
  const handler = clickHandlers.find(h => h.elem === tab);
  console.log(`Tab ${idx} (${tab.getAttribute('data-vfilter')}): handler attached?`, !!handler);
});
