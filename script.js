document.addEventListener("DOMContentLoaded", () => {

  /* Smooth Scroll for Navbar Links */
  const navLinks = document.querySelectorAll('header nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if(this.hash) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Update active class
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  /* Booking Form Submission */
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  if(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pickup = document.getElementById("pickup").value.trim();
      const dropoff = document.getElementById("dropoff").value.trim();
      const date = document.getElementById("date").value;

      if(!pickup || !dropoff || !date) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent = `✅ Your ride from "${pickup}" to "${dropoff}" on ${new Date(date).toLocaleString()} has been booked! We will contact you shortly.`;
      formMessage.style.color = "green";

      form.reset();
    });
  }
});
