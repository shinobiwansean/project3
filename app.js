document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the default form submission behavior

    // Perform validation
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Example validation: check if name, email, and message are not empty
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill out all fields');
      return;
    }

    // If validation passes, submit the form
    form.submit();
  });
});
