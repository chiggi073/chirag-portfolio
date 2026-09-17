document.addEventListener('DOMContentLoaded', () => {
  // Staggered letter animation for the big hero name
  let delayIndex = 0;
  const bigNameLines = document.querySelectorAll('.big-name .line');

  bigNameLines.forEach(line => {
    const text = line.getAttribute('data-text');
    line.innerHTML = '';
    [...text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'letter';
      if (ch === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.textContent = ch;
      }
      span.style.animationDelay = (delayIndex * 0.045) + 's';
      delayIndex++;
      line.appendChild(span);
    });
  });

  // IntersectionObserver for scroll reveal elements
  const observerOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Mobile menu toggle logic
  const burgerBtn = document.getElementById('burgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Theme Switching Logic
  window.setTheme = function(themeClass) {
    document.body.className = '';
    if (themeClass && themeClass !== 'default') {
      document.body.classList.add(themeClass);
    }
    showToast('Theme accent updated! ✨');
  };

  // Interactive Table Output Toggle for Project Code Snippets
  window.toggleDemoTable = function(tableId) {
    const table = document.getElementById(tableId);
    if (table) {
      table.classList.toggle('active');
    }
  };

  // Copy Email to clipboard functionality
  window.copyEmail = function() {
    const email = 'chirag.nauhwar07@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Copied email: chirag.nauhwar07@gmail.com! 📋');
    }).catch(err => {
      showToast('Email: chirag.nauhwar07@gmail.com');
    });
  };

  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
});
