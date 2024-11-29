document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar li a');
    
    navbarLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.backgroundColor = '#ccc';  
            link.style.color = 'black';
        }
    });
});
