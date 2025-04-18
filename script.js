document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = darkModeToggle.querySelector('i');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');
    const mobileToggle = document.getElementById('mobileToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    
    // Check for saved theme preference
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeIcon.classList.replace('bi-moon', 'bi-sun');
    }

    // Dark mode toggle handler
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            darkModeIcon.classList.replace('bi-sun', 'bi-moon');
        } else {
            document.body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            darkModeIcon.classList.replace('bi-moon', 'bi-sun');
        }
    });

    // Sidebar toggle handlers
    if (sidebar && backdrop && mobileToggle && closeSidebar) {
        const openSidebar = () => {
            sidebar.classList.add('open');
            backdrop.classList.add('show');
            mobileToggle.classList.add('hidden');
        };

        const closeSidebarMenu = () => {
            sidebar.classList.remove('open');
            backdrop.classList.remove('show');
            mobileToggle.classList.remove('hidden');
        };

        mobileToggle.addEventListener('click', openSidebar);
        closeSidebar.addEventListener('click', closeSidebarMenu);
        backdrop.addEventListener('click', closeSidebarMenu);

        // Cleanup on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 769) {
                closeSidebarMenu();
            }
        });
    }
});