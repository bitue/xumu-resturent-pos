// node 22 has built-in fetch

async function run() {
  const res = await fetch('http://localhost:5001/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@xuma.nl', password: 'admin123' })
  });
  
  console.log('Status:', res.status);
  const text = await res.text();
  console.log('Body:', text);
  console.log('Set-Cookie:', res.headers.get('set-cookie'));
}

run();
