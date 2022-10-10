document.getElementById('btn-submit').addEventListener('click', function(){

    const emailField = document.getElementById('email');
    const email = emailField.value;

    const pass = document.getElementById('password');
    const password = pass.value;

    const logEmail = 'mdtohin8585@gmail.com';
    const logPassword = '00000000';

    if ((email === logEmail) && (password === logPassword)) {
        console.log('ok');
        window.location.href = "dashboard.html";
    } else {
        alert('Invalid username or password')
        console.log('Invalid username or password');
    }    

});