const login = document.querySelector('#login-button');
console.log(login);
login.addEventListener('click', (event) => {
  event.preventDefault();
  const url = '/login';
  const xhr = new XMLHttpRequest();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  xhr.onreadystatechange = function() {
    if (xhr.status === 200 && xhr.readyState == 4) {
      const response = xhr.responseText;
    } else {
      console.log(`error${xhr.responseType}`);
    }
  };
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({
    email,
    password
  }));
});
