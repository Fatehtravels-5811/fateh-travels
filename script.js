// simple interactivity: nav toggle, booking form, whatsapp prefill
document.addEventListener('DOMContentLoaded', ()=> {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const navToggle = document.getElementById('navToggle');
  navToggle && navToggle.addEventListener('click', ()=>{
    const nav = document.getElementById('nav');
    if (!nav) return;
    if (nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // WhatsApp button behavior
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      const number = '917657976742'; // replace with your number, no + sign
      const text = encodeURIComponent("Hello Fateh Travels, I want to book a ride. Pickup: , Drop: , Date: ");
      const url = `https://wa.me/${number}?text=${text}`;
      window.open(url, '_blank');
    });
  }

  // booking form
  const form = document.getElementById('bookingForm');
  form && form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const pickup = document.getElementById('pickup').value.trim();
    const drop = document.getElementById('drop').value.trim();
    const date = document.getElementById('date').value;
    const phone = document.getElementById('phone').value.trim();
    if (!pickup || !drop || !date || !phone) {
      alert('Please complete all fields.');
      return;
    }
    // open WhatsApp prefilled message with booking details
    const number = '917657976742';
    const msg = encodeURIComponent(`Booking request:\nPickup: ${pickup}\nDrop: ${drop}\nDate: ${date}\nPassengers: ${document.getElementById('passengers').value}\nContact: ${phone}`);
    window.open(`https://wa.me/${number}?text=${msg}`, '_blank');
  });
});

