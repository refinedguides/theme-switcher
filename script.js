const toggle = document.getElementById("toggle");

// Function to determine the system's color scheme
const getSystemTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Function to set theme in the DOM and Local storage
const setTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
};

// Function to toggle between light and dark mode
const handleToggle = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const theme = currentTheme === "dark" ? "light" : "dark";

  setTheme(theme);
};

// Function to initialize the theme when page loads
const initTheme = () => {
  // Get the stored theme from Local storage or use the system theme
  const storedTheme = localStorage.getItem("theme") || getSystemTheme();

  toggle.checked = storedTheme === "light";

  setTheme(storedTheme);
};

initTheme();

toggle.addEventListener("change", handleToggle);
