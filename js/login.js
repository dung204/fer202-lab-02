const loginForm = document.querySelector('form');

loginForm.addEventListener(
  'submit',
  e => {
    if (loginForm.checkValidity()) {
      location.href = '/';
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    loginForm.classList.add('was-validated');
  },
  false,
);
