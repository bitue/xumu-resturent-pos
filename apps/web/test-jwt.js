const { jwtVerify, SignJWT } = require('jose');

async function test() {
  const secretStr = 'super-secret-key-that-must-be-at-least-32-chars-long-for-hs256-signature';
  const secret = new TextEncoder().encode(secretStr);
  
  // Create an HS512 token like Java backend does
  const token = await new SignJWT({ sub: '123' })
    .setProtectedHeader({ alg: 'HS512' })
    .sign(secret);
    
  console.log("Token:", token);
  
  try {
    const { payload } = await jwtVerify(token, secret);
    console.log("Verified:", payload);
  } catch(e) {
    console.error("Error:", e);
  }
}
test();
