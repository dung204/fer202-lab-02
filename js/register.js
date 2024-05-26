const registerForm = document.querySelector('form');

registerForm.addEventListener(
  'submit',
  e => {
    if (registerForm.checkValidity()) {
      location.href = '/';
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    registerForm.classList.add('was-validated');
  },
  false,
);
