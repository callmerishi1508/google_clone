const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const input = document.querySelector('input[type="text"]');
  const query = input.value;
  const url = `https://www.google.com/search?q=${query}`;
  window.location.href = url;
});
