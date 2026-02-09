export default function Info() {
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  const success = document.getElementById('sent');
  const error = document.getElementById('cant');

  document.addEventListener('invalid', (function () {
    return function (e) {
        e.preventDefault();
        document.getElementById('name').focus();
        document.getElementById('email').focus();
        document.getElementById('message').focus();
    };
  })(), true);

  if(name.value === '' || email.value === '' || message.value  === '') {
    error.style.display = 'block';
  } else {
    setTimeout(() => {
      name.value = '';
      email.value = '';
      message.value = '';
    }, 2000);
    success.style.display = 'block';
  }
  setTimeout(() => {
    error.style.display = 'none';
    success.style.display = 'none';
  }, 4000);
}