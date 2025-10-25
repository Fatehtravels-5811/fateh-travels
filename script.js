document.addEventListener("DOMContentLoaded", () => {

  /* ================= Smooth Scroll for Homepage ================= */
  const navLinks = document.querySelectorAll('header nav ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      if(this.hash) { // only for #section links
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if(target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  /* ================= Booking Form ================= */
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  if(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const pickup = document.getElementById("pickup").value.trim();
      const dropoff = document.getElementById("dropoff").value.trim();
      const date = document.getElementById("date").value;

      // Simple validation
      if(!pickup || !dropoff || !date) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
      }

      // Create WhatsApp message
      const message = `🚖 Booking Request from Fateh Travels:
Pickup: ${pickup}
Dropoff: ${dropoff}
Date/Time: ${new Date(date).toLocaleString()}`;

      const whatsappNumber = "917657976742"; // your number with country code
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp link in new tab
      window.open(whatsappURL, "_blank");

      // Show confirmation message on website
      formMessage.textContent = "✅ Booking info sent to WhatsApp!";
      formMessage.style.color = "green";

      // Reset form
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.textContent = "";
      }, 5000);
    });
  }

});


