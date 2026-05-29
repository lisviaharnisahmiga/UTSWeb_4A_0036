function filterProjects(type) {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        if (type === 'all' || item.dataset.type === type) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('Thank you for contacting us! We will get back to you soon.');

    contactForm.reset();
});    