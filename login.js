// login.js
function login(username, password) {
  if (!username || !password) return { success: false, error: 'Username and password are required.' };
  if (username === 'demo' && password === 'dome') return { success: true };
  return { success: false, error: 'Incorrect username or password.' };
}
// For browser
if (typeof window !== 'undefined') {
  window.login = login;
}
// For Node.js
if (typeof module !== 'undefined') {
  module.exports = login;
}
