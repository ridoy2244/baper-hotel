document.getElementById('btn-click').addEventListener('click', function () {
    // user email
    const emailBox = document.getElementById('user-email');
    const userEmail = emailBox.value;
    // user password
    const passwordBox = document.getElementById('user-password');
    const userPassword = passwordBox.value;

    if
        (userEmail == 'ridoy@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    
    
})

