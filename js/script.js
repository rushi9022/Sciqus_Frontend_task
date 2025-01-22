// script.js

// Example interactivity
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
      alert(`You clicked: ${e.target.textContent}`);
    });
  });


// Toggle sidebar functionality
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('hide');
});
