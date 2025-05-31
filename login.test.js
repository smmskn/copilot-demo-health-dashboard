// Automated tests for login.js
const login = require('./login');

describe('login', () => {
  it('should succeed with correct credentials', () => {
    expect(login('demo', 'dome')).toEqual({ success: true });
  });

  it('should fail with incorrect credentials', () => {
    expect(login('demo', 'wrong')).toEqual({ success: false, error: 'Incorrect username or password.' });
  });

  it('should fail if username is missing', () => {
    expect(login('', 'dome')).toEqual({ success: false, error: 'Username and password are required.' });
  });

  it('should fail if password is missing', () => {
    expect(login('demo', '')).toEqual({ success: false, error: 'Username and password are required.' });
  });
});
