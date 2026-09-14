/**
 * ============================================================================
 * Ayush Kumar Portfolio - Main Interactivity & UI Controllers
 * Features:
 *  - Theme Toggle (Dark / Light with LocalStorage persistence)
 *  - Dynamic section hydration from data.js
 *  - Scrollspy with active navigation indicator
 *  - Project filtering & interactive detail modals
 *  - Skill category filtering
 *  - Certificate modal viewer
 *  - Interactive contact form with client-side validation & toast feedback
 *  - Back-to-top floating button & scroll progress bar
 *  - Mobile responsive drawer menu
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // SVG Icon Map for high-performance crisp icons
  const icons = {
    python: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5z"></path><path d="M12 22a5 5 0 0 0 5-5v-3H7v3a5 5 0 0 0 5 5z"></path><circle cx="9" cy="5" r="1"></circle><circle cx="15" cy="19" r="1"></circle></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    javascript: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M16 8v8a2 2 0 0 1-2 2h-1"></path><path d="M8 15a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-4"></path></svg>`,
    brain: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04z"></path></svg>`,
    sparkles: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>`,
    database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    layout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>`,
    monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>`,
    "git-branch": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>`,
    terminal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line></svg>`,
    zap: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    "book-open": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
    cpu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" x2="22" y1="12" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`,
    "check-circle": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    "arrow-up-right": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" x2="17" y1="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
  };

  const getIcon = (key) => icons[key] || icons.code;

  // --------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('ayush_portfolio_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('ayush_portfolio_theme', newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} theme`);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Navigation, Sticky Header & Scroll Progress
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Navbar shadow & background
    if (scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll progress bar
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0 && scrollProgress) {
      const progressPercent = (scrollY / docHeight) * 100;
      scrollProgress.style.width = `${progressPercent}%`;
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }

    // Scrollspy active state
    updateScrollspy();
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Hamburger & Drawer
  const hamburger = document.getElementById('hamburger');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');

  function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    mobileNavDrawer.classList.toggle('active');
    mobileNavOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNavDrawer.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('active');
    mobileNavDrawer.classList.remove('active');
    mobileNavOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMobileMenu);
  if (mobileNavOverlay) mobileNavOverlay.addEventListener('click', closeMobileMenu);

  // Close mobile drawer when clicking any nav link
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Scrollspy logic
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateScrollspy() {
    const scrollPosition = window.scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. Hydrate Education Timeline
  // --------------------------------------------------------------------------
  const educationTimeline = document.getElementById('education-timeline');
  if (educationTimeline && portfolioData.education) {
    educationTimeline.innerHTML = portfolioData.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="timeline-card glass-card">
          <div class="timeline-header">
            <h3 class="timeline-degree">${item.degree}</h3>
            <span class="timeline-year">${item.year}</span>
          </div>
          <div class="timeline-institution">${item.institution}</div>
          <div class="timeline-meta">
            <span class="meta-chip">Branch: ${item.branch}</span>
            <span class="meta-chip">Score: ${item.cgpa}</span>
          </div>
          <div class="timeline-subjects">
            <div class="subjects-label">Relevant Focus & Coursework</div>
            <div class="subject-tags">
              ${item.subjects.map(subj => `<span class="subject-tag">${subj}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 4. Hydrate Skills Section & Filtering
  // --------------------------------------------------------------------------
  const skillsGrid = document.getElementById('skills-grid');
  const skillFilters = document.querySelectorAll('.skill-filter-btn');

  function renderSkills(filter = 'all') {
    if (!skillsGrid || !portfolioData.skills) return;

    const filtered = filter === 'all' 
      ? portfolioData.skills 
      : portfolioData.skills.filter(s => s.category === filter);

    skillsGrid.innerHTML = filtered.map(skill => {
      const levelClass = `level-${skill.level.toLowerCase().replace(/\s+/g, '-')}`;
      return `
        <div class="skill-card glass-card" data-category="${skill.category}">
          <div>
            <div class="skill-header">
              <div class="skill-icon-wrapper">
                ${getIcon(skill.icon)}
              </div>
              <span class="skill-level-badge ${levelClass}">${skill.level}</span>
            </div>
            <h4 class="skill-name">${skill.name}</h4>
          </div>
          <p class="skill-desc">${skill.description}</p>
        </div>
      `;
    }).join('');
  }

  renderSkills('all');

  skillFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      skillFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderSkills(cat);
    });
  });

  // --------------------------------------------------------------------------
  // 5. Hydrate Projects & Featured Showcase
  // --------------------------------------------------------------------------
  const featuredProjectsContainer = document.getElementById('featured-projects');
  const allProjectsContainer = document.getElementById('all-projects');

  function renderProjects() {
    if (!portfolioData.projects) return;

    const featured = portfolioData.projects.filter(p => p.featured);
    const regular = portfolioData.projects;

    if (featuredProjectsContainer) {
      featuredProjectsContainer.innerHTML = featured.map(createProjectCardMarkup).join('');
    }

    if (allProjectsContainer) {
      allProjectsContainer.innerHTML = regular.map(createProjectCardMarkup).join('');
    }

    // Attach View Details Click Listeners
    document.querySelectorAll('.btn-view-project').forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = btn.getAttribute('data-id');
        openProjectModal(projectId);
      });
    });
  }

  function createProjectCardMarkup(project) {
    const liveDemoBtn = project.liveDemo 
      ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
           <span>Live Demo</span> ${getIcon('external')}
         </a>`
      : '';

    const featuredTag = project.featured ? `<div class="featured-badge">Featured</div>` : '';

    const thumbnailMarkup = project.image 
      ? `<img src="${project.image}" alt="${project.name}" class="project-thumbnail-img" loading="lazy">`
      : `<div class="project-thumbnail-graphic">
           ${getIcon(project.category === 'ai' ? 'brain' : (project.category === 'algorithms' ? 'git-branch' : 'code'))}
           <span style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 600; color: var(--text-accent);">
             ${project.category.toUpperCase()}
           </span>
         </div>`;

    return `
      <div class="project-card glass-card" data-id="${project.id}">
        ${featuredTag}
        <div class="project-thumbnail">
          ${thumbnailMarkup}
        </div>
        <div class="project-body">
          <h3 class="project-title">${project.name}</h3>
          <p class="project-desc">${project.shortDescription}</p>

          <div class="project-info-block">
            <div class="info-label">Problem Solved</div>
            <div class="info-content">${project.problemSolved}</div>
          </div>

          <div class="project-tech-stack">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>

          <div class="project-actions">
            ${liveDemoBtn}
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-secondary">
              ${getIcon('github')} <span>GitHub</span>
            </a>
            <button class="btn btn-sm btn-outline btn-view-project" data-id="${project.id}">
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderProjects();

  // --------------------------------------------------------------------------
  // 6. Hydrate Achievements
  // --------------------------------------------------------------------------
  const achievementsGrid = document.getElementById('achievements-grid');
  if (achievementsGrid && portfolioData.achievements) {
    achievementsGrid.innerHTML = portfolioData.achievements.map((item, index) => `
      <div class="achievement-card glass-card">
        <div>
          <div class="achievement-category">
            ${getIcon('award')} <span>${item.category}</span>
          </div>
          <h4 class="achievement-title">${item.title}</h4>
          <div class="achievement-event">${item.organization}</div>
          <div class="achievement-date">${item.date}</div>
          <p class="achievement-desc">${item.description}</p>
        </div>
        <div>
          <button class="btn btn-sm btn-outline btn-proof-modal" data-index="${index}">
            <span>View Details / Proof</span>
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.btn-proof-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        const item = portfolioData.achievements[index];
        openUniversalModal(`
          <h3 style="font-size: 1.5rem; margin-bottom: 12px;">${item.title}</h3>
          <p style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 8px;">${item.organization}</p>
          <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Issued: ${item.date} | ${item.category}</p>
          <div style="background: rgba(255,255,255,0.04); padding: 18px; border-radius: var(--radius-md); border-left: 3px solid var(--accent-amber); margin-bottom: 24px;">
            <p style="color: var(--text-secondary); line-height: 1.6;">${item.description}</p>
          </div>
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button class="btn btn-sm btn-secondary modal-close-trigger">Close</button>
          </div>
        `);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. Hydrate Certifications
  // --------------------------------------------------------------------------
  const certsGrid = document.getElementById('certifications-grid');
  if (certsGrid && portfolioData.certifications) {
    certsGrid.innerHTML = portfolioData.certifications.map((cert, index) => `
      <div class="cert-card glass-card">
        <div>
          <div class="cert-header">
            <div class="cert-icon-badge">
              ${getIcon('award')}
            </div>
            <span class="cert-date">${cert.date}</span>
          </div>
          <h4 class="cert-name">${cert.name}</h4>
          <div class="cert-issuer">${cert.organization}</div>
          <div class="cert-topics">
            <div class="subjects-label">Skills / Topics Covered</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary);">${cert.topics}</p>
          </div>
        </div>
        <div>
          <div class="cert-credential-id">Credential ID: ${cert.credentialId}</div>
          <button class="btn btn-sm btn-primary btn-view-cert" data-index="${index}" style="width: 100%;">
            <span>View Certificate</span> ${getIcon('external')}
          </button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.btn-view-cert').forEach(btn => {
      btn.addEventListener('click', () => {
        const index = btn.getAttribute('data-index');
        const cert = portfolioData.certifications[index];
        const certImageMarkup = cert.image 
          ? `<div style="max-height: 260px; overflow: hidden; border-radius: var(--radius-md); border: 1px solid var(--border-card); margin-bottom: 20px; box-shadow: var(--shadow-md);">
               <img src="${cert.image}" alt="${cert.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
             </div>`
          : '';

        openUniversalModal(`
          ${certImageMarkup}
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--gradient-subtle); border: 1px solid var(--border-hover); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: var(--accent-primary);">
              ${getIcon('award')}
            </div>
            <h3 style="font-size: 1.5rem; margin-bottom: 6px;">${cert.name}</h3>
            <p style="color: var(--accent-cyan); font-weight: 600;">${cert.organization}</p>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 20px; margin-bottom: 24px;">
            <div style="margin-bottom: 12px;">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Completion Date</span>
              <p style="font-weight: 600; color: var(--text-primary);">${cert.date}</p>
            </div>
            <div style="margin-bottom: 12px;">
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Topics Covered</span>
              <p style="color: var(--text-secondary); font-size: 0.92rem;">${cert.topics}</p>
            </div>
            <div>
              <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">Credential Identifier</span>
              <p style="font-family: var(--font-mono); color: var(--text-accent);">${cert.credentialId}</p>
            </div>
          </div>
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <button class="btn btn-sm btn-secondary modal-close-trigger">Close</button>
            <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
              <span>Open Verification Link</span> ${getIcon('external')}
            </a>
          </div>
        `);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 8. Hydrate Learning Journey
  // --------------------------------------------------------------------------
  const journeyColumnsContainer = document.getElementById('journey-columns');
  if (journeyColumnsContainer && portfolioData.journey) {
    const { stage1, stage2, stage3 } = portfolioData.journey;
    const stages = [stage1, stage2, stage3];

    journeyColumnsContainer.innerHTML = stages.map(stage => `
      <div class="journey-col">
        <div class="journey-col-header ${stage.highlight ? 'active-col' : ''}">
          <div class="journey-col-icon" style="background: var(--gradient-subtle); color: ${stage.highlight ? 'var(--accent-primary)' : 'var(--accent-cyan)'};">
            ${getIcon(stage.icon)}
          </div>
          <div>
            <div class="journey-col-title">${stage.title}</div>
            ${stage.highlight ? `<span class="status-badge" style="margin-top: 4px; font-size: 0.72rem; padding: 2px 8px;"><span class="pulse-dot"></span> Active Focus</span>` : ''}
          </div>
        </div>
        ${stage.items.map(item => `
          <div class="journey-card glass-card ${stage.highlight ? 'active-learning-card' : ''}">
            <div class="journey-item-title">
              <span>${item.name}</span>
            </div>
            <p class="journey-item-desc">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 9. Hydrate Experience & Opportunities
  // --------------------------------------------------------------------------
  const expStatusNotice = document.getElementById('experience-status-notice');
  const expGrid = document.getElementById('experience-grid');

  if (expStatusNotice && portfolioData.experience) {
    expStatusNotice.textContent = portfolioData.experience.statusNotice;
  }

  if (expGrid && portfolioData.experience && portfolioData.experience.entries) {
    expGrid.innerHTML = portfolioData.experience.entries.map(item => `
      <div class="experience-card glass-card">
        <h4 class="experience-role">${item.role}</h4>
        <div class="experience-org">${item.organization}</div>
        <div class="experience-duration">${item.duration}</div>
        <ul class="experience-responsibilities">
          ${item.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--border-subtle);">
          <div class="subjects-label">Key Highlight</div>
          <p style="font-size: 0.88rem; color: var(--text-primary); margin-bottom: 12px;">${item.achievements}</p>
          <div class="subject-tags">
            ${item.technologies.map(t => `<span class="subject-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 10. Hydrate Clubs & Activities
  // --------------------------------------------------------------------------
  const activitiesGrid = document.getElementById('activities-grid');
  if (activitiesGrid && portfolioData.activities) {
    activitiesGrid.innerHTML = portfolioData.activities.map(act => `
      <div class="activity-card glass-card">
        <div>
          <div class="activity-header">
            <h4 class="activity-role">${act.role}</h4>
          </div>
          <div class="activity-org">${act.organization}</div>
          <div class="activity-duration">${act.duration}</div>
          <p class="activity-desc">${act.description}</p>
        </div>
        <div class="activity-contribution">
          <strong style="color: var(--accent-emerald); font-size: 0.8rem; text-transform: uppercase; font-family: var(--font-mono); display: block; margin-bottom: 2px;">Key Contribution:</strong>
          ${act.contribution}
        </div>
      </div>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 11. Hydrate Online Profiles
  // --------------------------------------------------------------------------
  const profilesGrid = document.getElementById('profiles-grid');
  if (profilesGrid && portfolioData.profiles) {
    profilesGrid.innerHTML = portfolioData.profiles.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="profile-card glass-card">
        <div class="profile-icon">
          ${getIcon(p.icon)}
        </div>
        <div class="profile-info">
          <h4>${p.platform}</h4>
          <p>${p.username}</p>
          <span style="display: inline-block; font-size: 0.72rem; padding: 2px 8px; border-radius: var(--radius-pill); background: var(--gradient-subtle); color: var(--text-accent); margin-top: 4px; border: 1px solid var(--border-hover);">
            ${p.badge}
          </span>
        </div>
        <div class="profile-arrow">
          ${getIcon('arrow-up-right')}
        </div>
      </a>
    `).join('');
  }

  // --------------------------------------------------------------------------
  // 12. Modal Handlers
  // --------------------------------------------------------------------------
  const modalBackdrop = document.getElementById('universal-modal');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openUniversalModal(contentHtml) {
    if (!modalBackdrop || !modalBody) return;
    modalBody.innerHTML = contentHtml;
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Hook internal close buttons
    modalBody.querySelectorAll('.modal-close-trigger').forEach(btn => {
      btn.addEventListener('click', closeUniversalModal);
    });
  }

  function closeUniversalModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeUniversalModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeUniversalModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeUniversalModal();
    }
  });

  function openProjectModal(projectId) {
    const project = portfolioData.projects.find(p => p.id === projectId);
    if (!project) return;

    const liveDemoBtn = project.liveDemo 
      ? `<a href="${project.liveDemo}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
           <span>Live Demo</span> ${getIcon('external')}
         </a>`
      : '';

    const modalImageMarkup = project.image 
      ? `<div style="width: 100%; max-height: 240px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 20px; border: 1px solid var(--border-card);">
           <img src="${project.image}" alt="${project.name}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
         </div>`
      : '';

    openUniversalModal(`
      ${modalImageMarkup}
      <div style="margin-bottom: 20px;">
        <span class="section-tag" style="margin-bottom: 8px;">${project.category.toUpperCase()} PROJECT</span>
        <h3 style="font-size: 1.6rem; margin-bottom: 10px;">${project.name}</h3>
        <p style="color: var(--text-secondary); line-height: 1.6;">${project.shortDescription}</p>
      </div>

      <div style="margin-bottom: 20px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 18px;">
        <h4 style="font-size: 1rem; color: var(--accent-cyan); margin-bottom: 6px;">Problem Solved</h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary);">${project.problemSolved}</p>
      </div>

      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1rem; margin-bottom: 10px;">Key Features</h4>
        <ul style="list-style: disc; padding-left: 20px; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.6;">
          ${project.keyFeatures.map(feat => `<li style="margin-bottom: 4px;">${feat}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 20px; background: rgba(255,255,255,0.03); border-radius: var(--radius-md); padding: 16px;">
        <h4 style="font-size: 0.95rem; color: var(--accent-primary); margin-bottom: 6px;">My Contribution & Learnings</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;">${project.myContribution}</p>
        <p style="font-size: 0.88rem; color: var(--text-muted); font-style: italic;">Learnings: ${project.details.learnings}</p>
      </div>

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.95rem; margin-bottom: 8px;">Tech Stack</h4>
        <div class="project-tech-stack">
          ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end; border-top: 1px solid var(--border-subtle); padding-top: 16px;">
        <button class="btn btn-sm btn-secondary modal-close-trigger">Close</button>
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
          ${getIcon('github')} <span>GitHub Repo</span>
        </a>
        ${liveDemoBtn}
      </div>
    `);
  }

  // Resume Modal & Buttons
  const viewResumeBtns = document.querySelectorAll('.btn-view-resume');
  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openUniversalModal(`
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--gradient-subtle); border: 1px solid var(--border-hover); display: flex; align-items: center; justify-content: center; margin: 0 auto 14px; color: var(--accent-primary);">
            ${getIcon('award')}
          </div>
          <h3 style="font-size: 1.6rem; margin-bottom: 4px;">Ayush Kumar - Professional Resume</h3>
          <p style="color: var(--text-secondary);">B.Tech Computer Science & Engineering (1st Year)</p>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-card); border-radius: var(--radius-md); padding: 24px; margin-bottom: 24px;">
          <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 8px;">Executive Summary</h4>
          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
            ${portfolioData.personal.bio}
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.88rem; color: var(--text-secondary);">
            <div><strong>Education:</strong> B.Tech CSE (2025-2029)</div>
            <div><strong>Primary Focus:</strong> AI/ML & Core Software Dev</div>
            <div><strong>Location:</strong> ${portfolioData.personal.location}</div>
            <div><strong>Email:</strong> ${portfolioData.personal.email}</div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; justify-content: flex-end;">
          <button class="btn btn-sm btn-secondary modal-close-trigger">Close</button>
          <a href="#download-resume" class="btn btn-sm btn-primary btn-download-resume-action">
            <span>Download Official PDF</span>
          </a>
        </div>
      `);

      document.querySelector('.btn-download-resume-action')?.addEventListener('click', (ev) => {
        ev.preventDefault();
        showToast("Resume download initiated. Place your custom PDF in assets/resume.pdf.");
        closeUniversalModal();
      });
    });
  });

  // Download Resume Trigger buttons
  document.querySelectorAll('.btn-download-resume').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast("Resume download requested! Connect your PDF file in data.js.");
    });
  });

  // --------------------------------------------------------------------------
  // 13. Contact Form & Client-Side Validation
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast("Please fill in your Name, Email, and Message.", "error");
        return;
      }

      // Email format regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
      }

      // Successful simulated dispatch
      showToast(`Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 14. Toast Notification Utility
  // --------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-error'}`;
    toast.innerHTML = `
      ${type === 'success' ? getIcon('check-circle') : getIcon('zap')}
      <span>${message}</span>
    `;

    container.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  }

  window.showToast = showToast;
});
