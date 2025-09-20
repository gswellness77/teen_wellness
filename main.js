import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="app-container">
    <nav class="navbar">
      <div class="nav-brand">
        <h2>Teen Wellness Hub</h2>
      </div>
      <ul class="nav-menu">
        <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#wellness-guide" class="nav-link">Wellness Guide</a></li>
        <li class="nav-item"><a href="#facts-stats" class="nav-link">Facts & Stats</a></li>
        <li class="nav-item"><a href="#resources" class="nav-link">Resources</a></li>
        <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#wellness-template" class="nav-link">Wellness Day Template</a></li>
      </ul>
      <div class="nav-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>

    <main class="main-content">
      <section id="home" class="hero-section">
        <div class="hero-content">
          <h1>Teen Mental Health & Wellness Hub</h1>
          <p class="hero-subtitle">Supporting teen mental wellness through practical tools and resources</p>
          <div class="hero-badges">
            <span class="badge">🏅 Girl Scout Silver Award Project</span>
          </div>
          <div class="cta-buttons">
            <a href="#wellness-guide" class="btn btn-primary">Get Started</a>
            <a href="#resources" class="btn btn-secondary">Find Resources</a>
          </div>
        </div>
      </section>

      <section id="wellness-guide" class="section">
        <div class="container">
          <h2>Wellness Guide</h2>
          <p>Discover evidence-based strategies and tools to support teen mental health.</p>
        </div>
      </section>

      <section id="facts-stats" class="section">
        <div class="container">
          <h2>Facts & Statistics</h2>
          <p>Understanding the current state of teen mental health through research and data.</p>
        </div>
      </section>

      <section id="resources" class="section">
        <div class="container">
          <h2>Resources</h2>
          <p>Connect with mental health professionals and support services.</p>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container">
          <h2>About This Project</h2>
          <p>Created by Girl Scout Troop #31083 to address the growing mental health crisis among teenagers.</p>
        </div>
      </section>

      <section id="wellness-template" class="section">
        <div class="container">
          <h2>Wellness Day Template</h2>
          <p>Practical tools for organizing wellness events in schools and communities.</p>
        </div>
      </section>
    </main>
  </div>
`

// Mobile menu toggle functionality
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});