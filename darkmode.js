// const darkModeButton = document.getElementById('dark-mode-toggle');
// let isDarkMode = localStorage.getItem('darkMode') === 'true';

// // Listen for changes to prefers-color-scheme
// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// mediaQuery.addListener(e => {
//     if (!isDarkMode) {
//         document.body.classList.toggle('dark-mode', e.matches);
//     }
// });

// function toggleDarkMode() {
//     isDarkMode = !isDarkMode;

//     // Toggle the dark-mode class on the body
//     document.body.classList.toggle('dark-mode', isDarkMode);

//     localStorage.setItem('darkMode', isDarkMode);

//     // Optionally, change the button text
//     darkModeButton.textContent = isDarkMode ? "Lichte modus" : "Donkere modus";
// }

// // Initialize dark mode based on user preference stored in localStorage
// if (isDarkMode) {
//     document.body.classList.add('dark-mode');
// } else {
//     const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     document.body.classList.toggle('dark-mode', prefersDarkScheme);
// }

// darkModeButton.addEventListener('click', toggleDarkMode);
