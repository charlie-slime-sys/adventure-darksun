const dropdown = document.querySelector('.dropdown');
const dropbtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropbtn.addEventListener('click', () => {
  dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
});

// Optional: Close on outside click
document.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});