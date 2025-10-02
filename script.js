document.addEventListener("DOMContentLoaded", () => {
  // nav toggle (for mobile)
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  navToggle && navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // booking form (if exists)
  const bookingForm = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pickup = document.getElementById("pickup").value.trim();
      const dropoff = document.getElementById("dropoff").value.trim();
      const date = document.getElementById("date").value;

      if (!pickup || !dropoff || !date) {
        formMessage.textContent = "⚠️ Please fill all fields.";
        return;
      }

      const phone = "917657976742"; // your number
      const text = `Booking Request:%0A🚖 Pickup: ${pickup}%0A📍 Dropoff: ${dropoff}%0A📅 Date: ${date}`;
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

      formMessage.textContent = "✅ Redirecting to WhatsApp...";
      bookingForm.reset();
    });
  }
});
