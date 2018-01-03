const submit = document.querySelector('#submit');
console.log(submit);
submit.addEventListener('click', () => {
    const url = '/signup';
    const xhr = new XMLHttpRequest();
    const email = document.querySelector('#email').value;
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    console.log(username, password);
    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState == 4) {
        const response = xhr.responseText;
      } else {
        console.log(`error${xhr.responseType}`);
      }
    };
    xhr.open('POST', url);
    xhr.send({email, username, password});
});
