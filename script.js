document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Your message has been sent!'); // You can replace this with an actual form submission logic
    this.reset(); // Reset the form fields
});
