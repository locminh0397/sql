const unSql = document.getElementById('unSql');
const pSql = document.getElementById('pSql');
const Username = document.getElementById('Username');
const Password = document.getElementById('Password');    
const button = document.getElementById('button');

var username = 'username';
var password = 'password';
var user = sessionStorage.getItem('user')

if(user) {
    user = JSON.parse(user);
    username = user.username;
    password = user.password;
}

unSql.innerHTML = `${username}`;
pSql.innerHTML = `${password}`;

function handle() { 
    username = Username.value;
    password = Password.value;
    unSql.innerHTML = `${username}`;
    pSql.innerHTML = `${password}`;
}

Username.oninput = (e) => handle();
Password.oninput = (e) => handle();
button.onclick = (e) => sessionStorage.setItem('user', JSON.stringify({username: username, password: password}));