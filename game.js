document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdownButton');
  const dropdownContent = document.getElementById('dropdownContent');

  dropdownButton.addEventListener('click', function () {
      if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
      } else {
          dropdownContent.style.display = 'block';
      }
  });
});
// // Optional: Close on outside click
// document.addEventListener('click', (event) => {
//   if (!dropdown.contains(event.target)) {
//     dropdownContent.style.display = 'none';
//   }
// });