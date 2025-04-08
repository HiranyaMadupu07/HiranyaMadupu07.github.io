document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('bd-theme');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    function setTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);
    }

    themeToggle.addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });

    setTheme(currentTheme);
});
