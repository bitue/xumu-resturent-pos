// test cookie to /me

async function run() {
  const loginRes = await fetch('http://localhost:5001/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'admin@xuma.nl', password: 'admin123' })
  });
  
  const cookieHeader = loginRes.headers.get('set-cookie');
  console.log('Login Status:', loginRes.status);
  console.log('Set-Cookie:', cookieHeader);
  
  // Extract just the cookie value for the Cookie header
  // Note: set-cookie can contain multiple cookies separated by commas
  // We need to parse them roughly or just pass them
  const cookies = cookieHeader.split(', ').map(c => c.split(';')[0]).join('; ');
  
  console.log('Sending Cookie:', cookies);

  const meRes = await fetch('http://localhost:5001/api/auth/me', {
    method: 'GET',
    headers: { 
      'Cookie': cookies 
    }
  });

  console.log('Me Status:', meRes.status);
  const meText = await meRes.text();
  console.log('Me Body:', meText);
}

run();
