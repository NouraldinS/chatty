const login = document.querySelector('#login-button');
console.log(login);
login.addEventListener('click', (event) => {
    event.preventDefault();
    const url = '/login';
    const xhr = new XMLHttpRequest();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log('asdkpf!!!?????', username, password);
    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState == 4) {
        const response = xhr.responseText;
      } else {
        console.log(`error${xhr.responseType}`);
      }
    };
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({username, password}));
});
