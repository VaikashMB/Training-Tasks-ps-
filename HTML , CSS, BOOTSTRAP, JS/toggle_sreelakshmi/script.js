document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
   
    // Check if the user has a preference in local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
   
    // Apply the initial theme based on the user's preference
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
   
    darkModeToggle.addEventListener('click', () => {
      // Toggle the class on the body
      body.classList.toggle('dark-mode');
   
      // Update the user's preference in local storage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        document.getElementById("change").classList.add("modalBox");
        document.getElementById("change2").classList.add("modalBox");
        

      } else {
        localStorage.setItem('darkMode', 'disabled');
        document.getElementById("change").classList.remove("modalBox");
        document.getElementById("change2").classList.remove("modalBox");
        

        
      }
    });
  });