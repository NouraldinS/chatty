const submit = document.querySelector('#sign-up-button');
submit.addEventListener('click', (event) => {
  event.preventDefault();
  const requestObject = {
    email: document.querySelector('#email').value,
    username: document.querySelector('#username').value,
    password: document.querySelector('#password').value,
    method: 'POST',
    url: '/create'
  };
  request(requestObject, (err, res) => {
    if (err) console.log('Request Error');
  });
});
