document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    const currentPath = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');

    const setActiveLink = (links) => {
        links.forEach(link => {
            const linkPath = link.getAttribute('href').split('/').pop();
            

            if (currentPath === '' || currentPath === 'index.html') {
                if (linkPath === 'index.html') {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            } else {
                if (linkPath === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    };

    const setParentServiceLinkActive = () => {
        const servicePages = [
            'executive_search.html',
            'hr_advisory.html',
            'leadership_development.html',
            'executive_coaching.html',
            'mentoring_programs.html',
            'services.html'
        ];
        if (servicePages.includes(currentPath)) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === 'services.html') {
                    link.classList.add('active');
                }
            });
            mobileNavLinks.forEach(link => {
                 if (link.getAttribute('href') === 'services.html') {
                    link.classList.add('active');
                }
            });
        }
    };
    

    navLinks.forEach(link => link.classList.remove('active'));
    mobileNavLinks.forEach(link => link.classList.remove('active'));
    dropdownLinks.forEach(link => link.classList.remove('active'));

    setActiveLink(navLinks);
    setActiveLink(mobileNavLinks);
    setActiveLink(dropdownLinks);
    setParentServiceLinkActive();


    if (currentPath !== '' && currentPath !== 'index.html') {
        document.querySelector('.nav-link[href="index.html"]')?.classList.remove('active');
        document.querySelector('.mobile-nav-link[href="index.html"]')?.classList.remove('active');
    }
});
