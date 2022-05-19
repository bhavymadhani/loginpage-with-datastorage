let name = localStorage.getItem('name') ? localStorage.getItem('name') : ''
console.log(name);
if (name == '') {
    alert('U need to login first');
    window.location.href = "/signin.html";
}

function Logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.href = "/signin.html";
}