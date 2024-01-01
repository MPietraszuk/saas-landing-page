// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqContainer = document.querySelector('.faq-content');

  faqContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.faq-group-header');

    // Stops null in console
    if (!groupHeader) return;

    // Setup Toggle
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.faq-group-body');
    const icon = groupHeader.querySelector('i');

    //Toggle icon
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

    // Toggle visibility of faq-group-body
    groupBody.classList.toggle('open');

    // Close other open faq-group-body
    const otherGroups = faqContainer.querySelectorAll('.faq-group');
    
    otherGroups.forEach((otherGroup) => {
      // filter out the one clicked on
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.faq-group-body');
        const otherIcon = otherGroup.querySelector('.faq-group-header i');

        otherGroupBody.classList.remove('open');
        // Returns the starting minus to plus
        otherIcon.classList.remove('fa-minus');
        otherIcon.classList.add('fa-plus');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('#Hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});