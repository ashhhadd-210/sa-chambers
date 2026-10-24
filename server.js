// SA Chambers — zero-dependency static server + consultation inquiry store.
// Run: node server.js   ->  http://localhost:4700
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 4700;
const PUBLIC = path.join(__dirname, 'public');
const DATA = path.join(__dirname, 'data', 'inquiries.json');

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
};

function readInquiries() {
  try { return JSON.parse(fs.readFileSync(DATA, 'utf8')); } catch { return []; }
}

function send(res, code, body, type = 'application/json') {
  res.writeHead(code, { 'Content-Type': type });
  res.end(typeof body === 'string' ? body : JSON.stringify(body));
}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === 'POST' && url.pathname === '/api/inquiry') {
    let raw = '';
    req.on('data', c => { raw += c; if (raw.length > 20000) req.destroy(); });
    req.on('end', () => {
      let b;
      try { b = JSON.parse(raw); } catch { return send(res, 400, { error: 'Invalid request' }); }
      const clean = s => String(s || '').trim().slice(0, 2000);
      const entry = {
        id: Date.now().toString(36),
        receivedAt: new Date().toISOString(),
        name: clean(b.name), phone: clean(b.phone), email: clean(b.email),
        city: clean(b.city), matter: clean(b.matter), message: clean(b.message),
      };
      if (!entry.name || !entry.phone || !entry.matter)
        return send(res, 422, { error: 'Name, phone and matter type are required.' });
      const all = readInquiries();
      all.unshift(entry);
      fs.mkdirSync(path.dirname(DATA), { recursive: true });
      fs.writeFileSync(DATA, JSON.stringify(all, null, 2));
      console.log(`[inquiry] ${entry.name} — ${entry.matter} — ${entry.phone}`);
      send(res, 201, { ok: true, id: entry.id });
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/inquiries') {
    return send(res, 200, readInquiries());
  }

  let file = path.normalize(path.join(PUBLIC, decodeURIComponent(url.pathname)));
  if (!file.startsWith(PUBLIC)) return send(res, 403, 'Forbidden', 'text/plain');
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  fs.readFile(file, (err, buf) => {
    if (err) return send(res, 404, 'Not found', 'text/plain');
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
}).listen(PORT, () => console.log(`SA Chambers running at http://localhost:${PORT}`));
