// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const pickup = document.getElementById("pickup").value.trim();
    const dropoff = document.getElementById("dropoff").value.trim();
    const date = document.getElementById("date").value;

    // Simple validation
    if (!pickup || !dropoff || !date) {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

    // You can add more validations here (e.g., date in future)

    // Display confirmation message
    formMessage.textContent = `✅ Your ride from "${pickup}" to "${dropoff}" on ${new Date(date).toLocaleString()} has been booked! We will contact you shortly.`;
    formMessage.style.color = "green";

    // Optionally, reset form
    form.reset();
  });
});

