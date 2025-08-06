const buttons = document.querySelectorAll('.filter-tabs button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Add filtering logic here if needed
  });
});
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Subscribed!");
});
  const form = document.getElementById('booking-form');
  const thankYou = document.getElementById('thank-you-message');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from refreshing the page

    // Simulate form success (you can integrate backend here later)
    form.style.display = 'none'; // hide the form
    thankYou.style.display = 'block'; // show thank you message
  });

// ✅ Toggle navigation menu for mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
  document.querySelector('.nav-links').classList.toggle('show');
});
