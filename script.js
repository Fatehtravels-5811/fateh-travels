document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const pickup = document.getElementById("pickup").value;
      const dropoff = document.getElementById("dropoff").value;
      const date = document.getElementById("date").value;

      if (!pickup || !dropoff || !date) {
        message.textContent = "⚠️ Please fill all fields.";
        return;
      }

      // Send booking via WhatsApp
      const phone = "917657976742"; // Your number
      const text = `Booking Request:%0A🚖 Pickup: ${pickup}%0A📍 Dropoff: ${dropoff}%0A📅 Date: ${date}`;
      window.open(`https://wa.me/${phone}?text=${text}`, "_blank");

      message.textContent = "✅ Redirecting to WhatsApp for booking...";
      form.reset();
    });
  }
});
