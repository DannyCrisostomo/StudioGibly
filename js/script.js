  // hamburguesa
  var menu = document.querySelector('.hamburger');
  function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
  }

  menu.addEventListener('click', toggleMenu, false);

  // scroll header
  window.addEventListener('scroll', function() {
    var header = document.getElementById('header-fixed');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ScrollEspia - header
const d = document;
const ScrollEspia = () => {
    const sections = d.querySelectorAll('section[data-scroll]');
    const header = d.querySelector('header[data-scroll]');

    const cb = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const correspondingLink = d.querySelector(`a[data-scroll][href="#${id}"]`);

            if (entry.isIntersecting) {
                correspondingLink.classList.add('active');
            } else {
                correspondingLink.classList.remove('active');
            }
        });
    };

    const observer = new IntersectionObserver(cb, {
        rootMargin: '-280px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Observar el encabezado también
    observer.observe(header);
};

ScrollEspia();
